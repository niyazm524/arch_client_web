import { Selector } from 'testcafe';

fixture`file-uploader`
    .page`https://sadmadsoul.dev/auth`;

//Тестирование загрузки файлов
test('file-uploader-test', async t => {
    await t
        .click('#login-input') // клик на форму
        .typeText('#login-input', 'vijis67165@threepp.com') //вводим логин
        .typeText('#password-input', 'Qwerty12345-') // вводим пароль
        .click('#auth-button') // клик на кнопку авторизации
        .click('#file-input') // клик на загрузку файла
        .setFilesToUpload('#file-input', ['./_uploads_/file.txt']) // выбираем какой файл загрузить
        .click(Selector('#write-form div').nth(1).find('input').nth(1)); // отправка
});