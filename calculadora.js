let nascimento=prompt("Em que ano você nasceu?: ");
let anoAtual=prompt("Em que ano estamos?: ");

if (anoAtual===""){
    let anoAtual=2023;

}
function calculaIdade(anoAtual,nascimento){    
    if (nascimento===""){
        console.log("Dados inválidos!");
    
    };
    
    let idade=anoAtual-nascimento;
    
    console.log("Você tem "+idade+" anos!");
};

calculaIdade(anoAtual,nascimento);
