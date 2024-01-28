import React from "react";
import { Body, Header } from "./Typography";
import { XyzTransitionGroup } from "@animxyz/react";

const Skills = () => {
  return (
    <div id="skills">
      <Header styles="text-center w-full pt-8 justify-center">
        What I use
      </Header>
      <div className="w-full my-24 md:text-center flex flex-col place-items-center">
        <Body>But not limited to.</Body>
      </div>
      <div className="grid items-center justify-center w-full grid-cols-2 gap-16 m-auto my-24 overflow-hidden md:gap-8 md:grid-cols-3">
        <SkillItem key="1">
          <img src="/images/skills-html.png" height={100} width={100} />
          <Body>HTML 5</Body>
        </SkillItem>
        <SkillItem key="2">
          <img src="/images/skills-css3.png" height={100} width={100} />
          <Body>CSS 3</Body>
        </SkillItem>
        <SkillItem key="3">
          <img src="/images/skills-javascript.png" height={100} width={100} />
          <Body>JavaScript</Body>
        </SkillItem>
        <SkillItem key="4">
          <img src="/images/skills-react.png" height={100} width={100} />
          <Body>React</Body>
        </SkillItem>
        <SkillItem key="5">
          <img src="/images/skills-typescript.png" height={100} width={100} />
          <Body>TypeScript</Body>
        </SkillItem>
        <SkillItem key="6">
          <img src="/images/skills-nodejs.png" height={100} width={100} />
          <Body>NodeJS</Body>
        </SkillItem>
        <SkillItem key="7">
          <img src="/images/skills-tailwind.png" height={100} width={100} />
          <Body>Tailwind CSS</Body>
        </SkillItem>
        <SkillItem key="8">
          <img src="/images/skills-git.png" height={100} width={100} />
          <Body>Git</Body>
        </SkillItem>
        <SkillItem key="9">
          <img src="/images/skills-npm.png" height={100} width={100} />
          <Body>npm</Body>
        </SkillItem>
      </div>
    </div>
  );
};

interface SkillItemProps {
  children?: React.ReactNode;
}

const SkillItem: React.FC<SkillItemProps> = ({ children }) => {
  return (
    <XyzTransitionGroup
      appearVisible
      xyz="fade down-5 rotate-right-50% stagger duration-10"
    >
      <div className="flex flex-col items-center justify-center gap-4 m-auto text-center">
        {children}
      </div>
    </XyzTransitionGroup>
  );
};

export default Skills;
