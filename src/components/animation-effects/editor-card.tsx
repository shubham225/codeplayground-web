"use client";

export default function EditorCard() {
  return (
    <div
      className="w-full max-w-[1100px] h-[300px] 
      bg-white dark:bg-[#1e1e1e] 
      border border-gray-300 dark:border-gray-700 
      rounded-lg overflow-hidden m-5 
      shadow-[0_0_15px_rgba(0,0,0,0.15)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] 
      font-mono text-sm"
    >
      {/* Header with traffic light controls */}
      <div className="flex items-center justify-between bg-gray-200 dark:bg-[#2d2d2d] px-3 py-2 border-b border-gray-300 dark:border-gray-700">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#e33] hover:brightness-125 cursor-pointer" />
          <div className="w-3.5 h-3.5 rounded-full dark:bg-[#ee0] bg-yellow-500 hover:brightness-125 cursor-pointer" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#0b0] hover:brightness-125 cursor-pointer" />
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-300">Solution.java</p>
        <div />
      </div>

      {/* Code editor content */}
      <div className="flex h-full">
        {/* Line numbers */}
        <div className="bg-gray-100 dark:bg-[#1b1b1b] text-gray-400 dark:text-gray-500 px-4 py-2 text-right select-none">
          {Array.from({ length: 10 }, (_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
        </div>

        {/* Java code */}
        <div className="p-2 text-left space-y-1 overflow-auto">
          <p>
            <span className="text-purple-600 dark:text-purple-400">public class</span>{" "}
            <span className="text-blue-600 dark:text-blue-400">Solution</span> {"{"}
          </p>
          <p className="ml-6">
            <span className="text-purple-600 dark:text-purple-400">public static void</span>{" "}
            <span className="text-blue-600 dark:text-blue-400">main</span>(
            <span className="text-green-700 dark:text-green-400">String[] args</span>) {"{"}
          </p>
          <p className="ml-12">
            <span className="text-pink-600 dark:text-pink-400">System.out.println</span>(
            <span className="text-green-600 dark:text-green-400">&quot;Hello, Hacker! Ready for today’s quest? 🧙‍♂️&quot;</span>);
          </p>
          <p className="ml-6">{"}"}</p>
          <p>{"}"}</p>
        </div>
      </div>
    </div>
  );
}
