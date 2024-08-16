import BotMessage from "../components/BotMessage";
import UserMessage from "../components/UserMessage";
import QueryForm from "../components/QueryForm";
import sendQueryToGrocApi from "../groqApi";
import { useEffect, useRef } from "react";

export default function MainContainer({
  messages,
  setMessages,
  userInput,
  setUserInput,
}) {
  const msgEnd = useRef(null);

  async function handleFormSubmit(e) {
    e.preventDefault();
    const res = await sendQueryToGrocApi(userInput);
    setMessages([
      ...messages,
      { text: userInput, isBot: false },
      { text: res, isBot: true },
    ]);
    setUserInput("");
  }

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages.length]);

  return (
    <div className="flex md:basis-9/12 justify-center pb-8 pt-20 md:py-8">
      <div className=" relative w-11/12 md:w-10/12">
        <div className="max-h-[90%] overflow-y-auto overflow-hidden scroll-smooth">
          {messages?.map((message, index) => (
            <div key={index}>
              {message.isBot ? (
                <BotMessage message={message} />
              ) : (
                <UserMessage message={message} />
              )}
              <div ref={msgEnd} />
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
}
