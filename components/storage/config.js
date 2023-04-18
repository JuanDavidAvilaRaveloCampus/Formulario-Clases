export default {

    storage(){ //el 'data', es el nombre del local  (este nombre es variable)
        localStorage.setItem('data',JSON.stringify({
            info : {
                tabla : [],
                carga : true,
            },
        }));
    }
}