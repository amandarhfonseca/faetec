function apagar(id) {

    //var parent = child.parentElement;    
    //var id = parent.getAttribute('id');    
    //console.log(id);

    //var id = parent.parent.getAttribute('id');
    var r = confirm("Tem certeza que deseja apagar o aluno?");
    if (r == true) {
        document.getElementById(id).remove();
    }
}

function msg(){
    alert ('Por hoje já deu, fui...');
}