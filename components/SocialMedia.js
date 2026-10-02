import Link from "next/link";
import { socialLinks } from "../data/social";

export default function SocialMedia() {
  const mid = Math.ceil(socialLinks.length / 2);
  const rows = [socialLinks.slice(0, mid), socialLinks.slice(mid)];

  return (
    <article className="social-media-links">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="df">
          {row.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              prefetch={false}
              className="social-media-common"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <i className={`fab ${icon}`} />
            </Link>
          ))}
        </div>
      ))}
    </article>
  );
}
