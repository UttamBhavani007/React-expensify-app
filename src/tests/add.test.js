const add = (a, b) => a + b;
const generateGreeting = (name = "anonymous") => `Hello ${name}`;

test("should add two numbers", () => {
  const result = add(3, 4);
  if (result !== 7) {
    expect(result).toBe(7);
  }
});

test("should greet the user", () => {
  const result = generateGreeting("Uttam");
});

test("should genenrate greetig for no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello anonymous");
});
