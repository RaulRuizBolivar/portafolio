function copyClipboard(id){
    let elemento = document.getElementById(id);
    let copiado = navigator.clipboard.writeText(elemento.id);
}