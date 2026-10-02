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
      <Component {...pageProps} />
    </div>
  );
}
