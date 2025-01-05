import { useState, useEffect } from "react";

export function useFirstVisit() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isFirstVisit = localStorage.getItem("hasVisited") === null;

      if (!isFirstVisit) {
        setShowWelcome(false);
      } else {
        localStorage.setItem("hasVisited", "true");
      }

      const handleBeforeUnload = () => {
        localStorage.removeItem("hasVisited");
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);

  return [showWelcome, setShowWelcome] as const;
}
