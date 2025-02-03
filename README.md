Інструкція для створення проекту на React та налаштування деплою на GitHub Pages
Створити новий проект на React з Redux:

```bash
npx create-react-app my-app --template redux

Встановити необхідні залежності, наприклад, react-router-dom:

```bash
npm install react-router-dom

Видалити зайві файли та папки:

```bash
src/App.test.js
src/logo.svg
src/setupTests.js
src/reportWebVitals.js
src/app
src/features
public/robots.txt
public/manifest.json
public/logo512.png
public/logo192.png

Прибрати зайві коментарі з файлу public/index.html і видалити тег:

```bash
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

Створити папку src/store та додати в неї файли index.js та файли для слайсів (приклади можна знайти в репозиторії).

Встановити gh-pages, щоб мати можливість робити деплой на GitHub Pages:

```bash
npm install --save-dev gh-pages

Додати властивість "homepage" у файл package.json, щоб вказати URL-адресу для GitHub Pages:

```bash
"homepage": "https://denysolkhovykcode.github.io/frontend-example"

Додати скрипти для деплою в package.json:

```bash
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

Картинки завантажувати в папку public/images і використовувати їх наступним чином:

```bash
<img src={`/frontend-example/images/png.png`} alt="png" />
<img src={`/frontend-example/images/jpg.jpg`} alt="jpg" />

Додати проект на GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DenysOlkhovykCode/frontend-example.git
git push -u origin main

Запустити деплой на GitHub Pages:

```bash
npm run deploy
