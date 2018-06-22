export class Dispatcher {
    constructor() {
        this.__listners = [];
    }

    dispatch(action) {
        this.__listners.forEach((listner) => {
            return listner(action);
        });

    }
    register(listner) {
        this.__listners.push(listner);

    }

}
