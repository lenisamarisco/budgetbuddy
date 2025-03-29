import axios from 'axios';

// Function to get AI budget advice
export const getBudgetAdvice = async (apiKey, income, outcome) => {
  if (!apiKey) {
    console.error("ERROR: Missing OpenAI API Key. Please provide it.");
    return "API key is missing.";
  }

  const messages = [
    { role: "system", content: "You are a helpful finance assistant providing budget advice." },
    { role: "user", content: `I have an income of ${income} and an outcome of ${outcome}. Give me financial advice.` }
  ];

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: messages
      },
      {
        headers: {
          "Authorization": `Bearer ${apiKey}`, // API Key passed as an argument
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices?.[0]?.message?.content || "No response from AI.";
  } catch (error) {
    console.error("Error fetching AI advice:", error.response?.data || error.message);
    return "Sorry, I couldn't fetch advice right now.";
  }
};
