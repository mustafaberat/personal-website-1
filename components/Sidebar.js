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
        <i className={`fas ${open ? "fa-times" : "fa-bars"}`} />
      </button>
    </nav>
  );
}
