import { useState, useEffect, useRef, useMemo } from "react";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const sectionIds = useMemo(
    () => items.map((it) => it.href.replace("#", "")),
    [items]
  );

  const visibilityRef = useRef<Record<string, number>>({});

  const scrollToCenter = (el: HTMLElement, duration = 700) => {
    const start = window.scrollY || window.pageYOffset;
    const rect = el.getBoundingClientRect();
    const elementTop = start + rect.top;
    const id = el.id;
    const hasJustifyCenter = el.classList.contains("justify-center");
    const offset = 90;

    if (hasJustifyCenter && id === "contact") {
      const contentDiv = el.querySelector("div");
      if (contentDiv) {
        const contentRect = contentDiv.getBoundingClientRect();
        const contentTop = start + contentRect.top;
        const target = contentTop - offset;
        const distance = target - start;
        let startTime = 0;

        const ease = (t: number) =>
          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const step = (now: number) => {
          if (!startTime) startTime = now;
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / duration);
          const eased = ease(progress);
          window.scrollTo(0, Math.round(start + distance * eased));
          if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
        return;
      }
    }

    const target = elementTop - offset;
    const distance = target - start;
    let startTime = 0;

    const ease = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const step = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = ease(progress);
      window.scrollTo(0, Math.round(start + distance * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const onNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    index: number
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      scrollToCenter(el, 700);
      setActiveIndex(index);
      Object.keys(visibilityRef.current).forEach((k) => {
        visibilityRef.current[k] = k === id ? 1 : 0;
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prev = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      return () => {
        document.documentElement.style.scrollBehavior = prev;
      };
    }
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        visibilityRef.current[id] = entry.intersectionRatio;
      });

      const visibleEntries = Object.entries(visibilityRef.current);
      if (visibleEntries.length === 0) return;

      let maxId = visibleEntries[0][0];
      let maxRatio = visibleEntries[0][1];

      for (const [id, ratio] of visibleEntries) {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          maxId = id;
        }
      }

      const newIndex = sectionIds.indexOf(maxId);
      if (newIndex !== -1) {
        setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        visibilityRef.current[id] = 0;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div
          className="hidden md:flex items-center justify-center gap-2 px-6 py-3 rounded-full mx-auto w-fit"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          }}
        >
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => onNavClick(e, item.href, index)}
              className={`px-4 py-2 rounded-full font-bold transition-colors duration-300 ${
                activeIndex === index
                  ? "bg-white text-black font-semibold"
                  : "text-white hover:bg-white hover:text-black"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div
          className="md:hidden flex  items-center justify-center gap-1 px-2 py-2 rounded-full mx-auto "
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          }}
        >
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => onNavClick(e, item.href, index)}
              className={`px-2 sm:px-3 py-2 rounded-full text-md font-semibold transition-colors duration-300  ${
                activeIndex === index
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;