function calc(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            return 'Invalid input';
            break;
    }
}

/**
 * У нас есть функиця, которая тестирует наш калькулятор
 */
function testCalc() {
    /**
     * Массив с нашим набором тестКейсов
     * Это многомерный массив, где каждая строчка - это ровно один тестКейс
     * Каждый такой тест кейс состоит из пары: [параметры, ожидаемый результат]
     */
    const testCases = [
        [[1, 2, '+'], 3], // Проверяем что 1 + 2 == 3
        [[8, 2, '/'], 4], // Проверяем что 8 / 2 == 4
        [[2, 2, '*'], 4], // итд
        [[5, 3, '-'], 2], // итп
        [[1, 1, '^'], 'Invalid input'], // Проверяем что данные введены корректно
        [[1, 1, '+'], 'Invalid input'], // Проверяем что данные введены корректно
    ];

    // Проходим по всему массиву тестКейсов
    for (let oneCase of testCases) {
        // Деструктуризация массива
        // @link https://learn.javascript.ru/destructuring
        // Теперь в переменной params у нас параметры, т.е. [1, 2, '+'],
        // а в переменной expected ожидаемый результат, т.е. 3
        let [params, expected] = oneCase;

        // Вызываем нашу
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        let result = calc(...params);

        // И проверяем, что результат, что вернула функция совпадает с expexted
        if (result !== expected) {
            throw `Ошибка в ${oneCase}. Ожидаемый результат ${expected} не равен ${result}`;
        }

        // Если все ОК, выводим, что все ОК
        console.log(`Результат ${oneCase} равен ${result}`);
    }

    console.log('Все тесты прошли успешно!');
}

testCalc();
