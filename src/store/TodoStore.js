import {observable,action} from "mobx";
import TodoModels from "./TodoModels"

class TodoStore {

    @observable todos = [

    ]


    lastId=0
    @observable displayType = "all";
    @action
    showTasks(type) {
        if (type === "all") {
            this.displayType = "all";
        }
        if (type === "completed") {
            this.displayType = "completed";
        }
        if (type === "active") {
            this.displayType = "active";
        }
        return true;
    }
    @action addTodo(title){
        this.todos.push(new TodoModels(this,title,false,this.lastId ++))

    }
   @action removeAllCompletedItems() {
        this.todos = this.todos.filter(item => {
            return item.completed !== true;
        });
    }
}
const store=new TodoStore()
export default store