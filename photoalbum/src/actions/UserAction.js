export const loadUsers = () => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(result => result.json())
            .then(result => {
                dispatch({
                    type: 'LOAD_USERS',
                    payload: result
                })
            })
    }
};