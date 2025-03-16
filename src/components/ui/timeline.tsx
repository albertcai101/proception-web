"use client";

import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="w-full bg-zinc-950 font-sans">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-8">
          Master Plan
        </h2>
        <div className="space-y-12">
          {data.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-none pt-1">
                <div className="h-6 w-6 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900">
                  <span className="text-sm font-medium text-zinc-400">{item.title}</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 