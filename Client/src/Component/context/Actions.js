export const LoginStart = (userCredentials ) => ({
    type: "LOGIN_START"
})


// return user and login information
export const LoginSuccess =    (user ) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})


export const LoginFaluire = ( ) => ({
    type: "LOGIN_FAILURE"
})

export const Logout = ( ) => ({
    type: "LOGOUT"
})