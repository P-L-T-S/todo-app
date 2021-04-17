import React from 'react';
import Todo from './Todo/Todo';

const App = () => {

    return (
        <div className="app">
            <div className="background"></div>
            <main>
                <Todo />
            </main>
        </div>
    );
};

export default App;
