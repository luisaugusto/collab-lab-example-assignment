interface FormatOption {
  name: string;
  method(string: string): string;
}

export const formatOptions: FormatOption[] = [
  {
    name: "Lower Case",
    method(string) {
      return string.toLowerCase();
    },
  },
  {
    name: "Upper Case",
    method(string) {
      return string.toUpperCase();
    },
  },
];
