import React,{Component} from 'react';
import TodoEntry from "./components/TodoEntry";
import './App.css';
import TodoItems from "./components/TodoItems";
import TodoFooter from './components/TodoFooter'
import TodoStore from './store/TodoStore';
import {observer} from "mobx-react";
@observer
class App extends Component{
  render() {
    return (
<div   className="todoapp">
    <TodoEntry/>
<TodoItems/>
<TodoFooter todos={TodoStore}/>
</div>
    )

  }
}

export default App;
