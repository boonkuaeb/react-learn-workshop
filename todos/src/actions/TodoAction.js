export const loadTodos = () => {
    return (dispatch) => {

        dispatch({
            type: 'LOAD_TODOS_PENDING'
        });

        const userId = localStorage.getItem('userId');
        fetch(`https://fde112f2.ngrok.io/api/v1/todo/user/${userId}`)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status);
            })
            .then(result => result.json())
            .then(result => {
                dispatch({
                    type: 'LOAD_TODOS',
                    payload: result
                })
            })
            .catch(e => dispatch({
                type: 'LOAD_TODOS_FAIL',
                payload: e.message
            }))
    }
};


export function updateTodo(data) {
    return dispatch => {
        dispatch({
            type: 'TODO_UPDATED_PENDING'
        });
        fetch(`https://fde112f2.ngrok.io/api/v1/todo/${data.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status);
            })
            .then(result => result.json())
            .then(result => {
                dispatch({
                    type: 'TODO_UPDATED',
                    payload: result
                })
            })
            .catch(e => dispatch({
                type: 'TODO_UPDATED_FAIL',
                payload: e.message
            }))

    }
}
