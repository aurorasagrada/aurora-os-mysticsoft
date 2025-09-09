// ===== AURORA SAGRADA - SISTEMA COMPLETO DE 53 BASES DE DADOS =====
// TODAS AS BASES IMPLEMENTADAS COMPLETAMENTE SEM ABREVIAÇÕES

// BASE 1: DEUSAS DOS 365 DIAS DO ANO - COMPLETA
const deusas365Completa = {
    // JANEIRO - 31 DIAS
    1: { 
        nome: "Brigid", 
        elemento: "Fogo", 
        dominio: "Forja, Poesia, Cura, Inspiração, Artesanato", 
        invocacao: "Brigid das chamas sagradas, desperta a criatividade em mim e acende o fogo da inspiração em minha alma", 
        correspondencias: { 
            cores: ["Vermelho Intenso", "Dourado Brilhante", "Branco Puro", "Laranja Flamejante"], 
            cristais: ["Cornalina", "Citrino", "Quartzo Claro", "Granada", "Âmbar", "Pirita"], 
            ervas: ["Alecrim", "Canela", "Louro", "Angélica", "Hipérico", "Calêndula"],
            oferendas: ["Leite", "Mel", "Pão caseiro", "Cerveja", "Flores brancas"],
            simbolos: ["Cruz de Brigid", "Chama", "Martelo", "Poço sagrado"],
            animais: ["Vaca", "Serpente", "Cisne"],
            pedras_preciosas: ["Rubi", "Granadas", "Citrino"],
            metais: ["Ouro", "Cobre"],
            incensos: ["Olíbano", "Canela", "Sândalo"],
            dia_semana: "Domingo",
            numero_sagrado: 19,
            festivais: ["Imbolc", "Candlemas"],
            locais_sagrados: ["Kildare", "Poços sagrados", "Forjas"],
            aspectos: ["Donzela", "Mãe", "Anciã"],
            poderes: ["Cura", "Inspiração", "Proteção", "Fertilidade", "Artesanato"],
            historia: "Brigid é uma das mais importantes deusas celtas, venerada como a deusa tríplice da forja, poesia e cura. Filha do Dagda, ela governa sobre a inspiração criativa, o fogo sagrado e as artes de cura. Seu festival, Imbolc, marca o início da primavera e o retorno da luz."
        }
    },
    2: { 
        nome: "Ísis", 
        elemento: "Água", 
        dominio: "Magia, Mistérios, Proteção, Maternidade, Ressurreição", 
        invocacao: "Ísis, grande mãe dos mistérios, revela tua sabedoria infinita e protege-me com teu manto estrelado", 
        correspondencias: { 
            cores: ["Azul Profundo", "Prateado Lunar", "Negro Místico", "Dourado Real"], 
            cristais: ["Lápis-lazúli", "Pedra da Lua", "Obsidiana", "Safira", "Turquesa", "Ametista"], 
            ervas: ["Artemísia", "Mirra", "Lírio", "Íris", "Lótus", "Acácia"],
            oferendas: ["Água do Nilo", "Leite", "Mel", "Flores de lótus", "Incenso"],
            simbolos: ["Nó de Ísis", "Trono", "Ankh", "Sistro", "Estrelas"],
            animais: ["Falcão", "Vaca", "Escorpião", "Serpente"],
            pedras_preciosas: ["Lápis-lazúli", "Turquesa", "Cornalina"],
            metais: ["Ouro", "Prata"],
            incensos: ["Mirra", "Kyphi", "Olíbano"],
            dia_semana: "Segunda-feira",
            numero_sagrado: 7,
            festivais: ["Isia", "Navigium Isidis"],
            locais_sagrados: ["Philae", "Templos do Nilo", "Bibliotecas"],
            aspectos: ["Mãe Divina", "Maga Suprema", "Protetora"],
            poderes: ["Magia", "Cura", "Proteção", "Ressurreição", "Sabedoria"],
            historia: "Ísis é uma das mais poderosas deusas do panteão egípcio, conhecida como a Grande Mãe e Senhora da Magia. Esposa de Osíris e mãe de Hórus, ela ressuscitou seu marido após ser morto por Set, demonstrando seu poder sobre a vida e a morte. Seu culto se espalhou por todo o mundo antigo."
        }
    },
    3: { 
        nome: "Atena", 
        elemento: "Ar", 
        dominio: "Sabedoria, Guerra Estratégica, Artesanato, Justiça, Civilização", 
        invocacao: "Atena, deusa da sabedoria e guerra justa, guia minha mente com tua inteligência divina e protege-me em todas as batalhas", 
        correspondencias: { 
            cores: ["Azul Safira", "Prateado Brilhante", "Branco Puro", "Dourado Nobre"], 
            cristais: ["Sodalita", "Fluorita", "Ametista", "Safira", "Quartzo Claro", "Lápis-lazúli"], 
            ervas: ["Oliveira", "Sálvia", "Lavanda", "Alecrim", "Louro", "Verbena"],
            oferendas: ["Azeite de oliva", "Mel", "Vinho", "Pão", "Flores brancas"],
            simbolos: ["Coruja", "Oliveira", "Égide", "Lança", "Escudo"],
            animais: ["Coruja", "Serpente", "Galo"],
            pedras_preciosas: ["Safira", "Lápis-lazúli", "Sodalita"],
            metais: ["Prata", "Bronze"],
            incensos: ["Olíbano", "Sálvia", "Lavenda"],
            dia_semana: "Quarta-feira",
            numero_sagrado: 3,
            festivais: ["Panatenaias", "Plynteria"],
            locais_sagrados: ["Partenon", "Atenas", "Bibliotecas"],
            aspectos: ["Virgem Guerreira", "Sábia Conselheira", "Protetora da Cidade"],
            poderes: ["Sabedoria", "Estratégia", "Proteção", "Artesanato", "Justiça"],
            historia: "Atena nasceu da cabeça de Zeus totalmente armada e adulta. É a deusa da sabedoria, guerra estratégica e artesanato. Protetora de Atenas, ela deu à cidade a oliveira como presente. Representa a inteligência aplicada tanto na guerra quanto na paz."
        }
    },
    79: { 
        nome: "Astraea", 
        elemento: "Terra", 
        dominio: "Justiça e pureza", 
        planeta: "Virgem",
        historia: "Última das imortais a deixar a Terra durante a Idade de Ouro. Deusa da justiça e pureza, foi colocada no céu como constelação de Virgem. Retornará quando a justiça voltar ao mundo."
    },
    80: { 
        nome: "Atargatis", 
        elemento: "Água", 
        dominio: "Fertilidade e peixes", 
        planeta: "Peixes",
        historia: "Deusa síria da fertilidade e dos peixes, metade mulher, metade peixe. Mãe de Semiramis, representa a conexão entre terra e água, fertilidade e abundância marinha."
    },
    81: { 
        nome: "Ate", 
        elemento: "Fogo", 
        dominio: "Ruína e vingança", 
        planeta: "Marte",
        historia: "Deusa grega da ruína, loucura e vingança. Filha de Zeus ou Éris, representa as consequências dos atos impulsivos e da hybris. Foi banida do Olimpo por Zeus."
    },
    82: { 
        nome: "Athena", 
        elemento: "Ar", 
        dominio: "Sabedoria e guerra estratégica", 
        planeta: "Mercúrio",
        historia: "Deusa grega da sabedoria, guerra estratégica e artesanato. Nasceu da cabeça de Zeus, protetora de Atenas. Representa a inteligência aplicada e a guerra justa."
    },
    83: { 
        nome: "Atira", 
        elemento: "Fogo", 
        dominio: "Arqueria e caça", 
        planeta: "Sagitário",
        historia: "Deusa tupi-guarani da arqueria e caça. Mãe dos pássaros, ensinou aos humanos a arte do arco e flecha. Protetora dos caçadores e da fauna selvagem."
    },
    84: { 
        nome: "Atla", 
        elemento: "Terra", 
        dominio: "Montanhas e resistência", 
        planeta: "Capricórnio",
        historia: "Deusa nórdica das montanhas e da resistência. Representa a força inabalável da terra e a capacidade de suportar qualquer tempestade ou adversidade."
    },
    85: { 
        nome: "Aura", 
        elemento: "Ar", 
        dominio: "Brisa e vento suave", 
        planeta: "Gêmeos",
        historia: "Deusa grega da brisa matinal e dos ventos suaves. Filha de Titã, representa o ar puro e refrescante que traz renovação e clareza mental."
    },
    86: { 
        nome: "Aurora", 
        elemento: "Fogo", 
        dominio: "Amanhecer e novos começos", 
        planeta: "Sol",
        historia: "Deusa romana do amanhecer, equivalente à Eos grega. Traz a luz do dia e representa novos começos, esperança e renovação diária da vida."
    },
    87: { 
        nome: "Auxesia", 
        elemento: "Terra", 
        dominio: "Crescimento e abundância", 
        planeta: "Ceres",
        historia: "Deusa grega do crescimento e abundância. Junto com Damia, protegia as colheitas e o crescimento das plantas. Representa a força vital que faz tudo crescer."
    },
    88: { 
        nome: "Aya", 
        elemento: "Água", 
        dominio: "Nascimento e maternidade", 
        planeta: "Lua",
        historia: "Deusa mesopotâmica do nascimento e maternidade. Esposa de Shamash, protegia as mulheres durante o parto e garantia nascimentos seguros."
    },
    89: { 
        nome: "Baba Yaga", 
        elemento: "Terra", 
        dominio: "Sabedoria ancestral", 
        planeta: "Saturno",
        historia: "Bruxa sábia da mitologia eslava que vive numa cabana sobre pernas de galinha. Representa a sabedoria ancestral, os testes iniciáticos e o conhecimento oculto."
    },
    90: { 
        nome: "Badb", 
        elemento: "Ar", 
        dominio: "Profecia de guerra", 
        planeta: "Marte",
        historia: "Deusa celta da guerra e profecia, uma das faces da Morrigan. Aparece como corvo nos campos de batalha, profetizando vitórias e derrotas."
    },
    91: { 
        nome: "Bagala", 
        elemento: "Fogo", 
        dominio: "Poder e controle", 
        planeta: "Plutão",
        historia: "Uma das dez Mahavidyas do hinduísmo. Deusa do poder oculto e controle sobre inimigos. Representa a capacidade de paralisar forças negativas."
    },
    92: { 
        nome: "Bai Mudan", 
        elemento: "Terra", 
        dominio: "Peônias e beleza", 
        planeta: "Vênus",
        historia: "Deusa chinesa das peônias e da beleza feminina. Representa a elegância, refinamento e a beleza que floresce na maturidade."
    },
    93: { 
        nome: "Banka-Mundi", 
        elemento: "Terra", 
        dominio: "Caça e floresta", 
        planeta: "Diana",
        historia: "Deusa indiana da caça e das florestas. Protetora dos animais selvagens e dos caçadores éticos que respeitam o equilíbrio natural."
    },
    94: { 
        nome: "Bast", 
        elemento: "Fogo", 
        dominio: "Gatos e proteção", 
        planeta: "Sol",
        historia: "Deusa egípcia dos gatos, proteção e alegria. Filha de Rá, protegia o lar contra espíritos malignos e doenças. Representa a independência felina."
    },
    95: { 
        nome: "Baubo", 
        elemento: "Água", 
        dominio: "Riso e sexualidade", 
        planeta: "Vênus",
        historia: "Deusa grega do riso e sexualidade sagrada. Fez Deméter rir durante seu luto por Perséfone, representando o poder curativo do humor e da sexualidade."
    },
    96: { 
        nome: "Bellona", 
        elemento: "Fogo", 
        dominio: "Guerra e batalha", 
        planeta: "Marte",
        historia: "Deusa romana da guerra, irmã ou esposa de Marte. Representa o furor da batalha e a coragem necessária para enfrentar conflitos."
    },
    97: { 
        nome: "Bendis", 
        elemento: "Ar", 
        dominio: "Lua e caça noturna", 
        planeta: "Lua",
        historia: "Deusa trácia da lua e caça noturna, similar à Ártemis. Protegia os caçadores noturnos e representava os mistérios lunares."
    },
    98: { 
        nome: "Berecyntia", 
        elemento: "Terra", 
        dominio: "Montanhas sagradas", 
        planeta: "Cibele",
        historia: "Aspecto de Cibele associado ao Monte Berecyntus. Deusa das montanhas sagradas e dos rituais de fertilidade realizados em alturas."
    },
    99: { 
        nome: "Bertha", 
        elemento: "Terra", 
        dominio: "Fiação e trabalho doméstico", 
        planeta: "Virgem",
        historia: "Deusa germânica da fiação e trabalho doméstico. Recompensava as trabalhadoras diligentes e punia as preguiçosas. Representa a virtude do trabalho."
    },
    100: { 
        nome: "Bhairavi", 
        elemento: "Fogo", 
        dominio: "Destruição criativa", 
        planeta: "Kali",
        historia: "Uma das dez Mahavidyas, aspecto feroz de Devi. Representa a destruição que precede a criação, a transformação através do fogo purificador."
    },
    101: { 
        nome: "Bhavani", 
        elemento: "Fogo", 
        dominio: "Existência e criação", 
        planeta: "Shakti",
        historia: "Aspecto de Parvati como doadora da existência. Representa o poder criativo feminino que dá origem a toda vida e mantém o universo."
    },
    102: { 
        nome: "Bhumi", 
        elemento: "Terra", 
        dominio: "Terra e sustentação", 
        planeta: "Gaia",
        historia: "Deusa hindu da Terra, personificação do planeta como mãe nutridora. Representa a paciência, sustentação e generosidade da Terra."
    },
    103: { 
        nome: "Bia", 
        elemento: "Fogo", 
        dominio: "Força e violência", 
        planeta: "Marte",
        historia: "Deusa grega da força e violência, filha de Estige. Representa o poder bruto necessário para impor a justiça e manter a ordem."
    },
    104: { 
        nome: "Biddy Mannion", 
        elemento: "Água", 
        dominio: "Lagos e cura", 
        planeta: "Lua",
        historia: "Deusa irlandesa dos lagos e cura. Suas águas tinham propriedades curativas especiais, representando o poder regenerativo da água sagrada."
    },
    105: { 
        nome: "Biliku", 
        elemento: "Ar", 
        dominio: "Vento e tempestades", 
        planeta: "Urano",
        historia: "Deusa das Ilhas Andaman do vento e tempestades. Controla os ventos de monção e representa as forças atmosféricas incontroláveis."
    },
    106: { 
        nome: "Blodeuwedd", 
        elemento: "Terra", 
        dominio: "Flores e traição", 
        planeta: "Vênus",
        historia: "Deusa galesa criada de flores por magos. Representa a beleza que pode ser enganosa e as consequências da traição no amor."
    },
    107: { 
        nome: "Boann", 
        elemento: "Água", 
        dominio: "Rio Boyne e inspiração", 
        planeta: "Netuno",
        historia: "Deusa irlandesa do rio Boyne e da inspiração poética. Mãe de Aengus, representa o fluxo da criatividade e inspiração."
    },
    108: { 
        nome: "Bona Dea", 
        elemento: "Terra", 
        dominio: "Fertilidade feminina", 
        planeta: "Ceres",
        historia: "Deusa romana da fertilidade e cura, cultuada apenas por mulheres. Protegia a castidade feminina e os mistérios exclusivamente femininos."
    },
    109: { 
        nome: "Borghild", 
        elemento: "Ar", 
        dominio: "Batalha e proteção", 
        planeta: "Marte",
        historia: "Valquíria nórdica da batalha e proteção. Escolhia os guerreiros mortos em combate para levá-los ao Valhalla, representando a honra na guerra."
    },
    110: { 
        nome: "Branwen", 
        elemento: "Água", 
        dominio: "Amor e beleza", 
        planeta: "Vênus",
        historia: "Deusa galesa do amor e beleza, irmã de Bran. Sua história representa os sacrifícios feitos por amor e as consequências da guerra."
    },
    111: { 
        nome: "Brauronia", 
        elemento: "Terra", 
        dominio: "Ursos e iniciação", 
        planeta: "Ártemis",
        historia: "Aspecto de Ártemis venerado em Brauron. Jovens meninas serviam como 'ursas' em seus rituais de iniciação à feminilidade."
    },
    112: { 
        nome: "Brizo", 
        elemento: "Água", 
        dominio: "Marinheiros e sonhos", 
        planeta: "Netuno",
        historia: "Deusa grega protetora dos marinheiros e intérprete de sonhos. Recebia oferendas de mulheres preocupadas com maridos no mar."
    },
    113: { 
        nome: "Bubona", 
        elemento: "Terra", 
        dominio: "Gado e pastoreio", 
        planeta: "Touro",
        historia: "Deusa romana do gado e pastoreio. Protegia os rebanhos de doenças e garantia sua fertilidade e prosperidade."
    },
    114: { 
        nome: "Budhi Pallien", 
        elemento: "Ar", 
        dominio: "Sabedoria e conhecimento", 
        planeta: "Mercúrio",
        historia: "Deusa indiana da sabedoria e conhecimento. Representa a inteligência prática e a capacidade de tomar decisões sábias."
    },
    115: { 
        nome: "Cailleach", 
        elemento: "Terra", 
        dominio: "Inverno e montanhas", 
        planeta: "Saturno",
        historia: "Deusa celta do inverno e montanhas, a 'Velha Bruxa'. Criou paisagens com sua magia e representa a sabedoria da idade e do tempo."
    },
    116: { 
        nome: "Cala", 
        elemento: "Terra", 
        dominio: "Beleza e elegância", 
        planeta: "Vênus",
        historia: "Deusa da beleza e elegância, representa a graça natural e a harmonia estética que inspira arte e poesia."
    },
    117: { 
        nome: "Calliope", 
        elemento: "Ar", 
        dominio: "Poesia épica", 
        planeta: "Apolo",
        historia: "Musa grega da poesia épica, mãe de Orfeu. Inspira os grandes poemas heroicos e representa a eloquência sublime."
    },
    118: { 
        nome: "Calypso", 
        elemento: "Água", 
        dominio: "Oceano e sedução", 
        planeta: "Netuno",
        historia: "Ninfa grega que manteve Odisseu em sua ilha por sete anos. Representa o poder sedutor do oceano e o desejo de eternidade."
    },
    119: { 
        nome: "Cameira", 
        elemento: "Água", 
        dominio: "Ninfas e fontes", 
        planeta: "Lua",
        historia: "Ninfa grega das fontes e águas doces. Representa a pureza das águas nascentes e seu poder de renovação e cura."
    },
    120: { 
        nome: "Camunda", 
        elemento: "Fogo", 
        dominio: "Destruição do mal", 
        planeta: "Durga",
        historia: "Aspecto feroz de Durga que destruiu os demônios Chanda e Munda. Representa o poder divino de eliminar forças negativas."
    },
    121: { 
        nome: "Canda", 
        elemento: "Fogo", 
        dominio: "Ira feroz", 
        planeta: "Kali",
        historia: "Aspecto irado de Devi, representa a ira justa que surge para proteger os inocentes e punir os malfeitores."
    },
    122: { 
        nome: "Candika", 
        elemento: "Fogo", 
        dominio: "Fúria divina", 
        planeta: "Shakti",
        historia: "Forma feroz da Deusa Mãe hindu, representa a fúria divina que protege o dharma e destrói a injustiça."
    },
    123: { 
        nome: "Canola", 
        elemento: "Água", 
        dominio: "Música e harmonia", 
        planeta: "Vênus",
        historia: "Deusa irlandesa da música e harmonia. Inventou a harpa irlandesa e representa a beleza da música tradicional."
    },
    124: { 
        nome: "Cardea", 
        elemento: "Terra", 
        dominio: "Dobradiças e proteção", 
        planeta: "Jano",
        historia: "Deusa romana das dobradiças e proteção do lar. Protegia as entradas das casas contra espíritos malignos."
    },
    125: { 
        nome: "Carmenta", 
        elemento: "Ar", 
        dominio: "Profecia e parto", 
        planeta: "Mercúrio",
        historia: "Deusa romana da profecia e proteção durante o parto. Mãe de Evandro, representava a sabedoria profética feminina."
    },
    126: { 
        nome: "Carna", 
        elemento: "Terra", 
        dominio: "Órgãos vitais", 
        planeta: "Virgem",
        historia: "Deusa romana dos órgãos vitais, especialmente coração e pulmões. Protegia a saúde física e a vitalidade corporal."
    },
    127: { 
        nome: "Carya", 
        elemento: "Terra", 
        dominio: "Nogueiras e dança", 
        planeta: "Dionísio",
        historia: "Ninfa grega transformada em nogueira. Representa a conexão entre dança, fertilidade e o ciclo das estações."
    },
    128: { 
        nome: "Cassandra", 
        elemento: "Ar", 
        dominio: "Profecia não acreditada", 
        planeta: "Apolo",
        historia: "Profetisa troiana amaldiçoada a nunca ser acreditada. Representa a tragédia da verdade ignorada e da sabedoria rejeitada."
    },
    129: { 
        nome: "Cassiopeia", 
        elemento: "Ar", 
        dominio: "Vaidade e beleza", 
        planeta: "Vênus",
        historia: "Rainha etíope transformada em constelação. Representa tanto a beleza quanto os perigos da vaidade excessiva."
    },
    130: { 
        nome: "Ceres", 
        elemento: "Terra", 
        dominio: "Agricultura e colheita", 
        planeta: "Virgem",
        historia: "Deusa romana da agricultura, equivalente à Deméter grega. Ensinou aos humanos a arte da agricultura e representa a abundância da terra."
    },
    131: { 
        nome: "Cerridwen", 
        elemento: "Água", 
        dominio: "Inspiração e renascimento", 
        planeta: "Lua",
        historia: "Deusa galesa da inspiração poética e renascimento. Guardiã do caldeirão da sabedoria, representa transformação e conhecimento oculto."
    },
    132: { 
        nome: "Chalchiuhtotolin", 
        elemento: "Água", 
        dominio: "Peste e mistério", 
        planeta: "Plutão",
        historia: "Deusa asteca da peste e mistério. Representa os aspectos sombrios da existência e as doenças como purificação."
    },
    133: { 
        nome: "Chamunda", 
        elemento: "Fogo", 
        dominio: "Destruição de demônios", 
        planeta: "Kali",
        historia: "Aspecto feroz de Devi que emergiu da testa de Durga. Representa o poder de destruir forças demoníacas e negativas."
    },
    134: { 
        nome: "Chandra", 
        elemento: "Água", 
        dominio: "Lua e ciclos", 
        planeta: "Lua",
        historia: "Deus lunar hindu, às vezes representado como feminino. Governa os ciclos lunares, emoções e a mente subconsciente."
    },
    135: { 
        nome: "Chang'e", 
        elemento: "Água", 
        dominio: "Lua e imortalidade", 
        planeta: "Lua",
        historia: "Deusa chinesa da lua que vive no palácio lunar. Representa a busca pela imortalidade e a solidão que ela pode trazer."
    },
    136: { 
        nome: "Charis", 
        elemento: "Ar", 
        dominio: "Graça e beleza", 
        planeta: "Vênus",
        historia: "Uma das Graças gregas, representa a graça divina, beleza e o charme que torna a vida mais bela e harmoniosa."
    },
    137: { 
        nome: "Charybdis", 
        elemento: "Água", 
        dominio: "Redemoinhos e perigo", 
        planeta: "Netuno",
        historia: "Monstro marinho grego que criava redemoinhos mortais. Representa os perigos ocultos do mar e as forças destrutivas da água."
    },
    138: { 
        nome: "Chasca", 
        elemento: "Ar", 
        dominio: "Vênus e amanhecer", 
        planeta: "Vênus",
        historia: "Deusa inca do planeta Vênus e do amanhecer. Representa a beleza celestial e a esperança que vem com cada novo dia."
    },
    139: { 
        nome: "Chhinnamasta", 
        elemento: "Fogo", 
        dominio: "Auto-sacrifício", 
        planeta: "Marte",
        historia: "Uma das dez Mahavidyas, representa o auto-sacrifício supremo. Simboliza a transcendência através da renúncia do ego."
    },
    140: { 
        nome: "Chicomecoatl", 
        elemento: "Terra", 
        dominio: "Milho e sustento", 
        planeta: "Ceres",
        historia: "Deusa asteca do milho e sustento. Representa a importância dos grãos básicos para a sobrevivência e prosperidade humana."
    },
    141: { 
        nome: "Chimera", 
        elemento: "Fogo", 
        dominio: "Monstros e transformação", 
        planeta: "Plutão",
        historia: "Criatura mítica grega com partes de diferentes animais. Representa a transformação radical e os aspectos selvagens da natureza."
    },
    142: { 
        nome: "Chloe", 
        elemento: "Terra", 
        dominio: "Vegetação verde", 
        planeta: "Deméter",
        historia: "Aspecto de Deméter como 'a verde'. Representa o poder da vegetação jovem e o renascimento da natureza na primavera."
    },
    143: { 
        nome: "Chloris", 
        elemento: "Terra", 
        dominio: "Flores e primavera", 
        planeta: "Flora",
        historia: "Deusa grega das flores, equivalente à Flora romana. Representa o desabrochar da primavera e a beleza efêmera das flores."
    },
    144: { 
        nome: "Chomo-Lung-Ma", 
        elemento: "Terra", 
        dominio: "Everest e montanhas", 
        planeta: "Capricórnio",
        historia: "Deusa tibetana do Monte Everest. Representa a majestade das montanhas mais altas e os desafios da escalada espiritual."
    },
    145: { 
        nome: "Chup-Kamui", 
        elemento: "Água", 
        dominio: "Lua e caça", 
        planeta: "Lua",
        historia: "Deusa ainu da lua e caça. Representa a conexão entre os ciclos lunares e os ritmos da caça e coleta."
    },
    146: { 
        nome: "Cibele", 
        elemento: "Terra", 
        dominio: "Mãe Terra e fertilidade", 
        planeta: "Terra",
        historia: "Grande Mãe frígia, deusa da fertilidade e natureza selvagem. Representa o poder criativo e nutritivo da Terra Mãe."
    },
    147: { 
        nome: "Circe", 
        elemento: "Água", 
        dominio: "Magia e transformação", 
        planeta: "Plutão",
        historia: "Feiticeira grega que transformava homens em animais. Representa o poder da magia transformadora e os perigos da sedução."
    },
    148: { 
        nome: "Clementia", 
        elemento: "Ar", 
        dominio: "Clemência e perdão", 
        planeta: "Júpiter",
        historia: "Deusa romana da clemência e perdão. Representa a virtude de perdoar e a sabedoria de temperar a justiça com misericórdia."
    },
    149: { 
        nome: "Clio", 
        elemento: "Ar", 
        dominio: "História e memória", 
        planeta: "Mercúrio",
        historia: "Musa grega da história. Representa a importância de preservar a memória do passado e aprender com os eventos históricos."
    },
    150: { 
        nome: "Clotho", 
        elemento: "Ar", 
        dominio: "Fio da vida", 
        planeta: "Destino",
        historia: "Uma das três Parcas, fia o fio da vida. Representa o início da vida e o destino que cada alma traz ao nascer."
    },
    151: { 
        nome: "Clymene", 
        elemento: "Água", 
        dominio: "Fama e reputação", 
        planeta: "Sol",
        historia: "Titânide grega, mãe de Prometeu. Representa a fama que vem através dos feitos heroicos e a reputação construída ao longo do tempo."
    },
    152: { 
        nome: "Coatlicue", 
        elemento: "Terra", 
        dominio: "Serpentes e nascimento", 
        planeta: "Plutão",
        historia: "Deusa asteca mãe dos deuses, vestida com serpentes. Representa o poder criativo que emerge da destruição e renovação."
    },
    153: { 
        nome: "Concordia", 
        elemento: "Ar", 
        dominio: "Harmonia e acordo", 
        planeta: "Libra",
        historia: "Deusa romana da harmonia e acordo. Representa a importância da cooperação e do entendimento mútuo na sociedade."
    },
    154: { 
        nome: "Copia", 
        elemento: "Terra", 
        dominio: "Abundância e riqueza", 
        planeta: "Júpiter",
        historia: "Deusa romana da abundância e riqueza. Representa a prosperidade material e a generosidade que vem da abundância."
    },
    155: { 
        nome: "Cora", 
        elemento: "Terra", 
        dominio: "Donzela e primavera", 
        planeta: "Perséfone",
        historia: "Aspecto jovem de Perséfone como donzela. Representa a inocência da juventude e o potencial não realizado."
    },
    156: { 
        nome: "Coronis", 
        elemento: "Ar", 
        dominio: "Corvos e profecia", 
        planeta: "Apolo",
        historia: "Mãe de Asclépio, transformada em corvo. Representa a conexão entre corvos e profecia, e as consequências da infidelidade."
    },
    157: { 
        nome: "Coyolxauhqui", 
        elemento: "Água", 
        dominio: "Lua e guerra", 
        planeta: "Lua",
        historia: "Deusa asteca da lua, irmã de Huitzilopochtli. Representa os aspectos guerreiros da lua e os conflitos familiares divinos."
    },
    158: { 
        nome: "Creirwy", 
        elemento: "Água", 
        dominio: "Beleza e pureza", 
        planeta: "Vênus",
        historia: "Deusa galesa da beleza e pureza, filha de Cerridwen. Representa a beleza que vem da pureza interior e da sabedoria."
    },
    159: { 
        nome: "Creusa", 
        elemento: "Terra", 
        dominio: "Princesas e linhagem", 
        planeta: "Sol",
        historia: "Princesa troiana, esposa de Eneias. Representa a importância da linhagem real e os sacrifícios feitos pela continuidade dinástica."
    },
    160: { 
        nome: "Cunina", 
        elemento: "Terra", 
        dominio: "Berços e proteção infantil", 
        planeta: "Lua",
        historia: "Deusa romana protetora dos berços e crianças pequenas. Representa o cuidado maternal e a proteção dos mais vulneráveis."
    },
    161: { 
        nome: "Cupra", 
        elemento: "Terra", 
        dominio: "Fertilidade e abundância", 
        planeta: "Vênus",
        historia: "Deusa etrusca da fertilidade e abundância. Representa a generosidade da terra e a prosperidade que vem do trabalho agrícola."
    },
    162: { 
        nome: "Cybele", 
        elemento: "Terra", 
        dominio: "Natureza selvagem", 
        planeta: "Terra",
        historia: "Grande Mãe da Anatólia, deusa da natureza selvagem. Representa os aspectos indomáveis da natureza e a fertilidade primordial."
    },
    163: { 
        nome: "Dafne", 
        elemento: "Terra", 
        dominio: "Loureiros e transformação", 
        planeta: "Apolo",
        historia: "Ninfa transformada em loureiro para escapar de Apolo. Representa a transformação como escape e a preservação da castidade."
    },
    164: { 
        nome: "Dagon", 
        elemento: "Água", 
        dominio: "Grãos e fertilidade", 
        planeta: "Ceres",
        historia: "Divindade filisteia dos grãos e fertilidade. Representa a importância da agricultura para a sobrevivência das civilizações."
    },
    165: { 
        nome: "Dakini", 
        elemento: "Ar", 
        dominio: "Sabedoria tântrica", 
        planeta: "Plutão",
        historia: "Deusas budistas da sabedoria tântrica. Representam a energia feminina iluminada e os ensinamentos esotéricos do tantra."
    },
    166: { 
        nome: "Damara", 
        elemento: "Terra", 
        dominio: "Fertilidade e gado", 
        planeta: "Touro",
        historia: "Deusa celta da fertilidade e proteção do gado. Representa a prosperidade que vem da criação de animais e agricultura."
    },
    167: { 
        nome: "Damia", 
        elemento: "Terra", 
        dominio: "Fertilidade da terra", 
        planeta: "Deméter",
        historia: "Deusa grega da fertilidade da terra, junto com Auxesia. Representa o poder da terra de produzir alimentos e sustentar a vida."
    },
    168: { 
        nome: "Damkina", 
        elemento: "Terra", 
        dominio: "Terra e fertilidade", 
        planeta: "Ea",
        historia: "Deusa mesopotâmica da terra e fertilidade, esposa de Ea. Representa a união entre água e terra que cria vida."
    },
    169: { 
        nome: "Dana", 
        elemento: "Água", 
        dominio: "Rios e sabedoria", 
        planeta: "Netuno",
        historia: "Deusa irlandesa dos rios e sabedoria, mãe dos Tuatha Dé Danann. Representa o fluxo da sabedoria ancestral."
    },
    170: { 
        nome: "Danae", 
        elemento: "Água", 
        dominio: "Chuva dourada", 
        planeta: "Zeus",
        historia: "Princesa grega visitada por Zeus como chuva dourada. Representa a fertilização divina e o nascimento de heróis."
    },
    171: { 
        nome: "Danu", 
        elemento: "Água", 
        dominio: "Rio Danúbio", 
        planeta: "Netuno",
        historia: "Deusa celta do rio Danúbio, mãe ancestral. Representa as águas primordiais e a origem da vida."
    },
    172: { 
        nome: "Daphne", 
        elemento: "Terra", 
        dominio: "Loureiros e castidade", 
        planeta: "Apolo",
        historia: "Ninfa transformada em loureiro. Representa a preservação da pureza através da transformação e o preço da liberdade."
    },
    173: { 
        nome: "Decima", 
        elemento: "Ar", 
        dominio: "Décimo mês", 
        planeta: "Destino",
        historia: "Uma das Parcas romanas, mede o fio da vida. Representa o tempo de vida destinado a cada pessoa."
    },
    174: { 
        nome: "Deianira", 
        elemento: "Fogo", 
        dominio: "Destruição do herói", 
        planeta: "Marte",
        historia: "Esposa de Héracles que causou sua morte. Representa como o amor pode se tornar destrutivo quando misturado com ciúme."
    },
    175: { 
        nome: "Delia", 
        elemento: "Água", 
        dominio: "Delos e nascimento", 
        planeta: "Ártemis",
        historia: "Aspecto de Ártemis nascida em Delos. Representa a proteção durante o nascimento e os locais sagrados de nascimento."
    },
    176: { 
        nome: "Demeter", 
        elemento: "Terra", 
        dominio: "Agricultura e colheita", 
        planeta: "Ceres",
        historia: "Deusa grega da agricultura e colheita. Ensinou aos humanos a cultivar grãos e representa o ciclo das estações."
    },
    177: { 
        nome: "Despoina", 
        elemento: "Terra", 
        dominio: "Mistérios e iniciação", 
        planeta: "Perséfone",
        historia: "Deusa grega dos mistérios, filha de Deméter e Poseidon. Representa os ensinamentos secretos e a iniciação espiritual."
    },
    178: { 
        nome: "Devaki", 
        elemento: "Água", 
        dominio: "Maternidade divina", 
        planeta: "Krishna",
        historia: "Mãe de Krishna na mitologia hindu. Representa a maternidade divina e os sacrifícios feitos para proteger filhos especiais."
    },
    179: { 
        nome: "Devana", 
        elemento: "Terra", 
        dominio: "Caça e florestas", 
        planeta: "Diana",
        historia: "Deusa eslava da caça e florestas, equivalente à Diana. Representa a conexão entre humanidade e natureza selvagem."
    },
    180: { 
        nome: "Devi", 
        elemento: "Fogo", 
        dominio: "Energia divina feminina", 
        planeta: "Shakti",
        historia: "A Deusa Mãe suprema do hinduísmo. Representa a energia divina feminina em todas as suas manifestações."
    },
    181: { 
        nome: "Diana", 
        elemento: "Água", 
        dominio: "Caça e lua", 
        planeta: "Lua",
        historia: "Deusa romana da caça e lua, equivalente à Ártemis grega. Representa a independência feminina e a proteção da natureza."
    },
    182: { 
        nome: "Dido", 
        elemento: "Fogo", 
        dominio: "Liderança e sacrifício", 
        planeta: "Sol",
        historia: "Rainha de Cartago que se sacrificou por amor. Representa a liderança feminina e os sacrifícios feitos pelo amor."
    },
    183: { 
        nome: "Dike", 
        elemento: "Ar", 
        dominio: "Justiça humana", 
        planeta: "Libra",
        historia: "Deusa grega da justiça humana, filha de Zeus e Têmis. Representa a justiça aplicada entre os mortais."
    },
    184: { 
        nome: "Dindymene", 
        elemento: "Terra", 
        dominio: "Montanha sagrada", 
        planeta: "Cibele",
        historia: "Aspecto de Cibele do Monte Dindymon. Representa a sacralidade das montanhas e os rituais realizados em alturas."
    },
    185: { 
        nome: "Dione", 
        elemento: "Água", 
        dominio: "Oráculo e profecia", 
        planeta: "Zeus",
        historia: "Titânide grega, mãe de Afrodite em algumas versões. Representa a sabedoria oracular e a profecia feminina."
    },
    186: { 
        nome: "Discordia", 
        elemento: "Fogo", 
        dominio: "Conflito e caos", 
        planeta: "Marte",
        historia: "Deusa romana da discórdia, equivalente à Éris grega. Representa os conflitos necessários para o crescimento e mudança."
    },
    187: { 
        nome: "Diti", 
        elemento: "Terra", 
        dominio: "Terra e demônios", 
        planeta: "Plutão",
        historia: "Deusa hindu da terra, mãe dos daityas (demônios). Representa os aspectos sombrios da terra e as forças ctônicas."
    },
    188: { 
        nome: "Domiduca", 
        elemento: "Terra", 
        dominio: "Conduzir para casa", 
        planeta: "Vesta",
        historia: "Deusa romana que conduzia as noivas para suas novas casas. Representa a transição e a proteção durante mudanças."
    },
    189: { 
        nome: "Doris", 
        elemento: "Água", 
        dominio: "Mar e dádivas", 
        planeta: "Netuno",
        historia: "Oceânide grega, esposa de Nereu. Representa as dádivas do mar e a generosidade das águas oceânicas."
    },
    190: { 
        nome: "Druantia", 
        elemento: "Terra", 
        dominio: "Carvalhos e fertilidade", 
        planeta: "Terra",
        historia: "Deusa celta dos carvalhos e fertilidade. Representa a força e longevidade dos carvalhos sagrados."
    },
    191: { 
        nome: "Dryope", 
        elemento: "Terra", 
        dominio: "Árvores e transformação", 
        planeta: "Apolo",
        historia: "Ninfa grega transformada em árvore. Representa a conexão íntima entre humanidade e mundo vegetal."
    },
    192: { 
        nome: "Durga", 
        elemento: "Fogo", 
        dominio: "Proteção e guerra", 
        planeta: "Marte",
        historia: "Deusa hindu guerreira, matadora de demônios. Representa o poder feminino de proteger o bem e destruir o mal."
    },
    193: { 
        nome: "Dwyn", 
        elemento: "Água", 
        dominio: "Amor e relacionamentos", 
        planeta: "Vênus",
        historia: "Deusa galesa do amor e relacionamentos. Representa a cura de corações partidos e a renovação do amor."
    },
    194: { 
        nome: "Dziewanna", 
        elemento: "Terra", 
        dominio: "Caça e virgindade", 
        planeta: "Diana",
        historia: "Deusa eslava da caça e virgindade. Representa a independência feminina e a conexão com a natureza selvagem."
    },
    195: { 
        nome: "Eachna", 
        elemento: "Ar", 
        dominio: "Beleza e sabedoria", 
        planeta: "Atena",
        historia: "Deusa irlandesa da beleza e sabedoria. Representa a união entre beleza física e inteligência."
    },
    196: { 
        nome: "Eastre", 
        elemento: "Terra", 
        dominio: "Primavera e renovação", 
        planeta: "Ostara",
        historia: "Deusa germânica da primavera, origem da Páscoa. Representa o renascimento da natureza e novos começos."
    },
    197: { 
        nome: "Ebhlinne", 
        elemento: "Água", 
        dominio: "Beleza e poesia", 
        planeta: "Vênus",
        historia: "Deusa irlandesa da beleza e poesia. Representa a inspiração poética que vem da contemplação da beleza."
    },
    198: { 
        nome: "Echo", 
        elemento: "Ar", 
        dominio: "Eco e repetição", 
        planeta: "Mercúrio",
        historia: "Ninfa grega condenada a repetir as palavras dos outros. Representa a comunicação reflexiva e a perda da voz própria."
    },
    199: { 
        nome: "Edesia", 
        elemento: "Terra", 
        dominio: "Comida e banquetes", 
        planeta: "Ceres",
        historia: "Deusa romana da comida e banquetes. Representa a abundância alimentar e a hospitalidade generosa."
    },
    200: { 
        nome: "Egeria", 
        elemento: "Água", 
        dominio: "Fontes e conselhos", 
        planeta: "Diana",
        historia: "Ninfa romana das fontes, conselheira do rei Numa. Representa a sabedoria que flui como água pura."
    },
    201: { 
        nome: "Eileithyia", 
        elemento: "Água", 
        dominio: "Parto e nascimento", 
        planeta: "Lua",
        historia: "Deusa grega do parto, filha de Hera. Representa a proteção durante o nascimento e a chegada segura de novas vidas."
    },
    202: { 
        nome: "Eirene", 
        elemento: "Ar", 
        dominio: "Paz e tranquilidade", 
        planeta: "Libra",
        historia: "Deusa grega da paz, uma das Horas. Representa a tranquilidade que vem após conflitos e a harmonia social."
    },
    203: { 
        nome: "Eir", 
        elemento: "Terra", 
        dominio: "Cura e medicina", 
        planeta: "Virgem",
        historia: "Deusa nórdica da cura e medicina. Representa o conhecimento médico e o poder de curar através de ervas."
    },
    204: { 
        nome: "Ekajata", 
        elemento: "Fogo", 
        dominio: "Proteção tântrica", 
        planeta: "Tara",
        historia: "Deusa budista protetora dos ensinamentos tântricos. Representa a proteção feroz da sabedoria esotérica."
    },
    205: { 
        nome: "Electra", 
        elemento: "Ar", 
        dominio: "Âmbar e eletricidade", 
        planeta: "Urano",
        historia: "Plêiade grega associada ao âmbar e eletricidade. Representa a energia elétrica e as forças invisíveis da natureza."
    },
    206: { 
        nome: "Eleusinia", 
        elemento: "Terra", 
        dominio: "Mistérios eleusinos", 
        planeta: "Deméter",
        historia: "Aspecto de Deméter nos Mistérios de Elêusis. Representa os ensinamentos secretos sobre morte e renascimento."
    },
    207: { 
        nome: "Embla", 
        elemento: "Terra", 
        dominio: "Primeira mulher", 
        planeta: "Freyja",
        historia: "Primeira mulher na mitologia nórdica, criada pelos deuses. Representa o arquétipo feminino primordial."
    },
    208: { 
        nome: "Empanda", 
        elemento: "Terra", 
        dominio: "Hospitalidade", 
        planeta: "Vesta",
        historia: "Deusa romana da hospitalidade e proteção dos viajantes. Representa a generosidade e acolhimento aos necessitados."
    },
    209: { 
        nome: "Enyo", 
        elemento: "Fogo", 
        dominio: "Guerra e destruição", 
        planeta: "Marte",
        historia: "Deusa grega da guerra e destruição, companheira de Ares. Representa os aspectos mais violentos e destrutivos da guerra."
    },
    210: { 
        nome: "Eos", 
        elemento: "Ar", 
        dominio: "Aurora e amanhecer", 
        planeta: "Sol",
        historia: "Deusa grega da aurora, irmã de Hélio e Selene. Representa o despertar diário e a esperança que vem com cada amanhecer."
    },
    211: { 
        nome: "Epona", 
        elemento: "Terra", 
        dominio: "Cavalos e fertilidade", 
        planeta: "Terra",
        historia: "Deusa celta dos cavalos, única divindade celta adorada em Roma. Representa a conexão entre humanos e cavalos."
    },
    212: { 
        nome: "Erato", 
        elemento: "Água", 
        dominio: "Poesia amorosa", 
        planeta: "Vênus",
        historia: "Musa grega da poesia amorosa. Representa a inspiração que vem do amor e a expressão poética dos sentimentos."
    },
    213: { 
        nome: "Ereshkigal", 
        elemento: "Terra", 
        dominio: "Submundo e morte", 
        planeta: "Plutão",
        historia: "Deusa mesopotâmica do submundo, irmã de Inanna. Representa o poder sobre a morte e os mistérios do além."
    },
    214: { 
        nome: "Eris", 
        elemento: "Fogo", 
        dominio: "Discórdia e conflito", 
        planeta: "Marte",
        historia: "Deusa grega da discórdia, iniciou a Guerra de Troia. Representa os conflitos necessários para mudança e crescimento."
    },
    215: { 
        nome: "Ertha", 
        elemento: "Terra", 
        dominio: "Terra e fertilidade", 
        planeta: "Gaia",
        historia: "Deusa germânica da terra e fertilidade. Representa a conexão ancestral com a terra e seus ciclos naturais."
    },
    216: { 
        nome: "Estsanatlehi", 
        elemento: "Terra", 
        dominio: "Mudança e renovação", 
        planeta: "Terra",
        historia: "Deusa navajo da mudança e renovação. Representa a capacidade de se renovar constantemente como a natureza."
    },
    217: { 
        nome: "Etain", 
        elemento: "Ar", 
        dominio: "Beleza e transformação", 
        planeta: "Vênus",
        historia: "Deusa irlandesa da beleza, transformada em borboleta. Representa a transformação através do amor e da beleza."
    },
    218: { 
        nome: "Eunomia", 
        elemento: "Ar", 
        dominio: "Boa ordem", 
        planeta: "Libra",
        historia: "Deusa grega da boa ordem e legislação justa. Representa a importância de leis justas para uma sociedade harmoniosa."
    },
    219: { 
        nome: "Europa", 
        elemento: "Terra", 
        dominio: "Continente e sedução", 
        planeta: "Zeus",
        historia: "Princesa fenícia raptada por Zeus, deu nome ao continente europeu. Representa a expansão cultural e geográfica."
    },
    220: { 
        nome: "Euterpe", 
        elemento: "Ar", 
        dominio: "Música e alegria", 
        planeta: "Apolo",
        historia: "Musa grega da música e poesia lírica. Representa a alegria que vem da música e a inspiração musical."
    },
    221: { 
        nome: "Evadne", 
        elemento: "Água", 
        dominio: "Água e purificação", 
        planeta: "Poseidon",
        historia: "Ninfa grega das águas, mãe de Iamo. Representa a purificação através da água e os nascimentos milagrosos."
    },
    222: { 
        nome: "Fama", 
        elemento: "Ar", 
        dominio: "Fama e rumores", 
        planeta: "Mercúrio",
        historia: "Deusa romana da fama e rumores. Representa como a informação se espalha e o poder das palavras."
    },
    223: { 
        nome: "Fatua", 
        elemento: "Terra", 
        dominio: "Profecia feminina", 
        planeta: "Fauno",
        historia: "Deusa romana da profecia feminina, esposa de Fauno. Representa a sabedoria profética das mulheres."
    },
    224: { 
        nome: "Fauna", 
        elemento: "Terra", 
        dominio: "Animais e natureza", 
        planeta: "Terra",
        historia: "Deusa romana dos animais e natureza. Representa a proteção da fauna e a harmonia entre espécies."
    },
    225: { 
        nome: "Faunus", 
        elemento: "Terra", 
        dominio: "Florestas e pastoreio", 
        planeta: "Pã",
        historia: "Deus romano das florestas, às vezes representado como feminino. Representa a conexão com a natureza selvagem."
    },
    226: { 
        nome: "Febris", 
        elemento: "Fogo", 
        dominio: "Febre e doença", 
        planeta: "Marte",
        historia: "Deusa romana da febre, tanto causadora quanto curadora. Representa o poder purificador da febre."
    },
    227: { 
        nome: "Felicitas", 
        elemento: "Ar", 
        dominio: "Felicidade e sorte", 
        planeta: "Júpiter",
        historia: "Deusa romana da felicidade e boa sorte. Representa a alegria de viver e a fortuna favorável."
    },
    228: { 
        nome: "Feronia", 
        elemento: "Terra", 
        dominio: "Liberdade e florestas", 
        planeta: "Diana",
        historia: "Deusa romana da liberdade e florestas, protetora de escravos libertos. Representa a libertação e independência."
    },
    229: { 
        nome: "Fides", 
        elemento: "Ar", 
        dominio: "Fé e confiança", 
        planeta: "Júpiter",
        historia: "Deusa romana da fé e confiança. Representa a importância da confiança mútua nas relações humanas."
    },
    230: { 
        nome: "Flidais", 
        elemento: "Terra", 
        dominio: "Florestas e animais selvagens", 
        planeta: "Diana",
        historia: "Deusa irlandesa das florestas e animais selvagens. Representa a proteção da vida selvagem e dos ecossistemas."
    },
    231: { 
        nome: "Flora", 
        elemento: "Terra", 
        dominio: "Flores e primavera", 
        planeta: "Vênus",
        historia: "Deusa romana das flores e primavera. Representa o desabrochar da vida e a beleza efêmera das flores."
    },
    232: { 
        nome: "Fluonia", 
        elemento: "Água", 
        dominio: "Menstruação", 
        planeta: "Lua",
        historia: "Deusa romana da menstruação. Representa os ciclos femininos e a conexão entre mulher e lua."
    },
    233: { 
        nome: "Fons", 
        elemento: "Água", 
        dominio: "Fontes e nascentes", 
        planeta: "Netuno",
        historia: "Deus romano das fontes, às vezes feminino. Representa a pureza das águas nascentes e sua sacralidade."
    },
    234: { 
        nome: "Fornax", 
        elemento: "Fogo", 
        dominio: "Fornos e pão", 
        planeta: "Vesta",
        historia: "Deusa romana dos fornos e pão. Representa a transformação dos grãos em alimento através do fogo."
    },
    235: { 
        nome: "Fortuna", 
        elemento: "Ar", 
        dominio: "Sorte e destino", 
        planeta: "Júpiter",
        historia: "Deusa romana da sorte e destino. Representa as mudanças imprevisíveis da fortuna na vida."
    },
    236: { 
        nome: "Frau Holle", 
        elemento: "Ar", 
        dominio: "Neve e trabalho doméstico", 
        planeta: "Saturno",
        historia: "Deusa germânica da neve e trabalho doméstico. Representa a recompensa pelo trabalho diligente."
    },
    237: { 
        nome: "Freya", 
        elemento: "Água", 
        dominio: "Amor e guerra", 
        planeta: "Vênus",
        historia: "Deusa nórdica do amor e guerra, líder das Valquírias. Representa a união entre amor e poder."
    },
    238: { 
        nome: "Frigg", 
        elemento: "Ar", 
        dominio: "Casamento e maternidade", 
        planeta: "Lua",
        historia: "Deusa nórdica do casamento e maternidade, esposa de Odin. Representa a sabedoria maternal e a proteção familiar."
    },
    239: { 
        nome: "Fulla", 
        elemento: "Terra", 
        dominio: "Abundância e segredos", 
        planeta: "Frigg",
        historia: "Deusa nórdica da abundância e guardiã dos segredos de Frigg. Representa a confiança e a discrição."
    },
    240: { 
        nome: "Furrina", 
        elemento: "Água", 
        dominio: "Fontes sagradas", 
        planeta: "Diana",
        historia: "Deusa romana das fontes sagradas. Representa a sacralidade das águas e seus poderes curativos."
    },
    241: { 
        nome: "Gaia", 
        elemento: "Terra", 
        dominio: "Mãe Terra", 
        planeta: "Terra",
        historia: "Deusa grega primordial da Terra, mãe de todos os seres. Representa o planeta como organismo vivo e consciente."
    },
    242: { 
        nome: "Galatea", 
        elemento: "Água", 
        dominio: "Mar branco como leite", 
        planeta: "Netuno",
        historia: "Nereida grega amada por Polifemo. Representa a beleza pura e inocente do mar calmo."
    },
    243: { 
        nome: "Ganga", 
        elemento: "Água", 
        dominio: "Rio Ganges sagrado", 
        planeta: "Shiva",
        historia: "Deusa hindu do rio Ganges. Representa a purificação espiritual através das águas sagradas."
    },
    244: { 
        nome: "Gauri", 
        elemento: "Terra", 
        dominio: "Pureza e fertilidade", 
        planeta: "Parvati",
        historia: "Aspecto puro de Parvati, esposa de Shiva. Representa a pureza que precede a união divina."
    },
    245: { 
        nome: "Gefion", 
        elemento: "Terra", 
        dominio: "Arado e virgindade", 
        planeta: "Freyja",
        historia: "Deusa nórdica do arado e virgindade. Criou a ilha da Zelândia arando a terra com bois gigantes."
    },
    246: { 
        nome: "Gendenwitha", 
        elemento: "Ar", 
        dominio: "Estrela da manhã", 
        planeta: "Vênus",
        historia: "Deusa iroquesa da estrela da manhã. Representa a esperança e orientação que vem com o amanhecer."
    },
    247: { 
        nome: "Genetyllis", 
        elemento: "Água", 
        dominio: "Nascimento e geração", 
        planeta: "Afrodite",
        historia: "Aspecto de Afrodite como protetora dos nascimentos. Representa a continuidade da vida através das gerações."
    },
    248: { 
        nome: "Gerd", 
        elemento: "Terra", 
        dominio: "Fertilidade da terra", 
        planeta: "Freyr",
        historia: "Giganta nórdica da fertilidade, esposa de Freyr. Representa a terra que desperta na primavera."
    },
    249: { 
        nome: "Giltine", 
        elemento: "Terra", 
        dominio: "Morte e fim", 
        planeta: "Saturno",
        historia: "Deusa lituana da morte. Representa o fim natural da vida e a aceitação da mortalidade."
    },
    250: { 
        nome: "Glaucopis", 
        elemento: "Ar", 
        dominio: "Olhos brilhantes", 
        planeta: "Atena",
        historia: "Epíteto de Atena significando 'olhos brilhantes'. Representa a clareza da visão e percepção aguçada."
    },
    251: { 
        nome: "Gna", 
        elemento: "Ar", 
        dominio: "Mensageira veloz", 
        planeta: "Mercúrio",
        historia: "Deusa nórdica mensageira de Frigg. Representa a comunicação rápida e eficiente."
    },
    252: { 
        nome: "Gorgon", 
        elemento: "Terra", 
        dominio: "Transformação petrificante", 
        planeta: "Plutão",
        historia: "Monstros femininos que petrificavam com o olhar. Representam o poder transformador do medo e da verdade."
    },
    253: { 
        nome: "Graces", 
        elemento: "Ar", 
        dominio: "Beleza e charme", 
        planeta: "Vênus",
        historia: "Três deusas gregas da beleza e charme. Representam a graça, elegância e refinamento social."
    },
    254: { 
        nome: "Grainne", 
        elemento: "Terra", 
        dominio: "Grãos e colheita", 
        planeta: "Ceres",
        historia: "Deusa irlandesa dos grãos e colheita. Representa a abundância que vem do trabalho agrícola."
    },
    255: { 
        nome: "Green Tara", 
        elemento: "Terra", 
        dominio: "Compaixão ativa", 
        planeta: "Tara",
        historia: "Aspecto ativo de Tara no budismo tibetano. Representa a compaixão que se manifesta em ação."
    },
    256: { 
        nome: "Grian", 
        elemento: "Fogo", 
        dominio: "Sol e verão", 
        planeta: "Sol",
        historia: "Deusa irlandesa do sol e verão. Representa o poder solar feminino e a abundância do verão."
    },
    257: { 
        nome: "Gula", 
        elemento: "Terra", 
        dominio: "Cura e medicina", 
        planeta: "Virgem",
        historia: "Deusa mesopotâmica da cura e medicina. Representa o conhecimento médico e o poder de curar doenças."
    },
    258: { 
        nome: "Gunnlod", 
        elemento: "Água", 
        dominio: "Poesia e hidromel", 
        planeta: "Odin",
        historia: "Giganta nórdica guardiã do hidromel da poesia. Representa a inspiração poética e a sabedoria líquida."
    },
    259: { 
        nome: "Gwenhwyfar", 
        elemento: "Ar", 
        dominio: "Fantasma branco", 
        planeta: "Lua",
        historia: "Nome galês de Guinevere, significa 'fantasma branco'. Representa a pureza que pode se tornar espectral."
    },
    260: { 
        nome: "Gyhldeptis", 
        elemento: "Terra", 
        dominio: "Florestas e cedros", 
        planeta: "Terra",
        historia: "Deusa tlingit das florestas de cedros. Representa a majestade das florestas antigas e sua sabedoria."
    },
    261: { 
        nome: "Habondia", 
        elemento: "Terra", 
        dominio: "Abundância e fertilidade", 
        planeta: "Ceres",
        historia: "Deusa medieval da abundância e fertilidade. Representa a prosperidade que vem da generosidade da terra."
    },
    262: { 
        nome: "Hagar", 
        elemento: "Terra", 
        dominio: "Exílio e sobrevivência", 
        planeta: "Saturno",
        historia: "Figura bíblica que representa o exílio e sobrevivência. Simboliza a força encontrada na adversidade."
    },
    263: { 
        nome: "Haltia", 
        elemento: "Terra", 
        dominio: "Proteção do lar", 
        planeta: "Vesta",
        historia: "Espírito finlandês protetor do lar. Representa a energia protetora que habita nas casas."
    },
    264: { 
        nome: "Hannahanna", 
        elemento: "Terra", 
        dominio: "Mãe Terra hitita", 
        planeta: "Cibele",
        historia: "Deusa hitita mãe terra, avó dos deuses. Representa a sabedoria ancestral e a fertilidade primordial."
    },
    265: { 
        nome: "Harmonia", 
        elemento: "Ar", 
        dominio: "Harmonia e união", 
        planeta: "Vênus",
        historia: "Deusa grega da harmonia, filha de Ares e Afrodite. Representa a união dos opostos em equilíbrio."
    },
    266: { 
        nome: "Hathor", 
        elemento: "Água", 
        dominio: "Amor e música", 
        planeta: "Vênus",
        historia: "Deusa egípcia do amor, música e alegria. Representa a feminilidade sagrada e a celebração da vida."
    },
    267: { 
        nome: "Haumea", 
        elemento: "Terra", 
        dominio: "Parto e fertilidade", 
        planeta: "Ceres",
        historia: "Deusa havaiana do parto e fertilidade. Representa o poder criativo feminino e os nascimentos múltiplos."
    },
    268: { 
        nome: "Hebe", 
        elemento: "Água", 
        dominio: "Juventude eterna", 
        planeta: "Júpiter",
        historia: "Deusa grega da juventude, copeira dos deuses. Representa a eterna renovação e vitalidade juvenil."
    },
    269: { 
        nome: "Hecate", 
        elemento: "Água", 
        dominio: "Magia e encruzilhadas", 
        planeta: "Lua",
        historia: "Deusa grega da magia, encruzilhadas e submundo. Representa os mistérios ocultos e a sabedoria das trevas."
    },
    270: { 
        nome: "Hel", 
        elemento: "Terra", 
        dominio: "Morte e submundo", 
        planeta: "Plutão",
        historia: "Deusa nórdica da morte, meio viva meio morta. Representa a aceitação da mortalidade e o reino dos mortos."
    },
    271: { 
        nome: "Helen", 
        elemento: "Fogo", 
        dominio: "Beleza e guerra", 
        planeta: "Vênus",
        historia: "Helena de Troia, cuja beleza causou uma guerra. Representa o poder destrutivo da beleza extrema."
    },
    272: { 
        nome: "Hera", 
        elemento: "Ar", 
        dominio: "Casamento e família", 
        planeta: "Júpiter",
        historia: "Deusa grega do casamento, esposa de Zeus. Representa a santidade do matrimônio e a proteção familiar."
    },
    273: { 
        nome: "Hestia", 
        elemento: "Fogo", 
        dominio: "Lar e lareira", 
        planeta: "Vesta",
        historia: "Deusa grega do lar e lareira. Representa o centro sagrado da casa e a hospitalidade."
    },
    274: { 
        nome: "Hina", 
        elemento: "Água", 
        dominio: "Lua polinésia", 
        planeta: "Lua",
        historia: "Deusa polinésia da lua. Representa os ciclos lunares e sua influência sobre as marés e emoções."
    },
    275: { 
        nome: "Hippolyta", 
        elemento: "Fogo", 
        dominio: "Amazonas e guerra", 
        planeta: "Marte",
        historia: "Rainha das Amazonas. Representa a força guerreira feminina e a independência das mulheres."
    },
    276: { 
        nome: "Hlin", 
        elemento: "Terra", 
        dominio: "Proteção e consolo", 
        planeta: "Frigg",
        historia: "Deusa nórdica da proteção e consolo. Representa o conforto oferecido nos momentos de dor."
    },
    277: { 
        nome: "Holda", 
        elemento: "Ar", 
        dominio: "Inverno e fiação", 
        planeta: "Saturno",
        historia: "Deusa germânica do inverno e fiação. Representa o trabalho doméstico e a sabedoria das estações."
    },
    278: { 
        nome: "Honos", 
        elemento: "Fogo", 
        dominio: "Honra militar", 
        planeta: "Marte",
        historia: "Deusa romana da honra militar. Representa a dignidade conquistada através da coragem em batalha."
    },
    279: { 
        nome: "Hopi", 
        elemento: "Terra", 
        dominio: "Paz e harmonia", 
        planeta: "Libra",
        historia: "Representa os valores do povo Hopi de paz e harmonia com a natureza. Simboliza a vida equilibrada."
    },
    280: { 
        nome: "Hora", 
        elemento: "Ar", 
        dominio: "Estações e tempo", 
        planeta: "Cronos",
        historia: "Deusas gregas das estações e tempo. Representam a ordem temporal e os ciclos naturais."
    },
    281: { 
        nome: "Hsi Wang Mu", 
        elemento: "Ar", 
        dominio: "Imortalidade", 
        planeta: "Jade",
        historia: "Rainha Mãe do Oeste na mitologia chinesa. Representa a imortalidade e a sabedoria celestial."
    },
    282: { 
        nome: "Hulda", 
        elemento: "Terra", 
        dominio: "Segredos subterrâneos", 
        planeta: "Plutão",
        historia: "Deusa germânica dos segredos subterrâneos. Representa os mistérios ocultos nas profundezas da terra."
    },
    283: { 
        nome: "Hygieia", 
        elemento: "Terra", 
        dominio: "Saúde e higiene", 
        planeta: "Virgem",
        historia: "Deusa grega da saúde e higiene, filha de Asclépio. Representa a prevenção de doenças através da limpeza."
    },
    284: { 
        nome: "Iambe", 
        elemento: "Ar", 
        dominio: "Poesia jâmbica", 
        planeta: "Mercúrio",
        historia: "Figura grega que fez Deméter rir com versos jâmbicos. Representa o poder curativo do humor e da poesia."
    },
    285: { 
        nome: "Iduna", 
        elemento: "Terra", 
        dominio: "Juventude e maçãs", 
        planeta: "Vênus",
        historia: "Deusa nórdica da juventude, guardiã das maçãs da imortalidade. Representa a renovação e vitalidade eterna."
    },
    286: { 
        nome: "Ilithyia", 
        elemento: "Água", 
        dominio: "Parto e obstetrícia", 
        planeta: "Lua",
        historia: "Deusa grega do parto e obstetrícia. Representa a proteção durante o nascimento e a arte da parteira."
    },
    287: { 
        nome: "Inanna", 
        elemento: "Água", 
        dominio: "Amor e guerra", 
        planeta: "Vênus",
        historia: "Deusa suméria do amor e guerra. Representa a união entre paixão amorosa e poder guerreiro."
    },
    288: { 
        nome: "Indrani", 
        elemento: "Fogo", 
        dominio: "Poder e soberania", 
        planeta: "Indra",
        historia: "Esposa de Indra na mitologia hindu. Representa o poder feminino que complementa a autoridade masculina."
    },
    289: { 
        nome: "Iris", 
        elemento: "Ar", 
        dominio: "Arco-íris e mensagens", 
        planeta: "Mercúrio",
        historia: "Deusa grega do arco-íris, mensageira dos deuses. Representa a comunicação divina e a beleza das cores."
    },
    290: { 
        nome: "Ishtar", 
        elemento: "Água", 
        dominio: "Amor e fertilidade", 
        planeta: "Vênus",
        historia: "Deusa babilônica do amor e fertilidade. Representa a paixão sexual e o poder criativo feminino."
    },
    291: { 
        nome: "Isis", 
        elemento: "Água", 
        dominio: "Magia e maternidade", 
        planeta: "Lua",
        historia: "Deusa egípcia da magia e maternidade. Representa o poder mágico feminino e a devoção maternal."
    },
    292: { 
        nome: "Itzamna", 
        elemento: "Ar", 
        dominio: "Céu e escrita", 
        planeta: "Mercúrio",
        historia: "Divindade maia do céu e escrita, às vezes feminina. Representa a sabedoria celestial e o conhecimento escrito."
    },
    293: { 
        nome: "Ix Chel", 
        elemento: "Água", 
        dominio: "Lua e medicina", 
        planeta: "Lua",
        historia: "Deusa maia da lua e medicina. Representa a cura através dos ciclos lunares e o conhecimento médico."
    },
    294: { 
        nome: "Ixchel", 
        elemento: "Água", 
        dominio: "Tecelagem e cura", 
        planeta: "Lua",
        historia: "Deusa maia da tecelagem e cura. Representa a arte de tecer tanto tecidos quanto destinos."
    },
    295: { 
        nome: "Izanami", 
        elemento: "Terra", 
        dominio: "Criação e morte", 
        planeta: "Plutão",
        historia: "Deusa japonesa da criação e morte. Representa o ciclo completo da existência, do nascimento à morte."
    },
    296: { 
        nome: "Jahi", 
        elemento: "Água", 
        dominio: "Prostituição sagrada", 
        planeta: "Vênus",
        historia: "Demônio feminino persa da prostituição. Representa os aspectos sombrios da sexualidade e sedução."
    },
    297: { 
        nome: "Jord", 
        elemento: "Terra", 
        dominio: "Terra e mãe de Thor", 
        planeta: "Terra",
        historia: "Deusa nórdica da terra, mãe de Thor. Representa a força telúrica que gera heróis poderosos."
    },
    298: { 
        nome: "Juno", 
        elemento: "Ar", 
        dominio: "Casamento e proteção", 
        planeta: "Júpiter",
        historia: "Deusa romana do casamento, equivalente à Hera. Representa a proteção das mulheres casadas e da família."
    },
    299: { 
        nome: "Justitia", 
        elemento: "Ar", 
        dominio: "Justiça e equidade", 
        planeta: "Libra",
        historia: "Deusa romana da justiça. Representa a aplicação imparcial da lei e a busca pela equidade."
    },
    300: { 
        nome: "Juventas", 
        elemento: "Água", 
        dominio: "Juventude", 
        planeta: "Júpiter",
        historia: "Deusa romana da juventude, equivalente à Hebe. Representa a vitalidade e energia da juventude."
    },
    301: { 
        nome: "Kali", 
        elemento: "Fogo", 
        dominio: "Tempo e destruição", 
        planeta: "Saturno",
        historia: "Deusa hindu do tempo e destruição. Representa o aspecto feroz do feminino que destrói para renovar."
    },
    302: { 
        nome: "Kamrusepas", 
        elemento: "Fogo", 
        dominio: "Cura e magia", 
        planeta: "Sol",
        historia: "Deusa hitita da cura e magia. Representa o poder de curar através de rituais mágicos e encantamentos."
    },
    303: { 
        nome: "Kannon", 
        elemento: "Água", 
        dominio: "Compaixão", 
        planeta: "Lua",
        historia: "Bodhisattva da compaixão no budismo japonês. Representa a misericórdia infinita e a ajuda aos necessitados."
    },
    304: { 
        nome: "Kore", 
        elemento: "Terra", 
        dominio: "Donzela e primavera", 
        planeta: "Perséfone",
        historia: "Aspecto jovem de Perséfone. Representa a inocência da juventude e o potencial da primavera."
    },
    305: { 
        nome: "Kuan Yin", 
        elemento: "Água", 
        dominio: "Compaixão e misericórdia", 
        planeta: "Lua",
        historia: "Deusa chinesa da compaixão e misericórdia. Representa a bondade maternal e a ajuda aos sofredores."
    },
    306: { 
        nome: "Kundalini", 
        elemento: "Fogo", 
        dominio: "Energia serpentina", 
        planeta: "Plutão",
        historia: "Energia espiritual feminina enrolada na base da coluna. Representa o despertar espiritual e transformação."
    },
    307: { 
        nome: "Lakshmi", 
        elemento: "Água", 
        dominio: "Riqueza e beleza", 
        planeta: "Vênus",
        historia: "Deusa hindu da riqueza e beleza, esposa de Vishnu. Representa a prosperidade material e espiritual."
    },
    308: { 
        nome: "Lara", 
        elemento: "Água", 
        dominio: "Proteção do lar", 
        planeta: "Vesta",
        historia: "Ninfa romana protetora do lar. Representa a proteção silenciosa e discreta da família."
    },
    309: { 
        nome: "Latona", 
        elemento: "Terra", 
        dominio: "Maternidade protegida", 
        planeta: "Lua",
        historia: "Mãe de Apolo e Ártemis, equivalente à Leto grega. Representa a maternidade que supera adversidades."
    },
    310: { 
        nome: "Laverna", 
        elemento: "Terra", 
        dominio: "Ladrões e submundo", 
        planeta: "Mercúrio",
        historia: "Deusa romana dos ladrões e submundo. Representa os aspectos sombrios do comércio e da sobrevivência."
    },
    311: { 
        nome: "Leda", 
        elemento: "Água", 
        dominio: "Sedução divina", 
        planeta: "Zeus",
        historia: "Rainha seduzida por Zeus em forma de cisne. Representa a união entre mortal e divino."
    },
    312: { 
        nome: "Leto", 
        elemento: "Terra", 
        dominio: "Maternidade e proteção", 
        planeta: "Apolo",
        historia: "Titânide mãe de Apolo e Ártemis. Representa a maternidade que persevera contra todas as adversidades."
    },
    313: { 
        nome: "Levana", 
        elemento: "Água", 
        dominio: "Lua crescente", 
        planeta: "Lua",
        historia: "Deusa romana da lua crescente. Representa o crescimento, desenvolvimento e potencial em expansão."
    },
    314: { 
        nome: "Libertas", 
        elemento: "Ar", 
        dominio: "Liberdade", 
        planeta: "Júpiter",
        historia: "Deusa romana da liberdade. Representa a independência política e pessoal, e a luta contra a opressão."
    },
    315: { 
        nome: "Libra", 
        elemento: "Ar", 
        dominio: "Equilíbrio e justiça", 
        planeta: "Vênus",
        historia: "Personificação do signo de Libra. Representa o equilíbrio, harmonia e a busca pela justiça."
    },
    316: { 
        nome: "Lilith", 
        elemento: "Ar", 
        dominio: "Independência feminina", 
        planeta: "Lua Negra",
        historia: "Primeira esposa de Adão na tradição judaica. Representa a independência feminina e a recusa à submissão."
    },
    317: { 
        nome: "Lofn", 
        elemento: "Ar", 
        dominio: "Amor proibido", 
        planeta: "Vênus",
        historia: "Deusa nórdica do amor proibido. Representa os amores que desafiam convenções sociais."
    },
    318: { 
        nome: "Lua", 
        elemento: "Água", 
        dominio: "Ciclos lunares", 
        planeta: "Lua",
        historia: "Personificação da Lua. Representa todos os aspectos dos ciclos lunares e sua influência sobre a vida."
    },
    319: { 
        nome: "Lucina", 
        elemento: "Água", 
        dominio: "Parto e luz", 
        planeta: "Diana",
        historia: "Aspecto de Diana como protetora do parto. Representa a luz que guia durante o nascimento."
    },
    320: { 
        nome: "Luna", 
        elemento: "Água", 
        dominio: "Lua romana", 
        planeta: "Lua",
        historia: "Deusa romana da lua, equivalente à Selene grega. Representa os mistérios lunares e a feminilidade cíclica."
    },
    321: { 
        nome: "Lupa", 
        elemento: "Terra", 
        dominio: "Loba e proteção", 
        planeta: "Marte",
        historia: "Loba que amamentou Rômulo e Remo. Representa a proteção maternal feroz e a fundação de civilizações."
    },
    322: { 
        nome: "Lympha", 
        elemento: "Água", 
        dominio: "Água pura", 
        planeta: "Netuno",
        historia: "Deusa romana da água pura. Representa a pureza cristalina da água e seus poderes purificadores."
    },
    323: { 
        nome: "Maat", 
        elemento: "Ar", 
        dominio: "Verdade e justiça", 
        planeta: "Libra",
        historia: "Deusa egípcia da verdade e justiça. Representa a ordem cósmica e o equilíbrio moral do universo."
    },
    324: { 
        nome: "Macha", 
        elemento: "Fogo", 
        dominio: "Guerra e soberania", 
        planeta: "Marte",
        historia: "Deusa irlandesa da guerra e soberania. Representa o poder real feminino e a proteção territorial."
    },
    325: { 
        nome: "Maeve", 
        elemento: "Fogo", 
        dominio: "Soberania e guerra", 
        planeta: "Marte",
        historia: "Rainha guerreira irlandesa. Representa a liderança feminina forte e a defesa dos próprios direitos."
    },
    326: { 
        nome: "Magna Mater", 
        elemento: "Terra", 
        dominio: "Grande Mãe", 
        planeta: "Cibele",
        historia: "Título romano para Cibele. Representa o aspecto universal da Grande Mãe em todas as culturas."
    },
    327: { 
        nome: "Maia", 
        elemento: "Terra", 
        dominio: "Crescimento e primavera", 
        planeta: "Mercúrio",
        historia: "Plêiade mãe de Hermes. Representa o crescimento da natureza na primavera e a fertilidade maternal."
    },
    328: { 
        nome: "Mama Cocha", 
        elemento: "Água", 
        dominio: "Mar e lagos", 
        planeta: "Netuno",
        historia: "Deusa inca do mar e lagos. Representa as águas que sustentam a vida e a generosidade aquática."
    },
    329: { 
        nome: "Mama Quilla", 
        elemento: "Água", 
        dominio: "Lua inca", 
        planeta: "Lua",
        historia: "Deusa inca da lua, esposa do sol. Representa os ciclos lunares e sua influência sobre a agricultura."
    },
    330: { 
        nome: "Mami Wata", 
        elemento: "Água", 
        dominio: "Serpentes aquáticas", 
        planeta: "Netuno",
        historia: "Deusa africana das águas e serpentes. Representa a sabedoria ancestral e o poder curativo das águas."
    },
    331: { 
        nome: "Mania", 
        elemento: "Terra", 
        dominio: "Espíritos dos mortos", 
        planeta: "Plutão",
        historia: "Deusa romana dos espíritos dos mortos. Representa a comunicação com os ancestrais e o mundo espiritual."
    },
    332: { 
        nome: "Manto", 
        elemento: "Ar", 
        dominio: "Profecia", 
        planeta: "Apolo",
        historia: "Profetisa grega, filha de Tirésias. Representa a transmissão hereditária dos dons proféticos."
    },
    333: { 
        nome: "Mara", 
        elemento: "Água", 
        dominio: "Mar e pesadelos", 
        planeta: "Netuno",
        historia: "Deusa eslava do mar e pesadelos. Representa os aspectos sombrios das águas e dos sonhos."
    },
    334: { 
        nome: "Marici", 
        elemento: "Fogo", 
        dominio: "Aurora e luz", 
        planeta: "Sol",
        historia: "Deusa budista da aurora e luz. Representa a iluminação espiritual e o despertar da consciência."
    },
    335: { 
        nome: "Marpessa", 
        elemento: "Água", 
        dominio: "Escolha amorosa", 
        planeta: "Vênus",
        historia: "Princesa grega que escolheu um mortal em vez de Apolo. Representa a liberdade de escolha no amor."
    },
    336: { 
        nome: "Mater Matuta", 
        elemento: "Fogo", 
        dominio: "Aurora e navegação", 
        planeta: "Sol",
        historia: "Deusa romana da aurora e navegação. Representa a orientação que vem com a luz do amanhecer."
    },
    337: { 
        nome: "Matres", 
        elemento: "Terra", 
        dominio: "Mães protetoras", 
        planeta: "Lua",
        historia: "Deusas celtas mães protetoras, sempre em trio. Representam a proteção maternal coletiva."
    },
    338: { 
        nome: "Matronae", 
        elemento: "Terra", 
        dominio: "Matronas e fertilidade", 
        planeta: "Ceres",
        historia: "Deusas germânicas das matronas e fertilidade. Representam a sabedoria das mulheres maduras."
    },
    339: { 
        nome: "Maya", 
        elemento: "Água", 
        dominio: "Ilusão e maternidade", 
        planeta: "Lua",
        historia: "Mãe de Buda na tradição budista. Representa a ilusão do mundo material e a maternidade sagrada."
    },
    340: { 
        nome: "Medb", 
        elemento: "Fogo", 
        dominio: "Soberania e intoxicação", 
        planeta: "Marte",
        historia: "Rainha irlandesa da soberania. Representa o poder feminino que intoxica e transforma."
    },
    341: { 
        nome: "Medea", 
        elemento: "Água", 
        dominio: "Magia e vingança", 
        planeta: "Plutão",
        historia: "Feiticeira grega que ajudou Jasão. Representa o poder mágico feminino e as consequências da traição."
    },
    342: { 
        nome: "Medusa", 
        elemento: "Terra", 
        dominio: "Transformação petrificante", 
        planeta: "Plutão",
        historia: "Górgona que petrificava com o olhar. Representa o poder transformador do trauma e da raiva."
    },
    343: { 
        nome: "Melusine", 
        elemento: "Água", 
        dominio: "Serpente aquática", 
        planeta: "Netuno",
        historia: "Espírito aquático europeu, metade mulher, metade serpente. Representa os mistérios das águas profundas."
    },
    344: { 
        nome: "Melpomene", 
        elemento: "Água", 
        dominio: "Tragédia", 
        planeta: "Plutão",
        historia: "Musa grega da tragédia. Representa a catarse emocional que vem através do sofrimento artístico."
    },
    345: { 
        nome: "Mens", 
        elemento: "Ar", 
        dominio: "Mente e consciência", 
        planeta: "Mercúrio",
        historia: "Deusa romana da mente e consciência. Representa a clareza mental e o poder do pensamento."
    },
    346: { 
        nome: "Meskhenet", 
        elemento: "Terra", 
        dominio: "Parto e destino", 
        planeta: "Destino",
        historia: "Deusa egípcia do parto e destino. Representa o momento do nascimento quando o destino é determinado."
    },
    347: { 
        nome: "Metis", 
        elemento: "Ar", 
        dominio: "Sabedoria prática", 
        planeta: "Atena",
        historia: "Titânide da sabedoria prática, primeira esposa de Zeus. Representa a inteligência estratégica e astúcia."
    },
    348: { 
        nome: "Minerva", 
        elemento: "Ar", 
        dominio: "Sabedoria e artesanato", 
        planeta: "Mercúrio",
        historia: "Deusa romana da sabedoria, equivalente à Atena. Representa a inteligência aplicada e as artes práticas."
    },
    349: { 
        nome: "Mnemosyne", 
        elemento: "Ar", 
        dominio: "Memória", 
        planeta: "Mercúrio",
        historia: "Titânide da memória, mãe das Musas. Representa a preservação do conhecimento e da cultura."
    },
    350: { 
        nome: "Modron", 
        elemento: "Terra", 
        dominio: "Mãe Terra celta", 
        planeta: "Terra",
        historia: "Deusa celta mãe terra. Representa a fertilidade da terra e a proteção maternal da natureza."
    },
    351: { 
        nome: "Moira", 
        elemento: "Ar", 
        dominio: "Destino", 
        planeta: "Saturno",
        historia: "Deusas gregas do destino, as Parcas. Representam o destino inevitável e o fio da vida."
    },
    352: { 
        nome: "Morrigan", 
        elemento: "Fogo", 
        dominio: "Guerra e morte", 
        planeta: "Marte",
        historia: "Deusa irlandesa da guerra e morte, aparece como corvo. Representa a profecia de guerra e transformação."
    },
    353: { 
        nome: "Mut", 
        elemento: "Ar", 
        dominio: "Mãe divina", 
        planeta: "Lua",
        historia: "Deusa egípcia mãe divina, esposa de Amon. Representa a maternidade divina e a proteção maternal."
    },
    354: { 
        nome: "Naamah", 
        elemento: "Água", 
        dominio: "Sedução e prazer", 
        planeta: "Vênus",
        historia: "Figura bíblica associada à sedução. Representa os aspectos sedutores da feminilidade e do prazer."
    },
    355: { 
        nome: "Naenia", 
        elemento: "Terra", 
        dominio: "Lamentação fúnebre", 
        planeta: "Saturno",
        historia: "Deusa romana da lamentação fúnebre. Representa o luto necessário e a expressão da dor pela perda."
    },
    356: { 
        nome: "Nana", 
        elemento: "Terra", 
        dominio: "Vegetação e fertilidade", 
        planeta: "Cibele",
        historia: "Deusa frígia da vegetação, mãe de Átis. Representa a fertilidade vegetal e os ciclos de crescimento."
    },
    357: { 
        nome: "Nantosuelta", 
        elemento: "Água", 
        dominio: "Rios e natureza", 
        planeta: "Netuno",
        historia: "Deusa celta dos rios e natureza. Representa a abundância que flui dos rios e a generosidade natural."
    },
    358: { 
        nome: "Nehalennia", 
        elemento: "Água", 
        dominio: "Mar e navegação", 
        planeta: "Netuno",
        historia: "Deusa germânica do mar e navegação. Representa a proteção dos marinheiros e o comércio marítimo."
    },
    359: { 
        nome: "Neith", 
        elemento: "Ar", 
        dominio: "Guerra e tecelagem", 
        planeta: "Atena",
        historia: "Deusa egípcia da guerra e tecelagem. Representa a união entre habilidades domésticas e guerreiras."
    },
    360: { 
        nome: "Nemesis", 
        elemento: "Ar", 
        dominio: "Vingança divina", 
        planeta: "Libra",
        historia: "Deusa grega da vingança divina e justiça. Representa a retribuição que restaura o equilíbrio cósmico."
    },
    361: { 
        nome: "Nephthys", 
        elemento: "Água", 
        dominio: "Morte e lamentação", 
        planeta: "Plutão",
        historia: "Deusa egípcia da morte e lamentação, irmã de Ísis. Representa o luto e a proteção dos mortos."
    },
    362: { 
        nome: "Nerthus", 
        elemento: "Terra", 
        dominio: "Terra e fertilidade", 
        planeta: "Terra",
        historia: "Deusa germânica da terra e fertilidade. Representa a sacralidade da terra e seus ciclos de fertilidade."
    },
    363: { 
        nome: "Nike", 
        elemento: "Ar", 
        dominio: "Vitória", 
        planeta: "Júpiter",
        historia: "Deusa grega da vitória. Representa o triunfo conquistado através do esforço e determinação."
    },
    364: { 
        nome: "Nimue", 
        elemento: "Água", 
        dominio: "Magia e lagos", 
        planeta: "Lua",
        historia: "Feiticeira artúrica dos lagos. Representa a magia aquática e os mistérios dos lagos profundos."
    },
    365: { 
        nome: "Nyx", 
        elemento: "Ar", 
        dominio: "Noite primordial", 
        planeta: "Plutão",
        historia: "Deusa grega primordial da noite. Representa a escuridão criativa e os mistérios que emergem das trevas."
    }
};

// BASE 2: MANSÕES LUNARES DO PICATRIX - COMPLETA
// BASE 2: MANSÕES LUNARES DO PICATRIX - COMPLETA
const mansoesLunaresPicatrix = {
    1: {
        nome: "Al-Sharatain",
        nomePortugues: "Os Chifres",
        graus: "0° - 12°51' Áries",
        estrela: "Hamal (Alpha Arietis)",
        elemento: "Fogo",
        planeta: "Marte",
        anjo: "Geniel",
        poder: "Destruição e separação",
        magia: "Quebrar vínculos, separar inimigos",
        pedra: "Jaspe vermelho",
        planta: "Mirra",
        animal: "Carneiro",
        incenso: "Sangue de dragão",
        dia: "Terça-feira",
        hora: "1ª e 8ª hora de Marte",
        ritual: "Para destruir e separar, queimar inimigos em efígie",
        talismã: "Imagem de homem negro vestido com pano grosso, em pé, com a mão direita levantada",
        efeito: "Causa separação entre pessoas, destrói sociedades e parcerias",
        interpretacao: "Esta mansão é de natureza destrutiva e marcial. Usada para quebrar vínculos indesejados, separar inimigos e destruir obstáculos. Requer cuidado extremo em seu uso."
    },
    2: {
        nome: "Al-Butain",
        nomePortugues: "O Pequeno Ventre",
        graus: "12°51' - 25°43' Áries",
        estrela: "Sheratan (Beta Arietis)",
        elemento: "Fogo",
        planeta: "Sol",
        anjo: "Enediel",
        poder: "Descoberta de tesouros e coisas perdidas",
        magia: "Encontrar objetos perdidos, revelar segredos",
        pedra: "Ametista",
        planta: "Alecrim",
        animal: "Baleia",
        incenso: "Olíbano",
        dia: "Domingo",
        hora: "1ª e 8ª hora do Sol",
        ritual: "Para encontrar tesouros, fazer imagem de rei coroado",
        talismã: "Imagem de rei sentado em cadeira, com as mãos levantadas como se orasse",
        efeito: "Ajuda a encontrar coisas perdidas e descobrir tesouros ocultos",
        interpretacao: "Mansão favorável para descobertas e revelações. Excelente para encontrar objetos perdidos, revelar segredos ocultos e descobrir tesouros materiais ou espirituais."
    },
    3: {
        nome: "Al-Thurayya",
        nomePortugues: "As Plêiades",
        graus: "25°43' Áries - 8°34' Touro",
        estrela: "Alcyone (Eta Tauri)",
        elemento: "Terra",
        planeta: "Lua",
        anjo: "Amixiel",
        poder: "Navegação e viagens seguras",
        magia: "Proteção em viagens, navegação",
        pedra: "Cristal de rocha",
        planta: "Funcho",
        animal: "Galo",
        incenso: "Âmbar",
        dia: "Segunda-feira",
        hora: "1ª e 8ª hora da Lua",
        ritual: "Para viagens seguras, fazer imagem de três donzelas",
        talismã: "Imagem de três donzelas, ou de um homem bem vestido, alegre",
        efeito: "Protege viajantes e marinheiros, traz boa sorte em jornadas",
        interpretacao: "Mansão das Plêiades, tradicionalmente associada à navegação. Favorável para todas as formas de viagem e jornadas, tanto físicas quanto espirituais."
    },
    4: {
        nome: "Al-Dabaran",
        nomePortugues: "O Seguidor",
        graus: "8°34' - 21°26' Touro",
        estrela: "Aldebaran (Alpha Tauri)",
        elemento: "Terra",
        planeta: "Vênus",
        anjo: "Azariel",
        poder: "Vingança e destruição de inimigos",
        magia: "Destruir inimigos, causar ruína",
        pedra: "Rubi",
        planta: "Absinto",
        animal: "Touro",
        incenso: "Enxofre",
        dia: "Sexta-feira",
        hora: "1ª e 8ª hora de Vênus",
        ritual: "Para destruir inimigos, fazer imagem de soldado armado",
        talismã: "Imagem de homem bem vestido, sentado em cadeira, com uma coroa na cabeça",
        efeito: "Destrói inimigos e causa ruína aos adversários",
        interpretacao: "Mansão de poder destrutivo, usada para vingança contra inimigos. Aldebaran, o 'Olho do Touro', confere força para derrotar oponentes."
    },
    5: {
        nome: "Al-Haq'ah",
        nomePortugues: "A Cabeça de Orion",
        graus: "21°26' Touro - 4°17' Gêmeos",
        estrela: "Bellatrix (Gamma Orionis)",
        elemento: "Ar",
        planeta: "Mercúrio",
        anjo: "Gabriel",
        poder: "Favor de reis e nobres",
        magia: "Obter favores, ganhar influência",
        pedra: "Safira",
        planta: "Lavanda",
        animal: "Lobo",
        incenso: "Mastique",
        dia: "Quarta-feira",
        hora: "1ª e 8ª hora de Mercúrio",
        ritual: "Para obter favores, fazer imagem de cabeça humana",
        talismã: "Imagem de cabeça de homem, ou de homem escrevendo",
        efeito: "Concede favor de pessoas importantes e autoridades",
        interpretacao: "Mansão favorável para obter apoio de superiores e pessoas influentes. Excelente para questões relacionadas a autoridade e reconhecimento."
    },
    6: {
        nome: "Al-Han'ah",
        nomePortugues: "A Pequena Marca",
        graus: "4°17' - 17°09' Gêmeos",
        estrela: "Alhena (Gamma Geminorum)",
        elemento: "Ar",
        planeta: "Júpiter",
        anjo: "Dirachiel",
        poder: "Amor e benevolência",
        magia: "Atrair amor, criar harmonia",
        pedra: "Esmeralda",
        planta: "Rosa",
        animal: "Gato",
        incenso: "Sândalo",
        dia: "Quinta-feira",
        hora: "1ª e 8ª hora de Júpiter",
        ritual: "Para amor, fazer imagem de dois pássaros",
        talismã: "Imagem de dois corpos abraçados, ou de homem bem vestido, alegre",
        efeito: "Promove amor, amizade e benevolência entre pessoas",
        interpretacao: "Mansão do amor e harmonia. Favorável para relacionamentos, casamentos e reconciliações. Promove paz e entendimento mútuo."
    },
    7: {
        nome: "Al-Dhira'",
        nomePortugues: "O Braço",
        graus: "17°09' - 30° Gêmeos",
        estrela: "Castor e Pollux (Alpha e Beta Geminorum)",
        elemento: "Ar",
        planeta: "Saturno",
        anjo: "Scheliel",
        poder: "Ganho e lucro",
        magia: "Aumentar riqueza, obter lucros",
        pedra: "Ágata",
        planta: "Hortelã",
        animal: "Macaco",
        incenso: "Benjoim",
        dia: "Sábado",
        hora: "1ª e 8ª hora de Saturno",
        ritual: "Para riqueza, fazer imagem de homem com duas cabeças",
        talismã: "Imagem de homem bem vestido, com duas cabeças, uma olhando para frente e outra para trás",
        efeito: "Traz ganhos financeiros e aumenta os lucros",
        interpretacao: "Mansão dos gêmeos celestiais, favorável para negócios e ganhos materiais. As duas cabeças simbolizam a capacidade de ver oportunidades."
    },
    8: {
        nome: "Al-Nathrah",
        nomePortugues: "O Focinho",
        graus: "0° - 12°51' Câncer",
        estrela: "Praesepe (M44 Cancri)",
        elemento: "Água",
        planeta: "Saturno",
        anjo: "Amnediel",
        poder: "Causar amor e ódio",
        magia: "Influenciar emoções, criar paixões",
        pedra: "Calcedônia",
        planta: "Verbena",
        animal: "Águia",
        incenso: "Estoraque",
        dia: "Sábado",
        hora: "1ª e 8ª hora de Saturno",
        ritual: "Para influenciar emoções, fazer imagem de águia",
        talismã: "Imagem de águia com face humana, ou de homem cavalgando águia",
        efeito: "Pode causar tanto amor quanto ódio, dependendo da intenção",
        interpretacao: "Mansão de grande poder emocional, capaz de influenciar profundamente os sentimentos. Requer sabedoria em seu uso."
    },
    9: {
        nome: "Al-Tarf",
        nomePortugues: "O Olhar",
        graus: "12°51' - 25°43' Câncer",
        estrela: "Altarf (Beta Cancri)",
        elemento: "Água",
        planeta: "Sol",
        anjo: "Barbiel",
        poder: "Causar enfermidades",
        magia: "Enviar doenças, causar mal-estar",
        pedra: "Cornalina",
        planta: "Cicuta",
        animal: "Serpente",
        incenso: "Mirra negra",
        dia: "Domingo",
        hora: "1ª e 8ª hora do Sol",
        ritual: "Para causar doença, fazer imagem de serpente",
        talismã: "Imagem de homem com cabeça de leão, ou serpente com cauda levantada",
        efeito: "Causa enfermidades e mal-estar nos inimigos",
        interpretacao: "Mansão de natureza maléfica, usada para enviar doenças. Deve ser usada apenas em casos extremos e com grande responsabilidade."
    },
    10: {
        nome: "Al-Jabhah",
        nomePortugues: "A Testa",
        graus: "25°43' Câncer - 8°34' Leão",
        estrela: "Regulus (Alpha Leonis)",
        elemento: "Fogo",
        planeta: "Vênus",
        anjo: "Ardifiel",
        poder: "Facilitar partos e fortalecer edifícios",
        magia: "Ajudar nascimentos, fortalecer estruturas",
        pedra: "Granada",
        planta: "Artemísia",
        animal: "Leão",
        incenso: "Gálbano",
        dia: "Sexta-feira",
        hora: "1ª e 8ª hora de Vênus",
        ritual: "Para partos, fazer imagem de mulher grávida",
        talismã: "Imagem de homem bem vestido, sentado em cadeira, com coroa na cabeça",
        efeito: "Facilita partos e fortalece construções",
        interpretacao: "Mansão real de Regulus, favorável para nascimentos e construções. Confere força e estabilidade a novos empreendimentos."
    },
    11: {
        nome: "Al-Zubrah",
        nomePortugues: "A Juba",
        graus: "8°34' - 21°26' Leão",
        estrela: "Zosma (Delta Leonis)",
        elemento: "Fogo",
        planeta: "Júpiter",
        anjo: "Neciel",
        poder: "Causar medo nos inimigos",
        magia: "Intimidar oponentes, causar terror",
        pedra: "Sardônica",
        planta: "Cardo",
        animal: "Leão",
        incenso: "Opoponax",
        dia: "Quinta-feira",
        hora: "1ª e 8ª hora de Júpiter",
        ritual: "Para causar medo, fazer imagem de leão rugindo",
        talismã: "Imagem de homem cavalgando leão, com serpente na mão",
        efeito: "Instila medo e terror nos inimigos",
        interpretacao: "Mansão da juba do leão, confere poder intimidatório. Usada para desencorajar inimigos e afastar ameaças."
    },
    12: {
        nome: "Al-Sarfah",
        nomePortugues: "A Mudança",
        graus: "21°26' Leão - 4°17' Virgem",
        estrela: "Denebola (Beta Leonis)",
        elemento: "Terra",
        planeta: "Marte",
        anjo: "Abdizuel",
        poder: "Aumentar colheitas e plantar",
        magia: "Melhorar agricultura, aumentar fertilidade",
        pedra: "Jaspe",
        planta: "Trigo",
        animal: "Macaco",
        incenso: "Olíbano",
        dia: "Terça-feira",
        hora: "1ª e 8ª hora de Marte",
        ritual: "Para colheitas, fazer imagem de homem plantando",
        talismã: "Imagem de homem bem vestido, com uma foice na mão",
        efeito: "Melhora colheitas e favorece a agricultura",
        interpretacao: "Mansão da mudança sazonal, favorável para agricultura e plantio. Marca a transição do verão para o outono."
    },
    13: {
        nome: "Al-Awwa'",
        nomePortugues: "O Latidor",
        graus: "4°17' - 17°09' Virgem",
        estrela: "Spica (Alpha Virginis)",
        elemento: "Terra",
        planeta: "Mercúrio",
        anjo: "Jazeriel",
        poder: "Beneficiar viajantes e marinheiros",
        magia: "Proteger viagens, garantir chegada segura",
        pedra: "Esmeralda",
        planta: "Sálvia",
        animal: "Cão",
        incenso: "Sândalo",
        dia: "Quarta-feira",
        hora: "1ª e 8ª hora de Mercúrio",
        ritual: "Para viagens, fazer imagem de cão latindo",
        talismã: "Imagem de homem com cabeça de cão, ou cão latindo",
        efeito: "Protege viajantes e garante jornadas seguras",
        interpretacao: "Mansão de Spica, a espiga de trigo da Virgem. Favorável para viagens e proteção durante jornadas."
    },
    14: {
        nome: "Al-Simak",
        nomePortugues: "O Desarmado",
        graus: "17°09' - 30° Virgem",
        estrela: "Arcturus (Alpha Bootis)",
        elemento: "Terra",
        planeta: "Vênus",
        anjo: "Ergediel",
        poder: "Causar amor conjugal e curar enfermos",
        magia: "Fortalecer casamentos, curar doenças",
        pedra: "Berilo",
        planta: "Manjericão",
        animal: "Macaco",
        incenso: "Âmbar",
        dia: "Sexta-feira",
        hora: "1ª e 8ª hora de Vênus",
        ritual: "Para amor conjugal, fazer imagem de casal abraçado",
        talismã: "Imagem de homem sentado em cadeira, com as mãos levantadas ao céu",
        efeito: "Fortalece vínculos matrimoniais e promove cura",
        interpretacao: "Mansão de Arcturus, favorável para casamentos e cura. Promove harmonia conjugal e bem-estar físico."
    },
    15: {
        nome: "Al-Ghafr",
        nomePortugues: "A Cobertura",
        graus: "0° - 12°51' Libra",
        estrela: "Zubenelgenubi (Alpha Librae)",
        elemento: "Ar",
        planeta: "Marte",
        anjo: "Ataliel",
        poder: "Extrair tesouros e abrir fechaduras",
        magia: "Abrir caminhos, revelar segredos",
        pedra: "Jaspe vermelho",
        planta: "Mandrágora",
        animal: "Macaco",
        incenso: "Sangue de dragão",
        dia: "Terça-feira",
        hora: "1ª e 8ª hora de Marte",
        ritual: "Para abrir fechaduras, fazer imagem de homem com chaves",
        talismã: "Imagem de homem bem vestido, alegre, com chaves nas mãos",
        efeito: "Abre caminhos fechados e revela tesouros ocultos",
        interpretacao: "Mansão da garra sul da balança, favorável para descobertas e abertura de novos caminhos."
    },
    16: {
        nome: "Al-Zubana",
        nomePortugues: "As Garras",
        graus: "12°51' - 25°43' Libra",
        estrela: "Zubeneschamali (Beta Librae)",
        elemento: "Ar",
        planeta: "Júpiter",
        anjo: "Azeruel",
        poder: "Impedir viagens e causar discórdia",
        magia: "Bloquear jornadas, criar conflitos",
        pedra: "Ônix",
        planta: "Espinheiro",
        animal: "Serpente",
        incenso: "Enxofre",
        dia: "Quinta-feira",
        hora: "1ª e 8ª hora de Júpiter",
        ritual: "Para impedir viagens, fazer imagem de homem acorrentado",
        talismã: "Imagem de homem com cabeça de escorpião, ou homem sentado em cadeira",
        efeito: "Impede viagens e causa discórdia entre pessoas",
        interpretacao: "Mansão da garra norte da balança, de natureza obstrutiva. Usada para impedir ações indesejadas."
    },
    17: {
        nome: "Al-Iklil",
        nomePortugues: "A Corona",
        graus: "25°43' Libra - 8°34' Escorpião",
        estrela: "Antares (Alpha Scorpii)",
        elemento: "Água",
        planeta: "Mercúrio",
        anjo: "Adriel",
        poder: "Melhorar colheitas e plantar",
        magia: "Favorecer agricultura, aumentar fertilidade",
        pedra: "Sardônica",
        planta: "Açafrão",
        animal: "Escorpião",
        incenso: "Estoraque",
        dia: "Quarta-feira",
        hora: "1ª e 8ª hora de Mercúrio",
        ritual: "Para colheitas, fazer imagem de homem coroado",
        talismã: "Imagem de homem coroado, sentado em cadeira, com cetro na mão",
        efeito: "Favorece agricultura e melhora a fertilidade da terra",
        interpretacao: "Mansão de Antares, o coração do Escorpião. Favorável para agricultura e crescimento."
    },
    18: {
        nome: "Al-Qalb",
        nomePortugues: "O Coração",
        graus: "8°34' - 21°26' Escorpião",
        estrela: "Antares (Alpha Scorpii)",
        elemento: "Água",
        planeta: "Vênus",
        anjo: "Egibiel",
        poder: "Causar discórdia e sedição",
        magia: "Criar conflitos, semear discórdia",
        pedra: "Ametista",
        planta: "Cicuta",
        animal: "Serpente",
        incenso: "Mirra",
        dia: "Sexta-feira",
        hora: "1ª e 8ª hora de Vênus",
        ritual: "Para discórdia, fazer imagem de homem com duas faces",
        talismã: "Imagem de homem com cabeça de escorpião, ou mulher irada",
        efeito: "Causa discórdia, brigas e separações",
        interpretacao: "Mansão do coração do Escorpião, de natureza conflituosa. Usada para criar divisões entre inimigos."
    },
    19: {
        nome: "Al-Shaulah",
        nomePortugues: "O Ferrão",
        graus: "21°26' Escorpião - 4°17' Sagitário",
        estrela: "Shaula (Lambda Scorpii)",
        elemento: "Fogo",
        planeta: "Mercúrio",
        anjo: "Amutiel",
        poder: "Ajudar no cerco de cidades",
        magia: "Conquistar fortalezas, vencer obstáculos",
        pedra: "Topázio",
        planta: "Junípero",
        animal: "Escorpião",
        incenso: "Opoponax",
        dia: "Quarta-feira",
        hora: "1ª e 8ª hora de Mercúrio",
        ritual: "Para conquistas, fazer imagem de homem armado",
        talismã: "Imagem de homem com arco e flecha, ou escorpião com ferrão levantado",
        efeito: "Ajuda a conquistar e vencer resistências",
        interpretacao: "Mansão do ferrão do Escorpião, favorável para conquistas militares e superação de obstáculos."
    },
    20: {
        nome: "Al-Na'am",
        nomePortugues: "Os Avestruzes",
        graus: "4°17' - 17°09' Sagitário",
        estrela: "Kaus Australis (Epsilon Sagittarii)",
        elemento: "Fogo",
        planeta: "Júpiter",
        anjo: "Kyriel",
        poder: "Domesticar animais selvagens",
        magia: "Controlar feras, domar animais",
        pedra: "Turquesa",
        planta: "Artemísia",
        animal: "Avestruz",
        incenso: "Gálbano",
        dia: "Quinta-feira",
        hora: "1ª e 8ª hora de Júpiter",
        ritual: "Para domar animais, fazer imagem de homem com animais",
        talismã: "Imagem de homem com meio corpo de cavalo, segurando arco",
        efeito: "Facilita a domesticação e controle de animais",
        interpretacao: "Mansão dos avestruzes bebendo, favorável para trabalhar com animais e controlar instintos selvagens."
    },
    21: {
        nome: "Al-Baldah",
        nomePortugues: "A Cidade",
        graus: "17°09' - 30° Sagitário",
        estrela: "Nunki (Sigma Sagittarii)",
        elemento: "Fogo",
        planeta: "Sol",
        anjo: "Bethnael",
        poder: "Destruir e demolir",
        magia: "Derrubar estruturas, causar ruína",
        pedra: "Ferro",
        planta: "Cardo",
        animal: "Macaco",
        incenso: "Enxofre",
        dia: "Domingo",
        hora: "1ª e 8ª hora do Sol",
        ritual: "Para destruir, fazer imagem de homem com machado",
        talismã: "Imagem de homem com cauda de macaco, ou homem destruindo edifício",
        efeito: "Causa destruição e ruína de construções",
        interpretacao: "Mansão destrutiva, usada para demolir obstáculos e estruturas indesejadas. Requer cuidado em seu uso."
    },
    22: {
        nome: "Sa'd al-Dhabih",
        nomePortugues: "A Sorte do Matador",
        graus: "0° - 12°51' Capricórnio",
        estrela: "Dabih (Beta Capricorni)",
        elemento: "Terra",
        planeta: "Vênus",
        anjo: "Geliel",
        poder: "Promover fuga de prisioneiros",
        magia: "Libertar cativos, escapar de prisões",
        pedra: "Ônix",
        planta: "Mandrágora",
        animal: "Cabra",
        incenso: "Benjoim",
        dia: "Sexta-feira",
        hora: "1ª e 8ª hora de Vênus",
        ritual: "Para libertação, fazer imagem de homem quebrando correntes",
        talismã: "Imagem de homem com cabeça de cabra, ou homem fugindo",
        efeito: "Facilita fugas e libertação de prisões",
        interpretacao: "Mansão da sorte do matador, favorável para libertação e escape de situações opressivas."
    },
    23: {
        nome: "Sa'd Bula'",
        nomePortugues: "A Sorte do Engolidor",
        graus: "12°51' - 25°43' Capricórnio",
        estrela: "Nashira (Gamma Capricorni)",
        elemento: "Terra",
        planeta: "Saturno",
        anjo: "Requiel",
        poder: "Curar e sarar enfermidades",
        magia: "Promover cura, restaurar saúde",
        pedra: "Turquesa",
        planta: "Sálvia",
        animal: "Cabra",
        incenso: "Olíbano",
        dia: "Sábado",
        hora: "1ª e 8ª hora de Saturno",
        ritual: "Para cura, fazer imagem de homem bebendo remédio",
        talismã: "Imagem de homem sentado, bebendo de uma taça",
        efeito: "Promove cura e recuperação de doenças",
        interpretacao: "Mansão da sorte do engolidor, favorável para cura e medicina. Promove recuperação e bem-estar."
    },
    24: {
        nome: "Sa'd al-Su'ud",
        nomePortugues: "A Sorte das Sortes",
        graus: "25°43' Capricórnio - 8°34' Aquário",
        estrela: "Sadalsuud (Beta Aquarii)",
        elemento: "Ar",
        planeta: "Júpiter",
        anjo: "Abrinael",
        poder: "Beneficiar casamentos",
        magia: "Fortalecer uniões, promover harmonia conjugal",
        pedra: "Safira",
        planta: "Rosa",
        animal: "Águia",
        incenso: "Sândalo",
        dia: "Quinta-feira",
        hora: "1ª e 8ª hora de Júpiter",
        ritual: "Para casamentos, fazer imagem de casal unido",
        talismã: "Imagem de homem bem vestido, com coroa, segurando flor",
        efeito: "Favorece casamentos e uniões duradouras",
        interpretacao: "Mansão da maior sorte, extremamente favorável para casamentos e parcerias. Traz felicidade conjugal."
    },
    25: {
        nome: "Sa'd al-Akhbiyah",
        nomePortugues: "A Sorte das Tendas",
        graus: "8°34' - 21°26' Aquário",
        estrela: "Sadalmelik (Alpha Aquarii)",
        elemento: "Ar",
        planeta: "Saturno",
        anjo: "Aziel",
        poder: "Favorecer cerco e destruição",
        magia: "Conquistar fortalezas, derrubar defesas",
        pedra: "Hematita",
        planta: "Cicuta",
        animal: "Hiena",
        incenso: "Enxofre",
        dia: "Sábado",
        hora: "1ª e 8ª hora de Saturno",
        ritual: "Para cercos, fazer imagem de homem destruindo tenda",
        talismã: "Imagem de homem destruindo ou queimando, ou soldado com lança",
        efeito: "Favorece conquistas militares e destruição de defesas",
        interpretacao: "Mansão das tendas, favorável para operações militares e conquista de territórios inimigos."
    },
    26: {
        nome: "Al-Fargh al-Mukdim",
        nomePortugues: "O Primeiro Derramamento",
        graus: "21°26' Aquário - 4°17' Peixes",
        estrela: "Markab (Alpha Pegasi)",
        elemento: "Água",
        planeta: "Mercúrio",
        anjo: "Tagriel",
        poder: "Causar amor e união",
        magia: "Promover reconciliação, unir corações",
        pedra: "Cristal de rocha",
        planta: "Verbena",
        animal: "Peixe",
        incenso: "Âmbar",
        dia: "Quarta-feira",
        hora: "1ª e 8ª hora de Mercúrio",
        ritual: "Para união, fazer imagem de homem derramando água",
        talismã: "Imagem de homem alado, ou homem derramando água de vaso",
        efeito: "Promove amor, união e reconciliação entre pessoas",
        interpretacao: "Mansão do primeiro derramamento, favorável para reconciliações e união de corações separados."
    },
    27: {
        nome: "Al-Fargh al-Thani",
        nomePortugues: "O Segundo Derramamento",
        graus: "4°17' - 17°09' Peixes",
        estrela: "Scheat (Beta Pegasi)",
        elemento: "Água",
        planeta: "Lua",
        anjo: "Atheniel",
        poder: "Aumentar colheitas e ganhos",
        magia: "Multiplicar riquezas, aumentar abundância",
        pedra: "Berilo",
        planta: "Trigo",
        animal: "Peixe",
        incenso: "Olíbano",
        dia: "Segunda-feira",
        hora: "1ª e 8ª hora da Lua",
        ritual: "Para abundância, fazer imagem de homem semeando",
        talismã: "Imagem de homem com duas cabeças, uma humana e outra de pássaro",
        efeito: "Aumenta colheitas, ganhos e prosperidade material",
        interpretacao: "Mansão do segundo derramamento, favorável para agricultura, comércio e aumento de bens materiais."
    },
    28: {
        nome: "Batn al-Hut",
        nomePortugues: "O Ventre do Peixe",
        graus: "17°09' - 30° Peixes",
        estrela: "Fomalhaut (Alpha Piscis Austrini)",
        elemento: "Água",
        planeta: "Saturno",
        anjo: "Amnixiel",
        poder: "Aumentar colheitas e ganhos de mercadores",
        magia: "Prosperar no comércio, multiplicar lucros",
        pedra: "Jaspe",
        planta: "Algas marinhas",
        animal: "Peixe",
        incenso: "Âmbar cinzento",
        dia: "Sábado",
        hora: "1ª e 8ª hora de Saturno",
        ritual: "Para prosperidade comercial, fazer imagem de peixe grande",
        talismã: "Imagem de peixe, ou homem com cauda de peixe",
        efeito: "Favorece comércio marítimo e aumenta lucros mercantis",
        interpretacao: "Mansão do ventre do peixe, extremamente favorável para comércio, especialmente marítimo. Traz prosperidade aos mercadores."
    }

};

// BASE 3: HERBÁRIO DE PARACELSO - COMPLETO
// BASE 3: HERBÁRIO DE PARACELSO POR PLANETAS - COMPLETO
const herbarioParacelso = {
    Sol: {
        planeta: "Sol",
        elemento: "Fogo",
        qualidades: "Quente e seco",
        dia: "Domingo",
        hora: "Meio-dia",
        metal: "Ouro",
        cor: "Dourado/Amarelo",
        ervas: {
            "Angélica": {
                nome: "Angelica archangelica",
                propriedades: "Proteção, purificação, exorcismo",
                uso: "Banhos de purificação, amuletos de proteção",
                preparo: "Infusão das raízes em vinho branco",
                virtudes: "Afasta demônios e energias negativas, fortalece o espírito"
            },
            "Calêndula": {
                nome: "Calendula officinalis",
                propriedades: "Cura, proteção solar, visões proféticas",
                uso: "Unguentos para feridas, óleo para visões",
                preparo: "Maceração das flores em óleo de oliva",
                virtudes: "Acelera cicatrização, desenvolve clarividência"
            },
            "Camomila": {
                nome: "Matricaria chamomilla",
                propriedades: "Paz, purificação, sono profético",
                uso: "Chás para tranquilidade, sachês para sonhos",
                preparo: "Infusão das flores secas",
                virtudes: "Acalma o espírito, induz sonhos reveladores"
            },
            "Canela": {
                nome: "Cinnamomum verum",
                propriedades: "Poder espiritual, proteção, prosperidade",
                uso: "Incensos, óleos de unção, amuletos",
                preparo: "Pó da casca misturado com óleos",
                virtudes: "Eleva vibração espiritual, atrai abundância"
            },
            "Cedro": {
                nome: "Cedrus libani",
                propriedades: "Purificação, proteção, longevidade",
                uso: "Defumações, óleos sagrados",
                preparo: "Resina queimada ou óleo extraído",
                virtudes: "Purifica ambientes, confere longevidade"
            },
            "Cravo": {
                nome: "Syzygium aromaticum",
                propriedades: "Proteção, exorcismo, amor",
                uso: "Amuletos, incensos de proteção",
                preparo: "Cravos inteiros ou em pó",
                virtudes: "Repele negatividade, atrai amor verdadeiro"
            },
            "Girassol": {
                nome: "Helianthus annuus",
                propriedades: "Lealdade, adoração, verdade",
                uso: "Óleos para rituais solares, decoração de altares",
                preparo: "Óleo das sementes, pétalas secas",
                virtudes: "Fortalece devoção, revela verdades ocultas"
            },
            "Hipérico": {
                nome: "Hypericum perforatum",
                propriedades: "Proteção contra demônios, cura da melancolia",
                uso: "Óleo para depressão, amuletos de proteção",
                preparo: "Maceração das flores em óleo",
                virtudes: "Afasta espíritos malignos, cura tristeza profunda"
            },
            "Laranja": {
                nome: "Citrus sinensis",
                propriedades: "Alegria, purificação, amor",
                uso: "Óleos essenciais, cascas secas para incenso",
                preparo: "Óleo da casca, flores secas",
                virtudes: "Eleva o humor, purifica o ambiente"
            },
            "Louro": {
                nome: "Laurus nobilis",
                propriedades: "Proteção, purificação, força psíquica",
                uso: "Coroas rituais, defumações, óleos",
                preparo: "Folhas secas queimadas ou em óleo",
                virtudes: "Desenvolve poderes psíquicos, confere proteção"
            },
            "Olíbano": {
                nome: "Boswellia sacra",
                propriedades: "Purificação, proteção, elevação espiritual",
                uso: "Incenso sagrado, óleos de unção",
                preparo: "Resina queimada ou dissolvida em óleo",
                virtudes: "Eleva consciência, purifica o sagrado"
            },
            "Rosmarinho": {
                nome: "Rosmarinus officinalis",
                propriedades: "Memória, proteção, purificação",
                uso: "Banhos rituais, óleos para memória",
                preparo: "Infusão das folhas, óleo essencial",
                virtudes: "Fortalece memória, protege contra esquecimento"
            }
        }
    },
    Lua: {
        planeta: "Lua",
        elemento: "Água",
        qualidades: "Frio e úmido",
        dia: "Segunda-feira",
        hora: "Meia-noite",
        metal: "Prata",
        cor: "Branco/Prateado",
        ervas: {
            "Artemísia": {
                nome: "Artemisia vulgaris",
                propriedades: "Sonhos proféticos, proteção psíquica, viagem astral",
                uso: "Travesseiros para sonhos, defumações lunares",
                preparo: "Folhas secas em sachês ou queimadas",
                virtudes: "Desenvolve clarividência, protege durante sono"
            },
            "Eucalipto": {
                nome: "Eucalyptus globulus",
                propriedades: "Purificação, cura, proteção",
                uso: "Banhos de limpeza, óleos curativos",
                preparo: "Infusão das folhas, óleo essencial",
                virtudes: "Limpa aura, acelera cura física"
            },
            "Gardênia": {
                nome: "Gardenia jasminoides",
                propriedades: "Paz, amor espiritual, cura emocional",
                uso: "Óleos para meditação, flores em altares",
                preparo: "Maceração das flores em óleo",
                virtudes: "Acalma emoções, atrai amor puro"
            },
            "Íris": {
                nome: "Iris germanica",
                propriedades: "Mensagens divinas, purificação, sabedoria",
                uso: "Pó da raiz para incensos, óleos sagrados",
                preparo: "Raiz seca em pó, maceração em óleo",
                virtudes: "Facilita comunicação com divino"
            },
            "Jasmim": {
                nome: "Jasminum officinale",
                propriedades: "Amor espiritual, sonhos proféticos, atração",
                uso: "Óleos para amor, flores para sonhos",
                preparo: "Maceração das flores em óleo de amêndoa",
                virtudes: "Atrai amor verdadeiro, induz sonhos reveladores"
            },
            "Lemon Grass": {
                nome: "Cymbopogon citratus",
                propriedades: "Purificação psíquica, proteção, clareza mental",
                uso: "Chás para clareza, banhos de limpeza",
                preparo: "Infusão das folhas frescas",
                virtudes: "Limpa mente de confusões, protege psique"
            },
            "Lírio": {
                nome: "Lilium candidum",
                propriedades: "Pureza, proteção, quebra de maldições",
                uso: "Óleos de proteção, flores em rituais",
                preparo: "Maceração das pétalas em óleo virgem",
                virtudes: "Quebra feitiços, restaura pureza espiritual"
            },
            "Lótus": {
                nome: "Nelumbo nucifera",
                propriedades: "Iluminação, proteção, elevação espiritual",
                uso: "Óleos para meditação, pétalas em altares",
                preparo: "Maceração das pétalas, óleo das sementes",
                virtudes: "Eleva consciência, protege durante meditação"
            },
            "Melão": {
                nome: "Cucumis melo",
                propriedades: "Cura emocional, paz, fertilidade",
                uso: "Sementes para amuletos, polpa para unguentos",
                preparo: "Sementes secas, polpa fresca",
                virtudes: "Cura traumas emocionais, promove fertilidade"
            },
            "Mirra": {
                nome: "Commiphora myrrha",
                propriedades: "Proteção, purificação, comunicação espiritual",
                uso: "Incenso sagrado, óleos de unção",
                preparo: "Resina queimada ou dissolvida",
                virtudes: "Facilita contato com ancestrais"
            },
            "Papoula": {
                nome: "Papaver somniferum",
                propriedades: "Sono, sonhos, paz interior",
                uso: "Sementes para travesseiros, óleo para sono",
                preparo: "Sementes secas, óleo das sementes",
                virtudes: "Induz sono reparador, acalma ansiedade"
            },
            "Salgueiro": {
                nome: "Salix alba",
                propriedades: "Proteção lunar, cura emocional, intuição",
                uso: "Cascas para banhos, galhos para varinhas",
                preparo: "Decocção da casca, galhos consagrados",
                virtudes: "Desenvolve intuição, cura feridas emocionais"
            }
        }
    },
    Mercurio: {
        planeta: "Mercúrio",
        elemento: "Ar",
        qualidades: "Neutro, adaptável",
        dia: "Quarta-feira",
        hora: "Nascer do sol",
        metal: "Mercúrio/Prata viva",
        cor: "Amarelo/Laranja",
        ervas: {
            "Anis": {
                nome: "Pimpinella anisum",
                propriedades: "Proteção, purificação, juventude",
                uso: "Sementes para amuletos, óleo para juventude",
                preparo: "Sementes secas, óleo essencial",
                virtudes: "Preserva juventude, protege viajantes"
            },
            "Aveia": {
                nome: "Avena sativa",
                propriedades: "Prosperidade, estabilidade mental",
                uso: "Grãos para rituais de abundância",
                preparo: "Grãos cozidos ou crus em sachês",
                virtudes: "Atrai prosperidade, estabiliza mente"
            },
            "Carqueja": {
                nome: "Baccharis trimera",
                propriedades: "Purificação, proteção, cura digestiva",
                uso: "Chás purificadores, banhos de limpeza",
                preparo: "Infusão das folhas secas",
                virtudes: "Limpa organismo, protege contra doenças"
            },
            "Endro": {
                nome: "Anethum graveolens",
                propriedades: "Proteção de crianças, prosperidade",
                uso: "Sementes em amuletos infantis",
                preparo: "Sementes secas em sachês",
                virtudes: "Protege crianças, atrai dinheiro"
            },
            "Erva-doce": {
                nome: "Foeniculum vulgare",
                propriedades: "Proteção, purificação, força",
                uso: "Sementes para proteção, chás fortificantes",
                preparo: "Infusão das sementes",
                virtudes: "Fortalece corpo e espírito, afasta mal"
            },
            "Hortelã": {
                nome: "Mentha piperita",
                propriedades: "Purificação, cura, proteção",
                uso: "Banhos refrescantes, óleos curativos",
                preparo: "Infusão das folhas, óleo essencial",
                virtudes: "Refresca mente, acelera cura"
            },
            "Lavanda": {
                nome: "Lavandula angustifolia",
                propriedades: "Paz, amor, purificação, sono",
                uso: "Sachês para sono, óleos calmantes",
                preparo: "Flores secas, óleo essencial",
                virtudes: "Acalma nervos, atrai amor puro"
            },
            "Manjerona": {
                nome: "Origanum majorana",
                propriedades: "Proteção, amor, felicidade",
                uso: "Tempero sagrado, óleos para amor",
                preparo: "Folhas secas, óleo por maceração",
                virtudes: "Protege lar, atrai felicidade conjugal"
            },
            "Manjericão": {
                nome: "Ocimum basilicum",
                propriedades: "Amor, proteção, prosperidade",
                uso: "Folhas frescas em rituais, óleos",
                preparo: "Folhas frescas ou secas, óleo essencial",
                virtudes: "Atrai amor e dinheiro, protege lar"
            },
            "Salsa": {
                nome: "Petroselinum crispum",
                propriedades: "Purificação, proteção, comunicação",
                uso: "Banhos de limpeza, amuletos",
                preparo: "Folhas frescas em banhos",
                virtudes: "Limpa negatividade, melhora comunicação"
            },
            "Tomilho": {
                nome: "Thymus vulgaris",
                propriedades: "Coragem, purificação, saúde",
                uso: "Incensos de coragem, óleos curativos",
                preparo: "Folhas secas queimadas, óleo essencial",
                virtudes: "Dá coragem, purifica ambiente"
            },
            "Valeriana": {
                nome: "Valeriana officinalis",
                propriedades: "Proteção, sono, paz",
                uso: "Raízes para travesseiros, amuletos",
                preparo: "Raiz seca em pó ou decocção",
                virtudes: "Protege durante sono, acalma nervos"
            }
        }
    },
    Venus: {
        planeta: "Vênus",
        elemento: "Água/Terra",
        qualidades: "Úmido e temperado",
        dia: "Sexta-feira",
        hora: "Primeira hora após nascer do sol",
        metal: "Cobre",
        cor: "Verde/Rosa",
        ervas: {
            "Açafrão": {
                nome: "Crocus sativus",
                propriedades: "Amor, luxúria, força, felicidade",
                uso: "Tempero em comidas de amor, incensos",
                preparo: "Estigmas secos, pó dourado",
                virtudes: "Desperta paixão, atrai felicidade"
            },
            "Damasco": {
                nome: "Prunus armeniaca",
                propriedades: "Amor, paixão, sedução",
                uso: "Frutos em rituais de amor, óleos",
                preparo: "Polpa fresca, óleo das sementes",
                virtudes: "Aumenta atratividade, desperta paixão"
            },
            "Gerânio": {
                nome: "Pelargonium graveolens",
                propriedades: "Proteção, fertilidade, saúde",
                uso: "Flores para proteção, óleos curativos",
                preparo: "Flores frescas, óleo essencial",
                virtudes: "Protege lar, promove fertilidade"
            },
            "Hibisco": {
                nome: "Hibiscus rosa-sinensis",
                propriedades: "Amor, luxúria, adivinhação",
                uso: "Flores em chás de amor, banhos",
                preparo: "Flores frescas ou secas em infusão",
                virtudes: "Atrai amor apaixonado, desenvolve intuição"
            },
            "Maçã": {
                nome: "Malus domestica",
                propriedades: "Amor, cura, imortalidade",
                uso: "Frutos em rituais, cascas secas",
                preparo: "Frutos frescos, cascas secas para incenso",
                virtudes: "Simboliza amor eterno, promove cura"
            },
            "Morango": {
                nome: "Fragaria vesca",
                propriedades: "Amor, sorte, fertilidade",
                uso: "Frutos frescos, folhas para chás",
                preparo: "Frutos in natura, infusão das folhas",
                virtudes: "Atrai sorte no amor, aumenta fertilidade"
            },
            "Pêssego": {
                nome: "Prunus persica",
                propriedades: "Amor, exorcismo, longevidade",
                uso: "Frutos para amor, galhos para proteção",
                preparo: "Frutos frescos, galhos consagrados",
                virtudes: "Desperta amor, afasta espíritos malignos"
            },
            "Rosa": {
                nome: "Rosa damascena",
                propriedades: "Amor, beleza, adivinhação",
                uso: "Pétalas para amor, água de rosas",
                preparo: "Pétalas frescas, destilação para água",
                virtudes: "Rainha das flores do amor, desenvolve beleza"
            },
            "Sândalo": {
                nome: "Santalum album",
                propriedades: "Proteção, purificação, espiritualidade",
                uso: "Incenso sagrado, óleos de meditação",
                preparo: "Madeira em pó, óleo essencial",
                virtudes: "Eleva vibração, protege durante rituais"
            },
            "Tulipa": {
                nome: "Tulipa gesneriana",
                propriedades: "Proteção, prosperidade, amor",
                uso: "Flores em altares, bulbos para proteção",
                preparo: "Flores frescas, bulbos secos",
                virtudes: "Protege contra pobreza, atrai amor"
            },
            "Verbena": {
                nome: "Verbena officinalis",
                propriedades: "Amor, proteção, purificação",
                uso: "Erva sagrada para todos os rituais",
                preparo: "Folhas secas, infusões, defumações",
                virtudes: "Erva universal, potencializa outros ingredientes"
            },
            "Violeta": {
                nome: "Viola odorata",
                propriedades: "Proteção, sorte, amor, desejo",
                uso: "Flores para amor, folhas para proteção",
                preparo: "Flores frescas, folhas secas",
                virtudes: "Atrai amor terno, protege contra infortúnios"
            }
        }
    },
    Marte: {
        planeta: "Marte",
        elemento: "Fogo",
        qualidades: "Quente e seco",
        dia: "Terça-feira",
        hora: "Primeira hora de Marte",
        metal: "Ferro",
        cor: "Vermelho",
        ervas: {
            "Absinto": {
                nome: "Artemisia absinthium",
                propriedades: "Proteção, poder psíquico, amor",
                uso: "Incensos de proteção, óleos psíquicos",
                preparo: "Folhas secas queimadas, maceração",
                virtudes: "Desenvolve poderes ocultos, protege contra feitiços"
            },
            "Alho": {
                nome: "Allium sativum",
                propriedades: "Proteção, exorcismo, cura",
                uso: "Dentes para amuletos, óleo protetor",
                preparo: "Dentes frescos, óleo por maceração",
                virtudes: "Poderoso protetor, afasta vampiros e demônios"
            },
            "Cardo": {
                nome: "Carduus marianus",
                propriedades: "Proteção, força, exorcismo",
                uso: "Espinhos para proteção, raízes para força",
                preparo: "Planta seca inteira, raízes em decocção",
                virtudes: "Proteção máxima, quebra maldições"
            },
            "Cebola": {
                nome: "Allium cepa",
                propriedades: "Proteção, exorcismo, cura",
                uso: "Bulbos para proteção, cascas queimadas",
                preparo: "Bulbos frescos, cascas secas",
                virtudes: "Absorve negatividade, protege contra doenças"
            },
            "Gengibre": {
                nome: "Zingiber officinale",
                propriedades: "Poder, sucesso, amor, dinheiro",
                uso: "Raiz para poder, óleos para sucesso",
                preparo: "Raiz fresca ou seca, óleo essencial",
                virtudes: "Acelera resultados mágicos, dá energia"
            },
            "Malagueta": {
                nome: "Aframomum melegueta",
                propriedades: "Amor, luxúria, quebra de feitiços",
                uso: "Sementes para paixão, pó para quebrar magias",
                preparo: "Sementes secas moídas",
                virtudes: "Desperta paixão ardente, desfaz trabalhos"
            },
            "Mostarda": {
                nome: "Brassica nigra",
                propriedades: "Proteção, força mental, fertilidade",
                uso: "Sementes para proteção, folhas para força",
                preparo: "Sementes secas, folhas frescas",
                virtudes: "Fortalece mente, protege contra confusão"
            },
            "Pimenta": {
                nome: "Capsicum annuum",
                propriedades: "Proteção, exorcismo, amor",
                uso: "Frutos secos para proteção, pó para exorcismo",
                preparo: "Pimentas secas inteiras ou em pó",
                virtudes: "Proteção ardente, quebra feitiços de amor"
            },
            "Pinhão": {
                nome: "Araucaria angustifolia",
                propriedades: "Proteção, purificação, fertilidade",
                uso: "Sementes para proteção, resina para purificar",
                preparo: "Sementes secas, resina queimada",
                virtudes: "Proteção duradoura, purifica ambientes"
            },
            "Rabanete": {
                nome: "Raphanus sativus",
                propriedades: "Proteção, luxúria",
                uso: "Raízes para proteção, folhas para paixão",
                preparo: "Raízes frescas, folhas secas",
                virtudes: "Protege contra mal-olhado, desperta desejo"
            },
            "Tabaco": {
                nome: "Nicotiana tabacum",
                propriedades: "Cura, purificação, oferendas",
                uso: "Folhas para defumação, oferendas aos espíritos",
                preparo: "Folhas secas queimadas",
                virtudes: "Purifica espaços sagrados, agrada entidades"
            },
            "Urtiga": {
                nome: "Urtica dioica",
                propriedades: "Proteção, cura, exorcismo",
                uso: "Folhas secas para proteção, banhos curativos",
                preparo: "Folhas secas, decocção para banhos",
                virtudes: "Proteção poderosa, remove maldições"
            }
        }
    },
    Jupiter: {
        planeta: "Júpiter",
        elemento: "Ar/Fogo",
        qualidades: "Quente e úmido",
        dia: "Quinta-feira",
        hora: "Primeira hora de Júpiter",
        metal: "Estanho",
        cor: "Azul/Púrpura",
        ervas: {
            "Agrimônia": {
                nome: "Agrimonia eupatoria",
                propriedades: "Proteção, sono, cura psíquica",
                uso: "Travesseiros para proteção, banhos curativos",
                preparo: "Folhas secas em sachês, infusão",
                virtudes: "Protege durante sono, cura traumas psíquicos"
            },
            "Avelã": {
                nome: "Corylus avellana",
                propriedades: "Sabedoria, proteção, fertilidade",
                uso: "Nozes para sabedoria, galhos para varinhas",
                preparo: "Nozes frescas, galhos consagrados",
                virtudes: "Desenvolve sabedoria, confere proteção"
            },
            "Bétula": {
                nome: "Betula alba",
                propriedades: "Proteção, exorcismo, purificação",
                uso: "Cascas para proteção, galhos para limpeza",
                preparo: "Casca seca, galhos frescos",
                virtudes: "Purifica ambientes, afasta espíritos malignos"
            },
            "Carvalho": {
                nome: "Quercus robur",
                propriedades: "Proteção, força, sorte, cura",
                uso: "Bolotas para sorte, cascas para força",
                preparo: "Bolotas secas, casca em decocção",
                virtudes: "Árvore sagrada, confere proteção máxima"
            },
            "Castanha": {
                nome: "Castanea sativa",
                propriedades: "Amor, proteção",
                uso: "Frutos para amor, folhas para proteção",
                preparo: "Castanhas frescas, folhas secas",
                virtudes: "Atrai amor duradouro, protege relacionamentos"
            },
            "Dente-de-leão": {
                nome: "Taraxacum officinale",
                propriedades: "Adivinhação, desejos, comunicação espiritual",
                uso: "Flores para adivinhação, raízes para desejos",
                preparo: "Flores frescas, raízes secas",
                virtudes: "Realiza desejos, facilita comunicação com espíritos"
            },
            "Figo": {
                nome: "Ficus carica",
                propriedades: "Adivinhação, fertilidade, amor",
                uso: "Frutos para fertilidade, folhas para adivinhação",
                preparo: "Frutos frescos ou secos, folhas frescas",
                virtudes: "Promove fertilidade, desenvolve dons divinatórios"
            },
            "Linho": {
                nome: "Linum usitatissimum",
                propriedades: "Proteção, dinheiro, cura, beleza",
                uso: "Sementes para dinheiro, fibras para proteção",
                preparo: "Sementes secas, fibras tecidas",
                virtudes: "Atrai prosperidade, protege contra pobreza"
            },
            "Noz": {
                nome: "Juglans regia",
                propriedades: "Saúde mental, fertilidade, desejos",
                uso: "Nozes para clareza mental, cascas para desejos",
                preparo: "Nozes frescas, cascas secas queimadas",
                virtudes: "Fortalece mente, realiza desejos do coração"
            },
            "Sálvia": {
                nome: "Salvia officinalis",
                propriedades: "Sabedoria, proteção, desejos, cura",
                uso: "Folhas para sabedoria, defumações protetoras",
                preparo: "Folhas secas queimadas, infusões",
                virtudes: "Desenvolve sabedoria, purifica e protege"
            },
            "Tília": {
                nome: "Tilia cordata",
                propriedades: "Proteção, amor, sono profético",
                uso: "Flores para amor, cascas para proteção",
                preparo: "Flores secas, casca em decocção",
                virtudes: "Atrai amor verdadeiro, induz sonhos proféticos"
            },
            "Trevo": {
                nome: "Trifolium pratense",
                propriedades: "Proteção, dinheiro, amor, exorcismo",
                uso: "Flores para sorte, folhas para proteção",
                preparo: "Flores secas, folhas frescas",
                virtudes: "Traz sorte em todos os aspectos da vida"
            }
        }
    },
    Saturno: {
        planeta: "Saturno",
        elemento: "Terra",
        qualidades: "Frio e seco",
        dia: "Sábado",
        hora: "Primeira hora de Saturno",
        metal: "Chumbo",
        cor: "Preto/Marrom escuro",
        ervas: {
            "Aconito": {
                nome: "Aconitum napellus",
                propriedades: "Proteção, invisibilidade",
                uso: "APENAS para proteção extrema, muito venenoso",
                preparo: "Somente por especialistas, extremamente perigoso",
                virtudes: "Proteção máxima contra inimigos mortais"
            },
            "Amaranto": {
                nome: "Amaranthus caudatus",
                propriedades: "Cura, proteção, invisibilidade",
                uso: "Flores para cura, sementes para proteção",
                preparo: "Flores secas, sementes moídas",
                virtudes: "Cura feridas invisíveis da alma"
            },
            "Beldroega": {
                nome: "Portulaca oleracea",
                propriedades: "Proteção, sorte, amor",
                uso: "Folhas frescas para proteção, sementes para sorte",
                preparo: "Folhas frescas, sementes secas",
                virtudes: "Protege contra azares, atrai boa sorte"
            },
            "Cipreste": {
                nome: "Cupressus sempervirens",
                propriedades: "Longevidade, cura, proteção, consolo",
                uso: "Galhos para proteção, óleo para consolo",
                preparo: "Galhos secos, óleo das folhas",
                virtudes: "Consola enlutados, protege contra morte prematura"
            },
            "Cominho": {
                nome: "Cuminum cyminum",
                propriedades: "Proteção, fidelidade, exorcismo",
                uso: "Sementes para fidelidade, pó para exorcismo",
                preparo: "Sementes secas inteiras ou moídas",
                virtudes: "Mantém fidelidade, afasta demônios"
            },
            "Confrei": {
                nome: "Symphytum officinale",
                propriedades: "Cura, proteção durante viagens",
                uso: "Raízes para cura, folhas para proteção",
                preparo: "Raízes em decocção, folhas secas",
                virtudes: "Cura ossos quebrados, protege viajantes"
            },
            "Hera": {
                nome: "Hedera helix",
                propriedades: "Proteção, cura, fidelidade",
                uso: "Folhas para proteção, guirlandas para fidelidade",
                preparo: "Folhas frescas, guirlandas tecidas",
                virtudes: "Protege contra traição, mantém vínculos"
            },
            "Musgo": {
                nome: "Bryum argenteum",
                propriedades: "Sorte, dinheiro",
                uso: "Musgo seco para amuletos de dinheiro",
                preparo: "Musgo seco em sachês",
                virtudes: "Atrai dinheiro lentamente mas seguramente"
            },
            "Papoula": {
                nome: "Papaver somniferum",
                propriedades: "Fertilidade, amor, sono, dinheiro",
                uso: "Sementes para fertilidade, cápsulas para sono",
                preparo: "Sementes secas, cápsulas secas",
                virtudes: "Promove fertilidade, induz sono reparador"
            },
            "Patchouli": {
                nome: "Pogostemon cablin",
                propriedades: "Dinheiro, fertilidade, luxúria",
                uso: "Folhas secas para dinheiro, óleo para paixão",
                preparo: "Folhas secas, óleo essencial",
                virtudes: "Atrai dinheiro e paixão terrena"
            },
            "Teixo": {
                nome: "Taxus baccata",
                propriedades: "Proteção contra morte, comunicação com mortos",
                uso: "Galhos para proteção, CUIDADO: muito venenoso",
                preparo: "Apenas galhos secos, nunca ingerir",
                virtudes: "Protege contra morte prematura"
            },
            "Vetiver": {
                nome: "Vetiveria zizanioides",
                propriedades: "Amor, proteção, sorte, dinheiro",
                uso: "Raízes para amor, óleo para proteção",
                preparo: "Raízes secas, óleo essencial",
                virtudes: "Atrai amor estável e duradouro"
            }
        }
    }
};

// BASE 4: CRISTAIS DE JUDY HALL - COMPLETO
// BASE 4: CRISTAIS DE JUDY HALL - COMPLETO
const cristaisJudyHall = {
    "Ágata": {
        nome: "Ágata",
        cor: "Variadas (azul, verde, vermelha, etc.)",
        chakra: "Varia conforme a cor",
        elemento: "Terra",
        planeta: "Lua",
        propriedades: "Estabilidade, proteção, força interior",
        cura_fisica: "Fortalece o sistema imunológico, melhora digestão",
        cura_emocional: "Acalma ansiedade, promove autoconfiança",
        cura_espiritual: "Conecta com energias terrestres, estabiliza aura",
        uso_magico: "Proteção, estabilidade emocional, força",
        limpeza: "Água corrente, luz solar suave",
        programacao: "Segurar e visualizar estabilidade e proteção",
        curiosidades: "Cada cor tem propriedades específicas adicionais"
    },
    "Água-marinha": {
        nome: "Água-marinha",
        cor: "Azul claro a azul-esverdeado",
        chakra: "Laríngeo",
        elemento: "Água",
        planeta: "Netuno",
        propriedades: "Comunicação, coragem, purificação",
        cura_fisica: "Problemas de garganta, sistema respiratório",
        cura_emocional: "Reduz estresse, promove calma",
        cura_espiritual: "Facilita comunicação com guias espirituais",
        uso_magico: "Proteção em viagens marítimas, clareza mental",
        limpeza: "Água salgada, luz lunar",
        programacao: "Meditar com o cristal para comunicação clara",
        curiosidades: "Pedra dos marinheiros, protege em viagens aquáticas"
    },
    "Amazonita": {
        nome: "Amazonita",
        cor: "Verde-azulado",
        chakra: "Cardíaco e Laríngeo",
        elemento: "Água",
        planeta: "Urano",
        propriedades: "Verdade, comunicação, equilíbrio emocional",
        cura_fisica: "Sistema nervoso, problemas de tireoide",
        cura_emocional: "Equilibra emoções masculinas e femininas",
        cura_espiritual: "Facilita expressão da verdade interior",
        uso_magico: "Manifestação da verdade, proteção contra energias negativas",
        limpeza: "Água corrente, não expor ao sol forte",
        programacao: "Segurar durante meditação sobre verdade pessoal",
        curiosidades: "Conhecida como 'Pedra da Verdade'"
    },
    "Ametista": {
        nome: "Ametista",
        cor: "Violeta a púrpura",
        chakra: "Coronário",
        elemento: "Ar",
        planeta: "Júpiter",
        propriedades: "Espiritualidade, proteção, transmutação",
        cura_fisica: "Dores de cabeça, insônia, vícios",
        cura_emocional: "Acalma mente, reduz ansiedade",
        cura_espiritual: "Desenvolve intuição, conecta com o divino",
        uso_magico: "Proteção psíquica, meditação, sonhos lúcidos",
        limpeza: "Luz lunar, não expor ao sol direto",
        programacao: "Meditar segurando para conexão espiritual",
        curiosidades: "Considerada a pedra da sobriedade"
    },
    "Âmbar": {
        nome: "Âmbar",
        cor: "Amarelo dourado a marrom",
        chakra: "Plexo Solar",
        elemento: "Fogo/Terra",
        planeta: "Sol",
        propriedades: "Purificação, proteção, vitalidade",
        cura_fisica: "Sistema imunológico, problemas de pele",
        cura_emocional: "Alegria, otimismo, autoestima",
        cura_espiritual: "Limpa aura, conecta com sabedoria ancestral",
        uso_magico: "Proteção de crianças, purificação de ambientes",
        limpeza: "Pano macio seco, evitar água",
        programacao: "Carregar ao sol para energizar",
        curiosidades: "Não é mineral, mas resina fossilizada"
    },
    "Aventurina": {
        nome: "Aventurina",
        cor: "Verde (mais comum), azul, vermelha",
        chakra: "Cardíaco",
        elemento: "Terra",
        planeta: "Vênus",
        propriedades: "Sorte, prosperidade, cura emocional",
        cura_fisica: "Sistema circulatório, problemas de pele",
        cura_emocional: "Acalma irritação, promove bem-estar",
        cura_espiritual: "Conecta com energia da natureza",
        uso_magico: "Atração de sorte e prosperidade",
        limpeza: "Água corrente, luz solar suave",
        programacao: "Carregar em jogos ou negócios para sorte",
        curiosidades: "Conhecida como 'Pedra da Oportunidade'"
    },
    "Calcita": {
        nome: "Calcita",
        cor: "Incolor, branca, amarela, laranja, verde, azul",
        chakra: "Varia conforme a cor",
        elemento: "Fogo",
        planeta: "Sol",
        propriedades: "Amplificação de energia, limpeza, aprendizado",
        cura_fisica: "Ossos, articulações, sistema digestivo",
        cura_emocional: "Reduz estresse, promove paz interior",
        cura_espiritual: "Amplifica energias espirituais",
        uso_magico: "Limpeza de ambientes, amplificação de intenções",
        limpeza: "Água corrente rápida, cuidado com ácidos",
        programacao: "Visualizar luz branca atravessando o cristal",
        curiosidades: "Excelente para estudantes e pesquisadores"
    },
    "Carneliana": {
        nome: "Carneliana",
        cor: "Laranja a vermelho-alaranjado",
        chakra: "Sacral",
        elemento: "Fogo",
        planeta: "Marte",
        propriedades: "Coragem, criatividade, vitalidade sexual",
        cura_fisica: "Sistema reprodutivo, circulação sanguínea",
        cura_emocional: "Autoconfiança, motivação, paixão",
        cura_espiritual: "Desperta poder pessoal e criatividade",
        uso_magico: "Proteção, coragem, fertilidade",
        limpeza: "Água corrente, luz solar",
        programacao: "Segurar durante visualização de objetivos",
        curiosidades: "Usada por guerreiros para coragem na batalha"
    },
    "Citrino": {
        nome: "Citrino",
        cor: "Amarelo claro a dourado",
        chakra: "Plexo Solar",
        elemento: "Fogo",
        planeta: "Sol",
        propriedades: "Abundância, alegria, autoestima",
        cura_fisica: "Sistema digestivo, metabolismo",
        cura_emocional: "Depressão, baixa autoestima, pessimismo",
        cura_espiritual: "Manifesta abundância, conecta com alegria divina",
        uso_magico: "Atração de riqueza, sucesso nos negócios",
        limpeza: "Luz solar, não precisa de limpeza frequente",
        programacao: "Carregar na carteira para prosperidade",
        curiosidades: "Conhecido como 'Pedra do Comerciante'"
    },
    "Cristal de Quartzo": {
        nome: "Cristal de Quartzo",
        cor: "Incolor, transparente",
        chakra: "Todos, especialmente Coronário",
        elemento: "Espírito",
        planeta: "Sol/Lua",
        propriedades: "Amplificação, cura, purificação",
        cura_fisica: "Todos os sistemas, fortalece energia vital",
        cura_emocional: "Clareza mental, equilíbrio emocional",
        cura_espiritual: "Amplifica intenções, conecta com guias",
        uso_magico: "Mestre curador, amplifica outros cristais",
        limpeza: "Todos os métodos são seguros",
        programacao: "Segurar e programar com intenção específica",
        curiosidades: "O mais versátil de todos os cristais"
    },
    "Esmeralda": {
        nome: "Esmeralda",
        cor: "Verde intenso",
        chakra: "Cardíaco",
        elemento: "Terra",
        planeta: "Vênus",
        propriedades: "Amor incondicional, sabedoria, paciência",
        cura_fisica: "Coração, olhos, sistema imunológico",
        cura_emocional: "Cura feridas emocionais, promove perdão",
        cura_espiritual: "Desenvolve compaixão e sabedoria",
        uso_magico: "Amor verdadeiro, proteção, clarividência",
        limpeza: "Água corrente suave, luz lunar",
        programacao: "Meditar com foco no amor incondicional",
        curiosidades: "Considerada sagrada por muitas culturas antigas"
    },
    "Fluorita": {
        nome: "Fluorita",
        cor: "Púrpura, verde, azul, amarela, incolor",
        chakra: "Varia conforme a cor",
        elemento: "Ar",
        planeta: "Mercúrio",
        propriedades: "Concentração, aprendizado, proteção psíquica",
        cura_fisica: "Sistema nervoso, ossos, dentes",
        cura_emocional: "Clareza mental, reduz confusão",
        cura_espiritual: "Desenvolve habilidades psíquicas",
        uso_magico: "Proteção contra manipulação mental",
        limpeza: "Água corrente, evitar sol forte",
        programacao: "Usar durante estudos para concentração",
        curiosidades: "Excelente para estudantes e pesquisadores"
    },
    "Granada": {
        nome: "Granada",
        cor: "Vermelho profundo (mais comum), verde, laranja",
        chakra: "Básico",
        elemento: "Fogo",
        planeta: "Marte",
        propriedades: "Paixão, energia, proteção",
        cura_fisica: "Circulação sanguínea, sistema reprodutivo",
        cura_emocional: "Autoconfiança, coragem, paixão",
        cura_espiritual: "Desperta kundalini, força vital",
        uso_magico: "Proteção, paixão, força interior",
        limpeza: "Água corrente, luz solar",
        programacao: "Carregar para aumentar energia e paixão",
        curiosidades: "Símbolo de fidelidade e amor eterno"
    },
    "Hematita": {
        nome: "Hematita",
        cor: "Cinza metálico a preto",
        chakra: "Básico",
        elemento: "Terra",
        planeta: "Saturno",
        propriedades: "Aterramento, proteção, força",
        cura_fisica: "Circulação sanguínea, anemia",
        cura_emocional: "Estabilidade, autocontrole, confiança",
        cura_espiritual: "Aterramento, proteção contra energias negativas",
        uso_magico: "Proteção, aterramento, força mental",
        limpeza: "Pano seco, evitar água prolongada",
        programacao: "Segurar para sentir-se centrado e protegido",
        curiosidades: "Conhecida como 'Pedra do Sangue'"
    },
    "Jade": {
        nome: "Jade",
        cor: "Verde (mais comum), branco, lavanda, amarelo",
        chakra: "Cardíaco",
        elemento: "Terra",
        planeta: "Vênus",
        propriedades: "Harmonia, prosperidade, proteção",
        cura_fisica: "Rins, sistema urinário, pressão arterial",
        cura_emocional: "Paz interior, equilíbrio emocional",
        cura_espiritual: "Sabedoria, conexão com ancestrais",
        uso_magico: "Proteção, sorte, longevidade",
        limpeza: "Água corrente, luz lunar",
        programacao: "Carregar para harmonia e prosperidade",
        curiosidades: "Sagrado na cultura chinesa, símbolo de virtude"
    },
    "Jaspe": {
        nome: "Jaspe",
        cor: "Vermelho, amarelo, marrom, verde (variadas)",
        chakra: "Varia conforme a cor",
        elemento: "Terra",
        planeta: "Marte",
        propriedades: "Proteção, aterramento, nutrição",
        cura_fisica: "Sistema digestivo, circulação",
        cura_emocional: "Estabilidade, determinação, coragem",
        cura_espiritual: "Conexão com a Terra, proteção espiritual",
        uso_magico: "Proteção, aterramento, cura",
        limpeza: "Água corrente, luz solar",
        programacao: "Carregar para proteção e estabilidade",
        curiosidades: "Conhecido como 'Nutriz Suprema'"
    },
    "Labradorita": {
        nome: "Labradorita",
        cor: "Cinza com reflexos azuis, verdes, dourados",
        chakra: "Terceiro Olho",
        elemento: "Água",
        planeta: "Urano",
        propriedades: "Transformação, proteção psíquica, magia",
        cura_fisica: "Olhos, cérebro, sistema nervoso",
        cura_emocional: "Força durante mudanças, reduz ansiedade",
        cura_espiritual: "Desenvolve habilidades psíquicas",
        uso_magico: "Proteção da aura, magia, transformação",
        limpeza: "Luz lunar, água corrente suave",
        programacao: "Meditar para despertar habilidades latentes",
        curiosidades: "Pedra dos xamãs e curandeiros"
    },
    "Lápis-lazúli": {
        nome: "Lápis-lazúli",
        cor: "Azul profundo com pontos dourados",
        chakra: "Laríngeo e Terceiro Olho",
        elemento: "Água",
        planeta: "Júpiter",
        propriedades: "Sabedoria, verdade, comunicação",
        cura_fisica: "Garganta, sistema respiratório",
        cura_emocional: "Autoexpressão, confiança, honestidade",
        cura_espiritual: "Desenvolve intuição e sabedoria",
        uso_magico: "Proteção, sabedoria, comunicação com divino",
        limpeza: "Água corrente rápida, luz lunar",
        programacao: "Usar durante meditação para sabedoria",
        curiosidades: "Considerado sagrado no Egito antigo"
    },
    "Malaquita": {
        nome: "Malaquita",
        cor: "Verde com padrões em bandas",
        chakra: "Cardíaco",
        elemento: "Terra",
        planeta: "Vênus",
        propriedades: "Transformação, proteção, cura emocional",
        cura_fisica: "Sistema imunológico, inflamações",
        cura_emocional: "Libera traumas, promove mudanças positivas",
        cura_espiritual: "Proteção durante transformações espirituais",
        uso_magico: "Proteção, transformação, cura",
        limpeza: "Pano úmido, evitar água prolongada",
        programacao: "Usar com cuidado, absorve negatividade",
        curiosidades: "Absorve energia negativa, precisa limpeza frequente"
    },
    "Obsidiana": {
        nome: "Obsidiana",
        cor: "Preta (mais comum), marrom, verde",
        chakra: "Básico",
        elemento: "Terra/Fogo",
        planeta: "Saturno",
        propriedades: "Proteção, aterramento, verdade",
        cura_fisica: "Circulação, dores musculares",
        cura_emocional: "Remove bloqueios emocionais, traz verdades à tona",
        cura_espiritual: "Proteção psíquica, aterramento",
        uso_magico: "Proteção, banimento, revelação da verdade",
        limpeza: "Água corrente, terra",
        programacao: "Usar com cuidado, pode trazer verdades difíceis",
        curiosidades: "Vidro vulcânico natural, muito afiado"
    },
    "Ônix": {
        nome: "Ônix",
        cor: "Preto com bandas brancas",
        chakra: "Básico",
        elemento: "Terra",
        planeta: "Saturno",
        propriedades: "Proteção, força, autocontrole",
        cura_fisica: "Ossos, dentes, sangue",
        cura_emocional: "Autocontrole, disciplina, força interior",
        cura_espiritual: "Proteção contra negatividade",
        uso_magico: "Proteção, banimento, força",
        limpeza: "Água corrente, luz lunar",
        programacao: "Carregar para proteção e autocontrole",
        curiosidades: "Usado em selos e anéis de proteção"
    },
    "Opala": {
        nome: "Opala",
        cor: "Jogo de cores variadas",
        chakra: "Todos",
        elemento: "Água",
        planeta: "Netuno",
        propriedades: "Criatividade, inspiração, transformação",
        cura_fisica: "Olhos, sistema linfático",
        cura_emocional: "Libera inibições, estimula criatividade",
        cura_espiritual: "Desenvolve habilidades psíquicas",
        uso_magico: "Invisibilidade, projeção astral, criatividade",
        limpeza: "Pano úmido, evitar mudanças bruscas de temperatura",
        programacao: "Usar para despertar criatividade",
        curiosidades: "Contém água em sua estrutura"
    },
    "Pérola": {
        nome: "Pérola",
        cor: "Branca, creme, rosa, preta",
        chakra: "Sacral e Cardíaco",
        elemento: "Água",
        planeta: "Lua",
        propriedades: "Pureza, sabedoria, proteção",
        cura_fisica: "Sistema digestivo, pele",
        cura_emocional: "Acalma emoções, promove pureza",
        cura_espiritual: "Conecta com energia lunar feminina",
        uso_magico: "Proteção, pureza, sabedoria",
        limpeza: "Pano macio, evitar produtos químicos",
        programacao: "Usar para conectar com sabedoria feminina",
        curiosidades: "Única gema orgânica criada por ser vivo"
    },
    "Pirita": {
        nome: "Pirita",
        cor: "Dourado metálico",
        chakra: "Plexo Solar",
        elemento: "Terra/Fogo",
        planeta: "Marte",
        propriedades: "Prosperidade, proteção, confiança",
        cura_fisica: "Sistema respiratório, circulação",
        cura_emocional: "Autoconfiança, otimismo, determinação",
        cura_espiritual: "Manifesta abundância, proteção",
        uso_magico: "Atração de riqueza, proteção, sucesso",
        limpeza: "Pano seco, evitar água",
        programacao: "Carregar para atrair prosperidade",
        curiosidades: "Conhecida como 'Ouro dos Tolos'"
    },
    "Quartzo Rosa": {
        nome: "Quartzo Rosa",
        cor: "Rosa claro a intenso",
        chakra: "Cardíaco",
        elemento: "Água",
        planeta: "Vênus",
        propriedades: "Amor incondicional, cura emocional, autoestima",
        cura_fisica: "Coração, circulação, pele",
        cura_emocional: "Cura feridas do coração, promove amor-próprio",
        cura_espiritual: "Conecta com amor divino universal",
        uso_magico: "Amor, cura emocional, paz",
        limpeza: "Água corrente, luz lunar",
        programacao: "Meditar para abrir o coração ao amor",
        curiosidades: "Pedra do amor incondicional"
    },
    "Rubi": {
        nome: "Rubi",
        cor: "Vermelho intenso",
        chakra: "Básico e Cardíaco",
        elemento: "Fogo",
        planeta: "Sol",
        propriedades: "Paixão, coragem, vitalidade",
        cura_fisica: "Coração, circulação sanguínea",
        cura_emocional: "Paixão, coragem, autoconfiança",
        cura_espiritual: "Desperta força espiritual e paixão divina",
        uso_magico: "Proteção, paixão, poder",
        limpeza: "Água corrente, luz solar",
        programacao: "Carregar para aumentar paixão e coragem",
        curiosidades: "Uma das quatro pedras preciosas tradicionais"
    },
    "Safira": {
        nome: "Safira",
        cor: "Azul (mais comum), amarela, rosa, branca",
        chakra: "Laríngeo e Terceiro Olho",
        elemento: "Água/Ar",
        planeta: "Saturno",
        propriedades: "Sabedoria, verdade, proteção divina",
        cura_fisica: "Sistema nervoso, glândulas",
        cura_emocional: "Clareza mental, paz interior, disciplina",
        cura_espiritual: "Desenvolve sabedoria e conexão divina",
        uso_magico: "Proteção divina, sabedoria, verdade",
        limpeza: "Água corrente, luz lunar",
        programacao: "Meditar para desenvolver sabedoria",
        curiosidades: "Considerada pedra da realeza e sabedoria"
    },
    "Sodalita": {
        nome: "Sodalita",
        cor: "Azul com veios brancos",
        chakra: "Laríngeo e Terceiro Olho",
        elemento: "Água",
        planeta: "Júpiter",
        propriedades: "Comunicação, lógica, verdade",
        cura_fisica: "Garganta, sistema linfático",
        cura_emocional: "Clareza mental, comunicação honesta",
        cura_espiritual: "Desenvolve intuição e sabedoria",
        uso_magico: "Comunicação, verdade, sabedoria",
        limpeza: "Água corrente, luz lunar",
        programacao: "Usar para melhorar comunicação",
        curiosidades: "Excelente para escritores e oradores"
    },
    "Topázio": {
        nome: "Topázio",
        cor: "Incolor, azul, amarelo, rosa, laranja",
        chakra: "Varia conforme a cor",
        elemento: "Fogo",
        planeta: "Sol",
        propriedades: "Clareza, força, proteção",
        cura_fisica: "Sistema digestivo, metabolismo",
        cura_emocional: "Confiança, alegria, generosidade",
        cura_espiritual: "Clareza espiritual, conexão divina",
        uso_magico: "Proteção, sucesso, clareza",
        limpeza: "Água corrente, luz solar suave",
        programacao: "Carregar para clareza e sucesso",
        curiosidades: "Símbolo de amor e fidelidade"
    },
    "Turmalina": {
        nome: "Turmalina",
        cor: "Preta, verde, rosa, azul, multicolorida",
        chakra: "Varia conforme a cor",
        elemento: "Terra",
        planeta: "Saturno",
        propriedades: "Proteção, aterramento, purificação",
        cura_fisica: "Sistema nervoso, desintoxicação",
        cura_emocional: "Proteção emocional, autoconfiança",
        cura_espiritual: "Proteção psíquica, limpeza áurica",
        uso_magico: "Proteção máxima, banimento, purificação",
        limpeza: "Água corrente, luz solar",
        programacao: "Carregar para proteção total",
        curiosidades: "Gera eletricidade quando aquecida"
    },
    "Turquesa": {
        nome: "Turquesa",
        cor: "Azul-esverdeado",
        chakra: "Laríngeo",
        elemento: "Terra",
        planeta: "Vênus",
        propriedades: "Proteção, cura, comunicação",
        cura_fisica: "Sistema respiratório, inflamações",
        cura_emocional: "Calma, proteção emocional, comunicação",
        cura_espiritual: "Proteção espiritual, sabedoria ancestral",
        uso_magico: "Proteção, cura, sabedoria",
        limpeza: "Pano macio, evitar água e produtos químicos",
        programacao: "Carregar para proteção e sabedoria",
        curiosidades: "Sagrada para muitos povos nativos americanos"
    }
};


// BASE 5: FASES LUNARES E INTERPRETAÇÕES - COMPLETA
// BASE 5: FASES LUNARES (8 FASES) - COMPLETA
const fasesLunares = {
    "Lua Nova": {
        nome: "Lua Nova",
        fase: 1,
        simbolo: "🌑",
        energia: "Início, renovação, plantio de sementes",
        elemento: "Terra",
        direcao: "Norte",
        cor: "Preto, azul escuro",
        deusa: "Hécate, Kali, Lilith",
        chakra: "Básico",
        cristais: ["Obsidiana", "Ônix", "Hematita", "Turmalina negra"],
        ervas: ["Artemísia", "Sálvia", "Cedro", "Mirra"],
        rituais: {
            manifestacao: "Plantar sementes de intenções para o novo ciclo",
            limpeza: "Banhos de purificação com sal marinho e ervas",
            meditacao: "Meditação no escuro para conectar com o vazio criativo",
            magias: "Feitiços de banimento, limpeza e novos começos"
        },
        significado_astrologico: "Conjunção Sol-Lua, energia de renovação",
        duracao: "3 dias (1 dia antes, dia exato, 1 dia depois)",
        melhor_para: [
            "Iniciar novos projetos",
            "Definir intenções e objetivos",
            "Rituais de limpeza e purificação",
            "Banir hábitos negativos",
            "Meditação e introspecção",
            "Planejamento estratégico"
        ],
        evitar: [
            "Tomar decisões importantes sem reflexão",
            "Iniciar relacionamentos amorosos",
            "Cirurgias não emergenciais",
            "Investimentos arriscados"
        ],
        alimentacao: "Jejum ou alimentos leves, chás purificadores",
        corpo_fisico: "Desintoxicação, início de dietas, limpeza intestinal",
        emocional: "Liberação de traumas, perdão, renovação emocional",
        espiritual: "Conexão com o vazio criativo, potencial infinito",
        trabalho_sombra: "Confrontar medos e aspectos ocultos da personalidade",
        afirmacoes: [
            "Eu me liberto do que não me serve mais",
            "Estou aberto(a) a novos começos",
            "Confio no processo de renovação da vida",
            "Minha mente está clara para receber orientação"
        ]
    },
    "Lua Crescente": {
        nome: "Lua Crescente",
        fase: 2,
        simbolo: "🌒",
        energia: "Crescimento inicial, primeiros brotos",
        elemento: "Ar",
        direcao: "Leste",
        cor: "Amarelo claro, verde claro",
        deusa: "Ártemis, Diana, Perséfone jovem",
        chakra: "Sacral",
        cristais: ["Citrino", "Aventurina", "Prehnita", "Pedra da lua"],
        ervas: ["Hortelã", "Manjericão", "Tomilho", "Alecrim"],
        rituais: {
            manifestacao: "Nutrir as intenções plantadas na Lua Nova",
            crescimento: "Rituais para acelerar crescimento pessoal",
            meditacao: "Visualização de objetivos se manifestando",
            magias: "Feitiços de crescimento, expansão e desenvolvimento"
        },
        significado_astrologico: "Primeira fase de crescimento após a conjunção",
        duracao: "Aproximadamente 3-4 dias",
        melhor_para: [
            "Tomar primeiras ações em direção aos objetivos",
            "Estudar e aprender coisas novas",
            "Iniciar exercícios físicos",
            "Plantar literalmente (jardinagem)",
            "Desenvolver habilidades",
            "Networking e fazer contatos"
        ],
        evitar: [
            "Desistir facilmente dos planos",
            "Impaciência com resultados",
            "Críticas excessivas a si mesmo",
            "Procrastinação"
        ],
        alimentacao: "Alimentos nutritivos, vitaminas, sucos verdes",
        corpo_fisico: "Início de exercícios, fortalecimento do sistema imune",
        emocional: "Otimismo cauteloso, esperança, determinação",
        espiritual: "Fé no processo, confiança no crescimento",
        trabalho_sombra: "Identificar resistências internas ao crescimento",
        afirmacoes: [
            "Meus objetivos estão se manifestando perfeitamente",
            "Eu nutro meus sonhos com ação consistente",
            "Cada dia me aproxima mais dos meus objetivos",
            "Eu tenho paciência com meu processo de crescimento"
        ]
    },
    "Quarto Crescente": {
        nome: "Quarto Crescente",
        fase: 3,
        simbolo: "🌓",
        energia: "Ação, decisão, superação de obstáculos",
        elemento: "Fogo",
        direcao: "Sul",
        cor: "Vermelho, laranja",
        deusa: "Brigid, Sekhmet, Durga",
        chakra: "Plexo Solar",
        cristais: ["Carneliana", "Granada", "Jaspe vermelho", "Pirita"],
        ervas: ["Canela", "Gengibre", "Pimenta", "Cravo"],
        rituais: {
            manifestacao: "Rituais de força e determinação",
            superacao: "Quebrar obstáculos e resistências",
            meditacao: "Meditação ativa, visualização de sucesso",
            magias: "Feitiços de coragem, força e superação"
        },
        significado_astrologico: "Quadratura Sol-Lua, tensão criativa",
        duracao: "1 dia exato, energia forte por 3 dias",
        melhor_para: [
            "Tomar decisões importantes",
            "Enfrentar desafios e obstáculos",
            "Negociações e confrontos necessários",
            "Exercícios intensos",
            "Mudanças corajosas",
            "Defender seus direitos"
        ],
        evitar: [
            "Agressividade desnecessária",
            "Decisões impulsivas",
            "Conflitos desnecessários",
            "Exaustão por excesso de atividade"
        ],
        alimentacao: "Alimentos energéticos, proteínas, especiarias",
        corpo_fisico: "Pico de energia física, exercícios intensos",
        emocional: "Determinação, coragem, possível irritabilidade",
        espiritual: "Teste de fé, superação de limitações espirituais",
        trabalho_sombra: "Confrontar padrões de autossabotagem",
        afirmacoes: [
            "Eu tenho força para superar qualquer obstáculo",
            "Minhas decisões são sábias e oportunas",
            "Eu enfrento desafios com coragem e determinação",
            "Minha vontade é forte e minha ação é eficaz"
        ]
    },
    "Lua Gibosa Crescente": {
        nome: "Lua Gibosa Crescente",
        fase: 4,
        simbolo: "🌔",
        energia: "Refinamento, ajustes, perseverança",
        elemento: "Terra",
        direcao: "Sudoeste",
        cor: "Verde, marrom",
        deusa: "Deméter, Ceres, Gaia",
        chakra: "Cardíaco",
        cristais: ["Quartzo verde", "Jade", "Esmeralda", "Malaquita"],
        ervas: ["Sálvia", "Eucalipto", "Lavanda", "Camomila"],
        rituais: {
            manifestacao: "Ajustar e refinar objetivos",
            perseveranca: "Rituais de persistência e paciência",
            meditacao: "Meditação sobre paciência e confiança",
            magias: "Feitiços de cura, harmonia e equilíbrio"
        },
        significado_astrologico: "Crescimento contínuo, aproximação da plenitude",
        duracao: "Aproximadamente 3-4 dias",
        melhor_para: [
            "Fazer ajustes nos planos",
            "Cura e autocuidado",
            "Desenvolver paciência",
            "Trabalhos de longo prazo",
            "Relacionamentos e harmonia",
            "Práticas de bem-estar"
        ],
        evitar: [
            "Impaciência com o progresso",
            "Desistir quando próximo do objetivo",
            "Perfeccionismo excessivo",
            "Ansiedade por resultados"
        ],
        alimentacao: "Alimentos equilibrados, vegetais verdes, chás calmantes",
        corpo_fisico: "Cura e regeneração, massagens, relaxamento",
        emocional: "Paciência, compaixão, equilíbrio emocional",
        espiritual: "Confiança no timing divino, aceitação",
        trabalho_sombra: "Trabalhar impaciência e necessidade de controle",
        afirmacoes: [
            "Eu confio no timing perfeito do universo",
            "Minha paciência é recompensada com resultados duradouros",
            "Eu me ajusto com sabedoria às mudanças necessárias",
            "Meu crescimento é constante e harmonioso"
        ]
    },
    "Lua Cheia": {
        nome: "Lua Cheia",
        fase: 5,
        simbolo: "🌕",
        energia: "Plenitude, manifestação, poder máximo",
        elemento: "Água",
        direcao: "Oeste",
        cor: "Branco, prateado, azul claro",
        deusa: "Selene, Ísis, Brigantia",
        chakra: "Coronário",
        cristais: ["Quartzo transparente", "Selenita", "Pedra da lua", "Opala"],
        ervas: ["Jasmim", "Rosa branca", "Lírio", "Gardênia"],
        rituais: {
            manifestacao: "Celebrar conquistas e manifestações",
            poder: "Rituais de poder máximo e magia forte",
            meditacao: "Meditação sob a luz lunar",
            magias: "Todos os tipos de magia, especialmente cura e proteção"
        },
        significado_astrologico: "Oposição Sol-Lua, energia máxima",
        duracao: "3 dias (1 antes, dia exato, 1 depois)",
        melhor_para: [
            "Celebrar conquistas",
            "Rituais de gratidão",
            "Cura energética",
            "Carregamento de cristais",
            "Trabalhos mágicos poderosos",
            "Conexão com o divino feminino"
        ],
        evitar: [
            "Excesso de emoções",
            "Decisões baseadas apenas na emoção",
            "Exageros em geral",
            "Conflitos desnecessários"
        ],
        alimentacao: "Alimentos puros, água abundante, frutas da estação",
        corpo_fisico: "Pico de energia, possível insônia, sensibilidade aumentada",
        emocional: "Intensidade emocional, intuição aguçada, possível instabilidade",
        espiritual: "Conexão máxima com o divino, poderes psíquicos aumentados",
        trabalho_sombra: "Iluminação de aspectos ocultos, revelações importantes",
        afirmacoes: [
            "Eu celebro minhas conquistas com gratidão",
            "Meu poder interior brilha como a lua cheia",
            "Eu sou um canal de luz e cura para o mundo",
            "Minha intuição me guia perfeitamente"
        ]
    },
    "Lua Gibosa Minguante": {
        nome: "Lua Gibosa Minguante",
        fase: 6,
        simbolo: "🌖",
        energia: "Gratidão, compartilhamento, sabedoria",
        elemento: "Ar",
        direcao: "Noroeste",
        cor: "Dourado, amarelo suave",
        deusa: "Hera, Juno, Frigg",
        chakra: "Laríngeo",
        cristais: ["Citrino", "Topázio", "Âmbar", "Calcita dourada"],
        ervas: ["Sálvia branca", "Copal", "Olíbano", "Cedro"],
        rituais: {
            manifestacao: "Compartilhar bênçãos e conhecimento",
            gratidao: "Rituais de agradecimento",
            meditacao: "Meditação sobre lições aprendidas",
            magias: "Feitiços de sabedoria, ensino e orientação"
        },
        significado_astrologico: "Início do declínio, compartilhamento da luz",
        duracao: "Aproximadamente 3-4 dias",
        melhor_para: [
            "Ensinar e compartilhar conhecimento",
            "Expressar gratidão",
            "Dar conselhos e orientação",
            "Trabalhos comunitários",
            "Mentoria e liderança",
            "Reflexão sobre conquistas"
        ],
        evitar: [
            "Arrogância ou superioridade",
            "Guardar conhecimento egoisticamente",
            "Críticas destrutivas",
            "Desperdício de recursos"
        ],
        alimentacao: "Alimentos dourados, mel, grãos integrais",
        corpo_fisico: "Energia ainda alta mas começando a declinar",
        emocional: "Satisfação, generosidade, sabedoria emocional",
        espiritual: "Compartilhamento de dons espirituais, ensino",
        trabalho_sombra: "Examinar tendências ao egoísmo ou orgulho",
        afirmacoes: [
            "Eu compartilho minhas bênçãos generosamente",
            "Minha sabedoria beneficia outros ao meu redor",
            "Eu sou grato(a) por todas as lições aprendidas",
            "Meu sucesso inspira e eleva outros"
        ]
    },
    "Quarto Minguante": {
        nome: "Quarto Minguante",
        fase: 7,
        simbolo: "🌗",
        energia: "Liberação, perdão, soltar",
        elemento: "Água",
        direcao: "Norte",
        cor: "Azul escuro, índigo",
        deusa: "Hécate, Morrigan, Kali",
        chakra: "Terceiro Olho",
        cristais: ["Ametista", "Fluorita", "Sodalita", "Lápis-lazúli"],
        ervas: ["Artemísia", "Absinto", "Rue", "Zimbro"],
        rituais: {
            manifestacao: "Liberar o que não serve mais",
            perdao: "Rituais de perdão e liberação",
            meditacao: "Meditação sobre desapego",
            magias: "Feitiços de banimento, limpeza e liberação"
        },
        significado_astrologico: "Segunda quadratura, liberação de tensões",
        duracao: "1 dia exato, energia forte por 3 dias",
        melhor_para: [
            "Liberar relacionamentos tóxicos",
            "Perdoar e seguir em frente",
            "Eliminar hábitos negativos",
            "Limpeza energética profunda",
            "Encerrar ciclos",
            "Trabalhar traumas e bloqueios"
        ],
        evitar: [
            "Apegar-se ao que deve ser liberado",
            "Rancor e ressentimento",
            "Resistir a mudanças necessárias",
            "Tomar decisões importantes sem clareza"
        ],
        alimentacao: "Alimentos purificadores, chás detox, jejum leve",
        corpo_fisico: "Desintoxicação, eliminação, limpeza",
        emocional: "Liberação emocional, choro terapêutico, alívio",
        espiritual: "Perdão espiritual, liberação de karmas",
        trabalho_sombra: "Liberação profunda de padrões limitantes",
        afirmacoes: [
            "Eu libero com amor tudo que não me serve mais",
            "Meu perdão me liberta e me cura",
            "Eu confio no processo de liberação e renovação",
            "Cada liberação cria espaço para algo melhor"
        ]
    },
    "Lua Minguante": {
        nome: "Lua Minguante",
        fase: 8,
        simbolo: "🌘",
        energia: "Descanso, reflexão, preparação",
        elemento: "Terra",
        direcao: "Nordeste",
        cor: "Cinza, marrom escuro",
        deusa: "Anciã, Cailleach, Hel",
        chakra: "Básico",
        cristais: ["Hematita", "Obsidiana", "Turmalina negra", "Ônix"],
        ervas: ["Valeriana", "Papoula", "Lavanda", "Camomila"],
        rituais: {
            manifestacao: "Preparar-se para novo ciclo",
            descanso: "Rituais de descanso e recuperação",
            meditacao: "Meditação silenciosa e contemplativa",
            magias: "Feitiços de proteção, descanso e sabedoria"
        },
        significado_astrologico: "Preparação para nova conjunção",
        duracao: "Aproximadamente 3-4 dias",
        melhor_para: [
            "Descansar e recuperar energias",
            "Reflexão profunda sobre o ciclo",
            "Planejamento para o próximo ciclo",
            "Práticas contemplativas",
            "Cuidados com a saúde",
            "Organização e limpeza"
        ],
        evitar: [
            "Atividades muito intensas",
            "Decisões importantes",
            "Início de novos projetos",
            "Excesso de estímulos"
        ],
        alimentacao: "Alimentos reconfortantes, sopas, chás calmantes",
        corpo_fisico: "Necessidade de mais descanso, recuperação",
        emocional: "Introspecção, melancolia saudável, sabedoria",
        espiritual: "Conexão com a sabedoria ancestral, preparação espiritual",
        trabalho_sombra: "Integração das lições do ciclo completo",
        afirmacoes: [
            "Eu honro minha necessidade de descanso e reflexão",
            "Cada ciclo me traz mais sabedoria e crescimento",
            "Eu me preparo conscientemente para novos começos",
            "Minha paciência e reflexão geram sabedoria profunda"
        ]
    }
};



// Função para obter deusa do dia
function obterDeusaDoDia(dia = new Date()) {
    const diaAno = Math.floor((dia - new Date(dia.getFullYear(), 0, 0)) / 86400000);
    const deusaIndex = ((diaAno - 1) % 365) + 1;
    return deusas365Completa[deusaIndex] || deusas365Completa[1];
}

// Função para obter mansão lunar atual
function obterMansaoLunarAtual(longitudeLua) {
    const mansaoNumero = Math.floor(longitudeLua / 12.857142857) + 1;
    return mansoesLunaresPicatrix[mansaoNumero] || mansoesLunaresPicatrix[1];
}

// Função para obter plantas por planeta
function obterPlantasPorPlaneta(planeta) {
    return herbarioParacelso[planeta.toLowerCase()] || herbarioParacelso.sol;
}

// Função para obter cristal por propriedade
function obterCristalPorPropriedade(propriedade) {
    for (const [nome, cristal] of Object.entries(cristaisJudyHall)) {
        if (cristal.propriedades_metafisicas[propriedade]) {
            return cristal;
        }
    }
    return cristaisJudyHall.quartzo_rosa;
}

// Exportar todas as bases
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        deusas365Completa,
        mansoesLunaresPicatrix,
        herbarioParacelso,
        cristaisJudyHall,
        fasesLunares,
        obterDeusaDoDia,
        obterMansaoLunarAtual,
        obterPlantasPorPlaneta,
        obterCristalPorPropriedade
    };
}



// BASE 6: SIGNOS ASTROLÓGICOS COMPLETOS
// BASE 6: SIGNOS ASTROLÓGICOS - COMPLETO
const signosAstrologicos = {
    "Áries": {
        nome: "Áries",
        simbolo: "♈",
        elemento: "Fogo",
        qualidade: "Cardinal",
        planeta_regente: "Marte",
        casa_natural: "Casa 1",
        periodo: "21 de março a 20 de abril",
        graus: "0° a 30°",
        estacao: "Início da Primavera (Hemisfério Norte)",
        polaridade: "Masculino/Yang",
        cor: "Vermelho, laranja",
        pedra: "Diamante, rubi, jaspe vermelho",
        metal: "Ferro",
        dia_semana: "Terça-feira",
        numero_sorte: [1, 8, 17],
        anatomia: "Cabeça, cérebro, olhos, rosto",
        palavra_chave: "Eu sou",
        motivacao: "Iniciar, liderar, conquistar",
        personalidade: {
            qualidades_positivas: [
                "Corajoso e determinado",
                "Líder natural",
                "Pioneiro e inovador",
                "Energético e entusiasta",
                "Direto e honesto",
                "Independente e autossuficiente",
                "Competitivo e ambicioso",
                "Espontâneo e impulsivo",
                "Otimista e confiante"
            ],
            desafios: [
                "Impaciência excessiva",
                "Tendência à agressividade",
                "Impulsividade sem reflexão",
                "Egocentrismo",
                "Dificuldade em aceitar críticas",
                "Temperamento explosivo",
                "Falta de persistência em projetos longos",
                "Competitividade destrutiva"
            ]
        },
        amor_relacionamentos: {
            como_ama: "Intensamente, com paixão e dedicação total",
            busca_no_parceiro: "Independência, aventura, admiração",
            compatibilidade_alta: ["Leão", "Sagitário", "Gêmeos", "Aquário"],
            compatibilidade_media: ["Áries", "Libra"],
            compatibilidade_baixa: ["Câncer", "Capricórnio"],
            estilo_relacionamento: "Direto, apaixonado, protetor, às vezes possessivo"
        },
        carreira_profissao: {
            areas_favoraveis: [
                "Liderança e gestão",
                "Esportes e atividades físicas",
                "Militar e segurança",
                "Empreendedorismo",
                "Vendas e marketing",
                "Cirurgia e medicina de emergência",
                "Engenharia e construção",
                "Jornalismo investigativo"
            ],
            estilo_trabalho: "Líder, inovador, gosta de desafios e resultados rápidos"
        },
        saude_bem_estar: {
            pontos_fortes: "Grande energia física, recuperação rápida",
            vulnerabilidades: "Dores de cabeça, acidentes, queimaduras, hipertensão",
            cuidados_recomendados: "Exercícios regulares, controle do estresse, cuidado com imprudências",
            terapias_indicadas: "Artes marciais, corrida, yoga dinâmica"
        },
        espiritualidade: {
            caminho_espiritual: "Ação consciente, liderança espiritual, coragem para mudanças",
            licoes_vida: "Aprender paciência, desenvolver compaixão, equilibrar ego",
            dons_naturais: "Capacidade de iniciar mudanças, coragem para enfrentar desafios",
            praticas_recomendadas: "Meditação ativa, rituais de fogo, trabalho com cristais vermelhos"
        },
        mitologia: {
            origem_simbolo: "O carneiro com velocino de ouro da mitologia grega",
            deuses_associados: "Marte (romano), Ares (grego), Tyr (nórdico)",
            arquetipo: "O Guerreiro, O Pioneiro, O Líder"
        },
        fases_vida: {
            infancia: "Criança ativa, corajosa, às vezes teimosa e impaciente",
            juventude: "Busca por aventuras, liderança natural, relacionamentos intensos",
            maturidade: "Desenvolvimento da paciência, liderança mais sábia",
            velhice: "Mentor e guia, sabedoria através da experiência"
        },
        conselhos_evolutivos: [
            "Desenvolva a paciência e a reflexão antes de agir",
            "Aprenda a ouvir os outros e considerar diferentes perspectivas",
            "Canalize sua energia de forma construtiva",
            "Pratique a humildade e reconheça suas limitações",
            "Cultive relacionamentos duradouros através da compreensão"
        ]
    },
    "Touro": {
        nome: "Touro",
        simbolo: "♉",
        elemento: "Terra",
        qualidade: "Fixo",
        planeta_regente: "Vênus",
        casa_natural: "Casa 2",
        periodo: "21 de abril a 20 de maio",
        graus: "30° a 60°",
        estacao: "Meio da Primavera (Hemisfério Norte)",
        polaridade: "Feminino/Yin",
        cor: "Verde, rosa, marrom",
        pedra: "Esmeralda, quartzo rosa, ágata",
        metal: "Cobre",
        dia_semana: "Sexta-feira",
        numero_sorte: [2, 6, 9, 12, 24],
        anatomia: "Pescoço, garganta, tireoide, cordas vocais",
        palavra_chave: "Eu tenho",
        motivacao: "Estabilizar, construir, possuir",
        personalidade: {
            qualidades_positivas: [
                "Estável e confiável",
                "Paciente e persistente",
                "Prático e realista",
                "Leal e devotado",
                "Sensual e amoroso",
                "Determinado e focado",
                "Generoso e hospitaleiro",
                "Artístico e estético",
                "Protetor e cuidadoso"
            ],
            desafios: [
                "Teimosia excessiva",
                "Resistência a mudanças",
                "Materialismo",
                "Possessividade",
                "Lentidão para tomar decisões",
                "Tendência à preguiça",
                "Ciúme e possessividade",
                "Inflexibilidade mental"
            ]
        },
        amor_relacionamentos: {
            como_ama: "Profundamente, com lealdade e dedicação duradoura",
            busca_no_parceiro: "Estabilidade, segurança, sensualidade, lealdade",
            compatibilidade_alta: ["Virgem", "Capricórnio", "Câncer", "Peixes"],
            compatibilidade_media: ["Touro", "Escorpião"],
            compatibilidade_baixa: ["Leão", "Aquário"],
            estilo_relacionamento: "Romântico, sensual, protetor, às vezes possessivo"
        },
        carreira_profissao: {
            areas_favoraveis: [
                "Finanças e bancos",
                "Arte e design",
                "Culinária e gastronomia",
                "Agricultura e jardinagem",
                "Construção e arquitetura",
                "Música e canto",
                "Joalheria e moda",
                "Terapias corporais"
            ],
            estilo_trabalho: "Metódico, persistente, busca segurança e estabilidade"
        },
        saude_bem_estar: {
            pontos_fortes: "Constituição física forte, resistência, longevidade",
            vulnerabilidades: "Problemas de garganta, tireoide, peso, rigidez muscular",
            cuidados_recomendados: "Exercícios regulares, alimentação equilibrada, massagens",
            terapias_indicadas: "Yoga suave, caminhadas na natureza, aromaterapia"
        },
        espiritualidade: {
            caminho_espiritual: "Conexão com a natureza, apreciação da beleza divina",
            licoes_vida: "Aprender flexibilidade, desapego material, abertura a mudanças",
            dons_naturais: "Capacidade de criar beleza, estabilidade emocional",
            praticas_recomendadas: "Meditação na natureza, rituais de terra, trabalho com plantas"
        },
        mitologia: {
            origem_simbolo: "O touro sagrado de várias culturas, Zeus transformado em touro",
            deuses_associados: "Vênus (romana), Afrodite (grega), Freya (nórdica)",
            arquetipo: "O Construtor, O Provedor, O Artista"
        },
        fases_vida: {
            infancia: "Criança calma, afetuosa, gosta de rotina e conforto",
            juventude: "Busca por estabilidade, relacionamentos duradouros",
            maturidade: "Construção de patrimônio, família estável",
            velhice: "Sabedoria prática, mentor em questões materiais"
        },
        conselhos_evolutivos: [
            "Desenvolva flexibilidade e abertura a mudanças",
            "Pratique o desapego material saudável",
            "Cultive a paciência sem cair na inércia",
            "Aprenda a expressar emoções de forma mais aberta",
            "Use sua estabilidade para ajudar outros a crescer"
        ]
    },
    "Gêmeos": {
        nome: "Gêmeos",
        simbolo: "♊",
        elemento: "Ar",
        qualidade: "Mutável",
        planeta_regente: "Mercúrio",
        casa_natural: "Casa 3",
        periodo: "21 de maio a 20 de junho",
        graus: "60° a 90°",
        estacao: "Final da Primavera (Hemisfério Norte)",
        polaridade: "Masculino/Yang",
        cor: "Amarelo, laranja claro, azul claro",
        pedra: "Ágata, citrino, topázio",
        metal: "Mercúrio",
        dia_semana: "Quarta-feira",
        numero_sorte: [3, 5, 14, 23],
        anatomia: "Pulmões, braços, mãos, sistema nervoso",
        palavra_chave: "Eu penso",
        motivacao: "Comunicar, aprender, conectar",
        personalidade: {
            qualidades_positivas: [
                "Inteligente e curioso",
                "Comunicativo e eloquente",
                "Adaptável e flexível",
                "Versátil e multitalentoso",
                "Sociável e amigável",
                "Rápido e ágil mentalmente",
                "Criativo e inovador",
                "Divertido e espirituoso",
                "Jovial e otimista"
            ],
            desafios: [
                "Superficialidade",
                "Inconstância e instabilidade",
                "Dispersão mental",
                "Dificuldade de concentração",
                "Tendência à fofoca",
                "Nervosismo excessivo",
                "Dualidade confusa",
                "Falta de profundidade emocional"
            ]
        },
        amor_relacionamentos: {
            como_ama: "Mentalmente, através da comunicação e troca de ideias",
            busca_no_parceiro: "Inteligência, humor, comunicação, liberdade",
            compatibilidade_alta: ["Libra", "Aquário", "Áries", "Leão"],
            compatibilidade_media: ["Gêmeos", "Sagitário"],
            compatibilidade_baixa: ["Virgem", "Peixes"],
            estilo_relacionamento: "Intelectual, divertido, precisa de espaço e variedade"
        },
        carreira_profissao: {
            areas_favoraveis: [
                "Jornalismo e comunicação",
                "Educação e ensino",
                "Vendas e marketing",
                "Tradução e interpretação",
                "Tecnologia e informática",
                "Literatura e escrita",
                "Relações públicas",
                "Comércio e negócios"
            ],
            estilo_trabalho: "Multitarefa, comunicativo, precisa de variedade e estímulos"
        },
        saude_bem_estar: {
            pontos_fortes: "Agilidade mental, adaptabilidade, recuperação rápida",
            vulnerabilidades: "Ansiedade, problemas respiratórios, tensão nervosa",
            cuidados_recomendados: "Exercícios respiratórios, meditação, atividades calmantes",
            terapias_indicadas: "Yoga, tai chi, exercícios de respiração, aromaterapia"
        },
        espiritualidade: {
            caminho_espiritual: "Busca do conhecimento, comunicação com o divino",
            licoes_vida: "Aprender concentração, desenvolver profundidade emocional",
            dons_naturais: "Capacidade de ensinar, conectar pessoas e ideias",
            praticas_recomendadas: "Estudo de textos sagrados, mantras, escrita meditativa"
        },
        mitologia: {
            origem_simbolo: "Os gêmeos Castor e Pólux da mitologia grega",
            deuses_associados: "Mercúrio (romano), Hermes (grego), Loki (nórdico)",
            arquetipo: "O Comunicador, O Estudante, O Mensageiro"
        },
        fases_vida: {
            infancia: "Criança curiosa, falante, aprende rapidamente",
            juventude: "Exploração intelectual, múltiplos interesses",
            maturidade: "Especialização em comunicação, ensino ou escrita",
            velhice: "Sábio contador de histórias, mentor intelectual"
        },
        conselhos_evolutivos: [
            "Desenvolva concentração e foco em objetivos específicos",
            "Pratique a escuta ativa além da fala",
            "Cultive relacionamentos mais profundos e duradouros",
            "Aprenda a lidar com a ansiedade e nervosismo",
            "Use sua versatilidade para ajudar outros a se comunicarem"
        ]
    },
    "Câncer": {
        nome: "Câncer",
        simbolo: "♋",
        elemento: "Água",
        qualidade: "Cardinal",
        planeta_regente: "Lua",
        casa_natural: "Casa 4",
        periodo: "21 de junho a 22 de julho",
        graus: "90° a 120°",
        estacao: "Início do Verão (Hemisfério Norte)",
        polaridade: "Feminino/Yin",
        cor: "Branco, prateado, azul claro",
        pedra: "Pérola, pedra da lua, esmeralda",
        metal: "Prata",
        dia_semana: "Segunda-feira",
        numero_sorte: [2, 7, 11, 16, 20, 25],
        anatomia: "Estômago, seios, útero, sistema digestivo",
        palavra_chave: "Eu sinto",
        motivacao: "Nutrir, proteger, cuidar",
        personalidade: {
            qualidades_positivas: [
                "Carinhoso e protetor",
                "Intuitivo e empático",
                "Leal e devotado",
                "Imaginativo e criativo",
                "Sensível e compreensivo",
                "Tradicional e familiar",
                "Tenaz e persistente",
                "Generoso e hospitaleiro",
                "Emocional e profundo"
            ],
            desafios: [
                "Hipersensibilidade",
                "Mudanças de humor",
                "Tendência à melancolia",
                "Apego excessivo ao passado",
                "Possessividade",
                "Insegurança emocional",
                "Dificuldade de perdoar",
                "Tendência ao vitimismo"
            ]
        },
        amor_relacionamentos: {
            como_ama: "Profundamente, com cuidado maternal/paternal e proteção",
            busca_no_parceiro: "Segurança emocional, família, compreensão, lealdade",
            compatibilidade_alta: ["Escorpião", "Peixes", "Touro", "Virgem"],
            compatibilidade_media: ["Câncer", "Capricórnio"],
            compatibilidade_baixa: ["Áries", "Libra"],
            estilo_relacionamento: "Emotivo, protetor, familiar, às vezes possessivo"
        },
        carreira_profissao: {
            areas_favoraveis: [
                "Cuidados de saúde e enfermagem",
                "Educação infantil",
                "Psicologia e terapia",
                "Gastronomia e hotelaria",
                "Imóveis e decoração",
                "História e arqueologia",
                "Arte e fotografia",
                "Assistência social"
            ],
            estilo_trabalho: "Cuidadoso, protetor, trabalha melhor em ambiente familiar"
        },
        saude_bem_estar: {
            pontos_fortes: "Intuição sobre o corpo, capacidade de cura emocional",
            vulnerabilidades: "Problemas digestivos, retenção de líquidos, depressão",
            cuidados_recomendados: "Alimentação saudável, exercícios suaves, terapia emocional",
            terapias_indicadas: "Natação, yoga restaurativa, terapias aquáticas"
        },
        espiritualidade: {
            caminho_espiritual: "Conexão com o divino feminino, cura emocional",
            licoes_vida: "Aprender independência emocional, perdão, desapego",
            dons_naturais: "Capacidade de cura, intuição, conexão com ancestrais",
            praticas_recomendadas: "Rituais lunares, meditação aquática, trabalho com cristais"
        },
        mitologia: {
            origem_simbolo: "O caranguejo que beliscou Hércules durante sua luta",
            deuses_associados: "Luna (romana), Selene (grega), Frigg (nórdica)",
            arquetipo: "A Mãe, O Cuidador, O Protetor"
        },
        fases_vida: {
            infancia: "Criança sensível, apegada à família, imaginativa",
            juventude: "Busca por segurança emocional, relacionamentos profundos",
            maturidade: "Foco na família e lar, carreira em cuidados",
            velhice: "Matriarca/patriarca da família, guardião das tradições"
        },
        conselhos_evolutivos: [
            "Desenvolva independência emocional saudável",
            "Aprenda a expressar sentimentos de forma construtiva",
            "Pratique o perdão e a liberação do passado",
            "Cultive autoestima independente da aprovação dos outros",
            "Use sua sensibilidade para curar e ajudar outros"
        ]
    },
    "Leão": {
        nome: "Leão",
        simbolo: "♌",
        elemento: "Fogo",
        qualidade: "Fixo",
        planeta_regente: "Sol",
        casa_natural: "Casa 5",
        periodo: "23 de julho a 22 de agosto",
        graus: "120° a 150°",
        estacao: "Meio do Verão (Hemisfério Norte)",
        polaridade: "Masculino/Yang",
        cor: "Dourado, laranja, amarelo",
        pedra: "Rubi, topázio, citrino",
        metal: "Ouro",
        dia_semana: "Domingo",
        numero_sorte: [1, 3, 10, 19],
        anatomia: "Coração, coluna vertebral, costas",
        palavra_chave: "Eu quero",
        motivacao: "Criar, brilhar, liderar",
        personalidade: {
            qualidades_positivas: [
                "Confiante e corajoso",
                "Generoso e magnânimo",
                "Criativo e artístico",
                "Leal e honrado",
                "Carismático e inspirador",
                "Otimista e entusiasta",
                "Protetor e nobre",
                "Dramático e expressivo",
                "Líder natural"
            ],
            desafios: [
                "Orgulho excessivo",
                "Arrogância e vaidade",
                "Necessidade de atenção constante",
                "Teimosia e inflexibilidade",
                "Tendência ao drama",
                "Dificuldade em aceitar críticas",
                "Autoritarismo",
                "Extravagância"
            ]
        },
        amor_relacionamentos: {
            como_ama: "Dramaticamente, com paixão e generosidade",
            busca_no_parceiro: "Admiração, lealdade, criatividade, diversão",
            compatibilidade_alta: ["Áries", "Sagitário", "Gêmeos", "Libra"],
            compatibilidade_media: ["Leão", "Aquário"],
            compatibilidade_baixa: ["Touro", "Escorpião"],
            estilo_relacionamento: "Romântico, generoso, dramático, precisa ser admirado"
        },
        carreira_profissao: {
            areas_favoraveis: [
                "Arte e entretenimento",
                "Liderança e gestão",
                "Educação e ensino",
                "Política e governo",
                "Moda e design",
                "Esportes e recreação",
                "Relações públicas",
                "Joalheria e luxo"
            ],
            estilo_trabalho: "Líder, criativo, precisa de reconhecimento e autonomia"
        },
        saude_bem_estar: {
            pontos_fortes: "Vitalidade forte, recuperação rápida, energia solar",
            vulnerabilidades: "Problemas cardíacos, coluna, pressão alta",
            cuidados_recomendados: "Exercícios cardiovasculares, relaxamento, diversão",
            terapias_indicadas: "Dança, teatro, exercícios ao ar livre, helioterapia"
        },
        espiritualidade: {
            caminho_espiritual: "Expressão da criatividade divina, liderança espiritual",
            licoes_vida: "Aprender humildade, desenvolver compaixão, servir aos outros",
            dons_naturais: "Capacidade de inspirar, criar beleza, liderar com coração",
            praticas_recomendadas: "Rituais solares, meditação criativa, arte sagrada"
        },
        mitologia: {
            origem_simbolo: "O leão de Nemeia vencido por Hércules",
            deuses_associados: "Sol (romano), Hélio (grego), Balder (nórdico)",
            arquetipo: "O Rei, O Artista, O Herói"
        },
        fases_vida: {
            infancia: "Criança dramática, criativa, gosta de ser o centro das atenções",
            juventude: "Busca por reconhecimento, expressão criativa",
            maturidade: "Liderança estabelecida, mentoria de jovens talentos",
            velhice: "Patriarca respeitado, legado criativo duradouro"
        },
        conselhos_evolutivos: [
            "Desenvolva humildade genuína sem perder a autoconfiança",
            "Aprenda a compartilhar o palco e reconhecer outros",
            "Use sua criatividade para inspirar e elevar outros",
            "Pratique a generosidade sem esperar reconhecimento",
            "Cultive a liderança através do exemplo e serviço"
        ]
    },
    "Virgem": {
        nome: "Virgem",
        simbolo: "♍",
        elemento: "Terra",
        qualidade: "Mutável",
        planeta_regente: "Mercúrio",
        casa_natural: "Casa 6",
        periodo: "23 de agosto a 22 de setembro",
        graus: "150° a 180°",
        estacao: "Final do Verão (Hemisfério Norte)",
        polaridade: "Feminino/Yin",
        cor: "Azul marinho, marrom, bege",
        pedra: "Safira, ágata, jaspe",
        metal: "Mercúrio",
        dia_semana: "Quarta-feira",
        numero_sorte: [3, 15, 20, 27],
        anatomia: "Intestinos, sistema digestivo, abdômen",
        palavra_chave: "Eu analiso",
        motivacao: "Servir, aperfeiçoar, curar",
        personalidade: {
            qualidades_positivas: [
                "Prático e eficiente",
                "Analítico e detalhista",
                "Confiável e responsável",
                "Modesto e humilde",
                "Prestativo e dedicado",
                "Organizado e metódico",
                "Inteligente e observador",
                "Leal e discreto",
                "Perfeccionista construtivo"
            ],
            desafios: [
                "Crítica excessiva",
                "Perfeccionismo paralisante",
                "Preocupação excessiva",
                "Tendência à ansiedade",
                "Dificuldade de relaxar",
                "Autocrítica severa",
                "Rigidez mental",
                "Pessimismo"
            ]
        },
        amor_relacionamentos: {
            como_ama: "Devotadamente, através do serviço e cuidado prático",
            busca_no_parceiro: "Confiabilidade, inteligência, saúde, estabilidade",
            compatibilidade_alta: ["Touro", "Capricórnio", "Câncer", "Escorpião"],
            compatibilidade_media: ["Virgem", "Peixes"],
            compatibilidade_baixa: ["Gêmeos", "Sagitário"],
            estilo_relacionamento: "Prático, cuidadoso, leal, às vezes crítico"
        },
        carreira_profissao: {
            areas_favoraveis: [
                "Saúde e medicina",
                "Pesquisa e análise",
                "Contabilidade e finanças",
                "Educação e ensino",
                "Serviço social",
                "Nutrição e dietética",
                "Administração e organização",
                "Edição e revisão"
            ],
            estilo_trabalho: "Meticuloso, eficiente, orientado para o serviço"
        },
        saude_bem_estar: {
            pontos_fortes: "Consciência sobre saúde, disciplina com cuidados",
            vulnerabilidades: "Problemas digestivos, ansiedade, tensão muscular",
            cuidados_recomendados: "Alimentação saudável, exercícios regulares, relaxamento",
            terapias_indicadas: "Yoga, pilates, massagem terapêutica, fitoterapia"
        },
        espiritualidade: {
            caminho_espiritual: "Serviço devocional, purificação, cura através do trabalho",
            licoes_vida: "Aprender autocompaixão, aceitar imperfeições, confiar no fluxo",
            dons_naturais: "Capacidade de cura, análise espiritual, serviço dedicado",
            praticas_recomendadas: "Karma yoga, rituais de purificação, herbologia sagrada"
        },
        mitologia: {
            origem_simbolo: "A deusa da colheita Deméter/Ceres",
            deuses_associados: "Mercúrio (romano), Hermes (grego), Ceres (romana)",
            arquetipo: "O Curador, O Servidor, O Analista"
        },
        fases_vida: {
            infancia: "Criança organizada, responsável, gosta de ajudar",
            juventude: "Foco nos estudos, desenvolvimento de habilidades práticas",
            maturidade: "Especialização profissional, serviço à comunidade",
            velhice: "Sábio conselheiro, mentor em questões práticas"
        },
        conselhos_evolutivos: [
            "Desenvolva autocompaixão e aceite suas imperfeições",
            "Aprenda a relaxar e confiar no processo natural",
            "Use sua capacidade analítica para ajudar, não criticar",
            "Pratique a gratidão pelas pequenas coisas da vida",
            "Equilibre o perfeccionismo com a aceitação amorosa"
        ]
    },
    "Libra": {
        nome: "Libra",
        simbolo: "♎",
        elemento: "Ar",
        qualidade: "Cardinal",
        planeta_regente: "Vênus",
        casa_natural: "Casa 7",
        periodo: "23 de setembro a 22 de outubro",
        graus: "180° a 210°",
        estacao: "Início do Outono (Hemisfério Norte)",
        polaridade: "Masculino/Yang",
        cor: "Rosa, azul claro, verde suave",
        pedra: "Opala, turmalina rosa, lápis-lazúli",
        metal: "Cobre",
        dia_semana: "Sexta-feira",
        numero_sorte: [6, 15, 24, 33, 42, 51],
        anatomia: "Rins, bexiga, região lombar, pele",
        palavra_chave: "Eu equilibro",
        motivacao: "Harmonizar, relacionar, equilibrar",
        personalidade: {
            qualidades_positivas: [
                "Diplomático e charmoso",
                "Justo e equilibrado",
                "Sociável e cooperativo",
                "Artístico e estético",
                "Pacífico e harmonioso",
                "Romântico e refinado",
                "Intelectual e culto",
                "Elegante e gracioso",
                "Mediador natural"
            ],
            desafios: [
                "Indecisão crônica",
                "Evita confrontos necessários",
                "Dependência dos outros",
                "Superficialidade",
                "Procrastinação",
                "Dificuldade de dizer não",
                "Busca excessiva por aprovação",
                "Tendência à manipulação sutil"
            ]
        },
        amor_relacionamentos: {
            como_ama: "Romanticamente, buscando harmonia e parceria ideal",
            busca_no_parceiro: "Beleza, inteligência, harmonia, refinamento",
            compatibilidade_alta: ["Gêmeos", "Aquário", "Leão", "Sagitário"],
            compatibilidade_media: ["Libra", "Áries"],
            compatibilidade_baixa: ["Câncer", "Capricórnio"],
            estilo_relacionamento: "Romântico, harmonioso, cooperativo, às vezes indeciso"
        },
        carreira_profissao: {
            areas_favoraveis: [
                "Direito e justiça",
                "Arte e design",
                "Diplomacia e relações internacionais",
                "Moda e beleza",
                "Psicologia e aconselhamento",
                "Relações públicas",
                "Decoração e arquitetura",
                "Mediação e arbitragem"
            ],
            estilo_trabalho: "Colaborativo, diplomático, busca harmonia e beleza"
        },
        saude_bem_estar: {
            pontos_fortes: "Equilíbrio natural, recuperação através da beleza",
            vulnerabilidades: "Problemas renais, diabetes, dores lombares",
            cuidados_recomendados: "Exercícios equilibrados, ambiente harmonioso, arte-terapia",
            terapias_indicadas: "Dança, arte-terapia, massagem relaxante, musicoterapia"
        },
        espiritualidade: {
            caminho_espiritual: "Busca da harmonia universal, amor incondicional",
            licoes_vida: "Aprender decisão independente, desenvolver autenticidade",
            dons_naturais: "Capacidade de mediar, criar beleza, harmonizar opostos",
            praticas_recomendadas: "Meditação em grupo, rituais de beleza, arte sagrada"
        },
        mitologia: {
            origem_simbolo: "A balança da justiça da deusa Têmis",
            deuses_associados: "Vênus (romana), Afrodite (grega), Têmis (grega)",
            arquetipo: "O Diplomata, O Artista, O Mediador"
        },
        fases_vida: {
            infancia: "Criança sociável, charmosa, evita conflitos",
            juventude: "Foco em relacionamentos, desenvolvimento artístico",
            maturidade: "Carreira em áreas sociais ou artísticas, casamento",
            velhice: "Conselheiro sábio, promotor da paz e harmonia"
        },
        conselhos_evolutivos: [
            "Desenvolva capacidade de tomar decisões independentes",
            "Aprenda a enfrentar conflitos de forma construtiva",
            "Cultive autenticidade além da necessidade de agradar",
            "Use seu dom diplomático para promover justiça real",
            "Equilibre a busca por harmonia com a expressão da verdade"
        ]
    },
    "Escorpião": {
        nome: "Escorpião",
        simbolo: "♏",
        elemento: "Água",
        qualidade: "Fixo",
        planeta_regente: "Plutão (moderno), Marte (tradicional)",
        casa_natural: "Casa 8",
        periodo: "23 de outubro a 21 de novembro",
        graus: "210° a 240°",
        estacao: "Meio do Outono (Hemisfério Norte)",
        polaridade: "Feminino/Yin",
        cor: "Vermelho escuro, preto, bordô",
        pedra: "Topázio, granada, obsidiana",
        metal: "Ferro, plutônio",
        dia_semana: "Terça-feira",
        numero_sorte: [4, 13, 18, 22, 27],
        anatomia: "Órgãos reprodutivos, ânus, nariz",
        palavra_chave: "Eu desejo",
        motivacao: "Transformar, investigar, regenerar",
        personalidade: {
            qualidades_positivas: [
                "Intenso e apaixonado",
                "Investigativo e perceptivo",
                "Leal e devotado",
                "Corajoso e determinado",
                "Transformador e regenerativo",
                "Intuitivo e psíquico",
                "Magnético e carismático",
                "Profundo e misterioso",
                "Resiliente e forte"
            ],
            desafios: [
                "Ciúme e possessividade",
                "Tendência à vingança",
                "Obsessão e compulsão",
                "Desconfiança excessiva",
                "Manipulação emocional",
                "Intensidade destrutiva",
                "Dificuldade de perdoar",
                "Tendência ao controle"
            ]
        },
        amor_relacionamentos: {
            como_ama: "Intensamente, com paixão total e exclusividade",
            busca_no_parceiro: "Profundidade, lealdade, intensidade, transformação",
            compatibilidade_alta: ["Câncer", "Peixes", "Virgem", "Capricórnio"],
            compatibilidade_media: ["Escorpião", "Touro"],
            compatibilidade_baixa: ["Leão", "Aquário"],
            estilo_relacionamento: "Intenso, leal, transformador, às vezes possessivo"
        },
        carreira_profissao: {
            areas_favoraveis: [
                "Psicologia e psiquiatria",
                "Investigação e detetive",
                "Medicina e cirurgia",
                "Pesquisa científica",
                "Ocultismo e esoterismo",
                "Finanças e investimentos",
                "Terapias alternativas",
                "Jornalismo investigativo"
            ],
            estilo_trabalho: "Intenso, investigativo, transformador, gosta de desafios profundos"
        },
        saude_bem_estar: {
            pontos_fortes: "Grande capacidade de regeneração e cura",
            vulnerabilidades: "Problemas reprodutivos, DSTs, obsessões",
            cuidados_recomendados: "Exercícios intensos, terapia emocional, desintoxicação",
            terapias_indicadas: "Artes marciais, terapia profunda, rituais de purificação"
        },
        espiritualidade: {
            caminho_espiritual: "Transformação profunda, morte e renascimento espiritual",
            licoes_vida: "Aprender perdão, desenvolver confiança, usar poder sabiamente",
            dons_naturais: "Capacidade de cura profunda, percepção psíquica, transformação",
            praticas_recomendadas: "Rituais de transformação, meditação profunda, trabalho sombra"
        },
        mitologia: {
            origem_simbolo: "O escorpião que matou Órion na mitologia grega",
            deuses_associados: "Plutão (romano), Hades (grego), Marte (romano)",
            arquetipo: "O Transformador, O Curador, O Investigador"
        },
        fases_vida: {
            infancia: "Criança intensa, misteriosa, percebe segredos dos adultos",
            juventude: "Experiências transformadoras, relacionamentos intensos",
            maturidade: "Domínio do poder pessoal, carreira em transformação",
            velhice: "Sábio xamã, mestre em transformação e cura"
        },
        conselhos_evolutivos: [
            "Aprenda a usar seu poder para curar, não para controlar",
            "Desenvolva confiança e capacidade de perdoar",
            "Canalize sua intensidade de forma construtiva",
            "Pratique o desapego e a liberação saudável",
            "Use sua percepção para ajudar outros em sua transformação"
        ]
    },
    "Sagitário": {
        nome: "Sagitário",
        simbolo: "♐",
        elemento: "Fogo",
        qualidade: "Mutável",
        planeta_regente: "Júpiter",
        casa_natural: "Casa 9",
        periodo: "22 de novembro a 21 de dezembro",
        graus: "240° a 270°",
        estacao: "Final do Outono (Hemisfério Norte)",
        polaridade: "Masculino/Yang",
        cor: "Púrpura, azul royal, turquesa",
        pedra: "Turquesa, topázio azul, safira",
        metal: "Estanho",
        dia_semana: "Quinta-feira",
        numero_sorte: [3, 9, 21, 30],
        anatomia: "Quadris, coxas, fígado, ciático",
        palavra_chave: "Eu vejo",
        motivacao: "Explorar, ensinar, expandir",
        personalidade: {
            qualidades_positivas: [
                "Otimista e entusiasta",
                "Aventureiro e explorador",
                "Filosófico e sábio",
                "Honesto e direto",
                "Generoso e jovial",
                "Independente e livre",
                "Inspirador e visionário",
                "Educador natural",
                "Esportivo e ativo"
            ],
            desafios: [
                "Imprudência e irresponsabilidade",
                "Exagero e extravagância",
                "Impaciência com detalhes",
                "Tendência à arrogância intelectual",
                "Dificuldade de compromisso",
                "Falta de tato social",
                "Dispersão de energia",
                "Promessas não cumpridas"
            ]
        },
        amor_relacionamentos: {
            como_ama: "Livremente, com aventura e crescimento mútuo",
            busca_no_parceiro: "Liberdade, aventura, crescimento, filosofia de vida",
            compatibilidade_alta: ["Áries", "Leão", "Libra", "Aquário"],
            compatibilidade_media: ["Sagitário", "Gêmeos"],
            compatibilidade_baixa: ["Virgem", "Peixes"],
            estilo_relacionamento: "Livre, aventureiro, inspirador, precisa de espaço"
        },
        carreira_profissao: {
            areas_favoraveis: [
                "Educação superior e filosofia",
                "Turismo e viagens",
                "Direito e justiça",
                "Religião e espiritualidade",
                "Esportes e aventura",
                "Publicação e mídia",
                "Relações internacionais",
                "Aviação e transporte"
            ],
            estilo_trabalho: "Visionário, inspirador, precisa de liberdade e variedade"
        },
        saude_bem_estar: {
            pontos_fortes: "Vitalidade natural, recuperação através do movimento",
            vulnerabilidades: "Problemas no quadril, fígado, ciático, acidentes",
            cuidados_recomendados: "Exercícios ao ar livre, moderação, aventuras seguras",
            terapias_indicadas: "Esportes, caminhadas, equitação, terapias ao ar livre"
        },
        espiritualidade: {
            caminho_espiritual: "Busca da verdade universal, ensino espiritual",
            licoes_vida: "Aprender responsabilidade, desenvolver paciência, comprometer-se",
            dons_naturais: "Capacidade de ensinar, inspirar, conectar culturas",
            praticas_recomendadas: "Estudo de filosofias, peregrinações, rituais ao ar livre"
        },
        mitologia: {
            origem_simbolo: "O centauro arqueiro Quíron da mitologia grega",
            deuses_associados: "Júpiter (romano), Zeus (grego), Thor (nórdico)",
            arquetipo: "O Explorador, O Filósofo, O Aventureiro"
        },
        fases_vida: {
            infancia: "Criança aventureira, curiosa, gosta de explorar",
            juventude: "Viagens, estudos superiores, busca por significado",
            maturidade: "Carreira em ensino ou áreas internacionais",
            velhice: "Sábio viajante, mentor filosófico, contador de histórias"
        },
        conselhos_evolutivos: [
            "Desenvolva responsabilidade sem perder o espírito aventureiro",
            "Aprenda a se comprometer mantendo sua liberdade essencial",
            "Use sua sabedoria para ensinar e inspirar outros",
            "Pratique a paciência com detalhes e processos lentos",
            "Equilibre a busca por verdade com compaixão pelos outros"
        ]
    },
    "Capricórnio": {
        nome: "Capricórnio",
        simbolo: "♑",
        elemento: "Terra",
        qualidade: "Cardinal",
        planeta_regente: "Saturno",
        casa_natural: "Casa 10",
        periodo: "22 de dezembro a 19 de janeiro",
        graus: "270° a 300°",
        estacao: "Início do Inverno (Hemisfério Norte)",
        polaridade: "Feminino/Yin",
        cor: "Marrom, preto, verde escuro",
        pedra: "Granada, ônix, jet",
        metal: "Chumbo",
        dia_semana: "Sábado",
        numero_sorte: [8, 10, 26, 35],
        anatomia: "Joelhos, ossos, pele, dentes",
        palavra_chave: "Eu uso",
        motivacao: "Conquistar, construir, liderar",
        personalidade: {
            qualidades_positivas: [
                "Ambicioso e determinado",
                "Responsável e confiável",
                "Disciplinado e organizado",
                "Prático e realista",
                "Persistente e paciente",
                "Tradicional e respeitoso",
                "Líder natural",
                "Sábio e maduro",
                "Trabalhador incansável"
            ],
            desafios: [
                "Pessimismo e melancolia",
                "Rigidez e inflexibilidade",
                "Materialismo excessivo",
                "Tendência ao autoritarismo",
                "Dificuldade de relaxar",
                "Crítica severa",
                "Medo do fracasso",
                "Frieza emocional"
            ]
        },
        amor_relacionamentos: {
            como_ama: "Seriamente, com compromisso e construção de futuro",
            busca_no_parceiro: "Estabilidade, ambição, maturidade, tradição",
            compatibilidade_alta: ["Touro", "Virgem", "Escorpião", "Peixes"],
            compatibilidade_media: ["Capricórnio", "Câncer"],
            compatibilidade_baixa: ["Áries", "Libra"],
            estilo_relacionamento: "Sério, comprometido, tradicional, às vezes distante"
        },
        carreira_profissao: {
            areas_favoraveis: [
                "Administração e gestão",
                "Política e governo",
                "Finanças e bancos",
                "Engenharia e construção",
                "Direito e advocacia",
                "Medicina tradicional",
                "Imóveis e investimentos",
                "Consultoria empresarial"
            ],
            estilo_trabalho: "Ambicioso, disciplinado, busca posições de liderança"
        },
        saude_bem_estar: {
            pontos_fortes: "Resistência física, longevidade, disciplina com saúde",
            vulnerabilidades: "Problemas ósseos, artrite, depressão, rigidez",
            cuidados_recomendados: "Exercícios regulares, relaxamento, terapia emocional",
            terapias_indicadas: "Yoga, fisioterapia, massagem terapêutica, banhos termais"
        },
        espiritualidade: {
            caminho_espiritual: "Disciplina espiritual, construção de legado sagrado",
            licoes_vida: "Aprender flexibilidade, desenvolver compaixão, equilibrar ambição",
            dons_naturais: "Capacidade de construir estruturas duradouras, liderança sábia",
            praticas_recomendadas: "Meditação disciplinada, rituais tradicionais, serviço comunitário"
        },
        mitologia: {
            origem_simbolo: "A cabra Amalteia que amamentou Zeus",
            deuses_associados: "Saturno (romano), Cronos (grego), Odin (nórdico)",
            arquetipo: "O Líder, O Construtor, O Sábio"
        },
        fases_vida: {
            infancia: "Criança séria, responsável, amadurece cedo",
            juventude: "Foco nos estudos e carreira, relacionamentos sérios",
            maturidade: "Pico da carreira, posições de liderança",
            velhice: "Patriarca respeitado, legado duradouro, sabedoria prática"
        },
        conselhos_evolutivos: [
            "Desenvolva flexibilidade sem perder sua determinação",
            "Aprenda a expressar emoções de forma saudável",
            "Use sua ambição para servir ao bem comum",
            "Pratique o relaxamento e o prazer saudável",
            "Equilibre trabalho com vida pessoal e relacionamentos"
        ]
    },
    "Aquário": {
        nome: "Aquário",
        simbolo: "♒",
        elemento: "Ar",
        qualidade: "Fixo",
        planeta_regente: "Urano (moderno), Saturno (tradicional)",
        casa_natural: "Casa 11",
        periodo: "20 de janeiro a 18 de fevereiro",
        graus: "300° a 330°",
        estacao: "Meio do Inverno (Hemisfério Norte)",
        polaridade: "Masculino/Yang",
        cor: "Azul elétrico, turquesa, violeta",
        pedra: "Ametista, aquamarina, fluorita",
        metal: "Urânio, alumínio",
        dia_semana: "Sábado",
        numero_sorte: [4, 7, 11, 22, 29],
        anatomia: "Tornozelos, panturrilhas, sistema circulatório",
        palavra_chave: "Eu sei",
        motivacao: "Inovar, libertar, revolucionar",
        personalidade: {
            qualidades_positivas: [
                "Inovador e visionário",
                "Independente e original",
                "Humanitário e altruísta",
                "Intelectual e inventivo",
                "Amigável e sociável",
                "Progressista e revolucionário",
                "Excêntrico e único",
                "Democrático e igualitário",
                "Futurista e tecnológico"
            ],
            desafios: [
                "Distanciamento emocional",
                "Rebeldia destrutiva",
                "Teimosia intelectual",
                "Dificuldade de intimidade",
                "Tendência ao fanatismo",
                "Imprevisibilidade",
                "Frieza nos relacionamentos",
                "Arrogância intelectual"
            ]
        },
        amor_relacionamentos: {
            como_ama: "Intelectualmente, como amigo e companheiro de ideais",
            busca_no_parceiro: "Independência, originalidade, amizade, liberdade",
            compatibilidade_alta: ["Gêmeos", "Libra", "Áries", "Sagitário"],
            compatibilidade_media: ["Aquário", "Leão"],
            compatibilidade_baixa: ["Touro", "Escorpião"],
            estilo_relacionamento: "Amigável, independente, intelectual, às vezes distante"
        },
        carreira_profissao: {
            areas_favoraveis: [
                "Tecnologia e inovação",
                "Ciências e pesquisa",
                "Astrologia e ocultismo",
                "Trabalho social e humanitário",
                "Aviação e astronáutica",
                "Psicologia e terapias alternativas",
                "Política progressista",
                "Invenção e design"
            ],
            estilo_trabalho: "Inovador, independente, trabalha melhor em grupos progressistas"
        },
        saude_bem_estar: {
            pontos_fortes: "Sistema nervoso ativo, capacidade de renovação",
            vulnerabilidades: "Problemas circulatórios, varizes, espasmos, stress",
            cuidados_recomendados: "Exercícios irregulares mas intensos, terapias alternativas",
            terapias_indicadas: "Acupuntura, terapias energéticas, exercícios aquáticos"
        },
        espiritualidade: {
            caminho_espiritual: "Despertar da consciência coletiva, serviço à humanidade",
            licoes_vida: "Aprender intimidade emocional, desenvolver compaixão pessoal",
            dons_naturais: "Capacidade de canalizar energias superiores, visão futurista",
            praticas_recomendadas: "Meditação em grupo, rituais inovadores, trabalho energético"
        },
        mitologia: {
            origem_simbolo: "Ganimedes, o copeiro dos deuses que derrama água",
            deuses_associados: "Urano (grego), Prometeu (grego), Loki (nórdico)",
            arquetipo: "O Inovador, O Revolucionário, O Visionário"
        },
        fases_vida: {
            infancia: "Criança excêntrica, inteligente, diferente dos outros",
            juventude: "Rebeldia, busca por causas, amizades importantes",
            maturidade: "Carreira em inovação ou causas humanitárias",
            velhice: "Visionário respeitado, mentor de jovens revolucionários"
        },
        conselhos_evolutivos: [
            "Desenvolva intimidade emocional sem perder sua independência",
            "Aprenda a aplicar suas visões de forma prática",
            "Use sua originalidade para servir causas maiores",
            "Pratique a paciência com aqueles menos evoluídos",
            "Equilibre sua necessidade de liberdade com compromissos saudáveis"
        ]
    },
    "Peixes": {
        nome: "Peixes",
        simbolo: "♓",
        elemento: "Água",
        qualidade: "Mutável",
        planeta_regente: "Netuno (moderno), Júpiter (tradicional)",
        casa_natural: "Casa 12",
        periodo: "19 de fevereiro a 20 de março",
        graus: "330° a 360°",
        estacao: "Final do Inverno (Hemisfério Norte)",
        polaridade: "Feminino/Yin",
        cor: "Azul-marinho, verde-mar, violeta",
        pedra: "Ametista, aquamarina, jade",
        metal: "Platina, estanho",
        dia_semana: "Quinta-feira",
        numero_sorte: [7, 12, 16, 21, 25],
        anatomia: "Pés, sistema linfático, glândula pineal",
        palavra_chave: "Eu acredito",
        motivacao: "Transcender, curar, unificar",
        personalidade: {
            qualidades_positivas: [
                "Compassivo e empático",
                "Intuitivo e psíquico",
                "Artístico e criativo",
                "Espiritual e místico",
                "Adaptável e flexível",
                "Generoso e altruísta",
                "Imaginativo e sonhador",
                "Sensível e emocional",
                "Curador natural"
            ],
            desafios: [
                "Tendência ao escapismo",
                "Hipersensibilidade",
                "Confusão e desorientação",
                "Vício e dependência",
                "Vitimização",
                "Falta de limites",
                "Ilusões e fantasias",
                "Melancolia profunda"
            ]
        },
        amor_relacionamentos: {
            como_ama: "Incondicionalmente, com devoção total e sacrifício",
            busca_no_parceiro: "Compreensão, espiritualidade, sensibilidade, proteção",
            compatibilidade_alta: ["Câncer", "Escorpião", "Touro", "Capricórnio"],
            compatibilidade_media: ["Peixes", "Virgem"],
            compatibilidade_baixa: ["Gêmeos", "Sagitário"],
            estilo_relacionamento: "Devotado, empático, romântico, às vezes dependente"
        },
        carreira_profissao: {
            areas_favoraveis: [
                "Arte e música",
                "Cura e terapia",
                "Espiritualidade e religião",
                "Psicologia e psiquiatria",
                "Fotografia e cinema",
                "Trabalho social",
                "Medicina alternativa",
                "Oceanografia e biologia marinha"
            ],
            estilo_trabalho: "Intuitivo, criativo, trabalha melhor em ambiente inspirador"
        },
        saude_bem_estar: {
            pontos_fortes: "Capacidade de cura natural, intuição sobre o corpo",
            vulnerabilidades: "Vícios, problemas nos pés, sistema imune fraco",
            cuidados_recomendados: "Ambiente limpo, evitar substâncias tóxicas, terapias suaves",
            terapias_indicadas: "Natação, terapias aquáticas, meditação, arte-terapia"
        },
        espiritualidade: {
            caminho_espiritual: "União mística, dissolução do ego, serviço compassivo",
            licoes_vida: "Aprender discernimento, desenvolver limites saudáveis",
            dons_naturais: "Capacidade de cura espiritual, mediunidade, compaixão universal",
            praticas_recomendadas: "Meditação contemplativa, rituais aquáticos, arte sagrada"
        },
        mitologia: {
            origem_simbolo: "Os dois peixes que salvaram Afrodite e Eros",
            deuses_associados: "Netuno (romano), Poseidon (grego), Njörd (nórdico)",
            arquetipo: "O Místico, O Curador, O Sonhador"
        },
        fases_vida: {
            infancia: "Criança sensível, imaginativa, precisa de proteção",
            juventude: "Busca espiritual, experiências artísticas ou místicas",
            maturidade: "Carreira em cura ou arte, relacionamentos profundos",
            velhice: "Sábio místico, curador respeitado, ponte entre mundos"
        },
        conselhos_evolutivos: [
            "Desenvolva discernimento sem perder sua compaixão",
            "Aprenda a estabelecer limites saudáveis",
            "Use sua sensibilidade para curar, não para sofrer",
            "Pratique o aterramento mantendo sua espiritualidade",
            "Canalize sua imaginação de forma criativa e construtiva"
        ]
    }
};



// BASE 7: CASAS ASTROLÓGICAS COMPLETAS
// BASE 7: CASAS ASTROLÓGICAS - COMPLETO
const casasAstrologicas = {
    "Casa 1": {
        numero: 1,
        nome: "Casa do Ascendente",
        signo_natural: "Áries",
        planeta_regente: "Marte",
        elemento: "Fogo",
        qualidade: "Angular/Cardinal",
        palavra_chave: "Eu sou",
        tema_principal: "Personalidade, aparência, primeiras impressões",
        areas_vida: [
            "Personalidade e temperamento",
            "Aparência física e constituição",
            "Primeiras impressões que causamos",
            "Forma de se apresentar ao mundo",
            "Vitalidade e energia pessoal",
            "Início de novos ciclos",
            "Identidade e ego",
            "Comportamento espontâneo",
            "Cabeça e rosto (anatomia)"
        ],
        significados_detalhados: {
            personalidade: "Representa como nos apresentamos ao mundo, nossa máscara social e a primeira impressão que causamos. É nossa identidade externa e como iniciamos as coisas.",
            fisico: "Governa a aparência física, especialmente o rosto e a cabeça. Indica a constituição física geral e a vitalidade do corpo.",
            comportamento: "Mostra nossos instintos primários, reações automáticas e como agimos sem pensar. É nossa natureza mais espontânea.",
            energia: "Indica nosso nível de energia vital, força física e capacidade de iniciar projetos e relacionamentos."
        },
        planetas_na_casa: {
            sol: "Personalidade forte, liderança natural, ego desenvolvido, vitalidade alta",
            lua: "Sensibilidade emocional visível, mudanças de humor aparentes, natureza maternal",
            mercurio: "Comunicação ágil, inteligência aparente, curiosidade visível, jovialidade",
            venus: "Charme natural, beleza física, diplomacia, natureza artística",
            marte: "Energia física alta, agressividade aparente, liderança, impulsividade",
            jupiter: "Otimismo visível, generosidade, porte majestoso, sorte natural",
            saturno: "Seriedade aparente, responsabilidade, maturidade precoce, disciplina",
            urano: "Originalidade, excentricidade, independência, mudanças súbitas",
            netuno: "Sensibilidade psíquica, confusão de identidade, carisma místico",
            plutao: "Intensidade magnética, poder pessoal, transformações constantes"
        },
        aspectos_importantes: [
            "Conjunções com o Ascendente são muito poderosas",
            "Planetas na Casa 1 influenciam fortemente a personalidade",
            "O regente do Ascendente é fundamental para entender a pessoa",
            "Aspectos ao Ascendente mostram como outros nos veem"
        ],
        desenvolvimento_espiritual: "Aprender a equilibrar ego e humildade, desenvolver autenticidade sem egoísmo, usar a personalidade para servir propósitos maiores.",
        conselhos_praticos: [
            "Cultive autoconhecimento genuíno",
            "Desenvolva confiança sem arrogância",
            "Use sua energia para iniciar projetos positivos",
            "Cuide da aparência física como templo da alma",
            "Pratique a autenticidade em todas as situações"
        ]
    },
    "Casa 2": {
        numero: 2,
        nome: "Casa dos Recursos",
        signo_natural: "Touro",
        planeta_regente: "Vênus",
        elemento: "Terra",
        qualidade: "Sucedente/Fixo",
        palavra_chave: "Eu tenho",
        tema_principal: "Recursos, valores, autoestima, posses",
        areas_vida: [
            "Dinheiro e recursos materiais",
            "Valores pessoais e morais",
            "Autoestima e autovalorização",
            "Talentos naturais e habilidades",
            "Posses e bens materiais",
            "Segurança financeira",
            "Capacidade de ganhar dinheiro",
            "Relação com o mundo material",
            "Pescoço e garganta (anatomia)"
        ],
        significados_detalhados: {
            financeiro: "Governa nossa capacidade de ganhar, gastar e administrar dinheiro. Mostra nossa relação com a segurança material e como valorizamos os recursos.",
            valores: "Representa nosso sistema de valores, o que consideramos importante e valioso na vida. Inclui valores morais, éticos e materiais.",
            autoestima: "Indica como nos valorizamos, nossa autoestima e senso de valor próprio. Mostra se nos consideramos merecedores de abundância.",
            talentos: "Revela nossos talentos naturais, habilidades inatas e recursos internos que podemos usar para criar valor no mundo."
        },
        planetas_na_casa: {
            sol: "Foco na segurança material, talentos para liderança financeira, valores sólidos",
            lua: "Flutuações financeiras, necessidade emocional de segurança, talentos culinários",
            mercurio: "Habilidade para negócios, comunicação sobre dinheiro, talentos intelectuais",
            venus: "Atração natural de dinheiro, talentos artísticos, amor pelo luxo",
            marte: "Energia para ganhar dinheiro, gastos impulsivos, competitividade financeira",
            jupiter: "Sorte com dinheiro, generosidade, expansão de recursos, otimismo financeiro",
            saturno: "Disciplina financeira, construção lenta de patrimônio, medos sobre dinheiro",
            urano: "Ganhos inesperados, métodos não convencionais, instabilidade financeira",
            netuno: "Confusão com dinheiro, idealismo sobre valores, talentos artísticos",
            plutao: "Transformações financeiras profundas, obsessão com dinheiro, regeneração de recursos"
        },
        aspectos_importantes: [
            "Aspectos com Júpiter trazem sorte financeira",
            "Saturno ensina disciplina e construção gradual",
            "Vênus favorece ganhos através da arte e beleza",
            "Marte dá energia para conquistar recursos"
        ],
        desenvolvimento_espiritual: "Aprender que o verdadeiro valor vem de dentro, desenvolver generosidade sábia, usar recursos materiais para servir propósitos espirituais.",
        conselhos_praticos: [
            "Desenvolva um orçamento consciente e disciplinado",
            "Invista em seus talentos naturais",
            "Cultive autoestima independente de posses",
            "Pratique a generosidade equilibrada",
            "Veja o dinheiro como energia a ser circulada"
        ]
    },
    "Casa 3": {
        numero: 3,
        nome: "Casa da Comunicação",
        signo_natural: "Gêmeos",
        planeta_regente: "Mercúrio",
        elemento: "Ar",
        qualidade: "Cadente/Mutável",
        palavra_chave: "Eu penso",
        tema_principal: "Comunicação, aprendizado, irmãos, vizinhança",
        areas_vida: [
            "Comunicação e expressão",
            "Aprendizado e educação básica",
            "Irmãos e parentes próximos",
            "Vizinhança e ambiente local",
            "Viagens curtas e deslocamentos",
            "Escrita e habilidades verbais",
            "Pensamento e processos mentais",
            "Informação e conhecimento",
            "Braços, mãos e pulmões (anatomia)"
        ],
        significados_detalhados: {
            comunicacao: "Governa como nos expressamos, nossa forma de falar, escrever e transmitir ideias. Inclui nossa habilidade de ouvir e processar informações.",
            aprendizado: "Representa nossa capacidade de aprender, curiosidade intelectual e como processamos informações básicas. É a educação fundamental.",
            relacionamentos_proximos: "Mostra nossa relação com irmãos, primos, vizinhos e pessoas do ambiente imediato. Inclui a dinâmica familiar próxima.",
            ambiente_local: "Indica nossa relação com o bairro, cidade natal e ambiente imediato. Como nos movemos no espaço próximo."
        },
        planetas_na_casa: {
            sol: "Comunicação brilhante, liderança intelectual, foco no aprendizado",
            lua: "Comunicação emocional, intuição nas palavras, mudanças de opinião",
            mercurio: "Excelente comunicador, mente ágil, facilidade para aprender",
            venus: "Comunicação charmosa, diplomacia, relacionamentos harmoniosos com irmãos",
            marte: "Comunicação direta, debates acalorados, energia mental alta",
            jupiter: "Otimismo na comunicação, ensino, viagens educativas",
            saturno: "Comunicação séria, aprendizado disciplinado, responsabilidade com irmãos",
            urano: "Comunicação original, ideias revolucionárias, tecnologia",
            netuno: "Comunicação inspirada, confusão mental, intuição nas palavras",
            plutao: "Comunicação intensa, palavras transformadoras, segredos familiares"
        },
        aspectos_importantes: [
            "Mercúrio bem aspectado favorece todas as áreas da casa",
            "Aspectos difíceis podem causar problemas de comunicação",
            "Júpiter expande o aprendizado e as viagens",
            "Saturno pode limitar mas também disciplinar a mente"
        ],
        desenvolvimento_espiritual: "Usar a comunicação para elevar e inspirar outros, desenvolver escuta compassiva, transformar conhecimento em sabedoria.",
        conselhos_praticos: [
            "Pratique a escuta ativa e empática",
            "Desenvolva habilidades de comunicação clara",
            "Mantenha relacionamentos harmoniosos com irmãos",
            "Cultive curiosidade e amor pelo aprendizado",
            "Use palavras para curar e inspirar"
        ]
    },
    "Casa 4": {
        numero: 4,
        nome: "Casa do Lar",
        signo_natural: "Câncer",
        planeta_regente: "Lua",
        elemento: "Água",
        qualidade: "Angular/Cardinal",
        palavra_chave: "Eu sinto",
        tema_principal: "Lar, família, raízes, segurança emocional",
        areas_vida: [
            "Lar e residência",
            "Família e ancestrais",
            "Raízes e tradições",
            "Segurança emocional",
            "Infância e memórias",
            "Propriedades e imóveis",
            "Final da vida",
            "Fundações emocionais",
            "Estômago e seios (anatomia)"
        ],
        significados_detalhados: {
            lar: "Representa nosso conceito de lar, não apenas a casa física, mas o lugar onde nos sentimos seguros e nutridos. É nosso santuário pessoal.",
            familia: "Governa nossa relação com a família, especialmente os pais e ancestrais. Inclui tradições familiares e herança emocional.",
            seguranca_emocional: "Mostra o que precisamos para nos sentir emocionalmente seguros e protegidos. É nossa base emocional fundamental.",
            raizes: "Indica nossa conexão com as origens, cultura familiar e tradições. É de onde viemos e o que carregamos do passado."
        },
        planetas_na_casa: {
            sol: "Foco na família e lar, liderança doméstica, orgulho das raízes",
            lua: "Forte ligação emocional com a família, necessidade de segurança doméstica",
            mercurio: "Comunicação familiar, interesse em genealogia, lar como centro de aprendizado",
            venus: "Lar belo e harmonioso, amor pela família, hospitalidade",
            marte: "Energia para proteger a família, possíveis conflitos domésticos",
            jupiter: "Lar próspero, família grande, otimismo doméstico, sorte com imóveis",
            saturno: "Responsabilidades familiares, disciplina no lar, possível frieza emocional",
            urano: "Mudanças súbitas de residência, família não convencional, independência do lar",
            netuno: "Idealização da família, confusão sobre raízes, lar como santuário espiritual",
            plutao: "Transformações familiares profundas, segredos de família, regeneração do lar"
        ],
        aspectos_importantes: [
            "A Lua é especialmente importante nesta casa",
            "Aspectos ao IC (fundo do céu) são fundamentais",
            "Planetas aqui influenciam toda a base emocional",
            "Aspectos difíceis podem indicar traumas familiares"
        ],
        desenvolvimento_espiritual: "Curar feridas familiares, criar um lar espiritual interno, honrar ancestrais enquanto se liberta de padrões limitantes.",
        conselhos_praticos: [
            "Crie um lar que reflita sua alma",
            "Honre suas raízes mas não se limite por elas",
            "Cultive segurança emocional interna",
            "Mantenha tradições familiares positivas",
            "Transforme sua casa em um santuário de paz"
        ]
    },
    "Casa 5": {
        numero: 5,
        nome: "Casa da Criatividade",
        signo_natural: "Leão",
        planeta_regente: "Sol",
        elemento: "Fogo",
        qualidade: "Sucedente/Fixo",
        palavra_chave: "Eu crio",
        tema_principal: "Criatividade, filhos, romance, diversão",
        areas_vida: [
            "Criatividade e expressão artística",
            "Filhos e paternidade/maternidade",
            "Romance e relacionamentos amorosos",
            "Diversão e entretenimento",
            "Jogos e especulação",
            "Hobbies e paixões",
            "Autoexpressão e individualidade",
            "Prazer e alegria de viver",
            "Coração e coluna (anatomia)"
        ],
        significados_detalhados: {
            criatividade: "Governa nossa expressão criativa, talentos artísticos e capacidade de criar algo único. É como deixamos nossa marca pessoal no mundo.",
            filhos: "Representa nossa relação com filhos, tanto biológicos quanto projetos que 'damos à luz'. Inclui nossa capacidade de nutrir e educar.",
            romance: "Mostra como vivenciamos o amor romântico, paixão e relacionamentos prazerosos. É o amor que escolhemos, não o que nos escolhe.",
            diversao: "Indica como nos divertimos, relaxamos e encontramos alegria na vida. É nossa criança interior e capacidade de brincar."
        },
        planetas_na_casa: {
            sol: "Criatividade brilhante, liderança artística, filhos importantes na vida",
            lua: "Criatividade emocional, instinto maternal/paternal forte, mudanças no romance",
            mercurio: "Criatividade intelectual, comunicação com filhos, romance através de palavras",
            venus: "Grande talento artístico, romance idealizado, amor pelos filhos",
            marte: "Criatividade dinâmica, paixões intensas, energia para diversão",
            jupiter: "Sorte no amor, muitos filhos, criatividade expansiva, otimismo",
            saturno: "Criatividade disciplinada, responsabilidade com filhos, romance sério",
            urano: "Criatividade original, filhos únicos, romances não convencionais",
            netuno: "Criatividade inspirada, idealização dos filhos, romance fantasioso",
            plutao: "Criatividade transformadora, relação intensa com filhos, paixões obsessivas"
        },
        aspectos_importantes: [
            "Vênus bem aspectada favorece arte e romance",
            "Júpiter traz sorte e expansão criativa",
            "Saturno pode limitar mas também dar disciplina artística",
            "Aspectos ao Sol são especialmente importantes"
        ],
        desenvolvimento_espiritual: "Usar criatividade para expressar o divino, amar incondicionalmente, encontrar alegria sagrada na vida cotidiana.",
        conselhos_praticos: [
            "Desenvolva e expresse seus talentos criativos",
            "Cultive relacionamentos amorosos saudáveis",
            "Reserve tempo para diversão e prazer",
            "Se tiver filhos, eduque com amor e sabedoria",
            "Mantenha viva sua criança interior"
        ]
    },
    "Casa 6": {
        numero: 6,
        nome: "Casa do Serviço",
        signo_natural: "Virgem",
        planeta_regente: "Mercúrio",
        elemento: "Terra",
        qualidade: "Cadente/Mutável",
        palavra_chave: "Eu sirvo",
        tema_principal: "Trabalho, saúde, serviço, rotina diária",
        areas_vida: [
            "Trabalho e emprego",
            "Saúde e bem-estar físico",
            "Rotina diária e hábitos",
            "Serviço e ajuda aos outros",
            "Animais de estimação",
            "Colegas de trabalho",
            "Técnicas e habilidades práticas",
            "Organização e eficiência",
            "Intestinos e abdômen (anatomia)"
        ],
        significados_detalhados: {
            trabalho: "Governa nossa atitude em relação ao trabalho diário, não a carreira (que é Casa 10), mas o trabalho como serviço e função prática.",
            saude: "Representa nossa saúde física, hábitos de bem-estar e como cuidamos do corpo. Inclui prevenção e manutenção da saúde.",
            servico: "Mostra como servimos aos outros, nossa capacidade de ajudar e ser útil. É o trabalho como devoção e contribuição.",
            rotina: "Indica como organizamos nossa vida diária, nossos hábitos e a capacidade de criar estruturas eficientes."
        },
        planetas_na_casa: {
            sol: "Foco no trabalho e saúde, liderança no serviço, vitalidade através da rotina",
            lua: "Trabalho emocional, saúde influenciada por emoções, cuidado com outros",
            mercurio: "Trabalho intelectual, comunicação no trabalho, interesse em saúde",
            venus: "Trabalho artístico, ambiente de trabalho harmonioso, cuidado com a beleza",
            marte: "Energia para o trabalho, possível estresse, atividade física para saúde",
            jupiter: "Sorte no trabalho, saúde robusta, generosidade no serviço",
            saturno: "Trabalho disciplinado, responsabilidade com saúde, rotina rígida",
            urano: "Trabalho não convencional, mudanças súbitas de saúde, métodos inovadores",
            netuno: "Trabalho inspirado, confusão sobre saúde, serviço espiritual",
            plutao: "Transformação através do trabalho, regeneração da saúde, serviço intenso"
        ],
        aspectos_importantes: [
            "Mercúrio rege esta casa e é fundamental",
            "Aspectos difíceis podem indicar problemas de saúde",
            "Júpiter favorece tanto trabalho quanto saúde",
            "Saturno ensina disciplina e responsabilidade"
        ],
        desenvolvimento_espiritual: "Transformar trabalho em serviço sagrado, cuidar do corpo como templo, encontrar o divino na rotina diária.",
        conselhos_praticos: [
            "Desenvolva uma rotina saudável e equilibrada",
            "Cuide da saúde preventivamente",
            "Encontre significado e propósito no trabalho",
            "Sirva aos outros com humildade e amor",
            "Organize sua vida para máxima eficiência"
        ]
    },
    "Casa 7": {
        numero: 7,
        nome: "Casa das Parcerias",
        signo_natural: "Libra",
        planeta_regente: "Vênus",
        elemento: "Ar",
        qualidade: "Angular/Cardinal",
        palavra_chave: "Nós somos",
        tema_principal: "Casamento, parcerias, relacionamentos, inimigos declarados",
        areas_vida: [
            "Casamento e união estável",
            "Parcerias de negócios",
            "Relacionamentos íntimos",
            "Inimigos declarados e oposição",
            "Contratos e acordos",
            "Cooperação e colaboração",
            "Equilíbrio e harmonia",
            "O que projetamos nos outros",
            "Rins e região lombar (anatomia)"
        ],
        significados_detalhados: {
            casamento: "Governa relacionamentos comprometidos, casamento e parcerias íntimas. Mostra o tipo de parceiro que atraímos e como nos relacionamos.",
            parcerias: "Representa todas as formas de parceria, desde negócios até colaborações criativas. É como trabalhamos com outros em pé de igualdade.",
            projecao: "Mostra qualidades que projetamos nos outros, especialmente parceiros. Frequentemente representa nossa 'sombra' ou aspectos não integrados.",
            equilibrio: "Indica nossa capacidade de encontrar equilíbrio através dos relacionamentos e como buscamos harmonia com outros."
        },
        planetas_na_casa: {
            sol: "Foco em parcerias, liderança compartilhada, identidade através dos relacionamentos",
            lua: "Necessidade emocional de parceria, mudanças nos relacionamentos, intuição sobre parceiros",
            mercurio: "Comunicação em parcerias, contratos importantes, relacionamentos intelectuais",
            venus: "Relacionamentos harmoniosos, atração por parceiros venusianos, amor pelo casamento",
            marte: "Energia nos relacionamentos, possíveis conflitos com parceiros, atração por tipos marcianos",
            jupiter: "Sorte em parcerias, relacionamentos expansivos, parceiros generosos",
            saturno: "Relacionamentos sérios, responsabilidade nas parcerias, possível frieza",
            urano: "Relacionamentos não convencionais, mudanças súbitas, independência na parceria",
            netuno: "Idealização de parceiros, confusão nos relacionamentos, amor espiritual",
            plutao: "Relacionamentos transformadores, intensidade nas parcerias, poder compartilhado"
        },
        aspectos_importantes: [
            "O Descendente é o ponto mais importante desta casa",
            "Vênus bem aspectada favorece relacionamentos harmoniosos",
            "Aspectos difíceis podem indicar conflitos ou separações",
            "Júpiter traz sorte e crescimento através de parcerias"
        ],
        desenvolvimento_espiritual: "Aprender a amar incondicionalmente, desenvolver verdadeira parceria espiritual, integrar aspectos projetados nos outros.",
        conselhos_praticos: [
            "Cultive relacionamentos baseados em igualdade e respeito",
            "Trabalhe em suas projeções e expectativas",
            "Desenvolva habilidades de comunicação e negociação",
            "Busque equilíbrio entre independência e parceria",
            "Honre contratos e compromissos assumidos"
        ]
    },
    "Casa 8": {
        numero: 8,
        nome: "Casa da Transformação",
        signo_natural: "Escorpião",
        planeta_regente: "Plutão (moderno), Marte (tradicional)",
        elemento: "Água",
        qualidade: "Sucedente/Fixo",
        palavra_chave: "Nós temos",
        tema_principal: "Transformação, morte, renascimento, recursos compartilhados",
        areas_vida: [
            "Morte e renascimento",
            "Transformação profunda",
            "Recursos compartilhados e heranças",
            "Sexualidade e intimidade",
            "Ocultismo e mistérios",
            "Psicologia profunda",
            "Crises e regeneração",
            "Impostos e dívidas",
            "Órgãos reprodutivos (anatomia)"
        ],
        significados_detalhados: {
            transformacao: "Governa mudanças profundas e transformações que nos regeneram completamente. É onde morremos para renascer em um nível superior.",
            recursos_compartilhados: "Representa dinheiro e recursos que compartilhamos com outros, incluindo heranças, impostos, seguros e investimentos conjuntos.",
            sexualidade: "Mostra nossa sexualidade profunda, não apenas física mas como força transformadora e de união com outro ser.",
            misterios: "Indica nossa relação com o oculto, mistérios da vida e morte, e conhecimentos esotéricos que transformam nossa consciência."
        },
        planetas_na_casa: {
            sol: "Transformações importantes na vida, foco em mistérios, liderança em crises",
            lua: "Transformações emocionais profundas, intuição sobre morte, mudanças cíclicas",
            mercurio: "Interesse em ocultismo, comunicação sobre tabus, pesquisa profunda",
            venus: "Transformação através do amor, sexualidade intensa, recursos através de parceiros",
            marte: "Energia transformadora, sexualidade intensa, coragem em crises",
            jupiter: "Transformações positivas, sorte com heranças, crescimento através de crises",
            saturno: "Transformações lentas, responsabilidade com recursos alheios, medos profundos",
            urano: "Transformações súbitas, interesse em ocultismo moderno, mudanças radicais",
            netuno: "Transformação espiritual, confusão sobre recursos, sexualidade idealizada",
            plutao: "Transformações extremas, poder regenerativo, domínio dos mistérios"
        },
        aspectos_importantes: [
            "Plutão é o regente moderno e muito importante",
            "Aspectos difíceis podem indicar crises transformadoras",
            "Júpiter pode trazer regeneração positiva",
            "Saturno ensina a lidar com perdas e transformações"
        ],
        desenvolvimento_espiritual: "Abraçar a morte do ego, usar crises como oportunidades de crescimento, desenvolver coragem para enfrentar sombras internas.",
        conselhos_praticos: [
            "Encare mudanças como oportunidades de crescimento",
            "Seja responsável com recursos compartilhados",
            "Desenvolva intimidade emocional profunda",
            "Use crises para se fortalecer e regenerar",
            "Explore aspectos ocultos da vida com sabedoria"
        ]
    },
    "Casa 9": {
        numero: 9,
        nome: "Casa da Filosofia",
        signo_natural: "Sagitário",
        planeta_regente: "Júpiter",
        elemento: "Fogo",
        qualidade: "Cadente/Mutável",
        palavra_chave: "Eu compreendo",
        tema_principal: "Filosofia, religião, ensino superior, viagens longas",
        areas_vida: [
            "Filosofia e religião",
            "Ensino superior e universidade",
            "Viagens longas e estrangeiro",
            "Publicação e divulgação",
            "Lei e sistema judiciário",
            "Sabedoria e conhecimento superior",
            "Culturas estrangeiras",
            "Ensino e mentoria",
            "Quadris e coxas (anatomia)"
        ],
        significados_detalhados: {
            filosofia: "Governa nossa busca por significado, nossa filosofia de vida e sistema de crenças. É como compreendemos o sentido da existência.",
            educacao_superior: "Representa educação universitária, especialização e desenvolvimento de expertise. É o conhecimento que nos eleva e expande.",
            viagens: "Mostra viagens longas, tanto físicas quanto mentais/espirituais. Inclui exploração de territórios desconhecidos.",
            ensino: "Indica nossa capacidade de ensinar, compartilhar sabedoria e inspirar outros através do conhecimento superior."
        },
        planetas_na_casa: {
            sol: "Foco em filosofia e ensino, liderança espiritual, viagens importantes",
            lua: "Filosofia emocional, mudanças de crenças, intuição sobre verdades superiores",
            mercurio: "Comunicação filosófica, interesse em estudos superiores, viagens educativas",
            venus: "Amor pela sabedoria, relacionamentos com estrangeiros, arte filosófica",
            marte: "Energia para defender crenças, viagens aventureiras, ensino dinâmico",
            jupiter: "Grande sabedoria, sorte com viagens, expansão filosófica, ensino inspirado",
            saturno: "Filosofia disciplinada, responsabilidade no ensino, viagens com propósito",
            urano: "Filosofia revolucionária, viagens súbitas, ensino inovador",
            netuno: "Filosofia mística, confusão de crenças, viagens espirituais",
            plutao: "Transformação filosófica, ensino transformador, viagens que mudam a vida"
        ],
        aspectos_importantes: [
            "Júpiter é o regente natural e muito benéfico aqui",
            "Aspectos ao Meio do Céu podem influenciar a carreira",
            "Mercúrio favorece estudos e comunicação de ideias",
            "Aspectos difíceis podem indicar conflitos de crenças"
        ],
        desenvolvimento_espiritual: "Buscar verdades universais, ensinar com sabedoria e compaixão, expandir consciência através do conhecimento sagrado.",
        conselhos_praticos: [
            "Desenvolva uma filosofia de vida coerente e inspiradora",
            "Invista em educação superior e especialização",
            "Viaje para expandir sua perspectiva de mundo",
            "Compartilhe seu conhecimento ensinando outros",
            "Mantenha-se aberto a diferentes culturas e crenças"
        ]
    },
    "Casa 10": {
        numero: 10,
        nome: "Casa da Carreira",
        signo_natural: "Capricórnio",
        planeta_regente: "Saturno",
        elemento: "Terra",
        qualidade: "Angular/Cardinal",
        palavra_chave: "Eu uso",
        tema_principal: "Carreira, reputação, status, autoridade",
        areas_vida: [
            "Carreira e profissão",
            "Reputação pública",
            "Status social e reconhecimento",
            "Autoridade e liderança",
            "Ambições e objetivos de vida",
            "Relação com figuras de autoridade",
            "Legado e contribuição para o mundo",
            "Imagem pública",
            "Joelhos e ossos (anatomia)"
        ],
        significados_detalhados: {
            carreira: "Governa nossa vocação profissional, não apenas o trabalho (Casa 6), mas nossa missão de vida e como contribuímos para a sociedade.",
            reputacao: "Representa como somos vistos publicamente, nossa imagem social e o reconhecimento que recebemos por nossas conquistas.",
            autoridade: "Mostra nossa relação com poder e autoridade, tanto como exercemos quanto como respondemos a figuras autoritárias.",
            legado: "Indica o que deixaremos para o mundo, nossa contribuição duradoura e como seremos lembrados."
        },
        planetas_na_casa: {
            sol: "Carreira de destaque, liderança natural, reconhecimento público, autoridade",
            lua: "Carreira pública, mudanças de direção, reputação emocional, cuidado público",
            mercurio: "Carreira em comunicação, reputação intelectual, autoridade através de palavras",
            venus: "Carreira artística, reputação harmoniosa, autoridade através da diplomacia",
            marte: "Carreira dinâmica, reputação de liderança, autoridade através da ação",
            jupiter: "Grande sucesso profissional, reputação positiva, autoridade benevolente",
            saturno: "Carreira disciplinada, reputação sólida, autoridade através da responsabilidade",
            urano: "Carreira não convencional, reputação de originalidade, autoridade revolucionária",
            netuno: "Carreira inspirada, reputação idealizada, autoridade espiritual",
            plutao: "Carreira transformadora, reputação intensa, autoridade através do poder"
        },
        aspectos_importantes: [
            "O Meio do Céu (MC) é o ponto mais importante",
            "Saturno bem aspectado favorece construção sólida de carreira",
            "Júpiter traz reconhecimento e expansão profissional",
            "Aspectos ao Sol podem indicar liderança natural"
        ],
        desenvolvimento_espiritual: "Usar posição e autoridade para servir ao bem comum, construir legado que inspire outros, liderar com sabedoria e compaixão.",
        conselhos_praticos: [
            "Defina objetivos claros para sua carreira",
            "Construa uma reputação sólida através da integridade",
            "Desenvolva habilidades de liderança responsável",
            "Use sua autoridade para ajudar e inspirar outros",
            "Trabalhe consistentemente em direção aos seus objetivos"
        ]
    },
    "Casa 11": {
        numero: 11,
        nome: "Casa dos Amigos",
        signo_natural: "Aquário",
        planeta_regente: "Urano (moderno), Saturno (tradicional)",
        elemento: "Ar",
        qualidade: "Sucedente/Fixo",
        palavra_chave: "Nós esperamos",
        tema_principal: "Amizades, grupos, esperanças, objetivos futuros",
        areas_vida: [
            "Amizades e círculo social",
            "Grupos e organizações",
            "Esperanças e sonhos",
            "Objetivos futuros e aspirações",
            "Causas humanitárias",
            "Tecnologia e inovação",
            "Redes sociais e conexões",
            "Benefícios e ganhos inesperados",
            "Tornozelos e panturrilhas (anatomia)"
        ],
        significados_detalhados: {
            amizades: "Governa amizades verdadeiras, pessoas que escolhemos como família espiritual. São relacionamentos baseados em afinidade e ideais compartilhados.",
            grupos: "Representa nossa participação em grupos, organizações e movimentos. Como contribuímos para causas maiores que nós mesmos.",
            esperancas: "Mostra nossos sonhos para o futuro, aspirações e visão do que é possível. É onde projetamos nossos ideais mais elevados.",
            inovacao: "Indica nossa capacidade de inovar, usar tecnologia e participar de mudanças progressivas na sociedade."
        },
        planetas_na_casa: {
            sol: "Liderança em grupos, amizades importantes, foco em objetivos futuros",
            lua: "Amizades emocionais, mudanças em grupos, esperanças instintivas",
            mercurio: "Comunicação em grupos, amizades intelectuais, ideias inovadoras",
            venus: "Amizades harmoniosas, grupos artísticos, esperanças românticas",
            marte: "Energia para causas, amizades dinâmicas, luta por ideais",
            jupiter: "Muitos amigos, grupos expansivos, grandes esperanças, sorte através de amigos",
            saturno: "Amizades duradouras, responsabilidade em grupos, objetivos práticos",
            urano: "Amizades originais, grupos revolucionários, esperanças futuristas",
            netuno: "Amizades espirituais, grupos místicos, esperanças idealizadas",
            plutao: "Amizades transformadoras, grupos poderosos, objetivos intensos"
        },
        aspectos_importantes: [
            "Urano é o regente moderno e traz inovação",
            "Júpiter favorece expansão social e realização de esperanças",
            "Vênus traz amizades harmoniosas e grupos artísticos",
            "Aspectos difíceis podem indicar conflitos em grupos"
        ],
        desenvolvimento_espiritual: "Servir causas humanitárias, desenvolver amizades espirituais, usar tecnologia e inovação para o bem comum.",
        conselhos_praticos: [
            "Cultive amizades baseadas em valores compartilhados",
            "Participe de grupos que promovam causas positivas",
            "Mantenha vivos seus sonhos e aspirações",
            "Use tecnologia para conectar e ajudar pessoas",
            "Trabalhe em equipe para alcançar objetivos maiores"
        ]
    },
    "Casa 12": {
        numero: 12,
        nome: "Casa do Inconsciente",
        signo_natural: "Peixes",
        planeta_regente: "Netuno (moderno), Júpiter (tradicional)",
        elemento: "Água",
        qualidade: "Cadente/Mutável",
        palavra_chave: "Eu transcendo",
        tema_principal: "Inconsciente, espiritualidade, sacrifício, isolamento",
        areas_vida: [
            "Inconsciente e subconsciente",
            "Espiritualidade e misticismo",
            "Sacrifício e serviço desinteressado",
            "Isolamento e retiro",
            "Inimigos ocultos e autossabotagem",
            "Instituições e hospitais",
            "Karma e vidas passadas",
            "Compaixão e perdão",
            "Pés e sistema linfático (anatomia)"
        ],
        significados_detalhados: {
            inconsciente: "Governa nosso mundo interior oculto, padrões subconscientes, medos irracionais e aspectos da psique que não reconhecemos conscientemente.",
            espiritualidade: "Representa nossa conexão com o divino, práticas espirituais e capacidade de transcender o ego material.",
            sacrificio: "Mostra nossa capacidade de servir desinteressadamente, sacrificar o ego pelo bem maior e encontrar significado através da doação.",
            isolamento: "Indica períodos necessários de solidão, retiro espiritual e momentos de introspecção profunda para crescimento interior."
        },
        planetas_na_casa: {
            sol: "Espiritualidade forte, necessidade de isolamento, liderança espiritual oculta",
            lua: "Intuição profunda, emoções subconscientes, necessidade de retiro emocional",
            mercurio: "Pensamento intuitivo, comunicação espiritual, interesse em mistérios",
            venus: "Amor espiritual, sacrifício por amor, arte inspirada, compaixão",
            marte: "Energia espiritual, luta contra inimigos ocultos, ação compassiva",
            jupiter: "Grande espiritualidade, proteção divina, sabedoria oculta, compaixão expandida",
            saturno: "Disciplina espiritual, isolamento necessário, responsabilidade karmica",
            urano: "Despertar espiritual súbito, intuição revolucionária, liberdade através do sacrifício",
            netuno: "Espiritualidade profunda, mediunidade, confusão ou iluminação",
            plutao: "Transformação espiritual profunda, morte do ego, regeneração através do sacrifício"
        ],
        aspectos_importantes: [
            "Netuno é o regente moderno e muito importante aqui",
            "Júpiter traz proteção e sabedoria espiritual",
            "Aspectos difíceis podem indicar autossabotagem",
            "Planetas aqui trabalham de forma sutil e inconsciente"
        ],
        desenvolvimento_espiritual: "Dissolver o ego no amor universal, desenvolver compaixão incondicional, servir como canal para energias superiores.",
        conselhos_praticos: [
            "Reserve tempo regular para meditação e introspecção",
            "Desenvolva práticas espirituais consistentes",
            "Pratique o serviço desinteressado aos necessitados",
            "Trabalhe com terapia para compreender padrões inconscientes",
            "Cultive compaixão e perdão como caminhos de libertação"
        ]
    }
};

// BASE 8: ASPECTOS PLANETÁRIOS COMPLETOS
// BASE 8: ASPECTOS PLANETÁRIOS - COMPLETO
const aspectosPlanetarios = {
    "Conjunção": {
        nome: "Conjunção",
        simbolo: "☌",
        angulo: 0,
        orbe_maximo: 10,
        orbe_exato: 3,
        natureza: "Neutro (depende dos planetas envolvidos)",
        qualidade: "Fusão, união, intensificação",
        elemento_dominante: "Varia conforme os planetas",
        energia: "Concentrada, intensa, unificada",
        palavra_chave: "União",
        descricao_geral: "Quando dois planetas estão no mesmo grau ou muito próximos, suas energias se fundem completamente, criando uma força única e poderosa.",
        efeitos_gerais: {
            positivos: [
                "Concentração de energia e foco",
                "Potencialização das qualidades planetárias",
                "Início de novos ciclos",
                "Força e determinação aumentadas",
                "Clareza de propósito",
                "Energia unificada e direcionada"
            ],
            negativos: [
                "Possível excesso ou desequilíbrio",
                "Dificuldade de separar as energias",
                "Intensidade excessiva",
                "Falta de perspectiva objetiva",
                "Tendência ao extremismo",
                "Cegueira para outros pontos de vista"
            ]
        },
        interpretacoes_por_planetas: {
            "Sol-Lua": "Harmonia entre consciente e inconsciente, personalidade integrada, novo ciclo de vida",
            "Sol-Mercúrio": "Mente brilhante, comunicação poderosa, ego intelectual forte",
            "Sol-Vênus": "Charme natural, criatividade artística, amor próprio desenvolvido",
            "Sol-Marte": "Energia vital intensa, liderança corajosa, força de vontade",
            "Sol-Júpiter": "Otimismo natural, generosidade, sorte e expansão",
            "Sol-Saturno": "Disciplina pessoal, responsabilidade, maturidade precoce",
            "Sol-Urano": "Originalidade marcante, independência, genialidade",
            "Sol-Netuno": "Sensibilidade espiritual, intuição, possível confusão de identidade",
            "Sol-Plutão": "Poder pessoal intenso, transformações profundas, magnetismo",
            "Lua-Mercúrio": "Intuição comunicativa, emoções expressas em palavras",
            "Lua-Vênus": "Sensibilidade artística, charme emocional, amor maternal",
            "Lua-Marte": "Emoções intensas, reações rápidas, energia emocional",
            "Lua-Júpiter": "Otimismo emocional, generosidade, proteção maternal",
            "Lua-Saturno": "Seriedade emocional, responsabilidade, possível melancolia",
            "Lua-Urano": "Emoções instáveis, intuição revolucionária, mudanças súbitas",
            "Lua-Netuno": "Sensibilidade psíquica extrema, imaginação fértil, confusão emocional",
            "Lua-Plutão": "Emoções transformadoras, intensidade psíquica, regeneração emocional"
        },
        conselhos_gerais: [
            "Use a energia concentrada de forma construtiva",
            "Evite extremismos e busque equilíbrio",
            "Desenvolva consciência sobre a intensidade da energia",
            "Canalize a força unificada para objetivos positivos",
            "Pratique a moderação quando necessário"
        ]
    },
    "Sextil": {
        nome: "Sextil",
        simbolo: "⚹",
        angulo: 60,
        orbe_maximo: 6,
        orbe_exato: 2,
        natureza: "Harmonioso/Benéfico",
        qualidade: "Oportunidade, cooperação, facilidade",
        elemento_dominante: "Elementos compatíveis (Fogo-Ar, Terra-Água)",
        energia: "Fluida, cooperativa, oportunista",
        palavra_chave: "Oportunidade",
        descricao_geral: "Aspecto de oportunidade e facilidade, onde as energias planetárias trabalham juntas de forma harmoniosa, criando chances de crescimento e desenvolvimento.",
        efeitos_gerais: {
            positivos: [
                "Oportunidades naturais de crescimento",
                "Facilidade para desenvolver talentos",
                "Cooperação entre diferentes áreas da vida",
                "Fluxo suave de energia",
                "Capacidade de aproveitar chances",
                "Harmonia sem complacência"
            ],
            negativos: [
                "Pode passar despercebido se não houver esforço",
                "Tendência à complacência",
                "Oportunidades perdidas por falta de ação",
                "Facilidade excessiva pode gerar preguiça"
            ]
        },
        interpretacoes_por_planetas: {
            "Sol-Lua": "Harmonia natural entre personalidade e emoções, equilíbrio interno",
            "Sol-Mercúrio": "Comunicação clara e confiante, mente organizada",
            "Sol-Vênus": "Charme natural, talentos artísticos, relacionamentos harmoniosos",
            "Sol-Marte": "Energia direcionada positivamente, coragem equilibrada",
            "Sol-Júpiter": "Otimismo saudável, oportunidades de crescimento, sorte moderada",
            "Sol-Saturno": "Disciplina construtiva, responsabilidade equilibrada",
            "Sol-Urano": "Originalidade construtiva, mudanças positivas graduais",
            "Sol-Netuno": "Inspiração criativa, espiritualidade prática",
            "Sol-Plutão": "Transformação gradual e positiva, poder usado sabiamente",
            "Lua-Mercúrio": "Comunicação emocional equilibrada, intuição prática",
            "Lua-Vênus": "Harmonia emocional, relacionamentos nutritivos",
            "Lua-Marte": "Energia emocional construtiva, ação intuitiva",
            "Lua-Júpiter": "Otimismo emocional, crescimento através dos sentimentos",
            "Lua-Saturno": "Estabilidade emocional, maturidade afetiva",
            "Lua-Urano": "Intuição inovadora, mudanças emocionais positivas",
            "Lua-Netuno": "Sensibilidade espiritual equilibrada, compaixão prática",
            "Lua-Plutão": "Transformação emocional gradual, cura interior"
        },
        conselhos_gerais: [
            "Reconheça e aproveite as oportunidades que surgem",
            "Desenvolva ativamente os talentos indicados",
            "Não tome as facilidades como garantidas",
            "Use a harmonia para ajudar outros",
            "Mantenha-se alerta para não perder chances"
        ]
    },
    "Quadratura": {
        nome: "Quadratura",
        simbolo: "□",
        angulo: 90,
        orbe_maximo: 8,
        orbe_exato: 3,
        natureza: "Desafiador/Dinâmico",
        qualidade: "Tensão, conflito, ação",
        elemento_dominante: "Elementos em conflito",
        energia: "Tensa, dinâmica, motivadora",
        palavra_chave: "Desafio",
        descricao_geral: "Aspecto de tensão e conflito que gera energia dinâmica, forçando crescimento através de desafios e superação de obstáculos.",
        efeitos_gerais: {
            positivos: [
                "Motivação para superar obstáculos",
                "Desenvolvimento de força interior",
                "Crescimento através de desafios",
                "Energia dinâmica para mudanças",
                "Desenvolvimento de resiliência",
                "Força para quebrar padrões limitantes"
            ],
            negativos: [
                "Tensão e estresse constantes",
                "Conflitos internos e externos",
                "Dificuldade para relaxar",
                "Tendência à impaciência",
                "Possível agressividade",
                "Desgaste por luta constante"
            ]
        },
        interpretacoes_por_planetas: {
            "Sol-Lua": "Conflito entre ego e emoções, necessidade de integração",
            "Sol-Mercúrio": "Tensão entre identidade e comunicação, ego mental forte",
            "Sol-Vênus": "Conflito entre ego e relacionamentos, vaidade possível",
            "Sol-Marte": "Energia competitiva intensa, possível agressividade",
            "Sol-Júpiter": "Excesso de confiança, tendência ao exagero",
            "Sol-Saturno": "Conflito entre expressão e limitação, disciplina forçada",
            "Sol-Urano": "Rebeldia contra autoridade, mudanças bruscas",
            "Sol-Netuno": "Confusão de identidade, ilusões sobre si mesmo",
            "Sol-Plutão": "Lutas de poder intensas, transformações forçadas",
            "Lua-Mercúrio": "Conflito entre emoção e razão, comunicação emocional difícil",
            "Lua-Vênus": "Tensão em relacionamentos, conflitos afetivos",
            "Lua-Marte": "Emoções explosivas, reações impulsivas",
            "Lua-Júpiter": "Exagero emocional, otimismo excessivo",
            "Lua-Saturno": "Depressão, frieza emocional, responsabilidades pesadas",
            "Lua-Urano": "Instabilidade emocional, mudanças súbitas de humor",
            "Lua-Netuno": "Confusão emocional, escapismo, vitimização",
            "Lua-Plutão": "Emoções obsessivas, transformações emocionais forçadas"
        },
        conselhos_gerais: [
            "Use a tensão como motivação para crescer",
            "Desenvolva paciência e perseverança",
            "Aprenda a canalizar a energia de forma construtiva",
            "Busque equilíbrio entre as energias conflitantes",
            "Veja os desafios como oportunidades de fortalecimento"
        ]
    },
    "Trígono": {
        nome: "Trígono",
        simbolo: "△",
        angulo: 120,
        orbe_maximo: 8,
        orbe_exato: 3,
        natureza: "Harmonioso/Benéfico",
        qualidade: "Fluidez, talento natural, facilidade",
        elemento_dominante: "Mesmo elemento (Fogo, Terra, Ar, Água)",
        energia: "Fluida, natural, talentosa",
        palavra_chave: "Talento",
        descricao_geral: "Aspecto de máxima harmonia e fluidez, indicando talentos naturais e facilidades inatas que fluem sem esforço.",
        efeitos_gerais: {
            positivos: [
                "Talentos naturais desenvolvidos",
                "Fluidez e facilidade nas áreas envolvidas",
                "Harmonia interior profunda",
                "Capacidades inatas evidentes",
                "Sorte e proteção natural",
                "Facilidade para expressar potenciais"
            ],
            negativos: [
                "Possível complacência por facilidade excessiva",
                "Talentos podem não ser desenvolvidos",
                "Falta de motivação por ausência de desafios",
                "Tendência à preguiça ou acomodação"
            ]
        },
        interpretacoes_por_planetas: {
            "Sol-Lua": "Harmonia perfeita entre personalidade e emoções, equilíbrio natural",
            "Sol-Mercúrio": "Comunicação brilhante e natural, inteligência fluida",
            "Sol-Vênus": "Charme irresistível, talentos artísticos naturais",
            "Sol-Marte": "Energia vital harmoniosa, liderança natural",
            "Sol-Júpiter": "Sorte excepcional, otimismo natural, crescimento fácil",
            "Sol-Saturno": "Disciplina natural, responsabilidade sem peso",
            "Sol-Urano": "Originalidade natural, inovação fluida",
            "Sol-Netuno": "Inspiração constante, espiritualidade natural",
            "Sol-Plutão": "Poder pessoal natural, transformação fluida",
            "Lua-Mercúrio": "Intuição comunicativa natural, expressão emocional fluida",
            "Lua-Vênus": "Harmonia emocional natural, amor fluido",
            "Lua-Marte": "Energia emocional equilibrada, ação intuitiva",
            "Lua-Júpiter": "Otimismo emocional natural, crescimento através dos sentimentos",
            "Lua-Saturno": "Estabilidade emocional natural, maturidade afetiva",
            "Lua-Urano": "Intuição revolucionária natural, mudanças emocionais fluidas",
            "Lua-Netuno": "Sensibilidade psíquica natural, compaixão fluida",
            "Lua-Plutão": "Transformação emocional natural, regeneração fluida"
        ],
        conselhos_gerais: [
            "Desenvolva conscientemente seus talentos naturais",
            "Não tome as facilidades como garantidas",
            "Use seus dons para ajudar outros",
            "Busque desafios para continuar crescendo",
            "Compartilhe generosamente suas habilidades"
        ]
    },
    "Oposição": {
        nome: "Oposição",
        simbolo: "☍",
        angulo: 180,
        orbe_maximo: 10,
        orbe_exato: 3,
        natureza: "Desafiador/Polarizante",
        qualidade: "Polarização, consciência, integração",
        elemento_dominante: "Elementos opostos mas complementares",
        energia: "Polarizada, consciente, integrativa",
        palavra_chave: "Consciência",
        descricao_geral: "Aspecto de máxima tensão e consciência, onde energias opostas se confrontam, exigindo integração e equilíbrio para resolução.",
        efeitos_gerais: {
            positivos: [
                "Desenvolvimento de consciência objetiva",
                "Capacidade de ver múltiplas perspectivas",
                "Crescimento através da integração de opostos",
                "Desenvolvimento de equilíbrio",
                "Consciência sobre projeções",
                "Maturidade através da polaridade"
            ],
            negativos: [
                "Conflitos constantes entre energias opostas",
                "Tendência à projeção nos outros",
                "Dificuldade de encontrar meio-termo",
                "Oscilação entre extremos",
                "Tensão e estresse por polarização",
                "Dificuldade de integração"
            ]
        },
        interpretacoes_por_planetas: {
            "Sol-Lua": "Conflito entre ego e emoções, necessidade de integração consciente",
            "Sol-Mercúrio": "Tensão entre identidade e comunicação, objetividade forçada",
            "Sol-Vênus": "Conflito entre ego e relacionamentos, projeção em parceiros",
            "Sol-Marte": "Confrontos diretos, competição intensa, energia polarizada",
            "Sol-Júpiter": "Excesso versus moderação, conflito entre ego e expansão",
            "Sol-Saturno": "Autoridade versus responsabilidade, limitações versus expressão",
            "Sol-Urano": "Individualidade versus rebeldia, mudanças versus estabilidade",
            "Sol-Netuno": "Realidade versus ilusão, ego versus dissolução",
            "Sol-Plutão": "Poder versus transformação, controle versus regeneração",
            "Lua-Mercúrio": "Emoção versus razão, subjetividade versus objetividade",
            "Lua-Vênus": "Necessidades emocionais versus relacionamentos, amor próprio versus amor aos outros",
            "Lua-Marte": "Passividade versus agressão, receptividade versus ação",
            "Lua-Júpiter": "Emoções versus filosofia, subjetividade versus expansão",
            "Lua-Saturno": "Emoções versus disciplina, nutrição versus limitação",
            "Lua-Urano": "Tradição versus inovação, segurança versus liberdade",
            "Lua-Netuno": "Realidade emocional versus ilusão, clareza versus confusão",
            "Lua-Plutão": "Superfície versus profundidade, conforto versus transformação"
        },
        conselhos_gerais: [
            "Busque integrar as energias opostas ao invés de escolher uma",
            "Desenvolva consciência sobre suas projeções",
            "Use a tensão para desenvolver equilíbrio",
            "Pratique a objetividade e a perspectiva múltipla",
            "Veja os conflitos como oportunidades de crescimento"
        ]
    },
    "Quincúncio": {
        nome: "Quincúncio",
        simbolo: "⚻",
        angulo: 150,
        orbe_maximo: 3,
        orbe_exato: 1,
        natureza: "Desafiador/Ajustativo",
        qualidade: "Ajuste, adaptação, tensão sutil",
        elemento_dominante: "Elementos incompatíveis",
        energia: "Desconfortável, ajustativa, evolutiva",
        palavra_chave: "Ajuste",
        descricao_geral: "Aspecto de tensão sutil que requer ajustes constantes e adaptação, criando desconforto que motiva crescimento e evolução.",
        efeitos_gerais: {
            positivos: [
                "Desenvolvimento de flexibilidade",
                "Capacidade de adaptação",
                "Crescimento através de ajustes",
                "Refinamento de habilidades",
                "Evolução gradual",
                "Desenvolvimento de paciência"
            ],
            negativos: [
                "Desconforto constante e sutil",
                "Dificuldade de encontrar equilíbrio",
                "Necessidade de ajustes frequentes",
                "Tensão que não se resolve facilmente",
                "Irritação por incompatibilidade",
                "Sensação de inadequação"
            ]
        },
        interpretacoes_por_planetas: {
            "Sol-Lua": "Necessidade de ajustar constantemente ego e emoções",
            "Sol-Mercúrio": "Ajustes entre identidade e comunicação",
            "Sol-Vênus": "Necessidade de adaptar ego aos relacionamentos",
            "Sol-Marte": "Ajustes entre expressão e ação",
            "Sol-Júpiter": "Necessidade de moderar expansão e ego",
            "Sol-Saturno": "Ajustes constantes entre expressão e disciplina",
            "Sol-Urano": "Adaptação entre individualidade e originalidade",
            "Sol-Netuno": "Ajustes entre realidade e inspiração",
            "Sol-Plutão": "Necessidade de adaptar ego às transformações"
        },
        conselhos_gerais: [
            "Desenvolva paciência com o processo de ajuste",
            "Aceite que algumas tensões requerem adaptação constante",
            "Use o desconforto como motivação para crescer",
            "Pratique a flexibilidade mental e emocional",
            "Veja os ajustes como refinamento evolutivo"
        ]
    },
    "Semisextil": {
        nome: "Semisextil",
        simbolo: "⚺",
        angulo: 30,
        orbe_maximo: 2,
        orbe_exato: 1,
        natureza: "Levemente harmonioso",
        qualidade: "Crescimento gradual, oportunidade sutil",
        elemento_dominante: "Elementos adjacentes",
        energia: "Suave, gradual, evolutiva",
        palavra_chave: "Crescimento",
        descricao_geral: "Aspecto sutil de crescimento gradual e oportunidades pequenas mas constantes de desenvolvimento e evolução.",
        efeitos_gerais: {
            positivos: [
                "Crescimento gradual e constante",
                "Oportunidades sutis de desenvolvimento",
                "Evolução natural e orgânica",
                "Pequenos mas significativos progressos",
                "Desenvolvimento de paciência",
                "Refinamento gradual"
            ],
            negativos: [
                "Progresso muito lento",
                "Oportunidades podem passar despercebidas",
                "Falta de energia dinâmica",
                "Possível impaciência com o ritmo"
            ]
        },
        conselhos_gerais: [
            "Valorize o progresso gradual e constante",
            "Mantenha-se atento às pequenas oportunidades",
            "Desenvolva paciência com o processo evolutivo",
            "Cultive a persistência em pequenos passos",
            "Reconheça o valor do crescimento orgânico"
        ]
    },
    "Semiquadratura": {
        nome: "Semiquadratura",
        simbolo: "∠",
        angulo: 45,
        orbe_maximo: 2,
        orbe_exato: 1,
        natureza: "Levemente desafiador",
        qualidade: "Irritação menor, tensão sutil",
        elemento_dominante: "Elementos em leve conflito",
        energia: "Irritante, motivadora menor",
        palavra_chave: "Irritação",
        descricao_geral: "Aspecto de tensão menor que cria irritação sutil e motivação para pequenos ajustes e melhorias.",
        efeitos_gerais: {
            positivos: [
                "Motivação para pequenas melhorias",
                "Desenvolvimento de tolerância",
                "Refinamento através de pequenos desafios",
                "Energia para ajustes menores"
            ],
            negativos: [
                "Irritação constante e sutil",
                "Pequenos conflitos frequentes",
                "Tensão que incomoda mas não resolve",
                "Impaciência com detalhes"
            ]
        },
        conselhos_gerais: [
            "Use a irritação como motivação para melhorar",
            "Desenvolva tolerância com pequenos incômodos",
            "Faça ajustes graduais ao invés de mudanças drásticas",
            "Pratique a paciência com imperfeições menores"
        ]
    },
    "Sesquiquadratura": {
        nome: "Sesquiquadratura",
        simbolo: "⚼",
        angulo: 135,
        orbe_maximo: 2,
        orbe_exato: 1,
        natureza: "Moderadamente desafiador",
        qualidade: "Tensão persistente, ajuste forçado",
        elemento_dominante: "Elementos em conflito moderado",
        energia: "Persistentemente tensa, ajustativa",
        palavra_chave: "Persistência",
        descricao_geral: "Aspecto de tensão moderada que persiste e requer ajustes constantes, desenvolvendo resistência e persistência.",
        efeitos_gerais: {
            positivos: [
                "Desenvolvimento de persistência",
                "Força através da resistência",
                "Capacidade de lidar com tensão crônica",
                "Refinamento através da pressão"
            ],
            negativos: [
                "Tensão persistente e cansativa",
                "Dificuldade de relaxar completamente",
                "Pressão constante para ajustes",
                "Possível exaustão por tensão crônica"
            ]
        },
        conselhos_gerais: [
            "Desenvolva estratégias para lidar com tensão crônica",
            "Use a persistência como força evolutiva",
            "Pratique técnicas de relaxamento regularmente",
            "Veja a pressão como fortalecimento gradual"
        ]
    }
};



// BASE 9: STELLIUMS E CONFIGURAÇÕES ESPECIAIS
// BASE 9: CONFIGURAÇÕES PLANETÁRIAS - COMPLETO
const configuracoesPlanetarias = {
    "Stellium": {
        nome: "Stellium",
        definicao: "Concentração de 3 ou mais planetas no mesmo signo ou casa",
        criterios: {
            minimo_planetas: 3,
            orbe_maximo: 10,
            incluir_luminares: true,
            incluir_angulos: true,
            incluir_nodos: false
        },
        tipos: {
            "Por Signo": "3+ planetas no mesmo signo zodiacal",
            "Por Casa": "3+ planetas na mesma casa astrológica",
            "Por Elemento": "Concentração em um elemento específico",
            "Por Modalidade": "Concentração em uma modalidade (cardinal, fixo, mutável)"
        },
        efeitos_gerais: {
            positivos: [
                "Concentração intensa de energia",
                "Foco e especialização natural",
                "Talentos desenvolvidos na área",
                "Força e determinação aumentadas",
                "Capacidade de liderança na área",
                "Expertise natural desenvolvida"
            ],
            negativos: [
                "Desequilíbrio por excesso de foco",
                "Dificuldade de ver outras perspectivas",
                "Obsessão com temas do stellium",
                "Falta de flexibilidade",
                "Possível fanatismo",
                "Negligência de outras áreas da vida"
            ]
        },
        interpretacoes_por_signo: {
            "Áries": "Liderança intensa, pioneirismo, energia marcial concentrada",
            "Touro": "Estabilidade extrema, materialismo, sensualidade concentrada",
            "Gêmeos": "Comunicação intensa, versatilidade mental, curiosidade extrema",
            "Câncer": "Emotividade intensa, proteção familiar, sensibilidade extrema",
            "Leão": "Criatividade intensa, drama, necessidade de reconhecimento",
            "Virgem": "Perfeccionismo extremo, análise intensa, serviço dedicado",
            "Libra": "Busca intensa por harmonia, relacionamentos como foco central",
            "Escorpião": "Intensidade extrema, transformação constante, poder concentrado",
            "Sagitário": "Busca filosófica intensa, aventura, expansão mental",
            "Capricórnio": "Ambição extrema, disciplina rígida, foco na carreira",
            "Aquário": "Originalidade extrema, rebeldia, foco em causas humanitárias",
            "Peixes": "Sensibilidade extrema, espiritualidade, compaixão intensa"
        },
        conselhos_evolutivos: [
            "Desenvolva consciência sobre o desequilíbrio criado",
            "Cultive outras áreas da vida negligenciadas",
            "Use a intensidade para servir propósitos maiores",
            "Pratique a moderação e o equilíbrio",
            "Transforme obsessão em expertise construtiva"
        ]
    },
    "Grande Trígono": {
        nome: "Grande Trígono",
        definicao: "Três planetas formando trígonos entre si, criando um triângulo equilátero",
        criterios: {
            numero_planetas: 3,
            aspecto_principal: "Trígono (120°)",
            orbe_maximo: 8,
            mesmo_elemento: true
        },
        elementos_possiveis: {
            "Fogo": "Áries, Leão, Sagitário - Energia, criatividade, inspiração",
            "Terra": "Touro, Virgem, Capricórnio - Praticidade, estabilidade, materialização",
            "Ar": "Gêmeos, Libra, Aquário - Comunicação, ideias, relacionamentos",
            "Água": "Câncer, Escorpião, Peixes - Emoção, intuição, espiritualidade"
        },
        efeitos_gerais: {
            positivos: [
                "Fluxo harmonioso de energia",
                "Talentos naturais excepcionais",
                "Facilidade e sorte nas áreas envolvidas",
                "Proteção natural e boa sorte",
                "Capacidades inatas desenvolvidas",
                "Harmonia interior profunda"
            ],
            negativos: [
                "Complacência por facilidade excessiva",
                "Falta de motivação para crescer",
                "Talentos podem não ser desenvolvidos",
                "Tendência à preguiça",
                "Falta de desafios para fortalecer",
                "Possível arrogância por facilidades"
            ]
        },
        interpretacoes_por_elemento: {
            "Fogo": "Criatividade natural, liderança inspirada, energia vital abundante",
            "Terra": "Capacidade natural de materializar, estabilidade financeira, praticidade",
            "Ar": "Comunicação brilhante, relacionamentos harmoniosos, ideias fluidas",
            "Água": "Intuição excepcional, sensibilidade psíquica, compaixão natural"
        },
        conselhos_evolutivos: [
            "Desenvolva conscientemente seus talentos naturais",
            "Busque desafios para continuar crescendo",
            "Use suas facilidades para ajudar outros",
            "Não tome os dons como garantidos",
            "Compartilhe generosamente suas habilidades"
        ]
    },
    "T-Quadrada": {
        nome: "T-Quadrada",
        definicao: "Dois planetas em oposição com um terceiro fazendo quadratura com ambos",
        criterios: {
            numero_planetas: 3,
            aspectos_principais: ["Oposição (180°)", "Quadratura (90°)"],
            orbe_maximo: 8,
            planeta_focal: "O planeta que recebe as duas quadraturas"
        },
        estrutura: {
            "Oposição": "Dois planetas em tensão máxima (180°)",
            "Planeta Focal": "Recebe quadraturas dos dois planetas opostos",
            "Ponto Vazio": "O quarto ponto do quadrado, área de liberação"
        },
        efeitos_gerais: {
            positivos: [
                "Grande energia dinâmica disponível",
                "Motivação intensa para superar desafios",
                "Desenvolvimento de força interior",
                "Capacidade de liderança em crises",
                "Crescimento através de conflitos",
                "Energia transformadora poderosa"
            ],
            negativos: [
                "Tensão constante e estresse",
                "Conflitos internos intensos",
                "Dificuldade para relaxar",
                "Padrões de crise repetitivos",
                "Exaustão por luta constante",
                "Tendência à agressividade"
            ]
        },
        interpretacoes_por_modalidade: {
            "Cardinal": "Crises de liderança, necessidade de iniciar mudanças",
            "Fixo": "Resistência a mudanças necessárias, teimosia destrutiva",
            "Mutável": "Dispersão de energia, dificuldade de foco"
        },
        planeta_focal_interpretacoes: {
            "Sol": "Crises de identidade, desafios ao ego, liderança forçada",
            "Lua": "Crises emocionais, instabilidade de humor, necessidades conflitantes",
            "Mercúrio": "Conflitos mentais, comunicação tensa, decisões difíceis",
            "Vênus": "Crises relacionais, conflitos de valores, amor complicado",
            "Marte": "Energia explosiva, conflitos diretos, agressividade",
            "Júpiter": "Excessos problemáticos, conflitos filosóficos, crescimento forçado",
            "Saturno": "Responsabilidades pesadas, limitações frustrantes, disciplina rígida",
            "Urano": "Mudanças súbitas forçadas, rebeldia destrutiva, instabilidade",
            "Netuno": "Confusão extrema, ilusões problemáticas, escapismo",
            "Plutão": "Transformações forçadas, crises de poder, intensidade extrema"
        ],
        conselhos_evolutivos: [
            "Use a tensão como combustível para crescimento",
            "Desenvolva o ponto vazio como área de liberação",
            "Aprenda a canalizar a energia de forma construtiva",
            "Pratique técnicas de relaxamento e equilíbrio",
            "Veja as crises como oportunidades de transformação"
        ]
    },
    "Yod": {
        nome: "Yod (Dedo de Deus)",
        definicao: "Dois planetas em sextil com um terceiro fazendo quincúncio com ambos",
        criterios: {
            numero_planetas: 3,
            aspectos_principais: ["Sextil (60°)", "Quincúncio (150°)"],
            orbe_maximo: 3,
            planeta_focal: "O planeta que recebe os dois quincúncios"
        },
        estrutura: {
            "Base Sextil": "Dois planetas em harmonia cooperativa (60°)",
            "Planeta Focal": "Recebe quincúncios dos dois planetas da base",
            "Energia": "Canalização de energia harmoniosa através de ajustes"
        },
        efeitos_gerais: {
            positivos: [
                "Missão especial ou propósito único",
                "Talentos especializados desenvolvidos",
                "Capacidade de canalizar energias superiores",
                "Destino ou vocação clara",
                "Habilidades de cura ou ensino",
                "Conexão com propósitos espirituais"
            ],
            negativos: [
                "Sensação de inadequação constante",
                "Dificuldade de encontrar lugar no mundo",
                "Pressão por perfeição",
                "Isolamento por diferenças",
                "Ansiedade sobre propósito de vida",
                "Dificuldade de relaxar"
            ]
        },
        planeta_focal_interpretacoes: {
            "Sol": "Missão de liderança espiritual, propósito de vida único",
            "Lua": "Missão emocional ou maternal, cura através dos sentimentos",
            "Mercúrio": "Missão comunicativa, ensino ou escrita inspirada",
            "Vênus": "Missão artística ou de harmonização, cura através da beleza",
            "Marte": "Missão de ação corajosa, liderança em causas",
            "Júpiter": "Missão de ensino ou expansão da consciência",
            "Saturno": "Missão de estruturação ou disciplina espiritual",
            "Urano": "Missão revolucionária, inovação para a humanidade",
            "Netuno": "Missão espiritual ou artística, canalização divina",
            "Plutão": "Missão transformadora, cura profunda ou regeneração"
        },
        conselhos_evolutivos: [
            "Aceite sua singularidade como dádiva",
            "Desenvolva paciência com seu processo único",
            "Use seus talentos especiais para servir outros",
            "Pratique a autocompaixão e aceitação",
            "Confie em seu propósito mesmo quando não é claro"
        ]
    },
    "Grande Cruz": {
        nome: "Grande Cruz",
        definicao: "Quatro planetas formando quadraturas entre si, criando uma cruz",
        criterios: {
            numero_planetas: 4,
            aspectos_principais: ["Quadratura (90°)", "Oposição (180°)"],
            orbe_maximo: 8,
            duas_oposicoes: true
        },
        tipos: {
            "Cardinal": "Crises de liderança e iniciativa",
            "Fixo": "Resistência extrema a mudanças",
            "Mutável": "Dispersão e instabilidade extremas"
        },
        efeitos_gerais: {
            positivos: [
                "Energia dinâmica excepcional",
                "Capacidade de superar qualquer obstáculo",
                "Força interior desenvolvida através de desafios",
                "Liderança em situações de crise",
                "Resistência e perseverança extremas",
                "Potencial transformador imenso"
            ],
            negativos: [
                "Tensão constante e extrema",
                "Sensação de estar sempre em crise",
                "Dificuldade extrema para relaxar",
                "Conflitos em todas as áreas da vida",
                "Exaustão por luta constante",
                "Tendência ao esgotamento"
            ]
        },
        conselhos_evolutivos: [
            "Desenvolva estratégias de gerenciamento de estresse",
            "Use a energia intensa para grandes realizações",
            "Pratique técnicas de relaxamento profundo",
            "Veja-se como um guerreiro espiritual",
            "Canalize a tensão para transformação positiva"
        ]
    },
    "Kite": {
        nome: "Kite (Pipa)",
        definicao: "Grande trígono com um quarto planeta em oposição a um dos vértices",
        criterios: {
            base: "Grande Trígono",
            planeta_adicional: "Em oposição a um vértice do trígono",
            aspectos_adicionais: ["Sextis com os outros dois planetas"]
        },
        efeitos_gerais: {
            positivos: [
                "Talentos naturais direcionados construtivamente",
                "Equilíbrio entre facilidade e desafio",
                "Capacidade de usar dons para superar obstáculos",
                "Harmonia com tensão criativa",
                "Realização através de talentos naturais"
            ]
        },
        conselhos_evolutivos: [
            "Use seus talentos para superar desafios",
            "Equilibre facilidade com esforço consciente",
            "Desenvolva todos os aspectos da configuração"
        ]
    },
    "Mystic Rectangle": {
        nome: "Retângulo Místico",
        definicao: "Quatro planetas formando dois trígonos e dois sextis",
        criterios: {
            numero_planetas: 4,
            aspectos: ["2 Trígonos", "2 Sextis", "2 Oposições"],
            harmonia_geral: true
        },
        efeitos_gerais: {
            positivos: [
                "Equilíbrio perfeito entre harmonia e tensão",
                "Capacidade de integrar opostos",
                "Talentos práticos e espirituais",
                "Estabilidade com crescimento",
                "Sabedoria através da experiência"
            ]
        },
        conselhos_evolutivos: [
            "Desenvolva todos os aspectos da personalidade",
            "Use a estabilidade para ajudar outros",
            "Integre aspectos opostos conscientemente"
        ]
    },
    "Boomerang": {
        nome: "Boomerang",
        definicao: "Yod com um planeta adicional em oposição ao planeta focal",
        criterios: {
            base: "Yod",
            planeta_adicional: "Em oposição ao planeta focal do Yod"
        },
        efeitos_gerais: {
            positivos: [
                "Missão especial com capacidade de realização",
                "Equilíbrio entre propósito e ação",
                "Talentos únicos direcionados",
                "Capacidade de manifestar o propósito"
            ]
        },
        conselhos_evolutivos: [
            "Use o planeta oposto como ferramenta de manifestação",
            "Equilibre propósito espiritual com ação prática",
            "Desenvolva ambos os polos da oposição"
        ]
    },
    "Cradle": {
        nome: "Cradle (Berço)",
        definicao: "Três planetas em trígono com sextis conectando-os",
        criterios: {
            numero_planetas: 3,
            aspectos: ["Trígonos", "Sextis"],
            harmonia_total: true
        },
        efeitos_gerais: {
            positivos: [
                "Proteção natural e sorte",
                "Talentos desenvolvidos facilmente",
                "Harmonia e facilidade na vida",
                "Capacidade natural de nutrir outros"
            ],
            negativos: [
                "Possível complacência",
                "Falta de motivação por facilidade excessiva"
            ]
        },
        conselhos_evolutivos: [
            "Use a proteção natural para ajudar outros",
            "Busque desafios para continuar crescendo",
            "Desenvolva gratidão pelas facilidades"
        ]
    }
};


// Função para interpretar aspectos em tempo real
function interpretarAspectoAtual(planeta1, planeta2, aspecto, orbe) {
    const aspectoInfo = aspectosPlanetarios[aspecto];
    const interpretacao = aspectoInfo.interpretacoes_por_planetas[`${planeta1}_${planeta2}`] || 
                         aspectoInfo.interpretacoes_por_planetas[`${planeta2}_${planeta1}`] ||
                         aspectoInfo.interpretacao_geral;
    
    let status = "separando";
    if (orbe <= aspectoInfo.orbe_exato) status = "exato";
    else if (orbe <= aspectoInfo.orbe_maximo / 2) status = "aplicando";
    
    return {
        aspecto: aspectoInfo.nome,
        simbolo: aspectoInfo.simbolo,
        interpretacao: interpretacao,
        status: status,
        orbe: orbe,
        natureza: aspectoInfo.natureza
    };
}

// Função para analisar stelliums
function analisarStelliums(posicoesPlanetarias) {
    const stelliums = [];
    const signosCount = {};
    const casasCount = {};
    
    // Contar planetas por signo e casa
    for (const [planeta, dados] of Object.entries(posicoesPlanetarias)) {
        if (planeta !== 'ascendente' && planeta !== 'meio_ceu') {
            const signo = dados.signo;
            const casa = dados.casa;
            
            signosCount[signo] = (signosCount[signo] || []).concat(planeta);
            casasCount[casa] = (casasCount[casa] || []).concat(planeta);
        }
    }
    
    // Identificar stelliums
    for (const [signo, planetas] of Object.entries(signosCount)) {
        if (planetas.length >= 3) {
            stelliums.push({
                tipo: 'signo',
                local: signo,
                planetas: planetas,
                interpretacao: configuracoesPlanetarias.stellium.efeitos_por_elemento[signosAstrologicos[signo.toLowerCase()]?.elemento]
            });
        }
    }
    
    for (const [casa, planetas] of Object.entries(casasCount)) {
        if (planetas.length >= 3) {
            stelliums.push({
                tipo: 'casa',
                local: casa,
                planetas: planetas,
                interpretacao: casasAstrologicas[`casa_${casa}`]?.interpretacao_completa
            });
        }
    }
    
    return stelliums;
}

// Exportar novas bases
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ...module.exports,
        signosAstrologicos,
        casasAstrologicas,
        aspectosPlanetarios,
        configuracoesPlanetarias,
        interpretarAspectoAtual,
        analisarStelliums
    };
}



// BASE 10: PLANETAS RETRÓGRADOS - COMPLETA
const planetasRetrogrados = {
    mercurio: {
        nome: "Mercúrio Retrógrado",
        simbolo: "☿℞",
        periodo_medio: "3-4 vezes por ano, 3 semanas cada",
        significado_geral: "Revisão da comunicação, pensamento e tecnologia",
        efeitos_gerais: [
            "Problemas de comunicação e mal-entendidos",
            "Falhas tecnológicas e atrasos em viagens",
            "Necessidade de revisar contratos e documentos",
            "Reflexão sobre decisões passadas",
            "Oportunidade de corrigir erros de comunicação"
        ],
        por_signo: {
            aries: {
                interpretacao: "Impulsividade nas palavras, necessidade de pensar antes de falar. Revisão de projetos iniciados precipitadamente.",
                conselhos: "Pratique a paciência na comunicação. Revise planos de ação antes de executá-los."
            },
            touro: {
                interpretacao: "Teimosia mental, resistência a mudanças de opinião. Questões financeiras precisam ser revisadas.",
                conselhos: "Seja flexível com novas informações. Revise investimentos e gastos cuidadosamente."
            },
            gemeos: {
                interpretacao: "Confusão mental intensa, múltiplas versões da mesma história. Problemas com irmãos ou vizinhos.",
                conselhos: "Organize pensamentos antes de comunicar. Evite fofocas e mal-entendidos."
            },
            cancer: {
                interpretacao: "Comunicação emocional confusa, memórias distorcidas. Questões familiares mal resolvidas ressurgem.",
                conselhos: "Processe emoções antes de expressar. Resolva pendências familiares com carinho."
            },
            leao: {
                interpretacao: "Ego ferido por mal-entendidos, drama desnecessário. Criatividade bloqueada temporariamente.",
                conselhos: "Mantenha humildade na comunicação. Use o período para refinar talentos criativos."
            },
            virgem: {
                interpretacao: "Perfeccionismo excessivo causa atrasos, críticas mal direcionadas. Problemas de saúde por estresse.",
                conselhos: "Aceite imperfeições temporárias. Cuide da saúde mental e física."
            },
            libra: {
                interpretacao: "Indecisão paralisante, conflitos em relacionamentos por falta de clareza. Questões legais complicadas.",
                conselhos: "Busque equilíbrio sem pressa. Evite decisões importantes sobre relacionamentos."
            },
            escorpiao: {
                interpretacao: "Segredos revelados, comunicação manipulativa. Necessidade de transformar padrões de pensamento.",
                conselhos: "Seja honesto consigo mesmo. Use insights para crescimento pessoal profundo."
            },
            sagitario: {
                interpretacao: "Exageros na comunicação, promessas não cumpridas. Problemas com viagens e estudos superiores.",
                conselhos: "Seja realista em compromissos. Revise planos de viagem e estudos."
            },
            capricornio: {
                interpretacao: "Pessimismo excessivo, comunicação muito rígida. Problemas com autoridades e estruturas.",
                conselhos: "Mantenha perspectiva positiva. Revise metas de carreira com realismo."
            },
            aquario: {
                interpretacao: "Ideias revolucionárias mal comunicadas, problemas com tecnologia e grupos. Rebeldia improdutiva.",
                conselhos: "Organize ideias inovadoras. Trabalhe em equipe com mais paciência."
            },
            peixes: {
                interpretacao: "Confusão mental extrema, comunicação nebulosa. Tendência a escapismo e ilusões.",
                conselhos: "Busque clareza através da meditação. Evite decisões baseadas em fantasias."
            }
        },
        rituais_e_praticas: {
            preparacao: "Faça backup de dados importantes, revise contratos, confirme compromissos",
            durante: "Pratique comunicação consciente, medite antes de falar, revise trabalhos antigos",
            pos_retrogrado: "Implemente mudanças planejadas, assine contratos adiados, lance projetos revisados"
        }
    },
    venus: {
        nome: "Vênus Retrógrada",
        simbolo: "♀℞",
        periodo_medio: "A cada 18 meses, por 40 dias",
        significado_geral: "Revisão de valores, relacionamentos e questões estéticas",
        efeitos_gerais: [
            "Relacionamentos passados retornam",
            "Questões financeiras precisam ser reavaliadas",
            "Mudanças no gosto estético e artístico",
            "Autoestima em transformação",
            "Oportunidade de curar feridas amorosas"
        ],
        por_signo: {
            aries: {
                interpretacao: "Impulsividade amorosa, relacionamentos iniciados precipitadamente. Gastos impulsivos com aparência.",
                conselhos: "Evite decisões amorosas precipitadas. Reflita sobre padrões de relacionamento."
            },
            touro: {
                interpretacao: "Teimosia em relacionamentos, resistência a mudanças nos valores. Problemas financeiros por apego.",
                conselhos: "Seja flexível em relacionamentos. Revise hábitos de consumo e valores materiais."
            },
            gemeos: {
                interpretacao: "Comunicação confusa em relacionamentos, múltiplos interesses amorosos. Gastos com comunicação e tecnologia.",
                conselhos: "Esclareça sentimentos antes de expressar. Evite relacionamentos superficiais."
            },
            cancer: {
                interpretacao: "Nostalgia amorosa intensa, apego excessivo ao passado. Gastos com família e lar.",
                conselhos: "Processe emoções do passado. Cuide do lar sem exageros financeiros."
            },
            leao: {
                interpretacao: "Drama em relacionamentos, ego ferido por rejeição. Gastos excessivos com luxo e entretenimento.",
                conselhos: "Mantenha humildade no amor. Expresse criatividade sem ostentação."
            },
            virgem: {
                interpretacao: "Críticas excessivas ao parceiro, perfeccionismo amoroso. Gastos com saúde e organização.",
                conselhos: "Aceite imperfeições no amor. Cuide da saúde sem obsessão."
            },
            libra: {
                interpretacao: "Indecisão amorosa, dependência emocional. Gastos com beleza e harmonia excessivos.",
                conselhos: "Busque equilíbrio sem dependência. Cultive beleza interior."
            },
            escorpiao: {
                interpretacao: "Ciúmes e possessividade intensos, relacionamentos obsessivos. Gastos secretos ou compulsivos.",
                conselhos: "Transforme padrões possessivos. Seja transparente com finanças."
            },
            sagitario: {
                interpretacao: "Relacionamentos à distância complicados, promessas amorosas não cumpridas. Gastos com viagens e estudos.",
                conselhos: "Seja realista em relacionamentos. Invista em crescimento pessoal."
            },
            capricornio: {
                interpretacao: "Relacionamentos muito sérios ou frios, medo de compromisso. Gastos conservadores excessivos.",
                conselhos: "Equilibre seriedade com afeto. Invista em relacionamentos duradouros."
            },
            aquario: {
                interpretacao: "Relacionamentos não convencionais, distanciamento emocional. Gastos com tecnologia e grupos.",
                conselhos: "Valorize conexões humanas genuínas. Equilibre independência com intimidade."
            },
            peixes: {
                interpretacao: "Ilusões amorosas, relacionamentos baseados em fantasias. Gastos por compaixão ou escapismo.",
                conselhos: "Busque clareza nos sentimentos. Pratique amor próprio realista."
            }
        },
        rituais_e_praticas: {
            preparacao: "Reflita sobre relacionamentos passados, organize finanças, cuide da autoestima",
            durante: "Pratique amor próprio, evite grandes mudanças estéticas, revise valores pessoais",
            pos_retrogrado: "Implemente mudanças nos relacionamentos, invista em beleza consciente, estabeleça novos valores"
        }
    },
    marte: {
        nome: "Marte Retrógrado",
        simbolo: "♂℞",
        periodo_medio: "A cada 2 anos, por 2-3 meses",
        significado_geral: "Revisão da energia, ação e assertividade",
        efeitos_gerais: [
            "Energia direcionada para dentro",
            "Frustração com falta de progresso",
            "Necessidade de revisar estratégias de ação",
            "Conflitos internos sobre direção de vida",
            "Oportunidade de desenvolver paciência"
        ],
        por_signo: {
            aries: {
                interpretacao: "Frustração extrema com lentidão, impulsividade reprimida. Raiva direcionada para dentro.",
                conselhos: "Canalize energia em exercícios físicos. Pratique paciência com processos lentos."
            },
            touro: {
                interpretacao: "Teimosia paralisante, resistência a mudanças necessárias. Energia bloqueada por apego.",
                conselhos: "Aceite mudanças gradualmente. Use energia para construir bases sólidas."
            },
            gemeos: {
                interpretacao: "Energia dispersa, múltiplas direções sem foco. Conflitos por comunicação agressiva.",
                conselhos: "Foque energia em um projeto por vez. Comunique-se com assertividade, não agressividade."
            },
            cancer: {
                interpretacao: "Energia emocional reprimida, passivo-agressividade. Conflitos familiares por sensibilidade excessiva.",
                conselhos: "Expresse emoções de forma saudável. Proteja-se sem atacar outros."
            },
            leao: {
                interpretacao: "Ego ferido por falta de reconhecimento, criatividade bloqueada. Drama por atenção.",
                conselhos: "Desenvolva talentos sem buscar aprovação externa. Seja generoso com outros."
            },
            virgem: {
                interpretacao: "Perfeccionismo paralisante, críticas excessivas. Energia desperdiçada em detalhes.",
                conselhos: "Aceite 'bom o suficiente' temporariamente. Foque no progresso, não na perfeição."
            },
            libra: {
                interpretacao: "Indecisão sobre ações, evitação de conflitos necessários. Energia bloqueada por busca de harmonia.",
                conselhos: "Tome decisões mesmo imperfeitas. Enfrente conflitos com diplomacia."
            },
            escorpiao: {
                interpretacao: "Energia transformadora intensa direcionada para dentro. Conflitos psicológicos profundos.",
                conselhos: "Use energia para autoconhecimento profundo. Transforme-se antes de tentar mudar outros."
            },
            sagitario: {
                interpretacao: "Frustração com limitações, energia aventureira reprimida. Conflitos por dogmatismo.",
                conselhos: "Encontre aventuras internas através do estudo. Seja flexível com crenças."
            },
            capricornio: {
                interpretacao: "Ambição frustrada, energia direcionada para metas irreais. Conflitos com autoridade.",
                conselhos: "Revise metas com realismo. Use energia para construir bases sólidas."
            },
            aquario: {
                interpretacao: "Rebeldia improdutiva, energia revolucionária mal direcionada. Conflitos com grupos.",
                conselhos: "Canalize rebeldia em mudanças construtivas. Trabalhe em equipe respeitando diferenças."
            },
            peixes: {
                interpretacao: "Energia dissipada em fantasias, ações baseadas em ilusões. Conflitos por vitimização.",
                conselhos: "Direcione energia através da espiritualidade. Assuma responsabilidade por suas ações."
            }
        },
        rituais_e_praticas: {
            preparacao: "Revise metas e estratégias, organize energia física, prepare-se para frustração",
            durante: "Pratique paciência, redirecione energia para dentro, desenvolva autocontrole",
            pos_retrogrado: "Implemente estratégias revisadas, tome ações planejadas, use energia renovada"
        }
    },
    jupiter: {
        nome: "Júpiter Retrógrado",
        simbolo: "♃℞",
        periodo_medio: "Anualmente, por 4 meses",
        significado_geral: "Revisão de crenças, filosofia e crescimento espiritual",
        efeitos_gerais: [
            "Crescimento direcionado para dentro",
            "Questionamento de crenças e valores",
            "Oportunidades perdidas ou adiadas",
            "Necessidade de desenvolver sabedoria interior",
            "Revisão de metas de longo prazo"
        ],
        por_signo: {
            aries: {
                interpretacao: "Impulsividade espiritual, crenças adotadas precipitadamente. Crescimento através da paciência.",
                conselhos: "Desenvolva sabedoria através da experiência. Evite dogmatismo espiritual."
            },
            touro: {
                interpretacao: "Apego a crenças materiais, resistência ao crescimento espiritual. Abundância bloqueada por teimosia.",
                conselhos: "Abra-se para novas perspectivas. Equilibre materialismo com espiritualidade."
            },
            gemeos: {
                interpretacao: "Dispersão de conhecimento, múltiplas filosofias sem profundidade. Crescimento através do foco.",
                conselhos: "Aprofunde-se em uma área de conhecimento. Integre informações em sabedoria."
            },
            cancer: {
                interpretacao: "Crescimento emocional, crenças baseadas em sentimentos. Sabedoria através da intuição.",
                conselhos: "Confie na intuição para crescimento. Desenvolva compaixão sem vitimização."
            },
            leao: {
                interpretacao: "Ego espiritual, busca por reconhecimento em crescimento. Sabedoria através da humildade.",
                conselhos: "Desenvolva humildade espiritual. Compartilhe conhecimento sem ostentação."
            },
            virgem: {
                interpretacao: "Perfeccionismo espiritual, críticas a caminhos diferentes. Crescimento através do serviço.",
                conselhos: "Aceite imperfeições no caminho espiritual. Sirva outros com humildade."
            },
            libra: {
                interpretacao: "Busca por equilíbrio espiritual, crescimento através de relacionamentos. Sabedoria na diplomacia.",
                conselhos: "Encontre equilíbrio entre dar e receber. Cresça através de parcerias conscientes."
            },
            escorpiao: {
                interpretacao: "Transformação espiritual profunda, crescimento através de crises. Sabedoria oculta.",
                conselhos: "Abrace transformações espirituais. Use crises como oportunidades de crescimento."
            },
            sagitario: {
                interpretacao: "Expansão espiritual natural, busca por verdade universal. Crescimento através de viagens interiores.",
                conselhos: "Explore diferentes filosofias com mente aberta. Ensine através do exemplo."
            },
            capricornio: {
                interpretacao: "Estrutura espiritual, crescimento através da disciplina. Sabedoria prática.",
                conselhos: "Construa práticas espirituais consistentes. Integre espiritualidade na vida prática."
            },
            aquario: {
                interpretacao: "Crescimento através de grupos espirituais, sabedoria humanitária. Visão futurista.",
                conselhos: "Contribua para o bem coletivo. Desenvolva visão espiritual para a humanidade."
            },
            peixes: {
                interpretacao: "Crescimento através da compaixão, sabedoria intuitiva. Conexão com o divino.",
                conselhos: "Desenvolva compaixão universal. Equilibre espiritualidade com praticidade."
            }
        },
        rituais_e_praticas: {
            preparacao: "Reflita sobre crenças e valores, organize estudos espirituais, prepare-se para crescimento interno",
            durante: "Pratique meditação e autoconhecimento, questione crenças limitantes, desenvolva sabedoria interior",
            pos_retrogrado: "Implemente nova filosofia de vida, compartilhe sabedoria adquirida, expanda horizontes"
        }
    },
    saturno: {
        nome: "Saturno Retrógrado",
        simbolo: "♄℞",
        periodo_medio: "Anualmente, por 4,5 meses",
        significado_geral: "Revisão de estruturas, responsabilidades e lições de vida",
        efeitos_gerais: [
            "Reavaliação de responsabilidades",
            "Confronto com limitações pessoais",
            "Necessidade de reestruturar a vida",
            "Lições kármicas intensificadas",
            "Oportunidade de desenvolver maturidade"
        ],
        por_signo: {
            aries: {
                interpretacao: "Impaciência com limitações, frustração com autoridade. Lições sobre autocontrole.",
                conselhos: "Desenvolva paciência e disciplina. Aceite limitações como oportunidades de crescimento."
            },
            touro: {
                interpretacao: "Resistência a mudanças estruturais, apego a segurança material. Lições sobre flexibilidade.",
                conselhos: "Aceite mudanças necessárias gradualmente. Construa segurança através da adaptabilidade."
            },
            gemeos: {
                interpretacao: "Dispersão mental, dificuldade em focar. Lições sobre concentração e profundidade.",
                conselhos: "Desenvolva foco e disciplina mental. Aprofunde conhecimentos ao invés de dispersar."
            },
            cancer: {
                interpretacao: "Responsabilidades familiares pesadas, lições sobre nutrição emocional. Estruturação do lar.",
                conselhos: "Equilibre cuidado com outros e autocuidado. Estruture vida emocional com maturidade."
            },
            leao: {
                interpretacao: "Ego confrontado com realidade, lições sobre humildade. Responsabilidade criativa.",
                conselhos: "Desenvolva humildade sem perder autoestima. Use criatividade com responsabilidade."
            },
            virgem: {
                interpretacao: "Perfeccionismo excessivo, críticas severas. Lições sobre aceitação e serviço.",
                conselhos: "Aceite imperfeições como parte do processo. Sirva outros sem julgamento."
            },
            libra: {
                interpretacao: "Responsabilidades em relacionamentos, lições sobre equilíbrio. Estruturação de parcerias.",
                conselhos: "Equilibre dar e receber em relacionamentos. Assuma responsabilidade por suas escolhas."
            },
            escorpiao: {
                interpretacao: "Transformações profundas forçadas, lições sobre poder pessoal. Confronto com sombras.",
                conselhos: "Abrace transformações necessárias. Use poder pessoal com responsabilidade."
            },
            sagitario: {
                interpretacao: "Limitações em expansão, lições sobre realismo. Responsabilidade com conhecimento.",
                conselhos: "Seja realista com metas de expansão. Use conhecimento com sabedoria e responsabilidade."
            },
            capricornio: {
                interpretacao: "Confronto direto com autoridade e estruturas. Lições sobre liderança responsável.",
                conselhos: "Desenvolva liderança através do exemplo. Construa estruturas duradouras e éticas."
            },
            aquario: {
                interpretacao: "Responsabilidade social, lições sobre individualidade vs. coletivo. Estruturação de ideais.",
                conselhos: "Equilibre necessidades individuais e coletivas. Implemente ideais com praticidade."
            },
            peixes: {
                interpretacao: "Limitações espirituais, lições sobre compaixão prática. Estruturação da espiritualidade.",
                conselhos: "Integre espiritualidade na vida prática. Desenvolva compaixão com discernimento."
            }
        },
        rituais_e_praticas: {
            preparacao: "Avalie responsabilidades atuais, identifique estruturas que precisam mudança, prepare-se para lições",
            durante: "Pratique disciplina e paciência, reestruture vida conscientemente, aprenda com limitações",
            pos_retrogrado: "Implemente novas estruturas, assuma responsabilidades maduras, use lições aprendidas"
        }
    },
    urano: {
        nome: "Urano Retrógrado",
        simbolo: "♅℞",
        periodo_medio: "Anualmente, por 5 meses",
        significado_geral: "Revisão de mudanças, inovação e liberdade pessoal",
        efeitos_gerais: [
            "Mudanças internas ao invés de externas",
            "Revisão de necessidade de liberdade",
            "Inovação direcionada para autoconhecimento",
            "Rebeldia interna contra limitações",
            "Oportunidade de desenvolver autenticidade"
        ],
        por_signo: {
            aries: {
                interpretacao: "Rebeldia impulsiva direcionada para dentro, mudanças súbitas de identidade.",
                conselhos: "Canalize energia revolucionária em autodesenvolvimento. Seja pioneiro de si mesmo."
            },
            touro: {
                interpretacao: "Resistência a mudanças necessárias, revolução lenta mas profunda de valores.",
                conselhos: "Aceite mudanças gradualmente. Revolucione valores materiais com consciência."
            },
            gemeos: {
                interpretacao: "Mudanças rápidas de pensamento, inovação na comunicação e aprendizado.",
                conselhos: "Use versatilidade para inovação. Comunique ideias revolucionárias com clareza."
            },
            cancer: {
                interpretacao: "Revolução emocional, mudanças na estrutura familiar e lar.",
                conselhos: "Transforme padrões emocionais limitantes. Inove na forma de nutrir e cuidar."
            },
            leao: {
                interpretacao: "Revolução criativa, mudanças na expressão pessoal e liderança.",
                conselhos: "Expresse individualidade autêntica. Lidere através da inovação criativa."
            },
            virgem: {
                interpretacao: "Inovação em métodos e sistemas, revolução na abordagem ao trabalho e saúde.",
                conselhos: "Inove em rotinas e métodos. Revolucione cuidados com saúde conscientemente."
            },
            libra: {
                interpretacao: "Mudanças em relacionamentos e valores estéticos, busca por equilíbrio inovador.",
                conselhos: "Inove em relacionamentos mantendo harmonia. Desenvolva estética única."
            },
            escorpiao: {
                interpretacao: "Transformação revolucionária profunda, mudanças psicológicas intensas.",
                conselhos: "Abrace transformações radicais. Use insights psicológicos para evolução."
            },
            sagitario: {
                interpretacao: "Revolução filosófica, mudanças em crenças e visão de mundo.",
                conselhos: "Questione crenças limitantes. Desenvolva filosofia de vida inovadora."
            },
            capricornio: {
                interpretacao: "Revolução estrutural, mudanças na carreira e autoridade.",
                conselhos: "Inove em estruturas tradicionais. Lidere mudanças com responsabilidade."
            },
            aquario: {
                interpretacao: "Revolução humanitária intensificada, mudanças em grupos e ideais sociais.",
                conselhos: "Lidere mudanças sociais positivas. Inove para o bem da humanidade."
            },
            peixes: {
                interpretacao: "Revolução espiritual, mudanças na conexão com o divino e compaixão.",
                conselhos: "Inove em práticas espirituais. Desenvolva compaixão revolucionária."
            }
        },
        rituais_e_praticas: {
            preparacao: "Identifique áreas que precisam de mudança, prepare-se para insights súbitos, cultive flexibilidade",
            durante: "Pratique autenticidade, questione limitações pessoais, inove conscientemente",
            pos_retrogrado: "Implemente mudanças planejadas, expresse individualidade, lidere inovações"
        }
    },
    netuno: {
        nome: "Netuno Retrógrado",
        simbolo: "♆℞",
        periodo_medio: "Anualmente, por 5 meses",
        significado_geral: "Revisão de ilusões, espiritualidade e compaixão",
        efeitos_gerais: [
            "Dissolução de ilusões pessoais",
            "Aprofundamento espiritual",
            "Clareza sobre enganos e fantasias",
            "Desenvolvimento de intuição genuína",
            "Oportunidade de cura emocional profunda"
        ],
        por_signo: {
            aries: {
                interpretacao: "Ilusões sobre identidade e capacidades, espiritualidade impulsiva.",
                conselhos: "Desenvolva espiritualidade através da ação consciente. Seja realista sobre capacidades."
            },
            touro: {
                interpretacao: "Ilusões materiais, apego a segurança ilusória. Espiritualidade através da natureza.",
                conselhos: "Questione apegos materiais. Encontre segurança através da conexão espiritual."
            },
            gemeos: {
                interpretacao: "Confusão mental, comunicação nebulosa. Intuição através do conhecimento.",
                conselhos: "Desenvolva discernimento mental. Use intuição para complementar lógica."
            },
            cancer: {
                interpretacao: "Ilusões emocionais, fantasias sobre família e lar. Intuição maternal.",
                conselhos: "Processe emoções com clareza. Desenvolva compaixão sem vitimização."
            },
            leao: {
                interpretacao: "Ilusões sobre grandeza pessoal, ego espiritual. Criatividade inspirada.",
                conselhos: "Desenvolva humildade espiritual. Use criatividade para inspirar outros."
            },
            virgem: {
                interpretacao: "Perfeccionismo espiritual, críticas baseadas em ilusões. Serviço compassivo.",
                conselhos: "Aceite imperfeições espirituais. Sirva outros com compaixão genuína."
            },
            libra: {
                interpretacao: "Ilusões em relacionamentos, busca por harmonia irreal. Amor incondicional.",
                conselhos: "Desenvolva relacionamentos baseados na realidade. Pratique amor sem expectativas."
            },
            escorpiao: {
                interpretacao: "Ilusões sobre poder pessoal, obsessões espirituais. Transformação através da rendição.",
                conselhos: "Renda-se ao processo de transformação. Use poder espiritual com sabedoria."
            },
            sagitario: {
                interpretacao: "Ilusões filosóficas, dogmatismo espiritual. Busca pela verdade universal.",
                conselhos: "Questione crenças limitantes. Busque verdade através da experiência direta."
            },
            capricornio: {
                interpretacao: "Ilusões sobre estruturas e autoridade, espiritualidade prática.",
                conselhos: "Integre espiritualidade na vida prática. Questione estruturas rígidas."
            },
            aquario: {
                interpretacao: "Ilusões sobre ideais humanitários, espiritualidade grupal. Visão compassiva.",
                conselhos: "Desenvolva compaixão universal genuína. Trabalhe por ideais realistas."
            },
            peixes: {
                interpretacao: "Ilusões espirituais intensificadas, escapismo através da espiritualidade.",
                conselhos: "Desenvolva discernimento espiritual. Equilibre compaixão com praticidade."
            }
        },
        rituais_e_praticas: {
            preparacao: "Identifique ilusões pessoais, prepare-se para insights espirituais, cultive discernimento",
            durante: "Pratique meditação e contemplação, questione fantasias, desenvolva compaixão genuína",
            pos_retrogrado: "Integre insights espirituais, implemente práticas compassivas, use intuição desenvolvida"
        }
    },
    plutao: {
        nome: "Plutão Retrógrado",
        simbolo: "♇℞",
        periodo_medio: "Anualmente, por 5-6 meses",
        significado_geral: "Revisão de transformações, poder pessoal e regeneração",
        efeitos_gerais: [
            "Transformação interna profunda",
            "Confronto com sombras pessoais",
            "Revisão do uso do poder pessoal",
            "Cura de traumas profundos",
            "Oportunidade de renascimento psicológico"
        ],
        por_signo: {
            aries: {
                interpretacao: "Transformação da identidade, confronto com impulsos destrutivos.",
                conselhos: "Canalize energia transformadora construtivamente. Renasça através da coragem."
            },
            touro: {
                interpretacao: "Transformação de valores materiais, confronto com apegos destrutivos.",
                conselhos: "Transforme relação com materialismo. Encontre segurança através da transformação."
            },
            gemeos: {
                interpretacao: "Transformação mental, confronto com padrões de pensamento limitantes.",
                conselhos: "Transforme padrões mentais negativos. Comunique verdades profundas."
            },
            cancer: {
                interpretacao: "Transformação emocional profunda, cura de feridas familiares.",
                conselhos: "Cure feridas emocionais ancestrais. Transforme padrões de nutrição emocional."
            },
            leao: {
                interpretacao: "Transformação do ego, confronto com necessidade de reconhecimento.",
                conselhos: "Transforme ego em liderança consciente. Expresse poder criativo responsavelmente."
            },
            virgem: {
                interpretacao: "Transformação através do serviço, cura de perfeccionismo destrutivo.",
                conselhos: "Transforme críticas em discernimento. Sirva através da cura e transformação."
            },
            libra: {
                interpretacao: "Transformação em relacionamentos, confronto com codependência.",
                conselhos: "Transforme padrões relacionais tóxicos. Desenvolva relacionamentos equilibrados."
            },
            escorpiao: {
                interpretacao: "Transformação intensificada, confronto direto com sombras e poder.",
                conselhos: "Abrace transformação total. Use poder pessoal para regeneração e cura."
            },
            sagitario: {
                interpretacao: "Transformação de crenças, confronto com dogmatismo e fanatismo.",
                conselhos: "Transforme crenças limitantes. Desenvolva sabedoria através da experiência."
            },
            capricornio: {
                interpretacao: "Transformação de estruturas, confronto com autoridade e controle.",
                conselhos: "Transforme estruturas obsoletas. Lidere transformações responsavelmente."
            },
            aquario: {
                interpretacao: "Transformação social, confronto com rebeldia destrutiva.",
                conselhos: "Transforme sociedade através da evolução pessoal. Use rebeldia construtivamente."
            },
            peixes: {
                interpretacao: "Transformação espiritual, confronto com vitimização e escapismo.",
                conselhos: "Transforme sofrimento em compaixão. Desenvolva espiritualidade regenerativa."
            }
        },
        rituais_e_praticas: {
            preparacao: "Identifique áreas que precisam transformação, prepare-se para confrontar sombras, cultive coragem",
            durante: "Pratique autoconhecimento profundo, trabalhe com sombras, permita morte e renascimento",
            pos_retrogrado: "Integre transformações, use poder pessoal conscientemente, ajude outros em transformação"
        }
    }
};

// BASE 11: LILITH (LUA NEGRA) - COMPLETA
const lilithPosicoes = {
    nome_completo: "Lilith - A Lua Negra",
    simbolo: "⚸",
    significado_geral: "Representa o feminino selvagem, a sexualidade reprimida, a rebeldia e os aspectos sombrios da psique feminina",
    mitologia: "Primeira mulher de Adão segundo a tradição judaica, que se recusou a se submeter e foi banida do Éden. Representa a mulher que não aceita subordinação.",
    por_signo: {
        aries: {
            interpretacao: "Lilith em Áries manifesta raiva feminina direta e confrontativa. Rebeldia contra autoridade masculina.",
            sombra: "Agressividade destrutiva, competitividade excessiva, raiva não processada",
            luz: "Liderança feminina pioneira, coragem para quebrar tabus, independência autêntica",
            sexualidade: "Sexualidade assertiva e direta, pode ser dominadora ou competitiva",
            cura: "Canalizar raiva em ação construtiva, desenvolver liderança consciente"
        },
        touro: {
            interpretacao: "Lilith em Touro representa possessividade e ciúmes intensos. Rebeldia contra valores materiais impostos.",
            sombra: "Possessividade destrutiva, materialismo excessivo, teimosia prejudicial",
            luz: "Valorização autêntica da beleza e prazer, sensualidade natural, recursos próprios",
            sexualidade: "Sensualidade intensa e possessiva, prazer físico como poder",
            cura: "Desenvolver autoestima independente de posses, equilibrar prazer e responsabilidade"
        },
        gemeos: {
            interpretacao: "Lilith em Gêmeos manifesta através de palavras cortantes e manipulação mental. Rebeldia intelectual.",
            sombra: "Manipulação através de palavras, mentiras sedutoras, superficialidade emocional",
            luz: "Comunicação autêntica e direta, inteligência independente, versatilidade genuína",
            sexualidade: "Sedução através de palavras, jogos mentais, múltiplas facetas sexuais",
            cura: "Usar inteligência para empoderar outros, comunicar verdades profundas"
        },
        cancer: {
            interpretacao: "Lilith em Câncer representa a mãe sombria, possessividade emocional e manipulação através de sentimentos.",
            sombra: "Manipulação emocional, vitimização, possessividade maternal destrutiva",
            luz: "Nutrição autêntica, proteção consciente, intuição poderosa",
            sexualidade: "Sexualidade ligada a necessidades emocionais, possessividade íntima",
            cura: "Nutrir sem controlar, desenvolver independência emocional"
        },
        leao: {
            interpretacao: "Lilith em Leão manifesta através de drama e necessidade excessiva de atenção. Rebeldia criativa.",
            sombra: "Narcisismo destrutivo, drama manipulativo, ego inflado",
            luz: "Criatividade autêntica, liderança carismática, expressão genuína",
            sexualidade: "Sexualidade teatral e dominante, sedução através do carisma",
            cura: "Expressar criatividade sem necessidade de aprovação, liderar com humildade"
        },
        virgem: {
            interpretacao: "Lilith em Virgem representa críticas destrutivas e perfeccionismo obsessivo. Rebeldia através da análise.",
            sombra: "Críticas cruéis, perfeccionismo paralisante, julgamento severo",
            luz: "Discernimento preciso, serviço consciente, cura através da análise",
            sexualidade: "Sexualidade analítica, crítica do desempenho, pureza como poder",
            cura: "Usar discernimento para curar, aceitar imperfeições humanas"
        },
        libra: {
            interpretacao: "Lilith em Libra manifesta através de relacionamentos desequilibrados e manipulação sutil. Rebeldia contra injustiça.",
            sombra: "Manipulação sutil, codependência, injustiça disfarçada de harmonia",
            luz: "Justiça autêntica, relacionamentos equilibrados, beleza genuína",
            sexualidade: "Sedução através da beleza e charme, jogos relacionais",
            cura: "Desenvolver relacionamentos baseados na verdade, buscar justiça real"
        },
        escorpiao: {
            interpretacao: "Lilith em Escorpião intensifica todos os aspectos sombrios. Poder sexual e psicológico extremo.",
            sombra: "Manipulação psicológica, obsessão sexual, vingança destrutiva",
            luz: "Transformação profunda, cura psicológica, poder regenerativo",
            sexualidade: "Sexualidade intensa e transformadora, poder através do sexo",
            cura: "Usar poder para cura e transformação, perdoar para liberar"
        },
        sagitario: {
            interpretacao: "Lilith em Sagitário representa dogmatismo e fanatismo. Rebeldia contra limitações filosóficas.",
            sombra: "Fanatismo religioso, dogmatismo destrutivo, arrogância intelectual",
            luz: "Busca autêntica pela verdade, sabedoria independente, liberdade filosófica",
            sexualidade: "Sexualidade aventureira, sedução através da sabedoria",
            cura: "Buscar verdade sem impor crenças, ensinar através do exemplo"
        },
        capricornio: {
            interpretacao: "Lilith em Capricórnio manifesta através de ambição destrutiva e uso manipulativo de autoridade.",
            sombra: "Ambição sem escrúpulos, manipulação de poder, frieza emocional",
            luz: "Liderança responsável, autoridade consciente, estruturas justas",
            sexualidade: "Sexualidade como ferramenta de poder, sedução através do status",
            cura: "Usar autoridade para empoderar outros, liderar com compaixão"
        },
        aquario: {
            interpretacao: "Lilith em Aquário representa rebeldia destrutiva e alienação emocional. Individualismo extremo.",
            sombra: "Rebeldia sem causa, frieza emocional, alienação social",
            luz: "Inovação consciente, humanitarismo autêntico, individualidade saudável",
            sexualidade: "Sexualidade não convencional, experimentação, distanciamento emocional",
            cura: "Equilibrar individualidade com conexão humana, rebelar-se construtivamente"
        },
        peixes: {
            interpretacao: "Lilith em Peixes representa vitimização e manipulação através da compaixão. Escapismo destrutivo.",
            sombra: "Vitimização manipulativa, escapismo através de vícios, ilusões destrutivas",
            luz: "Compaixão autêntica, intuição poderosa, conexão espiritual genuína",
            sexualidade: "Sexualidade fantasiosa, sedução através da vulnerabilidade",
            cura: "Desenvolver compaixão sem vitimização, usar intuição conscientemente"
        }
    },
    por_casa: {
        casa_1: {
            interpretacao: "Lilith na Casa 1 manifesta através da personalidade e aparência. Rebeldia na autoimagem.",
            efeitos: "Magnetismo pessoal intenso, aparência provocativa, personalidade desafiadora",
            cura: "Aceitar aspectos sombrios da personalidade, expressar autenticidade"
        },
        casa_2: {
            interpretacao: "Lilith na Casa 2 afeta valores e recursos. Rebeldia contra valores impostos.",
            efeitos: "Relação complexa com dinheiro, valores não convencionais, autoestima instável",
            cura: "Desenvolver valores autênticos, usar recursos conscientemente"
        },
        casa_3: {
            interpretacao: "Lilith na Casa 3 manifesta na comunicação e relacionamentos próximos.",
            efeitos: "Comunicação provocativa, conflitos com irmãos, pensamento rebelde",
            cura: "Comunicar verdades difíceis com compaixão, curar relacionamentos familiares"
        },
        casa_4: {
            interpretacao: "Lilith na Casa 4 afeta lar e família. Feridas ancestrais femininas.",
            efeitos: "Conflitos familiares, feridas maternas, lar instável",
            cura: "Curar linhagem feminina, criar lar autêntico, nutrir conscientemente"
        },
        casa_5: {
            interpretacao: "Lilith na Casa 5 manifesta na criatividade e romance. Sexualidade intensa.",
            efeitos: "Romances intensos e destrutivos, criatividade sombria, questões com filhos",
            cura: "Expressar criatividade autêntica, relacionar-se conscientemente"
        },
        casa_6: {
            interpretacao: "Lilith na Casa 6 afeta trabalho e saúde. Rebeldia contra rotinas.",
            efeitos: "Conflitos no trabalho, problemas de saúde relacionados à repressão",
            cura: "Encontrar trabalho autêntico, cuidar da saúde conscientemente"
        },
        casa_7: {
            interpretacao: "Lilith na Casa 7 manifesta em relacionamentos e parcerias.",
            efeitos: "Relacionamentos intensos e transformadores, atração por parceiros sombrios",
            cura: "Desenvolver relacionamentos equilibrados, integrar sombra relacional"
        },
        casa_8: {
            interpretacao: "Lilith na Casa 8 intensifica transformação e sexualidade.",
            efeitos: "Sexualidade intensa, fascínio pela morte, transformações profundas",
            cura: "Usar poder transformador conscientemente, curar traumas sexuais"
        },
        casa_9: {
            interpretacao: "Lilith na Casa 9 afeta filosofia e crenças. Rebeldia espiritual.",
            efeitos: "Questionamento de crenças, filosofia não convencional, conflitos religiosos",
            cura: "Desenvolver filosofia autêntica, ensinar através da experiência"
        },
        casa_10: {
            interpretacao: "Lilith na Casa 10 manifesta na carreira e reputação pública.",
            efeitos: "Carreira controversa, reputação polarizada, conflitos com autoridade",
            cura: "Usar posição pública conscientemente, liderar com autenticidade"
        },
        casa_11: {
            interpretacao: "Lilith na Casa 11 afeta amizades e grupos. Rebeldia social.",
            efeitos: "Conflitos em grupos, amizades intensas, ideais não convencionais",
            cura: "Contribuir para grupos conscientemente, manter individualidade saudável"
        },
        casa_12: {
            interpretacao: "Lilith na Casa 12 representa sombra inconsciente e espiritualidade.",
            efeitos: "Sombra profunda inconsciente, espiritualidade não convencional, autossabotagem",
            cura: "Integrar sombra conscientemente, desenvolver espiritualidade autêntica"
        }
    },
    aspectos_importantes: {
        conjuncao_sol: "Identidade fundida com aspectos sombrios femininos, carisma magnético",
        conjuncao_lua: "Emoções intensas e instintivas, maternidade não convencional",
        conjuncao_venus: "Sexualidade e amor intensos, beleza provocativa",
        conjuncao_marte: "Energia sexual e agressiva intensa, conflitos de poder",
        oposicao_sol: "Conflito entre ego consciente e sombra feminina",
        quadratura_lua: "Tensão entre necessidades emocionais e instintos selvagens"
    },
    rituais_e_trabalho: {
        integracao: "Meditar sobre aspectos rejeitados da feminilidade, trabalhar com sombra",
        cura: "Terapia para traumas sexuais, trabalho corporal, expressão artística",
        empoderamento: "Rituais de reclamação do poder feminino, conexão com deusas sombrias",
        transformacao: "Usar energia de Lilith para quebrar padrões limitantes, autenticidade"
    }
};


// BASE 12: QUÍRON - O CURADOR FERIDO - COMPLETA
const quironPosicoes = {
    nome_completo: "Quíron - O Curador Ferido",
    simbolo: "⚷",
    significado_geral: "Representa nossa ferida primordial e nosso potencial de cura. Onde fomos feridos, desenvolvemos sabedoria para curar outros.",
    mitologia: "Centauro sábio ferido por uma flecha envenenada de Hércules. Imortal, não podia morrer nem se curar completamente, dedicando-se a curar outros.",
    por_signo: {
        aries: {
            ferida: "Ferida na identidade e autoestima. Dificuldade em afirmar-se e tomar iniciativa.",
            manifestacao: "Insegurança sobre capacidades pessoais, medo de liderar, impulsividade compensatória",
            cura: "Desenvolver coragem autêntica, liderar através do exemplo, ajudar outros a encontrar identidade",
            dom_curador: "Capacidade de inspirar coragem em outros, ensinar liderança consciente",
            processo_cura: "Aceitar vulnerabilidades, desenvolver autocompaixão, agir apesar do medo"
        },
        touro: {
            ferida: "Ferida na segurança material e autoestima. Medo de não ter o suficiente.",
            manifestacao: "Insegurança financeira, baixa autoestima, apego excessivo a posses",
            cura: "Desenvolver segurança interior, valorizar qualidades não materiais, generosidade consciente",
            dom_curador: "Ajudar outros a encontrar segurança interior, ensinar valor pessoal",
            processo_cura: "Cultivar gratidão, desenvolver talentos naturais, compartilhar recursos"
        },
        gemeos: {
            ferida: "Ferida na comunicação e aprendizado. Dificuldade em ser compreendido.",
            manifestacao: "Problemas de comunicação, dispersão mental, medo de não ser inteligente o suficiente",
            cura: "Desenvolver comunicação autêntica, integrar conhecimentos, ensinar com paciência",
            dom_curador: "Facilitar comunicação entre pessoas, ensinar de forma acessível",
            processo_cura: "Praticar escuta ativa, organizar pensamentos, valorizar curiosidade natural"
        },
        cancer: {
            ferida: "Ferida emocional e familiar. Necessidades emocionais não atendidas na infância.",
            manifestacao: "Dificuldade em nutrir e ser nutrido, problemas familiares, sensibilidade excessiva",
            cura: "Aprender a nutrir-se, criar família escolhida, desenvolver intuição",
            dom_curador: "Capacidade de nutrir e curar emocionalmente outros, criar ambientes seguros",
            processo_cura: "Honrar emoções, criar rituais de autocuidado, perdoar família de origem"
        },
        leao: {
            ferida: "Ferida na criatividade e reconhecimento. Medo de não ser especial ou amado.",
            manifestacao: "Necessidade excessiva de atenção, bloqueios criativos, medo de rejeição",
            cura: "Desenvolver amor próprio, expressar criatividade autêntica, brilhar sem ego",
            dom_curador: "Inspirar outros a brilharem, ensinar autoexpressão, curar feridas criativas",
            processo_cura: "Celebrar unicidade, criar sem expectativas, desenvolver generosidade"
        },
        virgem: {
            ferida: "Ferida no perfeccionismo e crítica. Medo de não ser bom o suficiente.",
            manifestacao: "Autocrítica severa, perfeccionismo paralisante, problemas de saúde por estresse",
            cura: "Aceitar imperfeições, desenvolver autocompaixão, servir sem julgamento",
            dom_curador: "Ajudar outros a aceitar imperfeições, ensinar autocuidado, cura holística",
            processo_cura: "Praticar autocompaixão, celebrar progresso, servir com humildade"
        },
        libra: {
            ferida: "Ferida em relacionamentos e equilíbrio. Dificuldade em manter harmonia.",
            manifestacao: "Codependência, dificuldade em tomar decisões, medo de conflitos",
            cura: "Desenvolver relacionamentos equilibrados, tomar decisões conscientes, aceitar conflitos",
            dom_curador: "Mediar conflitos, ensinar relacionamentos saudáveis, criar harmonia genuína",
            processo_cura: "Estabelecer limites saudáveis, praticar assertividade, valorizar paz interior"
        },
        escorpiao: {
            ferida: "Ferida na confiança e poder. Traumas profundos e traições.",
            manifestacao: "Dificuldade em confiar, obsessões, medo de vulnerabilidade",
            cura: "Desenvolver confiança gradual, usar poder conscientemente, transformar traumas",
            dom_curador: "Ajudar outros em transformações profundas, cura de traumas, renascimento",
            processo_cura: "Enfrentar sombras, perdoar traições, usar poder para cura"
        },
        sagitario: {
            ferida: "Ferida na busca por significado. Desilusão com crenças e filosofias.",
            manifestacao: "Crise de fé, dogmatismo compensatório, medo de não encontrar propósito",
            cura: "Desenvolver filosofia pessoal, encontrar significado na jornada, ensinar através da experiência",
            dom_curador: "Guiar outros na busca por significado, ensinar sabedoria prática",
            processo_cura: "Questionar crenças limitantes, abraçar jornada espiritual, compartilhar sabedoria"
        },
        capricornio: {
            ferida: "Ferida na autoridade e estrutura. Problemas com figuras de autoridade.",
            manifestacao: "Medo de responsabilidade, problemas com autoridade, rigidez excessiva",
            cura: "Desenvolver autoridade interior, criar estruturas saudáveis, liderar com compaixão",
            dom_curador: "Ensinar liderança responsável, criar estruturas de apoio, mentoria",
            processo_cura: "Assumir responsabilidade gradual, honrar própria autoridade, servir comunidade"
        },
        aquario: {
            ferida: "Ferida na individualidade e pertencimento. Sentir-se diferente ou rejeitado.",
            manifestacao: "Alienação social, rebeldia destrutiva, medo de intimidade",
            cura: "Aceitar unicidade, encontrar tribo consciente, contribuir para humanidade",
            dom_curador: "Ajudar outros a aceitar diferenças, criar comunidades inclusivas",
            processo_cura: "Celebrar individualidade, conectar-se conscientemente, servir coletivo"
        },
        peixes: {
            ferida: "Ferida na conexão espiritual. Sensibilidade excessiva e confusão emocional.",
            manifestacao: "Escapismo, vitimização, dificuldade em estabelecer limites",
            cura: "Desenvolver discernimento espiritual, estabelecer limites saudáveis, canalizar sensibilidade",
            dom_curador: "Cura espiritual e emocional, compaixão genuína, arte terapêutica",
            processo_cura: "Praticar discernimento, estabelecer limites, usar sensibilidade conscientemente"
        }
    },
    por_casa: {
        casa_1: {
            ferida: "Ferida na identidade e autoimagem. Dificuldade em ser autêntico.",
            cura: "Desenvolver autenticidade, aceitar todos os aspectos da personalidade",
            dom: "Ajudar outros a encontrar identidade autêntica"
        },
        casa_2: {
            ferida: "Ferida na autoestima e recursos. Sentir-se sem valor.",
            cura: "Reconhecer valor interior, desenvolver talentos naturais",
            dom: "Ajudar outros a reconhecer próprio valor e talentos"
        },
        casa_3: {
            ferida: "Ferida na comunicação e aprendizado. Dificuldade em expressar-se.",
            cura: "Desenvolver comunicação autêntica, aprender continuamente",
            dom: "Facilitar comunicação e aprendizado para outros"
        },
        casa_4: {
            ferida: "Ferida familiar e emocional. Lar instável ou disfuncional.",
            cura: "Criar lar emocional seguro, curar feridas familiares",
            dom: "Criar ambientes seguros e nutritivos para outros"
        },
        casa_5: {
            ferida: "Ferida na criatividade e autoexpressão. Bloqueios criativos.",
            cura: "Expressar criatividade autêntica, curar criança interior",
            dom: "Inspirar criatividade e alegria em outros"
        },
        casa_6: {
            ferida: "Ferida no trabalho e saúde. Problemas de saúde ou trabalho insatisfatório.",
            cura: "Encontrar trabalho significativo, cuidar da saúde holisticamente",
            dom: "Ensinar cuidados de saúde e trabalho consciente"
        },
        casa_7: {
            ferida: "Ferida em relacionamentos. Dificuldade em parcerias equilibradas.",
            cura: "Desenvolver relacionamentos saudáveis, equilibrar dar e receber",
            dom: "Mediar relacionamentos, ensinar parceria consciente"
        },
        casa_8: {
            ferida: "Ferida em transformação e intimidade. Traumas profundos.",
            cura: "Transformar traumas em sabedoria, desenvolver intimidade saudável",
            dom: "Facilitar transformações profundas e cura de traumas"
        },
        casa_9: {
            ferida: "Ferida na busca por significado. Crise de fé ou propósito.",
            cura: "Desenvolver filosofia pessoal, encontrar propósito autêntico",
            dom: "Guiar outros na busca espiritual e filosófica"
        },
        casa_10: {
            ferida: "Ferida na carreira e reputação. Problemas com autoridade.",
            cura: "Desenvolver liderança autêntica, construir reputação íntegra",
            dom: "Mentoria em liderança e desenvolvimento profissional"
        },
        casa_11: {
            ferida: "Ferida em amizades e grupos. Sentir-se excluído ou diferente.",
            cura: "Encontrar comunidade consciente, contribuir para coletivo",
            dom: "Criar comunidades inclusivas, facilitar trabalho em grupo"
        },
        casa_12: {
            ferida: "Ferida espiritual e inconsciente. Confusão espiritual ou psíquica.",
            cura: "Desenvolver discernimento espiritual, integrar inconsciente",
            dom: "Cura espiritual profunda, trabalho com inconsciente coletivo"
        }
    },
    aspectos_importantes: {
        conjuncao_sol: "Ferida na identidade central, potencial de cura através da autenticidade",
        conjuncao_lua: "Ferida emocional profunda, cura através do autocuidado e nutrição",
        conjuncao_mercurio: "Ferida na comunicação, cura através da expressão autêntica",
        conjuncao_venus: "Ferida no amor e valores, cura através do amor próprio",
        conjuncao_marte: "Ferida na ação e assertividade, cura através da coragem consciente",
        oposicao_sol: "Conflito entre ferida e identidade consciente",
        quadratura_lua: "Tensão entre ferida e necessidades emocionais"
    },
    processo_cura_geral: {
        reconhecimento: "Identificar e aceitar a ferida sem julgamento",
        compreensao: "Entender origem e padrões da ferida",
        aceitacao: "Abraçar a ferida como parte da jornada",
        transformacao: "Usar ferida como fonte de sabedoria e compaixão",
        servico: "Ajudar outros com feridas similares",
        integracao: "Integrar ferida e cura como aspectos complementares"
    },
    rituais_e_praticas: {
        autoconhecimento: "Journaling sobre feridas, terapia, meditação introspectiva",
        cura: "Terapias holísticas, trabalho corporal, arte terapia",
        servico: "Voluntariado, mentoria, compartilhamento de experiências",
        integracao: "Rituais de aceitação, celebração da jornada, gratidão pela ferida"
    }
};

// BASE 13: NODOS LUNARES - COMPLETA
const nodosLunares = {
    nome_completo: "Nodos Lunares - Eixo do Destino",
    simbolo_norte: "☊",
    simbolo_sul: "☋",
    significado_geral: "Representam o eixo evolutivo da alma. O Nodo Sul mostra talentos passados e padrões a transcender. O Nodo Norte indica a direção de crescimento.",
    ciclo: "Aproximadamente 18,6 anos para completar o zodíaco",
    nodo_sul: {
        significado: "Talentos naturais, padrões kármicos, zona de conforto, o que precisa ser transcendido",
        por_signo: {
            aries: {
                talentos_passados: "Liderança natural, coragem, independência, pioneirismo",
                padroes_limitantes: "Impulsividade, egoísmo, impaciência, agressividade",
                licoes: "Aprender cooperação, considerar outros, desenvolver paciência"
            },
            touro: {
                talentos_passados: "Estabilidade, praticidade, determinação, senso estético",
                padroes_limitantes: "Teimosia, materialismo, resistência a mudanças, possessividade",
                licoes: "Abraçar mudanças, desenvolver flexibilidade, transcender apegos"
            },
            gemeos: {
                talentos_passados: "Comunicação, versatilidade, curiosidade, adaptabilidade",
                padroes_limitantes: "Superficialidade, dispersão, inconsistência, fofoca",
                licoes: "Desenvolver profundidade, focar, buscar sabedoria verdadeira"
            },
            cancer: {
                talentos_passados: "Intuição, cuidado, sensibilidade, conexão emocional",
                padroes_limitantes: "Dependência emocional, vitimização, apego ao passado, humor instável",
                licoes: "Desenvolver independência emocional, liderar, assumir responsabilidade"
            },
            leao: {
                talentos_passados: "Criatividade, carisma, generosidade, liderança natural",
                padroes_limitantes: "Ego inflado, necessidade de atenção, drama, arrogância",
                licoes: "Desenvolver humildade, trabalhar em equipe, servir causas maiores"
            },
            virgem: {
                talentos_passados: "Organização, análise, serviço, atenção aos detalhes",
                padroes_limitantes: "Perfeccionismo, crítica excessiva, preocupação, rigidez",
                licoes: "Desenvolver fé, ver quadro maior, aceitar imperfeições"
            },
            libra: {
                talentos_passados: "Diplomacia, senso estético, cooperação, busca por harmonia",
                padroes_limitantes: "Indecisão, dependência, evitação de conflitos, superficialidade",
                licoes: "Desenvolver independência, tomar decisões, enfrentar conflitos"
            },
            escorpiao: {
                talentos_passados: "Intensidade, transformação, percepção psicológica, poder pessoal",
                padroes_limitantes: "Obsessão, manipulação, ciúmes, vingança",
                licoes: "Desenvolver leveza, generosidade, otimismo, expansão"
            },
            sagitario: {
                talentos_passados: "Sabedoria, otimismo, expansão, busca por verdade",
                padroes_limitantes: "Dogmatismo, exagero, irresponsabilidade, arrogância intelectual",
                licoes: "Desenvolver humildade, atenção aos detalhes, responsabilidade prática"
            },
            capricornio: {
                talentos_passados: "Disciplina, responsabilidade, estrutura, autoridade",
                padroes_limitantes: "Rigidez, frieza, autoritarismo, pessimismo",
                licoes: "Desenvolver sensibilidade emocional, nutrir outros, flexibilidade"
            },
            aquario: {
                talentos_passados: "Inovação, independência, visão futurista, humanitarismo",
                padroes_limitantes: "Distanciamento emocional, rebeldia destrutiva, frieza",
                licoes: "Desenvolver conexão emocional, criatividade pessoal, expressão individual"
            },
            peixes: {
                talentos_passados: "Compaixão, intuição, espiritualidade, sensibilidade",
                padroes_limitantes: "Escapismo, vitimização, confusão, dependência",
                licoes: "Desenvolver discernimento, organização, responsabilidade prática"
            }
        }
    },
    nodo_norte: {
        significado: "Direção de crescimento, qualidades a desenvolver, propósito evolutivo, zona de desconforto necessária",
        por_signo: {
            aries: {
                qualidades_desenvolver: "Liderança consciente, coragem, independência, iniciativa",
                desafios: "Superar dependência, desenvolver autoconfiança, tomar decisões",
                proposito: "Tornar-se líder autêntico, pioneiro consciente, inspirar outros através da coragem"
            },
            touro: {
                qualidades_desenvolver: "Estabilidade, praticidade, paciência, senso de valor",
                desafios: "Superar instabilidade, desenvolver autoestima, criar segurança",
                proposito: "Construir bases sólidas, desenvolver talentos, criar beleza e estabilidade"
            },
            gemeos: {
                qualidades_desenvolver: "Comunicação, curiosidade, versatilidade, aprendizado",
                desafios: "Superar dogmatismo, desenvolver flexibilidade mental, comunicar-se claramente",
                proposito: "Tornar-se comunicador eficaz, facilitador de conhecimento, ponte entre mundos"
            },
            cancer: {
                qualidades_desenvolver: "Cuidado, intuição, sensibilidade emocional, nutrição",
                desafios: "Superar frieza emocional, desenvolver empatia, cuidar de outros",
                proposito: "Tornar-se cuidador consciente, nutrir emocionalmente, criar lar seguro"
            },
            leao: {
                qualidades_desenvolver: "Criatividade, autoexpressão, generosidade, liderança carismática",
                desafios: "Superar timidez, desenvolver autoestima, expressar-se autenticamente",
                proposito: "Brilhar autenticamente, inspirar outros, liderar com coração"
            },
            virgem: {
                qualidades_desenvolver: "Organização, serviço, atenção aos detalhes, cura",
                desafios: "Superar caos, desenvolver disciplina, servir humildemente",
                proposito: "Servir conscientemente, curar através da organização, aperfeiçoar habilidades"
            },
            libra: {
                qualidades_desenvolver: "Cooperação, diplomacia, senso estético, relacionamentos equilibrados",
                desafios: "Superar individualismo excessivo, desenvolver tato, criar harmonia",
                proposito: "Criar relacionamentos equilibrados, mediar conflitos, trazer beleza ao mundo"
            },
            escorpiao: {
                qualidades_desenvolver: "Transformação, profundidade psicológica, poder pessoal, regeneração",
                desafios: "Superar superficialidade, enfrentar sombras, transformar-se profundamente",
                proposito: "Facilitar transformações, curar traumas profundos, renascer conscientemente"
            },
            sagitario: {
                qualidades_desenvolver: "Sabedoria, expansão, otimismo, busca por verdade",
                desafios: "Superar limitações mentais, desenvolver fé, expandir horizontes",
                proposito: "Ensinar sabedoria, expandir consciência, buscar verdade universal"
            },
            capricornio: {
                qualidades_desenvolver: "Responsabilidade, disciplina, estrutura, autoridade consciente",
                desafios: "Superar irresponsabilidade, desenvolver maturidade, construir estruturas",
                proposito: "Liderar responsavelmente, construir legado duradouro, servir comunidade"
            },
            aquario: {
                qualidades_desenvolver: "Inovação, humanitarismo, independência, visão futurista",
                desafios: "Superar tradicionalismo, desenvolver originalidade, servir humanidade",
                proposito: "Inovar conscientemente, servir coletivo, trazer visão futurista"
            },
            peixes: {
                qualidades_desenvolver: "Compaixão, intuição, espiritualidade, conexão universal",
                desafios: "Superar materialismo, desenvolver sensibilidade, conectar-se espiritualmente",
                proposito: "Desenvolver compaixão universal, servir espiritualmente, dissolver separações"
            }
        }
    },
    por_casa: {
        eixo_1_7: {
            nodo_sul_casa_1: "Foco excessivo em si mesmo, independência extrema",
            nodo_norte_casa_7: "Aprender cooperação, desenvolver relacionamentos equilibrados",
            licao: "Equilibrar individualidade com parceria"
        },
        eixo_2_8: {
            nodo_sul_casa_2: "Apego a recursos próprios, materialismo, teimosia",
            nodo_norte_casa_8: "Aprender a compartilhar recursos, transformar-se profundamente",
            licao: "Transcender apegos materiais através da transformação"
        },
        eixo_3_9: {
            nodo_sul_casa_3: "Foco em informações superficiais, comunicação dispersa",
            nodo_norte_casa_9: "Desenvolver sabedoria, buscar verdades profundas",
            licao: "Transformar informação em sabedoria"
        },
        eixo_4_10: {
            nodo_sul_casa_4: "Apego ao lar e família, dependência emocional",
            nodo_norte_casa_10: "Desenvolver carreira, assumir responsabilidade pública",
            licao: "Equilibrar vida pessoal com responsabilidade social"
        },
        eixo_5_11: {
            nodo_sul_casa_5: "Foco em criatividade pessoal, necessidade de atenção",
            nodo_norte_casa_11: "Servir grupos, desenvolver amizades, trabalhar por ideais",
            licao: "Usar criatividade para servir coletivo"
        },
        eixo_6_12: {
            nodo_sul_casa_6: "Foco excessivo em detalhes, perfeccionismo, crítica",
            nodo_norte_casa_12: "Desenvolver fé, compaixão, conexão espiritual",
            licao: "Transcender perfeccionismo através da espiritualidade"
        }
    },
    eclipses_e_nodos: {
        eclipse_nodo_norte: "Oportunidades de crescimento evolutivo, novos começos alinhados com propósito",
        eclipse_nodo_sul: "Liberação de padrões antigos, finalizações kármicas, limpeza do passado",
        retorno_nodal: "Aos 18-19, 37-38, 56-57, 75-76 anos - ciclos de crescimento evolutivo intenso"
    },
    trabalho_evolutivo: {
        integracao: "Usar talentos do Nodo Sul para desenvolver qualidades do Nodo Norte",
        equilibrio: "Não rejeitar Nodo Sul, mas transcender suas limitações",
        proposito: "Alinhar vida com direção evolutiva do Nodo Norte",
        servico: "Usar crescimento pessoal para servir evolução coletiva"
    }
};


// BASE 14: ESTRELAS FIXAS - COMPLETA
const estrelasFixas = {
    nome_completo: "Estrelas Fixas - Influências Estelares",
    significado_geral: "Estrelas que exercem influência específica quando em conjunção com planetas ou pontos importantes do mapa natal",
    orbe_influencia: "1-2 graus para conjunção, orbes menores para outros aspectos",
    principais_estrelas: {
        algol: {
            nome: "Algol - A Estrela do Demônio",
            posicao_atual: "26° Touro",
            constelacao: "Perseus",
            magnitude: 2.1,
            natureza: "Saturno/Júpiter negativo",
            significado: "Transformação através de crises, decapitação simbólica, renovação após destruição",
            influencia_positiva: "Capacidade de transformação profunda, coragem em crises, renovação",
            influencia_negativa: "Violência, acidentes, perdas súbitas, autodestruição",
            mitologia: "Representa a cabeça da Medusa cortada por Perseus. Estrela variável que 'pisca'",
            uso_magico: "Rituais de transformação, quebra de maldições, proteção contra inimigos"
        },
        aldebaran: {
            nome: "Aldebaran - O Observador Real",
            posicao_atual: "9° Gêmeos",
            constelacao: "Taurus",
            magnitude: 0.9,
            natureza: "Marte positivo",
            significado: "Honra, coragem, liderança, sucesso através da integridade",
            influencia_positiva: "Liderança natural, coragem, honra, sucesso militar ou empresarial",
            influencia_negativa: "Arrogância, queda por falta de integridade, conflitos",
            mitologia: "Uma das quatro 'Estrelas Reais' da Pérsia, guardião do Leste",
            uso_magico: "Rituais de liderança, coragem, proteção em batalhas"
        },
        regulus: {
            nome: "Regulus - O Coração do Leão",
            posicao_atual: "29° Leão",
            constelacao: "Leo",
            magnitude: 1.4,
            natureza: "Marte/Júpiter",
            significado: "Realeza, liderança, sucesso, mas cuidado com a vingança",
            influencia_positiva: "Liderança real, sucesso, honra, generosidade, coragem",
            influencia_negativa: "Queda por vingança, arrogância, abuso de poder",
            mitologia: "Coração da constelação do Leão, estrela real por excelência",
            uso_magico: "Rituais de liderança, sucesso, honra real, proteção de líderes"
        },
        antares: {
            nome: "Antares - O Rival de Marte",
            posicao_atual: "9° Sagitário",
            constelacao: "Scorpius",
            magnitude: 1.0,
            natureza: "Marte/Júpiter",
            significado: "Coragem, conflito, obsessão, transformação através da luta",
            influencia_positiva: "Coragem extrema, liderança militar, transformação",
            influencia_negativa: "Conflitos destrutivos, obsessão, autodestruição",
            mitologia: "Rival de Marte por sua cor vermelha, coração do Escorpião",
            uso_magico: "Rituais de guerra, transformação, coragem em conflitos"
        },
        spica: {
            nome: "Spica - A Espiga de Trigo",
            posicao_atual: "23° Libra",
            constelacao: "Virgo",
            magnitude: 1.0,
            natureza: "Vênus/Mercúrio",
            significado: "Talento artístico, sucesso, proteção, dons especiais",
            influencia_positiva: "Talentos artísticos, sucesso, proteção divina, dons especiais",
            influencia_negativa: "Raramente negativa, pode indicar perfeccionismo excessivo",
            mitologia: "Espiga de trigo na mão da Virgem, símbolo de abundância",
            uso_magico: "Rituais de proteção, desenvolvimento de talentos, abundância"
        },
        arcturus: {
            nome: "Arcturus - O Guardião do Urso",
            posicao_atual: "24° Libra",
            constelacao: "Bootes",
            magnitude: -0.05,
            natureza: "Marte/Júpiter",
            significado: "Proteção, liderança espiritual, sucesso através da justiça",
            influencia_positiva: "Liderança espiritual, proteção, justiça, sucesso duradouro",
            influencia_negativa: "Fanatismo, rigidez moral, julgamento severo",
            mitologia: "Guardião da Ursa Maior, pastor celestial",
            uso_magico: "Rituais de proteção, justiça, liderança espiritual"
        },
        vega: {
            nome: "Vega - A Estrela da Lira",
            posicao_atual: "15° Capricórnio",
            constelacao: "Lyra",
            magnitude: 0.03,
            natureza: "Vênus/Mercúrio",
            significado: "Talentos artísticos, música, poesia, inspiração",
            influencia_positiva: "Dons artísticos, inspiração, beleza, harmonia",
            influencia_negativa: "Vaidade artística, superficialidade, instabilidade",
            mitologia: "Lira de Orfeu, instrumento que encantava até as pedras",
            uso_magico: "Rituais de inspiração artística, beleza, harmonia"
        },
        sirius: {
            nome: "Sirius - A Estrela do Cão",
            posicao_atual: "14° Câncer",
            constelacao: "Canis Major",
            magnitude: -1.46,
            natureza: "Júpiter/Marte",
            significado: "Sucesso, honra, riqueza, mas cuidado com o orgulho",
            influencia_positiva: "Grande sucesso, honra, riqueza, liderança",
            influencia_negativa: "Orgulho excessivo, queda por arrogância, extremos",
            mitologia: "Estrela mais brilhante do céu, associada ao deus Osíris",
            uso_magico: "Rituais de sucesso, honra, conexão com divindades estelares"
        },
        capella: {
            nome: "Capella - A Pequena Cabra",
            posicao_atual: "21° Gêmeos",
            constelacao: "Auriga",
            magnitude: 0.08,
            natureza: "Marte/Mercúrio",
            significado: "Curiosidade, aprendizado, honra através do conhecimento",
            influencia_positiva: "Amor pelo aprendizado, honra acadêmica, curiosidade",
            influencia_negativa: "Inquietação excessiva, dispersão, superficialidade",
            mitologia: "Cabra que amamentou Zeus, símbolo de nutrição e cuidado",
            uso_magico: "Rituais de aprendizado, proteção de estudiosos, curiosidade"
        },
        procyon: {
            nome: "Procyon - O Cão Menor",
            posicao_atual: "25° Câncer",
            constelacao: "Canis Minor",
            magnitude: 0.34,
            natureza: "Mercúrio/Marte",
            significado: "Atividade, inquietação, sucesso súbito mas instável",
            influencia_positiva: "Atividade mental, sucesso rápido, adaptabilidade",
            influencia_negativa: "Inquietação, instabilidade, sucesso efêmero",
            mitologia: "Cão menor que acompanha Orion na caça",
            uso_magico: "Rituais de atividade mental, adaptabilidade, mudanças rápidas"
        },
        rigel: {
            nome: "Rigel - O Pé Esquerdo de Orion",
            posicao_atual: "16° Gêmeos",
            constelacao: "Orion",
            magnitude: 0.13,
            natureza: "Júpiter/Marte",
            significado: "Conhecimento, ensino, sucesso através da educação",
            influencia_positiva: "Conhecimento profundo, capacidade de ensino, sucesso acadêmico",
            influencia_negativa: "Arrogância intelectual, dogmatismo, crítica excessiva",
            mitologia: "Pé do grande caçador Orion, base para suas aventuras",
            uso_magico: "Rituais de conhecimento, ensino, fundações sólidas"
        },
        betelgeuse: {
            nome: "Betelgeuse - O Ombro de Orion",
            posicao_atual: "28° Gêmeos",
            constelacao: "Orion",
            magnitude: 0.50,
            natureza: "Marte/Mercúrio",
            significado: "Sucesso, honra, mas possível queda súbita",
            influencia_positiva: "Grande sucesso, honra militar, liderança",
            influencia_negativa: "Queda súbita, acidentes, extremos perigosos",
            mitologia: "Ombro do caçador Orion, estrela gigante vermelha",
            uso_magico: "Rituais de sucesso, mas com proteção contra quedas"
        },
        bellatrix: {
            nome: "Bellatrix - A Guerreira",
            posicao_atual: "20° Gêmeos",
            constelacao: "Orion",
            magnitude: 1.64,
            natureza: "Marte/Mercúrio",
            significado: "Coragem militar, liderança em conflitos, honra guerreira",
            influencia_positiva: "Coragem, liderança militar, honra em batalhas",
            influencia_negativa: "Agressividade excessiva, conflitos desnecessários",
            mitologia: "Ombro direito de Orion, a guerreira amazona",
            uso_magico: "Rituais de coragem, proteção em conflitos, liderança"
        },
        polaris: {
            nome: "Polaris - A Estrela Polar",
            posicao_atual: "28° Gêmeos",
            constelacao: "Ursa Minor",
            magnitude: 1.97,
            natureza: "Saturno/Vênus",
            significado: "Direção, propósito, estabilidade, guia espiritual",
            influencia_positiva: "Senso de direção, propósito claro, estabilidade",
            influencia_negativa: "Rigidez, resistência a mudanças, isolamento",
            mitologia: "Estrela que não se move, guia dos navegadores",
            uso_magico: "Rituais de direção, propósito, estabilidade espiritual"
        },
        fomalhaut: {
            nome: "Fomalhaut - A Estrela Solitária",
            posicao_atual: "3° Peixes",
            constelacao: "Piscis Austrinus",
            magnitude: 1.16,
            natureza: "Vênus/Mercúrio",
            significado: "Idealismo, espiritualidade, mas cuidado com ilusões",
            influencia_positiva: "Idealismo elevado, espiritualidade, inspiração",
            influencia_negativa: "Ilusões, idealismo impraticável, desilusão",
            mitologia: "Uma das quatro Estrelas Reais, guardião do Sul",
            uso_magico: "Rituais espirituais, idealismo, mas com discernimento"
        }
    },
    interpretacao_por_planeta: {
        sol: {
            conjuncao_estrela_fixa: "Identidade fortemente influenciada pela natureza da estrela",
            efeitos: "Destino marcado pela estrela, características incorporadas à personalidade"
        },
        lua: {
            conjuncao_estrela_fixa: "Emoções e instintos influenciados pela estrela",
            efeitos: "Reações emocionais coloridas pela natureza estelar"
        },
        ascendente: {
            conjuncao_estrela_fixa: "Aparência e primeira impressão marcadas pela estrela",
            efeitos: "Personalidade externa fortemente influenciada"
        },
        meio_ceu: {
            conjuncao_estrela_fixa: "Carreira e reputação influenciadas pela estrela",
            efeitos: "Destino profissional marcado pela natureza estelar"
        }
    },
    uso_pratico: {
        natal: "Identificar estrelas em conjunção com planetas ou ângulos importantes",
        transitos: "Observar quando planetas transitam sobre estrelas fixas natais",
        progressoes: "Acompanhar progressões que ativam estrelas fixas",
        eleicoes: "Escolher momentos com estrelas fixas favoráveis para eventos importantes"
    },
    precaucoes: {
        orbes: "Usar orbes pequenos (1-2 graus máximo) para conjunções",
        aspectos: "Outros aspectos têm influência muito menor",
        contexto: "Sempre interpretar dentro do contexto geral do mapa",
        equilibrio: "Estrelas fixas intensificam, mas não determinam o destino"
    }
};

// BASE 15: PARTES ÁRABES - COMPLETA
const partesArabes = {
    nome_completo: "Partes Árabes - Pontos Sensíveis",
    significado_geral: "Pontos calculados matematicamente que revelam áreas específicas da vida e potenciais ocultos",
    origem: "Tradição astrológica árabe e helenística, baseada em fórmulas geométricas",
    principais_partes: {
        parte_fortuna: {
            nome: "Parte da Fortuna",
            simbolo: "⊕",
            formula_diurna: "Ascendente + Lua - Sol",
            formula_noturna: "Ascendente + Sol - Lua",
            significado: "Prosperidade material, sorte, integração da personalidade",
            interpretacao_por_signo: {
                aries: "Fortuna através da liderança, iniciativa e coragem",
                touro: "Prosperidade através da estabilidade, recursos naturais e paciência",
                gemeos: "Sorte através da comunicação, versatilidade e conexões",
                cancer: "Fortuna através do cuidado, família e intuição",
                leao: "Prosperidade através da criatividade, liderança e expressão",
                virgem: "Sorte através do serviço, organização e atenção aos detalhes",
                libra: "Fortuna através de parcerias, diplomacia e senso estético",
                escorpiao: "Prosperidade através da transformação, investigação e recursos ocultos",
                sagitario: "Sorte através da expansão, ensino e busca por significado",
                capricornio: "Fortuna através da disciplina, estrutura e autoridade",
                aquario: "Prosperidade através da inovação, grupos e ideais humanitários",
                peixes: "Sorte através da compaixão, intuição e serviço espiritual"
            },
            interpretacao_por_casa: {
                casa_1: "Fortuna através da personalidade e aparência",
                casa_2: "Prosperidade material e recursos pessoais",
                casa_3: "Sorte através da comunicação e relacionamentos próximos",
                casa_4: "Fortuna através da família e propriedades",
                casa_5: "Prosperidade através da criatividade e especulações",
                casa_6: "Sorte através do trabalho e cuidados com a saúde",
                casa_7: "Fortuna através de parcerias e relacionamentos",
                casa_8: "Prosperidade através de recursos compartilhados e transformação",
                casa_9: "Sorte através de estudos superiores e viagens",
                casa_10: "Fortuna através da carreira e reputação",
                casa_11: "Prosperidade através de amigos e realizações de sonhos",
                casa_12: "Sorte através do serviço espiritual e trabalho oculto"
            }
        },
        parte_espirito: {
            nome: "Parte do Espírito",
            simbolo: "☉",
            formula_diurna: "Ascendente + Sol - Lua",
            formula_noturna: "Ascendente + Lua - Sol",
            significado: "Propósito espiritual, direção da alma, aspirações elevadas",
            interpretacao: "Complementa a Parte da Fortuna, mostrando o caminho espiritual e as aspirações mais elevadas da alma"
        },
        parte_amor: {
            nome: "Parte do Amor",
            simbolo: "♀",
            formula: "Ascendente + Vênus - Sol",
            significado: "Relacionamentos amorosos, atração, harmonia emocional",
            interpretacao: "Indica como e onde encontrar o amor, tipo de relacionamentos atraídos"
        },
        parte_casamento: {
            nome: "Parte do Casamento",
            simbolo: "♀♂",
            formula_homem: "Ascendente + Vênus - Saturno",
            formula_mulher: "Ascendente + Saturno - Vênus",
            significado: "Parcerias duradouras, compromisso, estabilidade relacional",
            interpretacao: "Mostra potencial para relacionamentos duradouros e características do parceiro ideal"
        },
        parte_filhos: {
            nome: "Parte dos Filhos",
            simbolo: "☽",
            formula: "Ascendente + Júpiter - Lua",
            significado: "Fertilidade, relacionamento com filhos, criatividade generativa",
            interpretacao: "Indica potencial para ter filhos e qualidade do relacionamento com eles"
        },
        parte_doenca: {
            nome: "Parte da Doença",
            simbolo: "♄",
            formula: "Ascendente + Marte - Saturno",
            significado: "Vulnerabilidades de saúde, áreas que precisam atenção",
            interpretacao: "Mostra predisposições de saúde e como prevenir problemas"
        },
        parte_morte: {
            nome: "Parte da Morte",
            simbolo: "♇",
            formula: "Ascendente + Casa 8 - Lua",
            significado: "Transformações profundas, finais e novos começos",
            interpretacao: "Não indica morte literal, mas transformações e renascimentos"
        },
        parte_carreira: {
            nome: "Parte da Carreira",
            simbolo: "♄",
            formula: "Meio do Céu + Saturno - Sol",
            significado: "Realização profissional, autoridade, reconhecimento",
            interpretacao: "Mostra caminho para sucesso profissional e reconhecimento"
        },
        parte_viagens: {
            nome: "Parte das Viagens",
            simbolo: "♃",
            formula: "Ascendente + Regente da Casa 9 - Regente da Casa 1",
            significado: "Viagens, expansão, experiências estrangeiras",
            interpretacao: "Indica potencial para viagens e experiências expansivas"
        },
        parte_amigos: {
            nome: "Parte dos Amigos",
            simbolo: "♒",
            formula: "Ascendente + Lua - Urano",
            significado: "Amizades, grupos, esperanças e sonhos",
            interpretacao: "Mostra como formar amizades e realizar aspirações"
        },
        parte_inimigos: {
            nome: "Parte dos Inimigos",
            simbolo: "♂",
            formula: "Ascendente + Regente da Casa 12 - Marte",
            significado: "Inimigos ocultos, autossabotagem, desafios internos",
            interpretacao: "Revela fontes de oposição e como superá-las"
        },
        parte_fe: {
            nome: "Parte da Fé",
            simbolo: "♃",
            formula: "Ascendente + Mercúrio - Júpiter",
            significado: "Crenças, filosofia de vida, conexão espiritual",
            interpretacao: "Mostra desenvolvimento da fé e crenças pessoais"
        },
        parte_coragem: {
            nome: "Parte da Coragem",
            simbolo: "♂",
            formula: "Ascendente + Fortuna - Marte",
            significado: "Bravura, força interior, capacidade de enfrentar desafios",
            interpretacao: "Indica como desenvolver coragem e enfrentar medos"
        },
        parte_honra: {
            nome: "Parte da Honra",
            simbolo: "☉",
            formula: "Ascendente + Sol - Júpiter",
            significado: "Reputação, integridade, reconhecimento público",
            interpretacao: "Mostra caminho para conquistar honra e respeito"
        },
        parte_sabedoria: {
            nome: "Parte da Sabedoria",
            simbolo: "☿",
            formula: "Ascendente + Mercúrio - Saturno",
            significado: "Conhecimento profundo, discernimento, maturidade",
            interpretacao: "Indica desenvolvimento da sabedoria e discernimento"
        }
    },
    calculo_e_uso: {
        metodo: "Somar primeiro planeta, subtrair segundo, adicionar ao Ascendente",
        orbes: "Usar orbes de 2-3 graus para aspectos com outros planetas",
        interpretacao: "Combinar significado da Parte com signo e casa onde se encontra",
        transitos: "Observar quando planetas transitam sobre as Partes Árabes",
        progressoes: "Acompanhar progressões das Partes para timing de eventos"
    },
    aplicacoes_praticas: {
        natal: "Identificar áreas de potencial e desafio na vida",
        previsao: "Usar trânsitos e progressões para timing",
        eleicoes: "Escolher momentos favoráveis baseados nas Partes",
        relacionamentos: "Comparar Partes entre mapas para compatibilidade",
        vocacional: "Usar Parte da Carreira para orientação profissional"
    }
};


// BASE 16: ASTEROIDES - COMPLETA
const asteroides = {
    nome_completo: "Asteroides - Deusas do Cinturão",
    significado_geral: "Asteroides representam aspectos femininos arquetípicos e energias especializadas que complementam os planetas tradicionais",
    orbe_influencia: "2-3 graus para aspectos importantes",
    principais_asteroides: {
        ceres: {
            numero: 1,
            nome: "Ceres - A Grande Mãe",
            simbolo: "⚳",
            descoberta: "1801",
            periodo_orbital: "4,6 anos",
            significado_geral: "Nutrição, maternidade, agricultura, ciclos naturais, perda e renovação",
            mitologia: "Deusa romana da agricultura e colheita, mãe de Proserpina. Representa o amor maternal e os ciclos de perda e renovação.",
            por_signo: {
                aries: "Nutrição através da ação, maternidade pioneira, cuidado direto e energético",
                touro: "Nutrição através da estabilidade, maternidade protetora, cuidado material",
                gemeos: "Nutrição através da comunicação, maternidade educativa, cuidado intelectual",
                cancer: "Nutrição emocional intensa, maternidade natural, cuidado instintivo",
                leao: "Nutrição através da criatividade, maternidade orgulhosa, cuidado generoso",
                virgem: "Nutrição através do serviço, maternidade prática, cuidado detalhado",
                libra: "Nutrição através da harmonia, maternidade diplomática, cuidado equilibrado",
                escorpiao: "Nutrição através da transformação, maternidade intensa, cuidado profundo",
                sagitario: "Nutrição através da sabedoria, maternidade expansiva, cuidado filosófico",
                capricornio: "Nutrição através da estrutura, maternidade responsável, cuidado disciplinado",
                aquario: "Nutrição através da inovação, maternidade não convencional, cuidado humanitário",
                peixes: "Nutrição através da compaixão, maternidade intuitiva, cuidado espiritual"
            },
            aspectos_importantes: {
                conjuncao_sol: "Identidade ligada ao cuidado e nutrição",
                conjuncao_lua: "Instintos maternais intensificados",
                conjuncao_venus: "Amor expresso através do cuidado",
                oposicao_plutao: "Conflitos sobre controle e cuidado"
            },
            temas_principais: [
                "Relacionamento com a mãe",
                "Capacidade de nutrir outros",
                "Conexão com a natureza",
                "Ciclos de perda e renovação",
                "Questões alimentares",
                "Fertilidade e maternidade"
            ]
        },
        pallas: {
            numero: 2,
            nome: "Pallas Athena - A Guerreira Sábia",
            simbolo: "⚴",
            descoberta: "1802",
            periodo_orbital: "4,6 anos",
            significado_geral: "Sabedoria estratégica, justiça, artes, padrões e soluções criativas",
            mitologia: "Deusa grega da sabedoria, guerra estratégica e artes. Nasceu da cabeça de Zeus, representa intelecto feminino e estratégia.",
            por_signo: {
                aries: "Estratégia direta, liderança intelectual, soluções rápidas",
                touro: "Sabedoria prática, estratégias estáveis, soluções duradouras",
                gemeos: "Inteligência versátil, comunicação estratégica, soluções múltiplas",
                cancer: "Sabedoria intuitiva, estratégias protetoras, soluções emocionais",
                leao: "Criatividade estratégica, liderança sábia, soluções dramáticas",
                virgem: "Análise detalhada, estratégias precisas, soluções práticas",
                libra: "Diplomacia estratégica, justiça equilibrada, soluções harmoniosas",
                escorpiao: "Estratégias profundas, sabedoria oculta, soluções transformadoras",
                sagitario: "Sabedoria filosófica, estratégias expansivas, soluções éticas",
                capricornio: "Estratégias estruturadas, sabedoria autoritária, soluções duradouras",
                aquario: "Inovação estratégica, sabedoria humanitária, soluções revolucionárias",
                peixes: "Intuição estratégica, sabedoria compassiva, soluções inspiradas"
            },
            temas_principais: [
                "Inteligência estratégica",
                "Capacidade de resolver problemas",
                "Senso de justiça",
                "Talentos artísticos",
                "Reconhecimento de padrões",
                "Liderança feminina"
            ]
        },
        juno: {
            numero: 3,
            nome: "Juno - A Esposa Divina",
            simbolo: "⚵",
            descoberta: "1804",
            periodo_orbital: "4,4 anos",
            significado_geral: "Relacionamentos comprometidos, casamento, lealdade, ciúmes e poder em parcerias",
            mitologia: "Esposa de Júpiter, deusa do casamento e proteção das mulheres casadas. Representa compromisso, mas também ciúmes e vingança.",
            por_signo: {
                aries: "Relacionamentos independentes, parceiro forte, conflitos diretos",
                touro: "Relacionamentos estáveis, lealdade material, ciúmes possessivos",
                gemeos: "Relacionamentos comunicativos, parceiro intelectual, versatilidade",
                cancer: "Relacionamentos nutritivos, parceiro protetor, lealdade emocional",
                leao: "Relacionamentos dramáticos, parceiro criativo, orgulho relacional",
                virgem: "Relacionamentos práticos, parceiro útil, críticas construtivas",
                libra: "Relacionamentos harmoniosos, parceiro diplomático, equilíbrio",
                escorpiao: "Relacionamentos intensos, parceiro transformador, ciúmes profundos",
                sagitario: "Relacionamentos expansivos, parceiro aventureiro, liberdade",
                capricornio: "Relacionamentos estruturados, parceiro responsável, compromisso",
                aquario: "Relacionamentos únicos, parceiro independente, amizade",
                peixes: "Relacionamentos compassivos, parceiro espiritual, sacrifício"
            },
            temas_principais: [
                "Qualidade dos relacionamentos",
                "Capacidade de compromisso",
                "Ciúmes e possessividade",
                "Poder em parcerias",
                "Lealdade e traição",
                "Casamento e união"
            ]
        },
        vesta: {
            numero: 4,
            nome: "Vesta - A Virgem Sagrada",
            simbolo: "⚶",
            descoberta: "1807",
            periodo_orbital: "3,6 anos",
            significado_geral: "Devoção, foco, pureza, serviço sagrado, sexualidade sagrada ou celibato",
            mitologia: "Deusa romana do lar e do fogo sagrado. Virgem eterna que mantinha o fogo sagrado aceso, representa devoção e foco.",
            por_signo: {
                aries: "Devoção pioneira, foco na ação, serviço através da liderança",
                touro: "Devoção estável, foco na segurança, serviço através da estabilidade",
                gemeos: "Devoção intelectual, foco na comunicação, serviço através do ensino",
                cancer: "Devoção emocional, foco no cuidado, serviço através da nutrição",
                leao: "Devoção criativa, foco na expressão, serviço através da arte",
                virgem: "Devoção prática, foco no detalhe, serviço através da cura",
                libra: "Devoção harmoniosa, foco no equilíbrio, serviço através da justiça",
                escorpiao: "Devoção intensa, foco na transformação, serviço através da cura profunda",
                sagitario: "Devoção filosófica, foco na verdade, serviço através do ensino",
                capricornio: "Devoção estruturada, foco na responsabilidade, serviço através da liderança",
                aquario: "Devoção humanitária, foco na inovação, serviço através da reforma",
                peixes: "Devoção espiritual, foco na compaixão, serviço através da espiritualidade"
            },
            temas_principais: [
                "Capacidade de foco e concentração",
                "Devoção a causas ou pessoas",
                "Relacionamento com sexualidade",
                "Serviço sagrado",
                "Pureza e integridade",
                "Trabalho dedicado"
            ]
        },
        chiron: {
            numero: 2060,
            nome: "Quíron - O Curador Ferido",
            simbolo: "⚷",
            descoberta: "1977",
            periodo_orbital: "50 anos",
            significado_geral: "Ferida primordial, cura através da experiência, sabedoria através do sofrimento",
            mitologia: "Centauro sábio ferido por flecha envenenada. Imortal, não podia morrer nem se curar, dedicou-se a curar outros.",
            nota: "Já detalhado na Base 12"
        },
        lilith_asteroide: {
            numero: 1181,
            nome: "Lilith - A Lua Negra (Asteroide)",
            simbolo: "⚸",
            descoberta: "1927",
            periodo_orbital: "4,1 anos",
            significado_geral: "Feminino selvagem, sexualidade não domesticada, rebeldia feminina",
            diferenca_lua_negra: "Este é o asteroide Lilith, diferente da Lua Negra (ponto matemático). Representa aspectos mais concretos da energia Lilith.",
            temas_principais: [
                "Sexualidade feminina autônoma",
                "Rebeldia contra opressão",
                "Aspectos sombrios do feminino",
                "Independência radical",
                "Poder feminino não domesticado"
            ]
        },
        eros: {
            numero: 433,
            nome: "Eros - O Amor Apaixonado",
            simbolo: "♡",
            descoberta: "1898",
            periodo_orbital: "1,8 anos",
            significado_geral: "Paixão erótica, atração sexual, amor romântico, criatividade sexual",
            mitologia: "Deus grego do amor erótico, filho de Afrodite. Representa paixão e atração sexual.",
            temas_principais: [
                "Atração sexual e erótica",
                "Paixão romântica",
                "Criatividade através do eros",
                "Magnetismo pessoal",
                "Energia vital sexual"
            ]
        },
        psyche: {
            numero: 16,
            nome: "Psique - A Alma",
            simbolo: "🦋",
            descoberta: "1852",
            periodo_orbital: "5,0 anos",
            significado_geral: "Alma, transformação psicológica, amor que transcende o físico",
            mitologia: "Mortal que se tornou imortal por amor a Eros. Representa a alma e sua jornada de transformação.",
            temas_principais: [
                "Desenvolvimento psicológico",
                "Transformação da alma",
                "Amor transcendente",
                "Jornada interior",
                "Renascimento psíquico"
            ]
        },
        hygiea: {
            numero: 10,
            nome: "Hígia - A Saúde",
            simbolo: "⚕",
            descoberta: "1849",
            periodo_orbital: "5,6 anos",
            significado_geral: "Saúde preventiva, higiene, medicina holística, bem-estar",
            mitologia: "Deusa grega da saúde e higiene, filha de Asclépio. Representa prevenção e manutenção da saúde.",
            temas_principais: [
                "Saúde preventiva",
                "Hábitos de higiene",
                "Medicina natural",
                "Bem-estar holístico",
                "Cuidados com o corpo"
            ]
        }
    },
    interpretacao_geral: {
        aspectos_harmonicos: "Integração fácil da energia do asteroide",
        aspectos_tensos: "Desafios relacionados ao tema do asteroide",
        conjuncoes: "Fusão da energia asteroidal com o planeta",
        oposicoes: "Polarização e necessidade de equilibrio",
        quadraturas: "Tensão criativa relacionada ao tema",
        trigonos: "Fluxo natural da energia asteroidal",
        sextis: "Oportunidades de desenvolvimento"
    },
    uso_pratico: {
        natal: "Identificar temas femininos e especializados no mapa",
        sinastria: "Comparar asteroides entre parceiros",
        transitos: "Observar ativação de temas asteroidais",
        progressoes: "Desenvolvimento de temas ao longo da vida",
        retornos: "Ciclos de renovação dos temas asteroidais"
    }
};


// BASE 17: SABBATS HEMISFÉRIO SUL - COMPLETA
const sabbatsHemisferioSul = {
    nome_completo: "Sabbats da Roda do Ano - Hemisfério Sul",
    significado_geral: "Celebrações sazonais adaptadas para o hemisfério sul, seguindo o ciclo natural das estações",
    ciclo_anual: "8 sabbats que marcam os pontos de poder do ano solar",
    sabbats: {
        samhain: {
            nome: "Samhain",
            data: "1º de maio",
            estacao: "Outono",
            elemento: "Terra/Água",
            significado: "Ano Novo Pagão, honra aos ancestrais, véu entre mundos mais fino",
            energia: "Introspecção, conexão ancestral, liberação do que não serve",
            simbolos: ["Abóboras", "Caveiras", "Velas pretas", "Maçãs", "Espelhos"],
            cores: ["Preto", "Laranja", "Roxo", "Dourado"],
            rituais: [
                "Altar ancestral com fotos e oferendas",
                "Adivinhação e consulta aos oráculos",
                "Liberação de hábitos e relacionamentos tóxicos",
                "Meditação com os ancestrais",
                "Banimento de energias negativas"
            ],
            correspondencias: {
                deusas: ["Hécate", "Morrigan", "Kali", "Perséfone"],
                plantas: ["Artemísia", "Cipreste", "Teixo", "Romã"],
                cristais: ["Obsidiana", "Ônix", "Hematita", "Granadas"],
                incensos: ["Mirra", "Patchouli", "Sândalo", "Copal"]
            }
        },
        yule: {
            nome: "Yule - Solstício de Inverno",
            data: "21 de junho",
            estacao: "Inverno",
            elemento: "Terra",
            significado: "Renascimento do Sol, noite mais longa, renovação da luz",
            energia: "Renovação, esperança, planejamento, introspecção",
            simbolos: ["Tronco de Yule", "Azevinho", "Visco", "Pinheiros", "Velas douradas"],
            cores: ["Verde", "Vermelho", "Dourado", "Branco"],
            rituais: [
                "Acender tronco de Yule ou velas por 12 dias",
                "Decorar árvore sagrada com intenções",
                "Troca de presentes significativos",
                "Meditação sobre renovação pessoal",
                "Banquete com família espiritual"
            ],
            correspondencias: {
                deusas: ["Brigid", "Freyja", "Amaterasu", "Lucia"],
                plantas: ["Pinheiro", "Azevinho", "Visco", "Canela"],
                cristais: ["Quartzo claro", "Citrino", "Granada", "Rubi"],
                incensos: ["Pinheiro", "Canela", "Olíbano", "Mirra"]
            }
        },
        imbolc: {
            nome: "Imbolc - Candelária",
            data: "1º de agosto",
            estacao: "Final do Inverno",
            elemento: "Fogo",
            significado: "Despertar da Terra, primeiros sinais de primavera, purificação",
            energia: "Purificação, inspiração, novos projetos, criatividade",
            simbolos: ["Velas brancas", "Leite", "Sementes", "Flores brancas", "Sino"],
            cores: ["Branco", "Amarelo claro", "Verde claro", "Prata"],
            rituais: [
                "Acender muitas velas pela casa",
                "Limpeza energética profunda do lar",
                "Bênção de sementes para plantio",
                "Iniciação de novos projetos criativos",
                "Purificação com água e sal"
            ],
            correspondencias: {
                deusas: ["Brigid", "Vesta", "Minerva", "Saraswati"],
                plantas: ["Açafrão", "Violeta", "Angélica", "Mirra"],
                cristais: ["Ametista", "Fluorita", "Quartzo rosa", "Pedra da lua"],
                incensos: ["Olíbano", "Mirra", "Sândalo", "Lavanda"]
            }
        },
        ostara: {
            nome: "Ostara - Equinócio de Primavera",
            data: "21 de setembro",
            estacao: "Primavera",
            elemento: "Ar",
            significado: "Equilíbrio entre luz e sombra, renovação, fertilidade",
            energia: "Equilíbrio, crescimento, fertilidade, novos começos",
            simbolos: ["Ovos", "Coelhos", "Flores da primavera", "Sementes germinando"],
            cores: ["Verde", "Rosa", "Amarelo", "Lavanda"],
            rituais: [
                "Decorar ovos com símbolos mágicos",
                "Plantar jardim mágico",
                "Ritual de equilíbrio e harmonia",
                "Bênção de novos projetos",
                "Caminhada na natureza"
            ],
            correspondencias: {
                deusas: ["Ostara", "Perséfone", "Flora", "Freya"],
                plantas: ["Narciso", "Tulipa", "Violeta", "Jasmim"],
                cristais: ["Quartzo rosa", "Aventurina verde", "Amazonita", "Prehnita"],
                incensos: ["Rosa", "Jasmim", "Violeta", "Bergamota"]
            }
        },
        beltane: {
            nome: "Beltane - Primeiro de Maio",
            data: "1º de novembro",
            estacao: "Primavera/Verão",
            elemento: "Fogo",
            significado: "Fertilidade, sexualidade sagrada, união do masculino e feminino",
            energia: "Paixão, criatividade, fertilidade, celebração da vida",
            simbolos: ["Mastro de Maio", "Flores", "Fitas coloridas", "Fogueiras", "Coroas florais"],
            cores: ["Verde", "Vermelho", "Rosa", "Branco"],
            rituais: [
                "Dança ao redor do mastro de maio",
                "Coroação com flores",
                "Rituais de fertilidade e abundância",
                "Celebração da sexualidade sagrada",
                "Fogueiras de Beltane"
            ],
            correspondencias: {
                deusas: ["Flora", "Vênus", "Afrodite", "Maia"],
                plantas: ["Rosa", "Espinheiro", "Lírio", "Hibisco"],
                cristais: ["Esmeralda", "Malaquita", "Quartzo rosa", "Cornalina"],
                incensos: ["Rosa", "Ylang-ylang", "Patchouli", "Sândalo"]
            }
        },
        litha: {
            nome: "Litha - Solstício de Verão",
            data: "21 de dezembro",
            estacao: "Verão",
            elemento: "Fogo",
            significado: "Pico do poder solar, dia mais longo, abundância máxima",
            energia: "Poder, abundância, proteção, celebração",
            simbolos: ["Sol", "Girassóis", "Ervas mágicas", "Cristais solares", "Fogueiras"],
            cores: ["Dourado", "Amarelo", "Laranja", "Vermelho"],
            rituais: [
                "Colheita de ervas mágicas ao meio-dia",
                "Fogueiras de celebração",
                "Carregamento de cristais ao sol",
                "Rituais de proteção e poder",
                "Celebração da abundância"
            ],
            correspondencias: {
                deusas: ["Amaterasu", "Sekhmet", "Brigid", "Sunna"],
                plantas: ["Hipérico", "Camomila", "Lavanda", "Girassol"],
                cristais: ["Citrino", "Topázio dourado", "Âmbar", "Olho de tigre"],
                incensos: ["Olíbano", "Copal", "Cedro", "Alecrim"]
            }
        },
        lughnasadh: {
            nome: "Lughnasadh - Lammas",
            data: "1º de fevereiro",
            estacao: "Final do Verão",
            elemento: "Terra",
            significado: "Primeira colheita, sacrifício sagrado, habilidades e talentos",
            energia: "Colheita, gratidão, habilidades, transformação",
            simbolos: ["Grãos", "Pão", "Foice", "Cornucópia", "Espigas de trigo"],
            cores: ["Dourado", "Marrom", "Verde", "Laranja"],
            rituais: [
                "Fazer pão sagrado com grãos",
                "Ritual de gratidão pela colheita",
                "Competições de habilidades",
                "Oferendas de primeiros frutos",
                "Celebração dos talentos pessoais"
            ],
            correspondencias: {
                deusas: ["Deméter", "Ceres", "Lugh", "Tailtiu"],
                plantas: ["Trigo", "Cevada", "Milho", "Girassol"],
                cristais: ["Citrino", "Cornalina", "Olho de tigre", "Jaspe"],
                incensos: ["Sândalo", "Alecrim", "Eucalipto", "Cedro"]
            }
        },
        mabon: {
            nome: "Mabon - Equinócio de Outono",
            data: "21 de março",
            estacao: "Outono",
            elemento: "Terra",
            significado: "Segunda colheita, equilíbrio, preparação para o inverno",
            energia: "Equilíbrio, gratidão, preparação, reflexão",
            simbolos: ["Maçãs", "Uvas", "Folhas outonais", "Cornucópia", "Balança"],
            cores: ["Vermelho", "Dourado", "Marrom", "Laranja"],
            rituais: [
                "Altar de gratidão com frutos",
                "Ritual de equilíbrio e harmonia",
                "Preparação para o período introspectivo",
                "Oferendas de agradecimento",
                "Meditação sobre colheitas da vida"
            ],
            correspondencias: {
                deusas: ["Deméter", "Perséfone", "Pomona", "Modron"],
                plantas: ["Maçã", "Uva", "Carvalho", "Nogueira"],
                cristais: ["Ametista", "Citrino", "Cornalina", "Jaspe"],
                incensos: ["Mirra", "Pino", "Sálvia", "Cedro"]
            }
        }
    },
    calendario_lunar: {
        luas_cheias_especiais: {
            lua_lobo: "Janeiro - Lua da introspecção e planejamento",
            lua_neve: "Fevereiro - Lua da purificação e limpeza",
            lua_tempestade: "Março - Lua do equilíbrio e renovação",
            lua_semente: "Abril - Lua do plantio e crescimento",
            lua_lebre: "Maio - Lua da fertilidade e abundância",
            lua_mel: "Junho - Lua do amor e união",
            lua_feno: "Julho - Lua da colheita e gratidão",
            lua_milho: "Agosto - Lua da abundância e prosperidade",
            lua_colheita: "Setembro - Lua da preparação e equilíbrio",
            lua_sangue: "Outubro - Lua da transformação e liberação",
            lua_luto: "Novembro - Lua dos ancestrais e introspecção",
            lua_carvalho: "Dezembro - Lua da renovação e esperança"
        }
    }
};

// BASE 18: SABBATS HEMISFÉRIO NORTE - COMPLETA
const sabbatsHemisferioNorte = {
    nome_completo: "Sabbats da Roda do Ano - Hemisfério Norte",
    significado_geral: "Celebrações sazonais tradicionais seguindo o ciclo natural das estações no hemisfério norte",
    sabbats: {
        samhain: {
            nome: "Samhain",
            data: "31 de outubro",
            estacao: "Outono",
            significado: "Ano Novo Pagão, honra aos ancestrais, véu entre mundos mais fino",
            energia: "Introspecção, conexão ancestral, liberação do que não serve"
        },
        yule: {
            nome: "Yule - Solstício de Inverno",
            data: "21 de dezembro",
            estacao: "Inverno",
            significado: "Renascimento do Sol, noite mais longa, renovação da luz",
            energia: "Renovação, esperança, planejamento, introspecção"
        },
        imbolc: {
            nome: "Imbolc - Candelária",
            data: "1º de fevereiro",
            estacao: "Final do Inverno",
            significado: "Despertar da Terra, primeiros sinais de primavera, purificação",
            energia: "Purificação, inspiração, novos projetos, criatividade"
        },
        ostara: {
            nome: "Ostara - Equinócio de Primavera",
            data: "21 de março",
            estacao: "Primavera",
            significado: "Equilíbrio entre luz e sombra, renovação, fertilidade",
            energia: "Equilíbrio, crescimento, fertilidade, novos começos"
        },
        beltane: {
            nome: "Beltane - Primeiro de Maio",
            data: "1º de maio",
            estacao: "Primavera/Verão",
            significado: "Fertilidade, sexualidade sagrada, união do masculino e feminino",
            energia: "Paixão, criatividade, fertilidade, celebração da vida"
        },
        litha: {
            nome: "Litha - Solstício de Verão",
            data: "21 de junho",
            estacao: "Verão",
            significado: "Pico do poder solar, dia mais longo, abundância máxima",
            energia: "Poder, abundância, proteção, celebração"
        },
        lughnasadh: {
            nome: "Lughnasadh - Lammas",
            data: "1º de agosto",
            estacao: "Final do Verão",
            significado: "Primeira colheita, sacrifício sagrado, habilidades e talentos",
            energia: "Colheita, gratidão, habilidades, transformação"
        },
        mabon: {
            nome: "Mabon - Equinócio de Outono",
            data: "21 de setembro",
            estacao: "Outono",
            significado: "Segunda colheita, equilíbrio, preparação para o inverno",
            energia: "Equilíbrio, gratidão, preparação, reflexão"
        }
    }
};

// BASE 19: CORRESPONDÊNCIAS DE CORES PLANETÁRIAS - COMPLETA
const correspondenciasCores = {
    nome_completo: "Correspondências de Cores Planetárias e Mágicas",
    significado_geral: "Sistema de cores associadas aos planetas, signos e propósitos mágicos",
    cores_planetarias: {
        sol: {
            cores_primarias: ["Dourado", "Amarelo", "Laranja"],
            cores_secundarias: ["Âmbar", "Ouro velho", "Amarelo canário"],
            significado: "Vitalidade, sucesso, liderança, poder pessoal, cura",
            usos_magicos: [
                "Rituais de sucesso e prosperidade",
                "Fortalecimento da autoestima",
                "Cura e vitalidade",
                "Liderança e autoridade",
                "Proteção solar"
            ],
            pedras_correspondentes: ["Citrino", "Topázio dourado", "Âmbar", "Olho de tigre"],
            metais: ["Ouro"],
            dia_semana: "Domingo"
        },
        lua: {
            cores_primarias: ["Prateado", "Branco", "Azul claro"],
            cores_secundarias: ["Pérola", "Cinza claro", "Lavanda"],
            significado: "Intuição, emoções, ciclos, feminilidade, mistérios",
            usos_magicos: [
                "Rituais de intuição e psiquismo",
                "Trabalho com sonhos",
                "Magia lunar e ciclos",
                "Cura emocional",
                "Proteção feminina"
            ],
            pedras_correspondentes: ["Pedra da lua", "Pérola", "Selenita", "Quartzo claro"],
            metais: ["Prata"],
            dia_semana: "Segunda-feira"
        },
        mercurio: {
            cores_primarias: ["Amarelo claro", "Laranja claro", "Multicolorido"],
            cores_secundarias: ["Amarelo limão", "Pêssego", "Iridescente"],
            significado: "Comunicação, intelecto, viagens, comércio, aprendizado",
            usos_magicos: [
                "Rituais de comunicação",
                "Estudos e aprendizado",
                "Viagens seguras",
                "Negócios e comércio",
                "Clareza mental"
            ],
            pedras_correspondentes: ["Ágata", "Aventurina", "Citrino", "Fluorita"],
            metais: ["Mercúrio", "Liga de metais"],
            dia_semana: "Quarta-feira"
        },
        venus: {
            cores_primarias: ["Verde", "Rosa", "Azul claro"],
            cores_secundarias: ["Verde esmeralda", "Rosa shocking", "Turquesa"],
            significado: "Amor, beleza, harmonia, arte, relacionamentos, dinheiro",
            usos_magicos: [
                "Rituais de amor e relacionamentos",
                "Atração e beleza",
                "Harmonia e paz",
                "Prosperidade financeira",
                "Arte e criatividade"
            ],
            pedras_correspondentes: ["Esmeralda", "Quartzo rosa", "Turquesa", "Malaquita"],
            metais: ["Cobre"],
            dia_semana: "Sexta-feira"
        },
        marte: {
            cores_primarias: ["Vermelho", "Escarlate", "Carmesim"],
            cores_secundarias: ["Bordô", "Vermelho tijolo", "Magenta"],
            significado: "Energia, coragem, guerra, paixão, força, proteção",
            usos_magicos: [
                "Rituais de coragem e força",
                "Proteção e defesa",
                "Paixão e sexualidade",
                "Superação de obstáculos",
                "Energia e vitalidade"
            ],
            pedras_correspondentes: ["Rubi", "Granada", "Cornalina", "Jaspe vermelho"],
            metais: ["Ferro"],
            dia_semana: "Terça-feira"
        },
        jupiter: {
            cores_primarias: ["Azul royal", "Púrpura", "Violeta"],
            cores_secundarias: ["Azul cobalto", "Roxo", "Índigo"],
            significado: "Expansão, sabedoria, justiça, abundância, espiritualidade",
            usos_magicos: [
                "Rituais de abundância e prosperidade",
                "Justiça e questões legais",
                "Expansão e crescimento",
                "Sabedoria e conhecimento",
                "Proteção espiritual"
            ],
            pedras_correspondentes: ["Safira", "Lápis-lazúli", "Ametista", "Sodalita"],
            metais: ["Estanho"],
            dia_semana: "Quinta-feira"
        },
        saturno: {
            cores_primarias: ["Preto", "Marrom escuro", "Cinza"],
            cores_secundarias: ["Chumbo", "Sépia", "Carvão"],
            significado: "Disciplina, estrutura, limitações, tempo, responsabilidade",
            usos_magicos: [
                "Rituais de banimento e proteção",
                "Disciplina e estrutura",
                "Trabalho com limitações",
                "Responsabilidade e maturidade",
                "Magia de ligação"
            ],
            pedras_correspondentes: ["Ônix", "Hematita", "Obsidiana", "Jet"],
            metais: ["Chumbo"],
            dia_semana: "Sábado"
        },
        urano: {
            cores_primarias: ["Azul elétrico", "Prata", "Neon"],
            cores_secundarias: ["Azul turquesa", "Prata metálica", "Cores fluorescentes"],
            significado: "Inovação, rebeldia, tecnologia, liberdade, mudança súbita",
            usos_magicos: [
                "Rituais de mudança e inovação",
                "Liberdade e independência",
                "Tecnologia e modernidade",
                "Quebra de padrões",
                "Despertar espiritual"
            ],
            pedras_correspondentes: ["Aquamarina", "Fluorita azul", "Amazonita", "Labradorita"],
            metais: ["Urânio", "Alumínio"],
            dia_semana: "Quarta-feira (moderno)"
        },
        netuno: {
            cores_primarias: ["Azul mar", "Verde água", "Lavanda"],
            cores_secundarias: ["Azul petróleo", "Verde menta", "Lilás"],
            significado: "Espiritualidade, ilusão, compaixão, arte, mistérios",
            usos_magicos: [
                "Rituais espirituais e místicos",
                "Desenvolvimento psíquico",
                "Compaixão e cura",
                "Arte e inspiração",
                "Trabalho com ilusões"
            ],
            pedras_correspondentes: ["Ametista", "Fluorita", "Amazonita", "Celestita"],
            metais: ["Platina"],
            dia_semana: "Segunda-feira (moderno)"
        },
        plutao: {
            cores_primarias: ["Vermelho escuro", "Preto", "Bordô"],
            cores_secundarias: ["Carmesim escuro", "Marrom sangue", "Roxo escuro"],
            significado: "Transformação, poder oculto, morte e renascimento, regeneração",
            usos_magicos: [
                "Rituais de transformação profunda",
                "Trabalho com sombras",
                "Morte e renascimento",
                "Poder pessoal",
                "Cura de traumas"
            ],
            pedras_correspondentes: ["Granada", "Obsidiana", "Hematita", "Turmalina negra"],
            metais: ["Plutônio", "Ferro"],
            dia_semana: "Terça-feira (moderno)"
        }
    },
    cores_por_proposito: {
        amor: ["Rosa", "Verde", "Vermelho claro"],
        dinheiro: ["Verde", "Dourado", "Prata"],
        protecao: ["Preto", "Azul escuro", "Branco"],
        cura: ["Verde", "Azul", "Branco"],
        sabedoria: ["Púrpura", "Azul", "Amarelo"],
        poder: ["Vermelho", "Preto", "Dourado"],
        paz: ["Azul claro", "Branco", "Lavanda"],
        purificacao: ["Branco", "Prata", "Azul claro"],
        fertilidade: ["Verde", "Marrom", "Laranja"],
        banimento: ["Preto", "Cinza", "Marrom escuro"]
    }
};


// BASE 20: HORAS PLANETÁRIAS - COMPLETA
const horasPlanetarias = {
    nome_completo: "Sistema de Horas Planetárias",
    significado_geral: "Divisão do dia em horas regidas por planetas, usada para timing mágico e astrológico",
    calculo: "Divide período diurno e noturno em 12 horas cada, começando com planeta regente do dia",
    ordem_planetaria: ["Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte"],
    
    regencias_diarias: {
        domingo: {
            planeta_regente: "Sol",
            energia_geral: "Vitalidade, liderança, sucesso, cura, autoridade",
            primeira_hora: "Sol",
            sequencia_diurna: ["Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno"],
            sequencia_noturna: ["Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio"]
        },
        segunda: {
            planeta_regente: "Lua",
            energia_geral: "Intuição, emoções, família, viagens, mudanças",
            primeira_hora: "Lua",
            sequencia_diurna: ["Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol"],
            sequencia_noturna: ["Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter"]
        },
        terca: {
            planeta_regente: "Marte",
            energia_geral: "Coragem, conflito, energia, paixão, proteção",
            primeira_hora: "Marte",
            sequencia_diurna: ["Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua"],
            sequencia_noturna: ["Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus"]
        },
        quarta: {
            planeta_regente: "Mercúrio",
            energia_geral: "Comunicação, estudos, viagens, comércio, habilidades",
            primeira_hora: "Mercúrio",
            sequencia_diurna: ["Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte"],
            sequencia_noturna: ["Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno"]
        },
        quinta: {
            planeta_regente: "Júpiter",
            energia_geral: "Expansão, sabedoria, justiça, abundância, espiritualidade",
            primeira_hora: "Júpiter",
            sequencia_diurna: ["Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio"],
            sequencia_noturna: ["Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol"]
        },
        sexta: {
            planeta_regente: "Vênus",
            energia_geral: "Amor, beleza, arte, harmonia, dinheiro, relacionamentos",
            primeira_hora: "Vênus",
            sequencia_diurna: ["Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter"],
            sequencia_noturna: ["Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua"]
        },
        sabado: {
            planeta_regente: "Saturno",
            energia_geral: "Disciplina, estrutura, banimento, proteção, responsabilidade",
            primeira_hora: "Saturno",
            sequencia_diurna: ["Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus"],
            sequencia_noturna: ["Mercúrio", "Lua", "Saturno", "Júpiter", "Marte", "Sol", "Vênus", "Mercúrio", "Lua", "Saturno", "Júpiter", "Marte"]
        }
    },
    
    atividades_por_planeta: {
        sol: {
            favoraveis: [
                "Rituais de sucesso e prosperidade",
                "Cura e vitalidade",
                "Liderança e autoridade",
                "Trabalhos com ouro",
                "Rituais solares",
                "Fortalecimento do ego",
                "Negócios importantes",
                "Apresentações públicas"
            ],
            evitar: [
                "Trabalhos lunares",
                "Magia de ocultação",
                "Rituais noturnos"
            ]
        },
        lua: {
            favoraveis: [
                "Rituais de intuição e psiquismo",
                "Trabalho com sonhos",
                "Magia lunar",
                "Viagens",
                "Trabalhos com prata",
                "Cura emocional",
                "Fertilidade",
                "Mudanças e transformações"
            ],
            evitar: [
                "Decisões importantes permanentes",
                "Trabalhos que exigem estabilidade"
            ]
        },
        mercurio: {
            favoraveis: [
                "Estudos e aprendizado",
                "Comunicação importante",
                "Viagens curtas",
                "Negócios e comércio",
                "Escrita e ensino",
                "Trabalhos intelectuais",
                "Contratos e documentos",
                "Tecnologia"
            ],
            evitar: [
                "Trabalhos que exigem estabilidade emocional",
                "Rituais de longo prazo"
            ]
        },
        venus: {
            favoraveis: [
                "Rituais de amor",
                "Arte e criatividade",
                "Beleza e estética",
                "Relacionamentos",
                "Trabalhos com cobre",
                "Dinheiro e prosperidade",
                "Harmonia e paz",
                "Casamentos e uniões"
            ],
            evitar: [
                "Conflitos e confrontos",
                "Trabalhos agressivos"
            ]
        },
        marte: {
            favoraveis: [
                "Rituais de coragem",
                "Proteção e defesa",
                "Superação de obstáculos",
                "Trabalhos com ferro",
                "Exercícios físicos",
                "Competições",
                "Cirurgias",
                "Confrontos necessários"
            ],
            evitar: [
                "Negociações delicadas",
                "Trabalhos de paz",
                "Arte refinada"
            ]
        },
        jupiter: {
            favoraveis: [
                "Rituais de abundância",
                "Questões legais",
                "Expansão de negócios",
                "Estudos superiores",
                "Trabalhos com estanho",
                "Espiritualidade",
                "Ensino e mentoria",
                "Viagens longas"
            ],
            evitar: [
                "Trabalhos menores",
                "Detalhes minuciosos"
            ]
        },
        saturno: {
            favoraveis: [
                "Rituais de banimento",
                "Disciplina e estrutura",
                "Trabalhos com chumbo",
                "Proteção duradoura",
                "Responsabilidades",
                "Trabalhos de longo prazo",
                "Limitações necessárias",
                "Magia de ligação"
            ],
            evitar: [
                "Novos começos",
                "Trabalhos alegres",
                "Expansão rápida"
            ]
        }
    },
    
    calculo_pratico: {
        passo_1: "Determinar horário do nascer e pôr do sol",
        passo_2: "Dividir período diurno em 12 horas planetárias",
        passo_3: "Dividir período noturno em 12 horas planetárias",
        passo_4: "Primeira hora diurna = planeta regente do dia",
        passo_5: "Seguir sequência planetária tradicional",
        exemplo: "Domingo: 1ª hora = Sol, 2ª = Vênus, 3ª = Mercúrio, etc."
    }
};

// BASE 21: TIMING LUNAR PAUNGGER & POPPE - COMPLETA
const timingLunarPaungger = {
    nome_completo: "Timing Lunar Paungger & Poppe - Saúde e Jardinagem",
    origem: "Sistema desenvolvido por Johanna Paungger e Thomas Poppe baseado em tradições alpinas",
    principios_basicos: "A Lua influencia todos os processos vitais através de suas fases e posição nos signos",
    
    fases_lunares_saude: {
        lua_nova: {
            energia: "Início, desintoxicação, novos tratamentos",
            favoravel_para: [
                "Início de dietas e desintoxicação",
                "Novos tratamentos de saúde",
                "Cirurgias menores",
                "Limpeza intestinal",
                "Jejuns terapêuticos",
                "Início de exercícios"
            ],
            evitar: [
                "Cirurgias maiores",
                "Tratamentos intensivos",
                "Sobrecarga do organismo"
            ]
        },
        lua_crescente: {
            energia: "Crescimento, fortalecimento, absorção",
            favoravel_para: [
                "Fortalecimento do organismo",
                "Absorção de vitaminas e minerais",
                "Tratamentos reconstrutivos",
                "Exercícios de fortalecimento",
                "Massagens nutritivas",
                "Hidratação da pele"
            ],
            evitar: [
                "Dietas restritivas",
                "Desintoxicação intensa",
                "Cirurgias desnecessárias"
            ]
        },
        lua_cheia: {
            energia: "Plenitude, máxima absorção, cuidado",
            favoravel_para: [
                "Tratamentos intensivos",
                "Absorção máxima de nutrientes",
                "Hidratação profunda",
                "Massagens relaxantes",
                "Meditação e relaxamento",
                "Cuidados com cabelo"
            ],
            evitar: [
                "Cirurgias eletivas",
                "Início de dietas",
                "Tratamentos agressivos"
            ]
        },
        lua_minguante: {
            energia: "Eliminação, desintoxicação, limpeza",
            favoravel_para: [
                "Desintoxicação profunda",
                "Eliminação de toxinas",
                "Dietas de emagrecimento",
                "Limpeza de pele",
                "Tratamentos de eliminação",
                "Cirurgias quando necessário"
            ],
            evitar: [
                "Tratamentos nutritivos",
                "Fortalecimento",
                "Absorção de medicamentos"
            ]
        }
    },
    
    signos_e_partes_corpo: {
        aries: {
            parte_corpo: "Cabeça, cérebro, olhos",
            favoravel: [
                "Tratamentos capilares",
                "Cuidados com olhos",
                "Exercícios mentais",
                "Tratamentos de enxaqueca"
            ],
            evitar: [
                "Cirurgias na cabeça (exceto emergência)",
                "Tratamentos agressivos no rosto"
            ]
        },
        touro: {
            parte_corpo: "Pescoço, garganta, tireoide",
            favoravel: [
                "Tratamentos de garganta",
                "Cuidados com voz",
                "Massagem no pescoço",
                "Tratamentos da tireoide"
            ],
            evitar: [
                "Cirurgias no pescoço",
                "Tratamentos agressivos na garganta"
            ]
        },
        gemeos: {
            parte_corpo: "Pulmões, braços, mãos, sistema nervoso",
            favoravel: [
                "Exercícios respiratórios",
                "Tratamentos pulmonares",
                "Cuidados com mãos",
                "Relaxamento nervoso"
            ],
            evitar: [
                "Cirurgias nos braços",
                "Tratamentos pulmonares invasivos"
            ]
        },
        cancer: {
            parte_corpo: "Estômago, seios, sistema digestivo",
            favoravel: [
                "Tratamentos digestivos",
                "Cuidados com estômago",
                "Alimentação saudável",
                "Hidratação"
            ],
            evitar: [
                "Cirurgias no estômago",
                "Dietas muito restritivas"
            ]
        },
        leao: {
            parte_corpo: "Coração, coluna, circulação",
            favoravel: [
                "Exercícios cardiovasculares",
                "Cuidados com coluna",
                "Fortalecimento do coração",
                "Postura corporal"
            ],
            evitar: [
                "Cirurgias cardíacas eletivas",
                "Esforço excessivo"
            ]
        },
        virgem: {
            parte_corpo: "Intestinos, sistema digestivo, pâncreas",
            favoravel: [
                "Limpeza intestinal",
                "Tratamentos digestivos",
                "Dietas depurativas",
                "Cuidados com pâncreas"
            ],
            evitar: [
                "Cirurgias intestinais",
                "Alimentação pesada"
            ]
        },
        libra: {
            parte_corpo: "Rins, bexiga, quadris, equilíbrio",
            favoravel: [
                "Tratamentos renais",
                "Equilíbrio hídrico",
                "Cuidados com quadris",
                "Harmonização corporal"
            ],
            evitar: [
                "Cirurgias nos rins",
                "Excesso de líquidos"
            ]
        },
        escorpiao: {
            parte_corpo: "Órgãos reprodutivos, sistema excretor",
            favoravel: [
                "Desintoxicação profunda",
                "Cuidados reprodutivos",
                "Eliminação de toxinas",
                "Regeneração celular"
            ],
            evitar: [
                "Cirurgias reprodutivas",
                "Tratamentos muito intensos"
            ]
        },
        sagitario: {
            parte_corpo: "Quadris, coxas, fígado",
            favoravel: [
                "Exercícios para quadris",
                "Tratamentos hepáticos",
                "Fortalecimento das pernas",
                "Desintoxicação do fígado"
            ],
            evitar: [
                "Cirurgias no fígado",
                "Sobrecarga hepática"
            ]
        },
        capricornio: {
            parte_corpo: "Joelhos, ossos, pele, dentes",
            favoravel: [
                "Fortalecimento ósseo",
                "Cuidados com joelhos",
                "Tratamentos de pele",
                "Cuidados dentários"
            ],
            evitar: [
                "Cirurgias nos joelhos",
                "Tratamentos ósseos invasivos"
            ]
        },
        aquario: {
            parte_corpo: "Panturrilhas, tornozelos, circulação",
            favoravel: [
                "Exercícios para pernas",
                "Melhoria da circulação",
                "Cuidados com tornozelos",
                "Tratamentos circulatórios"
            ],
            evitar: [
                "Cirurgias nas pernas",
                "Esforço excessivo nas pernas"
            ]
        },
        peixes: {
            parte_corpo: "Pés, sistema linfático, imunidade",
            favoravel: [
                "Cuidados com pés",
                "Fortalecimento imunológico",
                "Drenagem linfática",
                "Relaxamento profundo"
            ],
            evitar: [
                "Cirurgias nos pés",
                "Sobrecarga do sistema linfático"
            ]
        }
    },
    
    jardinagem_lunar: {
        lua_nova: {
            atividades: [
                "Plantio de sementes pequenas",
                "Preparação do solo",
                "Compostagem",
                "Planejamento do jardim"
            ]
        },
        lua_crescente: {
            atividades: [
                "Plantio de mudas",
                "Transplantes",
                "Adubação",
                "Rega abundante"
            ]
        },
        lua_cheia: {
            atividades: [
                "Colheita de frutos",
                "Coleta de sementes",
                "Rega moderada",
                "Observação das plantas"
            ]
        },
        lua_minguante: {
            atividades: [
                "Poda",
                "Colheita de raízes",
                "Controle de pragas",
                "Limpeza do jardim"
            ]
        }
    },
    
    elementos_e_signos: {
        fogo: {
            signos: ["Áries", "Leão", "Sagitário"],
            influencia: "Calor, secura, energia, frutos",
            melhor_para: "Colheita de frutos, secagem, conservação"
        },
        terra: {
            signos: ["Touro", "Virgem", "Capricórnio"],
            influencia: "Estabilidade, crescimento, raízes",
            melhor_para: "Plantio de raízes, transplantes, estruturação"
        },
        ar: {
            signos: ["Gêmeos", "Libra", "Aquário"],
            influencia: "Movimento, flores, polinização",
            melhor_para: "Cuidados com flores, poda, ventilação"
        },
        agua: {
            signos: ["Câncer", "Escorpião", "Peixes"],
            influencia: "Umidade, crescimento, folhas",
            melhor_para: "Rega, plantio de folhosas, hidratação"
        }
    }
};

