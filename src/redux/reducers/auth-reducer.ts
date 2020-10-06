export  const authReducer = (state = {}, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            console.log('reducer login');
        return {
            uid: action.uid
        }
        case 'LOGOUT':
            console.log('reducer login');
            return {}
        default:
            console.log('reducer default');
            return state;
    }
}