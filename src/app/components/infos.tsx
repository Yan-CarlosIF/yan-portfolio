import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export function Infos() {
  return (
    <section className="mt-20 flex max-h-[600px] w-full max-w-[1440px] items-center">
      <div>
        <h1 className="font-bold font-sora text-[2rem] leading-12 lg:text-5xl">
          Olá, eu me chamo Yan Carlos
        </h1>
        <h2 className="mt-2 font-bold font-sora text-[1.75rem] text-purple-900 leading-9 md:text-3xl dark:text-secondary">
          Desenvolvedor Web
        </h2>

        <span className="mt-6 block max-w-[500px] text-justify text-neutral-800 md:max-w-2xl md:text-xl dark:text-neutral-50">
          Sou desenvolvedor Web e estudante de Ciência da Computação, focado na
          criação de aplicações modernas, responsivas e performáticas.
        </span>

        <div className="mt-6 flex h-11 gap-4 md:mt-10">
          <Button
            asChild
            className="size-11 bg-primary hover:bg-[#7C3AED] dark:bg-[#DDD6FE]"
          >
            <Link href="https://github.com/Yan-CarlosIF">
              <FaGithub className="size-6" />
            </Link>
          </Button>
          <Button
            asChild
            className="size-11 bg-primary hover:bg-[#7C3AED] dark:bg-[#DDD6FE]"
          >
            <Link href="https://www.linkedin.com/in/yancarlosribeiro">
              <FaLinkedin className="size-6" />
            </Link>
          </Button>
          <Button
            asChild
            className="h-full rounded-sm border-primary font-bold transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
            variant="outline"
          >
            <a href="#contact">Entre em contato</a>
          </Button>
        </div>
      </div>
      <Image
        alt="base"
        className="ml-24 hidden object-cover xl:block"
        height={500}
        src="/Vector.png"
        width={500}
      />
    </section>
  );
}
