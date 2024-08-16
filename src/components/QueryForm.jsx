import sendBtn from "../assets/send.svg";

export default function QueryForm({
  userInput,
  setUserInput,
  handleFormSubmit,
}) {
  return (
    <form
      className="absolute w-full bottom-0 flex bg-slate-800 px-2 py-3 rounded-md"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <input
        className="w-full bg-transparent px-3 text-sm outline-none"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Send a message"
      />
      <button>
        <img src={sendBtn} alt="send-btn" />
      </button>
    </form>
  );
}
