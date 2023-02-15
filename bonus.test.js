const calculateBonus = require("./bonus");
describe("Проверка вычисления бонуса", () => {
  it("Тест, если сумма < 50", () => {
    expect(calculateBonus(20, 10)).toBe(30);
  });
  it("Тест, если сумма = 50", () => {
    expect(calculateBonus(20, 30)).toBe(50);
  });
  it("Тест, если сумма > 50", () => {
    expect(calculateBonus(20, 40)).toBe(50);
  });
});
