const preDefinedQueries = [
  "What is Programming?",
  "How to use an API?",
  "What is Artificial Intelligence?",
];

export default function PreDefinedQuestions({ setUserInput }) {
  return (
    <>
      {preDefinedQueries.map((elem, index) => (
        <button
          key={index}
          onClick={() => setUserInput(elem)}
          className="text-slate-300 text-md border-[1px] border-slate-300 text-center p-2 rounded-md mb-4 size-full"
        >
          {elem}
        </button>
      ))}
    </>
  );
}
