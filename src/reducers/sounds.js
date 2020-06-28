const soundReducer = (state= '', action) =>{
    switch(action.type){
        case 'inception':
            state = 'inception'
            return state
        case 'ahhhh':
            state = 'ahhhh'
            return state
        case 'boom':
            state = 'boom'
            return state
        case 'thx':
            state = 'thx'
            return state
        case 'organ':
            state = 'organ'
            return state
        case 'chamberchoir':
            state = 'chamberchoir'
            return state
        case 'drum':
            state = 'drum'
            return state
        case 'darkchoir':
            state = 'darkchoir'
            return state
        case 'femalevocal':
            state = 'femalevocal'
            return state
        
        default:
            return state
    }
}

export default soundReducer;