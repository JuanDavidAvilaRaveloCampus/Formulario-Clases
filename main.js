let input_color = document.querySelector(`[type='color']`);
let input_rango = document.querySelector(`[type = 'range']`);
let input_marca = document.querySelector(`[value='Mongol']`);
let input_borrador = document.querySelector(`[value = 'true']`);
let input_material = document.querySelector(`[value = 'Madera']`);

let data = [];
class lapiz {
    #marca
    constructor({
        color = 'amarillo',
        dimension = 19.5,
        borrador = true,
        material = 'madera',
        marca = 'mongol' }) {

        this.color = color;
        this.dimension = dimension;
        this.material = material;
        this.borrador = true,
        this.#marca = marca;
    };

    getColor(){
        return this.color;
    }

    getDimension(){
        return this.dimension;
    }

    getMaterial(){
        return this.material
    }

    getBorrador(){
        return this.borrador;
    };

    getMarca() {
        return this.#marca;
    };

    setColor(nuevo_color){
        this.color = nuevo_color;
    };

    setDimension(nuevo_tamaño){
        this.dimension = nuevo_tamaño;
    };

    setMarca(nueva_marca){
        this.marca = nueva_marca;
    }

    setBorrador(new_borrador) {
        this.borrador = new_borrador;
    };

    setMaterial(nuevo_material){
        this.material = nuevo_material;
    };

    

}

window.onload = ()=>{
    input_color.setAttribute('value','#FFD700');
    input_rango.val = 19.5;
    input_marca.checked = true;
    input_borrador.checked = true;
    input_material.checked = true;

    // console.log(color);
};

document.querySelector('#formulario').addEventListener('submit', (e)=>{
    e.preventDefault();

    let formulario = Object.fromEntries(new FormData(e.target));
    let color = formulario.color;
    let dimension = formulario.dimension;
    let marca = formulario.marca;
    let borrador = formulario.borrador;
    let material = formulario.material;

    let Lapiz = new lapiz({});
    Lapiz.setColor({color : `${color}`});
    Lapiz.setDimension({dimension : `${dimension}`});
    Lapiz.setMarca({marca : `${marca}`});
    Lapiz.setBorrador({borrador : `${borrador}`});
    Lapiz.setMaterial({material : `${material}`});

    data.unshift(color, dimension, marca, borrador, material);
    // data.unshift(formulario.color)
    document.querySelector('#tabla').insertAdjacentHTML('beforeend',`
        <tr>
            <th>${color}</th>
            <th>${dimension}</th>
            <th>${marca}</th>
            <th>${borrador}r</th>
            <th>${material}</th>
        </tr>
    `)
    console.log(data);
});





