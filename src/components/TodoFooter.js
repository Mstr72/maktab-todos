import React, {Component} from 'react';
import TodoStore from '../store/TodoStore';
import {observer} from 'mobx-react';

@observer
class TodoFooter extends Component{
    removeAllCompleted(){
        this.props.todos.removeAllCompletedItems()
    }
    onDisplay(type) {
        this.props.todos.showTasks(type)
    }



    render() {
        const { todos } = this.props;
        let countLeftItem = 0
        todos.todos.forEach(item => {
            if(item.completed === false){countLeftItem++}
        });
        return (
            <footer className="footer">
            <span className="todo-count">
              <strong>{countLeftItem}</strong>{" "}
                <span>{countLeftItem > 1 ? "items" : "item"}</span> left
            </span>
                <ul className="filters">
                    <li>
                        <button
                           class= {
                                TodoStore.displayType === "all" ? "selected" : ""
                            }
                            onClick={() => this.onDisplay("all")}
                        >
                            All
                        </button>
                    </li>
                    <li>
                        <button
                         class=   {
                                TodoStore.displayType === "active" ? "selected" : ""
                            }
                            onClick={() => this.onDisplay("active")}
                        >
                            Active
                        </button>
                    </li>
                    <li>
                        <button
                           class= {
                                TodoStore.displayType === "completed"
                                    ? "selected"
                                    : ""
                            }
                            onClick={() => this.onDisplay("completed")}
                        >
                            Completed
                        </button>
                    </li>
                </ul>

                <button
                    onClick={() => this.removeAllCompleted}
                    className="clear-completed"
                >
                    {todos.todos.find(item => {
                        return item.completed;
                    }) && "Clear completed"}
                </button>
            </footer>
        );
    }
}
export default TodoFooter;