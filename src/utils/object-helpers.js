export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[itemId]=== objPropName) {
            return {...u, ...newObjProps } //...newObjProps тому що в об'єкті юзера може бути багато свойств і ми повертаємо всі
        }
        return u
    })
}

// state.users.map(user => {
//     if (user.id === action.userId) {
//         return {...user, followed: false}
//     }
//     return user
// }) 