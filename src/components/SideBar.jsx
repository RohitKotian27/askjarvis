import axios from "axios";
import PreDefinedQuestions from "./PreDefinedQuestions";
import ReloadButton from "./ReloadButton";
import SiteLogo from "./SiteLogo";
import React, { useState } from "react";

const SideBar = ({ userName, setUserInput, messages, setMessages }) => {
  const [showNav, setShowNav] = useState(false);
  function handleNavBar() {
    setShowNav((prev) => !prev);
  }

  function handleSave(userMessages = messages) {
    const userEmail = JSON.parse(sessionStorage.getItem("loggedInUser")).email;
    const formData = {
      email: userEmail,
      chats: userMessages,
    };
    axios
      .post(process.env.REACT_APP_SAVE_CHAT_URL, formData)
      .then(() => {
        console.log("Saved user chats in database");
      })
      .catch((err) => console.warn(err));
  }

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block basis-3/12 border-r-[1px] border-slate-600">
        <div className="p-6 border-slate-600">
          <SiteLogo />
          <div className="text-xl font-medium my-2">Welcome {userName}!</div>
          <ReloadButton handleSave={handleSave} setMessages={setMessages} />
          <PreDefinedQuestions
            setUserInput={setUserInput}
            setShowNav={setShowNav}
            handleSave={handleSave}
          />
        </div>
      </div>
      {/* Mobile Version */}
      <div className="z-10 md:hidden items-center fixed px-4 py-3 w-full bg-slate-800">
        <div className="flex justify-between">
          <SiteLogo />
          <div
            className="text-stone-300 border-2 border-stone-300 justify-end p-2 rounded cursor-pointer"
            onClick={handleNavBar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
        </div>
        {showNav && (
          <div className="my-8">
            <div className="text-xl font-medium my-2">Welcome {userName}!</div>
            <ReloadButton />
            <PreDefinedQuestions
              setUserInput={setUserInput}
              setShowNav={setShowNav}
              handleSave={handleSave}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(SideBar);
