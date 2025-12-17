const CACHE_NAME = 'podstream-v1';
const STATIC_CACHE = 'podstream-static-v1';
const DYNAMIC_CACHE = 'podstream-dynamic-v1';

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-32x32.png',
  '/icons/icon-48x48.png',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-144x144.png',
  '/icons/icon-192x192.png',
  '/icons/icon-256x256.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  '/icons/favicon.png',
  '/icons/splash-screen.png'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    Promise.all([
      // Cache de assets estáticos
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('[Service Worker] Caching static assets');
        return cache.addAll(ASSETS_TO_CACHE).catch((error) => {
          console.warn('[Service Worker] Static cache error:', error);
          return Promise.resolve();
        });
      }),
      // Cache dinâmico vazio para ser preenchido durante uso
      caches.open(DYNAMIC_CACHE).then((cache) => {
        console.log('[Service Worker] Dynamic cache initialized');
        return Promise.resolve();
      })
    ])
  );
  self.skipWaiting();
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Manter apenas os caches atuais
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE && cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estratégia de fetch: OFFLINE-FIRST (Cache First com fallback para Network)
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requisições não-GET
  if (request.method !== 'GET') {
    return;
  }

  // Ignorar requisições externas
  if (url.origin !== self.location.origin) {
    return;
  }

  // ESTRATÉGIA OFFLINE-FIRST: Verificar cache primeiro, depois tentar rede
  event.respondWith(
    caches.match(request).then((cached) => {
      // Se encontrou no cache, retornar imediatamente
      if (cached) {
        console.log('[Service Worker] Serving from cache:', request.url);
        return cached;
      }

      // Se não está no cache, tentar buscar da rede
      return fetch(request)
        .then((response) => {
          // Validar resposta
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clonar e armazenar no cache dinâmico
          const responseClone = response.clone();
          const cacheName = request.headers.get('Accept')?.includes('text/html') 
            ? STATIC_CACHE 
            : DYNAMIC_CACHE;

          caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching new asset:', request.url);
            cache.put(request, responseClone);
          });

          return response;
        })
        .catch((error) => {
          console.log('[Service Worker] Network request failed, using offline fallback:', request.url);
          
          // Se a rede falhar, tentar encontrar no cache novamente
          return caches.match(request).then((cached) => {
            if (cached) {
              return cached;
            }

            // Se nada estiver em cache, retornar página offline
            if (request.headers.get('Accept')?.includes('text/html')) {
              return caches.match('/index.html').then((response) => {
                return response || new Response(
                  '<!DOCTYPE html><html><body style="font-family: sans-serif; text-align: center; padding: 50px;">' +
                  '<h1>Offline</h1>' +
                  '<p>Você está offline. Alguns recursos podem não estar disponíveis.</p>' +
                  '<p>A aplicação funcionará com os dados em cache.</p>' +
                  '</body></html>',
                  {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: new Headers({
                      'Content-Type': 'text/html'
                    })
                  }
                );
              });
            }

            // Para outros tipos, retornar erro genérico
            return new Response('Recurso não disponível offline', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
        });
    })
  );
});

// Lidar com mensagens do cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    console.log('[Service Worker] Clearing all caches');
    caches.keys().then((cacheNames) => {
      Promise.all(
        cacheNames.map((cacheName) => caches.delete(cacheName))
      );
    });
  }
});

// Sincronização em background (quando conexão retorna)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-podcasts') {
    console.log('[Service Worker] Background sync triggered');
    event.waitUntil(
      // Aqui você pode sincronizar dados quando a conexão retornar
      Promise.resolve()
    );
  }
});
