const addLocalStorage=()=>{
    const inputId = document.getElementById('storage-id');
    const id = inputId.value;

    const inputValue = document.getElementById('storage-value');
    const value = inputValue.value;

    localStorage.setItem(id, value);
    inputId.value = '';
    inputValue .value = '';


    /* or,
    if (id && value){
        localStorage.setItem(id, value)}
    }
    
    */
}