export class Store {
    constructor(dispacther) {
        this.__listeners = [];
        this.__state = this.getInitialState();
        dispacther.register(this.__onDispatch.bind(this));
    }
    __onDispatch() {
        throw new Error("Subclasses must override _onDispatch method of a Flux Store");

    }

    getInitialState() {
        throw new Error("Subclasses must override getInitialState method of a Flux Store");
    }

    addListner(listner) {
        this.__listeners.push(listner);
    }
    __emitChange() {
        this.__listeners.forEach((listner) => {
            console.info(`store.emitchanges ... `, this.__state);
            return listner(this.__state);
        });
    }
}