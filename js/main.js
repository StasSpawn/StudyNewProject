// Урок №11
'use strict';

const start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value' )[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeItems = document.querySelectorAll('.income-items'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    dataBlock = document.querySelector('.data'),
    allInputsText = document.querySelectorAll('input[type="text"]'),
    allInputs = document.querySelectorAll('input'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');


class AppData {
    constructor () {
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.expensesMonth = 0;
        this.deposit = false;
        this.addExpenses = [];
    }
    checkSalaryAmount = () => {
        if (salaryAmount.value === '' || isNaN(salaryAmount.value)) {
            start.disabled = true;
            // console.log('Месячный доход должен быть заполнен и быть числом');
        } else {
            start.disabled = false;
        }
    };

    start = function () {
        // Запуск основных вычислений
        this.getExpenses();
        this.budget = +salaryAmount.value;
        this.getIncome();
        this.getExpensesMonth();
        this.getAdds(additionalExpensesItem.value.split(','));
        this.getAdds(additionalIncomeItem);
        this.getDeposit();
        this.getInfoDeposit();
        this.getBudget();

        this.showResult();
        //Отключение всех input[type="text"] с левой стороны
        const allInputsTextLeft = dataBlock.querySelectorAll('input[type="text"]');
        for (let i = 0; i < allInputsTextLeft.length; i++) {
            allInputsTextLeft[i].disabled = true;
        }
    };

    showResult = function () {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcPeriod();
        start.style.display = 'none';
        cancel.style.display = 'block';
        //За сколько месяцев будет достигнута цель
        //this.getTargetMonth();
        //Уровень дохода
        //appData.getStatusIncome();
    };

    addBlock = (newVar, items, plus, elemName) => {
        newVar = items[0].cloneNode(true);
        items[0].parentNode.insertBefore(newVar, plus);
        items = document.querySelectorAll(elemName);
        if (items.length === 3) {
            plus.style.display = 'none';
        }
    };

    getExpenses = function () {
        const _this = this;
        expensesItems.forEach(function (item) {
            const itemExpenses = item.querySelector('.expenses-title').value;
            const cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                _this.expenses[itemExpenses] = cashExpenses;
            }
        });
    };

    getIncome = function () {
        const _this = this;
        incomeItems.forEach(function (item) {
            const itemIncome = item.querySelector('.income-title').value;
            const cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                _this.income[itemIncome] = cashIncome;
            }
        });

        for (let key in appData.income) {
            this.incomeMonth += +this.income[key]
        }
    };

    getAdds = function(arr) {

        arr.forEach( (item) => {
            if(item !== '' && arr === additionalIncomeItem) {
                if(item.value !== '') {
                    this.addIncome.push(item.value.trim());
                }
            } else {
                if (item.trim() !== '') {
                    this.addExpenses.push(item.trim());
                }
            }
        });
    };

    // Сумма всех обязательных расходов
    getExpensesMonth = function () {
        for( let key in appData.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
        return this.expensesMonth;
    };


    getInfoDeposit = function () {
        if (this.deposit) {
            this.percentDeposit = +depositPercent.value;
            this.moneyDeposit = +depositAmount.value;
        }
    };

    getDeposit = function () {
        if (depositCheck.checked) {
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            this.deposit = 'true';
            depositBank.addEventListener('change', function () {
                const selectIndex = this.options[this.selectedIndex].value;
                if (selectIndex === 'other') {
                    depositPercent.style.display = 'inline-block';
                    depositPercent.value = '';
                } else {
                    depositPercent.style.display = 'none';
                    depositPercent.value = selectIndex;
                }
            })
        } else {
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositAmount.value = '';
            this.deposit = 'false';
        }
    };

    getBudget = function () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    };

    getTargetMonth = function () {
        if (this.budgetMonth < 0) {
            console.log('Цель не будет достигнута')
        } else {
            const timeToMission = Math.ceil((targetAmount.value / this.budgetMonth));
            console.log('Через ' + timeToMission + ' месяцев будет достигнута цель, с учётом расходов');
            return timeToMission;
        }
    };

    /*getStatusIncome = function () {
        // Вычисляем бюджет на день. Поправляем учитывая бюджет на месяц (чистая прибыль)
        const budgetDay = Math.floor(this.budgetMonth/30);
        if (budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (budgetDay >= 300 && budgetDay < 800) {
            return ('Средний уровень дохода');
        } else if (budgetDay >= 0 && budgetDay < 300) {
            return ('Низкий уровень дохода');
        } else if (budgetDay < 0) {
            return ('Что то пошло не так');
        }
    };*/

    calcPeriod = function () {
        return this.budgetMonth * periodSelect.value;
    };

    doReset = function () {
        allInputsText.forEach(function (item) {
            item.disabled = false;
            item.value = '';
        });
        start.style.display = 'block';
        cancel.style.display = 'none';
        start.disabled = true;
        periodSelect.value = 0;
        periodAmount.textContent = '0';
        appData.checkSalaryAmount();
        salaryAmount.value = '';
        this.budgetMonth = 0;
        console.log(expensesItems.length);
        if (expensesItems.length > 2) {
            expensesItems[1].remove();
            expensesItems[2].remove();
        } else if (expensesItems.length > 1) {
            expensesItems[1].remove();
        }
        if (incomeItems.length > 2) {
            incomeItems[1].remove();
            incomeItems[2].remove();
        } else if (incomeItems.length > 1) {
            incomeItems[1].remove();
        }
        if (expensesPlus.style.display === 'none') {
            expensesPlus.style.display = 'block'
        }
        if (incomePlus.style.display === 'none') {
            incomePlus.style.display = 'block'
        }
    };


    eventListeners = function () {
        //Проверка на число
        this.checkSalaryAmount();
        salaryAmount.addEventListener('input', this.checkSalaryAmount);
        start.addEventListener('click', this.start.bind(this));
        expensesPlus.addEventListener('click', this.addBlock.bind(this, this.cloneExpensesItem, expensesItems, expensesPlus, '.expenses-items'));
        incomePlus.addEventListener('click', this.addBlock.bind(this, this.cloneIncomeItem, incomeItems, incomePlus, '.income-items'));
        // incomePlus.addEventListener('click', this.addIncomeBlock);
        cancel.addEventListener('click', this.doReset.bind(this));
        depositCheck.addEventListener('change', this.getDeposit);
    };


}


const appData = new AppData();
appData.eventListeners();

// Изменение html в зависимости от input type=range
const changeTextRange = function () {
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = appData.calcPeriod();
};




