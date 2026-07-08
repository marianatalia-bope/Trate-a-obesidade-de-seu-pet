import { ModuleItem, DifferentialItem, BonusItem, TestimonialItem, FAQItem } from './types';

export const modulesData: ModuleItem[] = [
  {
    id: 'mod1',
    title: 'Módulo 1: Desvendando a Obesidade Pet',
    description: 'Entenda os perigos silenciosos do excesso de peso e aprenda a diagnosticar a real situação de saúde do seu companheiro.',
    iconName: 'ShieldAlert',
    duration: 'Semana 1',
    benefits: [
      'Como avaliar o Score de Condição Corporal (SCC) do seu pet em casa',
      'Os riscos reais: diabetes, problemas cardíacos e dores articulares nas patas',
      'Como a obesidade rouba até 2.5 anos de vida saudável do seu amigo',
      'A psicologia por trás da alimentação: diferenciar fome real de carência emocional'
    ]
  },
  {
    id: 'mod2',
    title: 'Módulo 2: O Método de Nutrição Consciente',
    description: 'Aprenda a alimentar seu pet de forma correta, econômica e altamente nutritiva, sem fazê-lo passar fome.',
    iconName: 'Apple',
    duration: 'Semana 2',
    benefits: [
      'Como decifrar rótulos de rações comerciais e identificar ingredientes nocivos',
      'O cálculo exato da porção diária ideal com base no peso meta do seu pet',
      'Alimentos naturais e seguros que saciam e podem ser incluídos na rotina',
      'Como transicionar a dieta de forma segura sem causar desconforto gástrico'
    ]
  },
  {
    id: 'mod3',
    title: 'Módulo 3: Rotina Ativa Sem Sofrimento',
    description: 'Exercícios práticos, seguros e divertidos pensados exclusivamente para animais que estão acima do peso ideal.',
    iconName: 'Activity',
    duration: 'Semana 3',
    benefits: [
      'Atividades de baixíssimo impacto para proteger as articulações inflamadas',
      'Enriquecimento ambiental: como fazer seu pet gastar energia brincando sozinho',
      'Guia de passeios estratégicos que queimam gordura sem estressar o animal',
      'Como engajar gatos sedentários através de estímulos de caça natural'
    ]
  },
  {
    id: 'mod4',
    title: 'Módulo 4: Blindando a Longevidade',
    description: 'Como lidar com recaídas, manter o peso conquistado para sempre e garantir que seu pet viva ao máximo.',
    iconName: 'HeartHandshake',
    duration: 'Semana 4',
    benefits: [
      'O segredo para resistir aos "olhares de piedade" pedindo comida',
      'Como instruir toda a família a seguir o plano sem sabotagens ocultas',
      'Protocolo de manutenção: o que fazer após o pet atingir o peso dos sonhos',
      'Calendário de acompanhamento preventivo simples de seguir'
    ]
  }
];

export const differentialsData: DifferentialItem[] = [
  {
    id: 'diff1',
    title: 'Sem Remédios ou Fórmulas Caras',
    description: 'Foco total em hábitos naturais, alimentação inteligente e estímulo físico correto, sem remédios que agridem o organismo.',
    iconName: 'Sparkles'
  },
  {
    id: 'diff2',
    title: 'Resultados Visíveis e Saudáveis',
    description: 'Um emagrecimento gradual e seguro que preserva a massa muscular e devolve o brilho natural aos pelos do seu amigo.',
    iconName: 'TrendingUp'
  },
  {
    id: 'diff3',
    title: 'Fácil de Aplicar na Sua Rotina',
    description: 'Planejado para tutores reais que trabalham fora e têm pouco tempo. Mudanças sutis de hábitos com impacto gigante.',
    iconName: 'Clock'
  },
  {
    id: 'diff4',
    title: 'Método Validado e Amigável',
    description: 'Nada de passar fome! Seu pet continuará feliz, saciado e muito mais disposto a interagir com você.',
    iconName: 'CheckCircle'
  }
];

export const bonusesData: BonusItem[] = [
  {
    id: 'bon1',
    title: 'Guia Prático de Petiscos Saudáveis Caseiros',
    description: 'Receitas rápidas, baratas e deliciosas que você faz em minutos para mimar seu pet sem quebrar a dieta de emagrecimento.',
    originalValue: 47,
    iconName: 'Utensils'
  },
  {
    id: 'bon2',
    title: 'Planilha & Diário de Progresso PetLeve',
    description: 'A ferramenta visual para registrar o peso semanal, acompanhar a redução de medidas e comemorar cada grama perdida.',
    originalValue: 29,
    iconName: 'Calendar'
  },
  {
    id: 'bon3',
    title: 'Comunidade VIP de Tutores no Telegram',
    description: 'Participe do nosso grupo restrito de apoio mútuo, tire dúvidas com outros tutores dedicados e compartilhe fotos e histórias de superação.',
    originalValue: 59,
    iconName: 'Users'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test1',
    name: 'Juliana Mendes',
    petName: 'Luke',
    petType: 'Cão',
    petBreed: 'Golden Retriever',
    result: 'Eliminou 5.4 kg em 10 semanas',
    text: 'Eu me sentia muito culpada achando que o Luke estava gordinho por desleixo meu, mas o método me mostrou como agir de forma leve, sem fazê-lo sofrer. Hoje ele corre de novo como um filhote e as dores nas patas sumiram!',
    avatarColor: 'bg-amber-100 text-amber-800 border-amber-300',
    rating: 5
  },
  {
    id: 'test2',
    name: 'Marcos Silveira',
    petName: 'Mel',
    petType: 'Gato',
    petBreed: 'SRD (Vira-lata)',
    result: 'Eliminou 1.8 kg em 8 semanas',
    text: 'A Mel mal conseguia subir no sofá de tão pesada e passava o dia todo deitada no canto. Com as técnicas de estímulo e a nova porção de alimentação natural, ela recuperou a agilidade de antes. O melhor investimento que já fiz para a saúde dela!',
    avatarColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    rating: 5
  },
  {
    id: 'test3',
    name: 'Renata Costa',
    petName: 'Tobias',
    petType: 'Cão',
    petBreed: 'Pug',
    result: 'Eliminou 2.1 kg em 6 semanas',
    text: 'Os Pugs têm enorme tendência a engordar e sofrem com a respiração. Com o PetLeve, o Tobias emagreceu com segurança absoluta. A respiração dele melhorou 100% e ele parou de roncar tanto à noite. Recomendo muito!',
    avatarColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    rating: 5
  },
  {
    id: 'test4',
    name: 'Eduardo Lima',
    petName: 'Pipoca',
    petType: 'Cão',
    petBreed: 'Beagle',
    result: 'Eliminou 3.9 kg em 9 semanas',
    text: 'Beagle é conhecido por ser um saco sem fundo! O Pipoca comia tudo correndo e pedia mais com olhar triste. Com as táticas de enriquecimento alimentar do guia, ele parou de mendigar comida na mesa e está muito mais disposto nas corridas.',
    avatarColor: 'bg-sky-100 text-sky-800 border-sky-300',
    rating: 5
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq1',
    question: 'O método serve tanto para cães quanto para gatos?',
    answer: 'Sim, absolutamente! O PetLeve foi projetado considerando a biologia e comportamento específicos de cães e gatos. Ele traz seções exclusivas de alimentação, brincadeiras e enriquecimento ambiental adaptados para cada espécie de forma detalhada.'
  },
  {
    id: 'faq2',
    question: 'Meu pet já é idoso ou tem limitação de mobilidade. Ele pode fazer?',
    answer: 'Sim, o método é altamente seguro. Toda a parte física é focada em atividades de baixíssimo impacto e exercícios cognitivos (enriquecimento ambiental) que estimulam a queima calórica sem forçar as articulações ou sobrecarregar o coração. Porém, sempre sugerimos mostrar o guia ao seu veterinário de confiança.'
  },
  {
    id: 'faq3',
    question: 'Vou precisar gastar muito dinheiro com rações importadas ou remédios?',
    answer: 'De forma alguma! Nosso foco é a otimização inteligente do que você já tem. Ensinamos como fracionar a ração atual de forma científica, como introduzir alimentos naturais saudáveis, acessíveis e baratos que aumentam a saciedade, e como criar brinquedos interativos em casa gastando quase nada.'
  },
  {
    id: 'faq4',
    question: 'Em quanto tempo verei os primeiros resultados no meu pet?',
    answer: 'Logo na primeira semana você vai notar seu pet mais desperto, energético e com fezes mais reguladas. A perda de peso visível na balança e silhueta costuma se destacar a partir da terceira semana de aplicação constante do método.'
  },
  {
    id: 'faq5',
    question: 'Como recebo o produto? É seguro?',
    answer: 'O PetLeve é um infoproduto (guia digital completo com bônus). O acesso é 100% online e enviado de forma instantânea por e-mail logo após a confirmação do pagamento. Nossa plataforma de pagamentos é totalmente criptografada e segura, aceitando Pix e Cartão de Crédito.'
  },
  {
    id: 'faq6',
    question: 'Como funciona a garantia de satisfação?',
    answer: 'Oferecemos uma Garantia Incondicional de 7 dias. Você adquire o guia hoje, lê o conteúdo e começa a aplicar. Se em até 7 dias você sentir que o material não ajudou ou que o método não é para você, basta nos enviar um e-mail de suporte e reembolsamos 100% do seu valor pago de forma rápida.'
  }
];
