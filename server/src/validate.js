export const validateInput = (text) => {
  if (!text || typeof text !== "string") {
    return { valid: false, message: "Input text is required." };
  }
  if (text.trim().length === 0) {
    return { valid: false, message: "Input text cannot be empty." };
  }
  if (text.length > 10000) {
    return { valid: false, message: "Text too long (max 10,000 chars)." };
  }
  return { valid: true };
};