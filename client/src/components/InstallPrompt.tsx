import { Download, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useInstallPrompt } from '@/hooks/useInstallPrompt';

export default function InstallPrompt() {
  const { canInstall, isIOS, isInstalled, install } = useInstallPrompt();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || isInstalled) {
    return null;
  }

  if (isIOS) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-500 text-white p-4 shadow-lg animate-in slide-in-from-bottom-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex-1">
            <p className="font-semibold text-sm">Instalar PodStream</p>
            <p className="text-xs opacity-90">Toque em Compartilhar e selecione &quot;Adicionar à Tela de Início&quot;</p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    );
  }

  if (!canInstall) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-slate-900 rounded-lg shadow-lg p-4 max-w-sm animate-in slide-in-from-bottom-4 border border-border">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-sm text-foreground mb-1">
            Instalar PodStream
          </h3>
          <p className="text-xs text-muted-foreground">
            Instale nossa aplicação para acessar offline e receber notificações.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X size={18} />
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="flex-1"
        >
          Depois
        </Button>
        <Button
          size="sm"
          onClick={install}
          className="flex-1 gap-2"
        >
          <Download size={16} />
          Instalar
        </Button>
      </div>
    </div>
  );
}
