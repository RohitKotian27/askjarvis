import BotMessage from "../components/BotMessage";
import UserMessage from "../components/UserMessage";
import QueryForm from "../components/QueryForm";
import sendQueryToGrocApi from "../groqApi";
import React, { useEffect, useRef } from "react";

const MainContainer = ({ messages, setMessages, userInput, setUserInput }) => {
  const msgEnd = useRef(null);
  async function handleFormSubmit(e) {
    e.preventDefault();
    setMessages([
      ...messages,
      { text: userInput, isBot: false },
      { isBot: true, isLoading: true, skipCopy: true },
    ]);
    setUserInput("");
    const res = await sendQueryToGrocApi(userInput);
    setMessages((prevState) => {
      prevState[prevState.length - 1] = { text: res, isBot: true };
      return [...prevState];
    });
  }

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages.length]);

  return (
    <div className="flex md:basis-9/12 justify-center pb-8 pt-20 md:py-8">
      <div className=" relative w-11/12 md:w-10/12">
        <div className="h-[90%] overflow-y-auto overflow-hidden scroll-smooth">
          {messages?.map((message, index) => (
            <div key={index}>
              <div ref={msgEnd} />
              {message.isBot ? (
                <BotMessage message={message} />
              ) : (
                <UserMessage message={message} />
              )}
            </div>
          ))}
        </div>
        <QueryForm
          userInput={userInput}
          setUserInput={setUserInput}
          handleFormSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
};

export default React.memo(MainContainer);
