export const loadUsers = () => {
    return (dispatch) => {

        dispatch({
            type: 'LOAD_USERS_PENDING'
        });

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status);
            })
            .then(result => result.json())
            .then(result => {
                dispatch({
                    type: 'LOAD_USERS',
                    payload: result
                })
            })
            .catch(e => dispatch({
                type: 'LOAD_USERS_FAIL',
                payload: e.message
            }))
    }
};

