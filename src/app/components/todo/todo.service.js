export class TodoService {
    constructor() {
        'ngInject';

        this.tasks = [],
        this.doneTasks = [];
    }

    addItem(val) {
        if (val !== '' && val) {
            this.tasks.push(val);
            return this.tasks;
        }
        return this.tasks;
    }
    removeItem (el) {
        var ind = el.$index;
        this.tasks.splice(ind, 1);
        return this.tasks;
    }
    doneItem(el) {
        var ind = el.$index;
        this.tasks.splice(ind, 1);
        this.doneTasks.push(el.task);
        this.tasksT = this.tasks;
        this.tasksTDone = this.doneTasks;
    }
    unDoneItem(el) {
        var ind = el.$index;
        this.doneTasks.splice(ind, 1);
        this.tasks.push(el.task);
        this.tasksT = this.tasks;
        this.tasksTDone = this.doneTasks;
    }
    removeDoneItem(el) {
        var ind = el.$index;
        this.doneTasks.splice(ind, 1);
        return this.doneTasks;
    }

}