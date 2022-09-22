import React from "react";
import { BodySize, TypographyProps } from "./Types";

export interface Props extends TypographyProps {
    size?: BodySize;
    children?: React.ReactNode;
}

export const Body: React.FC<Props> = ({
    color = "text-primary",
    weight = "font-normal",
    size = "medium",
    styles = "",
    children,
}) => {
    return (
        <p
            className={`font-body ${color} ${weight} ${findBodySize(
                size
            )} ${styles}`}
        >
            {children}
        </p>
    );
};

const findBodySize = (size: BodySize): string => {
    switch (size) {
        case "large":
            return "text-3xl"; // 30px
        case "medium":
            return "text-2xl"; // 24px
        case "small":
            return "text-lg"; // 18px
        case "base":
            return "text-base"; // 16px
        default:
            return "text-base";
    }
};
