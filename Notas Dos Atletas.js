

function getMedia(notas){
    notas = notas.sort((a,b) => a-b) //ordena as notas 
    let notasComputadas = notas.slice(1,4) // retira a maior e a menor nota
    const sum = notasComputadas.reduce((acc, num) => acc + num, 0); //faz o somatorio
    return sum / notasComputadas.length // retorna a media
}

//input
let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
//um novo array com o valor media(optei pelo novo array para não alterar os valores do input original)
let atletasComMedia = atletas.map(atleta =>({
    nome: atleta.nome,
    notas: atleta.notas,    
    media : getMedia(atleta.notas) 
}))

// output
atletasComMedia.forEach(atleta =>{
    console.log(`Atleta: ${atleta.nome}\nNotas Obtidas: ${atleta.notas.join(",")}\nMédia Válida: ${atleta.media}\n\n`)
})
