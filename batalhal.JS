const tabuleiro = []
const navioLinha = Math.floor(Math.random() * 5)
const navioColuna = Math.floor(Math.random() * 5)

for(let i = 0; i <5; i++){
    const linha = []

    for(let j = 0; j <5; j++){
        linha.push("~~~")
    
    }
    tabuleiro.push(linha)
}
    console.table(tabuleiro)
        console.warn(`Navio em: ${navioLinha}, ${navioColuna}`)

        let jogando = true
        while(jogando){
            console.table(tabuleiro)

                const tiroLinha = parseInt(prompt
                    ("Escolha a coordenada do tiro para linha de (0-4):"));
                const tiroColuna = parseInt(prompt
                    ("Escolha a coordenada do tiro para coluna de (0-4):"));{
                       
                        if(tiroLinha === navioLinha && tiroColuna === navioColuna){
                           alert("Acertou! Navio afundado!")
                           tabuleiro[tiroLinha][tiroColuna]
                           = "x" 
                           console.table(tabuleiro)
                           jogando = false
                        } else {
                            alert("Tiro na Água... Tente de novo.")
                            tabuleiro[tiroLinha][tiroColuna]
                              = "O"

                             } 
                        }
                    }
