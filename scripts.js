const explicacao = [
    // Seleção de elementos
    {
        nome: "document.querySelector",
        traducao: "seleciona um elemento"
    },
    {
        nome: "document.querySelectorAll",
        traducao: "seleciona vários elementos"
    },
    {
        nome: "document.getElementById",
        traducao: "seleciona um elemento pelo ID"
    },
    {
        nome: "document.getElementsByClassName",
        traducao: "seleciona elementos por classe"
    },
    {
        nome: "document.getElementsByTagName",
        traducao: "seleciona elementos por nome da tag"
    },

    // Manipulação de elementos
    {
        nome: "document.createElement",
        traducao: "cria um novo elemento HTML"
    },
    {
        nome: "document.createTextNode",
        traducao: "cria um novo nó de texto"
    },
    {
        nome: "elemento.innerHTML",
        traducao: "acessa ou modifica o conteúdo HTML do elemento"
    },
    {
        nome: "elemento.textContent",
        traducao: "acessa ou modifica o conteúdo de texto do elemento"
    },
    {
        nome: "elemento.appendChild",
        traducao: "adiciona um novo filho ao elemento"
    },
    {
        nome: "elemento.insertBefore",
        traducao: "insere um novo filho antes de um outro filho"
    },
    {
        nome: "elemento.removeChild",
        traducao: "remove um filho do elemento"
    },
    {
        nome: "elemento.replaceChild",
        traducao: "substitui um filho do elemento por outro"
    },
    {
        nome: "elemento.cloneNode",
        traducao: "clona um elemento HTML"
    },
    {
        nome: "document.createDocumentFragment",
        traducao: "cria um fragmento para melhorar a performance ao adicionar elementos"
    },

    // Manipulação de classes
    {
        nome: "elemento.classList.add",
        traducao: "adiciona uma nova classe ao elemento"
    },
    {
        nome: "elemento.classList.remove",
        traducao: "remove uma classe do elemento"
    },
    {
        nome: "elemento.classList.toggle",
        traducao: "alterna a presença de uma classe no elemento"
    },
    {
        nome: "elemento.classList.contains",
        traducao: "verifica se um elemento possui uma determinada classe"
    },

    // Manipulação de atributos
    {
        nome: "elemento.getAttribute",
        traducao: "acessa ou modifica um atributo do elemento"
    },
    {
        nome: "elemento.setAttribute",
        traducao: "define um novo valor para um atributo do elemento"
    },
    {
        nome: "elemento.removeAttribute",
        traducao: "remove um atributo do elemento"
    },

    // Manipulação de estilos
    {
        nome: "elemento.style",
        traducao: "acessa ou modifica os estilos de um elemento"
    },
    {
        nome: "elemento.style.setProperty",
        traducao: "define um valor para um estilo CSS"
    },
    {
        nome: "getComputedStyle",
        traducao: "obtém os estilos aplicados ao elemento"
    },

    // Eventos
    {
        nome: "eventos.addEventListener",
        traducao: "adiciona um listener para um evento específico"
    },
    {
        nome: "eventos.removeEventListener",
        traducao: "remove um listener de um evento específico"
    },
    {
        nome: "eventos.preventDefault",
        traducao: "previne a ação padrão de um evento"
    },
    {
        nome: "eventos.stopPropagation",
        traducao: "cancela a propagação de um evento"
    },
    {
        nome: "eventos.target",
        traducao: "referência ao elemento que disparou o evento"
    },
    {
        nome: "eventos.currentTarget",
        traducao: "referência ao elemento que está recebendo o evento"
    },
    {
        nome: "eventos.key",
        traducao: "acessa a tecla pressionada"
    },
    {
        nome: "eventos.clientX / eventos.clientY",
        traducao: "obtém a posição do mouse na tela"
    },
    {
        nome: "eventos.offsetX / eventos.offsetY",
        traducao: "obtém a posição do mouse relativa ao elemento"
    },

    // Manipulação de formulários
    {
        nome: "elemento.value",
        traducao: "obtém ou define o valor de um input ou textarea"
    },
    {
        nome: "elemento.checked",
        traducao: "verifica se um checkbox ou radio está marcado"
    },
    {
        nome: "elemento.selected",
        traducao: "verifica se um option está selecionado"
    },

    // Timers e intervalos
    {
        nome: "setTimeout",
        traducao: "executa uma função após um tempo determinado"
    },
    {
        nome: "setInterval",
        traducao: "executa uma função repetidamente em intervalos de tempo"
    },
    {
        nome: "clearTimeout",
        traducao: "cancela um timeout agendado"
    },
    {
        nome: "clearInterval",
        traducao: "cancela um intervalo em execução"
    }
];

const tabela = document.getElementById('tabela');

function preemcherTabela () {
    explicacao.forEach(item => {
        const tr = document.createElement('tr');
        const tdNome = document.createElement('td');
        tdNome.textContent = item.nome;
        const tdTraducao = document.createElement('td');
        tdTraducao.textContent = item.traducao;
        tdTraducao.style.color = 'DarkGreen'
        tdTraducao.style.fontWeight = 'bold'
        tr.appendChild(tdNome);
        tr.appendChild(tdTraducao);
        tabela.appendChild(tr);
    })
}
preemcherTabela();