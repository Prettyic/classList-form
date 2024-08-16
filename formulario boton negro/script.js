const modo=document.getElementById("modo")
let estado=false
// se le asigna al elemto raiz(html)
const html=document.documentElement
modo.addEventListener('click',()=>{
    if(estado==false){
        // modo oscuro
        html.style.setProperty('--color-body' ,'#0f0b0b')
        html.style.setProperty('--color-text' ,'#fff')
        html.style.setProperty('--color-header' ,'#5a5858')
        estado=true
    }else{
        // modo claro
        html.style.setProperty('--color-body' ,'#b2b2b4')
        html.style.setProperty('--color-text' ,'#000')
        html.style.setProperty('--color-header' ,'#f8e0e4')
        estado=false 
       
    }
})

function longimMandaTory(){
    let name=document.getElementById("nombre").value;
    let lastName=document.getElementById("apellido").value;
    let usere=document.getElementById("usuario").value;
    let gmail=document.getElementById("correo").Value;
    let password=document.getElementById("contraseña").Value;

alert('su informacion es la siguiente:' 

);
}

function activarclase(){
    document.body.classList.toggle("azul")
}