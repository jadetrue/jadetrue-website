import React from "react";
import SocialIcons from "./SocialIcons";
import { Body } from "./Typography";

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 py-8 dark:bg-primary">
            <SocialIcons type="horizontal" />
            <Body size="small">Jade True © {new Date().getUTCFullYear()}</Body>
        </div>
    );
};

export default Footer;
