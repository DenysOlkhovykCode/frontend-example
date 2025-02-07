Frontend Example Project Проект-приклад фронтенд додатку на React з інтеграцією Redux та автоматичним деплоєм на GitHub Pages. 

Кроки для налаштування проекту 

1. Створення нового проекту на React з Redux
```bash
npx create-react-app my-app --template redux
```

2. Встановлення залежностей
```bash
npm install react-router-dom
```

3. Видалення зайвих файлів і папок
```bash
src/logo.svg
src/reportWebVitals.js
src/app
src/features
public/robots.txt
public/manifest.json
public/logo512.png
public/logo192.png
```

4. Очищення index.html
Прибрати зайві коментарі з файлу public/index.html
Видалити тег:
```bash
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```

5. Налаштування деплою на GitHub Pages
```bash
npm install --save-dev gh-pages
```

6. Налаштування URL для GitHub Pages
Додати у package.json:
```bash
"homepage": "https://denysolkhovykcode.github.io/frontend-example"
```

7. Додавання скриптів для деплою
Додати у розділ scripts файлу package.json:
```bash
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

8. Структура папки src/store
Створити папку src/store
Додати файли для Redux слайсів (зразки у репозиторії)

9. Налаштування React Router
В index.js додати
```bash
import { HashRouter } from "react-router-dom";

<HashRouter basename="/">
  <App />
</HashRouter>
```

Там де треба зробити перехід на інші сторінки 

```bash
import { Routes, Route } from "react-router";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const navigate = useNavigate();
<Routes>
  <Route path="/about" element={"Про сторінку"} />
  <Route path="*" element={"Сторінка 404"} />
</Routes>
<button onClick={() => navigate("/about")}>Перейти на About</button>
<Link to="/about">Про нас</Link>
```

10. Завантаження картинок
Завантажити картинки до public/images
Використовувати у коді:
```bash
<img src="/frontend-example/images/png.png" alt="png" />
<img src="/frontend-example/images/jpg.jpg" alt="jpg" />
```

11. Тестування коду за прикладом в App.test.js
Використовувати import { MemoryRouter } from "react-router" в тестах 

12. Додавання проекту на GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DenysOlkhovykCode/frontend-example.git
git push -u origin main
```

13. Запуск деплою на GitHub Pages
```bash
npm run deploy
```
