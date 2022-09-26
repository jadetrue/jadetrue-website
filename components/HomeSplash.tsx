import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Header, Body } from "./Typography";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

const HomeSplash = () => {
    const imageUrl = "/images/jade-true.png";

    return (
        <div className="flex flex-col-reverse items-center justify-between w-full md:flex-row md:gap-14">
            <SocialIcons type="vertical" styles="hidden md:flex" />
            <div className="flex flex-col gap-6 my-16 md:my-32 md:w-96">
                <Header
                    size="large"
                    styles="leading-relaxed md:leading-none tracking-wider py-2"
                >
                    Hey, I'm Jade
                </Header>
                <Body weight="font-semibold" size="large">
                    Front-end Developer
                </Body>
                <Body weight="font-medium">
                    Primarily working with React, NextJS, TypeScript and
                    Tailwind CSS to build beautiful things. ✨
                </Body>
                <Link href="mailto:info@jadetrue.co.uk?subject=What%20did%20you%20think%3F&body=Hey%20Jade%2C%0D%0A%0D%0AI%20stumbled%20upon%20your%20website%20and%20just%20wanted%20to%20say...">
                    <Button>Say hi 👋🏻</Button>
                </Link>
            </div>
            <div className="mt-16 md:mt-0">
                <Image
                    src={imageUrl}
                    width={500}
                    height={500}
                    priority={true}
                />
            </div>
        </div>
    );
};

export default HomeSplash;
