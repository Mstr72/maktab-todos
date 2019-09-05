import {observable,action} from "mobx";

export default class TodoModels {
    store
    id
    @observable title
    @observable completed
    constructor(store,title,completed,id){
    this.title=title
    this.completed=completed
    this.id=id
    this.store=store
    }
    @action toggle(){
       this.completed=!this.completed
    }
    @action
    remove(){
        this.store.todos.remove(this);
    }



}
