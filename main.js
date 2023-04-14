let tamaño_lapiz = document.querySelector(`[name = "dimension"]`);
let color = document.querySelector(`[name = "color"]`);
let marca = document.querySelector(`[name = "marca"]`);
let borrador = document.querySelector(`[name = borrador]`)
let material = document.querySelector(`[name = material]`)

let formulario = document.querySelector('#formulario').addEventListener('submit', (e)=>{
    e.preventDefault();
    let formulario = Object.fromEntries(new FormData (e.target));
    
    console.log(formulario['dimension']);

});


window.onload = ()=>{
    
    document.querySelector(`[type='color']`).val = F7EB69;


    document.querySelector(`[type = 'range']`).val = 19.5;
    let marca = document.querySelector(`[value='Mongol']`);
    marca.checked = true;

    let borrador = document.querySelector(`[value = 'true']`);
    borrador.checked = true;

    let material = document.querySelector(`[value = 'Madera']`);
    material.checked = true;
};






// class lapiz {
//     #marca
//     constructor({
//         color = 'amarillo',
//         dimension = 19.5,
//         material = 'madera',
//         marca = 'mongol' }) {

//         this.color = color;
//         this.dimension = dimension;
//         this.material = material;
//         this.#marca = marca;
//     };

//     setMarca(marca) {
//         this.#marca = marca;
//         return this.getMarca();
//     };

//     getMarca() {
//         return this.#marca;
//     }
// }

// let obj = new lapiz({});
// obj.setMarca({marca : 'Norma'});

// console.log(obj.getMarca());