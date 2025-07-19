import Image from 'next/image';
import Link from 'next/link';
import type { IconType } from 'react-icons';
import { Button } from '@/components/ui/button';

interface ProjectProps {
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  stack: IconType[];
  image?: string;
}

export function ProjectComponent({
  demoUrl,
  description,
  image,
  repoUrl,
  title,
  stack,
}: ProjectProps) {
  return (
    <div className="max-h-[575px] max-w-[509px] border border-neutral-200 dark:border-neutral-700">
      <div className="relative h-[309px] w-full">
        <Image
          alt="project preview"
          className="object-cover"
          fill
          src={image ? image : '/base.png'}
        />
      </div>
      <div className="px-4 py-6">
        <h2 className="font-bold font-sora text-2xl leading-9">{title}</h2>
        <p className="line-clamp-3 text-ellipsis text-neutral-600 text-sm dark:text-neutral-400">
          {description}
        </p>

        <div className="mt-4 flex gap-4">
          {stack.map((Icon) => (
            <Icon key={Icon.name} size={24} />
          ))}
        </div>

        <div className="mt-8 flex h-11 gap-4">
          <Button
            asChild
            className="h-full font-bold text-xs dark:bg-[#DDD6FE] dark:hover:bg-[#DDD6FE]/90"
          >
            <Link href={repoUrl}>VER CÓDIGO</Link>
          </Button>
          <Button
            asChild={!!demoUrl}
            className="h-full border border-primary font-bold text-xs disabled:cursor-not-allowed disabled:opacity-60"
            disabled={!demoUrl}
            variant="outline"
          >
            <Link href={demoUrl || ''}>VER DEMO</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
