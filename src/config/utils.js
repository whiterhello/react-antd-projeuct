export const setStorage = (name,content) => {
    if(typeof content !== 'string'){
        content = JSON.stringify(content)
    }

    window.localStorage.setItem(name,content)
}

export const getStorage = (name) => {
    return window.localStorage.getItem(name)
}