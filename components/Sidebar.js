import { IconBars, IconTimes } from "./icons";

export default function Sidebar({ open, onToggle }) {
  return (
    <nav className="sidebardiv">
      <button
        type="button"
        className="sidebar-menu-btn"
        onClick={onToggle}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <IconTimes className="sidebar-icon" />
        ) : (
          <IconBars className="sidebar-icon" />
        )}
      </button>
    </nav>
  );
}
