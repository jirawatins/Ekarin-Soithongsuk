import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { BentoCard } from "@/components/ui/BentoCard";

const skillsData = [
  { subject: "Blender", A: 95, fullMark: 100 },
  { subject: "Maya", A: 80, fullMark: 100 },
  { subject: "ZBrush", A: 85, fullMark: 100 },
  { subject: "Unreal", A: 70, fullMark: 100 },
  { subject: "Substance", A: 90, fullMark: 100 },
];

const projectData = [
  { name: "Modeling", value: 40 },
  { name: "Animation", value: 30 },
];

const COLORS = ["#766092", "#A378B5", "#E7D3EE", "#2D2438"];

export function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Skills Radar Chart */}
      <BentoCard className="bg-card min-h-[400px] flex flex-col">
        <h3 className="font-display text-xl font-bold text-text-main mb-4">
          SKILL PROFICIENCY
        </h3>
        <div className="flex-1 w-full h-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
              <PolarGrid stroke="#766092" strokeOpacity={0.2} />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#766092", fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Proficiency"
                dataKey="A"
                stroke="#A378B5"
                strokeWidth={2}
                fill="#A378B5"
                fillOpacity={0.4}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E7D3EE",
                  borderRadius: "8px",
                  color: "#2D2438",
                }}
                itemStyle={{ color: "#766092" }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </BentoCard>

      {/* Project Distribution Pie Chart */}
      <BentoCard className="bg-card min-h-[400px] flex flex-col">
        <h3 className="font-display text-xl font-bold text-text-main mb-4">
          PROJECT DISTRIBUTION
        </h3>
        <div className="flex-1 w-full h-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={projectData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {projectData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E7D3EE",
                  borderRadius: "8px",
                  color: "#2D2438",
                }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value) => <span className="text-text-muted text-sm font-medium ml-1">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </BentoCard>
    </div>
  );
}
