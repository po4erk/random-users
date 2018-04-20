export const select = (user) => {
    return {
        type: "USER_SELECTED",
        payload: user
    }
}