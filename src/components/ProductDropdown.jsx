import React, { useState } from "react";
import "../styles/ProductDropdown.css";

// Example SVG icons as React components
const NotebookIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#f4c6c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="14" height="12" rx="2"/><path d="M7 8h6M7 12h4"/></svg>
);
const ExploreIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#f4c6c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7"/><path d="M10 10l3-6-6 3-3 6 6-3z"/></svg>
);
const MagicAIIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#f4c6c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v2M10 16v2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M2 10h2M16 10h2M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"/><circle cx="10" cy="10" r="3"/></svg>
);
const EmbeddedIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#f4c6c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="14" height="10" rx="2"/><path d="M7 7V5a3 3 0 0 1 6 0v2"/></svg>
);
const SemanticIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#f4c6c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="14" height="14" rx="2"/><path d="M7 7h6v6H7z"/></svg>
);
const CollaborationIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#f4c6c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="3"/><circle cx="13" cy="13" r="3"/><path d="M10 10l1 1"/></svg>
);
const AppBuilderIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#f4c6c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="14" height="14" rx="2"/><path d="M7 7h6v6H7z"/></svg>
);
const IntegrationsIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#f4c6c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="14" cy="14" r="3"/><path d="M9 9l2 2"/></svg>
);

const menuItems = [
  {
    icon: <NotebookIcon />,
    title: "Notebooks",
    desc: "Analyze, model, and explore, like never before",
  },
  {
    icon: <ExploreIcon />,
    title: "Explore",
    desc: "Powerful exploration tools in a friendly, no-code UI",
  },
  {
    icon: <MagicAIIcon />,
    title: "Magic AI",
    desc: "Smarter, faster analysis",
  },
  {
    icon: <EmbeddedIcon />,
    title: "Embedded analytics",
    desc: "Seamlessly embed data experiences for your customers",
  },
  {
    icon: <SemanticIcon />,
    title: "Semantic models",
    desc: "Sync governed metrics for consistent insights",
  },
  {
    icon: <CollaborationIcon />,
    title: "Collaboration and sharing",
    desc: "Bring everyone together in one collaborative workspace",
  },
  {
    icon: <AppBuilderIcon />,
    title: "App Builder",
    desc: "Build and share insights with beautiful interactive visualizations",
  },
  {
    icon: <IntegrationsIcon />,
    title: "Integrations",
    desc: "Connect to anything",
  },
];

export default function ProductDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={`nav-dropdown-btn${open ? " active" : ""}`}>
        <span>
          <svg width="20" height="20" fill="none" stroke="#f4c6c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="7" width="14" height="6" rx="2"/>
            <path d="M6 7v6M10 7v6M14 7v6"/>
          </svg>
        </span>Product <span className="arrow">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="dropdown-menu">
          {menuItems.map((item) => (
            <div className="dropdown-item" key={item.title}>
              <span className="dropdown-icon">{item.icon}</span>
              <div>
                <div className="dropdown-title">{item.title}</div>
                <div className="dropdown-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}