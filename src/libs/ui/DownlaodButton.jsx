import React from "react";

const DownlaodButton = () => {
  const hnadleDownload = () => {
    const path =
      "https://utfs.io/f/29a5caa4-066f-435a-a511-78b0cc4debd7-5bo0at.pdf";
    const link = document.createElement("a");
    link.download = "Turbo Federal Capabilities.pdf";
    link.href = path;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button
      onClick={hnadleDownload}
      href="#_"
      class="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-2xl  group -z-50"
    >
      <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
      <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-700 rounded-full blur-md"></span>
        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-700 rounded-full blur-md"></span>
      </span>
      <span class="relative text-white font-semibold">
        Download Capabilities
      </span>
    </button>
  );
};

export default DownlaodButton;
