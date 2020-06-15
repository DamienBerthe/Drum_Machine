const x1 = (state= 0, action) =>{
    switch(action.type){
        case 'kek':
            state = state+1
            return state
        default:
            return state
    }
}

export default x1;