import botLogo from "../assets/chatgptLogo.svg";

export default function BotMessage({ message }) {
  return (
    <div className="flex w-fit bg-slate-800 mb-3 px-4 py-3 text-sm rounded-md">
      <img className="mr-4 w-8 h-fit" src={botLogo} alt="bot-logo" />
      <div>
        {message.text.map((item, index) => (
          <div key={index}>
            <p className="leading-6">{item}</p>
            {message.text.length > 1 && <br />}
          </div>
        ))}
      </div>
    </div>
  );
}
