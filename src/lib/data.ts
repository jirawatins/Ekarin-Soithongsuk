import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Midterm Animation Project",
    description: "โปรเจกต์งานแอนิเมชันช่วง Midterm (สามารถแก้ไขรายละเอียดเพิ่มเติมได้ที่นี่)",
    renderUrl: "/Midterm01.png",
    wireframeUrl: "", // TODO: นำไฟล์รูปภาพ Wireframe หรือรูปเบื้องหลังการทำงานมาใส่ใน public/ แล้วพิมพ์ชื่อไฟล์ที่นี่ เช่น "/Midterm01-wireframe.png"
    videoUrl: "/FinalBlocking3.avi",
    tools: ["Animation", "3D Modeling"], // TODO: แก้ไขชื่อโปรแกรมที่ใช้ทำงานจริง เช่น Maya, Blender
    link: "", // TODO: หากมีลิงก์ผลงานบนเว็บอื่น (เช่น YouTube/Vimeo) สามารถนำมาใส่ได้
    category: "Animation",
    bentoSize: "large",
  },
  {
    id: "2",
    title: "SLR Camera Final Render",
    description: "โปรเจกต์ส่งงาน Final หัวข้อกล้อง SLR (สามารถแก้ไขรายละเอียดเพิ่มเติมได้ที่นี่)",
    renderUrl: "", // TODO: นำไฟล์รูปภาพปก (Render) ของงานชิ้นนี้มาใส่ใน public/ แล้วพิมพ์ชื่อไฟล์ที่นี่
    wireframeUrl: "", // TODO: นำไฟล์รูปภาพ Wireframe มาใส่ใน public/ แล้วพิมพ์ชื่อไฟล์ที่นี่
    videoUrl: "/SLRfinal.avi",
    tools: ["Modeling", "Rendering"], // TODO: แก้ไขชื่อโปรแกรมที่ใช้ทำงานจริง
    link: "",
    category: "Modeling",
    bentoSize: "tall",
  }
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];