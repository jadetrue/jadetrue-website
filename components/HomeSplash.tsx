import Image from "next/image";
import React from "react";
import { Header, Body } from "./Typography";

const HomeSplash = () => {
    const imageUrl = "/images/jade-true.png";
    return (
        <div className="flex gap-14">
            <div className="flex flex-col gap-4 my-32 w-96">
                <Header size="large" styles="tracking-wider py-2">
                    Hey, I'm Jade
                </Header>
                <Body weight="font-semibold" size="large">
                    Front-end Developer
                </Body>
                <Body weight="font-medium">
                    Primarily working with React, NextJS, TypeScript and
                    Tailwind CSS to build beautiful things. ✨{" "}
                </Body>
                <button className="bg-red-200">Say hi 👋🏻</button>
            </div>
            <div>
                <Image src={imageUrl} width={500} height={500} />
            </div>
        </div>
    );
};

export default HomeSplash;
