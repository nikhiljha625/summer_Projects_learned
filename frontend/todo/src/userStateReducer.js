const initialUserState = [
    // {
    //     "name": "nikhil",
    //     "college": "IITBHU"
    //   },
    //   {
    //     "name": "bharat",
    //     "college": "IITD",
    //   },
    //   {
    //     "name": "nitin",
    //     "college": "LPU",
    //   }
];

const userStateReducer = (state,action)=>{
    switch (action.type) {
        case "delete":
            return state.filter(user => user.name!==action.name)
        case "insert":
            return[
                ...state,
                {
                    "name": action.name,
                    "college": action.college
                }
            ]
        case "edit":
            state.filter(user => user.name===action.name)[0][action.property]=action.newValue
            return [...state]
        case "create":
            return [...action.data]
        default:
            console.log("Not supported");
    }
}

export{
    userStateReducer,
    initialUserState
}