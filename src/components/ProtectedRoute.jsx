import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import SideBar from "./SideBar";
import axios from "axios";

export default function ProtectedRoute() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
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
    const loggedInUser = JSON.parse(
      sessionStorage.getItem("loggedInUser") || "{}"
    );
    if (!loggedInUser?.userId) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex h-lvh">
      <SideBar
        userName={userName}
        setUserInput={setUserInput}
        messages={messages}
        setMessages={setMessages}
      />
      <Outlet context={[messages, setMessages, userInput, setUserInput]} />
    </div>
  );
}
