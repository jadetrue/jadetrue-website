import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { Body, Header, InternalLink } from "./Typography";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export interface Props {
  name: string;
  showMobileNav: boolean;
  setShowMobileNav: (active: boolean) => void;
  onClickIsDark: () => void;
}

const NAV_ITEMS = [
  { url: "/", label: "Home" },
  { url: "/#about", label: "About" },
  { url: "/#skills", label: "Skills" },
  { url: "/blogs", label: "Blog" },
];

function useActiveSection() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (router.pathname !== "/") {
      setActiveSection(router.pathname);
      return;
    }

    const sectionIds = ["blog", "skills", "about"];
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(`/#${entry.target.id}`);
        }
      }
    };

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        });
        observer.observe(el);
        observers.push(observer);
      }
    }

    // Default to home if at top of page
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("/");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  return activeSection;
}

function isActive(activeSection: string, url: string): boolean {
  if (url === "/") return activeSection === "/";
  return activeSection === url;
}

export const Navigation: React.FC<Props> = (props) => {
  return (
    <>
      <DesktopNavigation {...props} />
      <MobileNavigation {...props} />
    </>
  );
};

export const DesktopNavigation: React.FC<Props> = ({ name }) => {
  const activeSection = useActiveSection();

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
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.url}
            url={item.url}
            active={isActive(activeSection, item.url)}
          >
            {item.label}
          </NavItem>
        ))}
      </div>
    </div>
  );
};

const MobileNavigation: React.FC<Props> = ({
  showMobileNav,
  setShowMobileNav,
}) => {
  const activeSection = useActiveSection();

  const handleNavClick = () => {
    setShowMobileNav(false);
  };

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
          <Icon icon={faBars} styles="text-secondary dark:text-primary" />
        </Button>
      </div>
      {showMobileNav && (
        <div className="z-30 flex flex-col h-screen pt-16 bg-secondary dark:bg-primary lg:hidden animate-[fadeSlideIn_0.3s_ease-out]">
          <div className="flex flex-row items-center justify-between">
            <InternalLink url="/">
              <Header>JT</Header>
            </InternalLink>
            <Button onClick={() => setShowMobileNav(false)}>
              <Icon icon={faXmark} styles="text-secondary dark:text-primary" />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-between h-full text-center">
            <div className="flex flex-col items-center justify-center h-full gap-16 place-content-center">
              {NAV_ITEMS.map((item) => (
                <NavItem
                  key={item.url}
                  url={item.url}
                  active={isActive(activeSection, item.url)}
                  onClick={handleNavClick}
                >
                  {item.label}
                </NavItem>
              ))}
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
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  url = "/",
  color,
  active,
  onClick,
  children,
}) => {
  const router = useRouter();

  const handleClick = () => {
    onClick?.();

    // Handle hash links - navigate to home page first if needed
    if (url.startsWith("/#")) {
      const hash = url.slice(1); // get "#about" from "/#about"
      if (router.pathname === "/") {
        // Already on home page, just scroll
        const el = document.getElementById(hash.slice(1));
        const header = document.querySelector("header");
        if (el) {
          const offset = header ? header.offsetHeight : 0;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      } else {
        router.push(url);
      }
      return;
    }

    router.push(url);
  };

  return (
    <button onClick={handleClick} color={color} className="font-semibold">
      <Body
        styles={
          active
            ? "text-transparent bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text"
            : "hover:text-transparent hover:bg-linear-to-r hover:from-cyan-500 hover:to-blue-500 hover:bg-clip-text"
        }
      >
        {children}
      </Body>
    </button>
  );
};
