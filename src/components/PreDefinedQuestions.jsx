import { useNavigate } from "react-router";

export default function PreDefinedQuestions({
  setUserInput,
  setShowNav,
  handleSave,
}) {
  const navigate = useNavigate();
  const preDefinedQueries = [
    "What is Programming?",
    "How to use an API?",
    "What is Artificial Intelligence?",
  ];

  function handleClick(elem) {
    setUserInput(elem);
    setShowNav(false);
    document.querySelector('input[id="sendMessage"]').focus();
  }

  function handleLogout() {
    handleSave();
    sessionStorage.removeItem("loggedInUser");
    navigate("/login");
  }

  return (
    <>
      <h3 className="mb-3">
        Sample questions for you to start with{" "}
        <span className="text-xl">&#128521;</span>
      </h3>
      {preDefinedQueries.map((elem, index) => (
        <button
          key={index}
          onClick={() => handleClick(elem)}
          className="text-slate-300 text-md border-[1px] border-slate-300 text-center p-2 rounded-md my-2 size-full"
        >
          {elem}
        </button>
      ))}
      <button
        onClick={handleLogout}
        className="text-blue-950 text-md border-[1px] bg-slate-300 font-medium text-center p-2 rounded-md my-2 size-full"
      >
        Logout
      </button>
    </>
  );
}
