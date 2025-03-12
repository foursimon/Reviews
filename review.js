const clientes = [
    {
        id: 1,
        foto: "imagens/pessoa1.avif",
        autor: "Bruna da Silva",
        funcao: "Desenvolvedora de software",
        analise: "Adorei este site, muito bom e útil! Contém informações essenciais para meu dia a dia no trabalho."
    },
    {
        id: 2,
        foto: "imagens/pessoa2.avif",
        autor: "Renata Costa",
        funcao: "Fotografa",
        analise: "Ontem pedi uma nova camêra para utilizar fora do trabalho. A entrega foi muito rápida! Chegou 2 dias antes do esperado."
        + "Me surpreendi com a qualidade da camêra e agora pedi mais uma para usar no trabalho kk. Sensacional!"
    },
    {
        id: 3,
        foto: "imagens/pessoa3.avif",
        autor: "Lucas Limeira",
        funcao: "Vocalista",
        analise: "Cara, a entrega rápiada faz jus ao nome! Dois dia antes do meu show meu microfone quebrou, e a qualidade do microfone" +
        " que ofereceram é horrível. Pedi um microfone novo para entregarem em 1 dia e não me decepcionei. O show foi perfeito!"
    },
    {
        id: 4,
        foto: "imagens/cachorro.avif",
        autor: "Fernando Oliveira",
        funcao: "Veterinário",
        analise: "Fiz um encomenda de rações novas para os pets que fico cuidado aqui no trabalho. Não só a entrega foi rápida, " +
        "a qualidade das rações estavam excelentes, todos os pets adoraram!"
    }
]

const imagem = document.getElementById("cliente")
const nome = document.getElementById("autor")
const trabalho = document.getElementById("funcao")
const review = document.getElementById("analise")
const botoes = [...document.getElementsByClassName("btn")]
let item = 0;

window.addEventListener("DOMContentLoaded", ()=>{
    let cliente = clientes[0];
    atualizarAnalise(cliente)
})
botoes.map(e => {
    e.addEventListener("click", (e)=>{
        let btn = e.currentTarget.classList
        if(btn.contains("prev")){
            item--;
            if(item < 0) item = clientes.length-1
            let cliente = clientes[item]
            atualizarAnalise(cliente)
        }else if(btn.contains("next")){
            item++;
            if(item >= clientes.length) item = 0
            let cliente = clientes[item]
            atualizarAnalise(cliente)
        }
    })
})
function atualizarAnalise(cliente){
    imagem.src = cliente.foto
    nome.textContent = cliente.autor
    trabalho.textContent = cliente.funcao
    review.textContent = cliente.analise
}