import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import {dialogsReducer} from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';



let store = {
    _state : {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hi',
                    likesCount: 12
                },
                {
                    id: 2,
                    message: 'First Post',
                    likesCount: 12
                },
                {
                    id: 3,
                    message: 'my post',
                    likesCount: 12
                },
                {
                    id: 4,
                    message: 'it is a post',
                    likesCount: 12
                },
                {
                    id: 5,
                    message: 'Hifgfgfgfg',
                    likesCount: 12
                },
                {
                    id: 6,
                    message: "I'm fine",
                    likesCount: 10
                }
            ],
            newPostText: 'it-kamasutra'

        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dimych'
                },
                {
                    id: 2,
                    name: 'Sveta'
                },
                {
                    id: 3,
                    name: 'Lena'
                },
                {
                    id: 4,
                    name: 'Andrew'
                },
                {
                    id: 5,
                    name: 'Vika'
                },
                {
                    id: 6,
                    name: 'Sasha'
                }
            ],
            messages: [
                {
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'Stay'
                },
                {
                    id: 3,
                    message: 'Heooooo'
                },
                {
                    id: 4,
                    message: 'Stand'
                },
                {
                    id: 5,
                    message: 'Hifgfgfgfg'
                },
                {
                    id: 6,
                    message: "I'm fine"
                }
            ],
            newMessageBody: ''
        },
        sidebar: {}

    },
    _callSubscriber(){
        console.log("state change")
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}






export  default  store;

window.state = store;
