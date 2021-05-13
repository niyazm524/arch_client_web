fixture`sign-up-test`
    .page`https://sadmadsoul.dev/sign_up`;

// Тестирование регистрации
test('sign-up-test', async t => {
    await t
        .typeText('#first-name-input', 'aaa') // ввод имени
        .typeText('#last-name-input', 'aaa') // ввод фамилии
        .click('#login-input') // клик на поле логина
        .typeText('#login-input', 'srvu6ig7is@greencafe24.com') // ввод логина
        .click('#password-input') // клик на инпут пароля
        .typeText('#password-input', 'Qwerty12345-') // ввод пароля
        .click('#auth-button\ '); // клик на кнопку авторизации
});