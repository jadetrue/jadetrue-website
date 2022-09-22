import React from "react";
import { HeaderSize, TypographyProps } from "./Types";

export interface Props extends TypographyProps {
    size?: HeaderSize;
    children?: React.ReactNode;
}

export const Header: React.FC<Props> = ({
    color = "",
    weight = "font-regular",
    size = "large",
    styles = "p-2",
    children,
}) => {
    return (
        <h2
            className={`font-display ${color} ${weight} ${findHeaderSize(
                size
            )} ${styles}`}
        >
            {children}
        </h2>
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
