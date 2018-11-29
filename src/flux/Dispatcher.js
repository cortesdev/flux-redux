 
export class Dispatcher  {
    constructor() {
        this.__Listeners = [];
    }
    dispatch(action) {
    this.__Listeners.forEach(listener=>listener(action));
    }
    register(listener) {
        this.__Listeners.push(listener);
    }
}
