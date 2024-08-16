import Groq from "groq-sdk";
const groq = new Groq({
  apiKey: process.env.REACT_APP_JARVIS_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default async function sendQueryToGrocApi(userInput) {
  const response = await groq.chat.completions
    .create({
      messages: [
        {
          role: "user",
          content: userInput,
        },
      ],
      model: "llama3-8b-8192",
    })
    .catch(() => "No Response captured");
  return (
    response.choices[0]?.message?.content?.split("\n").filter((elem) => elem) ||
    ""
  );
}
