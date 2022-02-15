console.log()
const pc = require('prompt-sync')();

//função [1] compra
//função [2] vende
//Objeto [3] olha status¹
//função [4] passar o mês
//função [5] ler noticias do mês
//função [6] jogar na mega sena
//função [7] só aparece quando sair a noticia sobre NFT
//função [7] Comprar nft para ter na coleção
//while para continuar o jogo dentro dos 12 meses, fazer na escolha dos personagens, quer jogar? sim ou não 
//if para escolher a função
//if para fazer as variaveis das moedas
//status¹ do personagem: Dinheiro total para investir, patrimonio das moedas, valores das moedas do mercado
//mudanças simples nas moedas, exemplo: compra 1500 reais de bitcoin, se ela varia pra cima em 10%, no mes seguinte ele tem 1650.
//criar uma aleatoriedade sobre mega-sena. sera 1 em 20 de ganhar, cada mega-sena custa 500 reais
//objetivo do jogo: ter um sucesso financeiro (seria dobrar de patrimonio).
//no jogo voce pode: falir (terminar negativo), manter na mesma (pouca variação de patrimonio), ou sucesso financeiro (dobrou)
//as noticias terão mais variações positivas do que negativas, espalhadas durante 11 meses + 1 antes do jogo começar.
//noticias estão em grupos diferentes: 
// [0] noticias antes do jogo começar, por padrão, a primeira será sobre as eleições, sinopse do jogo, farei isso com console.log
// [1] noticias boas, cerca de 2 pra 1 em relação as ruins e neutras
// [2] noticias ruins.
// [3] sobre eleições ficará a parte, pois será necessario ter um controle, são as que mais terão um impacto nas moedas. elas devem começar
// ja no primeiro mês antes da primeira rodada, e ir aparecendo mes a mes, até outubro.
// nas noticias das eleições, ja estará programado quem vai ganhar. mas nao terá uma interferencia tão grande quanto o acumulo das noticias
// até o mês 10
// peso 1 => muita importancia 70%
// peso 2 => importancia media 40%
// peso 3 => pouca importancia 15%
let mes = 0
let noticiausada = []
let noticiainit = [ // referente ao mes 0
    ['presidente direita ganhando', 1, 'dolarsobe'],
    ['presidente esquerda ganhando', 1, 'dolarcai'],
    ['presidente novo na parada, jovem, tecnologico', 1, 'btcsobe'] 
]
//criar lista de noticias novas... até o mês 3, lançamento de nft e mega-sena // referente ao mes 1 2 e 3.... 2 noticias no minimo para cada mes
var noticiatri = [
    ['Logo nesse inicio de ano, spacex anuncia seu interesse em fazer lançamentos de satélites capazes de dar internet para o mundo.', 1, 'btcsobe'],
    ['Com o anuncio dos candidatos a presidencia do Brasil, algumas manifestações ja começaram contra o presidente da esquerda', 3, 'dolarcai'],
    ['Russia e Ucrania estão em um momento tenso, guerra fria? 3º guerra mundial? o que esperar disso? fiquem atentos', 2, 'dolarsobe'],
    ['Vacina Pfizer não mostra tanta eficacia. Todos que tomaram a 2º dose terá de tomar a 3º', 2, 'dolarcai'],
    [`Ja começamos com o acumulo da mega-sena!!quem sera o ganhador?`, 3, 'mega'],
    ['Que onda é essa que estamos passando com a tecnologia? Agora você pode comprar NFT (non-fungible token). O que será que é isso?', 1, 'nftsobe'],
    ['O metaverso foi criado! Essa inovação seria um bom complemento com as nfts. Como funcionaria as transações dentro desse universo? Interessante.', 1, 'nftsobe'],
    ['Tesla faz o lançamentos dos seus novissímos carros tecnológicos', 1, 'btcsobe'],
    ['Presidente dos EUA demonstra apoio a Ucrania.',1, 'dolarsobe'],
    ['Estados Unidos encerra acordo de mercado com China',1, 'dolarcair'],
    ['China proibe a mineração das blockchains de Bitcoin no país.', 1, 'dolarsobe'],
    ['Cazaquistão para evitar maiores problemas e conter a manifestação no país, desligam a internet por todo o território',1,'dolarsobe'],
    ['NFT apesar de ter sido lançado, não apresenta utilidade no momento além de status, sera isso mesmo?',1, 'dolarsobe'],
    ['Copom anuncia o aumento da taxa selic a 10,75% ao ano. Mercado prevê aumento ainda maior, podendo chegar até 12,25%', 1, 'dolarcai'],
    ['Nanotecnologia ja é uma realidade, internet mais rapida, computadores mais potentes.',1,'btcsobe'],
    ['Vacuo quantico será a nova tecnologia para internet espacial',1,'btcsobe'],
    ['OpenSea cresceu cerca de 14Bilhoes de dólares após aquisições de coleções de NFT',1,'nftsobe'],
]

function soltarnoticiatri(){
    aleatorio = Math.trunc(Math.random()*(noticiatri.length))
    let notice = noticiatri[aleatorio]
    console.log("Segue a noticia: ")
    console.log(notice[0])
    noticiausada.push(noticiatri[aleatorio])
    noticiatri.splice(aleatorio,1)

    for(let i of notice){
        if (i === 'dolarsobe'){
         status.bitcoin = status.bitcoin - (status.bitcoin*0.4) //1000
         status.ethereum = status.ethereum - (status.bitcoin*0.45)
         status.dolar = status.dolar + (status.dolar*0.6)
         status.nft = status.nft - (status.nft*0.4)
        }
        else if (i === 'dolarcai'){
        status.bitcoin = status.bitcoin + (status.bitcoin*0.35) //1000
        status.ethereum = status.ethereum + (status.bitcoin*0.3)
        status.dolar = status.dolar - (status.dolar*0.6)
        status.nft = status.nft + (status.nft*0.3)
        }
        else if (i === 'btcsobe'){
        status.bitcoin = status.bitcoin + (status.bitcoin*0.65) //1000
        status.ethereum = status.ethereum + (status.bitcoin*0.6)
        status.dolar = status.dolar - (status.dolar*0.3)
        status.nft = status.nft + (status.nft*0.4)
        }
        else if (i === 'nftsobe'){
        status.bitcoin = status.bitcoin + (status.bitcoin*0.35) //1000
        status.ethereum = status.ethereum + (status.bitcoin*0.25)
        status.dolar = status.dolar - (status.dolar*0.15)
        status.nft = status.nft + (status.nft*0.6)
        }
     }
}

function mostrarnoticias(){
    for (let i in noticiausada){
        console.log()
        console.log(`Noticia ${i}º: ${noticiausada[i][0]}`)
        console.log()
    }
}

function inicial(){
    aleatorio = Math.trunc(Math.random()*3)
    notice = noticiainit[aleatorio]
    console.log("Segue a noticia: ")
    console.log(notice[0])

    for(let i of notice){
       if (i === 'dolarsobe'){
        status.bitcoin = 1000
        status.ethereum = 500
        status.dolar = 400
        status.nft = 0
       }
       else if (i === 'dolarcai'){
        status.bitcoin = 1300
        status.ethereum = 700
        status.dolar = 150
        status.nft = 0
       }
       else if (i === 'btcsobe'){
        status.bitcoin = 2000
        status.ethereum = 1000
        status.dolar = 200
        status.nft = 1800
       }
    }
}

function passames(){
    mes += 1
    status.megasena = status.megasena + (status.megasena*0.20) //todo mes megasena aumenta 20%
}
var status = {
    dinheiro: 10000,
    btctotal: 0,
    ethtotal: 0,
    doltotal: 0,
    nfttotal: 0,
    bitcoin: 0,
    ethereum: 0,
    dolar: 0,
    nft: 0,
    megasena: 500000,
    dinheirototal: 0,
    infos: function(){
        console.log(`Sua carteira:
    Dinheiro: ${(this.dinheiro).toFixed(2)}
    Bitcoin: ${(this.btctotal).toFixed(2)}
    Ethereum: ${(this.ethtotal).toFixed(2)}
    Dólar: ${(this.doltotal).toFixed(2)}
    NFT: ${(this.nfttotal).toFixed(2)}
    
    Valor da megasena: ${(this.megasena).toFixed(2)}`)
    },
    comprar: function(){
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
        console.log(`Seu saldo atual é de: R$${(this.dinheiro).toFixed(2)}`)
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
        console.log()
        console.log("Aqui esta os valores das moedas: ")
        if (this.nft > 0)
        console.log(`
    O Bitcoin esta valendo: ${(this.bitcoin).toFixed(2)}
    O Ethereum esta valendo: ${(this.ethereum).toFixed(2)}
    O Dólar esta valendo: ${(this.dolar).toFixed(2)}
    Os NTF's esta valendo: ${(this.nft).toFixed(2)}`)
        if (this.nft == 0){
            console.log(`
    O Bitcoin esta valendo: ${(this.bitcoin).toFixed(2)}
    O Ethereum esta valendo: ${(this.ethereum).toFixed(2)}
    O Dólar esta valendo: ${(this.dolar).toFixed(2)}`)   
        }
        console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
        console.log(`Qual moeda deseja comprar?`)
        if (this.nft > 0){
        console.log(`
    [1] Bitcoin
    [2] Ethereum
    [3] Dólar
    [4] NFT
    [5] Cancelar
        `)
    }   else if (this.nft == 0){
        console.log(`
    [1] Bitcoin
    [2] Ethereum
    [3] Dólar
    [4] Cancelar
        `)
    }
        let escolha = +pc("Digite o valor aqui: ")
        console.clear()
            if (escolha == 1){
                console.log("Perfeito! Agora vamos escolher a quantidade que deseja comprar")
                console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
                let qtd = +pc(`Quantos BTC você deseja? `)
                console.log(`Sua compra de ${qtd} BTC foi computada`)
                console.log(`Processando...`)
                console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
                //timeset
                if (this.dinheiro >= (qtd*this.bitcoin)){
                    valortotal = this.bitcoin * qtd
                    console.log(`Compra efetuada com sucesso. Deu um total de R$${(valortotal).toFixed(2)}`)
                    this.dinheiro = this.dinheiro - valortotal
                    this.btctotal += qtd
                    console.log(`Seu saldo atual é de: R$${(this.dinheiro).toFixed(2)}`)
                }
                else {
                    console.log("Saldo insuficiente")
                }
            }
            else if (escolha == 2){            
                console.log("Perfeito! Agora vamos escolher a quantidade que deseja comprar")
                console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
                let qtd = +pc(`Quantos ETH você deseja? `)
                console.log(`Sua compra de ${qtd} ETH foi computada`)
                console.log(`Processando...`)
                console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
                //timeset
                if (this.dinheiro >= (qtd*this.ethereum)){
                    valortotal = this.ethereum * qtd
                    console.log(`Compra efetuada com sucesso. Deu um total de R$${(valortotal).toFixed(2)}`)
                    this.dinheiro = this.dinheiro - valortotal
                    this.ethtotal += qtd
                    console.log(`Seu saldo atual é de: R$${(this.dinheiro).toFixed(2)}`)
                }
                else {
                    console.log("Saldo insuficiente")
                }             
            }
            else if (escolha == 3){
                console.log("Perfeito! Agora vamos escolher a quantidade que deseja comprar")
                console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
                let qtd = +pc(`Quantos Dolares você deseja? `)
                console.log(`Sua compra de ${qtd} Dolares foi computada`)
                console.log(`Processando...`)
                console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
                //timeset
                if (this.dinheiro >= (qtd*this.dolar)){
                    valortotal = this.dolar * qtd
                    console.log(`Compra efetuada com sucesso. Deu um total de R$${(valortotal).toFixed(2)}`)
                    this.dinheiro = this.dinheiro - valortotal
                    this.doltotal += qtd
                    console.log(`Seu saldo atual é de: R$${(this.dinheiro).toFixed(2)}`)
                }
                else {
                    console.log("Saldo insuficiente")
                }    
            }
            else if (escolha == 4 && this.nft > 0){
                console.log("Perfeito! Agora vamos escolher a quantidade que deseja comprar")
                console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
                let qtd = +pc(`Quantas NFT's você deseja? `)
                console.log(`Sua compra de ${qtd} NFT's foi computada`)
                console.log(`Processando...`)
                console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
                //timeset
                if (this.dinheiro >= (qtd*this.nft)){
                    valortotal = this.nft * qtd
                    console.log(`Compra efetuada com sucesso. Deu um total de R$${(valortotal).toFixed(2)}`)
                    this.dinheiro = this.dinheiro - valortotal
                    this.nfttotal += qtd
                    console.log(`Seu saldo atual é de: R$${(this.dinheiro).toFixed(2)}`)
                }
                else {
                    console.log("Saldo insuficiente")
                }
            }
            else if (escolha == 4 && this.nft == 0){
                console.log(`Obrigado por ter visitado a loja.`)
            }
            else {
                console.log(`Obrigado por ter visitado a loja.`)
            }
    },
    venda: function(){
        let valorbtc = this.btctotal*this.bitcoin
        let valoreth = this.ethtotal*this.ethereum
        let valordol = this.doltotal*this.dolar
        let valornft = this.nfttotal*this.nft
        this.dinheirototal = valorbtc + valoreth + valordol + valornft

        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
        console.log(`Seu saldo atual é de: R$${(this.dinheiro).toFixed(2)}`)
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
        console.log()
        if (this.nft > 0){
        console.log(`A quantidade de moedas totais: `)  // mostra quantidade de moedas
        console.log(`
    Bitcoin: ${this.btctotal} Qtd. Estão valendo no total R$${(valorbtc).toFixed(2)}
    Ethereum: ${this.ethtotal} Qtd. Estão valendo no total R$${(valoreth).toFixed(2)}
    Dolar: ${this.doltotal} Qtd. Estão valendo no total R$${(valordol).toFixed(2)}
    NFT's: ${this.nfttotal} Qtd. Estão valendo no total R$${(valornft).toFixed(2)}    
        `)
        }
        if (this.nft == 0){
            console.log(`A quantidade de moedas totais: `) // mostra quantidade de moedas
            console.log(`
    Bitcoin: ${this.btctotal} Qtd. Estão valendo no total R$${(valorbtc).toFixed(2)}
    Ethereum: ${this.ethtotal} Qtd. Estão valendo no total R$${(valoreth).toFixed(2)}
    Dolar: ${this.doltotal} Qtd. Estão valendo no total R$${(valordol).toFixed(2)}
            `)
        }
        console.log()
        console.log("Quais moedas você deseja vender? ")
        if (this.nft > 0){
            console.log(`
    [1] Bitcoin
    [2] Ethereum
    [3] Dólar
    [4] NFT
    [5] Cancelar
            `)
        }   else if (this.nft == 0){
            console.log(`
    [1] Bitcoin
    [2] Ethereum
    [3] Dólar
    [4] Cancelar
            `)
        }
    let escolha = +pc("Digite o valor aqui: ")
        if (escolha == 1){ // venda de bitcoin
            console.log()
            console.log("Quantas Bitcoin você deseja vender?")
            let valor = +pc("Digite a quantidade aqui: ")
            console.log()
            console.log("Computando...")
            //timeset
            if (valor <= this.btctotal){
                novovalor = valor * this.bitcoin
                this.dinheiro = this.dinheiro + novovalor
                this.btctotal -= valor
                console.log(`A venda de ${valor} Bitcoin deu: R$${(novovalor).toFixed(2)}`)
            } else {
                console.log("Quantidade não compativel com o que tem.")
            }
        }
        else if (escolha == 2){  //venda de ethereum
            console.log()
            console.log("Quantos Ethereum você deseja vender?")
            let valor = +pc("Digite a quantidade aqui: ")
            console.log()
            console.log("Computando...")
            //timeset
            if (valor <= this.ethtotal){
                novovalor = valor * this.ethereum
                this.dinheiro = this.dinheiro + novovalor
                this.ethtotal -= valor
                console.log(`A venda de ${valor} Ethereum deu: R$${(novovalor).toFixed(2)}`)
            } else {
                console.log("Quantidade não compativel com o que tem.")
            }
        }
        else if (escolha == 3){  //venda de dolar
            console.log()
            console.log("Quantos Dolares você deseja vender?")
            let valor = +pc("Digite a quantidade aqui: ")
            console.log()
            console.log("Computando...")
            //timeset
            if (valor <= this.doltotal){
                novovalor = valor * this.dolar
                this.dinheiro = this.dinheiro + novovalor
                this.doltotal -= valor
                console.log(`A venda de ${valor} Dolares deu: R$${(novovalor).toFixed(2)}`)
            } else {
                console.log("Quantidade não compativel com o que tem.")
            }
        }
        else if (escolha == 4 && this.nft > 0){  //venda de nft
            console.log()
            console.log("Quantos NFT's você deseja vender?")
            let valor = +pc("Digite a quantidade aqui: ")
            console.log()
            console.log("Computando...")
            //timeset
            if (valor <= this.nfttotal){
                novovalor = valor * this.nft
                this.dinheiro = this.dinheiro + novovalor
                this.nfttotal -= valor
                console.log(`A venda de ${valor} Dolares deu: R$${(novovalor).toFixed(2)}`)
            } else {
                console.log("Quantidade não compativel com o que tem.")
            }
        }
        else if (escolha == 4 && this.nft == 0){
            console.log("Obrigado por ter visitado a loja")
        } else {
            console.log("Obrigado por ter visitado a loja")
        }
    },
    jogarmega: function(){
        // cria numero aleatorio fixo, muda a cada rodada, se acertar, leva o premio
        // toda vez que jogar, tira 500 do dinheiro da carteira
        // se tiver menos, nao consegue jogar
        cont = 0
        cont1 = 0
        jogo = []
        jogado = []
        while (cont < 3){
            cont++
            aleatorio = Math.trunc(Math.random()*15+1)
            jogo.push(aleatorio)
        }
        if (this.dinheiro > 500){
            this.dinheiro = this.dinheiro - 500
            while (cont1 < 3){
                cont1++
                let aposta = +pc("Digite o seus numeros da sorte entre 1 e 15: ")
                jogado.push(aposta)
            }
        } else {
            console.log("saldo insuficiente")
        }
        if (jogo == jogado){
            console.log("Parabens!! Você foi o grande vencedor da megasena!!")
        } else {
            console.log("Desculpe, não foi dessa vez!")
        }
    }
}

function menu(){
    console.log("Menu aberto, escolha sua opção.")
    console.log("[1] Status")
    console.log("[2] Comprar")
    console.log("[3] Vender")
    console.log("[4] Jogar na megasena R$500,00")
    console.log("[5] Ver noticias")
    console.log("[6] Passar mês")
    escolher = +pc("Qual sua escolha? ")
}


do 
{
    console.log("   Seja bem vindo ao Economia Moderna   ")
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
    //explicar como funciona o jogo 
    console.log(" Esta pronto para começar essa aventura? ")
    console.log()
    console.log(`
[1] Sim
[2] Não`)
    console.log()
    init = +pc()
    console.clear()
    if (init == 2){
        break 
    }
    //console.log("Introdução")  //explicar que estamos em pandemia, epoca de eleições, logo depois, lançar a noticia do
    //presidente que esta ja com boas intenções de votos e quais estão participando. Influencia no valor das moedas iniciais
    //inicial()
    console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Recentemente, a nova parceria da Blue com o grupo GCB fez eu ter uma idéia de homenagear essa união e
então criar esse projeto.

Economia moderna é um jogo que tenta aproximar as pessoas do mundo digital, para o mercado financeiro.
Tentando mostrar como as noticias ao redor do mundo impactam as nossas vidas, de uma maneira gigantes-
ca.
Como por exemplo uma crise no Cazaquistão afetar o preço do bitcoin ou a china proibir o ato de mine-
rar a moeda no país.
Esse tipo de coisa acontece o tempo todo, no mundo todo, e devemos estar ligados a todo momento para
não se surpreender com o mercado financeiro.`)
    console.log()
    let proximo = pc("Aperte ENTER para continuar.")
    console.clear()
    console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Vamos dar uma breve explicação de como o jogo funcionará:
    -Você terá opções de escolha, elas vão variar entre:
    -> Comprar
    -> Vender
    -> Ver as noticias passadas
    -> Olhar status
    -> Passar mês
Com isso, será possivel você ficar ligado em tudo o que estar acontecendo e especular o valor das moedas
com base nas noticias mostradas.
    
Atente-se ao valor de quanto a moeda esta valendo agora, especule o preço e faça a ação necessaria.
    
Vence o jogo quando você consegue ao menos não diminuir seu patrimonio, mas sabemos que o foco é sempre
pegar o peixe maior, certo?
    
    Divirta-se.`)
    console.log()
    let proximo1 = pc("Aperte ENTER para continuar.")
    console.clear()
    console.log(`
        Vivemos num mundo onde nada mais é o mesmo... Pandemia esta em um de seus maiores
picos, estamos em ano de eleições, muita coisa pode acontecer nesse ano, vamos nos atentar a todas
as informações que conseguirmos.`)
    console.log()
    inicial()
    while (mes <= 12){
        console.log()
        do{
            console.log()
            console.log(`Você esta no mês: ${mes}`)
            console.log()
            menu()
            if (escolher == 1){
                status.infos()
            }
            else if (escolher == 2){
                status.comprar()
            }
            else if (escolher == 3){
                status.venda()
            }
            else if (escolher == 4){
                status.jogarmega()
            }
            else if (escolher == 5){
                mostrarnoticias()
            }
        } while (escolher != 6)
        console.clear()
        soltarnoticiatri()
        passames()
    }
    console.clear()
    //criar opções de escolha (entre comprar, ler a noticia novamente, passar o mês)
    //depois ele tem que escolher passa mês
    //criar do..while até o passa mes ser true
    //proximo mês, noticia nova, opções...
    if (status.dinheiro+(status.dinheirototal) >= 10000 && status.dinheiro+(status.dinheirototal) < 50000){
        console.log(`Sua fortuna no final desse ano foi de: ${(status.dinheiro+(status.dinheirototal)).toFixed(2)}`)
        console.log()
        console.log(`
    Muito bom, ganhou mais do que perdeu, ja está ótimo!
    Aqui é apenas um simulação, porquê não estudar isso na vida real
    e ter ótimos resultados também?
    GCB esta junto com você!`)
    } else if (status.dinheiro+(status.dinheirototal) > 50000){
        console.log(`Sua fortuna no final desse ano foi de: ${(status.dinheiro+(status.dinheirototal)).toFixed(2)}`)
        console.log()
        console.log(`
    Parabéns! Você arrasou, soube investir, ficou de olho nos anuncios, seu
    nivel de dedução é ótimo!
    Deveria pensar em estudar mais sobre economia e finanças no mundo real, todos temos
    capacidade para isso, e voce mostrou muito bem!
    Corra atras, GCB pode te ajudar a ter ainda mais sucesso nesse ramo!`)
    } else if (status.dinheiro+(status.dinheirototal) > 0 && status.dinheiro+(status.dinheirototal) < 10000){
        console.log(`Sua fortuna no final desse ano foi de: ${(status.dinheiro+(status.dinheirototal)).toFixed(2)}`)
        console.log()
        console.log(`
    Você não obteve muitos resultados, acabou diminuindo seu patrimonio.
    Mas não se preocupa, aqui é apenas uma simulação, estude e aplique no mundo real.
    Não precisa ser um mestre para saber investir, não desanime!`)
    } else if (status.dinheiro+(status.dinheirototal) < 0){
        console.log(`Sua fortuna no final desse ano foi de: ${(status.dinheiro+(status.dinheirototal)).toFixed(2)}`)
        console.log()
        console.log(`
    Voce acabou falindo, mas não desista! Estude sempre, fique de olho em tudo.
    O mercado financeiro abre portas e fecham outras, mas se todas elas se fecharem, crie
    você mesmo a oportunidade!`)
    }
    console.log()
} while (init != 2)

console.log("Obrigado por ter jogado!")