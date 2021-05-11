# Arch Client Web and TestCafe autotests

This project made to upload, share and download files. Requires authentication service and front-end.

## Руководство по использованию автотестов testCafe

Глобальная установка TestCafe.

```bash
npm install -g testcafe
```

Локальная установка TestCafe в проект
```bash
npm install --save-dev testcafe
```

## Для запуска тестов из данного проекта:

```bash
npx testcafe chrome,edge,firefox testcafe-tests/
```
