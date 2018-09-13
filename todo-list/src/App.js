import React, { Component } from 'react';
import './App.css';
import PageTemplate from './component/PageTemplate/PageTemplate';
import TodoInput from './component/TodoInput/TodoInput';
import TodoItem from './component/TodoItem/TodoItem';
import './main.css';

class App extends Component {
  render() {
    return (
      <div>
        <PageTemplate>
          <TodoInput/>
          <TodoItem/>
        </PageTemplate>
      </div>
    );
  }
}

export default App;
