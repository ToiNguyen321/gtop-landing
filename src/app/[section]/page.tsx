"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import HomePage from "../page";

interface PageProps {
  params: {
    section: string;
  };
}

const SectionPage: React.FC<PageProps> = ({ params }) => {
  const { section } = useParams();

  useEffect(() => {
    // Wait for the page to load, then scroll to the section
    const timer = setTimeout(() => {
      const element = document.querySelector(`#${section}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [section]);

  return <HomePage />;
};

export default SectionPage;
