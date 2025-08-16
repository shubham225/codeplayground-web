"use client";

export default function TerminalCard() {
  return (
    <div
      className="terminal-loader w-full max-w-[1100px] h-[200px] 
      bg-white dark:bg-[#1c1c1c] 
      border border-gray-300 dark:border-white/25 
      rounded-lg overflow-hidden m-5 
      shadow-[0_0_15px_rgba(0,0,0,0.15)] dark:shadow-[0_0_15px_rgba(0,0,0,0.4)]"
    >
      {/* Header */}
      <div
        className="terminal-header relative flex items-center justify-center 
        bg-gray-200 dark:bg-[#343434] p-1.5"
      >
        <div className="terminal-controls absolute left-3 flex gap-[7px]">
          <div className="control w-[15px] h-[15px] rounded-full bg-[#e33]" />
          <div className="control w-[15px] h-[15px] rounded-full dark:bg-[#ee0] bg-yellow-500" />
          <div className="control w-[15px] h-[15px] rounded-full bg-[#0b0]" />
        </div>
        <div className="terminal-title text-gray-700 dark:text-[#eeeeee]/75">
          CodePlayground_
        </div>
      </div>

      {/* Content */}
      <div className="content p-2.5">
        <div
          className="text inline-block whitespace-nowrap overflow-hidden 
          border-green-600 font-semibold 
          text-green-600 dark:text-green-500"
        >
          <p>
            <span className="text-cyan-600 dark:text-cyan-400">&gt;</span>{" "}
            Hello,{" "}
            <span className="text-yellow-600 dark:text-yellow-300">Coder!</span>{" "}
            👋
          </p>
          <p>
            <span className="text-cyan-600 dark:text-cyan-400">&gt;</span> Ready
            to solve{" "}
            <span className="text-pink-500 dark:text-pink-400">
              challenges?
            </span>
          </p>
          <p>
            <span className="text-cyan-600 dark:text-cyan-400">&gt;</span>{" "}
            Build. Break.{" "}
            <span className="text-purple-600 dark:text-purple-400">Learn</span>
            <span className="animate-blink">_</span>
          </p>
        </div>
      </div>
    </div>
  );
}
