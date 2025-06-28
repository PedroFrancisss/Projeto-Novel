const cenas = [
  {
    id: "inicio",
    imagem: "assets/intro.png",
    texto: [
      "Olá! Sou sua assistente virtual Maya! Seja bem-vindo ao Neo Cosmo 2035! Você reside em Uberlândia-MG, esta cidade cresceu como polo industrial e científico no novo Brasil pós-Trindade.",
      "Você é um estudante do 2º ano do ensino médio. Por ser jovem e registrado, ainda mantém todos os direitos básicos de um cidadão pleno.",
      "O mundo mudou rápido. Após o colapso dos grandes mercados, um novo líder surgiu: Nole Ksum — empresário, visionário, tecnocrata.",
      "Ele revolucionou o planeta com robôs, implantes e redes neurais. A pobreza global caiu 20%. Mas o preço foi a humanidade se tornar... eficiente demais.",
      "A biomedicina, liderada pela Dra. Ayla Norin, avançou ao ponto de permitir alterações genéticas personalizadas, aumentando a longevidade e criando uma geração inteira de 'seres modificados'.",
      "No entanto, o corpo humano é instável. Houve efeitos colaterais — mutações, colapsos celulares, falhas orgânicas. Surgiram os chamados: *Anômalos*.",
      "As anomalias variam: asas, membros extras, cabeças de animais, múltiplos órgãos. Alguns se tornaram perigosos, outros apenas... diferentes.",
      "Paralelamente, um pequeno grupo conhecido como *Eremitas* se isolou do sistema, renunciando aos prazeres da carne, à tecnologia e ao consumo.",
      "Em troca, conquistaram algo que hoje os cientistas reconheceram e chamam de energia espiritual: manipulação da realidade através da mente. Magia, como diriam os antigos.",
      "As tensões cresceram entre Humanos, Humanoides, Anômalos, Máquinas e Eremitas. As ruas são um caos sutil. A ordem é um conceito em disputa.",
      "Agora, uma nova geração precisa escolher. Conformar-se? Lutar? Fugir? O que você fará?",
    ],
    opcoes: [{ texto: "Continuar", proxima: "pergunta1" }],
  },

  {
    id: "pergunta1",
    imagem: "assets/avatar-Silvana.png",
    texto: [
      "Você está na escola. Sua professora, Silvana, entrega uma folha com exercícios de raciocínio lógico.",
      "Silvana: Bom dia para todos! Hoje vamos fazer um teste de lógica. Não se preocupem, não é algo difícil, apenas um exercício para estimular o cérebro.",
      "Silvana entrega a folha para você e com um sorriso no rosto amigavelmente diz.",
      "Silvana: Boa sorte {{nome}}!",
      "Você agradece a Silvana, a qual continua a entregar as folhas com os exercícios para os outros alunos.",
    ],
    opcoes: [{ texto: "Ler as questões e realizar o exercício", proxima: "pergunta01" }],
  },

  {
    id: "pergunta01",
    imagem: "assets/prova1.png",
    texto: ["Questão 1: Quantos segundo há em uma hora?"],
    opcoes: [
      {
        texto: "3600",
        proxima: "pergunta2",
        acao: () => {
          alterarAfinidade("silvana", 1);
          alterarInteligencia(1);
        },
      },
      { texto: "600", proxima: "pergunta2" },
      { texto: "60", proxima: "pergunta2" },
      { texto: "120", proxima: "pergunta2" },
    ],
  },

  {
    id: "pergunta2",
    imagem: "assets/prova2.png",
    texto: ["Questão 2: Se 5 máquinas fazem 5 itens em 5 minutos, quantas fazem 100 em 100 minutos?"],
    opcoes: [
      {
        texto: "5",
        proxima: "pergunta3",
        acao: () => {
          alterarAfinidade("silvana", 1);
          alterarInteligencia(1);
        },
      },
      { texto: "10", proxima: "pergunta3" },
      { texto: "100", proxima: "pergunta3" },
      { texto: "50", proxima: "pergunta3" },
    ],
  },

  {
    id: "pergunta3",
    imagem: "questao3.png",
    texto: [
      "Questão 3: As palavras a seguir seguem um padrão lógico JCAK, FDBM, MCCI, AUXP, seguindo o padrão utilizado, informe a proxima palavra.",
    ],
    opcoes: [
      { texto: "JCCY", proxima: "avaliacao" },
      {
        texto: "MWXD",
        proxima: "avaliacao",
        acao: () => {
          alterarAfinidade("silvana", 1);
          alterarInteligencia(1);
        },
      },
      { texto: "JCYC", proxima: "avaliacao" },
      { texto: "AJCW", proxima: "avaliacao" },
    ],
  },

  {
    id: "avaliacao",
    imagem: "assets/sala-de-aula.png",
    texto: [
      "Você entrega sua folha para Selena e respira fundo.",
      "Silvana: Muito bem, {{nome}}. Obrigada por se esforçar. Em breve você terá sua nota.",
    ],
    opcoes: [{ texto: "Sair da sala", proxima: "fim-teste" }],
  },

  {
    id: "fim-teste",
    imagem: "assets/sala-de-aula.png",
    texto: [
      "*Você se levanta e deixa a sala, refletindo sobre como se saiu no teste*",
      "DIMM ----- DOMMM ----- DIMMM!",
      "Deu o toque de intervalo...",
      "De repente sua visão fica escura, sua amiga de longa data esta tampando sua visão.",
      "Valentina: Adivinha quem é...?",
    ],
    opcoes: [
      {
        texto: "Sei bem que é você Valentina, pode parar com isso!?",
        proxima: "Valentina_00",
      },
      {
        texto: "Por favor, me solta eu não fiz nada de errado, juro",
        acao: () => {
          alterarAfinidade("valentina", 1);
          alterarInteligencia(1);
        },
        textoExtra: [
          "Valentina: Sério, que medo é esse {{nome}}? Até parece que está fazendo algo errado.",
        ],
        proximaCenaAposExtra: "Valentina_00", // A cena para onde o jogo irá após o texto extra
      },
    ],
  },
  {
 id: "Valentina_00",
    imagem: "assets/escola_caminhando.png",
    texto: [
      "Você e Valentina andam pela escola enquanto conversam.",
      "Enquanto andam pela escola, vocês escutam vários murmúrios relatando sobre os ataques que ocorreram recentemente",
      "Aí {{nome}}, você por acaso tem vontade de fazer alteração genética  nesse teu corpitcho?",
    ],
    opcoes: [  { texto: "Essa é a coisa mais idiota que eu ja ouvi na vida", proxima: "Valentina_01" },
      
      { texto: "Não sei, talvez seja interessante", proxima: "Valentina_01" },
       {
        texto: "Não sei, você não tem medo de se tornar um Anômalo?",
        acao: () => {
          alterarAfinidade("valentina", 1);
          alterarInteligencia(1);
        },
        textoExtra: [
          "Valentina: Bom, pensando por esse lado, realmente é um risco, mas a gente pode controlar isso, não é?",
          "Valentina: Mas por outro lado, a expectativa de vida aumenta, e a gente pode ter habilidades incríveis!",
        ],
        proximaCenaAposExtra: "Valentina_01",
      }
    ]
  },
  {id: "Valentina_01",
    imagem: "assets/escola_caminhando.png",
    texto: [
      "Valentina: Eu acho que é uma oportunidade incrível! Imagine só, poder voar, ter super força, ou até mesmo ler mentes!",
      "Valentina: E se você pudesse escolher a sua própria alteração? O que você escolheria?",
      "Você sabe que não é tão simples assim, mas decide responder.",
    ],
    opcoes: [
      { texto: "Não é assim que funciona Valentina, a taxa anomalia é maior que a de sucesso", proxima: "valentina_fim" },
      { texto: "Eu escolheria super força, para ser mais forte que todos", proxima: "valentina_fim" },
    ],},
  {
     id: "valentina_fim",
     imagem: "assets/valentina_despedida.png",
     texto: [
      "Você e Valentina se despedem. Os caminhos agora são outros, mas a memória de sua amizade permanece viva.",
      "Valentina: Bem, eu vou nessa, {{nome}}. Espero que a gente se encontre de novo.",
      "Valentina: Cuide-se, e não se esqueça de mim.",
      "Agora, você está sozinho. Ou quase..."
    ],
     opcoes: [{ texto: "Seguir em frente", proxima: () => eventoAleatorio() }]
},



//canonico eventos
{
  id: "canonico1",
  imagem: "assets/cena_sombria.png",
  texto: [
    "Durante a noite, você sonha com um lugar antigo, cheio de corredores escuros...",
    "Uma voz sussurra: 'Está chegando a hora...'"
  ],
  opcoes: [{ texto: "Acordar assustado", proxima: () => eventoAleatorio() }]
},

//Eventos aleatórios
{
  id: "evento01",
  imagem: "assets/patio_corrida.png",
  texto: [
    "Durante o intervalo, um grupo desafia você para uma corrida improvisada ao redor do pátio.",
    "Eles apostam quem consegue dar a volta mais rápido."
  ],
  opcoes: [
    {
      texto: "Aceitar o desafio e correr!",
      acao: () => {
        const sucesso = chanceAtributo("agilidade", 4);
        if (sucesso) {
          alterarAfinidade("valentina", 1);
          agilidade++;
        }
      },
      textoExtra: [
        "*Você corre o mais rápido que pode...*",
        "{{nome}}, você deixa todos para trás! A galera vibra e Valentina sorri pra você com orgulho.",
        "*(+1 Agilidade)*"
      ],
      proximaCenaAposExtra: "evento_aleatorio"
    },
    {
      texto: "Recusar e apenas observar",
      textoExtra: [
        "*Você cruza os braços e assiste à corrida de longe. Às vezes, é melhor preservar energia.*"
      ],
      proximaCenaAposExtra: "evento_aleatorio"
    }
  ]
},
{
  id: "evento02",
  imagem: "assets/sala_discussao.png",
  texto: [
    "Dois colegas discutem sobre política na sala.",
    "Um deles vira para você: 'E aí, {{nome}}, o que você acha?'"
  ],
  opcoes: [
    {
      texto: "Tentar argumentar com inteligência",
      acao: () => {
        const sucesso = chanceAtributo("inteligencia", 4);
        if (sucesso) {
          alterarCarisma(1);
          inteligencia++;
        }
      },
      textoExtra: [
        "*Você fala com confiança e lógica...*",
        "A sala se silencia, todos prestam atenção. Seu argumento é convincente.",
        "*(+1 Inteligência / +1 Carisma)*"
      ],
      proximaCenaAposExtra: "evento_aleatorio"
    },
    {
      texto: "Ficar neutro e mudar de assunto",
      textoExtra: [
        "*Você desconversa com um sorriso.*",
        "'Melhor não brigar por política, né?'",
        "Eles riem, e o clima alivia um pouco."
      ],
      proximaCenaAposExtra: "evento_aleatorio"
    }
  ]
},
{
  id: "evento03",
  imagem: "assets/caixa_misteriosa.png",
  texto: [
    "Você encontra uma pequena caixa trancada atrás da lixeira da escola.",
    "Tem algo pesado dentro..."
  ],
  opcoes: [
    {
      texto: "Forçar a tampa com força bruta",
      acao: () => {
        const sucesso = chanceAtributo("forca", 4);
        if (sucesso) {
          forca++;
        }
      },
      textoExtra: [
        "*Você pressiona a tampa com toda sua força...*",
        "Com um estalo, a tranca se rompe! Lá dentro, uma pequena peça tecnológica antiga.",
        "*(+1 Força)*"
      ],
      proximaCenaAposExtra: "evento_aleatorio"
    },
    {
      texto: "Levar a caixa para a inspetoria",
      textoExtra: [
        "*Você decide que o melhor é não mexer com isso sozinho.*",
        "A inspetora agradece e promete investigar."
      ],
      proximaCenaAposExtra: "evento_aleatorio"
    }
  ]
},

{
  id: "evento05",
  imagem: "assets/rua-noite.png",
  texto: [
    "*Enquanto caminha pelas ruas estreitas de Uberlândia, você escuta sons metálicos estranhos vindo de um beco.*",
    "*Ao se aproximar com cautela, vê uma pequena unidade robótica caída, com a carcaça chamuscada e um olho óptico piscando freneticamente.*",
    "*É um modelo antigo — da série LUX-3, popular no início da Revolução Tecnocrata. Alguns ainda chamam carinhosamente esses robôs de 'Luxinhos'.*",
    "*Ele emite ruídos e tenta se arrastar, mas parece com a energia quase esgotada.*",
    "Talvez ainda haja tempo para tentar ajudá-lo."
  ],
  opcoes: [
    {
      texto: "Tentar consertar o robô.",
      acao: () => {
        const sucesso = chanceAtributo("inteligencia", 5);
        if (sucesso) {
          localStorage.setItem("evento05_1", "feito");
          mostrarTextoExtra([
            "*Você abre o compartimento dorsal do LUX-3 com cuidado.*",
            "*Alguns circuitos estão chamuscados, mas o núcleo de energia ainda pulsa.*",
            "*Você usa um pedaço de fio encontrado no chão para fazer uma ponte rápida.*",
            "*Luzes azuis percorrem o corpo do Luxinho. Ele vibra, solta um bip e... se levanta.*",
            "*Robô: 'AGRADECIMENTO: Reparador identificado. Registro gravado: {{nome}}. Prioridade: Amigo.'*",
            "*O pequeno robô foge rapidamente para um ponto escuro da cidade.*",
            "*Você sente que isso pode não ser a última vez que o vê.*"
          ], "eventoFinal05");
        } else {
          mostrarTextoExtra([
            "*Você tenta acessar o painel traseiro do LUX-3, mas ele solta uma descarga fraca e seus dedos formigam.*",
            "*O robô solta faíscas, emite um último bip... e desliga completamente.*",
            "*Talvez você precise estudar mais engenharia neural...*"
          ], "eventoFinal05");
        }
      }
    },
    {
      texto: "Ignorar e seguir seu caminho.",
      proxima: "eventoFinal05"
    }
  ]
},
{
  id: "eventoFinal05",
  imagem: "assets/rua-noite.png",
  texto: [
    "*Você se afasta do beco, seja carregando a culpa de não ter ajudado ou a curiosidade de saber o que fará o pequeno Luxinho agora.*",
    "*O som do vento ecoa entre os prédios enquanto você segue seu caminho.*"
  ],
  opcoes: [{ texto: "Continuar sua jornada", proxima: () => eventoAleatorio() }]
},






]