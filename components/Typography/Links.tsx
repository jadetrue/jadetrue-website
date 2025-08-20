import React from "react";
import Link from "next/link";

import { Body } from "./Body";
import { BodySize, TypographyProps } from "./Types";

export interface Props extends TypographyProps {
  url: string;
  size?: BodySize;
  children?: React.ReactNode;
}

export const ExternalLink: React.FC<Props> = ({
  url,
  size = "medium",
  weight,
  color,
  styles,
  children,
}) => (
  <a href={url} target="_blank" rel="noreferrer">
    <Body size={size} weight={weight} color={color} styles={styles}>
      {children}
    </Body>
  </a>
);

export const InternalLink: React.FC<Props> = ({
  url,
  size = "medium",
  weight,
  color,
  styles,
  children,
}) => (
  <Link href={url} scroll={true}>
    <Body weight={weight} color={color} size={size} styles={styles}>
      {children}
    </Body>
  </Link>
);
