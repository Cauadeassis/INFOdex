const jestAmbient = process.env.NODE_ENV
test("mostra ambiente", () => {
  console.log(`O Jest está rodando no ambiente \x1b[1m${jestAmbient}\x1b[0m.`);
  expect(jestAmbient).toBe("test")
});
