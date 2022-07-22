import React from 'react';
import Context from '../contexts/todoContext';
// import ClearTodo from './ClearTodo';
import TodoItem from './TodoItem';

function ShowCase() {
    return (
      <Context.Consumer>
        {({ todos }) => (
          <div>
            {todos.length > 0 && <TodoItem />}
            {/* <ClearTodo
            clearTodos={clearTodos}
            pending={pending}
            message={message}
            removeMessage={removeMessage}
            todos={todos}
          /> */}
          </div>
        )}
      </Context.Consumer>
    );
}

export default ShowCase
