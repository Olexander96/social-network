import profileReducer, { addPostCreator, deletePostCreator } from "./profile-reducer";


const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 10},
        {id: 2, message: "It is my first post", likesCount: 15}
    ]
};

test ('post length incremented', () => { //перевыряємо чи додався пост
    // 1.test data - initialState
    let action  = addPostCreator("MY NEW POST");
    // 2. action
    let newState = profileReducer(initialState, action);
    // 3. expected value
    expect(newState.posts.length).toBe(3)
});

test ('new post text correct', () => { //перевыряємо чи правильний текст нового поста
    // 1.test data - initialState
    let action  = addPostCreator("MY NEW POST");
    // 2. action
    let newState = profileReducer(initialState, action);
    // 3. expected value
    expect(newState.posts[2].message).toBe("MY NEW POST")
});

test ('correct posts length after remove post', () => { //довжину постів після видалення
    // 1.test data - initialState
    let action  = deletePostCreator(2);
    // 2. action
    let newState = profileReducer(initialState, action);
    // 3. expected value
    expect(newState.posts.length).toBe(1)
});

test ('correct posts length after remove post with incorrect ID', () => { //довжину постів після видалення з некоректним id
    // 1.test data - initialState
    let action  = deletePostCreator(10);
    // 2. action
    let newState = profileReducer(initialState, action);
    // 3. expected value
    expect(newState.posts.length).toBe(2)
});
