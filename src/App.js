import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";

function App() {
  const { userName } = JSON.parse(
    sessionStorage.getItem("loggedInUser") || "{}"
  );
  const initialMessage = localStorage.getItem("chatMessages")
    ? JSON.parse(localStorage.getItem("chatMessages"))
    : [
        {
          text: [
            "Hi there! I'm Jarvis, your new chat buddy! I'm here to help answer any questions you might have, provide some entertainment, or just chat about your day. What's on your mind?",
          ],
          isBot: true,
          skipCopy: true,
          isLoading: false,
        },
      ];
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState(initialMessage);

  return (
    <div className="flex h-lvh">
      <SideBar userName={userName} setUserInput={setUserInput} />
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
