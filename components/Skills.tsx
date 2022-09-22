import React from "react";
import { Body, Header } from "./Typography";

const Skills = () => {
    return (
        <div id="skills">
            <Header styles="text-center w-full">Skills</Header>
            <div className="grid justify-center grid-cols-3 gap-4 m-auto my-16 overflow-hidden bg-blue-200">
                <SkillItem>React</SkillItem>
                <SkillItem>TypeScript</SkillItem>
                <SkillItem>Node</SkillItem>
                <SkillItem>Tailwind CSS</SkillItem>
                <SkillItem>Git</SkillItem>
                <SkillItem>npm</SkillItem>
            </div>
        </div>
    );
};

interface SkillItemProps {
    children?: React.ReactNode;
}

const SkillItem: React.FC<SkillItemProps> = ({ children }) => {
    return (
        <div className="flex items-center justify-center w-24 h-24 bg-red-200">
            <Body>{children}</Body>
        </div>
    );
};

export default Skills;
