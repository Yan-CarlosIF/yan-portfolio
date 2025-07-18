import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
  SiFastify,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReactquery,
  SiShadcnui,
  SiSqlite,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/context/theme-provider';
import { Infos } from './components/infos';
import { ProjectComponent } from './components/project';

export default function Home() {
  return (
    <ThemeProvider>
      <Infos />
      <div className="mt-16 flex flex-col items-center justify-center gap-2 font-medium text-neutral-600 text-sm leading-5">
        Scroll
        <ArrowDown
          className="animate-bounce text-black dark:text-neutral-50"
          size={24}
        />
      </div>
      <main
        className="my-12 flex w-full max-w-[1088px] flex-col items-center justify-center"
        id="projects"
      >
        <h1 className="pb-20 text-center font-bold font-sora text-3xl md:text-4xl">
          Projetos
        </h1>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <ProjectComponent
            demoUrl="https://games-store-dashboard.vercel.app/"
            description="Este projeto consiste em um dashboard interativo desenvolvido com Next.js, criado para estudo pessoal e para a disciplina Banco de Dados I do curso de Bacharelado em Ciência da Computação."
            image="/projects-images/game-store.png"
            repoUrl="https://github.com/Yan-CarlosIF/games-store-dashboard"
            stack={[
              SiNextdotjs,
              RiTailwindCssFill,
              FaNodeJs,
              SiPrisma,
              SiPostgresql,
              SiFastify,
              SiTypescript,
              SiShadcnui,
            ]}
            title="Game Store Dashboard"
          />
          <ProjectComponent
            demoUrl="https://contact-management-rho-green.vercel.app/"
            description="Sistema de gerenciamento de contatos feito em React, TypeScript, Tailwind, PostgreSQL, Node.js e Prisma com Fastify."
            image="/projects-images/contact-m.png"
            repoUrl="https://github.com/Yan-CarlosIF/contact-management"
            stack={[
              SiVite,
              FaReact,
              RiTailwindCssFill,
              FaNodeJs,
              SiPrisma,
              SiPostgresql,
              SiFastify,
              SiReactquery,
              SiShadcnui,
            ]}
            title="Contact Management"
          />
          <ProjectComponent
            demoUrl="https://github-blog-steel-kappa.vercel.app"
            description="Projeto de um blog baseado no perfil do github usando React, Tailwind, TypeScript e a API do github."
            image="/projects-images/Blog.png"
            repoUrl="https://github.com/Yan-CarlosIF/github-blog"
            stack={[SiVite, FaReact, RiTailwindCssFill, FaNodeJs, SiTypescript]}
            title="Github Blog"
          />
          <ProjectComponent
            description="Book Wise é uma aplicação Full Stack para avaliação e categorização de livros, com autenticação via GitHub, busca otimizada e interface moderna. Tecnologias utilizadas: Next.js, TypeScript, Prisma, TailwindCSS, shadcn/ui."
            image="/projects-images/book.png"
            repoUrl="https://github.com/Yan-CarlosIF/book-wise"
            stack={[
              SiNextdotjs,
              RiTailwindCssFill,
              SiPrisma,
              SiPostgresql,
              SiTypescript,
              SiShadcnui,
              SiSqlite,
            ]}
            title="Book Wise"
          />
        </div>
      </main>
      <section className="flex w-full max-w-[1088px] flex-col justify-between lg:mt-28 lg:flex-row">
        <div>
          <h1 className="font-bold font-sora text-3xl">Sobre mim!</h1>
          <p className="mt-6 block max-w-[500px] text-justify text-neutral-800 dark:text-primary">
            Sou estudante de Ciência da Computação, com foco em Desenvolvimento
            Web. Tenho paixão por criar interfaces modernas, responsivas e
            performáticas, e estou constantemente em busca de aprender novas
            tecnologias e aprimorar minhas habilidades.
          </p>

          <p className="mt-6 max-w-[500px] text-justify text-neutral-800 dark:text-primary">
            Meu objetivo é me tornar um desenvolvedor completo e competente,
            contribuindo com projetos reais e escaláveis, sempre aplicando boas
            práticas de código limpo, seguro e eficiente.
          </p>
          <Button className="mt-6 h-11 font-bold dark:bg-[#8b5cf6] dark:text-primary dark:hover:bg-[#8b5cf6]/80">
            LER MAIS
          </Button>
        </div>
        <div className="relative mt-14 ml-12 h-[250px] w-[250px] rounded-xl bg-[#8b5cf6] lg:mt-0 lg:ml-0 lg:h-[300px] lg:w-[300px]">
          <Image
            alt="Yan Carlos"
            className="absolute top-8 right-8 rounded-xl"
            height={200}
            src="https://github.com/Yan-CarlosIF.png"
            width={300}
          />
        </div>
      </section>
    </ThemeProvider>
  );
}
