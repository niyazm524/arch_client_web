import { Selector } from 'testcafe';

fixture `file-uploader`
    .page `https://sadmadsoul.dev/auth`;

//Тестирование загрузки файлов
test('file-uploader-test', async t => {
    await t
        .click('#login-input')
        .typeText('#login-input', 'vijis67165@threepp.com')
        .typeText('#password-input', 'Qwerty12345-')
        .click('#auth-button')
        .click('#file-input')
        .setFilesToUpload('#file-input', ['_uploads_\\Swift_5.epub'])
        .click(Selector('#write-form div').nth(1).find('input').nth(1));
});