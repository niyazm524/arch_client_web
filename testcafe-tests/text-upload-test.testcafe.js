import { Selector } from 'testcafe';

fixture `text-upload-test`
    .page `https://sadmadsoul.dev/auth`;

// Тестирование загрузки строки
test('text-upload-test', async t => {
    await t
        .click('#login-input')
        .typeText('#login-input', 'vijis67165@threepp.com')
        .click('#password-input')
        .typeText('#password-input', 'Qwerty12345-')
        .click('#auth-button')
        .typeText('#text-input', '123')
        .click(Selector('#write-form div').nth(1).find('input').nth(1))
        .click(Selector('button').withText('Выйти'));
});