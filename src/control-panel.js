import { Dispatcher, Store } from './flux';

const controlPanelDisptcher = new Dispatcher();
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPPDATE_FONTSIZE = 'UPDATE_FONTSIZE';
const userNameUpdateAction = (name) => {
    return {
        type: UPDATE_USERNAME,
        value: name
    }
}

const fontSizeUpdateAction = (size) => {
    return {
        type: UPPDATE_FONTSIZE,
        value: size
    }
}

document.getElementById('userNameInput').addEventListener(`input`, ({ target }) => {
    const name = target.value;
    //controlPanelDisptcher.dispatch(`TODO_NAMEINPUTACTION`);
    controlPanelDisptcher.dispatch(userNameUpdateAction(name));
})

document.forms.fontSizeForm.fontSize.forEach(element => {
    element.addEventListener(`change`, ({ target }) => {
        //controlPanelDisptcher.dispatch(`TODO_FONTSIZEINPUTACTION`);
        controlPanelDisptcher.dispatch(fontSizeUpdateAction(target.value));
    })
})

class UserPrefsStore extends Store {
    getInitialState() {
        return {
            userName: 'jim',
            fontSize: 'small'
        }

    }

    __onDispatch(action) {
        switch (action.type) {
            case UPDATE_USERNAME:
                this.__state.userName = action.value;
                this.__emitChange();
                break;
            case UPPDATE_FONTSIZE:
                this.__state.fontSize = action.value
                this.__emitChange();
                break;
            // default:
            //     console.log("error - " + JSON.stringify(action));
        }
        //this.__emitChange();
    }

    getUserPreferences() {
        console.log("__state - " + this.__state);

        return this.__state;
    }
}

const userPrefsStore = new UserPrefsStore(controlPanelDisptcher);

userPrefsStore.addListner((state) => {
    console.info(`the current state is ... `, state);
})

controlPanelDisptcher.register(action => {
    console.log("Received action - " + JSON.stringify(action));
})
