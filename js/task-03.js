/* 
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
const findBestEmployee = function(employees) {
  // твой код
};

/////
// Вызовы функции для проверки работоспособности твоей реализации.
/////
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
*/

const findBestEmployee = function (obj) {
  const bestEmployee = [];

  for (const key of Object.keys(obj)) {
    if (obj[key] === Math.max(...Object.values(obj))) {
      bestEmployee.push(key);
    }
  }
  return bestEmployee.join(', ');
};

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    aaaaa: 555,
    bbbbb: 555,
    chelsy: 38,
  }),
); // lux

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence
