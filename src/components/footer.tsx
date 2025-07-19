import { ArrowUp, Mail } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export function FooterComponent() {
  return (
    <footer className="mt-32 flex max-w-[500px] flex-col" id="contact">
      <h1 className="text-center font-bold font-sora text-3xl">Contato</h1>
      <p className="mt-4 text-center font-medium text-neutral-900 text-sm leading-6 dark:text-primary">
        Gostou do meu trabalho?
      </p>
      <p className=" text-justify font-medium text-neutral-900 text-sm leading-6 dark:text-primary">
        Entre em contato pelas minhas redes sociais!
      </p>
      <div className="mt-6 flex h-11 justify-center gap-6">
        <Button
          asChild
          className="size-11 dark:bg-primary dark:text-black dark:hover:bg-primary/90"
          variant="secondary"
        >
          <Link href="mailto:yan312005@gmail.com">
            <Mail className="size-6" />
          </Link>
        </Button>
        <Button
          asChild
          className="size-11 dark:bg-primary dark:text-black dark:hover:bg-primary/90"
          variant="secondary"
        >
          <Link href="https://github.com/Yan-CarlosIF">
            <FaGithub className="size-6" />
          </Link>
        </Button>
        <Button
          asChild
          className="size-11 dark:bg-primary dark:text-black dark:hover:bg-primary/90"
          variant="secondary"
        >
          <Link href="https://www.linkedin.com/in/yancarlosribeiro">
            <FaLinkedin className="size-6" />
          </Link>
        </Button>
      </div>
      <Button
        asChild
        className="group mx-auto mt-6 font-medium text-black text-md dark:text-white"
        variant="link"
      >
        <a href="#home">
          Voltar para o topo
          <ArrowUp
            className="transition-transform group-hover:animate-caret-blink"
            size={16}
          />
        </a>
      </Button>
      <p className="mt-4 text-center text-neutral-900 text-sm dark:text-primary">
        © Desenvolvido por <strong className="text-primary">Yan Carlos</strong>{' '}
        ✌🏽
      </p>
    </footer>
  );
}
