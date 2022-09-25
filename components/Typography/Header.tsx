import React from "react";
import { HeaderSize, TypographyProps } from "./Types";

export interface Props extends TypographyProps {
    size?: HeaderSize;
    children?: React.ReactNode;
}

export const Header: React.FC<Props> = ({
    color = "text-primary dark:text-secondary",
    weight = "font-regular",
    size = "large",
    styles = "p-2 w-full",
    children,
}) => {
    return (
        <span
            className={`font-display flex ${color} ${weight} ${findHeaderSize(
                size
            )} ${styles}`}
        >
            {children}
        </span>
    );
};

const findHeaderSize = (size: HeaderSize): string => {
    switch (size) {
        case "extra-large":
            return "text-[64px]"; // 64px
        case "large":
            return "text-6xl"; // 60px
        default:
            return "text-6xl";
    }
};
