import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Header, Body } from "./Typography";
import SocialIcons from "./SocialIcons";

const HomeSplash = () => {
    const imageUrl = "/images/jade-true.png";
    return (
        <div className="flex flex-col-reverse items-center justify-between md:flex-row md:gap-14">
            <SocialIcons type="vertical" styles="hidden md:flex" />
            <div className="flex flex-col gap-6 my-16 md:my-32 w-96">
                <Header size="large" styles="tracking-wider py-2">
                    Hey, I'm Jade
                </Header>
                <Body weight="font-semibold" size="large">
                    Front-end Developer
                </Body>
                <Body weight="font-medium">
                    Primarily working with React, NextJS, TypeScript and
                    Tailwind CSS to build beautiful things. ✨
                </Body>
                <Button>Say hi 👋🏻</Button>
            </div>
            <div className="mt-16 md:mt-0">
                <Image src={imageUrl} width={500} height={500} />
            </div>
        </div>
    );
};

export default HomeSplash;
