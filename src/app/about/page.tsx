import Image from 'next/image';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import {
  SiExpress,
  SiFastify,
  SiJest,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { IconComponent } from '../components/icon';

export default function About() {
  return (
    <div>
      <h1 className="mt-[4.5rem] text-center font-bold font-sora text-3xl">
        Sobre mim
      </h1>

      <div className="mx-auto mt-16 flex max-w-[1100px] flex-col gap-11 lg:flex-row-reverse lg:px-6">
        <span>
          <h2 className="font-bold text-xl">Minha história...</h2>
          <p className="mt-6 text-justify">
            Sou desenvolvedor Front End e estudante de Ciência da Computação,
            natural de Aracati, no Ceará. Meu foco é o desenvolvimento web, com
            paixão por criar interfaces modernas, responsivas e performáticas
            que ofereçam uma ótima experiência ao usuário. Tenho facilidade em
            aprender novas stacks e ferramentas, e estou sempre em busca de
            evoluir, seja tecnicamente ou pessoalmente.
          </p>
          <p className="mt-4 text-justify">
            Tenho experiência em aplicações web completas, atuando tanto no
            front-end quanto no back-end, o que me proporciona uma visão ampla
            da construção de produtos digitais. Domino tecnologias como React,
            Next.js, TypeScript, Node.js e PostgreSQL, sempre buscando aplicar
            boas práticas de código limpo, seguro e escalável.
          </p>
          <p className="mt-4 text-justify">
            Antes de mergulhar no mundo da tecnologia, fui atleta, uma
            experiência que me ensinou disciplina, resiliência e foco em
            evolução constante. Trago esses mesmos valores para minha carreira
            como desenvolvedor, buscando crescer um pouco mais a cada dia e
            contribuir com soluções que façam a diferença.
          </p>
        </span>
        <Image
          alt="Foto de perfil"
          className="self-center rounded-md "
          height={300}
          src="https://github.com/Yan-CarlosIF.png"
          width={400}
        />
      </div>
      <section className="mx-auto mt-20 max-w-[1050px]">
        <h2 className="text-center font-bold font-sora text-2xl">
          Minhas habilidades
        </h2>
        <p className="mt-6 text-justify">
          Tenho experiência no desenvolvimento de aplicações web completas, com
          foco em interfaces modernas, responsivas e performáticas. Atuo tanto
          no front-end quanto no back-end, aplicando boas práticas de código
          limpo, escalável e seguro. Estou sempre em busca de aprender novas
          tecnologias e evoluir como desenvolvedor.
        </p>
        <div className="mt-[4.375rem] grid grid-cols-3 justify-center gap-4 space-y-8 md:grid-cols-4 lg:grid-cols-7">
          <IconComponent
            color="#2d79c7"
            Icon={SiTypescript}
            name="TypeScript"
          />
          <IconComponent Icon={SiNextdotjs} name="Next.js" />
          <IconComponent color="#58c4dc" Icon={FaReact} name="React" />
          <IconComponent
            color="#06b6d4"
            Icon={SiTailwindcss}
            name="TailwindCSS"
          />
          <IconComponent color="#5fa04e" Icon={FaNodeJs} name="Node.js" />
          <IconComponent color="#99425b" Icon={SiJest} name="Jest" />

          <IconComponent Icon={SiExpress} name="Express" />
          <div className="lg:col-start-3">
            <IconComponent Icon={SiFastify} name="Fastify" />
          </div>
          <div>
            <IconComponent Icon={SiPrisma} name="Prisma" />
          </div>
          <div className="not-lg:col-start-2">
            <IconComponent Icon={GrMysql} name="MySQL" />
          </div>
        </div>
      </section>
    </div>
  );
}
