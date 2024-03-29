import React from "react";
import Icon from "./Icon";
import { ExternalLink } from "./Typography";

type Type = "horizontal" | "vertical";

interface Props {
  type: Type;
  styles?: string;
}

const SocialIcons: React.FC<Props> = ({ type, styles }) => {
  return (
    <div
      className={`flex gap-12 ${
        type === "vertical" ? "flex-col" : "flex-row"
      } ${styles}`}
    >
      <ExternalLink url="https://www.linkedin.com/in/jadetrue/">
        <Icon icon={["fab", "linkedin"]} styles="text-3xl" />
      </ExternalLink>
      <ExternalLink url="https://github.com/jadetrue">
        <Icon icon={["fab", "github"]} styles="text-3xl" />
      </ExternalLink>
      <ExternalLink url="https://twitter.com/jadetrue_">
        <Icon icon={["fab", "x-twitter"]} styles="text-3xl" />
      </ExternalLink>
    </div>
  );
};

export default SocialIcons;
