"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Section = "About" | "Resume" | "Works" | "Blogs" | "Contact";
type ComponentVisibility = string;

interface MyComponentContextType {
  isComponentVisible: ComponentVisibility;
  handleIsComponentVisibility: (status: string) => void;
  scrollToSection: (sectionId: string) => void;
  activeSection: Section | "";
  handleSetActive: (section: Section) => void;
  scrolledSection: Section | "";
}

interface MyContextProviderProps {
  children: ReactNode;
}

const MyComponentContext = createContext<MyComponentContextType | undefined>(
  undefined,
);

const urlFragmentFor = (section: Section) => {
  return `#${section.toLowerCase()}`;
};

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<Section | "">("");
  const [isComponentVisible, setComponentVisible] =
    useState<ComponentVisibility>("All");
  const [scrolledSection, setScrolledSection] = useState<Section | "">("");
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const isManualScrollRef = useRef(false);
  const manualScrollIdleTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const hasInteractedRef = useRef(false);
  const initialUrlSetRef = useRef(false);

  // Detect mobile device breakpoint (1074px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1074);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle Initial Reload / Entry state
  useEffect(() => {
    if (isMobile === null || initialUrlSetRef.current) return;

    if (isMobile) {
      // Mobile: Entry at '/' - keep state empty until scrolled or clicked
      window.history.replaceState(null, "", "/");
      window.scrollTo(0, 0);
    } else {
      // Desktop: Default to '#about' tab active
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveSection("About");
      setScrolledSection("About");
      window.history.replaceState(null, "", "#about");
    }

    initialUrlSetRef.current = true;
  }, [isMobile]);

  const handleSetActive = useCallback((section: Section) => {
    setActiveSection(section);
    setScrolledSection(section);
    hasInteractedRef.current = true;

    // Both mobile and desktop get section hash when clicked
    window.history.pushState(null, "", urlFragmentFor(section));
  }, []);

  const handleIsComponentVisibility = useCallback((status: string) => {
    setComponentVisible(status);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 155;

    if (!element) return;

    hasInteractedRef.current = true;
    isManualScrollRef.current = true;
    if (manualScrollIdleTimer.current) {
      clearTimeout(manualScrollIdleTimer.current);
    }

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const targetScrollPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (isMobile === null) return;
    let isScrolling = false;

    const updateUrl = throttle((section: Section) => {
      if (hasInteractedRef.current) {
        window.history.pushState(null, "", urlFragmentFor(section));
      }
    }, 500);

    const markInteracted = () => {
      hasInteractedRef.current = true;
    };

    window.addEventListener("wheel", markInteracted, {
      passive: true,
      once: true,
    });
    window.addEventListener("touchmove", markInteracted, {
      passive: true,
      once: true,
    });

    const releaseManualScrollSoon = () => {
      if (manualScrollIdleTimer.current) {
        clearTimeout(manualScrollIdleTimer.current);
      }
      manualScrollIdleTimer.current = setTimeout(() => {
        isManualScrollRef.current = false;
      }, 150);
    };

    const handleScroll = () => {
      if (isManualScrollRef.current) {
        releaseManualScrollSoon();
        return;
      }

      if (isScrolling) return;
      isScrolling = true;

      requestAnimationFrame(() => {
        const sections: Section[] = [
          "About",
          "Resume",
          "Works",
          "Blogs",
          "Contact",
        ];

        let foundActiveSection = false;

        for (const section of sections) {
          const element = document.getElementById(
            `${section.toLowerCase()}-section`,
          );

          if (element) {
            const rect = element.getBoundingClientRect();

            if (
              rect.top <= window.innerHeight / 4 &&
              rect.bottom >= window.innerHeight / 4
            ) {
              setScrolledSection(section);
              foundActiveSection = true;

              if (hasInteractedRef.current) {
                updateUrl(section);
              }
              break;
            }
          }
        }

        // On mobile, if user scrolled back up past all sections to top profile, clear active section & return URL to '/'
        if (isMobile && !foundActiveSection && window.scrollY < 100) {
          setScrolledSection("");
          setActiveSection("");
          if (hasInteractedRef.current && window.location.hash) {
            window.history.pushState(null, "", "/");
          }
        }

        isScrolling = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", markInteracted);
      window.removeEventListener("touchmove", markInteracted);
      if (manualScrollIdleTimer.current) {
        clearTimeout(manualScrollIdleTimer.current);
      }
    };
  }, [isMobile]);

  const MyContextValue: MyComponentContextType = useMemo(
    () => ({
      isComponentVisible,
      handleIsComponentVisibility,
      scrollToSection,
      activeSection,
      handleSetActive,
      scrolledSection,
    }),
    [
      isComponentVisible,
      handleIsComponentVisibility,
      scrollToSection,
      activeSection,
      handleSetActive,
      scrolledSection,
    ],
  );

  return (
    <MyComponentContext.Provider value={MyContextValue}>
      {children}
    </MyComponentContext.Provider>
  );
};

export const useMyComponentContext = (): MyComponentContextType => {
  const context = useContext(MyComponentContext);

  if (!context) {
    throw new Error(
      "useMyComponentContext must be used within a MyContextProvider",
    );
  }

  return context;
};

const throttle = (func: (section: Section) => void, delay: number) => {
  let lastTime = 0;

  return (section: Section) => {
    const now = Date.now();

    if (now - lastTime >= delay) {
      func(section);
      lastTime = now;
    }
  };
};
