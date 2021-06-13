/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
let id = 0;
const getId = function () {
  return (id += 1);
};

const typeOfTansaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: getId(),
      type,
      amount,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if (amount < 1) return console.log('Некоректная сумма пополнения.');
    const transaction = this.createTransaction(
      amount,
      typeOfTansaction.DEPOSIT,
    );
    this.balance += amount;
    this.transactions.push(transaction);
    return console.log(
      `+++++++ Счет пополнен на ${amount} кредит. Баоанс: ${this.balance}`,
    );
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount < 1) {
      return console.log('Некоректная сумма списания.');
    } else if (amount > this.balance) {
      return console.log('Недостаточно средств на счету.');
    }
    const transaction = this.createTransaction(
      amount,
      typeOfTansaction.WITHDRAW,
    );
    this.balance -= amount;
    this.transactions.push(transaction);
    return console.log(
      `------- Со счета списано ${amount} кредитов. Баланс: ${this.balance}`,
    );
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return console.log(`Ваш баланс: ${this.balance}`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (id !== item.id) continue;
      return console.table(item);
    }
    return console.log('Некоректный ID транзакции');
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let filteredTransaction = [];

    for (const item of this.transactions) {
      if (type !== item.type) continue;

      filteredTransaction.push(item);
    }

    if (filteredTransaction.length) {
      return console.table(filteredTransaction);
    }
    return console.log('Некоректный тип транзакции');
  },
};

account.getBalance();
account.deposit(150);
account.getBalance();
console.table(account.transactions);
account.deposit(-5);
account.deposit(0);
account.deposit(1);
account.getBalance();
console.table(account.transactions);
account.deposit(12);
account.withdraw(100);
account.deposit(15);
account.deposit(64);
account.withdraw(-4);
account.deposit(1000);
account.withdraw(0);
account.withdraw(100000);
account.deposit(700);
account.deposit(7);
account.deposit(359);
console.table(account.transactions);
account.deposit(54);
account.deposit(3565);
account.withdraw(435);
account.getTransactionDetails(2);
account.getTransactionDetails(9);
account.getTransactionDetails(54);
account.deposit(34);
account.withdraw(455);
account.withdraw(4);
account.deposit(555);
account.getTransactionTotal('qwe');
account.getTransactionTotal('deposit');
account.getTransactionTotal('withdraw');