export interface Project {
  id: string;
  title: string;
  description: string;
  renderUrl: string;
  wireframeUrl: string;
  videoUrl?: string;
  tools: string[];
  link?: string;
  category: "Modeling" | "Animation" | "Animation";
  bentoSize: "small" | "wide" | "tall" | "large";
}

export interface NavItem {
  label: string;
  href: string;
}
