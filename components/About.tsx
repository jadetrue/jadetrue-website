import React from "react";
import { Header, Body } from "./Typography";

const About = () => {
    return (
        <div id="about">
            <Header styles="text-center w-full">About</Header>
            <div className="w-full my-24 md:text-center">
                <Body>
                    I’m a{" "}
                    <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">
                        passionate
                    </span>{" "}
                    introvert who loves creating things with code.
                </Body>
                <br />
                <Body>
                    Born and raised in Bristol,I currently live in North
                    Somerset, with my fiance and little Dachshund, Frankie. 🐕
                    100% named after Frankfurter Sausages. I'm a bit obsessed
                    with all dogs and cute animals. I'd describe myself as a
                    curious, creative individual that enjoy's a challenge.
                </Body>
            </div>
        </div>
    );
};

export default About;
