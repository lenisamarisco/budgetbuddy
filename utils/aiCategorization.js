import axios from "axios";

const OPENAI_API_KEY = "your_openai_api_key"; // Replace with your actual key

export async function categorizeExpense(description) {
  if (!OPENAI_API_KEY) {
    return simpleCategorization(description); // Fallback method
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Categorize expenses into 'Food', 'Transport', 'Shopping', 'Bills', 'Entertainment', or 'Other'."
          },
          {
            role: "user",
            content: `Categorize this expense: "${description}"`
          }
        ],
        max_tokens: 10,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("AI Categorization failed:", error);
    return simpleCategorization(description);
  }
}

// Fallback categorization based on keywords
function simpleCategorization(description) {
  const lowerDesc = description.toLowerCase();
  if (lowerDesc.includes("uber") || lowerDesc.includes("bus")) return "Transport";
  if (lowerDesc.includes("grocery") || lowerDesc.includes("restaurant")) return "Food";
  if (lowerDesc.includes("netflix") || lowerDesc.includes("movie")) return "Entertainment";
  if (lowerDesc.includes("clothes") || lowerDesc.includes("shopping")) return "Shopping";
  if (lowerDesc.includes("rent") || lowerDesc.includes("electricity")) return "Bills";
  return "Other";
}
