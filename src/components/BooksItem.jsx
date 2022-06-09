import React from 'react';

import { AppContext } from '../App';

const BooksItem = ({ author, name, index }) => {
    const { removeBook, editBook } = React.useContext(AppContext);

    return (
        <li className="books-item">
            <strong>
                {index + 1}. {author}
            </strong>
            <p>{name}</p>
            <div className="books-item__buttons">
                <button onClick={() => editBook(index)}>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 32 32">
                        <path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path>
                    </svg>
                </button>
                <button onClick={() => removeBook(index)}>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 32 32">
                        <path d="M23 7h4v1h-2v18.993c0 1.671-1.343 3.007-3 3.007h-11c-1.666 0-3-1.346-3-3.007v-18.993h-2v-1h6v-1.995c0-1.111 0.894-2.005 1.997-2.005h5.005c1.102 0 1.997 0.898 1.997 2.005v1.995h2zM9 8v19.005c0 1.102 0.893 1.995 1.992 1.995h11.016c1.1 0 1.992-0.902 1.992-1.995v-19.005h-15zM12 10v17h1v-17h-1zM16 10v17h1v-17h-1zM20 10v17h1v-17h-1zM14.003 4c-0.554 0-1.003 0.443-1.003 0.999v2.001h7v-2.001c0-0.552-0.438-0.999-1.003-0.999h-4.994z"></path>
                    </svg>
                </button>
            </div>
        </li>
    );
};

export default BooksItem;
