import { Selector } from 'testcafe';

fixture`logout-test`
    .page`https://sadmadsoul.dev/auth`;

//Тестирование лог-аута
test('logout-test', async t => {
    await t
        .click('#login-input') // клик на форму
        .typeText('#login-input', 'vijis67165@threepp.com') // вводим логин
        .typeText('#password-input', 'Qwerty12345-') // вводим пароль
        .click('#auth-button') // клик на кнопку
        .click(Selector('button').withText('Выйти')); // клик на кнопку выхода
});