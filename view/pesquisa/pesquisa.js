var dados = []
    
    //   FUNÇÃO APAGAR REGISTRO   //
    function ApagaRegistro(id) {
        let _confirm = confirm("Deseja excluir esse registro")
        if (_confirm) {
            for (let i = 0; i < dados.length; i++) {
                if (dados[i].id == id) {
                    dados.splice(i, 1)
                }
            }
            PopulaTabela()
        }
    }
    
    //   FUNÇÃO EDITAR REGISTRO  //
    function EditaRegistro(id) {
        $("#modalRegistro").modal("show")
    
    
        dados.forEach(function(item) {
            if (item.id == id) {
                $("#hdID").val(item.id)
                $("#validationNome").val(item.nome)
                $("#validationData").val(item.data.substr(6, 4) + "-" + item.data.substr(3, 2) + "-" + item.data.substr(0, 2))
                $("#validationLivro").val(item.livro)
                $("#validationFolha").val(item.folha)
                $("#validationTermo").val(item.termo)
                $("#validationFiliaçao1").val(item.filiação1)
                $("#validationFiliaçao2").val(item.filiação2)
                $("#validationCpf").val(item.cpf)
                $("#validationRg").val(item.rg)
    
            }
        })
    }
    
    
    
    function PopulaTabela() {
        if (Array.isArray(dados)) {
    
           sessionStorage.setItem("__dados__", JSON.stringify(dados))
    
   
    
            dados.forEach(function(item) {
                //TEMPLATE STRING
                $("#tblDados tbody").append(`<tr>
                    <td>${item.id}</td>
                    <td>${item.nome}</td>
                    <td>${item.data}</td>
                    <td>${item.livro}</td>
                    <td>${item.folha}</td>
                    <td>${item.termo}</td>
                    <td style="text-align: center;" ><button type="button" class="btn btn-danger button-registro" onclick="javascript:ApagaRegistro(${item.id});"><i class="fa fa-trash"/></button> 
                                                     <button type="button" class="btn btn-primary button-registro"  onclick="javascript:EditaRegistro(${item.id});"><i class="fa fa-edit"/></button></td>
                </br>`)
            })
        }
    }
    
    $(function () {
        //EXECUTA AO CARREGAR DA TELA
        dados = JSON.parse(localStorage.getItem("__dados__"))
    
        if (dados) {
            PopulaTabela()
        }
    
        $("#btnSalvar").click(function() {
            //EVENTO CLICK DO BOTÃO SALVAR 
    
    
            let _id = $("#hdID").val()
            let nome = $("#validationNome").val()
            let data = new Date($("#validationData").val()).toLocaleDateString("pt-br", { timeZone: "UTC" })
            let livro = $("#validationLivro").val()
            let folha = $("#validationFolha").val()
            let termo = $("#validationTermo").val()
            let filiação1 = $("#validationFiliaçao1").val()
            let filiação2 = $("#validationFiliaçao2").val()
            let cpf = $("#validationCpf").val()
            let rg = $("#validationRg").val()
    
    
                if (!_id || _id == "0"){
                    let registro = {}
                    registro.nome = nome
                    registro.data = data
                    registro.livro = livro
                    registro.folha = folha
                    registro.termo = termo
                    registro.filiação1 = filiação1
                    registro.filiação2 = filiação2
                    registro.cpf = cpf
                    registro.rg = rg

                    registro.id = dados.length + 1

                    dados.push(registro)


                    alert("Registro Salvo com sucesso")

                    //LIMPEZA DOS CAMPOS
                    $("#validationNome").val("")
                    $("#validationData").val("")
                    $("#validationLivro").val("")
                    $("#validationFolha").val("")
                    $("#validationTermo").val("")

                    PopulaTabela()

                }

                
                else {
                    dados.forEach(function(item){
                        if (item.id == id) {
                            item.nome == nome
                            item.data == data
                            item.livro == livro
                            registro.folha == folha
                            registro.termo == termo
                            registro.filiação1 == filiação1
                            registro.filiação2 == filiação2
                            registro.cpf == cpf
                            registro.rg == rg
                        }
                    })
                }
             
                alert("Registro Salvo com sucesso")
                PopulaTabela()
                $("modalRegistro").modal("hide")
    
    
    })
    
    
    
  
    $(document).ready(function() {
        $("input[name=s]").bind('input', function() {
            var s = $(this).val().length;
            if (conta >= 1) {
                $.post('pesquisa.php', {});
            } else {
                $("#results").text('');
            }
    
        });
    
        $("#pesquisa").submit(function() {
    
        });
    });
    
    
    
    $(function() {
        $("#tblDados input").keyup(function() {
            var index = $(this).parent().index();
            var nth = "#tblDados td:nth-child(" + (index + 1).toString() + ")";
            var valor = $(this).val().toUpperCase();
            $("#tblDados tbody tr").show();
            $(nth).each(function() {
                if ($(this).text().toUpperCase().indexOf(valor) < 0) {
                    $(this).parent().hide();
                }
            });
        });
    
        $("#tblDados input").blur(function() {
            $(this).val("");
        });
    });
    
})
