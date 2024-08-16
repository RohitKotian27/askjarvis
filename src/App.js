import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";

function App() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: [
        "Hi there! I'm Jarvis, your new chat buddy! I'm here to help answer any questions you might have, provide some entertainment, or just chat about your day. What's on your mind?",
      ],
      isBot: true,
    },
  ]);

  return (
    <div className="flex h-lvh">
      <SideBar setUserInput={setUserInput} />
      <MainContainer
        messages={messages}
        setMessages={setMessages}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </div>
  );
}

export default App;
