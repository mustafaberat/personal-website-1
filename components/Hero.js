import SocialMedia from "./SocialMedia";
import { EMAIL } from "../data/site";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="name-surname">MUSTAFA BERAT ARU</h1>
        <p className="my-title">
          Senior Software Engineer at{" "}
          <a
            href="https://arusoft.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="my-title-company"
          >
            ARU SOFT
          </a>
        </p>
        <SocialMedia />
        <a href={`mailto:${EMAIL}`} className="mailforhomepage">
          {EMAIL}
        </a>
      </div>
    </section>
  );
}
