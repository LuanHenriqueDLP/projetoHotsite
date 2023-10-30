$(document).ready(function()
{
    $("#formMensagem").submit(function(e) {

        e.preventDefault();
        Cadastrar();
    });
})

function Cadastrar() 
{
    let parametros = {
        Nome: $("#idNome").val(),
        Email: $("#idEmail").val(),
        Mensagem: $("#idMensagem").val()
    };

    $.post("/Home/Cadastrar", parametros)

    .done(function(data)
    {
        if (data.status == "OK")
        {
            $("#formMensagem").after("<h4>Solicitação realizada com sucesso!</h4>");
            $("#formMensagem").hide();
        }
        else
        {
            alert(data.mensagem);
        }
    })

    .fail(function(data) 
    {
        alert(data.mensagem);
    })
};