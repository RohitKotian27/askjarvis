import { Tooltip } from "react-tooltip";
import { useState } from "react";

export default function CopyText({ message }) {
  const [copyText, setCopyText] = useState("Copy Text");
  function handleCopy() {
    const messageToCopy = message?.text?.join("\n");
    navigator.clipboard.writeText(messageToCopy);
    setCopyText("Copied");
  }

  return (
    <div
      className={`cursor-pointer my-2 bg-slate-500 w-fit p-2 rounded-md focus:bg-none ${
        message?.skipCopy ? "hidden" : ""
      }`}
      data-tooltip-id="copy-tooltip"
      data-tooltip-content={copyText}
      onClick={handleCopy}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-copy"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
        />
      </svg>
      <Tooltip id="copy-tooltip" place="bottom" />
    </div>
  );
}
