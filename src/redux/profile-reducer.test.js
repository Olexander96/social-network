import profileReducer, { addPostCreator } from "./profile-reducer";

it ('post length incremented', () => {
    // 1.test data
    let action  = addPostCreator("MY NEW POST");
    const initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 10},
            {id: 2, message: "It is my first post", likesCount: 15}
        ]
    }
    
    // 2. action
    let setNewState = profileReducer(initialState, action);
    // 3. expected value
    expect(setNewState.posts.length).toBe(5)
});
