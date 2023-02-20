const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 10},
            {id: 2, message: "It is my first post", likesCount: 15}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimon"},
            {id: 2, name: "Ehor"},
            {id: 3, name: "Olya"},
            {id: 4, name: "Vitalik"},
            {id: 5, name: "Sasha"},
            {id: 6, name: "Alyona"}
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "How are your it-kanasutra?"}
        ]
    }
}

export default state;