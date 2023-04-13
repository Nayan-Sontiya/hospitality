import "../styles/globals.css";
import "../styles/NotFound.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-medium-image-zoom/dist/styles.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

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
    <>
      <Head>
        {/* <script type="text/javascript">
          {` var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/63eddec8c2f1ac1e203394ca/1gpcisg0r';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
        </script> */}
        <meta
          property="og:title"
          content="Hire Cook, Restaurant Consultants, Hospitality helps you search cooks online"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="	https://hospitalityfinder.in/images/logo.png"
        />
        <meta property="og:url" content="https://hospitalityfinder.in/" />
        <meta
          property="og:description"
          content="Hospitality Finder is a unique concept that will help you establish your hospitality business easily. We are a recruitment agency which offers you the one-stop place for all the resources like North Indian Chef that you require."
        />
        <link rel="canonical" href="https://hospitalityfinder.in/" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
