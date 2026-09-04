import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useState } from "react";

//------------- Back to top button -------------
function BackToTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-5 md:right-10 size-12 bg-accent-soft text-text-primary rounded-full shadow-lg flex items-center justify-center hover:bg-accent-strong z-100"
        aria-label="Back to top">
        <Icon icon="material-symbols:arrow-upward" className="text-xl" />
      </button>
    )
  );
}

// ------------- Icon ring -------------
function IconRing({ icon, size = "text-xl"}) {
  return (
    <div className="bg-accent-muted p-3 rounded-full mr-4">
      <Icon icon={icon} className={size} />
    </div>
  );
}


export { IconRing, BackToTopBtn };