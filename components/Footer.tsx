import Link from "next/link";
import siteConfig from "@/site-config";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "0.5px solid var(--color-border)",
      padding: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--color-text-muted)",
    }}>
      <span>© {new Date().getFullYear()} {siteConfig.name}</span>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" style={{
          color: "var(--color-text-muted)",
          textDecoration: "none",
        }}>
          LinkedIn
        </a>
        <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" style={{
          color: "var(--color-text-muted)",
          textDecoration: "none",
        }}>
          GitHub
        </a>
      </div>
    </footer>
  );
}