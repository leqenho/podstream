import { Button } from "@/components/ui/button";
import SwipeList from "@/components/SwipeList";
import { Music, Cloud, Lock, Share2, Wifi, Zap } from "lucide-react";

/**
 * Design Philosophy: Modern Podcast App
 * - Clean, minimalist interface with focus on content
 * - Gradient accents for visual hierarchy
 * - Smooth animations and transitions
 * - Offline-first functionality highlighted
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-50 dark:to-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">PodStream</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              Sobre
            </a>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Começar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-950 rounded-full mb-6">
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">🎙️ Sua aplicação de podcasts moderna</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ouça seus podcasts favoritos em qualquer lugar
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              PodStream é uma Progressive Web Application moderna que permite gerenciar, ouvir e organizar seus podcasts com sincronização em tempo real, tudo funcionando offline.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Instalar Agora
              </Button>
              <Button size="lg" variant="outline">
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm font-medium text-muted-foreground">Offline First</div>
            </div>
            <div className="bg-white dark:bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-purple-600 mb-2">0ms</div>
              <div className="text-sm font-medium text-muted-foreground">Carregamento Instant</div>
            </div>
            <div className="bg-white dark:bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
              <div className="text-sm font-medium text-muted-foreground">Podcasts Ilimitados</div>
            </div>
            <div className="bg-white dark:bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-purple-600 mb-2">A+</div>
              <div className="text-sm font-medium text-muted-foreground">Lighthouse Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <h2 className="text-4xl font-bold mb-12 text-center">Recursos Principais</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Cloud, title: "Sincronização em Nuvem", desc: "Seus dados são sincronizados automaticamente entre todos os seus dispositivos" },
            { icon: Lock, title: "Privado e Seguro", desc: "Seus podcasts e preferências são privados e criptografados" },
            { icon: Share2, title: "Compartilhe Facilmente", desc: "Compartilhe seus podcasts favoritos com amigos e familiares" },
            { icon: Wifi, title: "Modo Offline", desc: "Ouça seus podcasts mesmo sem conexão com a internet" },
            { icon: Zap, title: "Rápido e Responsivo", desc: "Interface otimizada para desempenho máximo em qualquer dispositivo" },
            { icon: Music, title: "Descobrir Novos", desc: "Descubra novos podcasts baseado em suas preferências" },
          ].map((feature, i) => (
            <div key={i} className="bg-white dark:bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Swipe List Demo Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <h2 className="text-4xl font-bold mb-4 text-center">Demo Interativa - Lista com Swipe</h2>
        <p className="text-center text-muted-foreground mb-12">
          Teste a funcionalidade de lista: deslize para esquerda para deletar ou clique no ícone de lixeira
        </p>
        <div className="flex justify-center">
          <SwipeList />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-lg mb-8 opacity-90">
            Instale o PodStream agora e comece a gerenciar seus podcasts favoritos
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Instalar Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 PodStream. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
