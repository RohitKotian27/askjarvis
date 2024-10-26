import newChatBtn from "../assets/add-30.png";

export default function ReloadButton({ handleSave, setMessages }) {
  function handleReload() {
    const defaultMessage = [
      {
        text: [
          "Hi there! I'm Jarvis, your new chat buddy! I'm here to help answer any questions you might have, provide some entertainment, or just chat about your day. What's on your mind?",
        ],
        isBot: true,
        skipCopy: true,
        isLoading: false,
      },
    ];
    handleSave(defaultMessage);
    setMessages(defaultMessage);
  }
  return (
    <button
      onClick={handleReload}
      className="flex items-center justify-center size-full my-3 md:my-4 bg-blue-500 p-3 rounded-md text-md"
    >
      <img src={newChatBtn} alt="Add button" className="w-4 mr-1" />
      New Chat
    </button>
  );
}
