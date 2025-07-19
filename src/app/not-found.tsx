import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-180px)] flex-col items-center justify-center gap-5">
      <h1 className="font-bold text-3xl">Página não encontrada</h1>
      <Frown size={32} />
    </div>
  );
}
