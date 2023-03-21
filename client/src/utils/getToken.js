export const getToken = () => {
    const token = document.cookie 
    return token.split('=')[1]
}