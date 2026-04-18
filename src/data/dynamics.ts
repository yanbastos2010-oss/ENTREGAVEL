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
  "Analisar", "Inspecionar", "Mapear", "Distinguir", "Estruturar",
  "Corrigir", "Mitigar", "Comunicar", "Auditar", "Testar", "Sinalizar", "Escalar", "Previnir",
  "Relatar", "Antecipar", "Neutralizar", "Engajar", "Reconhecer", "Avaliar", "Diagnosticar", 
  "Prever", "Intervir", "Reforçar", "Executar", "Validar", "Questionar", "Sugerir", "Implementar"
];

const formats = [
  "em duplas", "em pequenos grupos", "em círculo", "individualmente", "em duas grandes equipes", 
  "em formato de plenária", "em formato de competição", "em uma linha de frente simulada", 
  "em rodízio de estações", "através de uma caminhada pelo setor"
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
  "Se houver discordância técnica, consulte o manual da NR correspondente na hora."
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
  ["Cadeiras", "Música de fundo", "Apito"]
];

const activityConcepts = [
  { 
    name: "Espelho", 
    logic: "Reflexão sobre comportamento seguro através da observação mútua e feedback direto.",
    steps: (t: string, f: string) => [
      `Posicione o grupo ${f}.`,
      `Um participante demonstra como realiza uma tarefa de ${t}.`,
      `O outro atua como seu 'espelho de segurança', imitando os movimentos mas parando sempre que notar um desvio.`,
      `Eles trocam de papéis para sentir a diferença entre observar e ser observado.`,
      `Feche com um compromisso de ajuda mútua no posto de trabalho.`
    ]
  },
  { 
    name: "Cápsula", 
    logic: "Previsão de consequências futuras a partir de decisões tomadas no presente.",
    steps: (t: string, f: string) => [
      `Reúna a equipe ${f} e apresente uma situação crítica de ${t}.`,
      `Peça que escrevam anonimamente em um papel o 'atalho' que mais gostariam de pegar naquela situação.`,
      `Coloque todos em uma cápsula (caixa) e retire um por um.`,
      `Para cada atalho, discuta qual seria a consequência dele daqui a 5 anos (saúde, família, carreira).`,
      `Enterre os atalhos e foque na solução definitiva.`
    ]
  },
  { 
    name: "Circuito", 
    logic: "Treinamento tátil e dinâmico através de estações práticas e objetivas.",
    steps: (t: string, f: string) => [
      `Crie 3 estações de trabalho rápidas focadas em ${t}.`,
      `Os participantes devem passar ${f} por cada estação em menos de 2 minutos.`,
      `Em cada ponto, há um desafio físico: encontrar um defeito, sinalizar um risco ou escolher o EPI.`,
      `Ao final do percurso, verifique quem completou a rota com 100% de precisão.`,
      `Debata a importância da velocidade versus atenção plena.`
    ]
  },
  { 
    name: "Veredito", 
    logic: "Análise crítica de responsabilidades e consequências legais/humanas de acidentes.",
    steps: (t: string, f: string) => [
      `Apresente um caso real ou fictício de acidente envolvendo ${t}.`,
      `Organize um júri ${f} onde um grupo aponta a falha do sistema e outro a falha humana.`,
      `Um terceiro grupo deve atuar como juiz e propor a sentença (melhoria ou punição).`,
      `O facilitador intervém trazendo o que a norma diz sobre o caso.`,
      `Conclua mostrando que no acidente não existem vencedores, apenas lições.`
    ]
  },
  { 
    name: "Radar", 
    logic: "Ampliação da percepção visual para detecção precoce de condições inseguras.",
    steps: (t: string, f: string) => [
      `Saia para uma caminhada ${f} pela área de trabalho.`,
      `Eles têm o 'Radar SST' ativado: devem encontrar 5 coisas que poderiam levar a um problema de ${t}.`,
      `Cada achado deve ser classificado em risco baixo, médio ou alto.`,
      `Retorne à sala e discuta como o radar deve permanecer ligado 24h.`,
      `Premie o olhar mais clínico da equipe.`
    ]
  },
  {
    name: "Elo",
    logic: "Fortalecimento da cultura de cuidado mútuo e a força da equipe na prevenção.",
    steps: (t: string, f: string) => [
      `Forme uma corrente humana ${f}.`,
      `Cada participante recebe um desafio de ${t} para resolver.`,
      `Se um falhar, a corrente se rompe; se o vizinho ajudar, o elo se fortalece.`,
      `A atividade demonstra que a segurança individual depende do apoio do colega.`,
      `Finalize com um aperto de mão simbolizando a rede de proteção.`
    ]
  },
  {
    name: "Controle",
    logic: "Domínio técnico sobre ferramentas e equipamentos de proteção.",
    steps: (t: string, f: string) => [
      `Disponibilize os equipamentos relacionados a ${t}.`,
      `Os participantes ${f} devem realizar a inspeção pré-uso completa no menor tempo possível.`,
      `O facilitador insere 'armadilhas' (peças soltas, validades vencidas).`,
      `Analise o que foi esquecido durante a pressão do cronômetro.`,
      `Reforce o checklist padrão da empresa para evitar omissões.`
    ]
  }
];

const durations = ["10 min", "15 min", "20 min", "25 min", "30 min"];
const difficulties = ["Iniciante", "Intermediário", "Avançado"];

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

const rand = mulberry32(54321);

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(rand() * arr.length)];
}

const usedTitles = new Set<string>();

let idCounter = 1;

areasConfig.forEach((area) => {
  if (area.name === "Bônus") {
    bonusDynamics.forEach(d => {
      dynamics.push({ ...d, id: idCounter++ });
      usedTitles.add(d.title);
    });
    return;
  }
  
  if (area.name === "Vídeos") {
    videoDynamics.forEach(d => {
      dynamics.push({ ...d, id: idCounter++ });
      usedTitles.add(d.title);
    });
    return;
  }

  // Shuffle themes
  let themes = [...area.themes];
  for (let i = themes.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [themes[i], themes[j]] = [themes[j], themes[i]];
  }

  for (let i = 0; i < 52; i++) {
    const theme = themes[i % themes.length] as string;
    const concept = activityConcepts[i % activityConcepts.length];
    const verb = getRandomItem(actionVerbs) as string;
    const format = getRandomItem(formats) as string;
    const difficulty = getRandomItem(difficulties) as string;
    const duration = getRandomItem(durations) as string;

    // Title generation focused on being conceptually unique
    let title = "";
    const nameVariations = [
      `${concept.name} ${theme.charAt(0).toUpperCase() + theme.slice(1)}`,
      `${verb} ${theme.charAt(0).toUpperCase() + theme.slice(1)} Estrita`,
      `Foco: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`,
      `Protocolo ${theme.charAt(0).toUpperCase() + theme.slice(1)}`,
      `Ação Direta: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`,
      `Radar de ${theme.charAt(0).toUpperCase() + theme.slice(1)}`,
      `O Código ${theme.split(' ')[0].toUpperCase()} de Segurança`
    ];
    
    let titleAttempt = 0;
    do {
      title = getRandomItem(nameVariations) as string;
      if (usedTitles.has(title)) {
        title += ` ${Math.floor(rand() * 100)}`; // Fallback for uniqueness
      }
      titleAttempt++;
    } while (usedTitles.has(title) && titleAttempt < 10);
    
    usedTitles.add(title);

    const focus = `Garantir que todos saibam como lidar com ${theme} através da lógica de ${concept.name.toLowerCase()}.`;
    const overview = `Esta dinâmica utiliza o conceito ${concept.name} para ${verb.toLowerCase()} o conhecimento da equipe sobre ${theme}. ${concept.logic}`;
    const steps = concept.steps(theme, format);
    const tip = getRandomItem(tipTemplates) as string;
    const materials = getRandomItem(materialsPool) as string[];

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
      steps,
      tip
    });
  }
});

