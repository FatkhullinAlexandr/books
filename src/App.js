import React from 'react';

import './scss/style.scss';

import Header from './components/Header';
import BooksList from './components/BooksList';
import Modal from './components/Modal';

export const AppContext = React.createContext();

const App = () => {
    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = React.useState('add');
    const [value, setValue] = React.useState({ author: '', name: '' });
    const [bookEditIndex, setBookEditIndex] = React.useState(null);

    const getBooks = localStorage.getItem('books');
    const [books, setBooks] = React.useState(getBooks !== null ? JSON.parse(getBooks) : []);

    const openAddModal = () => {
        setOpen(true);
        setModal('add');
        setValue({ author: '', name: '' });
    };

    const addNewBook = (author, name) => {
        const newBook = {
            author,
            name,
        };

        setBooks((prev) => [...prev, newBook]);
        const added = [...books, newBook];
        localStorage.setItem('books', JSON.stringify(added));

        setOpen(false);
    };

    const removeBook = (i) => {
        setBooks((prev) => prev.filter((_, index) => index !== i));
        const removed = books.filter((_, index) => index !== i);
        localStorage.setItem('books', JSON.stringify(removed));
    };

    const editBook = (i) => {
        setModal('edit');
        setOpen(true);
        setValue(books.find((_, index) => index === i));
        setBookEditIndex(i);
    };

    const edit = () => {
        const filtred = books.filter((_, index) => index !== bookEditIndex);
        setBooks(filtred);

        let editBook = books[bookEditIndex];
        editBook = value;

        setBooks((prev) => [...prev, editBook]);
        setOpen(false);
        setValue({ author: '', name: '' });

        const newArr = [...filtred, editBook];
        localStorage.setItem('books', JSON.stringify(newArr));
    };

    return (
        <AppContext.Provider value={{ removeBook, editBook }}>
            <div className="App">
                <Header />
                <div className="content">
                    <div className="content__header">
                        <button onClick={() => openAddModal()}>Добавить книгу</button>
                    </div>
                    <BooksList items={books} />
                </div>
                <Modal
                    value={value}
                    setValue={setValue}
                    open={open}
                    setOpen={setOpen}
                    addNewBook={addNewBook}
                    modal={modal}
                    setModal={setModal}
                    edit={edit}
                />
            </div>
        </AppContext.Provider>
    );
};

export default App;
