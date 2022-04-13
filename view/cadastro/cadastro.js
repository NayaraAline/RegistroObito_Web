$(document).ready(function() {

    /*** MASCARA CPF e RG ****/
    
        var $CampoCpf = $("#validationCpf");
        $CampoCpf.mask('000.000.000-00', {
            reverse: true
        });
        var $CampoRG = $("#validationRg");
        $CampoRG.mask('00.000.000-0', {
            reverse: true
        });


    /*** CAMPOS NUMÉRICOS ****/
    $('#validationLivro,#validationTermo,#validationFolha').keyup(function() {
        $(this).val(this.value.replace(/\D/g, ''));
    });

    /*** CAMPOS TEXTO ****/
    $('#validationNome,#validationFiliaçao1,#validationFiliaçao2').keyup(function() {
        this.value = this.value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, '');
    });
})