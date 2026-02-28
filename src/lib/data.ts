import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Cyberpunk Cityscape",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    renderUrl: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop", // ภาพเมืองไซเบอร์พังก์
    wireframeUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    tools: ["Blender", "Substance Painter", "Modeling"],
    link: "",
    category: "Modeling",
    bentoSize: "large", // ใหญ่สุด (2x2)
  },
  {
    id: "2",
    title: "Mech Warrior Model",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    renderUrl: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1974&auto=format&fit=crop", // ภาพหุ่นยนต์/เกราะ
    wireframeUrl: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2000&auto=format&fit=crop",
    tools: ["Maya", "ZBrush", "Character"],
    link: "",
    category: "Modeling",
    bentoSize: "tall", // ทรงสูง (1x2)
  },
  {
    id: "3",
    title: "Abstract Glass Render",
    description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
    renderUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop", // ภาพกระจก Abstract
    wireframeUrl: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop",
    tools: ["Cycles", "Lighting", "Abstract"],
    link: "",
    category: "Modeling",
    bentoSize: "small", // ทรงจัตุรัส (1x1)
  },
  {
    id: "4",
    title: "Fantasy Weapon Set",
    description: "Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue.",
    renderUrl: "https://images.unsplash.com/photo-1589998059171-989d887dda6e?q=80&w=2076&auto=format&fit=crop", // ภาพแนวแฟนตาซี/อาวุธ
    wireframeUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2000&auto=format&fit=crop",
    tools: ["Unity", "Low Poly", "Game Assets"],
    link: "",
    category: "Modeling",
    bentoSize: "small", // ทรงกว้าง (2x1)
  },
  {
    id: "5",
    title: "Automotive Visualization",
    description: "Phasellus pellentesque, id tristique in, neque. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    renderUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop", // ภาพรถสปอร์ต
    wireframeUrl: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2000&auto=format&fit=crop",
    tools: ["V-Ray", "3ds Max", "Automotive"],
    link: "",
    category: "Animation",
    bentoSize: "wide", // ทรงจัตุรัส (1x1)
  },
  {
    id: "6",
    title: "Sci-Fi Interior",
    description: "Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo.",
    renderUrl: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?q=80&w=2052&auto=format&fit=crop", // ภาพยานอวกาศ/Sci-Fi
    wireframeUrl: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2000&auto=format&fit=crop",
    tools: ["Unreal Engine", "Modular", "Sci-Fi"],
    link: "",
    category: "Animation",
    bentoSize: "wide", // ทรงกว้าง (2x1)
  },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];