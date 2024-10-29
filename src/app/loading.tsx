import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        <p className="mt-4 text-gray-700 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
