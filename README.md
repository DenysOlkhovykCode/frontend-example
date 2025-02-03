Frontend Example Project Проект-приклад фронтенд додатку на React з інтеграцією Redux та автоматичним деплоєм на GitHub Pages. 

Кроки для налаштування проекту 

1. Створення нового проекту на React з Redux
```bash
npx create-react-app my-app --template redux
### 2. Встановлення залежностей
npm install react-router-dom
### 3. Видалення зайвих файлів і папок
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
### 4. Очищення index.html
Прибрати зайві коментарі з файлу public/index.html
Видалити тег:
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
### 5. Структура папки src/store
Створити папку src/store
Додати файли для Redux слайсів (зразки у репозиторії)
### 6. Налаштування деплою на GitHub Pages
npm install --save-dev gh-pages
### 7. Налаштування URL для GitHub Pages
Додати у package.json:
"homepage": "https://denysolkhovykcode.github.io/frontend-example"
### 8. Додавання скриптів для деплою
Додати у розділ scripts файлу package.json:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
### 9. Завантаження картинок
Завантажити картинки до public/images
Використовувати у коді:
<img src="/frontend-example/images/png.png" alt="png" />
<img src="/frontend-example/images/jpg.jpg" alt="jpg" />
### 10. Додавання проекту на GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DenysOlkhovykCode/frontend-example.git
git push -u origin main
### 11. Запуск деплою на GitHub Pages
npm run deploy
