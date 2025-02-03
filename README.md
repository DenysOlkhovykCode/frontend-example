Frontend Example Project Проект-приклад фронтенд додатку на React з інтеграцією Redux та автоматичним деплоєм на GitHub Pages. 

Кроки для налаштування проекту 

1. Створення нового проекту на React з Redux
```bash
npx create-react-app my-app --template redux
```bash

2. Встановлення залежностей
```bash
npm install react-router-dom
```bash

3. Видалення зайвих файлів і папок
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
```bash

4. Очищення index.html
Прибрати зайві коментарі з файлу public/index.html
Видалити тег:
```bash
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```bash

5. Структура папки src/store
Створити папку src/store
Додати файли для Redux слайсів (зразки у репозиторії)

6. Налаштування деплою на GitHub Pages
```bash
npm install --save-dev gh-pages
```bash

7. Налаштування URL для GitHub Pages
Додати у package.json:
```bash
"homepage": "https://denysolkhovykcode.github.io/frontend-example"
```bash

8. Додавання скриптів для деплою
Додати у розділ scripts файлу package.json:
```bash
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```bash

9. Завантаження картинок
Завантажити картинки до public/images
Використовувати у коді:
```bash
<img src="/frontend-example/images/png.png" alt="png" />
<img src="/frontend-example/images/jpg.jpg" alt="jpg" />
```bash

10. Додавання проекту на GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DenysOlkhovykCode/frontend-example.git
git push -u origin main
```bash

11. Запуск деплою на GitHub Pages
```bash
npm run deploy
```bash
