import "../styles/globals.css";
import "../styles/NotFound.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-medium-image-zoom/dist/styles.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("5323417621055552"); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      document.addEventListener(
        "contextmenu",
        function (e) {
          e.preventDefault();
        },
        false
      );
    } else {
      console.log("Development Mode on");
    }
  }, []);
  
  return (
      <Component {...pageProps} />
      
  );
}

export default MyApp;
