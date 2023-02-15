const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger;
  //на первом брейкпоинте будут инициализированы и присвоены значения переменным a, b, sum
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger;
  //здесь будет присвоено значение в переменную bonus
  return bonus;
};

calculateBonus(10, 20);
