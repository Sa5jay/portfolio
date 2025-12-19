import GlassSurface from "@/components/GlassSurface";
import { useState, useEffect, useRef, useMemo } from "react";

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
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
    
    const onNavClick = (e: React.MouseEvent, href: string, index: number) => {
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
    
    const sectionIds = items.map((it) => it.href.replace("#", ""));
    const visibilityRef = useRef<Record<string, number>>({});
    
    const scrollToCenter = (el: HTMLElement, duration = 700) => {
      const start = window.scrollY || window.pageYOffset;
      const rect = el.getBoundingClientRect();
      
      // Calculate the absolute position of the element
      const elementTop = start + rect.top;
      
      // Check if this is the contact section (which has justify-center)
      const id = el.id;
      const hasJustifyCenter = el.classList.contains('justify-center');
      
      const offset = 90; // Default offset
      
      // For sections with justify-center, we need to find the actual content position
      if (hasJustifyCenter && id === 'contact') {
        // Get the first child div inside the section
        const contentDiv = el.querySelector('div');
        if (contentDiv) {
          const contentRect = contentDiv.getBoundingClientRect();
          const contentTop = start + contentRect.top;
          const target = contentTop - offset;
          
          const distance = target - start;
          let startTime = 0;
          
          const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
          
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
      
      // For all other sections (including skills), use the element top
      const target = elementTop - offset;
      const distance = target - start;
      let startTime = 0;
      
      const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
      
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
    <div className="w-screen">
      <div className="hidden md:block fixed top-5 left-1/2 transform -translate-x-1/2 z-20">
        <GlassSurface
          width={500}
          height={70}
          borderRadius={40}
          className="my-custom-class"
        >
          <nav>
            <ul className="flex justify-around items-center h-full px-4 gap-3">
              {items.map((item, index) => (
                <li key={item.href}>
                  <a
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
                </li>
              ))}
            </ul>
          </nav>
        </GlassSurface>
      </div>
      {/* Mobile Navigation */}
      <div className="fixed md:hidden   left-1/2 -translate-x-1/2 z-50">
        <GlassSurface
          width={1000}
          height={70}
          borderRadius={0}
          className="my-custom-class"
        >
          <nav className="flex justify-around items-center h-full list-none">
            {items.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => onNavClick(e, item.href, index)}
                  className={`px-3 py-2 rounded-full font-semibold transition-colors duration-300 ${
                    activeIndex === index
                      ? "bg-white text-black"
                      : "text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </nav>
        </GlassSurface>
      </div>
    </div>
  )
}

export default Navbar