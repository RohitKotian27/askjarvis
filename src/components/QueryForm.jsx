import React, { useEffect } from "react";
import sendBtn from "../assets/send.svg";
import micBtn from "../assets/mic.svg";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function QueryForm({
  userInput,
  setUserInput,
  handleFormSubmit,
}) {
  const { transcript } = useSpeechRecognition({ language: "en-IN" });
  const handleVoiceInput = () => SpeechRecognition.startListening();

  useEffect(() => {
    console.log("Effect called");
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
        required
      />
      <div onClick={handleVoiceInput} className="mx-1 cursor-pointer">
        <img src={micBtn} alt="mic-btn" />
      </div>
      <button>
        <img src={sendBtn} className="mx-1" alt="send-btn" />
      </button>
    </form>
  );
}
