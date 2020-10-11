interface InitialStateI {

}

const initialState: InitialStateI = {

}

const car = (state: InitialStateI = initialState, action: any) : InitialStateI => {
    switch(action.type) {
        default:
            return state
    }
}

export default car