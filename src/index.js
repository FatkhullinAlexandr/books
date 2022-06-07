import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

// const [books, setBooks] = React.useState([
//     { author: 'Джоан Роулинг', name: 'Гарри Поттер и узник Азкабана' },
//     { author: 'Михаил Булгаков', name: 'Мастер и Маргарита' },
//     { author: 'Дэн Браун', name: 'Код да Винчи' },
//     { author: 'Стивен Кинг', name: 'Зелёная миля' },
//     { author: 'Шарлотта Бронте', name: 'Джейн Эйр' },
//     { author: 'Маргарет Митчелл', name: 'Унесенные ветром' },
//     { author: 'Лев Толстой', name: 'Война и мир' },
//     { author: 'Джоан Роулинг', name: 'Гарри Поттер и философский камень' },
// ]);
