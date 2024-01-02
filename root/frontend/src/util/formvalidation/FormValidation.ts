export const RequiredField = (
  message: string = "Detta fält är obligatoriskt.",
) => {
  return {
    required: true,
    message,
  };
};

export const NoWhitespace = (
  message: string = "Du får inte använda enbart mellanslag.",
) => {
  return {
    whitespace: true,
    message,
  };
};

export const MinLength = (min: number) => {
  return {
    min,
    message: `Du måste ange minst ${min} tecken.`,
  };
};
