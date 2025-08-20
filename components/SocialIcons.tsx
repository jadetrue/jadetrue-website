import React from "react";
import Icon from "./Icon";
import { ExternalLink } from "./Typography";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
        <Icon icon={faLinkedin} styles="text-3xl" />
      </ExternalLink>
      <ExternalLink url="https://github.com/jadetrue">
        <Icon icon={faGithub} styles="text-3xl" />
      </ExternalLink>
      <ExternalLink url="https://twitter.com/jadetrue_">
        <Icon icon={faXTwitter} styles="text-3xl" />
      </ExternalLink>
    </div>
  );
};

export default SocialIcons;
