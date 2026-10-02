import Layout from "../components/Layout";
import AboutTimeline from "../components/AboutTimeline";

export default function About() {
  return (
    <Layout
      title="About — Mustafa Berat ARU"
      description="Career timeline and background of Mustafa Berat ARU, Senior Software Engineer."
      path="/about"
    >
      <AboutTimeline />
    </Layout>
  );
}
