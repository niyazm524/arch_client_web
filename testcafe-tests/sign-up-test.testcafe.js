fixture `sign-up-test`
    .page `https://sadmadsoul.dev/sign_up`;

// Тестирование регистрации
test('sign-up-test', async t => {
    await t
        .typeText('#first-name-input', 'aaa')
        .typeText('#last-name-input', 'aaa')
        .click('#login-input')
        .typeText('#login-input', 'srvu6ig7is@greencafe24.com')
        .click('#password-input')
        .typeText('#password-input', 'Qwerty12345-')
        .click('#auth-button\ ');
});