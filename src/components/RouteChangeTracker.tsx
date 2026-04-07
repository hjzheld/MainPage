import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-XYQ0NRD2FC";

export default function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    const pagePath =
      location.pathname + location.search + location.hash;

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  return null;
}