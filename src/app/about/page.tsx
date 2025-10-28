import type { Metadata } from "next";
import Image from "next/image";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpo,
  SiExpress,
  SiFastify,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import IconComponent from "../../components/icon";

export const metadata: Metadata = {
  title: "Sobre mim",
};

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
            Sou desenvolvedor de Software e estudante de Ciência da Computação,
            natural de Aracati, Ceará. Meu foco é o desenvolvimento web e
            mobile, com paixão por criar interfaces modernas, responsivas e
            performáticas que ofereçam uma ótima experiência ao usuário. Tenho
            facilidade em aprender novas stacks e ferramentas, e estou sempre em
            busca de evoluir, seja tecnicamente ou pessoalmente.
          </p>
          <p className="mt-4 text-justify">
            Tenho experiência no desenvolvimento de aplicações ponta a ponta,
            atuando em todas as etapas, do frontend e mobile ao backend. O que
            me permite ter uma visão ampla sobre arquitetura, desempenho e
            usabilidade. Trabalho com React, React Native, Next.js, TypeScript,
            Node.js, Express e PostgreSQL, aplicando sempre boas práticas de
            código limpo, seguro e escalável.
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
          Tenho experiência no desenvolvimento de aplicações Web e Mobile
          completas e estou sempre em busca de aprender novas tecnologias e
          evoluir como desenvolvedor. Abaixo estão algumas das principais
          ferramentas e frameworks que utilizo no meu dia a dia.
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
            color="#58c4dc"
            Icon={TbBrandReactNative}
            name="React Native"
          />
          <IconComponent Icon={SiExpo} name="Expo" />
          <IconComponent
            color="#06b6d4"
            Icon={SiTailwindcss}
            name="TailwindCSS"
          />
          <IconComponent color="#5fa04e" Icon={FaNodeJs} name="Node.js" />
          <IconComponent color="#006db8" Icon={FaDocker} name="Docker" />
          <IconComponent color="#99425b" Icon={SiJest} name="Jest" />

          <IconComponent Icon={SiExpress} name="Express" />
          <IconComponent Icon={SiFastify} name="Fastify" />
          <IconComponent Icon={SiPrisma} name="Prisma" />
          <IconComponent Icon={SiTypeorm} name="TypeORM" />
          <IconComponent Icon={SiPostgresql} name="PostgreSQL" />
          <div className="lg:col-start-3" />
          <div />
          <div className="not-lg:col-start-2" />
        </div>
      </section>
    </div>
  );
}
