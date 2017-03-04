export class ToDoController {
    constructor(TodoService, $log, $scope) {
        'ngInject';

        this.notEmpty = false;
        this.doneNotEmpty = false;
        this.task = '';
        this.tasks = [];
        this.doneTasks = [];
        this.$log = $log;
        this.service = TodoService;
        this.$scope = $scope;

        this._headerToggler = function () {
            if (this.tasks.length) {
                this.notEmpty = true;
            } else {
                this.notEmpty = false;
            }
        };

        this._doneHeaderToggler = function() {
            if (this.doneTasks.length) {
                this.doneNotEmpty = true;
            } else {
                this.doneNotEmpty = false;
            }
        };

    }

    clear() {
        return this.task = '';
    }

    add(val) {
        if (val) {
            this.tasks = this.service.addItem(val);
            this._headerToggler(this.tasks);
        } else {
            this.$scope.todoForm.task.$touched = true;
        }
    }
    remove(el) {
        this.tasks = this.service.removeItem(el);
        this._headerToggler(this.tasks);
    }
    done(el) {
        this.service.doneItem(el);
        this.tasks = this.service.tasksT;
        this.doneTasks = this.service.tasksTDone;
        this._headerToggler(this.tasks);
        this._doneHeaderToggler(this.doneTasks);
    }
    unDone(el) {
        this.service.unDoneItem(el);
        this.tasks = this.service.tasksT;
        this.doneTasks = this.service.tasksTDone;
        this._headerToggler(this.tasks);
        this._doneHeaderToggler(this.doneTasks);
    }
    removeDone(el) {
        this.doneTasks = this.service.removeDoneItem(el);
        this._doneHeaderToggler(this.doneTasks);
    }

}