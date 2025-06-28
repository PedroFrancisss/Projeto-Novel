let cenaAtual = localStorage.getItem("cenaAtual") || "inicio";

let textoEmExecucao = false;
let nomeJogador = "";
let indexCena = 0;
let subIndex = 0;
let imagemAtual = "";
let forca = 0;
let inteligencia = 0;
let carisma = 0;
let agilidade = 0;
let resistencia = 0;

//atualizar HUD
function atualizarHUD() {
  document.getElementById("hud-forca").innerText = forca;
  document.getElementById("hud-inteligencia").innerText = inteligencia;
  document.getElementById("hud-carisma").innerText = carisma;
  document.getElementById("hud-agilidade").innerText = agilidade;
  document.getElementById("hud-resistencia").innerText = resistencia;
}
setInterval(atualizarHUD, 500);


// EVENTOS ALEATORIOS

const eventosAleatorios = ["evento01", "evento02", "evento03", "evento04", "evento05", "evento06", "evento07", "evento08", "evento09", "evento10",
  "evento11", "evento12", "evento13", "evento14", "evento15", "evento16", "evento17", "evento18", "evento19",
  "evento20"];
let eventosJaUsados = [];
let contadorEventosAleatorios = 0;

function eventoAleatorio() {
  contadorEventosAleatorios++;

  if (contadorEventosAleatorios % 5 === 0) {
    // evento canônico
    mostrarCena(`canonico${contadorEventosAleatorios / 5}`);
    return;
  }

const requisitosEventos = {
  "evento04_2": "evento04_1",
  "evento05_2": "evento05_1",
  "evento07_2": "evento07_1",
};


let disponiveis = eventosAleatorios.filter(e => {
  const requisito = requisitosEventos[e];
  if (requisito && localStorage.getItem(requisito) !== "feito") return false;
  return !eventosJaUsados.includes(e);
});


 if (disponiveis.length === 0) {
    eventosJaUsados = [];
    disponiveis = [...eventosAleatorios];
  }

  const escolhido = disponiveis[Math.floor(Math.random() * disponiveis.length)];
  eventosJaUsados.push(escolhido);
  mostrarCena(escolhido);
}
// FIM EVENTOS ALEATORIOS

//chance de atributos
function chanceAtributo(atributo, dificuldade = 5) {
  const valor = window[atributo] || 0;
  const chance = Math.min(1, valor / dificuldade); // ex: 3/5 = 0.6 = 60%
  return Math.random() < chance;
}



function alterarInteligencia(valor) {
  inteligencia += valor;
  localStorage.setItem("inteligencia", inteligencia);
}

let afinidade = JSON.parse(localStorage.getItem("afinidade")) || {
  valentina: 0, //remete a coragem e coração COPAS
  aurora: 0, //remete ao brilho do amanhecer como OURO
  silvana: 0, //remete a floresta ou "da mata" PAUS
  valeria: 0, //remete a forte, saudavel força da ESPADA
  lua: 0, //remete a algo que surge e tem varias fases CORINGA
  melinda: 0, //remete doce mas toque de imprevisibilidade CORINGA
};
  let estaDigitando = false;
  let cliqueParaAvancar = false;
  let textoCompleto = "";
  let digitarTimer = null;
  let avancarCallback = null;

  function resetarJogo() {
    if (confirm("Tem certeza que deseja apagar o progresso e reiniciar o jogo?")) {
      localStorage.removeItem("nomeJogador");
      localStorage.removeItem("sobrenomeJogador");
      localStorage.removeItem("cenaAtual");
      localStorage.removeItem("afinidade");
      localStorage.removeItem("malicia");
      location.reload();
    }
  }

  let malicia = JSON.parse(localStorage.getItem("malicia")) || { malicia: 0 };

  function alterarMalicia(chave, valor) {
    if (malicia[chave] !== undefined) {
      malicia[chave] += valor;
      localStorage.setItem("malicia", JSON.stringify(malicia));
    }
  }

  function alterarAfinidade(personagem, valor) {
    if (afinidade[personagem] !== undefined) {
      afinidade[personagem] += valor;
      localStorage.setItem("afinidade", JSON.stringify(afinidade));
    }
  }

  const imagemCena = document.getElementById("imagem-cena");
  const textoDiv = document.getElementById("texto");
  const opcoesDiv = document.getElementById("opcoes");
  const telaNome = document.getElementById("tela-nome");
  const game = document.getElementById("game");

  if (!nomeJogador || !sobrenomeJogador) {
    telaNome.style.display = "block";
    game.style.display = "none";
  } else {
    telaNome.style.display = "none";
    iniciarJogo();
  }

  function salvarNome() {
    const inputNome = document.getElementById("input-nome");
    const inputSobrenome = document.getElementById("input-sobrenome");

    const nome = inputNome.value.trim();
    const sobrenome = inputSobrenome.value.trim();

    const nomeValido = /^[A-Za-zÀ-ÿ\s]+$/.test(nome);
    const sobrenomeValido = /^[A-Za-zÀ-ÿ\s]+$/.test(sobrenome);

    if (!nomeValido || !sobrenomeValido) {
      alert("Digite nome e sobrenome válidos, apenas com letras.");
      return;
    }

    nomeJogador = nome;
    sobrenomeJogador = sobrenome;

    localStorage.setItem("nomeJogador", nome);
    localStorage.setItem("sobrenomeJogador", sobrenome);

    telaNome.style.display = "none";
    iniciarJogo();
  }

  function iniciarJogo() {
    game.style.display = "flex";
    mostrarCena(cenaAtual);
  }

  function mostrarCena(id) {
    const cena = cenas.find(c => c.id === id);
    if (!cena) return;

    localStorage.setItem("cenaAtual", id);

    imagemCena.src = cena.imagem || "";
    imagemCena.style.display = cena.imagem ? "block" : "none";

    textoDiv.innerHTML = "";
    opcoesDiv.innerHTML = "";
    estaDigitando = true;

    const blocos = Array.isArray(cena.texto) ? cena.texto : [cena.texto];
    let indice = 0;

   // if (cena.som) {
   //   const audio = new Audio(cena.som);
   //   audio.play();
   // }

    if (cena.tempo && cena.proxima) {
      setTimeout(() => mostrarCena(cena.proxima), cena.tempo);
      return;
    }

    function mostrarProximoBloco() {
      if (indice < blocos.length) {
        textoDiv.innerHTML = "";
        const texto = blocos[indice++]
          .replace(/\{\{nome\}\}/g, nomeJogador)
          .replace(/\{\{sobrenome\}\}/g, sobrenomeJogador);
        digitarTexto(texto, textoDiv, 20, mostrarProximoBloco);
      } else {
        estaDigitando = false;
        mostrarOpcoes(cena.opcoes);
      }
    }

    mostrarProximoBloco();
  }

  function mostrarOpcoes(opcoes) {
  opcoesDiv.innerHTML = "";
  opcoes.forEach((opcao) => {
    const botao = document.createElement("button");
    botao.innerText = typeof opcao === "string" ? opcao : opcao.texto;

    botao.onclick = () => {
      if (estaDigitando) return;
      if (typeof opcao !== "string" && opcao.acao) {
        opcao.acao();
      }

      // Adiciona esta lógica para lidar com textoExtra
      if (opcao.textoExtra && opcao.textoExtra.length > 0) {
        mostrarTextoExtra(opcao.textoExtra, opcao.proximaCenaAposExtra);
      } else {
        const proxima = typeof opcao === "string" ? cena.proxima : opcao.proxima;
        mostrarCena(proxima);
      }
    };

    opcoesDiv.appendChild(botao);
  });
}

  function digitarTexto(texto, elemento, delay = 20, callback = null) {
    estaDigitando = true;
    cliqueParaAvancar = false;
    textoCompleto = texto;
    avancarCallback = callback;
    let i = 0;
    elemento.innerHTML = "";

    function digitar() {
      if (i < texto.length) {
        elemento.innerHTML += texto[i++];
        digitarTimer = setTimeout(digitar, delay);
      } else {
        estaDigitando = false;
        cliqueParaAvancar = true;
      }
    }

    digitar();
  }

  function mostrarTextoExtra(blocos, proximaCenaId) {
    estaDigitando = true;
    textoDiv.innerHTML = "";
    opcoesDiv.innerHTML = "";

    let indice = 0;

    function mostrarProximoBloco() {
      if (indice < blocos.length) {
        textoDiv.innerHTML = "";
        const texto = blocos[indice++]
          .replace(/\{\{nome\}\}/g, nomeJogador)
          .replace(/\{\{sobrenome\}\}/g, sobrenomeJogador);
        digitarTexto(texto, textoDiv, 20, mostrarProximoBloco);
      } else {
        estaDigitando = false;
        setTimeout(() => mostrarCena(proximaCenaId), 300);
      }
    }

    mostrarProximoBloco();
  }

  document.addEventListener("click", avancarTexto);
  document.addEventListener("touchstart", avancarTexto);

  function avancarTexto() {
    if (estaDigitando) {
      clearTimeout(digitarTimer);
      textoDiv.innerHTML = textoCompleto;
      estaDigitando = false;
      cliqueParaAvancar = true;
    } else if (cliqueParaAvancar && avancarCallback) {
      cliqueParaAvancar = false;
      avancarCallback();
    }
  }
  
