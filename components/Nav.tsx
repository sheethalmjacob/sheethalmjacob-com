import Link from "next/link";
import siteConfig from "@/site-config";

export default function Nav() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: "var(--color-bg)",
      borderBottom: "0.5px solid var(--color-border)",
      padding: "0 2rem",
      height: "56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <Link href="/" style={{
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: "15px",
        color: "var(--color-text-primary)",
        textDecoration: "none",
      }}>
        {siteConfig.name}
      </Link>

      <ul style={{
        display: "flex",
        gap: "2rem",
        listStyle: "none",
      }}>
        {siteConfig.nav.map((item) => (
          <li key={item.href}>
            <Link href={item.href} style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 300,
              color: "var(--color-text-secondary)",
              textDecoration: "none",
            }}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}