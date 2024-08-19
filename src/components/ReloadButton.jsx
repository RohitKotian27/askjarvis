import newChatBtn from "../assets/add-30.png";

export default function ReloadButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      className="flex items-center justify-center size-full my-2 md:my-6 bg-blue-500 p-3 rounded-md text-md"
    >
      <img src={newChatBtn} alt="Add button" className="w-4 mr-1" />
      New Chat
    </button>
  );
}
