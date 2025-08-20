import React from "react";
import Icon from "./Icon";
import { Body } from "./Typography";
import { Advice } from "../models/Advice";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export interface Props {
  advice: Advice;
}

const CTA: React.FC<Props> = ({ advice }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 p-10 full-bleed bg-primary h-fit text-secondary">
        <div className="flex flex-col w-full max-w-5xl">
          <Icon icon={faQuoteLeft} styles="text-6xl flex self-start" />
          <div className="flex max-w-2xl my-16 place-self-center">
            <Body
              color="primary-secondary"
              styles="p-2 flex justify-center"
              size="extra-large"
            >
              {advice.advice}
            </Body>
          </div>
          <Icon icon={faQuoteRight} styles="text-6xl flex self-end" />
        </div>
      </div>
      <div className="w-full flex justify-start md:justify-end p-2">
        <Body size="extra-small">
          *Quotes are randomly generated upon refreshing my webpage.
        </Body>
      </div>
    </>
  );
};

export default CTA;
