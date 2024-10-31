import "./App.css";
import { useOutletContext } from "react-router-dom";
import MainContainer from "./components/MainContainer";

function App() {
  const [messages, setMessages, userInput, setUserInput] = useOutletContext();
  return (
    <>
      <MainContainer
        messages={messages}
        setMessages={setMessages}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </>
  );
}

export default App;
