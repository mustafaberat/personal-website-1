import { Exo } from "next/font/google";
import "../styles/main.css";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${exo.className} app-root`}>
      <div className="page-bg" aria-hidden="true" />
      <div className="page-content">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
