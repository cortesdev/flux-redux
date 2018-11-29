import { generate as id } from 'shortid';
import { Dispatcher, ReduceStore } from './flux';

const tasksDispatcher = new Dispatcher();

const CREATE_TASK = 'CREATE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const SHOW_TASKS = 'SHOW_TASKS';

const createNewTaskAction = (content)=> {
    return {
        type: CREATE_TASK,
        value: content
    }
}

const showTaskAction = (content)=> {
    return {
        type: SHOW_TASK,
        value: content
    }
}
const completeTaskAction = (id,isComplete)=> {
    return {
        type: COMPLETE_TASK,
        id,
        value: isComplete
    }
}

class TasksStore extends ReduceStore {
    getInitialState() {
        return {
            tasks: [{
                id: id(),
                content: "Att productivity button",
                complete: false
            }, {
                id: id(),
                content: "Remove productivity button",
                complete: false
            }, {
                id: id(),
                content: "Post to social media",
                complete: false
            }, {
                id: id(),
                content: "Install hard drive",
                complete: true
            }],
            showComplete: true
        }
    }
    reduce(state,action){
        console.log("Reducing...",state,action);
        return state;
    }
    getState(){
        return this.__state;
    }
}
const tasksStore = new TasksStore(tasksDispatcher);

const TaskComponent = ({content,complete,id})=>(
    `<section>
    ${content} <input type="checkbox" name="taskCompleteCheck" data-taskid=${id} ${complete ? "checked" : ""}> 
</section>`
)
 


 


tasksDispatcher.dispatch('TEST_DISPATCH');