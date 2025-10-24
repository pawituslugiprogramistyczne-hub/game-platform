import Link from 'next/link';
import { Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Game } from '@/lib/supabase';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link href={game.path}>
      <Card className="group h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Gamepad2 className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl font-semibold group-hover:text-gradient transition-all">
              {game.name}
            </CardTitle>
          </div>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {game.description || 'No description available.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-primary font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Play Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
