const addtoDB = (name, value) => {
    const checkValue = localStorage.getItem(name);
    if (checkValue) {
        console.log('have this user');
        const addnewNum=name +'added';
        localStorage.setItem(name,addnewNum);
    }
    else {
        console.log('not exiting this user');
        localStorage.setItem(name, value);
    }
  
}
const addToSession = (id, value) => {
    sessionStorage.setItem(id, value);
}
export { addtoDB, addToSession }