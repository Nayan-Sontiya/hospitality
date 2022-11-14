import { useEffect, useState } from "react";
const Breakpoint = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xxl: "xxl",
};

const breakpoints = { xs: 0, sm: 576, md: 767, lg: 991, xl: 1199, xxl: 1439 };
const Display = ({ min, max, children }) => {
  const { width } = useWindowDimensions();

  const w = width || 0;
  const minW = min ? breakpoints[min] : 0;
  const maxW = max ? breakpoints[max] : Infinity;
  const display = w > minW && w <= maxW;

  return display ? <>{children}</> : null;
};
function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = () => ({
    width: hasWindow ? window.innerWidth : null,
    height: hasWindow ? window.innerHeight : null,
  });

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (!hasWindow) return;
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hasWindow]);

  return windowDimensions;
}
const NotFound = () => {
  return (
    <>
      <Display min={Breakpoint.md}>
        <div className="not-found-desktop">
          <div className="not-found-container">
            <div className="not-found-title">
              <h2 className="not-found-title">Page not found</h2>
            </div>

            <div className="not-found-body">
              <p>
                The page you are trying to access does not exist or is currently
                unavailable. Please try again later.
              </p>
              <p>We appreciate your understanding.</p>
            </div>
          </div>
        </div>
      </Display>

      <Display max={Breakpoint.md}>
        <div
          className={
            true ? "not-found-mobile-maintenance" : "not-found-mobile-404"
          }
        ></div>

        <div className="not-found-container">
          <div className="not-found-title">
            <h2
              variant="h2"
              className={
                true === "center"
                  ? "not-found-title-align-center"
                  : "not-found-title-align-left"
              }
            >
              Page not found
            </h2>
          </div>

          <div className="not-found-body">
            <p>
              The page you are trying to access does not exist or is currently
              unavailable. Please try again later.
            </p>
            <p>We appreciate your understanding.</p>
          </div>
        </div>
      </Display>
    </>
  );
};
export default NotFound;
