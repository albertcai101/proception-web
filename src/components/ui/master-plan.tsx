"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function MasterPlan() {
  const data = [
    {
      title: "1",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-zinc-100 mb-2">
            Build the Foundation
          </h4>
          <p className="text-zinc-400 text-sm mb-3">
            Developing core hardware, AI models, and control systems for advanced humanoid robotics.
          </p>
          <ul className="text-sm text-zinc-300 space-y-1.5">
            <li>• Advanced actuator development</li>
            <li>• Core AI model architecture</li>
            <li>• Precision control systems</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-zinc-100 mb-2">
            Data Collection & Training
          </h4>
          <p className="text-zinc-400 text-sm mb-3">
            Training AI models through real-world data to enhance robotic dexterity.
          </p>
          <ul className="text-sm text-zinc-300 space-y-1.5">
            <li>• Large-scale data collection</li>
            <li>• Machine learning model training</li>
            <li>• Continuous improvement</li>
          </ul>
        </div>
      ),
    },
    {
      title: "3",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-zinc-100 mb-2">
            Real-World Application
          </h4>
          <p className="text-zinc-400 text-sm mb-3">
            Deploying humanoid robots across industries to assist and enhance human capabilities.
          </p>
          <ul className="text-sm text-zinc-300 space-y-1.5">
            <li>• Industry deployment</li>
            <li>• Human-robot collaboration</li>
            <li>• Continuous adaptation</li>
          </ul>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
} 