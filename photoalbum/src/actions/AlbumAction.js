export const loadAblums = (userId) => {
    return (dispatch) => {

        dispatch({
            type: 'LOAD_ALBUMS_PENDING'
        });

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status);
            })
            .then(result => result.json())
            .then(result => {

                dispatch({
                    type: 'LOAD_ALBUMS',
                    payload: result
                })

            })
            .catch(e => dispatch({
                type: 'LOAD_ALBUMS_FAIL',
                payload: e.message
            }))
    }
};

