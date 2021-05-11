import { Selector } from 'testcafe';

fixture `logout-test`
    .page `https://sadmadsoul.dev/auth`;

//Тестирование лог-аута
test('logout-test', async t => {
    await t
        .click('#login-input')
        .typeText('#login-input', 'vijis67165@threepp.com')
        .typeText('#password-input', 'Qwerty12345-')
        .click('#auth-button')
        .click(Selector('button').withText('Выйти'));
});