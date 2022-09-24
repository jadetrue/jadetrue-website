import React from "react";
import { Body, Header } from "./Typography";

const Skills = () => {
    return (
        <div id="tools">
            <Header styles="text-center w-full">What I use</Header>
            <div className="grid items-center justify-center w-full grid-cols-2 gap-16 m-auto my-24 overflow-hidden md:my-16 md:gap-8 md:grid-cols-3 ">
                <SkillItem>
                    <img
                        src="/images/skills-html.png"
                        height={100}
                        width={100}
                    />
                    <Body>HTML 5</Body>
                </SkillItem>
                <SkillItem>
                    <img
                        src="/images/skills-css3.png"
                        height={100}
                        width={100}
                    />
                    <Body>CSS 3</Body>
                </SkillItem>
                <SkillItem>
                    <img
                        src="/images/skills-javascript.png"
                        height={100}
                        width={100}
                    />
                    <Body>JavaScript</Body>
                </SkillItem>
                <SkillItem>
                    <img
                        src="/images/skills-react.png"
                        height={100}
                        width={100}
                    />
                    <Body>React</Body>
                </SkillItem>
                <SkillItem>
                    <img
                        src="/images/skills-typescript.png"
                        height={100}
                        width={100}
                    />
                    <Body>TypeScript</Body>
                </SkillItem>
                <SkillItem>
                    <img
                        src="/images/skills-nodejs.png"
                        height={100}
                        width={100}
                    />
                    <Body>NodeJS</Body>
                </SkillItem>
                <SkillItem>
                    <img
                        src="/images/skills-tailwind.png"
                        height={100}
                        width={100}
                    />
                    <Body>Tailwind CSS</Body>
                </SkillItem>
                <SkillItem>
                    <img
                        src="/images/skills-git.png"
                        height={100}
                        width={100}
                    />
                    <Body>Git</Body>
                </SkillItem>
                <SkillItem>
                    <img
                        src="/images/skills-npm.png"
                        height={100}
                        width={100}
                    />
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
        <div className="flex flex-col items-center justify-center gap-4 m-auto text-center">
            {children}
        </div>
    );
};

export default Skills;
