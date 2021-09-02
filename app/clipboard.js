function copyClipboard(id){
    let elemento = document.getElementById(id);
    Navigator.clipboard.writeText(elemento.id);
}