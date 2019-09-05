import React ,{Component} from "react"
import TodoStore from "../store/TodoStore"
import TodoItem from "./TodoItem";
import {observer} from "mobx-react";

@observer
class TodoItems extends Component{
    render() {return(
        <section className="main">
            <ul className="todo-list">
                {
                    TodoStore.todos.map(todo => {
                        if(TodoStore.displayType === 'all'){
                            return <TodoItem todo={todo} key={Math.random().toString()} />;
                        }
                        if(TodoStore.displayType === 'completed'){
                            return todo.completed ? <TodoItem todo={todo} key={Math.random().toString()} /> : ''
                        }
                        if(TodoStore.displayType === 'active'){
                            return todo.completed ? '' : <TodoItem todo={todo} key={Math.random().toString()} />
                        }
                        return true
                    })
                }
            </ul>
    </section>
    )
    }
}
export default TodoItems
