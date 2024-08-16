import userIcon from "../assets/user-icon.png";

export default function UserMessage({ message }) {
  return (
    <div className="flex justify-end">
      <div className="w-fit bg-slate-500 mb-3 px-4 py-3 text-sm rounded-md items-center">
        <p>{message.text}</p>
      </div>
    </div>
  );
}
