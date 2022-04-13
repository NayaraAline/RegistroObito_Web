/*** CAMPOS NUMÉRICOS ****/
$('#validationN').keyup(function() {
    $(this).val(this.value.replace(/\D/g, ''));
});

/*** CAMPOS TEXTO ****/
$('#nomecartorio').keyup(function() {
    this.value = this.value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, '');
});

/*** MASCARA TELEFONE ****/
$("#phone").mask("(00)0 0000-0000");


/*** MASCARA CEP ****/
$("#cep").mask("38400-313");