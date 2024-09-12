import newChatBtn from "../assets/add-30.png";

export default function ReloadButton() {
  function handleReload() {
    localStorage.removeItem("chatMessages");
    window.location.reload();
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
