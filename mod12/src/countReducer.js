export const countReducer = (oldState = {counter: 1}, action) => {

    console.log(oldState, action);

    switch (action.type) {
        case 'increment':
            return Object.assign({}, oldState, {counter: oldState.counter + 1});
        default:
          return oldState;
    }
}