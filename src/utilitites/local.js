const getstored = () => {
    const stored = localStorage.getItem('cart');
    if (stored) {
        return JSON.parse(stored)
    }
    else {
        return []
    }
}
const setitems = (stringed) => {
    localStorage.setItem('cart', stringed)
}

const addlocal = (id) => {
    const arr = getstored();
    arr.push(id)
    setitems(JSON.stringify(arr))
}

export { addlocal, getstored }