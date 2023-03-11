const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGES = "UPDATE-MESSAGES";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 10},
                {id: 2, message: "It is my first post", likesCount: 15}
            ],
            newPostText: "new post"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimon", avatar: "https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg?format=jpg&width=1200"},
                {id: 2, name: "Ehor", avatar: "https://www.psypost.org/wp-content/uploads/2020/04/bald-man.jpg"},
                {id: 3, name: "Olya", avatar: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg"},
                {id: 4, name: "Vitalik", avatar: "https://media.istockphoto.com/id/1365223878/photo/attractive-man-feeling-cheerful.jpg?b=1&s=170667a&w=0&k=20&c=Pt_reBU6pAQV6cXnIcBSLdtYSB4a_8MJM4qWAO_0leU="},
                {id: 5, name: "Sasha", avatar: "https://pyxis.nymag.com/v1/imgs/e0a/79c/5671d6e6089515f706e9b2288d41d9e824-you-people.2x.rsocial.w600.jpg"},
                {id: 6, name: "Alyona", avatar: "https://www.kellogg.northwestern.edu/-/media/images/web2022/the-experience/people/hero-slideshow/people-hero-alexia-0002_984x728.ashx?la=en&w=414&hash=FC1E086C1111FA1045E3AFF745C4A9F7"}
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "How are your courses?"}
            ],
            newMessageText: "message"
        },
        sidebar: {
            popularFriends: [
                {id: 1, name: "Dimon", avatar: "https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg?format=jpg&width=1200"},
                {id: 2, name: "Ehor", avatar: "https://www.psypost.org/wp-content/uploads/2020/04/bald-man.jpg"},
                {id: 3, name: "Olya", avatar: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg"}
            ]
        }
    },
    _callSubscriber() { //пишемо пусту функцію, для того щоб в ф-ції subscribe присвоїти rerenderEntireTree = observer
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe (observer) { // це функція яка я вкості параметру приймає rerenderEntireTree, але вона визивається в index js бо цей параметр там
        this._callSubscriber = observer 
    },
    
    // addPost() {
    //     let lastElemId = this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id;
    //     let newPost = {
    //         id: lastElemId + 1,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber(this._state)
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state)
    // },
    // addMessage() {
    //     let lastElemId = this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id;
    //     let newMessage = {
    //         id: lastElemId + 1,
    //         message: this._state.dialogsPage.newMessageText,
    //     };
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._state.dialogsPage.newMessageText = "";
    //     this._callSubscriber(this._state)
    // },
    // updateMessages (newMessage) {
    //     this._state.dialogsPage.newMessageText = newMessage;
    //     this._callSubscriber(this._state)
    // },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let lastElemId = this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id;
            let newPost = {
                id: lastElemId + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === "ADD-MESSAGE") {
            let lastElemId = this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id;
            let newMessage = {
                id: lastElemId + 1,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-MESSAGES") {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state)
        }
    }

};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}

export const updateMessagesActionCreator = (text) => {
    return {type: UPDATE_MESSAGES, newMessage: text}
}

export default store;
//store  - OOP
