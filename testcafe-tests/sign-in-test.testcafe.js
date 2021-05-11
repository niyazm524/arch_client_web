import { Selector } from 'testcafe';

fixture `sign-in-test`
    .page `https://sadmadsoul.dev/auth`;

//Тестирование логина
test('sign-in-test', async t => {
    await t
        .click('#login-input')
        .typeText('#login-input', 'vijis67165@threepp.com')
        .click('#password-input')
        .typeText('#password-input', 'Qwerty12345-')
        .click('#auth-button')
        .click(Selector('button').withText('Выйти'));
});