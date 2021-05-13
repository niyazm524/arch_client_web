import { Selector } from 'testcafe';

fixture`text-upload-test`
    .page`https://sadmadsoul.dev/auth`;

// Тестирование загрузки строки
test('text-upload-test', async t => {
    await t
        .click('#login-input') // клик на инпут логина
        .typeText('#login-input', 'vijis67165@threepp.com') // ввод логина
        .click('#password-input') // клик на инпут пароля
        .typeText('#password-input', 'Qwerty12345-') // ввод пароля
        .click('#auth-button') // клик на кнопку авторизации
        .typeText('#text-input', '123') // вводим текст
        .click(Selector('#write-form div').nth(1).find('input').nth(1)) // отправляем
        .click(Selector('button').withText('Выйти')); // клик на кнопку выйти
});