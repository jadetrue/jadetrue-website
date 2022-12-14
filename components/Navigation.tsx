import { useRouter } from "next/router";
import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import { Body, Header, InternalLink } from "./Typography";

export interface Props {
    name: string;
    showMobileNav: boolean;
    setShowMobileNav: (active: boolean) => void;
    onClickIsDark: () => void;
}

export const Navigation: React.FC<Props> = (props) => {
    return (
        <>
            <DesktopNavigation {...props} />
            <MobileNavigation {...props} />
        </>
    );
};

export const DesktopNavigation: React.FC<Props> = ({ name, onClickIsDark }) => {
    return (
        <div className="flex-col items-center justify-between hidden pt-16 pb-16 dark:bg-primary lg:flex md:flex-row">
            <div className="py-2">
                <InternalLink url="/">
                    <Header size="large" styles="align-middle">
                        {name}
                    </Header>
                </InternalLink>
            </div>
            <div className="flex flex-col md:flex-row md:mt-0 gap-14">
                <NavItem url="/">Home</NavItem>
                <NavItem url="#about">About</NavItem>
                <NavItem url="#skills">Skills</NavItem>
                <NavItem url="#blog">Blog</NavItem>
                {/* <button onClick={onClickIsDark}>
                    <Icon name={`circle-half-stroke`} prefix="fas" />
                </button> */}
            </div>
        </div>
    );
};

const MobileNavigation: React.FC<Props> = ({
    showMobileNav,
    setShowMobileNav,
    onClickIsDark,
}) => {
    return (
        <>
            <div
                className={`flex lg:hidden flex-row items-center justify-between pt-16 ${
                    showMobileNav && "hidden"
                }`}
            >
                <InternalLink url="/">
                    <Header size="large">JT</Header>
                </InternalLink>
                <Button onClick={() => setShowMobileNav(!showMobileNav)}>
                    <Icon
                        icon="bars"
                        styles="text-secondary dark:text-primary"
                    />
                </Button>
            </div>
            {showMobileNav && (
                <div className="z-30 flex flex-col h-screen pt-16 bg-secondary dark:bg-primary md:hidden">
                    <div className="flex flex-row items-center justify-between">
                        <InternalLink url="/">
                            <Header>JT</Header>
                        </InternalLink>
                        <Button
                            onClick={() => setShowMobileNav(!showMobileNav)}
                        >
                            <Icon
                                icon="close"
                                styles="text-secondary dark:text-primary"
                            />
                        </Button>
                    </div>
                    <div className="flex flex-col items-center justify-between h-full text-center">
                        <div className="flex flex-col items-center justify-center h-full gap-16 place-content-center">
                            <NavItem url="/"> Home</NavItem>
                            <NavItem url="#about">About</NavItem>
                            <NavItem url="#skills">Tools</NavItem>
                            <NavItem url="#blog">Blog</NavItem>
                            {/* <button onClick={onClickIsDark}>
                                <Icon
                                    icon={`circle-half-stroke`}
                                />
                            </button> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

interface NavItemProps {
    url: string;
    color?: string;
    children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ url = "/", color, children }) => {
    const router = useRouter();
    return (
        <button
            onClick={() => router.push(`/${url}`)}
            color={color}
            className="font-semibold"
        >
            <Body styles="hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:bg-clip-text">
                {children}
            </Body>
        </button>
    );
};
