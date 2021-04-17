import React, { useState } from 'react';
import Item from '../Item/Item';
import moon from '../../img/icon-moon.svg';
import sun from '../../img/icon-sun.svg';
import Checkbox from '../partials/Checkbox';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    return (
        <div className='todo'>
            <header>
                <h1>T O D O</h1>
                <button type='button'>
                    <img src={moon} alt='alterar tema' />
                </button>
            </header>
            <section>
                <div className='input-wrapper'>
                    <Checkbox />
                    <input
                        type='text'
                        placeholder='create a new todo . . .'
                        onKeyDown={e => {
                            if (e.code === 'Enter' && e.target.value !== '') {
                                setTodos([...todos, e.target.value]);
                                e.target.value = '';
                            }
                        }}
                    />
                </div>

                <div className='items-wrapper'>
                    {todos.map(todo => {
                        return <Item value={todo} />;
                    })}
                    <div id='item' className='filters'>
                        <span>{`${todos.length} itens restantes`}</span>
                        <section>
                            <button>todos</button>
                            <button>ativos</button>
                            <button>completos</button>
                        </section>
                        <button>limpar completados</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Todo;
