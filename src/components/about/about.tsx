import Container from "@/components/container";
import { techSkill, otherSkill, langSkill } from "@/utils/constant";
import Pills from "./pills";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Container className="bg-slate-950 lg:py-16 flex-grow">
        <div className="flex items-start gap-2">
          <h1 className="text-slate-100 font-bold text-3xl lg:text-5xl">
            About Me
          </h1>
          <Image
            width={32}
            height={32}
            src="/images/prog-icon.png"
            alt="emoticonAbout"
            className="size-8 lg:size-12"
          />
        </div>
        <p className="text-slate-400 text-sm lg:text-base pt-2 lg:pt-4 ">
          Hi! My name is Iputu Indrawan. I'm a budding programmer, and I'm very passionate and dedicated to my hobby. 
          With self-taught experience, I have acquired some of the skills and knowledge necessary to create a rest apis project. 
          I enjoy every step of the design process, from discussions and collaboration.
        </p>
        <h2 className="text-slate-100 font-semibold text-xl lg:text-3xl mt-8">
          Programming Language
        </h2>
        <div className="mt-4 flex flex-wrap gap-2 lg:gap-4">
          {langSkill.map((e, index) => {
            return <Pills key={index} title={e}></Pills>;
          })}
        </div>
        <h2 className="text-slate-100 font-semibold text-xl lg:text-3xl mt-8">
          Technologies and Frameworks
        </h2>
        <div className="mt-4 flex flex-wrap gap-2 lg:gap-4">
          {techSkill.map((e, index) => {
            return <Pills key={index} title={e}></Pills>;
          })}
        </div>
        <h2 className="text-slate-100 font-semibold text-xl lg:text-3xl mt-8">
          Other Skills
        </h2>
        <div className="mt-4 flex flex-wrap gap-2 lg:gap-4">
          {otherSkill.map((e, index) => {
            return <Pills key={index} title={e}></Pills>;
          })}
        </div>
      </Container>
    </>
  );
}
