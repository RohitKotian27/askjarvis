import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";

function App() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: [
        "Hi, I am Jarvis your personal AI Assitant. I am ready to help you!!!",
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
