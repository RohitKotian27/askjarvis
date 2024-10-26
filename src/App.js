import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";

function App() {
  const { userName, email } = JSON.parse(
    sessionStorage.getItem("loggedInUser") || "{}"
  );

  function getSavedMessages() {
    return axios
      .post(process.env.REACT_APP_GET_CHAT_URL, {
        email: email,
      })
      .then((res) => res.data.userChats);
  }

  useEffect(() => {
    getSavedMessages().then((res) => {
      setMessages(res);
    });
  }, []);

  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <div className="flex h-lvh">
      <SideBar
        userName={userName}
        setUserInput={setUserInput}
        messages={messages}
      />
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
