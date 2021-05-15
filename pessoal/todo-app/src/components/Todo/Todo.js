import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import moon from '../../img/icon-moon.svg';
import sun from '../../img/icon-sun.svg';
import Checkbox from '../partials/Checkbox';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [icon, setIcon] = useState(moon);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    function toggleTheme() {
        const tema = document.querySelector('body').classList.toggle('dark');
        tema ? setIcon(sun) : setIcon(moon);
        tema
            ? document.querySelector('body').classList.remove('light')
            : document.querySelector('body').classList.add('light');
    }

    window.onresize = () => {
        setWindowSize(window.innerWidth);
        console.log(windowSize);
    };

    function length() {
        let count = 0;

        todos.forEach(todo => {
            if (todo.checked === false) count++;
        });

        return count;
    }

    function clearDone() {
        const undone = todos.filter(todo => todo.checked === false);
        setTodos(undone);
    }

    return (
        <div className='todo'>
            <header>
                <h1>T O D O</h1>
                <button type='button' onClick={toggleTheme}>
                    <img src={icon} alt='alterar tema' />
                </button>
            </header>
            <section>
                <div class='input-wrapper item'>
                    <Checkbox />
                    <input
                        type='text'
                        placeholder='create a new todo . . .'
                        onKeyDown={e => {
                            if (e.code === 'Enter' && e.target.value !== '') {
                                setTodos([
                                    ...todos,
                                    { value: e.target.value, checked: false },
                                ]);
                                e.target.value = '';
                            }
                        }}
                    />
                </div>

                <div className='items-wrapper'>
                    {todos.map(todo => {
                        return (
                            <Item
                                item={todo}
                                onclick={setTodos}
                                todos={todos}
                            />
                        );
                    })}
                    <div className='filters item'>
                        <span>{`${length()} itens restantes`}</span>
                        {windowSize > 550 && (
                            <section>
                                <button>todos</button>
                                <button>ativos</button>
                                <button>completos</button>
                            </section>
                        )}

                        <button onClick={clearDone}>
                            {todos.some(todo => todo.checked === true) ? (
                                <strong>limpar completados</strong>
                            ) : (
                                'limpar completados'
                            )}
                        </button>
                    </div>
                    {windowSize <= 550 && (
                        <div className='item filters' id='filter-responsive'>
                            <section>
                                <button>todos</button>
                                <button>ativos</button>
                                <button>completos</button>
                            </section>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Todo;
