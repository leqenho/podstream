import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Radio, Zap, Cloud, Share2, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground">PodStream</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <Button size="sm" className="gap-2">
              <Zap className="w-4 h-4" />
              Começar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium">
            <Radio className="w-4 h-4" />
            Sua aplicação de podcasts moderna
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Ouça seus podcasts favoritos em qualquer lugar
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            PodStream é uma Progressive Web Application moderna que permite gerenciar, ouvir e organizar seus podcasts com sincronização em tempo real, tudo funcionando offline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 h-12 px-8">
              <Zap className="w-5 h-5" />
              Instalar Agora
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8">
              Saiba Mais
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</div>
              <p className="text-sm text-muted-foreground">Offline First</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">0ms</div>
              <p className="text-sm text-muted-foreground">Carregamento Instant</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">∞</div>
              <p className="text-sm text-muted-foreground">Podcasts Ilimitados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Recursos Principais</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para gerenciar seus podcasts favoritos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-foreground">Sincronização em Nuvem</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Seus dados são sincronizados automaticamente entre todos os seus dispositivos
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-foreground">Privado e Seguro</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Seus podcasts e preferências são privados e criptografados
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-foreground">Compartilhe Facilmente</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Compartilhe seus podcasts favoritos com amigos e familiares
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature 4 */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-foreground">Modo Offline</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Ouça seus podcasts mesmo sem conexão com a internet
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature 5 */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-foreground">Rápido e Responsivo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Interface otimizada para desempenho máximo em qualquer dispositivo
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature 6 */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Radio className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-foreground">Descobrir Novos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Descubra novos podcasts baseado em suas preferências
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20 md:py-32">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 md:p-20 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Instale o PodStream agora e comece a gerenciar seus podcasts favoritos
          </p>
          <Button size="lg" variant="secondary" className="gap-2 h-12 px-8">
            <Zap className="w-5 h-5" />
            Instalar Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 dark:bg-slate-900/50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-foreground">PodStream</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Seu gerenciador de podcasts moderno
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 PodStream. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="#" className="hover:text-foreground transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
