const cenas = [
  {
    id: "inicio",
    imagem: "assets/intro.png",
    texto: [
      "Ano de 2035. Uberlândia cresceu como polo industrial e científico no novo Brasil pós-Trindade.",
      "Você é um estudante do 2º ano do ensino médio. Por ser jovem e registrado, ainda mantém todos os direitos básicos de um cidadão pleno.",
      "O mundo mudou rápido. Após o colapso dos grandes mercados, um novo líder surgiu: Nole Ksum — empresário, visionário, tecnocrata.",
      "Ele revolucionou o planeta com robôs, implantes e redes neurais. A pobreza global caiu 20%. Mas o preço foi a humanidade se tornar... eficiente demais.",
      "A biomedicina, liderada pela Dra. Ayla Norin, avançou ao ponto de permitir alterações genéticas personalizadas, aumentando a longevidade e criando uma geração inteira de 'seres modificados'.",
      "No entanto, o corpo humano é instável. Houve efeitos colaterais — mutações, colapsos celulares, falhas orgânicas. Surgiram os chamados: *Anômalos*.",
      "As anomalias variam: asas, membros extras, cabeças de animais, múltiplos órgãos. Alguns se tornaram perigosos, outros apenas... diferentes.",
      "Paralelamente, um pequeno grupo conhecido como *Eremitas* se isolou do sistema, renunciando aos prazeres da carne, à tecnologia e ao consumo.",
      "Em troca, conquistaram algo que os cientistas chamam de energia espiritual: manipulação da realidade através da mente. Magia, como diriam os antigos.",
      "As tensões cresceram entre Humanos, Humanoides, Anômalos, Máquinas e Eremitas. As ruas são um caos sutil. A ordem é um conceito em disputa.",
      "Agora, uma nova geração precisa escolher. Conformar-se? Lutar? Fugir? O que você fará?",
    ],
    opcoes: [
      { texto: "Continuar", proxima: "pergunta1" }
    ]
  },

  {
    id: "pergunta1",
    imagem: "assets/avatar-Selena.png",
    texto: [
      "Você está na escola. Sua professora, Selena, entrega uma folha com exercícios de raciocínio lógico.",
      "Selena: Bom dia para todos! Hoje vamos fazer um teste de lógica. Não se preocupem, não é uma prova difícil, apenas um exercício para estimular o cérebro.",
      "Selena entrega a folha para você e amigavelmente diz.",
      "Selena: Boa sorte {{nome}}!",
      "Você olha para a folha e vê três perguntas. A primeira é:",
      "Questão 1: Quantos segundo há em uma hora?"
    ],
    opcoes: [
      { texto: "3600", proxima: "pergunta2", acao: () => { alterarAfinidade("selena", 1); alterarInteligencia(1); } },
      { texto: "600", proxima: "pergunta2" },
      { texto: "60", proxima: "pergunta2" },
      { texto: "120", proxima: "pergunta2" }
    ]
  },

  {
    id: "pergunta2",
    imagem: "assets/avatar-Selena.png",
    texto: [
      "Questão 2: Se 5 máquinas fazem 5 itens em 5 minutos, quantas fazem 100 em 100 minutos?"
    ],
    opcoes: [
      { texto: "5", proxima: "pergunta3", acao: () => { alterarAfinidade("selena", 1); alterarInteligencia(1); } },
      { texto: "10", proxima: "pergunta3" },
      { texto: "100", proxima: "pergunta3" },
      { texto: "50", proxima: "pergunta3" }
    ]
  },

  {
    id: "pergunta3",
    imagem: "assets/avatar-Selena.png",
    texto: [
      "Questão 3: Se você só tiver uma caixa de fósforos e entrar em um quarto frio com vela, lampião e lareira, o que acende primeiro?"
    ],
    opcoes: [
      { texto: "A vela", proxima: "avaliacao" },
      { texto: "O fósforo", proxima: "avaliacao", acao: () => { alterarAfinidade("selena", 1); alterarInteligencia(1); } },
      { texto: "A lareira", proxima: "avaliacao" },
      { texto: "O lampião", proxima: "avaliacao" }
    ]
  },

  {
    id: "avaliacao",
    imagem: "assets/sala-de-aula.png",
    texto: [
      "Você entrega sua folha para Selena e respira fundo.",
      "Selena: Muito bem, {{nome}}. Obrigada por se esforçar. Em breve você terá sua nota."
    ],
    opcoes: [
      { texto: "Sair da sala", proxima: "fim-teste" }
    ]
  },

  {
    id: "fim-teste",
    texto: [
      "*Você se levanta e deixa a sala, refletindo sobre como se saiu no teste*",
      "*O mundo lá fora te espera.*"
    ],
    opcoes: [
      { texto: "Fim do Prólogo", proxima: "inicio" }
    ]
  }
];
