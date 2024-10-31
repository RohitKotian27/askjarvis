import { Tooltip } from "react-tooltip";
import { useState } from "react";

export default function SaveText({ message }) {
  const [saveText, setSaveText] = useState("Save Text");
  function handleSave() {
    console.log(message);
    setSaveText("Saved");
  }

  return (
    <div
      className={`cursor-pointer my-2 bg-slate-500 w-fit p-2 rounded-md focus:bg-none ml-2 ${
        message?.skipCopy ? "hidden" : ""
      }`}
      data-tooltip-id="save-tooltip"
      data-tooltip-content={saveText}
      onClick={handleSave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-save"
        viewBox="0 0 16 16"
      >
        <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z" />
      </svg>
      <Tooltip id="save-tooltip" place="bottom" />
    </div>
  );
}
