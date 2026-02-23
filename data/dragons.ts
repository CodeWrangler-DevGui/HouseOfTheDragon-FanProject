// data/dragons.ts

export type Faction = 'Pretos' | 'Verdes' | 'Selvagens' | 'Outros';

export interface Dragon {
  id: string;
  name: string;
  rider: string;
  color: string;
  born: string;
  died: string;
  description: string;
  danceHistory?: string; // Campo novo para a Dança dos Dragões
  imageUrl: string;
  faction: Faction; // Propriedade nova que estava faltando!
}

export const dragonsData: Dragon[] = [
  {
    id: "balerion",
    name: "Balerion",
    rider: "Aegon I | Maegor I | Viserys I",
    color: "Negro",
    born: "c. 114 a.C. (em Valíria)",
    died: "94 d.C. (Velhice)",
    description: "**Balerion**, o **Terror Negro**, foi o maior e mais poderoso dragão que já cruzou os céus de Westeros, sendo a personificação definitiva da força destrutiva de Valíria. Com escamas **negras como a noite**, membranas das asas escuras e dentes do tamanho de espadas, ele era uma força da natureza sem paralelos. Suas chamas eram tão negras quanto seu corpo e possuíam um calor tão intenso que podiam derreter pedra e aço com facilidade. Ele foi a montaria do lendário **Aegon, o Conquistador**, servindo como o pilar central da conquista dos Sete Reinos. Diziam as lendas que sua envergadura era tão vasta que cidades inteiras mergulhavam em sombras quando ele voava acima delas, tornando-o a criatura mais temida e respeitada da história da dinastia Targaryen.",
    danceHistory: "Embora **Balerion** não tenha participado da **Dança dos Dragões**, pois morreu de velhice décadas antes do início do conflito, o seu legado foi o padrão de poder pelo qual todos os outros dragões eram medidos. Ele foi o responsável pela destruição de **Harrenhal** e pela morte do dragão **Quicksilver** em combate aéreo. Seu último montador foi o **Rei Viserys I**, mas na época o dragão já era uma fera cansada e lenta, uma sombra do gigante que um dia forjou o Trono de Ferro com seu hálito de fogo. Sua morte marcou o fim da era dos dragões originais trazidos de Valíria, e seu crânio foi preservado nas masmorras da Fortaleza Vermelha como um monumento eterno ao poder que iniciou a unificação de Westeros.",
    imageUrl: "/img/balerion.png",
    faction: "Outros"
  },
  {
    id: "vhagar", 
    name: "Vhagar", 
    rider: "Visenya Targaryen | Laena Velaryon | Aemond Targaryen", 
    color: "Bronze envelhecido",
    born: "52 a.C.", 
    died: "130 d.C. (Batalha no Olho de Deus)",
    description: "**Vhagar** foi a última das três grandes feras que participaram da Conquista de Westeros, sobrevivendo por quase duzentos anos e tornando-se, após a morte de Balerion, a maior e mais poderosa dragão viva no mundo. Com escamas cor de bronze realçadas por reflexos verde-azuis e olhos que brilhavam como esmeraldas, ela era tão imensa que o som de seu bater de asas era comparado ao trovão e seu rugido podia ser ouvido a milhas de distância. Durante sua longa vida, ela foi a montaria da Rainha **Visenya Targaryen**, de **Laena Velaryon** e, finalmente, do Príncipe **Aemond Targaryen**. Na época da guerra civil, **Vhagar**era uma veterana de centenas de batalhas, possuindo um couro tão grosso que as chamas de dragões menores mal a afetavam, tornando-a o trunfo supremo de quem a montasse.",
    danceHistory: "Na **Dança dos Dragões**, **Vhagar** foi a arma de destruição em massa dos **Verdes**, sendo responsável pelos momentos mais sombrios e decisivos do conflito. Ela iniciou as hostilidades ao abater o jovem **Arrax** na **Batalha na Baía dos Naufrágios** e teve um papel fundamental na queda de **Meleys** em Pouso das Gralhas. Sua presença nos céus era um presságio de morte, devastando as Terras do Rio sob o comando implacável de Aemond. O fim da lendária dragão ocorreu no épico **Duelo acima do Olho de Deus**, onde ela enfrentou seu único rival à altura: **Caraxes**. Em um combate que desafiou as leis da natureza, as duas feras se destruíram mutuamente, mergulhando nas águas do lago e encerrando a trajetória da última criatura que ainda guardava as memórias da Antiga Valíria.",
    imageUrl: "/img/vhagar.png",
    faction: "Verdes"
  },
  {
    id: "meraxes", 
    name: "Meraxes", 
    rider: "Rhaenys Targaryen", 
    color: "Escamas prateadas e olhos dourados",
    born: "52 a.C. (em Pedra do Dragão)", 
    died: "10 d.C. (Abatida em Dorne)",
    description: "**Meraxes** foi uma das três feras lendárias que tornaram a Conquista de Westeros possível, sendo a montaria da Rainha **Rhaenys Targaryen**. Com escamas de um tom **prateado reluzente** e **olhos dourados** que brilhavam como moedas sob o sol, ela era notavelmente maior que sua irmã Vhagar durante o período da unificação, sendo superada apenas pelo colossal Balerion. **Meraxes** era conhecida não apenas por seu poder destrutivo, mas por sua velocidade e pela conexão profunda com Rhaenys, que amava voar mais do que qualquer outro membro da família. Juntas, elas cruzaram os céus de todo o continente, participando de momentos cruciais como a **Batalha do Campo de Fogo**, onde o sopro combinado dos três dragões Targaryen destruiu exércitos inteiros e mudou o curso da história. A trajetória de **Meraxes** terminou de forma trágica e sem precedentes durante a **Primeira Guerra Dornesa**. Em um ataque ao castelo de Toca do Inferno (Hellholt), a dragão foi atingida no olho por um dardo de ferro disparado de uma arma de cerco dornesa conhecida como escorpião. O impacto foi fatal, fazendo com que a gigantesca fera despencasse do céu, destruindo parte das muralhas do castelo em sua queda e levando à morte de sua montadora, a Rainha **Rhaenys**. A perda de **Meraxes** foi o primeiro grande golpe contra a invencibilidade dos Targaryen e seus dragões, provando que, apesar de sua natureza quase divina, essas criaturas ainda eram vulneráveis ao engenho humano e ao azar, deixando um vazio que nunca foi totalmente preenchido.",
    imageUrl: "/img/meraxes.png",
    faction: "Outros"
  },
  {
    id: "quicksilver", 
    name: "Quicksilver", 
    rider: "Aenys I | Aegon, o Sem Coroa", 
    color: "Branco Prateado",
    born: "7 d.C.", 
    died: "43 d.C. (Batalha sob o Olho de Deus)",
    description: "**Quicksilver**, conhecida em português como **Mercúrio**, foi uma dragão-fêmea de aparência celestial, famosa por suas escamas de um **prata pálido** e reluzente e por soprar chamas de um branco incandescente. Ela nasceu em **Pedra do Dragão** e foi a montaria do Rei **Aenys I Targaryen**, o segundo monarca da dinastia. Diferente das feras massivas da Conquista, **Quicksilver** era celebrada por sua agilidade e graça nos céus, tornando-se um símbolo da transição da era de guerra para uma era de maior diplomacia e refinamento na corte. Após a morte de Aenys, ela encontrou seu segundo e mais trágico montador no príncipe **Aegon, o Sem Coroa,** filho mais velho do rei, que a reivindicou para tentar retomar o trono de seu tio usurpador.",
    danceHistory: "Embora não tenha vivido até a **Dança dos Dragões**, a história de **Quicksilver** é lembrada como um dos primeiros e mais dolorosos exemplos de **dragão contra dragão**. Em **43 d.C.**, durante a **Batalha sob o Olho de Deus**, o jovem Príncipe Aegon montou a dragão prateada para enfrentar o terrível Rei **Maegor, o Cruel**. O confronto foi desesperadoramente desigual: **Quicksilver**, apesar de sua bravura e velocidade, era apenas uma fração do tamanho do colossal **Balerion**, o Terror Negro. Em meio às nuvens, o gigante negro superou a agilidade da dragão prateada, arrancando uma de suas asas em pleno ar. A queda de **Quicksilver** e Aegon nas águas do lago marcou o fim trágico de uma das feras mais belas de Westeros, servindo como um aviso eterno sobre os horrores da guerra civil dentro da própria família.",
    imageUrl: "/img/quicksilver.png",
    faction: "Outros"
  },
  {
    id: "caraxes", 
    name: "Caraxes", 
    rider: "Aemon Targaryen | Daemon Targaryen", 
    color: "Vermelho Sangue",
    born: "c. 72 d.C.", 
    died: "130 d.C. (Batalha no Olho de Deus)",
    description: "**Caraxes**, apelidado de **Verme Sangrento** devido ao seu corpo excepcionalmente longo e escamas vermelhas intensas, foi uma das feras mais ágeis, ferozes e experientes da Casa Targaryen. Ele iniciou sua trajetória de combate em 72 d.C., quando foi reivindicado pelo príncipe **Aemon Targaryen**, participando de eventos históricos como a Quarta Guerra Dornesa ao lado de dragões lendários como **Vermithor** e **Vhagar**. Esse vínculo terminou de forma trágica em 92 d.C., na Ilha de Tarth, quando o príncipe Aemon foi morto por um tiro de besta enquanto o dragão se alimentava à noite. Posteriormente, ele encontrou um novo e definitivo montador no príncipe **Daemon Targaryen**, tornando-se a personificação do terror nos céus durante a Guerra pelos Degraus.",
    danceHistory: "Durante a **Dança dos Dragões**, **Caraxes** serviu como a peça central do poder militar da **Rainha Rhaenyra** e dos **Pretos**. Sua vasta experiência acumulada em décadas de batalhas reais o tornou o único dragão capaz de enfrentar inimigos muito maiores em combate direto com chances reais de vitória. Ele liderou o assalto estratégico a **Porto Real** e dominou as Terras do Rio a partir de **Harrenhal**, mantendo os inimigos em constante estado de alerta. Sua jornada culminou no lendário **Duelo acima do Olho de Deus**, onde enfrentou a colossal **Vhagar**. Em um combate mortal de agressividade inigualável, **Caraxes** prendeu suas mandíbulas no pescoço da rival enquanto caíam em direção ao lago, resultando na morte de ambas as feras e de seus montadores, marcando o fim da era dos dragões mais poderosos de Westeros.",
    imageUrl: "/img/verme-sangrento.png",
    faction: "Pretos"
  },
  {
    id: "syrax", 
    name: "Syrax", 
    rider: "Rhaenyra Targaryen", 
    color: "Amarelo",
    born: "c. 100 d.C.", 
    died: "130 d.C. (Assalto ao Fosso dos Dragões)",
    description: "**Syrax**, uma majestosa dragão-fêmea de escamas amarelas, foi a montaria fiel da Rainha **Rhaenyra Targaryen** desde a infância. Reivindicada quando a princesa tinha apenas sete anos, a dragão foi nomeada em honra a uma deusa valiriana e nunca aceitou outro cavaleiro. Durante anos de paz, ela foi conhecida por ser prolífica, deixando várias ninhadas de ovos que garantiram a linhagem de outros dragões da família.",
    danceHistory: "Na **Dança dos Dragões**, **Syrax** teve um papel simbólico e trágico. Ela transportou Rhaenyra durante a tomada de **Porto Real**, mas passou grande parte do conflito acorrentada nos estábulos da **Fortaleza Vermelha**. Seu fim ocorreu de forma brutal durante o **Assalto ao Fosso dos Dragões**. Após derrubar o jovem príncipe **Joffrey Velaryon** de seu dorso em pleno voo, **Syrax** desceu ao solo para enfrentar a multidão enfurecida. Em vez de queimar seus inimigos do alto, ela lutou com dentes e garras, sucumbindo finalmente ao ataque dos revoltosos em meio ao caos da capital.",
    imageUrl: "/img/syrax.png",
    faction: "Pretos"
  },
  {
    id: "meleys", 
    name: "Meleys", 
    rider: "Rhaenys Targaryen", 
    color: "Escarlate",
    born: "Desconhecido", 
    died: "129 d.C. (Batalha de Pouso de Gralhas)",
    description: "**Meleys**, amplamente conhecida como a **Rainha Vermelha**, foi uma das dragões mais velozes e magníficas que já cruzaram os céus de Westeros. Com suas escamas de um escarlate profundo e membranas das asas num tom rosado, ela era uma visão imponente, especialmente devido aos seus chifres e garras de cobre que reluziam intensamente sob a luz do sol. Sua montadora, a Princesa **Rhaenys Targaryen**, a Rainha que Nunca Foi, possuía uma conexão lendária com a fera, tornando a dupla uma das forças mais respeitadas e temidas entre os **Pretos**. Antes mesmo da guerra, Meleys era famosa por sua agilidade extrema, sendo capaz de superar facilmente dragões muito mais jovens em competições de velocidade.",
    danceHistory: "Na **Dança dos Dragões**, o destino de Meleys foi selado de forma heroica e trágica na **Batalha de Pouso de Gralhas**. Voando para socorrer as forças aliadas, ela acabou caindo em uma emboscada mortal preparada pelos Verdes. Meleys enfrentou simultaneamente o Rei Aegon II em seu dragão **Sunfyre** e o Príncipe Aemond na colossal **Vhagar**. Embora fosse uma combatente veterana e poderosa o suficiente para talvez derrotar Vhagar em um duelo individual, ela não foi páreo para o peso e o poder combinado dos dois oponentes. Meleys lutou com uma ferocidade sem igual até o último momento, caindo envolta em chamas nos campos de batalha e marcando uma das perdas mais devastadoras para a causa de Rhaenyra.",
    imageUrl: "/img/meleys.png",
    faction: "Pretos"
  },
  {
    id: "sunfyre", 
    name: "Sunfyre", 
    rider: "Aegon II Targaryen", 
    color: "Dourado",
    born: "Desconhecido", 
    died: "130 d.C. (Pedra do Dragão)",
    description: "**Sunfyre**, amplamente conhecido como **o Dourado**, foi considerado por muitos cronistas como o dragão mais belo que já cruzou os céus de Westeros. Suas escamas reluziam como ouro batido sob o sol, e suas membranas das asas possuíam um delicado tom de rosa pálido, enquanto suas chamas eram de um dourado brilhante e singular. Ele foi a montaria do Rei **Aegon II Targaryen**, e a conexão entre os dois era tão profunda que o dragão parecia sentir as dores e a localização de seu montador, mesmo a grandes distâncias.",
    danceHistory: "Durante a **Dança dos Dragões**, **Sunfyre** provou ser muito mais do que apenas uma criatura ornamental, demonstrando uma resiliência e ferocidade impressionantes. Na **Batalha de Pouso de Gralhas**, ele e Aegon sofreram ferimentos terríveis ao enfrentarem a Rainha Vermelha, **Meleys**. O dragão ficou com uma asa gravemente mutilada, sendo deixado para trás para se recuperar em terra firme. Contra todas as expectativas, ele sobreviveu e conseguiu voar novamente para se reunir ao seu rei na Ilha de Pedra do Dragão. Lá, mesmo ferido, ele derrotou o dragão selvagem **Grey Ghost** e, em um duelo brutal, abateu a jovem dragão **Moondancer**. No entanto, o acúmulo de ferimentos de guerra e as cicatrizes de suas vitórias finais foram exaustivos. Sunfyre faleceu em Pedra do Dragão, deixando Aegon II como um monarca desolado, marcando o fim de um dos vínculos mais resilientes entre um Targaryen e sua montaria.",
    imageUrl: "/img/sunfyre.png",
    faction: "Verdes"
  },
  {
    id: "vermax", 
    name: "Vermax", 
    rider: "Jacaerys Velaryon", 
    color: "Verde-oliva",
    born: "c. 114 d.C.", 
    died: "130 d.C. (Batalha da Goela)",
    description: "**Vermax** foi o dragão de escamas verde-oliva e membranas alaranjadas montado pelo Príncipe **Jacaerys Velaryon**, o filho primogênito da Rainha Rhaenyra. Ele nasceu de um ovo que foi colocado no berço de Jacaerys para provar a legitimidade do príncipe como um Targaryen, crescendo forte e ágil conforme seu montador atingia a maturidade. **Vermax** era conhecido por ser uma criatura de temperamento instável e territorial, mas possuía uma conexão profunda com Jacaerys, acompanhando-o em missões diplomáticas vitais que cruzaram os céus de Westeros, do Vale até o Norte, onde dizem que o dragão se recusava a pousar em solo coberto por neve.",
    danceHistory: "Na **Dança dos Dragões, Vermax** serviu como o principal mensageiro e guerreiro aéreo dos **Pretos** no início do conflito. Sua maior e última prova de fogo ocorreu na sangrenta **Batalha da Goela**, um dos combates navais mais brutais da história. Durante o ataque à frota da Triarquia, **Vermax** voou baixo demais sobre as águas, possivelmente devido a um ferimento causado por um dardo de escorpião ou por ter se enroscado nos mastros e cordagens dos navios inimigos. O dragão mergulhou violentamente no mar, levando consigo o Príncipe Jacaerys para a morte, marcando uma das perdas mais dolorosas para a causa de sua mãe.",
    imageUrl: "/img/vermax.png",
    faction: "Pretos"
  },
  {
    id: "arrax", 
    name: "Arrax", 
    rider: "Lucerys Velaryon", 
    color: "Branco-perolado",
    born: "c. 115 d.C.", 
    died: "129 d.C. (Batalha na Baía dos Naufrágios)",
    description: "**Arrax** foi um jovem dragão de escamas branco-peroladas e membranas das asas em tons de dourado e prateado, sendo a montaria do Príncipe **Lucerys Velaryon**, o segundo filho da Rainha Rhaenyra. Ele nasceu de um ovo colocado no berço de Lucerys, crescendo ao lado de seu montador e tornando-se uma criatura ágil e veloz, embora ainda fosse pequeno e jovem quando a guerra começou. **Arrax** era conhecido por sua beleza reluzente, mas sua juventude significava que ele nunca havia enfrentado o terror de um combate real ou o poder de dragões veteranos.",
    danceHistory: "Na **Dança dos Dragões**, **Arrax** protagonizou o momento que deu início definitivo às hostilidades sangrentas do conflito na **Batalha na Baía dos Naufrágios**. Em uma missão diplomática a Ponta Tempestade, o Príncipe **Lucerys** encontrou seu tio, **Aemond Targaryen**, e a gigantesca **Vhagar**. Ao tentar retornar para Pedra do Dragão em meio a uma tempestade furiosa, **Arrax** e Lucerys foram perseguidos pela imensa dragão veterana. Apesar de sua agilidade superior, o jovem dragão foi superado pelo tamanho e poder esmagador de **Vhagar**, sendo abatido e morto em pleno ar. A queda de **Arrax** nas águas revoltas da baía marcou o primeiro derramamento de sangue real na guerra, mudando o destino de Westeros para sempre.",
    imageUrl: "/img/arrax.png",
    faction: "Pretos"
  },
  {
    id: "dreamfyre", 
    name: "Dreamfyre", 
    rider: "Helaena Targaryen", 
    color: "Azul-pálido e Prata",
    born: "c. 32 d.C.", 
    died: "130 d.C. (Assalto ao Fosso)",
    description: "**Dreamfyre** foi uma dragão-fêmea de beleza extraordinária, conhecida pelas suas escamas de um azul-pálido celestial e detalhes em prateado que brilhavam intensamente sob a luz do sol. Ela foi originalmente a montaria da Princesa **Rhaena Targaryen** e, décadas depois, tornou-se a companheira fiel da Rainha **Helaena Targaryen**. **Dreamfyre** era famosa por ser uma das dragões mais prolíficas da história, sendo a origem de várias ninhadas de ovos que deram continuidade à linhagem dos dragões da Casa Targaryen. Embora fosse uma fera de grande porte e idade considerável na época da guerra, ela possuía um temperamento mais calmo e gracioso do que muitos dos seus parentes contemporâneos.",
    danceHistory: "Na **Dança dos Dragões**, o papel de **Dreamfyre** foi marcado pela tragédia e pelo isolamento. Enquanto a sua montadora, **Helaena**, definhava em luto e tristeza em Porto Real, a dragão permaneceu acorrentada nas profundezas do **Fosso dos Dragões**. O seu fim ocorreu durante o terrível **Assalto ao Fosso dos Dragões**, quando uma multidão enfurecida invadiu o local. Numa tentativa desesperada de se libertar das correntes que a prendiam ao chão, **Dreamfyre** conseguiu alçar voo dentro da estrutura, chocando-se violentamente contra a grande cúpula de pedra. O impacto causou o desabamento total do teto, matando a dragão e milhares de revoltosos sob toneladas de escombros, encerrando a sua história de forma devastadora.",
    imageUrl: "/img/dreamfyre.png",
    faction: "Verdes"
  },
  {
    id: "vermithor", 
    name: "Vermithor", 
    rider: "Jaehaerys I | Hugh Hammer", 
    color: "Bronze",
    born: "c. 30 d.C.", 
    died: "130 d.C. (Segunda Batalha de Tumbleton)",
    description: "**Vermithor**, conhecido amplamente como a **Ira de Bronze**, foi um dos maiores e mais poderosos dragões que já existiram, perdendo em tamanho apenas para a gigantesca **Vhagar** durante o período da guerra civil. Com suas escamas cor de bronze e membranas das asas em um tom castanho profundo, ele foi a montaria majestosa do Velho Rei **Jaehaerys I**durante décadas de paz e prosperidade em Westeros. Após a morte do rei, **Vermithor** permaneceu sem montador nas cavernas de Pedra do Dragão por quase trinta anos, tornando-se uma criatura solitária e territorial até ser reivindicado por **Hugh Hammer** durante a semeadura de dragões.",
    danceHistory: "Na **Dança dos Dragões**, **Vermithor** provou ser uma força da natureza devastadora. Ele lutou inicialmente pela causa dos **Pretos**, mas o curso de sua história mudou drasticamente com a traição de **Hugh Hammer**, que passou para o lado dos **Verdes**. O dragão encontrou seu fim na sangrenta **Segunda Batalha de Tumbleton**, em um dos combates aéreos mais brutais do conflito. Em um confronto caótico contra os dragões **Seasmoke** e **Tessarion**, **Vermithor** demonstrou uma resistência lendária, lutando ferozmente contra dois oponentes simultâneos antes de sucumbir aos ferimentos, deixando um rastro de destruição que marcou o fim de uma era.",
    imageUrl: "/img/vermithor.png",
    faction: "Pretos"
  },
  {
    id: "canibal", 
    name: "Canibal", 
    rider: "Nenhum (Selvagem)", 
    color: "Negro como carvão",
    born: "Desconhecido (Lendas dizem antes de 114 a.C.)", 
    died: "Desconhecido (Sobreviveu à Dança)",
    description: "**Canibal** foi o maior e mais antigo dos três dragões selvagens que habitavam Pedra do Dragão, sendo uma criatura envolta em lendas e terror absoluto. Com escamas **negras como carvão** e olhos de um **verde-limão** brilhante e ameaçador, ele era facilmente reconhecível e evitado por todos que ousavam se aproximar do Monte Dragão. Seu nome derivava de seu hábito macabro de se alimentar de outros dragões, especialmente de carcaças, filhotes recém-nascidos e ovos roubados dos ninhos, o que o tornava uma anomalia temida até pelos seus próprios semelhantes. Algumas histórias contadas pelos plebeus da ilha sugeriam que o **Canibal** já vivia ali antes mesmo da chegada dos Targaryen, o que, se fosse verdade, faria dele uma fera ainda mais antiga que o lendário Balerion.",
    danceHistory: "Durante a **Dança dos Dragões**, o **Canibal** permaneceu completamente indomável e hostil a qualquer tentativa de aproximação humana. Enquanto outros dragões selvagens foram eventualmente montados, o **Canibal** massacrou todos os candidatos a montadores que tentaram reivindicá-lo, deixando seu covil repleto de ossos daqueles que falharam. Sua presença era um lembrete constante da natureza selvagem e incontrolável dessas feras, agindo como um predador neutro que não servia nem aos **Pretos** nem aos **Verdes**. Ele foi um dos raros sobreviventes da guerra civil e, após o fim dos combates, desapareceu misteriosamente de Pedra do Dragão, tornando-se uma sombra eterna na história da dinastia Targaryen.",
    imageUrl: "/img/canibal.png",
    faction: "Selvagens"
  },
  {
    id: "moondancer", 
    name: "Moondancer", 
    rider: "Baela Targaryen", 
    color: "Verde-pálido",
    born: "c. 116 d.C.", 
    died: "130 d.C. (Queda de Pedra do Dragão)",
    description: "**Moondancer**, conhecida por sua agilidade excepcional e velocidade nos céus, foi a montaria da Princesa **Baela Targaryen**, filha de **Daemon** e **Laena**. Ela era uma dragão-fêmea jovem e esguia, descrita com escamas de um **verde-pálido** radiante e cristas de um branco perolado que lhe conferiam uma aparência única e graciosa. Devido ao seu tamanho reduzido e corpo atlético, **Moondancer** era muito mais rápida do que dragões veteranos, o que a tornava uma batedora perfeita para os Pretos durante os estágios iniciais do conflito.",
    danceHistory: "Na **Dança dos Dragões**, o destino de **Moondancer** cruzou-se com o do **Rei Aegon II** em um dos confrontos mais viscerais da guerra em **Pedra do Dragão**. Quando o rei tentou tomar a ilha montado no já ferido **Sunfyre**, Baela não hesitou em erguer voo para enfrentá-los. Mesmo sendo consideravelmente menor, **Moondancer** usou sua rapidez para desferir ataques rápidos, mas acabou sendo atingida por um jato de chamas que a cegou parcialmente. As duas feras se entrelaçaram e caíram violentamente no pátio do castelo. O impacto da queda e o peso esmagador de **Sunfyre** foram fatais para a jovem dragão, que morreu lutando bravamente para proteger o lar de sua família, marcando o fim de uma das montarias mais valentes da nova geração.",
    imageUrl: "/img/moondancer.png",
    faction: "Pretos"
  },
  {
    id: "seasmoke", 
    name: "Seasmoke", 
    rider: "Laenor Velaryon | Addam de Casco", 
    color: "Cinza-prateado",
    born: "Desconhecido", 
    died: "130 d.C. (Segunda Batalha de Tumbleton)",
    description: "**Seasmoke** foi um dragão de tamanho médio e escamas de um cinza-prateado pálido, sendo a montaria original de **Laenor Velaryon**. Ele era considerado uma fera ágil e orgulhosa, vivendo grande parte de sua vida na ilha de Derivamarca. Após o desaparecimento de seu primeiro montador, **Seasmoke** permaneceu sem cavaleiro por uma década, recusando novos pretendentes e tornando-se uma criatura solitária que guardava as praias de sua ilha. Sua sorte mudou durante a semeadura de dragões, quando ele aceitou o jovem **Addam de Casco** como seu novo montador, retornando aos céus como uma força vital para a causa de **Rhaenyra**.",
    danceHistory: "Na **Dança dos Dragões**, **Seasmoke** desempenhou um papel heroico e trágico em nome dos **Pretos**. Ele foi fundamental na defesa da frota e na proteção dos interesses de sua rainha, mas sua verdadeira lenda foi escrita na **Segunda Batalha de Tumbleton**. Em um dos momentos mais desesperadores da guerra, **Addam de Casco** lançou seu dragão em um ataque surpresa para provar sua lealdade. Mesmo sendo menor, **Seasmoke** enfrentou o massivo **Vermithor** e a ágil **Tessarion** em um combate triplo e caótico. Ele lutou com bravura inigualável até o fim, caindo em combate enquanto tentava deter a Ira de Bronze, selando seu destino como um dos dragões mais leais de Westeros.",
    imageUrl: "/img/seasmoke.png",
    faction: "Pretos"
  },
  {
    id: "sheepstealer", 
    name: "Sheepstealer", 
    rider: "Urtiga (Nettles)", 
    color: "Marrom-lama",
    born: "c. 34 d.C.", 
    died: "Desconhecido (Sobreviveu à Dança)",
    description: "**Sheepstealer**, conhecido em português como **Ladrão de Ovelhas**, foi um dos três dragões selvagens que habitavam as cavernas do **Monte Dragão em Pedra do Dragão**. Com escamas de um tom **marrom-lama** e um corpo visivelmente magro e esguio, ele era uma criatura de temperamento difícil e hábitos muito específicos. Seu nome foi dado pelos habitantes da ilha devido ao seu apetite voraz por carne ovina, sendo responsável pelo desaparecimento de rebanhos inteiros ao longo de décadas. Ao contrário de outros dragões que aceitavam apenas montadores de sangue nobre, ele foi o único dragão selvagem a ser domado através da persistência e do suborno, quando a jovem **Urtiga** conquistou sua confiança entregando-lhe uma ovelha abatida todas as manhãs até que a fera permitisse sua montaria.",
    danceHistory: "Durante a **Dança dos Dragões**, **Sheepstealer** lutou bravamente pela causa dos **Pretos** após ser integrado ao exército de Rhaenyra. Ele teve uma participação fundamental na **Batalha da Goela**, onde usou sua agilidade para incinerar as frotas inimigas. No entanto, o destino do dragão mudou quando a Rainha Rhaenyra, tomada pela paranoia, ordenou a morte de **Urtiga**. O príncipe Daemon Targaryen interveio e permitiu que a jovem e sua montaria escapassem antes que a ordem fosse cumprida. **Sheepstealer** foi visto pela última vez voando em direção às Montanhas da Lua no **Vale de Arryn**, onde se tornou uma lenda viva, vivendo em cavernas remotas e sendo adorado como um deus por clãs das montanhas, sobrevivendo muito além do fim da guerra civil.",
    imageUrl: "/img/sheepstealer.png",
    faction: "Pretos"
  },
  {
    id: "silverwing", 
    name: "Silverwing", 
    rider: "Alysanne Targaryen | Ulf o Branco", 
    color: "Prateado",
    born: "c. 36 d.C.", 
    died: "Desconhecido (Sobreviveu à Dança)",
    description: "**Silverwing**, conhecida em português como **Asaprata**, foi uma das dragões mais elegantes e dóceis que já voaram pelos céus de Westeros. Com escamas de um prata brilhante e reluzente, ela foi a montaria da amada Rainha **Alysanne Targaryen** por décadas, acompanhando o Velho Rei Jaehaerys e seu dragão **Vermithor** em inúmeras viagens pelo reino, incluindo a famosa visita à Muralha. A conexão entre **Silverwing** e **Vermithor** era tão profunda que os dois dragões eram frequentemente vistos voando e descansando juntos, tornando-se um símbolo da era de ouro da **dinastia Targaryen**. Após a morte de **Alysanne**, a dragão permaneceu solitária em **Pedra do Dragão** por muitos anos, até o início da guerra civil.",
    danceHistory: "Na **Dança dos Dragões**, **Silverwing** foi finalmente reivindicada por um homem de origem humilde chamado **Ulf, o Branco**, durante a semeadura de dragões. Ela lutou inicialmente pela causa dos Pretos na sangrenta **Batalha da Goela**, mas sua história tomou um rumo sombrio quando **Ulf** traiu a Rainha Rhaenyra na **Primeira Batalha de Tumbleton**, passando para o lado dos **Verdes**. Após a morte de seu montador e de seu antigo companheiro **Vermithor** na segunda batalha no mesmo local, **Silverwing** recusou-se a aceitar novos cavaleiros. Ela foi uma das poucas sobreviventes do conflito, voando para o noroeste e estabelecendo seu covil em uma ilha no **Lago Vermelho**, onde viveu de forma selvagem e solitária até o fim de seus dias, sendo um dos últimos vestígios da grandeza da era de Jaehaerys.",
    imageUrl: "/img/silverwing.png",
    faction: "Pretos"
  },
  {
    id: "tessarion", 
    name: "Tessarion", 
    rider: "Daeron Targaryen", 
    color: "Azul e Cobre",
    born: "Desconhecido", 
    died: "130 d.C. (Segunda Batalha de Tumbleton)",
    description: "**Tessarion**, carinhosamente apelidada de a **Rainha Azul**, foi uma das dragões mais belas e graciosas a participar da guerra civil. Suas escamas eram de um azul cobalto profundo, enquanto as membranas de suas asas, suas cristas e suas garras reluziam como cobre polido. Suas chamas também possuíam uma coloração azulada, tornando-a uma visão magnífica e distinta nos céus. Ela foi a montaria do príncipe **Daeron Targaryen**, o mais jovem dos filhos de Viserys I e Alicent Hightower, e a conexão entre os dois era descrita como harmoniosa e nobre, refletindo a natureza cavalheiresca de seu montador.",
    danceHistory: "Na **Dança dos Dragões**, **Tessarion** foi a arma mais poderosa das forças dos **Verdes** que avançavam pelo sul. Sua entrada na **Batalha do Vinhomel** foi decisiva, onde ela surgiu para salvar o exército de Lorde Ormund Hightower e garantir a vitória para sua facção. Durante a campanha, ela provou ser uma fera de combate formidável e ágil. Seu fim ocorreu na trágica **Segunda Batalha de Tumbleton**, em um confronto caótico e sangrento contra os dragões **Seasmoke** e **Vermithor**. Após uma luta feroz em que todos os envolvidos foram gravemente feridos, **Tessarion** permaneceu agonizando no campo de batalha por horas. Em um ato de misericórdia, ela foi finalmente morta por flechas disparadas por arqueiros a mando de Lorde Benjicot Blackwood, encerrando a trajetória da Rainha Azul.",
    imageUrl: "/img/tessarion.png",
    faction: "Verdes"
  },
  {
    id: "grey-ghost", 
    name: "Grey Ghost", 
    rider: "Nenhum (Selvagem)", 
    color: "Cinza-claro",
    born: "Desconhecido", 
    died: "130 d.C. (Pedra do Dragão)",
    description: "**Grey Ghost**, conhecido amplamente como **Fantasma Cinzento**, foi um dos três dragões selvagens que habitavam as cavernas do Monte Dragão. Ele recebeu esse nome devido à sua coloração cinza-clara, semelhante à névoa matinal, que o tornava quase invisível quando voava sobre o mar em dias nublados. Ao contrário do **Canibal** ou do **Sheepstealer**, o **Fantasma Cinzento** era uma criatura extremamente tímida e evitava qualquer contato com seres humanos, preferindo se alimentar de peixes que capturava nas águas próximas à ilha. Por ser tão arredio, ele nunca aceitou um montador, permanecendo como um espírito esquivo que raramente era avistado pelos habitantes de Pedra do Dragão.",
    danceHistory: "Durante a **Dança dos Dragões**, o destino de **Fantasma Cinzento** foi selado de forma trágica ao cruzar o caminho de uma fera muito mais agressiva. Enquanto os Sementes de Dragão tentavam reivindicar montarias, o dragão cinzento continuou a se esconder nas fendas da montanha até o retorno secreto de **Sunfyre** à ilha. O dragão do **Rei Aegon II**, mesmo ferido e debilitado, encontrou o dragão selvagem e, em um combate brutal por território, acabou matando-o. Os restos mortais carbonizados de **Fantasma Cinzento** foram encontrados mais tarde no sopé da montanha, inicialmente levando os **Pretos** a acreditarem que o **Canibal** havia cometido o ataque, ocultando por um tempo a presença do rei inimigo em sua própria base.",
    imageUrl: "/img/grey-ghost.png",
    faction: "Selvagens"
  },
  {
    id: "morning", 
    name: "Morning", 
    rider: "Rhaena Targaryen", 
    color: "Rosa e Negro",
    born: "130 d.C.", 
    died: "Desconhecido (Sobreviveu à Dança)",
    description: "**Manhã**, conhecida originalmente como **Morning**, foi uma das poucas dragões a nascer durante o período devastador da **Dança dos Dragões**, tornando-se um símbolo de renovação e esperança para a **Casa Targaryen**. Ela possuía uma aparência distinta e belíssima, com escamas de um **rosa pálido** e chifres e cristas de um negro profundo que contrastavam com seu corpo delicado. Sua montadora era a princesa **Rhaena Targaryen**, que finalmente realizou o sonho de se tornar uma cavaleira de dragão após o nascimento de **Manhã** em solo do Vale de Arryn. Por ter nascido no final do conflito, ela era pequena demais para ser usada em batalha, o que ironicamente garantiu sua sobrevivência enquanto as feras mais velhas e poderosas se destruíam mutuamente. Após o fim da guerra civil, a presença de **Manhã** em Porto Real trouxe um breve momento de fascínio para a corte do Rei Aegon III. Ela era frequentemente vista voando sobre a Fortaleza Vermelha, lembrando ao povo que, apesar da devastação, o fogo dos dragões ainda não havia se apagado completamente. Como uma das poucas sobreviventes da era dourada, sua existência foi um testemunho da resiliência de sua linhagem, permanecendo ao lado de **Rhaena** durante os primeiros anos de reconstrução do reino, sendo uma das últimas grandes criaturas de sua espécie a cruzar os céus antes da extinção temporária dos dragões.",
    danceHistory: "Na **Dança dos Dragões**, o nascimento de **Manhã** foi um dos eventos mais comentados e politicamente impactantes do estágio final da guerra. Enquanto o **Rei Aegon II** acreditava ter vencido a **guerra dos dragões** após a morte de quase todas as feras de Rhaenyra, a notícia de que um novo dragão havia eclodido no Vale de Arryn sob os cuidados da Princesa **Rhaena Targaryen** causou frustração e temor entre os **Verdes**. Embora fosse apenas um filhote pequeno demais para carregar um cavaleiro ou lançar chamas em batalha, sua existência serviu como uma poderosa peça de propaganda para os **Pretos**, provando que a linhagem dos dragões ainda não havia sido extinta e que o direito de Rhaenyra ao trono ainda era abençoado pelas feras de Valíria. **Manhã** passou os últimos meses da guerra sendo protegida nas montanhas, tornando-se uma esperança viva que sobreviveu ao caos que consumiu seus parentes mais velhos.",
    imageUrl: "/img/morning.png",
    faction: "Pretos"
  },
  {
    id: "tyraxes", 
    name: "Tyraxes", 
    rider: "Joffrey Velaryon", 
    color: "Desconhecida",
    born: "c. 117 d.C.", 
    died: "130 d.C. (Assalto ao Fosso)",
    description: "**Tyraxes** foi o dragão montado pelo Príncipe **Joffrey Velaryon**, o terceiro filho da **Rainha Rhaenyra**. Embora fosse mais jovem e consideravelmente menor do que os dragões de seus irmãos mais velhos, **Vermax** e **Arrax**, ele era uma fera ágil e perfeitamente capaz de carregar seu montador por longas distâncias. Durante os primeiros anos de sua vida, **Tyraxes** acompanhou a corte em suas viagens e era visto como um símbolo da continuidade da linhagem dos dragões dos **Pretos**. Ele era mantido sob vigilância constante, crescendo em tamanho e força enquanto a tensão política em Westeros se transformava em guerra aberta.",
    danceHistory: "Na **Dança dos Dragões**, o destino de **Tyraxes** foi marcado pelo confinamento e por um fim brutal em **Porto Real**. Durante a ocupação da capital pela Rainha Rhaenyra, o dragão foi mantido acorrentado dentro do **Fosso dos Dragões**, longe do campo de batalha. Sua participação no conflito terminou de forma trágica durante o **Assalto ao Fosso dos Dragões**, quando uma multidão enfurecida invadiu o local. **Tyraxes** recuou para as profundezas de seu covil e usou suas chamas para incinerar centenas de revoltosos que tentavam entrar, transformando o túnel em um forno mortal. No entanto, ele acabou sendo sobrepujado pelo número esmagador de atacantes e foi morto dentro da própria toca, incapaz de voar para a liberdade.",
    imageUrl: "/img/tyraxes.png",
    faction: "Pretos"
  },
  {
    id: "stormcloud", 
    name: "Stormcloud", 
    rider: "Aegon III Targaryen", 
    color: "Cinza-azulado",
    born: "c. 120 d.C.", 
    died: "130 d.C. (Batalha da Goela)",
    description: "**Stormcloud**, conhecido em português como **Nuvem de Tempestade**, foi um dragão jovem de escamas cinzentas e porte elegante, montado pelo príncipe **Aegon, o Jovem** (que mais tarde seria coroado como Aegon III). Ele nunca havia sido montado em batalha ou levado um cavaleiro antes dos eventos da guerra civil, sendo mantido principalmente como uma promessa de poder para o jovem príncipe. Sua natureza era descrita como dócil para com seu mestre, mas ele demonstrou uma resistência e bravura inesperadas quando a vida de seu montador foi colocada em perigo extremo.",
    danceHistory: "Na **Dança dos Dragões**, o papel de **Stormcloud** foi breve, porém heroico e determinante para o futuro da dinastia. Durante a terrível **Batalha da Goela**, o navio que transportava os filhos de Rhaenyra foi interceptado pela frota da Triarquia. Em um ato de bravura desesperada, o pequeno Aegon montou em **Stormcloud** pela primeira vez para escapar da captura e da morte certa. O dragão voou através de uma chuva implacável de flechas e dardos de escorpião para levar seu mestre em segurança até Pedra do Dragão. Embora tenha cumprido sua missão e salvado a vida do príncipe, Stormcloud foi mortalmente ferido durante a fuga, vindo a falecer pouco depois de pousar no pátio do castelo. Sua morte deixou uma marca profunda e traumática em **Aegon III**, sendo um dos principais motivos para a melancolia e a aversão que o rei sentiria por todos os dragões durante o seu reinado.",
    imageUrl: "/img/stormcloud.png",
    faction: "Pretos"
  },
];