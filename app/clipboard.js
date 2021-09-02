function copyClipboard(id){
    let elemento = document.getElementById(id);
    navigator.clipboard.writeText(elemento.id);
}