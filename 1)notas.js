function avaliarNotas(notas){
   
    let soma = 0;

    notas.forEach(function(nota){
        soma += nota;
    });
   
    let media = soma / notas.length; 

    if (media >= 7) {
       return "aprovado";

    } else {
        return "reprovado";

    }

    }
    let notas = [8, 7, 0, 0];
    let resultado = avaliarNotas(notas);
    console.log(resultado);


