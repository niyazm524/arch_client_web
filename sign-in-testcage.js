import { Selector } from 'testcafe';

fixture`sign-in-test`
    .page`https://sadmadsoul.dev/auth`;

//Тестирование логина
test('sign-in-test', async t => {
    await t
        .click('#login-input') // клик на инпут логина
        .typeText('#login-input', 'vijis67165@threepp.com') // вводим логин
        .click('#password-input') // клик на инпут пароля
        .typeText('#password-input', 'Qwerty12345-') // ввод пароя
        .click('#auth-button') // клик на кнопку авторизации
        .click(Selector('button').withText('Выйти')); // клик на кнопку выход
});