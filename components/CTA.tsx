import React from "react";
import Icon from "./Icon";
import { Body } from "./Typography";

const CTA = () => {
    return (
        <div className="w-full full-bleed bg-primary h-[450px] text-secondary p-10 flex flex-col gap-8 items-center justify-center">
            <div className="flex flex-col w-full max-w-5xl">
                <Icon
                    name="quote-left"
                    prefix="fas"
                    styles="text-6xl flex self-start"
                />
                <Body
                    color="primary-secondary"
                    styles="my-24 p-2 flex justify-center"
                >
                    RANDOM ADVICE TO GO HERE
                </Body>
                <Icon
                    name="quote-right"
                    prefix="fas"
                    styles="text-6xl flex self-end"
                />
            </div>
        </div>
    );
};

export default CTA;
