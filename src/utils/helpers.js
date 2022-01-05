// validate email function
export function validateEmail(email) {
    
    // regex email validation string
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

    // return email 
    return regex.test(String(email).toLowerCase());
}