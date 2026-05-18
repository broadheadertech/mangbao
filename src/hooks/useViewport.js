import { useEffect, useState } from "react";

export function useViewport() {
  const get = () => (typeof window === "undefined" ? 1280 : window.innerWidth);
  const [w, setW] = useState(get);
  useEffect(() => {
    const onResize = () => setW(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return {
    w,
    isMobile: w < 720,
    isTablet: w >= 720 && w < 1024,
    isDesktop: w >= 1024,
  };
}
