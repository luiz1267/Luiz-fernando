const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é aterrorizante!",
                afirmacao: "É assustador como o mundo pode ser com a tecnologia."
            },
            {
                texto: "Isso me parece impressionante!",
                afirmacao: "Me impressiona como a tecnologia pode ajudar o mundo."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ajude em pesquisas para o trabalho.",
                afirmacao: "Pois utilizando as pesquisas o trabalho ficara mais facil."
            },
            {
                texto: "Escreve o trabalho com os  colegas, utilizando varias pesquisas na internet e e os proprios conhecimentos  sobre o tema.",
                afirmacao: "utilizar alguma pesquisa da internet mais sempre conversando e usando algumas ideias do grupo"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA é mais pratica e produtiva .",
                afirmacao: " A IA pode tornar os trabalhos mais rapidos e produtivos."
            },
            {
                texto: "É preocupante porque muitas pessoas podem perder seus empregos para maquinas controladas pela IA.",
                afirmacao: "Preocupa porque trabalhadores perderam seus empregos."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando a plataforma chamada pinterest .",
                afirmacao: "Pois você mesmo criara a imagem do jeito que você quiser."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA chamado Copilot.",
                afirmacao: "Criando uma imagemm pela IA você apenas digitara o jeito que quiser a imagem e ela sera criada imediatamente."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para que modifique a resposta do chat.",
                afirmacao: "Escrevendo os comandos as respostas ficara do jeito que escolher mais tera que descobrir os erros e alterar manualmente. "
            },
            {
                texto: "O chat é uma tecnologia muito avançada , você deve sempre estar antento com as restostas para não estar totalmente igual ao chat.",
                afirmacao: "Utilizando o chat você apenas tera que mudar a resposta. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();