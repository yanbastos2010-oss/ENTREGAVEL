export interface Dynamic {
  id: number;
  title: string;
  area: string;
  icon: string;
  difficulty: string;
  duration: string;
  focus: string;
  materials: string[];
  overview: string;
  steps: string[];
  tip: string;
  subItems?: Omit<Dynamic, 'id' | 'area'>[];
  externalLink?: string;
}

const videoDynamics: Omit<Dynamic, 'id'>[] = Array.from({ length: 20 }, (_, i) => ({
  title: `Vídeo ${i + 1}`,
  area: "Vídeos",
  icon: "🎬",
  difficulty: "Iniciante",
  duration: "Variada",
  focus: "Treinamento Visual",
  materials: [],
  overview: "Carregando...",
  steps: [],
  tip: "Aguarde o carregamento do vídeo.",
  subItems: undefined
}));

const areasConfig = [
  { name: "Prevenção de Acidentes", icon: "🛡️", themes: ["riscos ocultos", "prevenção ativa", "condições inseguras", "quase-acidentes", "sinalização", "barreiras de segurança", "inspeção de área", "análise de risco", "prevenção de quedas", "proteção de máquinas"] },
  { name: "Uso de EPIs", icon: "🦺", themes: ["inspeção de EPI", "conservação", "escolha correta", "resistência ao uso", "EPI vs EPC", "validade do CA", "higienização", "uso obrigatório", "proteção auditiva", "proteção respiratória"] },
  { name: "Comportamento Seguro", icon: "🧠", themes: ["cultura de segurança", "pressa e improviso", "excesso de confiança", "atenção plena", "feedback de segurança", "liderança", "exemplo positivo", "autocuidado", "cuidado mútuo", "percepção de risco"] },
  { name: "Normas e Procedimentos (NRs)", icon: "📜", themes: ["NR-35 Trabalho em Altura", "NR-10 Elétrica", "NR-12 Máquinas", "CIPA", "Direito de Recusa", "Permissão de Trabalho", "LOTO (Bloqueio e Etiquetagem)", "NR-33 Espaço Confinado", "NR-18 Construção Civil", "Procedimentos Internos"] },
  { name: "Situações de Risco e Emergência", icon: "🚨", themes: ["rotas de fuga", "uso de extintores", "primeiros socorros", "controle de pânico", "simulado de abandono", "vazamento químico", "incêndio", "resgate em altura", "comunicação de emergência", "ponto de encontro"] },
  { name: "Bônus", icon: "🎁", themes: [] },
  { name: "Vídeos", icon: "🎥", themes: [] },
];

const bonusDynamics: Omit<Dynamic, 'id'>[] = [
  {
    title: "+15 Jogos e Simulações de Segurança",
    area: "Bônus",
    icon: "🎮",
    difficulty: "Variada",
    duration: "Diversas",
    focus: "Engajamento e fixação de conceitos através da gamificação.",
    materials: ["Variados conforme o jogo escolhido"],
    overview: "Uma coletânea exclusiva de 15 mecânicas de jogos adaptadas para o ambiente de treinamento de segurança.",
    steps: ["Clique para ver a lista completa de jogos abaixo."],
    tip: "Escolha o jogo que melhor se adapta ao perfil da sua equipe.",
    subItems: [
      {
        title: "Bingo da Segurança",
        icon: "🔢",
        difficulty: "Iniciante",
        duration: "20 min",
        focus: "Fixação de termos técnicos e siglas de SST.",
        materials: ["Cartelas de Bingo", "Marcadores", "Saco para sorteio"],
        overview: "Uma forma divertida de memorizar siglas (CIPA, SESMT, EPC) e termos das NRs.",
        steps: [
          "Distribua as cartelas com termos de segurança.",
          "Sorteie uma definição ou sigla.",
          "O participante marca se tiver o termo correspondente.",
          "O primeiro a completar uma linha ou cartela grita 'SEGURANÇA!'.",
          "Revise brevemente cada termo sorteado."
        ],
        tip: "Dê um brinde simbólico para o vencedor para aumentar o engajamento."
      },
      {
        title: "Trilha dos Riscos",
        icon: "🎲",
        difficulty: "Intermediário",
        duration: "30 min",
        focus: "Percepção de consequências de atos seguros e inseguros.",
        materials: ["Tabuleiro de trilha", "Dado", "Pinos coloridos"],
        overview: "Jogo de tabuleiro onde o progresso depende de decisões de segurança.",
        steps: [
          "Divida em equipes de 3 a 4 pessoas.",
          "Cada casa possui um desafio ou uma situação (Ex: 'Usou luva, avance 2').",
          "Vence quem chegar ao final da jornada de trabalho (fim da trilha) primeiro.",
          "Debata as situações que fizeram os jogadores voltarem casas."
        ],
        tip: "Crie casas de 'atalho' para quem demonstrar conhecimento extra."
      },
      {
        title: "Mímica SST",
        icon: "🎭",
        difficulty: "Iniciante",
        duration: "15 min",
        focus: "Identificação visual de EPIs e procedimentos.",
        materials: ["Cartões com nomes de EPIs/Ações"],
        overview: "Adivinhação através de gestos sobre o cotidiano da segurança.",
        steps: [
          "Um voluntário sorteia um cartão.",
          "Ele deve representar a ação ou objeto sem falar.",
          "O grupo tem 1 minuto para adivinhar.",
          "Quem acertar é o próximo a fazer a mímica."
        ],
        tip: "Inclua situações engraçadas para quebrar o gelo da equipe."
      },
      {
        title: "Stop de Segurança",
        icon: "✍️",
        difficulty: "Iniciante",
        duration: "15 min",
        focus: "Agilidade mental e vocabulário de segurança.",
        materials: ["Papel", "Caneta"],
        overview: "O clássico jogo de palavras adaptado para o universo SST.",
        steps: [
          "Defina categorias: EPI, Risco, NR, Parte do Corpo.",
          "Sorteie uma letra.",
          "Todos devem preencher as categorias com palavras que comecem com aquela letra.",
          "Quem terminar primeiro grita 'STOP!'."
        ],
        tip: "Valide as respostas com o grupo para garantir que fazem sentido técnico."
      },
      {
        title: "Caça ao Risco (7 Erros)",
        icon: "🔍",
        difficulty: "Avançado",
        duration: "20 min",
        focus: "Olhar crítico para o ambiente de trabalho.",
        materials: ["Imagem com erros propositais", "Canetas"],
        overview: "Encontrar inconformidades em um cenário ilustrado ou fotografado.",
        steps: [
          "Entregue a imagem para duplas ou trios.",
          "Eles devem circular 7 erros de segurança na imagem.",
          "Após o tempo, revele os erros e explique o porquê de cada um.",
          "Pergunte se algum daqueles erros ocorre na unidade real."
        ],
        tip: "Use uma foto real da empresa (com erros simulados) para maior impacto."
      },
      {
        title: "Batata Quente do EPI",
        icon: "🔥",
        difficulty: "Iniciante",
        duration: "10 min",
        focus: "Conhecimento rápido sobre utilidade de equipamentos.",
        materials: ["Um EPI qualquer (ex: Capacete)", "Música"],
        overview: "Dinâmica de movimento para testar conhecimentos sob pressão.",
        steps: [
          "Todos em círculo passando o EPI enquanto a música toca.",
          "Quando a música parar, quem estiver com o item deve dizer uma regra de uso dele.",
          "Se não souber, o grupo ajuda.",
          "Continue até que vários itens tenham sido discutidos."
        ],
        tip: "Aumente a velocidade da música para tornar mais dinâmico."
      },
      {
        title: "Quebra-cabeça LOTO",
        icon: "🧩",
        difficulty: "Avançado",
        duration: "25 min",
        focus: "Sequenciamento correto de bloqueio e etiquetagem.",
        materials: ["Cartões com as etapas de bloqueio embaralhadas"],
        overview: "Ordenar as etapas de energia zero para garantir manutenção segura.",
        steps: [
          "Entregue as peças do 'quebra-cabeça' para o grupo.",
          "Eles devem colocar na ordem correta (Desligar, Bloquear, Testar, etc).",
          "O facilitador verifica a ordem.",
          "Se houver erro, o grupo deve recomeçar."
        ],
        tip: "Use cadeados reais como parte da dinâmica para torná-la tátil."
      },
      {
        title: "Dominó de Proteção",
        icon: "🀄",
        difficulty: "Intermediário",
        duration: "20 min",
        focus: "Associação entre Risco e Medida de Controle.",
        materials: ["Peças de dominó customizadas (Risco de um lado, Solução do outro)"],
        overview: "Ligar o problema à solução correta de forma lógica.",
        steps: [
          "Distribua as peças entre os jogadores.",
          "O primeiro coloca um risco (Ex: Ruído).",
          "O próximo deve colocar a solução (Ex: Protetor Auricular).",
          "Segue o jogo até alguém zerar as peças."
        ],
        tip: "Peça que expliquem a conexão ao colocar a peça."
      },
      {
        title: "Quiz Show SST",
        icon: "🎤",
        difficulty: "Variada",
        duration: "30 min",
        focus: "Competição de conhecimentos gerais de segurança.",
        materials: ["Sino ou campainha", "Lista de perguntas"],
        overview: "Formato de programa de TV para testar a equipe.",
        steps: [
          "Divida a sala em dois grandes times.",
          "Faça uma pergunta de múltipla escolha.",
          "Quem bater o sino primeiro tem o direito de responder.",
          "Acerto vale ponto, erro passa a vez."
        ],
        tip: "Use um microfone de brinquedo para entrar no personagem de apresentador."
      },
      {
        title: "Role-play: A Abordagem",
        icon: "🗣️",
        difficulty: "Avançado",
        duration: "20 min",
        focus: "Habilidades de comunicação e feedback.",
        materials: ["Roteiros curtos"],
        overview: "Simular uma conversa entre um técnico e um funcionário resistente.",
        steps: [
          "Dois voluntários encenam uma situação de risco.",
          "Um deve convencer o outro a parar a atividade insegura.",
          "O grupo observa e dá feedback sobre a abordagem usada.",
          "Repita com outros voluntários testando novas técnicas de fala."
        ],
        tip: "Foque na empatia e não na autoridade durante a simulação."
      },
      {
        title: "Labirinto da NR-10",
        icon: "⚡",
        difficulty: "Avançado",
        duration: "15 min",
        focus: "Decisões seguras em ambientes elétricos.",
        materials: ["Desenho de labirinto com 'armadilhas'"],
        overview: "Encontrar o caminho da manutenção sem tocar em pontos de perigo.",
        steps: [
          "O participante deve traçar o caminho no papel.",
          "Em certos pontos, há perguntas sobre a NR-10.",
          "Se errar a pergunta, 'leva um choque' e deve voltar ao início.",
          "Vence quem completar o percurso com segurança."
        ],
        tip: "Pode ser feito em tamanho real no chão usando fita crepe."
      },
      {
        title: "Memória de Placas",
        icon: "🃏",
        difficulty: "Iniciante",
        duration: "15 min",
        focus: "Reconhecimento imediato de sinalização.",
        materials: ["Pares de cartas (Símbolo e Significado)"],
        overview: "Clássico jogo de memória focado em placas de advertência e obrigação.",
        steps: [
          "Coloque todas as cartas viradas para baixo.",
          "O jogador vira duas; se formarem par (Placa + Nome), ele guarda.",
          "Se errar, vira de volta.",
          "Ganha quem tiver mais pares ao final."
        ],
        tip: "Use as placas que realmente existem na fábrica do cliente."
      },
      {
        title: "Desafio da Rota de Fuga",
        icon: "🏃",
        difficulty: "Intermediário",
        duration: "15 min",
        focus: "Conhecimento do plano de emergência.",
        materials: ["Planta baixa simplificada", "Cronômetro"],
        overview: "Desenhar o caminho de saída mais rápido a partir de um ponto sorteado.",
        steps: [
          "Sorteie um local da fábrica.",
          "O participante tem 30 segundos para desenhar a rota até o ponto de encontro.",
          "Verifique se ele passou por obstáculos ou portas corta-fogo.",
          "Debate sobre obstruções reais encontradas no dia a dia."
        ],
        tip: "Simule que uma das saídas está bloqueada para forçar o pensamento alternativo."
      },
      {
        title: "Simulado de Mesa: Acidente",
        icon: "🚑",
        difficulty: "Avançado",
        duration: "30 min",
        focus: "Tomada de decisão e priorização em emergências.",
        materials: ["Cenário escrito", "Miniaturas ou fichas"],
        overview: "Gerenciar uma situação de múltiplos feridos sem sair da sala.",
        steps: [
          "Leia o cenário de um acidente complexo.",
          "O grupo deve decidir quem socorrer primeiro e como isolar a área.",
          "O facilitador insere novas informações (Ex: 'O fogo aumentou').",
          "Avalie a calma e a lógica das decisões tomadas."
        ],
        tip: "Ótimo para treinar brigadistas e lideranças."
      },
      {
        title: "Verdade ou Mito SST",
        icon: "🤔",
        difficulty: "Iniciante",
        duration: "15 min",
        focus: "Quebra de paradigmas e crenças erradas.",
        materials: ["Placas de 'Verdade' e 'Mito'"],
        overview: "Desvendar frases comuns que colocam a segurança em risco.",
        steps: [
          "O facilitador lê uma frase (Ex: 'Leite corta efeito de veneno').",
          "Todos levantam a placa que acham correta.",
          "O facilitador explica a base científica ou técnica da resposta.",
          "Debate sobre de onde vêm esses mitos."
        ],
        tip: "Use mitos que você ouve com frequência no chão de fábrica."
      }
    ]
  },
  {
    title: "Checklist Diário de Segurança",
    area: "Bônus",
    icon: "✅",
    difficulty: "Iniciante",
    duration: "5 min",
    focus: "Padronização da verificação diária de segurança.",
    materials: ["Formulário de Checklist", "Caneta", "Prancheta"],
    overview: "Ferramenta essencial para garantir que nenhum item crítico de segurança seja esquecido antes do início das atividades.",
    steps: [
      "Reúna a equipe no local de trabalho.",
      "Percorra os itens do checklist (EPIs, ferramentas, ambiente).",
      "Marque cada item conforme a conformidade.",
      "Caso algo esteja irregular, interrompa a atividade até a correção.",
      "Assine e arquive o documento para controle."
    ],
    tip: "O checklist deve ser rápido e objetivo para não se tornar uma tarefa burocrática cansativa.",
    externalLink: "https://drive.google.com/file/d/1qdY5UQDlZwXE1fAjw7mX3zeRd0AC9XeV/view?usp=sharing"
  },
  {
    title: "Modelo de Ficha de Entrega de EPI",
    area: "Bônus",
    icon: "📋",
    difficulty: "Iniciante",
    duration: "10 min",
    focus: "Documentação legal e controle de entrega de equipamentos.",
    materials: ["Ficha de EPI", "EPI a ser entregue", "Documento do colaborador"],
    overview: "Modelo padrão para registro de entrega de Equipamentos de Proteção Individual, garantindo a conformidade com a NR-06.",
    steps: [
      "Identifique o colaborador e o EPI necessário.",
      "Verifique o CA (Certificado de Aprovação) do equipamento.",
      "Preencha a data e a descrição do item na ficha.",
      "Oriente o colaborador sobre o uso e conservação.",
      "Colete a assinatura do colaborador confirmando o recebimento."
    ],
    tip: "Mantenha as fichas sempre organizadas e digitalizadas para facilitar auditorias.",
    externalLink: "https://drive.google.com/file/d/1CTyJT7i4dSNjGGHv6cKPBL5WO5gES0G3/view?usp=sharing"
  },
  {
    title: "Banco de Exemplos de Situações de Risco",
    area: "Bônus",
    icon: "📂",
    difficulty: "Intermediário",
    duration: "20 min",
    focus: "Identificação visual e análise de perigos reais.",
    materials: ["Banco de fotos/vídeos", "Projetor ou Tablet", "Folhas de análise"],
    overview: "Um acervo rico com 10 exemplos de situações reais de risco para treinamento de percepção.",
    steps: ["Clique para ver os 10 exemplos detalhados abaixo."],
    tip: "Use fotos da própria unidade (se possível) para que os colaboradores se identifiquem mais com o cenário.",
    subItems: [
      {
        title: "Exemplo 1: Fiação Exposta",
        icon: "⚡",
        difficulty: "Iniciante",
        duration: "5 min",
        focus: "Risco elétrico.",
        materials: ["Foto de quadro elétrico aberto"],
        overview: "Cabos desencapados em área de passagem.",
        steps: ["Identificar o cabo", "Isolar a área", "Chamar manutenção"],
        tip: "Nunca tente consertar se não for eletricista autorizado."
      },
      {
        title: "Exemplo 2: Escada sem Corrimão",
        icon: "🪜",
        difficulty: "Iniciante",
        duration: "5 min",
        focus: "Queda de nível.",
        materials: ["Foto de escada industrial"],
        overview: "Escada de acesso principal com corrimão quebrado.",
        steps: ["Sinalizar degrau", "Usar rota alternativa", "Reportar falha"],
        tip: "Mantenha sempre uma mão livre ao subir escadas."
      },
      {
        title: "Exemplo 3: Empilhadeira em Alta Velocidade",
        icon: "🚜",
        difficulty: "Intermediário",
        duration: "5 min",
        focus: "Atropelamento.",
        materials: ["Vídeo de câmera de segurança"],
        overview: "Operador ignorando faixas de pedestres.",
        steps: ["Parar o veículo", "Orientar operador", "Revisar treinamento"],
        tip: "O pedestre tem prioridade, mas deve estar atento."
      },
      {
        title: "Exemplo 4: Falta de Proteção em Serra",
        icon: "🪚",
        difficulty: "Avançado",
        duration: "5 min",
        focus: "Amputação.",
        materials: ["Foto de serra circular"],
        overview: "Coifa de proteção removida para 'agilizar' o corte.",
        steps: ["Bloquear máquina", "Instalar coifa", "Advertir operador"],
        tip: "A pressa é a maior inimiga da segurança."
      },
      {
        title: "Exemplo 5: Armazenamento Instável",
        icon: "📦",
        difficulty: "Intermediário",
        duration: "5 min",
        focus: "Queda de materiais.",
        materials: ["Foto de estoque alto"],
        overview: "Caixas pesadas sobre caixas leves no topo da prateleira.",
        steps: ["Isolar corredor", "Reorganizar com empilhadeira", "Treinar almoxarife"],
        tip: "O peso deve estar sempre na base."
      },
      {
        title: "Exemplo 6: Vazamento de Óleo",
        icon: "💧",
        difficulty: "Iniciante",
        duration: "5 min",
        focus: "Queda no mesmo nível.",
        materials: ["Foto de poça no chão"],
        overview: "Vazamento hidráulico não sinalizado em corredor escuro.",
        steps: ["Sinalizar com cone", "Limpar com absorvente", "Consertar vazamento"],
        tip: "Limpeza é o primeiro passo da segurança."
      },
      {
        title: "Exemplo 7: Trabalho em Altura sem Cinto",
        icon: "🏗️",
        difficulty: "Avançado",
        duration: "5 min",
        focus: "Queda fatal.",
        materials: ["Relato de incidente"],
        overview: "Funcionário em telhado a 5m sem ponto de ancoragem.",
        steps: ["Pedir descida imediata", "Instalar linha de vida", "Liberar com cinto"],
        tip: "Acima de 2 metros, o cinto é inegociável."
      },
      {
        title: "Exemplo 8: Ruído Excessivo sem Protetor",
        icon: "🎧",
        difficulty: "Iniciante",
        duration: "5 min",
        focus: "Perda auditiva.",
        materials: ["Medição de decibéis"],
        overview: "Área de compressores com sinalização ignorada.",
        steps: ["Entregar protetor", "Explicar riscos da surdez", "Monitorar uso"],
        tip: "A perda auditiva é silenciosa e irreversível."
      },
      {
        title: "Exemplo 9: Produto Químico sem Rótulo",
        icon: "🧪",
        difficulty: "Intermediário",
        duration: "5 min",
        focus: "Intoxicação/Queimadura.",
        materials: ["Foto de garrafa PET com líquido azul"],
        overview: "Solvente armazenado em garrafa de refrigerante.",
        steps: ["Identificar conteúdo", "Rotular corretamente", "Descartar PET"],
        tip: "Nunca use embalagens de alimentos para químicos."
      },
      {
        title: "Exemplo 10: Obstrução de Extintor",
        icon: "🧯",
        difficulty: "Iniciante",
        duration: "5 min",
        focus: "Incêndio fora de controle.",
        materials: ["Foto de pallets na frente do extintor"],
        overview: "Área de segurança do extintor usada como depósito temporário.",
        steps: ["Remover pallets", "Pintar demarcação no chão", "Conscientizar equipe"],
        tip: "Em caso de fogo, cada segundo conta. O acesso deve ser livre."
      }
    ]
  }
];

const actionVerbs = [
  "Analisar", "Construir", "Debater", "Inspecionar", "Simular", "Mapear", "Identificar", "Resolver", "Organizar", 
  "Apresentar", "Investigar", "Classificar", "Desvendar", "Proteger", "Avaliar", "Demonstrar", "Corrigir", 
  "Prever", "Mitigar", "Comunicar", "Liderar", "Auditar", "Testar", "Sinalizar", "Escalar", "Previnir",
  "Monitorar", "Relatar", "Treinar", "Verificar", "Antecipar", "Neutralizar", "Sustentar", "Engajar"
];

const formats = [
  "em duplas", "em pequenos grupos", "em círculo", "individualmente", "em duas grandes equipes", 
  "em formato de plenária", "em formato de competição", "em uma linha de frente simulada", 
  "em rodízio de estações", "através de uma caminhada pelo setor", "em formato de júri simulado",
  "em uma dinâmica de 'aquário'", "através de um 'role-play' rápido", "em formato de quiz relâmpago"
];

const materialsPool = [
  ["Post-its", "Canetões", "Quadro branco"],
  ["Vendas para os olhos", "Tampões de ouvido", "Luvas grossas"],
  ["Cartões impressos", "Envelopes", "Cronômetro"],
  ["Sucata (caixas, garrafas)", "Fita crepe", "Tesoura"],
  ["Barbante", "Bolas de plástico", "Balões"],
  ["Checklists impressos", "Pranchetas", "Canetas"],
  ["Fotos do ambiente de trabalho", "Projetor", "Laser pointer"],
  ["EPIs diversos (novos e danificados)", "Caixa de papelão"],
  ["Quebra-cabeça de segurança", "Brindes simples"],
  ["Cadeiras", "Música de fundo", "Apito"],
  ["Extintores vazios", "Cones", "Fita zebrada"],
  ["Rádios comunicadores", "Lanternas", "Mapas de risco"],
  ["Colete refletivo", "Capacete de cores diferentes", "Prancheta eletrônica"]
];

const overviewTemplates = [
  (verb: string, theme: string, format: string) => `Esta atividade desafia os participantes a ${verb.toLowerCase()} cenários de ${theme} enquanto trabalham ${format}. O foco é transformar a teoria em uma prática instintiva.`,
  (verb: string, theme: string, format: string) => `Utilizando o formato ${format}, o grupo deverá ${verb.toLowerCase()} os principais pontos críticos de ${theme}, promovendo uma cultura de vigilância constante.`,
  (verb: string, theme: string, format: string) => `Uma imersão prática onde ${format} os colaboradores precisam ${verb.toLowerCase()} situações reais de ${theme} para evitar falhas operacionais.`,
  (verb: string, theme: string, format: string) => `Dinâmica focada em agilidade mental para ${verb.toLowerCase()} riscos de ${theme}. A interação ${format} ajuda na fixação do protocolo de segurança.`,
  (verb: string, theme: string, format: string) => `Os participantes são colocados à prova para ${verb.toLowerCase()} como as decisões sobre ${theme} impactam o coletivo, trabalhando ${format}.`,
  (verb: string, theme: string, format: string) => `Nesta proposta ${format}, o objetivo central é ${verb.toLowerCase()} a percepção de perigo em relação a ${theme}, usando exemplos do cotidiano.`,
  (verb: string, theme: string, format: string) => `Através de uma abordagem ${format}, vamos ${verb.toLowerCase()} as barreiras que impedem a segurança total em ${theme}.`,
  (verb: string, theme: string, format: string) => `Uma simulação tática onde ${format} a equipe deve ${verb.toLowerCase()} protocolos de ${theme} sob condições de tempo limitado.`,
  (verb: string, theme: string, format: string) => `Exercício de liderança e comunicação para ${verb.toLowerCase()} a conformidade com as regras de ${theme}, organizado ${format}.`,
  (verb: string, theme: string, format: string) => `Workshop interativo para ${verb.toLowerCase()} e documentar melhorias no processo de ${theme}, executado ${format}.`
];

const stepTemplates = [
  (theme: string, format: string) => [
    `Divida os participantes ${format}.`,
    `Apresente um cenário desafiador envolvendo ${theme}.`,
    `Dê 10 minutos para que discutam e encontrem 3 soluções.`,
    `Cada grupo apresenta suas conclusões para os demais.`,
    `O facilitador consolida os aprendizados e conecta com a rotina.`
  ],
  (theme: string, format: string) => [
    `Organize a equipe ${format}.`,
    `Distribua os materiais e explique as regras do desafio de ${theme}.`,
    `Inicie o cronômetro. Os participantes devem agir rapidamente.`,
    `Pause a dinâmica na metade para inserir um "fator surpresa" ou dificuldade.`,
    `Ao final, debata como a pressão afetou a segurança na execução.`
  ],
  (theme: string, format: string) => [
    `Posicione todos ${format}.`,
    `Entregue cartões com situações reais de ${theme}.`,
    `Peça que classifiquem as situações em "Seguro", "Atenção" ou "Perigo".`,
    `Promova um debate sobre as situações que geraram discordância.`,
    `Feche a dinâmica reforçando o procedimento correto da empresa.`
  ],
  (theme: string, format: string) => [
    `Forme equipes e distribua os itens necessários.`,
    `O objetivo é construir uma barreira ou solução física para ${theme}.`,
    `Eles têm 15 minutos para planejar e executar a montagem.`,
    `Teste as soluções criadas na frente de todos.`,
    `Discuta a importância do planejamento e da criatividade na prevenção.`
  ],
  (theme: string, format: string) => [
    `Peça que os participantes se organizem ${format}.`,
    `Um voluntário deve simular uma atitude incorreta relacionada a ${theme}.`,
    `Os demais devem intervir imediatamente, usando a abordagem correta.`,
    `Troque os papéis para que vários possam praticar a intervenção.`,
    `Reforce a importância do feedback de segurança entre colegas.`
  ],
  (theme: string, format: string) => [
    `Crie um "circuito de inspeção" onde os participantes ${format} devem passar.`,
    `Em cada estação, eles precisam identificar um erro de ${theme}.`,
    `Anote quem consegue identificar todos os desvios no menor tempo.`,
    `Reúna o grupo para mostrar o que passou despercebido.`,
    `Finalize com a meta de "zero desvios" para o turno de trabalho.`
  ],
  (theme: string, format: string) => [
    `Inicie um debate ${format} sobre as maiores dificuldades em lidar com ${theme}.`,
    `Peça que listem os "atalhos" perigosos que as pessoas costumam tomar.`,
    `Para cada atalho, o grupo deve propor uma alternativa segura e viável.`,
    `Crie um compromisso público assinado por todos sobre essas melhorias.`,
    `O facilitador valida as propostas conforme as normas vigentes.`
  ],
  (theme: string, format: string) => [
    `Sorteie papéis de "vítima", "socorrista" e "observador" ${format}.`,
    `Simule um incidente de ${theme} e peça que ajam conforme o plano de emergência.`,
    `Os observadores devem anotar falhas na comunicação ou no procedimento.`,
    `Debata os pontos de melhoria identificados pelos observadores.`,
    `Repita a cena corrigindo os erros apontados.`
  ],
  (theme: string, format: string) => [
    `Distribua imagens de diferentes ambientes de trabalho ${format}.`,
    `Os participantes devem desenhar o "mapa de calor" dos riscos de ${theme}.`,
    `Compare os mapas criados pelos diferentes grupos.`,
    `Discuta por que alguns riscos são mais visíveis para uns do que para outros.`,
    `Crie um mapa mestre com as percepções de todos.`
  ],
  (theme: string, format: string) => [
    `Realize um "júri simulado" ${format} para julgar um caso fictício de ${theme}.`,
    `Um grupo defende o procedimento, outro aponta a falha e um terceiro julga.`,
    `O objetivo é entender as responsabilidades legais e éticas.`,
    `O facilitador atua como juiz técnico, trazendo a norma real.`,
    `Conclua com a importância de seguir o padrão para proteção de todos.`
  ],
  (theme: string, format: string) => [
    `Peça que cada participante ${format} escreva um "quase-acidente" de ${theme} que já viu.`,
    `Coloque todos os relatos em uma urna e sorteie alguns para análise.`,
    `O grupo deve propor como aquele quase-acidente poderia ter sido evitado.`,
    `Transforme as soluções em uma lista de "lições aprendidas".`,
    `Exponha essa lista no mural da empresa.`
  ],
  (theme: string, format: string) => [
    `Organize uma "caça ao tesouro" ${format} focada em itens de segurança de ${theme}.`,
    `Os participantes devem encontrar e validar o estado de conservação de itens reais.`,
    `Cada item encontrado deve ser registrado com uma breve observação técnica.`,
    `Vence o grupo que encontrar e avaliar corretamente o maior número de itens.`,
    `O facilitador revisa os registros e premia a precisão técnica.`
  ]
];

const tipTemplates = [
  "Use exemplos reais que já aconteceram na empresa para gerar mais impacto.",
  "Mantenha um tom positivo; o objetivo não é apontar culpados, mas aprender.",
  "Se a equipe estiver dispersa, faça uma pausa e peça que todos fiquem de pé.",
  "Incentive os colaboradores mais tímidos a falarem, fazendo perguntas diretas e fáceis.",
  "Grave um pequeno vídeo da dinâmica (com permissão) para usar no próximo DDS.",
  "Leve brindes simples, como bombons, para premiar as melhores participações.",
  "Adapte a linguagem para que seja acessível a todos os níveis de escolaridade.",
  "Seja rigoroso com o tempo para não perder a atenção do grupo.",
  "Tente realizar a dinâmica no próprio posto de trabalho para maior realismo.",
  "Se houver discordância técnica, consulte o manual da NR correspondente na hora.",
  "Foque na solução e não apenas no problema para manter o engajamento alto.",
  "Use o humor com cautela para tornar o aprendizado mais leve sem perder a seriedade."
];

export const dynamics: Dynamic[] = [];

// Seeded random generator for consistency
function mulberry32(a: number) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

const rand = mulberry32(12345);

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(rand() * arr.length)];
}

let idCounter = 1;

// Generate exactly 260 dynamics (52 per area)
areasConfig.forEach((area) => {
  if (area.name === "Bônus") {
    bonusDynamics.forEach(d => {
      dynamics.push({ ...d, id: idCounter++ });
    });
    return;
  }
  
  if (area.name === "Vídeos") {
    videoDynamics.forEach(d => {
      dynamics.push({ ...d, id: idCounter++ });
    });
    return;
  }

  for (let i = 0; i < 52; i++) {
    const theme = getRandomItem(area.themes);
    const verb = getRandomItem(actionVerbs);
    const format = getRandomItem(formats);
    const materials = getRandomItem(materialsPool);
    const stepTemplate = getRandomItem(stepTemplates);
    const overviewTemplate = getRandomItem(overviewTemplates);
    const tip = getRandomItem(tipTemplates);
    
    const diffs = ["Iniciante", "Intermediário", "Avançado"];
    const difficulty = diffs[Math.floor(rand() * 3)];
    
    const durations = ["10 min", "15 min", "20 min", "30 min"];
    const duration = durations[Math.floor(rand() * 4)];

    // Generate unique title
    const titleAdjectives = ["Ativo", "Dinâmico", "em Foco", "na Prática", "Descomplicado", "Seguro", "Extremo", "Colaborativo", "Total", "Consciente", "Efetivo", "de Impacto", "Real", "Urgente", "Estratégico", "Prático", "Inovador"];
    const titlePatterns = [
      `${verb} ${theme.charAt(0).toUpperCase() + theme.slice(1)} ${getRandomItem(titleAdjectives)}`,
      `Desafio: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`,
      `Operação ${getRandomItem(titleAdjectives)}: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`,
      `Protocolo ${getRandomItem(titleAdjectives)} - ${theme.charAt(0).toUpperCase() + theme.slice(1)}`,
      `${theme.charAt(0).toUpperCase() + theme.slice(1)}: Ação ${getRandomItem(titleAdjectives)}`,
      `Missão ${getRandomItem(titleAdjectives)}: ${verb} ${theme.charAt(0).toUpperCase() + theme.slice(1)}`,
      `Workshop ${getRandomItem(titleAdjectives)} sobre ${theme.charAt(0).toUpperCase() + theme.slice(1)}`,
      `Laboratório de ${theme.charAt(0).toUpperCase() + theme.slice(1)} ${getRandomItem(titleAdjectives)}`,
      `Circuito ${getRandomItem(titleAdjectives)} de ${theme.charAt(0).toUpperCase() + theme.slice(1)}`,
      `Radar ${getRandomItem(titleAdjectives)}: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`
    ];
    const title = getRandomItem(titlePatterns);

    const focus = `Desenvolver habilidades de ${verb.toLowerCase()} em situações de ${theme}.`;
    
    const overview = overviewTemplate(verb, theme, format);

    dynamics.push({
      id: idCounter++,
      area: area.name,
      icon: area.icon,
      difficulty,
      duration,
      title,
      focus,
      materials,
      overview,
      steps: stepTemplate(theme, format),
      tip
    });
  }
});

