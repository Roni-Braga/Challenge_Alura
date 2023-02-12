const input = document.querySelector('#texto')
const mensagem = document.querySelector('#mensagem')

/*A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/
function esconde(){
    document.getElementById('mostra').style.display="none"
    document.querySelector('.dica').style.display="none"
}
function aparece(){
    document.querySelector('.btn-copiar').style.display ="block"
    document.getElementById('mensagem').style.display="block"
}
function btnEncriptar(){
    
    const textoEncriptado = encriptar(input.value)    
    mensagem.value=textoEncriptado
    input.value = ""
    esconde()
    aparece()
    
}
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(input.value)    
    mensagem.value=textoDesencriptado
    input.value = ""
    esconde()
    aparece()
    
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
function copiar(){
    document.getElementById('mensagem').select()
    document.execCommand('copy')
}
