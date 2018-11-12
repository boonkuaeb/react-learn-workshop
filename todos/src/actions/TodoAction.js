export const loadTodos = () => {
    return (dispatch) => {

        dispatch({
            type: 'LOAD_TODOS_PENDING'
        });

        fetch(`http://localhost:8080/api/v1/todo/userId001`)
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

