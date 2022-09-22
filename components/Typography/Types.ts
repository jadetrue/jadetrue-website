export type HeaderSize = "large" | "extra-large";

export type BodySize = "extra-small" | "small" | "medium" | "large";

export type FontWeight =
    | "font-normal"
    | "font-medium"
    | "font-semibold"
    | "font-bold";

export interface TypographyProps {
    color?: string;
    size?: HeaderSize | BodySize;
    weight?: FontWeight;
    styles?: string;
}
