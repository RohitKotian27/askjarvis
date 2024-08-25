import Typewriter from "typewriter-effect";

export default function TypeWriter() {
  return (
    <div className="flex items-center text-5xl h-0">
      <Typewriter
        options={{
          strings: ["..."],
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    </div>
  );
}
