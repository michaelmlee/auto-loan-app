interface InitialStateI {

}

const initialState: InitialStateI = {

}

const car = (state: InitialStateI = initialState, action: any) : InitialStateI => {
    return state
}

export default car