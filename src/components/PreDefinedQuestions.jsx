const preDefinedQueries = [
  "What is Programming?",
  "How to use an API?",
  "What is Artificial Intelligence?",
];

export default function PreDefinedQuestions({ setUserInput, setShowNav }) {
  function handleClick(elem) {
    setUserInput(elem);
    setShowNav(false);
    document.querySelector('input[id="sendMessage"]').focus();
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
    </>
  );
}
