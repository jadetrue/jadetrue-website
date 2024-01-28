import React from "react";
import { Header, Body } from "./Typography";
import Button from "./Button";

const About = () => {
  return (
    <div id="about">
      <Header styles="text-center justify-center pt-8">About</Header>
      <div className="w-full my-24 md:text-center flex flex-col place-items-center">
        <Body>
          Unleashing{" "}
          <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">
            creativity
          </span>{" "}
          through lines of code.
        </Body>
        <br />
        <Body>
          Originally from Bristol and now settled in North Somerset with my
          husband and adorable Dachshund, Frankie (100% named after Frankfurter
          Sausages 🐕).
        </Body>
        <br />
        <Body>
          I consider myself a curious and creative individual who thrives on
          challenges.
        </Body>
        <br />
        <Body>
          Explore my blog for additional insights into who I am, or feel free to
          view my CV by clicking on the button below for a professional
          overview.
        </Body>
        <br />
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1infAPmONQczItfNMlRST8VDI-09GmlXe/view?usp=sharing"
        >
          <Button>View CV 🔎</Button>
        </a>
      </div>
    </div>
  );
};

export default About;
