import React, { Component } from 'react';
import './App.css';
import PageTemplate from './component/PageTemplate/PageTemplate';
import TodoInput from './component/TodoInput/TodoInput';
// import TodoItem from './components/TodoItem/TodoItem';
import TodoList from './component/TodoList/TodoList';
// import './main.css';

const initialTodos = new Array(500).fill(0).map((foo,index) => ({id:index, text:`일정${index}`, done: false}))

class App extends Component {

  state ={
    input : '', //input의 값
    todos : initialTodos,
    // [ {id:0, text:'리액트',done:true}, {id:1, text:'공부하기',done:false} ], //id값은 Key값으로 사용된다 map()
  }

  id = 1;
  getId = () =>{
    return ++this.id;
  }

  handleChange = (e) =>{
    const {value} = e.target;
    this.setState({ input : value}) //이벤트가 발생한 것을 input의 value에 넣기
  }
  handleInsert = () =>{
    const {todos, input} = this.state;
    const newTodo ={
      text:input, done:false, id:this.getId()
    };

    this.setState({
      todos : [...todos, newTodo],
      input:''
    });
  }
  handleToggle = (id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index], done : !todos[index].done
    };

    this.setState({todos : [...todos.slice(0, index), toggled, ...todos.slice(index+1,todos.length)]
    });
  }
  handleRemove = (id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    this.setState({todos:[...todos.slice(0,index), ...todos.slice(index+1, 0)]});
  }
  render() {
    const {input, todos} = this.state; //비구조화 안했다면 26번째 줄 value는 this.input으로 해야함 
    const {handleChange, handleInsert, handleToggle, handleRemove} = this; //동일 26번째 줄 onChange의 값

    return (
      <div>
        <PageTemplate>
          <TodoInput onChange={handleChange} value={input} onInsert={handleInsert}/>
          <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </PageTemplate>
      </div>
    );
  }
} 

export default App;
