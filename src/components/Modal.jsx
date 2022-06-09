import React from 'react';

const Modal = ({ open, setOpen, addNewBook, modal, value, setValue, edit }) => {
    const [message, setMessage] = React.useState(false);

    const checkInputs = () => {
        if ((value.author, value.name)) {
            addNewBook(value.author, value.name);
            setValue({ author: '', name: '' });
        } else {
            setMessage(true);
        }
    };

    return (
        <div className={open ? 'modal active' : 'modal'} onClick={() => setOpen(false)}>
            <div className="modal__body" onClick={(e) => e.stopPropagation()}>
                {message ? <p>Заполните все поля</p> : ''}
                <label htmlFor="author">Автор:</label>
                <input
                    value={value.author}
                    onChange={(e) => setValue({ ...value, author: e.target.value })}
                    id="author"
                    type="text"
                />
                <label htmlFor="name">Название книги:</label>
                <input
                    value={value.name}
                    onChange={(e) => setValue({ ...value, name: e.target.value })}
                    id="name"
                    type="text"
                />
                {modal === 'add' ? (
                    <button onClick={() => checkInputs()}>Добавить книгу</button>
                ) : (
                    <button onClick={() => edit()}>Изменить</button>
                )}
            </div>
        </div>
    );
};

export default Modal;
