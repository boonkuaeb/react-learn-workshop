import React, {Component} from 'react';
import TodoList from './TodoList';

class App extends Component {
    render() {

        const todos = [
            "work", "go to school", "sleep", "learn"
        ];
        return (
            <div className="App">
                <h1>Todo</h1>
                <TodoList data={todos}/>
            </div>
        );
    }
}

export default App;
