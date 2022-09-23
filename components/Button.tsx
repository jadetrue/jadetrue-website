import React from "react";

import { Body } from "./Typography";

export interface Props {
    href?: string;
    onClick?: (e?: any) => void;
    styles?: string;
    children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ href, onClick, styles, children }) => {
    if (href)
        return (
            <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className={`rounded flex flex-row items-center p-2 px-6 bg-primary w-fit ${styles}`}
            >
                <Body color="text-secondary">{children}</Body>
            </a>
        );

    return (
        <button
            onClick={onClick}
            className={`rounded flex flex-row items-center p-2 px-6 bg-primary w-fit ${styles}`}
        >
            <Body color="text-secondary">{children}</Body>
        </button>
    );
};

export default Button;
