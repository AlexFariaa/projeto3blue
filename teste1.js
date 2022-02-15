console.clear();
var prompt = require(`prompt-sync`)();

// CONTINUAÇÃO DO PROJETO 3

var hora = `7h00`
var nome = prompt(`Informe seu nome detetive: `);
console.clear();
var dados = {
    Nome: `Nome: Manoel`,
    Idade: `Idade: 50 anos`,
    Cidade: `Cidade: Arizona` 
}
console.log(`Dados da vítima: `);
console.log(dados.Nome);
console.log(dados.Idade);
console.log(dados.Cidade);
console.log();
do {
console.log(`Vamos começar o nosso jogo!
Antes de tudo, precisamos saber se você realmente está preparado para entrar neste jogo! `);
var resp = prompt(`Resposta: `).toLowerCase();
console.clear();

    if (resp == `sim`) {
    console.log()
    console.log(`VAMOS COMEÇAR ENTÃO!
A finalidade do jogo, é descobrir quem é o responsável pela morte do padeiro Manoel.
Sendo assim, seja muito esperto(a) em suas análises e escolhas, pois isso pode levar a sua morte, caso não solucione o caso!!
Você terá 2 dias para solucionar o caso. Então repetindo, escolha muito bem suas ações, para que no fim o caso seja solucionado!!`);
    console.log();
    } else {
    console.log()
    console.log(`Que pena, volte quando estiver realmente preparado!`);
}
} while (resp != `sim`)
var suspeitos = [`Judite`, `Sara`, `Jorge`];
const pense = suspeitos[Math.floor(Math.random() * (suspeitos.length -1))];
// console.log(pense);

console.log(`Vou lhe contar um pouco sobre a vida tranquila do padeiro Manoel, que morava em Arizona, uma pequena cidade dos Estados Unidos.
Ele era casado, tinha dois filhos. Sara sua filha caçula e Jorge seu filho mais velho.
Até onde sabemos, eles se davam muito bem.
Judite sua esposa, uma doce e singela senhora, muito educada e bonita, adorava fazer tortas.
Será que realmente a vida de Manoel era tão tranquila assim?
OU TALVEZ SEJA TUDO UMA GRANDE MENTIRA?!
Enfim, descobriremos no decorrer da investigação...`)
console.log();
let enter = prompt(`Aperte enter para seguir! `)
console.clear();
while (enter == ``) {
    console.log();
    console.log(`Depois de saber mais sobre Judite, Jorge e Sara, aperte qualquer tecla para seguir com o jogo!`)
    console.log();
    var perg = prompt(`Escolha entre 1 - Judite, 2 - Jorge e 3 - Sara para saber mais sobre eles: `);
    console.clear();
    if (perg == 1) {
        console.log(`Judite - Nascida em Fredericksburg, cidade do Texas, casou-se com Manoel quando tinha 20 anos de idade.
Uma mulher muito bonita, e com uma graça estupenda. Muito educada, nada consegue te tirar do sério.
Mas esconde algo muito sombrio dentro de si, e que não compartilha com ninguém!!!
Antes de Jorge e Sara nascerem, Manoel era um alcoólatra, e batia muito em Judite. Quando Jorge nasceu, Manoel parou de espancar Judite.
Mas os traumas permaneceram no subconciente de Judite.
Mas como uma bela dama, nunca demonstrou para ninguém o seu trauma no começo do seu casamento.`);
    } else if (perg == 2) {
        console.log(`Jorge - Tem 18 anos, gosta de ficar sozinho, jogar videgame, quase não sai de casa, apenas quando é pra ir pra escola, sempre fica trancado em seu quarto.
Quando mais novo, era muito apegado com Manoel seu pai, mas depois que Manoel mostrou seu lado agressivo, Jorge nunca mais viu o pai da mesma forma.
Jorge apanhou de seu pai, por não ter conseguido passar de ano na escola.
Enfim Jorge como sua mãe guardou seu trauma para si, e como consequência se isolou do mundo e começou a viver em seu próprio mundo.`);
    } else if (perg == 3) {
        console.log(`Sara - Sara tem 13 anos, uma adolescente normal para os demais adolescentes, mas ela tinha um diferencial, era a mais inteligente de sua sala.
Ela gostava muito de livros, principalmente os de conto de fadas.
Sara amava seu pai, muito apegada a Manoel, tudo que Manoel ia fazer, ela queria ir atrás.
Tão inocente, mal sabia ela que seu pai não era quem ela imaginava.`);
    } else {
        break;
    } 
}
console.log(`DIA 1
${hora} AM
Todos, exceto um(a), tinham saído para realizar seus respectivos afazeres do dia.
O mais estranho é que todos estavam bastante apreensivos no dia em que a morte do padeiro Manoel aconteceu.`);
console.log();
var suspfalso = [`Sara`, `Jorge`, `Judite`];
do {
    var comp = suspfalso[Math.floor(Math.random() * (suspfalso.length))];
} while (comp == pense)
// function escolha() {
// }
// escolha();
function palpite() {
    var inv = prompt(`Aperte enter para seguir com a investigação de Judite, Jorge e Sara? `);
    console.clear();
    if (inv == ``) {
        hora = `10h00`
        console.log();
        console.log(`Segundo alguns vizinhos que andavam pelo bairro na parte da manhã, ouviram alguns murmúrios dentro da casa do padeiro Manoel.
Logo após os murmúrios houve um momento de silêncio, logo interrompido pela porta da frente sendo aberta rapidamente por ${pense}, que saiu furiosamente e seguiu seu caminho até ao seu dévido afazer!`);
    console.log();
    console.log(`${hora} AM do dia 1
Todos já haviam ido para o seus afazeres, mas somente uma pessoa ficou em casa, que foi ${comp}.
${comp} decidiu não sair naquele dia, pois tinha alguns afazeres em casa mesmo.`);
}
    do{
    console.log();
    var palp = prompt(`Juntando todas as informações, dê um palpite de quem poderia ser o acusado pela morte do padeiro Manoel: `);
    console.clear();
    if (palp == pense) {
        console.log(`Segundo algumas testemunhas, ${pense} estava próximo ao local do acontecimento!!!
Mas será mesmo que ele(a) seria capaz de tal atrocidade?!`);
        console.log();
        let cont = prompt(`Deseja saber aonde ${pense} estava quando Manoel foi assassinado? `).toLowerCase();
        console.clear();
        if (cont == `sim`) {
            hora = `14h00`
            console.log(`${hora} PM do dia 1
${pense} foi entrevistado(a) e informou que estava passeando com o cachorro bob,
que está na família a mais de 6 anos...`);
            console.log();
            let op = prompt(`Detetive ${nome}, escolha 1 para continuar investigando ${pense}, ou 2 para pegar mais informações com as testemunhas que estavam no local:  `);
            console.clear();
            if (op == 1) {
                hora = `18h00`
                console.log(`${hora} PM do dia 1
Ainda na entrevista, ${pense} confessou que escutou alguns barulhos, minutos antes do ocorrido, mas não achou nada de estranho, pois
era comum ter alguns barulhos na padaria onde Manoel trabavalha.
${pense} informou também na entrevista, que ${comp} estava próximo da padaria, pois ${comp} estava no mercado que fica a 2 quarteirões do local.`);
                console.log()
                let suspf = prompt(`Você deseja investigar ${comp}? `).toLowerCase();
                console.clear();
                if (suspf == `sim`) {
                    hora = `07h00`
                    console.log(`DIA 2`)
                    console.log();
                    console.log(`${hora} AM
${comp} foi entrevistado(a), e informou que estava realmente no mercado que fica a 2 quarteirões do local, mas que logo após sair do estabelecimento,
foi diretamente para sua casa pois estava passando mal.
Como foi dito por ${comp}, ao sair do estabelecimento, foi diretamente para casa, pois estava passando mal, desde já, podemos descartar o envolvimento de ${comp} no ocorrido,
pois alguns vizinhos informaram que viram ele(a) chegando em casa minutos antes do acontecido!`);
                    console.log(`Outras testemunhas que ainda não tinham sido entrevistadas, informaram que alguns minutos depois da tragédia, alguém encapuzado, todo mascarado,
saiu de dentro da padaria e entrou no mato que fica logo atrás.`);
                    console.log();
                    let final = prompt(`Com base em suas investigações até agora, você já consegue solucionar o caso e dizer quem seria o responsável pela morte do padeiro Manoel? `).toLowerCase();
                    console.log();
                    if (final == `sim`) {
                        let res = prompt(`Então pode informar quem é o(a) responsável pela morte do padeiro Manoel: `);
                        console.log();
                        if (res == pense) {
                            if (res == `Judite`) {
                                console.log(`PARABÉNS VOCÊ REALMENTE É UM BOM DETETIVE!!!!
Judite assassinou seu marido a sangue frio, pois o trauma que ele deixou em sua vida foi maior que o amor. Você pode ter pensado que ${comp}, fosse o(a) responsável, mas não!
${comp} estava passando mal em casa, sem possíbilidade de sair.
Judite terminou seu afazer, e foi em sua casa, pegou seu cachorro bob, e seguiu rumo a floresta, prendeu seu cachorro bob em uma árvore, e vestiu ama capa e colocou uma máscara,
e levava em sua mão um bolo muito quente, que havia acabado de saír do forno. Manoel foi brutalmente envenenado com o bolo de sua esposa!!!`);
                                console.log();
                            } else if (res == `Jorge`) {
                                console.log(`PARABÉNS VOCÊ REALMENTE É UM(A) BOM(A) DETETIVE!!!!
Jorge assassinou seu pai a sangue frio, pois a magua que guardava dentro de si era muito grande. Quando Jorge era mais novo, Manoel seu pai deu uma surra nele,
pois ele não conseguiu passar de ano, daí em diante, Jorge sente muita raiva de seu pai, ao ponto de mata-lo.
Você pode ter imaginado que ${comp} era culpada, mas ela foi ao mercado no momento do acontecido, para comprar alguns ingredientes para fazer rémedio caseiro,
pois estava com muito mal estar.
Jorge saiu da escola, e foi para sua casa, pegou seu cachorro, e foi rumo a floresta, amarrou seu cachorro a uma árvore, vestiu uma capa preta, e colocou uma mascara. Logo após
ele foi em direção a padaria, e o objeto que estava em sua mão era uma arma, por gostar de jogar muito video game, ele tinha serta habilidade com tal instrumento.
Manoel foi brutalmente morto a tiros, pelo seu próprio filho!!! `);
                                console.log();
                            } else if (res == `Sara`) {
                                console.log(`PARABÉNS VOCÊ REALMENTE É UM BOM DETETIVE!!!!
Sara assassinou seu pai de uma forma terrívelmente assustadora. Você pode estar se perguntando o por que de Sara ter assassinado seu pai.
Simples, Sara como era muito inteligente, entendia querendo ou não quando sua mãe e seu irmão choravam juntos, por lembrarem de tudo que passaram, dessa forma,
Sara á vários meses vinha planejando a morte de seu querido pai, a quem era muito apegada. O ódio prevaleceu mais que o amor por seu pai, pois ver sua mãe e seu irmão sofrer
a deixava furiosa.
Você pode ter pensado que ${comp}, fosse o(a) responsável, mas não!
${comp} estava passando mal em casa, sem possíbilidade de sair.
Manoel foi brutalmente morto asfixiado, por sua própria filha!!!`);
                            }
                        } else {
                            console.log();
                            console.log(`MISSÃO FAILED!
VOCÊ FOI BRUTALMENTE ASSASSINADO PELO ACUSADO, POIS NÃO CONSEGUIU SOLUCIONAR O CASO A TEMPO!
O RESPONSÁVEL PELA MORTE DO PADEIRO MANOEL FOI ${pense}!`);
                        }
                    } else {
                        console.log();
                        console.log(`MISSÃO FAILED!
VOCÊ FOI BRUTALMENTE ASSASSINADO PELO ACUSADO, POIS NÃO CONSEGUIU SOLUCIONAR O CASO A TEMPO!
O RESPONSÁVEL PELA MORTE DO PADEIRO MANOEL FOI ${pense}!`);
                    }
                } else {
                    hora = `07h00`
                    console.log(`DIA 2`);
                    console.log();
                    console.log(`${hora} AM
Certo, então ${pense} se torna o(a) suspeito(a) principal!!!
                    
Segundo algumas testemunhas, ${pense}, foi visto(a) saindo da farmácia com uma sacola cheia de remédios.
O que será que ele(a) iria fazer com tantos remédios?`);
                    console.log();
                    let con = prompt(`Deseja continuar investigando? `).toLowerCase();
                    console.clear();
                    if (con == `sim`) {
                        hora = `11h00`
                        console.log(`Realizado nova entrevista com ${pense}, e ele(a) confessou que iria usar os rémedios para se matar!!
Mas ${comp} impediu que isso acontecesse, pois viu ${pense}, entrando em casa com a sacola cheia de remédios.
Mas qual séria o motivo de tal ato??
Segundo ele(a), não estava mais aguentando os traumas que lhe perseguia, causados a alguns anos atrás.
${hora} AM do dia 2
${comp} foi entrevistado(a), e informou que estava realmente no mercado que fica a 2 quarteirões do local, mas que logo após sair do estabelecimento,
foi diretamente para sua casa pois estava passando mal.
Como foi dito por ${comp}, ao sair do estabelecimento, foi diretamente para casa, pois estava passando mal, desde já, podemos descartar o envolvimento de ${comp} no ocorrido,
pois alguns vizinhos informaram que viram ele(a) chegando em casa minutos antes do acontecido!
E a investigação voltou para ${comp}, mas como percebemos, ele(a) não tem nada haver com o assassinato!!!`);
                    console.log();
                    let esc = prompt(`Com base em todas as informações até agora, informe quem pode ser o responsável pela morte de Manoel: `);
                    console.clear();
                    if (esc == pense) {
                        if (esc == `Judite`) {
                            console.log(`PARABÉNS VOCÊ REALMENTE É UM BOM DETETIVE!!!!
Judite assassinou seu marido a sangue frio, pois o trauma que ele deixou em sua vida foi maior que o amor. Você pode ter pensado que ${comp}, fosse o(a) responsável, mas não!
${comp} estava passando mal em casa, sem possíbilidade de sair.
Judite terminou seu afazer, e foi em sua casa, pegou seu cachorro bob, e seguiu rumo a floresta, prendeu seu cachorro bob em uma árvore, e vestiu ama capa e colocou uma máscara,
e levava em sua mão um bolo muito quente, que havia acabado de saír do forno. Manoel foi brutalmente envenenado com o bolo de sua esposa!!!`);
                            console.log();
                        } else if (esc == `Jorge`) {
                            console.log(`PARABÉNS VOCÊ REALMENTE É UM(A) BOM(A) DETETIVE!!!!
Jorge assassinou seu pai a sangue frio, pois a magua que guardava dentro de si era muito grande. Quando Jorge era mais novo, Manoel seu pai deu uma surra nele,
pois ele não conseguiu passar de ano, daí em diante, Jorge sente muita raiva de seu pai, ao ponto de mata-lo.
Você pode ter imaginado que ${comp} era culpada, mas ela foi ao mercado no momento do acontecido, para comprar alguns ingredientes para fazer rémedio caseiro,
pois estava com muito mal estar.
Jorge saiu da escola, e foi para sua casa, pegou seu cachorro, e foi rumo a floresta, amarrou seu cachorro a uma árvore, vestiu uma capa preta, e colocou uma mascara. Logo após
ele foi em direção a padaria, e o objeto que estava em sua mão era uma arma, por gostar de jogar muito video game, ele tinha serta habilidade com tal instrumento.
Manoel foi brutalmente morto a tiros, pelo seu próprio filho!!! `);
                            console.log();
                        } else if (esc == `Sara`) {
                            console.log(`PARABÉNS VOCÊ REALMENTE É UM BOM DETETIVE!!!!
Sara assassinou seu pai de uma forma terrívelmente assustadora. Você pode estar se perguntando o por que de Sara ter assassinado seu pai.
Simples, Sara como era muito inteligente, entendia querendo ou não quando sua mãe e seu irmão choravam juntos, por lembrarem de tudo que passaram, dessa forma,
Sara á vários meses vinha planejando a morte de seu querido pai, a quem era muito apegada. O ódio prevaleceu mais que o amor por seu pai, pois ver sua mãe e seu irmão sofrer
a deixava furiosa.
Você pode ter pensado que ${comp}, fosse o(a) responsável, mas não!
${comp} estava passando mal em casa, sem possíbilidade de sair.
Manoel foi brutalmente morto asfixiado, por sua própria filha!!!`);
                        }
                    } else {
                        console.log(`MISSÃO FAILED!
VOCÊ FOI BRUTALMENTE ASSASSINADO PELO ACUSADO, POIS NÃO CONSEGUIU SOLUCIONAR O CASO A TEMPO!
O RESPONSÁVEL PELA MORTE DO PADEIRO MANOEL FOI ${pense}!`);
                    }
                    } else {
                        console.log(`MISSÃO FAILED!
VOCÊ FOI BRUTALMENTE ASSASSINADO PELO ACUSADO, POIS NÃO CONSEGUIU SOLUCIONAR O CASO A TEMPO!
O RESPONSÁVEL PELA MORTE DO PADEIRO MANOEL FOI ${pense}!`);
                    }
                } 
            } else {
                hora = `18h00`
                console.log(`${hora} PM
Outras testemunhas que ainda não tinham sido entrevistadas, informaram que alguns minutos depois da tragédia, alguém encapuzado, todo mascarado,
saiu de dentro da padaria e entrou no mato que fica logo atrás.
Ainda na entrevista, ${pense} confessou que escutou alguns barulhos, minutos antes do ocorrido, mas não achou nada de estranho, pois
era comum ter alguns barulhos na padaria onde Manoel trabavalha.
${pense} informou também na entrevista, que ${comp} estava próximo da padaria, pois ${comp} estava no mercado que fica a 2 quarteirões do local.`);
                console.log();
                hora = (`DIA 2
11h00 AM`)
                console.log(`${hora}
${comp} falou com a polícia, e informou que estava realmente no mercado que fica a 2 quarteirões do local, mas que logo após sair do estabelecimento,
foi diretamente para sua casa pois estava passando mal.
Como foi dito por ${comp}, ao sair do estabelecimento, foi diretamente para casa, pois estava passando mal, desde já, podemos descartar o envolvimento de ${comp} no ocorrido,
pois alguns vizinhos informaram que viram ele(a) chegando em casa minutos antes do acontecido!`);
                console.log();
                let fim = prompt(`Com base nas investigações até agora, informe quem matou o padeiro Manoel: `);
                console.clear();
                if (fim == pense) {
                    if (fim == `Judite`) {
                        console.log(`PARABÉNS VOCÊ REALMENTE É UM BOM DETETIVE!!!!
Judite assassinou seu marido a sangue frio, pois o trauma que ele deixou em sua vida foi maior que o amor. Você pode ter pensado que ${comp}, fosse o(a) responsável, mas não!
${comp} estava passando mal em casa, sem possíbilidade de sair.
Judite terminou seu afazer, e foi em sua casa, pegou seu cachorro bob, e seguiu rumo a floresta, prendeu seu cachorro bob em uma árvore, e vestiu ama capa e colocou uma máscara,
e levava em sua mão um bolo muito quente, que havia acabado de saír do forno. Manoel foi brutalmente envenenado com o bolo de sua esposa!!!`);
                        console.log();
                    } else if (fim == `Jorge`) {
                        console.log(`PARABÉNS VOCÊ REALMENTE É UM(A) BOM(A) DETETIVE!!!!
Jorge assassinou seu pai a sangue frio, pois a magua que guardava dentro de si era muito grande. Quando Jorge era mais novo, Manoel seu pai deu uma surra nele,
pois ele não conseguiu passar de ano, daí em diante, Jorge sente muita raiva de seu pai, ao ponto de mata-lo.
Você pode ter imaginado que ${comp} era culpada, mas ela foi ao mercado no momento do acontecido, para comprar alguns ingredientes para fazer rémedio caseiro,
pois estava com muito mal estar.
Jorge saiu da escola, e foi para sua casa, pegou seu cachorro, e foi rumo a floresta, amarrou seu cachorro a uma árvore, vestiu uma capa preta, e colocou uma mascara. Logo após
ele foi em direção a padaria, e o objeto que estava em sua mão era uma arma, por gostar de jogar muito video game, ele tinha serta habilidade com tal instrumento.
Manoel foi brutalmente morto a tiros, pelo seu próprio filho!!! `);
                        console.log();
                    } else if (fim == `Sara`) {
                        console.log(`PARABÉNS VOCÊ REALMENTE É UM BOM DETETIVE!!!!
Sara assassinou seu pai de uma forma terrívelmente assustadora. Você pode estar se perguntando o por que de Sara ter assassinado seu pai.
Simples, Sara como era muito inteligente, entendia querendo ou não quando sua mãe e seu irmão choravam juntos, por lembrarem de tudo que passaram, dessa forma,
Sara á vários meses vinha planejando a morte de seu querido pai, a quem era muito apegada. O ódio prevaleceu mais que o amor por seu pai, pois ver sua mãe e seu irmão sofrer
a deixava furiosa.
Você pode ter pensado que ${comp}, fosse o(a) responsável, mas não!
${comp} estava passando mal em casa, sem possíbilidade de sair.
Manoel foi brutalmente morto asfixiado, por sua própria filha!!!`);
                    }
                } else {
                    console.log(`MISSÃO FAILED!
VOCÊ FOI BRUTALMENTE ASSASSINADO PELO(a) ACUSADO(a), POIS NÃO CONSEGUIU SOLUCIONAR O CASO A TEMPO!
O(A) RESPONSÁVEL PELA MORTE DO PADEIRO MANOEL FOI ${pense}!`);
                }
            }
        } else {
            hora = `14h00`
            console.log(`${hora} PM
Que pena, talvez teria sido melhor verificar, qualquer pista ajuda muito na descoberta de quem foi o responsável pela morte de Manoel!!`);
            console.log();
            console.log(`Foi informado por algumas testemunhos que chegaram no local após o acontecido, que viram algo muito estranho na movimentação das pessoas.
Alguém com capus e máscara, saiu do meio do povo, e entrou rapidamento no meio da mata.`);
            console.log();
            let mor = prompt(`Deseja seguir investigando, para saber quem é essa pessoa? `).toLowerCase();
            console.clear();
            if (mor == `sim`) {
                console.log(`Em continuação a suas declarações, as testemunhas informaram que logo após essa pessoa ter entrado na mata, ${comp} chegou ao local!
Será que ${comp} conseguiria trocar de roupa tão rápido e voltar para o mesmo lugar por um caminho totalmente diferente?
Fica aí o questionamento...`);
                console.log();
                hora = `18h00`
                console.log(`${hora} PM
Acho que é melhor você ir mais rápido na sua investigação, pois seu tempo está passando muito rápido!!`);
                console.log()
                let pop = prompt(`Detetive ${nome}, escolha 1 para continuar investigando ${pense}: `);
                console.clear();
                if (pop == 1) {
                    hora = `18h00`
                    console.log(`${hora} PM
Ainda na entrevista, ${pense} confessou que escutou alguns barulhos, minutos antes do ocorrido, mas não achou nada de estranho, pois
era comum ter alguns barulhos na padaria onde Manoel trabavalha.
${pense} informou também na entrevista, que ${comp} estava próximo da padaria, pois ${comp} estava no mercado que fica a 2 quarteirões do local.`);
                    console.log()
                    let fsusp = prompt(`Vamos investigar ${comp}? `).toLowerCase();
                    console.clear();
                    if (fsusp == `sim`) {
                    hora = `07h00`
                    console.log(`DIA 2`)
                    console.log();
                    console.log(`${hora} AM
${comp} foi entrevistado(a), e informou que estava realmente no mercado que fica a 2 quarteirões do local, mas que logo após sair do estabelecimento,
foi diretamente para sua casa pois estava passando mal.
Como foi dito por ${comp}, ao sair do estabelecimento, foi diretamente para casa, pois estava passando mal, desde já, podemos descartar o envolvimento de ${comp} no ocorrido,
pois alguns vizinhos informaram que viram ele(a) chegando em casa minutos antes do acontecido!`);
                        console.log(`Outras testemunhas que ainda não tinham sido entrevistadas, informaram que alguns minutos depois da tragédia, alguém encapuzado, todo mascarado,
saiu de dentro da padaria e entrou no mato que fica logo atrás.`);
                            console.log();
                            let final = prompt(`Com base em suas investigações até agora, você já consegue solucionar o caso e dizer quem seria o responsável pela morte do padeiro Manoel? `).toLowerCase();
                            console.log();
                            if (final == `sim`) {
                                let res = prompt(`Então pode informar quem é o(a) responsável pela morte do padeiro Manoel: `);
                                console.log();
                                if (res == pense) {
                                    if (res == `Judite`) {
                                        console.log(`PARABÉNS VOCÊ REALMENTE É UM BOM DETETIVE!!!!
Judite assassinou seu marido a sangue frio, pois o trauma que ele deixou em sua vida foi maior que o amor. Você pode ter pensado que ${comp}, fosse o(a) responsável, mas não!
${comp} estava passando mal em casa, sem possíbilidade de sair.
Judite terminou seu afazer, e foi em sua casa, pegou seu cachorro bob, e seguiu rumo a floresta, prendeu seu cachorro bob em uma árvore, e vestiu uma capa e colocou uma máscara,
e levava em sua mão um bolo muito quente, que havia acabado de saír do forno. Manoel foi brutalmente envenenado com o bolo de sua esposa!!!`);
                                console.log();
                                } else if (res == `Jorge`) {
                                console.log(`PARABÉNS VOCÊ REALMENTE É UM(A) BOM(A) DETETIVE!!!!
Jorge assassinou seu pai a sangue frio, pois a magua que guardava dentro de si era muito grande. Quando Jorge era mais novo, Manoel seu pai deu uma surra nele,
pois ele não conseguiu passar de ano, daí em diante, Jorge sente muita raiva de seu pai, ao ponto de mata-lo.
Você pode ter imaginado que ${comp} era culpada, mas ela foi ao mercado no momento do acontecido, para comprar alguns ingredientes para fazer rémedio caseiro,
pois estava com muito mal estar.
Jorge saiu da escola, e foi para sua casa, pegou seu cachorro, e foi rumo a floresta, amarrou seu cachorro a uma árvore, vestiu uma capa preta, e colocou uma mascara. Logo após
ele foi em direção a padaria, e o objeto que estava em sua mão era uma arma, por gostar de jogar muito video game, ele tinha serta habilidade com tal instrumento.
Manoel foi brutalmente morto a tiros, pelo seu próprio filho!!! `);
                                console.log();
                                } else if (res == `Sara`) {
                                    console.log(`PARABÉNS VOCÊ REALMENTE É UM BOM DETETIVE!!!!
Sara assassinou seu pai de uma forma terrívelmente assustadora. Você pode estar se perguntando o por que de Sara ter assassinado seu pai.
Simples, Sara como era muito inteligente, entendia querendo ou não quando sua mãe e seu irmão choravam juntos, por lembrarem de tudo que passaram, dessa forma,
Sara á vários meses vinha planejando a morte de seu querido pai, a quem era muito apegada. O ódio prevaleceu mais que o amor por seu pai, pois ver sua mãe e seu irmão sofrer
a deixava furiosa.
Você pode ter pensado que ${comp}, fosse o(a) responsável, mas não!
${comp} estava passando mal em casa, sem possíbilidade de sair.
Manoel foi brutalmente morto asfixiado, por sua própria filha!!!`);
                                }
                            }
                            }  else {
                                console.log();
                                console.log(`MISSÃO FAILED!
VOCÊ FOI BRUTALMENTE ASSASSINADO PELO(a) ACUSADO(a), POIS NÃO CONSEGUIU SOLUCIONAR O CASO A TEMPO!
O(A) RESPONSÁVEL PELA MORTE DO PADEIRO MANOEL FOI ${pense}!`);
                            }   
                } else {
                    console.log();
        console.log(`MISSÃO FAILED!
VOCÊ FOI BRUTALMENTE ASSASSINADO PELO(a) ACUSADO(a), POIS NÃO CONSEGUIU SOLUCIONAR O CASO A TEMPO!
O(A) RESPONSÁVEL PELA MORTE DO PADEIRO MANOEL FOI ${pense}!`);
                }
            }    
    } else {
        console.log();
        console.log(`MISSÃO FAILED!
VOCÊ FOI BRUTALMENTE ASSASSINADO PELO(a) ACUSADO(a), POIS NÃO CONSEGUIU SOLUCIONAR O CASO A TEMPO!
O(A) RESPONSÁVEL PELA MORTE DO PADEIRO MANOEL FOI ${pense}!`);
            }
        }
} else {
    hora = `13h00`
    console.log(`Talvez não seja ${palp}, pois ele(a) foi visto(a) indo ao mercado no momento da tragédia.`);
    console.log();
    console.log(`${hora} PM
Foi informado por algumas pessoas que passaram pelo local minutos antes da tragédia, que Manoel estava bastante feliz.
Mal sabia ele que sua alegria séria interrompida minutos depois!`);
    console.log();
    console.log(`Você tem outra chance de dar outro palpite, pois já sabemos que ${palp} estava no mercado no momento do acontecido!`)
    }
    } while (palp != pense)
}
palpite();