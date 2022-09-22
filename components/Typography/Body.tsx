import React from "react";
import { BodySize, TypographyProps } from "./Types";

export interface Props extends TypographyProps {
    size?: BodySize;
    children?: React.ReactNode;
}

export const Body: React.FC<Props> = ({
    color = "",
    weight = "",
    size = "medium",
    styles = "",
    children,
}) => {
    return (
        <span
            className={`font-body ${color} ${weight} ${findBodySize(
                size
            )} ${styles}`}
        >
            {children}
        </span>
    );
};

const findBodySize = (size: BodySize): string => {
    switch (size) {
        case "large":
            return "text-lg"; // 16px
        case "medium":
            return "text-md";
        case "small":
            return "text-base"; // 14px
        case "extra-small":
            return "text-sm"; // 12px
        default:
            return "text-base";
    }
};
