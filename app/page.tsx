import { GameSelection } from '@/components/game-selection';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Friends&apos; Party Game Hub</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-gradient">Welcome</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose your game and let the fun begin! Perfect for parties and friendly gatherings.
          </p>
        </div>

        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
              Game Selection
            </h2>
            <p className="text-muted-foreground">
              Pick a game to start playing with your friends
            </p>
          </div>

          <GameSelection />
        </section>
      </div>
    </main>
  );
}
