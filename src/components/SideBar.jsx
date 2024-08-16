import appLogo from "../assets/chatgpt.svg";
import newChatBtn from "../assets/add-30.png";
import PreDefinedQuestions from "../components/PreDefinedQuestions";

export default function SideBar({ setUserInput }) {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block basis-3/12 border-r-[1px] border-slate-600">
        <div className="p-6 border-slate-600">
          <div className="flex items-center">
            <img src={appLogo} alt="Logo" className="mr-3" />
            <span className="text-xl font-medium">J.A.R.V.I.S</span>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center size-full my-8 bg-blue-500 p-3 rounded-md text-md"
          >
            <img src={newChatBtn} alt="Add button" className="w-4 mr-1" />
            New Chat
          </button>
          <PreDefinedQuestions setUserInput={setUserInput} />
        </div>
      </div>
      {/* Mobile Version */}
      <div className="flex md:hidden items-center fixed px-4 py-3 w-full bg-slate-800">
        <img src={appLogo} alt="Logo" className="mr-3 w-10" />
        <span className="text-xl font-medium">J.A.R.V.I.S</span>
      </div>
    </>
  );
}
