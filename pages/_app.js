import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-multi-carousel/lib/styles.css";
import "./style.css";

import React from "react";
export default function MyApp({ Component: Component, pageProps: pageProps }) {
  React.useEffect(() => import("@lottiefiles/lottie-player"));
  return <Component {...pageProps} />;
}
