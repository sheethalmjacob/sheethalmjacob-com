import siteConfig from "@/site-config";

export default function Home() {
  return (
    <main style={{ padding: "4rem 2rem", fontFamily: "sans-serif" }}>
      <h1>{siteConfig.name}</h1>
      <p>{siteConfig.tagline}</p>
      <p style={{ color: "#888", marginTop: "1rem" }}>Site coming soon.</p>
    </main>
  );
}