import React,{Component} from "react";
import {observer} from "mobx-react";
@observer
class TodoItem extends Component{
    onToggle =() =>{
        this.props.todo.toggle()
    }
    removeItem () {
        this.props.todo.remove();
    };
    render() {const {todo}=this.props
        return(
        <li className={todo.completed ? "completed" :""} >
            <div className="view">
                <input onChange={this.onToggle} type="checkbox" className="toggle" value="on" checked={todo.completed}/>
                <label>{todo.title}</label>
                <button onClick={() => this.removeItem()} className="destroy" />

            </div>
        </li>
    )
    }
}


export default TodoItem