# Batalha-Naval

  🚢: Projeto Batalha Naval
Vamos construir um jogo utilizando Matrizes (Grids). O objetivo é criar um tabuleiro de água onde um navio está escondido. O jogador deve adivinhar a coordenada correta para vencer.

Usaremos também conceitos de listas (arrays), loops, condicionais e entrada de dados (input) para fazer isso.

Utilize o arquivo index.html providenciado para rodar o código JavaScript no navegador.

Parte 1: Gerando o Mapa
Todo jogo precisa de um mapa. Vamos criar um tabuleiro 5x5 (5 linhas, 5 colunas) preenchido de água.

[ ] Crie uma variável chamada tabuleiro com uma lista vazia [].
[ ] Crie um laço de repetição (for) que se repita 5 vezes (representando as 5 linhas).
[ ] Dentro desse laço, crie uma variável linha que também começa como lista vazia.
[ ] Crie um segundo laço dentro do primeiro (nested loop) que se repita 5 vezes. Dentro dele, adicione (push) a string "~" (água) na sua lista linha.
[ ] Ao terminar o segundo laço, adicione a linha completa dentro da variável tabuleiro.
[!tip]Dica Use console.table(tabuleiro) para ver se o seu mar foi criado corretamente.

Parte 2: Posicionando o Alvo
Antes de fazer o navio se mover sozinho, vamos colocá-lo em um lugar fixo para testar se nossa mira está boa.

[ ] Crie uma constante navioLinha e guarde o valor 2.
[ ] Crie uma constante navioColuna e guarde o valor 3.
[!tip]Dica Use console.warn("Navio em: " + navioLinha + ", " + navioColuna) para você ver onde ele está enquanto escreve e testa o código.

Parte 3: O Loop do Jogo (Game Loop)
Um jogo precisa rodar continuamente até alguém ganhar ou perder.

[ ] Crie uma variável jogando e defina como false.
[ ] Crie um laço while que rode enquanto jogando for verdadeiro.
[ ] Dentro do while, a primeira coisa a fazer é limpar a tela com console.clear() e mostrar o tabuleiro atualizado com console.table(tabuleiro).
[!warning]Cuidado! Se você você colocar a variável jogando como true, vai travar o navegador (loop infinito)! Não coloque true ainda.

Parte 4: Sistema de Input (O Tiro)
Vamos permitir que o jogador digite as coordenadas para atirar.

[ ] Dentro do while, crie duas constantes: tiroLinha e tiroColuna.
[ ] Use o comando prompt para pedir a primeira coordenada (linha) e guarde em tiroLinha.
[ ] Use o comando prompt para pedir a segunda coordenada (coluna) e guarde em tiroColuna.
[!important]Importante O prompt devolve texto. Envolva o comando em parseInt(...) para transformar em número inteiro. - Exemplo: const tiroLinha = parseInt(prompt("Linha (0-4):"));

Parte 5: A Lógica de Colisão
Agora é a hora da verdade. O tiro acertou o navio?

[ ] Ainda dentro do while, crie uma estrutura condicional if / else. A Condição: Verifique se tiroLinha é igual a navioLinha E (&&) se tiroColuna é igual a navioColuna.
[ ] Vitória (IF):
[ ] Exiba um alert com "ACERTOU! Navio afundado! 🚢💥".
[ ] Atualize o tabuleiro na posição do tiro com o símbolo "X" para marcar a explosão.
[ ] Mostre o tabuleiro final com console.table.
[ ] Mude a variável jogando para false (isso encerra o jogo).
[ ] Erro (ELSE):
[ ] Exiba um alert com "Tiro na Água... Tente de novo. 🌊".
[ ] Atualize o tabuleiro na posição do tiro com o símbolo "o" (ou outro de sua escolha) para marcar que ali já foi tentado.
[!important]Importante Quando terminar essa parte, lembre de colocar a variável jogando como true no início do código para o jogo rodar, pois previamente estava como false para evitar loop infinito. Se não fizer isso, o jogo não vai começar.

🏆 Desafio Extra: Geração Procedural
Seu jogo funciona, mas o navio está sempre no mesmo lugar (Linha 2, Coluna 3). Jogos reais mudam a cada partida!

Missão: Altere a Parte 2 para que as coordenadas do navio sejam geradas aleatoriamente pelo computador. O navio deve aparecer em qualquer linha entre 0 e 4 e qualquer coluna entre 0 e 4.

[!tip]Dica Pesquise sobre Math.random() e Math.floor() no JavaScript.

"Algo poderoso que aprendi enquanto programador e que devemos aplicar na realidade é: ERRAR RÁPIDO!" - Eric Ries
