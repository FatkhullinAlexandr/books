import React from 'react';

import BooksItem from './BooksItem';

const BooksList = ({ items }) => {
    return (
        <ul className="books-list">
            {items.length !== 0 ? (
                items.map((item, index) => <BooksItem {...item} index={index} key={index} />)
            ) : (
                <div className="message">В вашем списке нет книг</div>
            )}
        </ul>
    );
};

export default BooksList;
