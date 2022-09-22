import React from "react";
import { ExternalLink, Header, InternalLink } from "./Typography";

export interface Props {
    name: string;
}

export const Navigation: React.FC<Props> = ({ name }) => {
    return (
        <div className="flex flex-col items-center justify-between mt-16 md:flex-row">
            <div className="py-2">
                <Header size="large">{name}</Header>
            </div>
            <div className="flex mt-12 md:mt-0 gap-14">
                <NavItem url="/">Home</NavItem>
                <NavItem url="/about">About</NavItem>
                <NavItem url="/contact">Contact</NavItem>
                {/* TODO: Add light & dark mode */}
                <NavItem url="/contact">MOON</NavItem>
            </div>
        </div>
    );
};

interface NavItemProps {
    url: string;
    children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ url = "/", children }) => {
    return <InternalLink url={url}>{children}</InternalLink>;
};
