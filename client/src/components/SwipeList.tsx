import React, { useState, useRef } from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ListItem {
  id: string;
  text: string;
}

export default function SwipeList() {
  const [items, setItems] = useState<ListItem[]>([
    { id: '1', text: 'Podcast 1 - Teste' },
    { id: '2', text: 'Podcast 2 - Teste' },
    { id: '3', text: 'Podcast 3 - Teste' },
    { id: '4', text: 'Podcast 4 - Teste' },
  ]);

  const [lastDeletedItem, setLastDeletedItem] = useState<ListItem | null>(null);
  const [showUndo, setShowUndo] = useState(false);
  const undoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);

  const deleteItem = (item: ListItem) => {
    setLastDeletedItem(item);
    setShowUndo(true);

    if (undoTimeoutRef.current) {
      clearTimeout(undoTimeoutRef.current);
    }

    undoTimeoutRef.current = setTimeout(() => {
      setShowUndo(false);
      setLastDeletedItem(null);
      setItems(items.filter(i => i.id !== item.id));
    }, 5000);
  };

  const undoDelete = () => {
    if (lastDeletedItem) {
      setShowUndo(false);
      setLastDeletedItem(null);
      if (undoTimeoutRef.current) {
        clearTimeout(undoTimeoutRef.current);
      }
    }
  };

  const addNewItem = () => {
    const newItem: ListItem = {
      id: Date.now().toString(),
      text: `Novo Item - ${new Date().toLocaleTimeString('pt-BR')}`,
    };
    setItems([...items, newItem]);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
    currentXRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent, itemElement: HTMLDivElement) => {
    const touchX = e.touches[0].clientX;
    currentXRef.current = touchX - touchStartRef.current;

    if (currentXRef.current > 0) {
      currentXRef.current = 0;
    }

    const threshold = -70;
    if (currentXRef.current < threshold) {
      currentXRef.current = threshold + (currentXRef.current - threshold) * 0.2;
    }

    const content = itemElement.querySelector('.swipe-content') as HTMLElement;
    if (content) {
      content.style.transform = `translateX(${currentXRef.current}px)`;
    }
  };

  const handleTouchEnd = (itemElement: HTMLDivElement) => {
    const content = itemElement.querySelector('.swipe-content') as HTMLElement;
    if (!content) return;

    content.style.transition = 'transform 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)';

    const threshold = -70;
    if (currentXRef.current < threshold - 50) {
      content.style.transform = `translateX(-100%)`;
      setTimeout(() => {
        const itemId = itemElement.getAttribute('data-item-id');
        const item = items.find(i => i.id === itemId);
        if (item) deleteItem(item);
      }, 300);
    } else if (currentXRef.current < threshold / 2) {
      content.style.transform = `translateX(${threshold}px)`;
    } else {
      content.style.transform = 'translateX(0)';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Minha Lista</h2>
        <p className="text-muted-foreground text-sm">Deslize para esquerda para deletar um item</p>
      </div>

      {/* Add Button */}
      <Button
        onClick={addNewItem}
        className="w-full mb-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
      >
        + Adicionar Novo Item
      </Button>

      {/* List */}
      <div className="space-y-0 border border-border rounded-lg overflow-hidden">
        {items.map((item) => (
          <div
            key={item.id}
            data-item-id={item.id}
            className="relative overflow-hidden border-b border-border last:border-b-0"
            onTouchStart={handleTouchStart}
            onTouchMove={(e) => {
              const element = e.currentTarget;
              handleTouchMove(e, element);
            }}
            onTouchEnd={(e) => {
              const element = e.currentTarget;
              handleTouchEnd(element);
            }}
          >
            {/* Swipe Background (Delete Area) */}
            <div className="absolute inset-0 bg-red-600 flex items-center justify-end pr-5">
              <Trash2 className="w-5 h-5 text-white opacity-35" />
            </div>

            {/* Swipe Content */}
            <div className="swipe-content relative bg-background h-14 px-4 flex items-center touch-pan-y transition-transform duration-300 cursor-grab active:cursor-grabbing">
              <span className="text-foreground text-sm font-medium truncate">{item.text}</span>
            </div>

            {/* Delete Button (Direct Click) */}
            <button
              onClick={() => deleteItem(item)}
              className="absolute right-0 top-0 bottom-0 w-16 bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors"
              aria-label="Deletar item"
            >
              <Trash2 className="w-5 h-5 text-white" />
            </button>
          </div>
        ))}
      </div>

      {/* Undo Toast */}
      {showUndo && lastDeletedItem && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-4 animate-in slide-in-from-bottom-4 z-50">
          <span className="text-sm">Item removido</span>
          <button
            onClick={undoDelete}
            className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-xs hover:bg-yellow-500 transition-colors"
          >
            DESFAZER
          </button>
        </div>
      )}
    </div>
  );
}
