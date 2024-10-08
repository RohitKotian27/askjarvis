import React, { useEffect } from "react";
import sendBtn from "../assets/send.svg";
import micBtn from "../assets/mic.svg";
import micMuteBtn from "../assets/mic-mute.svg";

export default function QueryForm({
  userInput,
  setUserInput,
  handleFormSubmit,
  transcript,
  startListening,
  voiceInput,
}) {
  useEffect(() => {
    setUserInput(transcript);
  }, [transcript, setUserInput]);

  return (
    <form
      className="absolute w-full bottom-0 flex bg-slate-800 px-2 py-3 rounded-md"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <input
        className="w-full bg-transparent px-3 text-sm outline-none"
        type="text"
        id="sendMessage"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Send a message or use voice search"
        autoFocus
        required
      />
      <div onClick={startListening} className="mx-1 cursor-pointer">
        <img src={voiceInput ? micBtn : micMuteBtn} alt="mic-btn" />
      </div>
      <button>
        <img src={sendBtn} className="mx-1" alt="send-btn" />
      </button>
    </form>
  );
}
