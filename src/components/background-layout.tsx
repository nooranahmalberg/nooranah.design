import { PropsWithChildren, useEffect } from "react";

export function BackgroundLayout({
  children,
  backgroundColor = "bg-white",
}: PropsWithChildren<{ backgroundColor: string }>) {
  useEffect(() => {
    // Remove any existing background classes
    document.body.classList.remove("bg-white");
    // Add the new background class
    document.body.classList.add(backgroundColor);

    // Cleanup function to reset the background when component unmounts
    return () => {
      document.body.classList.remove(backgroundColor);
      document.body.classList.add("bg-white"); // Reset to default
    };
  }, [backgroundColor]);

  return <>{children}</>;
}
