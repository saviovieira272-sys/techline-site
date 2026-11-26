// Gera as páginas de serviço (SEO local) e o sitemap.
// Uso: node _ferramentas/gerar-paginas.js   (rodar na pasta do site)
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const SITE = 'https://techline-site.vercel.app';
const WA = '5537998400037';
const HOJE = new Date().toISOString().slice(0, 10);
const ADDR = 'Rua Furnas, 310, Jardim Alvorada, Formiga - MG, 35572-100';
const wa = t => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/* ======================= CONTEÚDO DAS PÁGINAS (EDITE AQUI) ======================= */
const PAGES = [
{
  slug: 'loja-de-informatica-formiga-mg',
  menu: 'Loja de informática',
  title: 'Loja de Informática em Formiga MG | TechLine Assistência Técnica',
  desc: 'Loja de informática e assistência técnica em Formiga, MG: conserto de computador, notebook, celular e videogame, formatação, SSD e suporte remoto. Orçamento antes do serviço.',
  h1: 'Loja de informática e assistência técnica em <span class="grad">Formiga, MG</span>',
  lead: 'A TechLine fica na Rua Furnas, 310, no Jardim Alvorada, e cuida de computadores, notebooks, celulares e videogames. Você recebe o preço antes de qualquer serviço e tem garantia de 30 dias em serviços selecionados.',
  chips: ['Formatação a partir de <b>R$ 100</b>', 'Suporte remoto <b>R$ 45</b>', 'Visita técnica <b>R$ 50</b>', 'Seg a sex, 9h às 18h'],
  msg: 'Olá! Encontrei a TechLine no Google e quero um orçamento.',
  service: 'Assistência técnica de informática',
  sections: [
    ['O que fazemos', `<p>Somos uma assistência técnica de informática em Formiga com atendimento na loja, em casa ou na empresa e também por acesso remoto. Os serviços mais procurados são:</p>
      <ul class="check"><li><a href="/formatacao-de-computador-formiga-mg">Formatação de computador e notebook</a>, com ou sem backup</li><li><a href="/conserto-de-notebook-formiga-mg">Conserto de notebook</a> e de computador de mesa</li><li><a href="/upgrade-ssd-formiga-mg">Troca de HD por SSD</a> e upgrade de memória RAM</li><li><a href="/conserto-de-celular-formiga-mg">Conserto de celular</a>: tela, bateria e carregamento</li><li><a href="/manutencao-de-videogame-formiga-mg">Manutenção de videogame</a> e conserto de controle</li><li><a href="/montagem-de-pc-gamer-formiga-mg">Montagem de PC gamer</a> e consultoria de compra</li><li><a href="/suporte-tecnico-remoto">Suporte técnico remoto</a> para Formiga e região</li></ul>`],
    ['Por que escolher a TechLine', `<div class="grid2"><div class="card"><h3>Preço antes de começar</h3><p>Você aprova o valor antes de qualquer serviço. Sem surpresa no final.</p></div><div class="card"><h3>Garantia</h3><p>Garantia de 30 dias em serviços selecionados.</p></div><div class="card"><h3>Atendimento perto de você</h3><p>Loja no Jardim Alvorada, visita técnica em Formiga e suporte remoto para a região.</p></div><div class="card"><h3>Resposta rápida</h3><p>Orçamento pelo WhatsApp, de segunda a sexta, das 9h às 18h.</p></div></div>`],
    ['Tabela de preços', 'TABELA']
  ],
  faq: [
    ['Onde fica a loja de informática TechLine em Formiga?', 'Na Rua Furnas, 310, Jardim Alvorada, Formiga - MG, CEP 35572-100. Também atendemos em casa, na empresa e por acesso remoto.'],
    ['Qual o horário de atendimento?', 'De segunda a sexta, das 9h às 18h. Mensagens fora do horário são respondidas no próximo dia útil.'],
    ['Vocês vendem peças?', 'Indicamos e instalamos peças como SSD, memória RAM e componentes para montagem de PC. Fale com a gente pelo WhatsApp para orçamento.'],
    ['Quais as formas de pagamento?', 'Pix, transferência e dinheiro.']
  ]
},
{
  slug: 'formatacao-de-computador-formiga-mg',
  menu: 'Formatação',
  title: 'Formatação de Computador e Notebook em Formiga MG | TechLine',
  desc: 'Formatação de computador e notebook em Formiga, MG a partir de R$ 100. Com backup por R$ 110 ou pacote completo com remoção de vírus por R$ 150. Orçamento pelo WhatsApp.',
  h1: 'Formatação de computador e notebook em <span class="grad">Formiga, MG</span>',
  lead: 'Seu computador está lento, travando ou cheio de propaganda? A formatação deixa o Windows limpo, com todos os drivers instalados e, se você quiser, com seus arquivos salvos.',
  chips: ['Sem backup <b>R$ 100</b>', 'Com backup <b>R$ 110</b>', 'Pacote completo <b>R$ 150</b>', 'Normalmente de 1 a 3 horas'],
  msg: 'Olá! Quero um orçamento de formatação.',
  service: 'Formatação de computador',
  sections: [
    ['Quando formatar o computador', `<ul class="check"><li>O computador demora muito para ligar ou abrir programas</li><li>Aparecem propagandas, janelas estranhas ou suspeita de vírus</li><li>O Windows mostra erros ou trava com frequência</li><li>Você vai vender, doar ou passar o computador para outra pessoa</li></ul><p>Se o computador ainda usa HD, vale conhecer também o <a href="/upgrade-ssd-formiga-mg">upgrade para SSD</a>: junto com a formatação, é o que mais acelera um PC antigo.</p>`],
    ['O que está incluso', `<div class="grid2"><div class="card"><h3>Formatação sem backup</h3><div class="price">R$ 100</div><p>Instalação limpa do sistema, todos os drivers e checagem básica de hardware.</p></div><div class="card"><h3>Formatação com backup</h3><div class="price">R$ 110</div><p>Tudo da formatação simples e seus arquivos (fotos, documentos) salvos e devolvidos.</p></div><div class="card"><h3>Pacote completo</h3><div class="price">R$ 150</div><p>Formatação com backup, remoção de vírus e otimização de desempenho.</p></div><div class="card"><h3>Visita técnica</h3><div class="price">R$ 50</div><p>Se preferir, vamos até você em Formiga, em casa ou na empresa.</p></div></div>`],
    ['Como funciona', 'PASSOS']
  ],
  faq: [
    ['Quanto custa formatar um computador em Formiga?', 'A formatação custa R$ 100 sem backup e R$ 110 com backup. O pacote completo, com backup, remoção de vírus e otimização, custa R$ 150.'],
    ['Quanto tempo demora uma formatação?', 'Normalmente de 1 a 3 horas, dependendo do backup e do equipamento.'],
    ['Vou perder meus arquivos?', 'Não, se você escolher a formatação com backup: salvamos seus arquivos antes e devolvemos depois.'],
    ['Vocês formatam notebook também?', 'Sim. Formatamos computadores de mesa e notebooks de qualquer marca.']
  ]
},
{
  slug: 'conserto-de-notebook-formiga-mg',
  menu: 'Conserto de notebook',
  title: 'Conserto de Notebook em Formiga MG | Assistência TechLine',
  desc: 'Conserto de notebook em Formiga, MG: notebook lento, esquentando, não liga ou com tela e teclado com defeito. Diagnóstico e orçamento antes do reparo. Garantia.',
  h1: 'Conserto de notebook em <span class="grad">Formiga, MG</span>',
  lead: 'Notebook lento, esquentando, desligando sozinho ou que não liga? Fazemos o diagnóstico, explicamos o problema e passamos o preço antes de qualquer reparo.',
  chips: ['Diagnóstico antes do reparo', 'Limpeza e pasta térmica', 'Troca de HD por SSD', 'Garantia de 30 dias*'],
  msg: 'Olá! Meu notebook está com problema e quero um orçamento.',
  service: 'Conserto de notebook',
  sections: [
    ['Problemas que resolvemos', `<div class="grid2"><div class="card"><h3>Notebook lento</h3><p>Formatação, remoção de vírus e, principalmente, <a href="/upgrade-ssd-formiga-mg">troca do HD por SSD</a>.</p></div><div class="card"><h3>Esquentando ou desligando</h3><p>Limpeza interna da ventoinha e do dissipador e troca da pasta térmica.</p></div><div class="card"><h3>Não liga</h3><p>Diagnóstico de fonte, carregador, bateria, memória e placa antes de qualquer gasto.</p></div><div class="card"><h3>Tela, teclado e bateria</h3><p>Avaliamos tela trincada ou sem imagem, teclas falhando e bateria que não segura carga.</p></div></div>`],
    ['Upgrade para o notebook render mais', `<p>Muitos notebooks aceitam <b>SSD</b> e <b>mais memória RAM</b>. É o jeito mais barato de deixar um notebook antigo rápido de novo. Avaliamos o seu modelo e indicamos o que é compatível.</p><ul class="check"><li>SSD SATA: cerca de 3 a 4 vezes mais rápido que um HD</li><li>SSD NVMe (quando o notebook tem slot M.2): até 7.000 MB/s</li><li>Memória: 8 GB para uso básico, 16 GB para multitarefa</li></ul>`],
    ['Como funciona', 'PASSOS']
  ],
  faq: [
    ['Quanto custa o conserto de notebook?', 'Depende do defeito. Fazemos o diagnóstico e passamos o valor antes de qualquer reparo. A formatação começa em R$ 100.'],
    ['Meu notebook esquenta muito, o que fazer?', 'Geralmente é poeira na ventoinha e pasta térmica seca. Uma limpeza interna com pasta nova resolve na maioria dos casos.'],
    ['Vale a pena colocar SSD no notebook?', 'Sim. É o upgrade que mais acelera um notebook que ainda usa HD: ele liga em segundos e os programas abrem muito mais rápido.'],
    ['Vocês buscam o notebook em casa?', 'Fazemos visita técnica em Formiga por R$ 50. Combine pelo WhatsApp.']
  ]
},
{
  slug: 'upgrade-ssd-formiga-mg',
  menu: 'Upgrade SSD',
  title: 'Troca de HD por SSD em Formiga MG | Upgrade de PC e Notebook',
  desc: 'Troca de HD por SSD e upgrade de memória em Formiga, MG. Computador e notebook até 44x mais rápidos. Avaliamos a compatibilidade e passamos o orçamento.',
  h1: 'Troca de HD por SSD e upgrade de memória em <span class="grad">Formiga, MG</span>',
  lead: 'Trocar o HD por um SSD é o upgrade que mais acelera um computador ou notebook antigo. O Windows liga em segundos e os programas abrem quase na hora.',
  chips: ['HD: até 160 MB/s', 'SSD SATA: até 550 MB/s', 'SSD NVMe: até 7.000 MB/s', 'Avaliação de compatibilidade'],
  msg: 'Olá! Quero um orçamento de upgrade para SSD.',
  service: 'Upgrade de SSD e memória',
  sections: [
    ['HD x SSD SATA x SSD NVMe', `<table><thead><tr><th>Tipo</th><th>Leitura típica</th><th>Ideal para</th></tr></thead><tbody><tr><td>HD 7200 RPM</td><td><b>160 MB/s</b></td><td>Guardar arquivos e backups</td></tr><tr><td>SSD SATA</td><td><b>550 MB/s</b></td><td>Upgrade de PC e notebook antigos</td></tr><tr><td>SSD NVMe Gen3</td><td><b>3.500 MB/s</b></td><td>Uso geral e jogos</td></tr><tr><td>SSD NVMe Gen4</td><td><b>7.000 MB/s</b></td><td>Jogos e edição de vídeo</td></tr></tbody></table><p class="dim">Valores típicos de leitura sequencial. O ganho real depende do equipamento.</p><p>Quer ver as peças? Na <a href="/#vitrine">vitrine 3D</a> do site você gira e compara um HD, um SSD SATA e um SSD NVMe de verdade.</p>`],
    ['O que está incluso no upgrade', `<ul class="check"><li>Avaliação de qual SSD e memória são compatíveis com o seu equipamento</li><li>Instalação do SSD e, se quiser, transferência do sistema e dos arquivos</li><li>Upgrade de memória RAM (8, 16 ou 32 GB conforme o uso)</li><li>Teste de funcionamento antes da entrega</li></ul>`],
    ['Como funciona', 'PASSOS']
  ],
  faq: [
    ['Quanto mais rápido fica o computador com SSD?', 'Um SSD SATA é cerca de 3,4 vezes mais rápido que um HD na leitura; um SSD NVMe pode ser até 44 vezes mais rápido. Na prática, o Windows liga em segundos.'],
    ['Meu computador aceita SSD NVMe?', 'Depende da placa-mãe ou do notebook. Avaliamos o seu modelo; se não tiver slot M.2, o SSD SATA é a melhor opção.'],
    ['Perco meus arquivos ao trocar o HD?', 'Não. Podemos transferir o sistema e os arquivos do HD para o SSD.'],
    ['Quanta memória RAM eu preciso?', '8 GB para uso básico, 16 GB para jogos e multitarefa e 32 GB para edição de vídeo e 3D.']
  ]
},
{
  slug: 'conserto-de-celular-formiga-mg',
  menu: 'Conserto de celular',
  title: 'Conserto de Celular em Formiga MG | Troca de Tela e Bateria',
  desc: 'Conserto de celular em Formiga, MG: troca de tela, troca de bateria, problemas de carregamento e lentidão. Orçamento conforme o modelo pelo WhatsApp.',
  h1: 'Conserto de celular em <span class="grad">Formiga, MG</span>',
  lead: 'Tela trincada, bateria que não dura ou celular que não carrega? Avaliamos o seu aparelho e passamos o valor conforme o modelo antes do reparo.',
  chips: ['Troca de tela', 'Troca de bateria', 'Conector de carga', 'Lentidão e backup'],
  msg: 'Olá! Quero um orçamento de conserto de celular. Modelo:',
  service: 'Conserto de celular',
  sections: [
    ['Serviços para celular', `<div class="grid2"><div class="card"><h3>Troca de tela</h3><p>Vidro trincado, toque falhando, manchas ou linhas na imagem. Valor conforme o modelo.</p></div><div class="card"><h3>Troca de bateria</h3><p>Bateria que descarrega rápido, desliga com carga sobrando ou está estufada.</p></div><div class="card"><h3>Não carrega</h3><p>Testamos cabo, carregador, sujeira e o conector de carga.</p></div><div class="card"><h3>Lento ou memória cheia</h3><p>Limpeza, ajustes, configuração de contas e backup dos seus dados.</p></div></div>`],
    ['Antes de trazer o celular', `<ul class="check"><li>Se o toque ainda funcionar, faça backup das fotos</li><li>Bateria estufada: pare de usar e traga o quanto antes</li><li>Anote a senha ou o padrão de desbloqueio para o teste após o reparo</li></ul><p>Para receber o orçamento mais rápido, mande pelo WhatsApp a marca, o modelo e o defeito.</p>`],
    ['Como funciona', 'PASSOS']
  ],
  faq: [
    ['Quanto custa trocar a tela do celular em Formiga?', 'O valor depende do modelo. Mande a marca e o modelo pelo WhatsApp que passamos o orçamento.'],
    ['Quando trocar a bateria do celular?', 'Quando ela descarrega muito rápido, desliga com bateria sobrando ou está estufada. Bateria estufada deve ser trocada logo.'],
    ['Meu celular não carrega, é o conector?', 'Pode ser o cabo, o carregador, sujeira ou o conector. Testamos tudo antes de indicar o reparo.']
  ]
},
{
  slug: 'manutencao-de-videogame-formiga-mg',
  menu: 'Videogame',
  title: 'Manutenção de Videogame em Formiga MG | Console e Controle',
  desc: 'Manutenção de videogame em Formiga, MG: limpeza, pasta térmica, superaquecimento, leitura de disco e conserto de controle. Orçamento antes do reparo.',
  h1: 'Manutenção de videogame e controle em <span class="grad">Formiga, MG</span>',
  lead: 'Console esquentando, fazendo barulho de turbina, sem ler jogos ou controle com analógico puxando? Avaliamos e passamos o preço antes do reparo.',
  chips: ['Limpeza e pasta térmica', 'Superaquecimento', 'Leitura de disco', 'Conserto de controle'],
  msg: 'Olá! Quero um orçamento de manutenção de videogame.',
  service: 'Manutenção de videogame',
  sections: [
    ['O que fazemos', `<div class="grid2"><div class="card"><h3>Limpeza e pasta térmica</h3><p>Manutenção preventiva para o console não esquentar nem desligar sozinho.</p></div><div class="card"><h3>Barulho e superaquecimento</h3><p>Correção de ventoinha, pasta térmica e fluxo de ar.</p></div><div class="card"><h3>Não lê jogos</h3><p>Verificamos o leitor de disco, o armazenamento e o sistema do console.</p></div><div class="card"><h3>Controle com defeito</h3><p>Analógico puxando (drift), botão falhando ou controle que não conecta.</p></div></div>`],
    ['Dicas para o console durar mais', `<ul class="check"><li>Deixe o console em lugar ventilado, fora de rack fechado</li><li>Não bloqueie as saídas de ar</li><li>Faça limpeza interna periodicamente se o console ficar barulhento</li></ul>`],
    ['Como funciona', 'PASSOS']
  ],
  faq: [
    ['Meu videogame está esquentando, o que fazer?', 'Normalmente é poeira e pasta térmica vencida. A limpeza com pasta térmica nova resolve na maioria dos casos.'],
    ['Vocês consertam controle?', 'Sim: analógico puxando sozinho, botões falhando e problemas de conexão.'],
    ['Quanto custa a manutenção de console?', 'Depende do modelo e do defeito. Avaliamos e passamos o valor antes do reparo.']
  ]
},
{
  slug: 'montagem-de-pc-gamer-formiga-mg',
  menu: 'Montagem de PC',
  title: 'Montagem de PC Gamer em Formiga MG | TechLine',
  desc: 'Montagem de PC gamer e computador sob medida em Formiga, MG. Indicamos as peças certas para o seu uso e orçamento e montamos tudo. Consultoria R$ 30.',
  h1: 'Montagem de PC gamer e computador sob medida em <span class="grad">Formiga, MG</span>',
  lead: 'Quer um computador para jogos, trabalho ou estudo? Indicamos as peças certas para o seu uso e o seu orçamento, montamos, organizamos os cabos e entregamos testado.',
  chips: ['Consultoria <b>R$ 30</b>', 'Montagem sob medida', 'Organização de cabos', 'Teste antes da entrega'],
  msg: 'Olá! Quero montar um PC. Uso principal:',
  service: 'Montagem de PC',
  sections: [
    ['Como escolhemos as peças', `<ul class="check"><li><b>Uso:</b> jogos, edição, trabalho ou estudo definem processador e placa de vídeo</li><li><b>Armazenamento:</b> SSD NVMe para o sistema e os jogos</li><li><b>Memória:</b> 16 GB para jogos e multitarefa, 32 GB para edição</li><li><b>Refrigeração e fonte:</b> dimensionadas para o conjunto funcionar frio e estável</li></ul><p>Veja na <a href="/#vitrine">vitrine 3D</a> um PC gamer real por dentro: placa de vídeo, memórias, cooler e armazenamento.</p>`],
    ['Também fazemos', `<div class="grid2"><div class="card"><h3>Consultoria de compra</h3><div class="price">R$ 30</div><p>Orientação para comprar ou fazer upgrade do seu equipamento.</p></div><div class="card"><h3>Upgrade do PC atual</h3><p>SSD, memória, placa de vídeo e refrigeração para o computador que você já tem.</p></div></div>`],
    ['Como funciona', 'PASSOS']
  ],
  faq: [
    ['Vocês montam PC com peças que eu já comprei?', 'Sim. Montamos, organizamos os cabos e testamos o conjunto.'],
    ['Quanto custa a consultoria para montar um PC?', 'A consultoria custa R$ 30. Avaliamos o seu uso e indicamos as peças.'],
    ['Qual a melhor configuração para jogos?', 'Depende dos jogos e do orçamento. Em geral: SSD NVMe, 16 GB de memória e uma placa de vídeo adequada aos jogos que você quer rodar.']
  ]
},
{
  slug: 'suporte-tecnico-remoto',
  menu: 'Suporte remoto',
  title: 'Suporte Técnico Remoto | Formiga MG e Região | TechLine',
  desc: 'Suporte técnico remoto para computador por R$ 45: Formiga, Arcos, Pains, Pimenta, Candeias e região. Resolvemos pela internet com acesso autorizado por você.',
  h1: 'Suporte técnico remoto para <span class="grad">Formiga e região</span>',
  lead: 'Muitos problemas de computador se resolvem sem sair de casa. Com a sua autorização, acessamos o computador pela internet e resolvemos na hora.',
  chips: ['Acesso remoto <b>R$ 45</b>', 'Sem deslocamento', 'Acesso autorizado por você', 'Formiga e cidades vizinhas'],
  msg: 'Olá! Quero suporte remoto para o meu computador.',
  service: 'Suporte técnico remoto',
  sections: [
    ['O que dá para resolver remotamente', `<ul class="check"><li>Instalação e configuração de programas, impressoras e e-mail</li><li>Lentidão, limpeza de programas e ajustes do Windows</li><li>Remoção de propagandas e programas indesejados</li><li>Dúvidas e orientação no uso do computador</li></ul><p>Problemas de peça (computador que não liga, tela quebrada) precisam de atendimento presencial: veja o <a href="/conserto-de-notebook-formiga-mg">conserto de notebook</a> e a <a href="/loja-de-informatica-formiga-mg">loja em Formiga</a>.</p>`],
    ['É seguro?', `<p>Sim. Usamos ferramentas de acesso que só funcionam com a sua autorização e você acompanha tudo na tela. O acesso termina quando o serviço acaba.</p><p>Atendemos remotamente <b>Formiga, Arcos, Pains, Pimenta, Candeias, Córrego Fundo</b> e outras cidades da região.</p>`],
    ['Como funciona', 'PASSOS']
  ],
  faq: [
    ['Quanto custa o suporte remoto?', 'O acesso remoto custa R$ 45.'],
    ['Preciso instalar algum programa?', 'Sim, um programa de acesso remoto simples. Ajudamos você a instalar pelo WhatsApp.'],
    ['Atendem fora de Formiga?', 'Pelo suporte remoto, sim: atendemos cidades da região como Arcos, Pains, Pimenta e Candeias.']
  ]
}
];
/* ================================================================================ */

const STEPS = `<ol class="steps"><li>Você chama no WhatsApp e conta o problema.</li><li>Avaliamos o aparelho na loja, em casa ou à distância.</li><li>Passamos o preço. Só fazemos depois do seu OK.</li><li>Entregamos testado, com garantia de 30 dias em serviços selecionados.</li></ol>`;
const TABLE = `<table><thead><tr><th>Serviço</th><th>Valor</th></tr></thead><tbody><tr><td>Formatação sem backup</td><td><b>R$ 100</b></td></tr><tr><td>Formatação com backup</td><td><b>R$ 110</b></td></tr><tr><td>Pacote completo (backup, vírus e otimização)</td><td><b>R$ 150</b></td></tr><tr><td>Visita técnica</td><td><b>R$ 50</b></td></tr><tr><td>Acesso remoto</td><td><b>R$ 45</b></td></tr><tr><td>Consultoria</td><td><b>R$ 30</b></td></tr><tr><td>Celular, videogame, SSD, limpeza e outros</td><td>sob consulta</td></tr></tbody></table><p class="dim">Valores iniciais, confirmados antes de qualquer serviço.</p>`;
const WA_SVG = '<svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.7.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.2z"/></svg>';

function page(p) {
  const url = `${SITE}/${p.slug}`;
  const others = PAGES.filter(o => o.slug !== p.slug);
  const body = p.sections.map(([h, html]) => `<section><div class="wrap"><h2>${h}</h2>${html === 'PASSOS' ? STEPS : html === 'TABELA' ? TABLE : html}</div></section>`).join('\n');
  const ld = [
    { '@context': 'https://schema.org', '@type': 'Service', name: p.service, serviceType: p.service, areaServed: [{ '@type': 'City', name: 'Formiga' }, { '@type': 'State', name: 'Minas Gerais' }], provider: { '@id': `${SITE}/#loja` }, url },
    { '@context': 'https://schema.org', '@type': ['ComputerStore', 'LocalBusiness'], '@id': `${SITE}/#loja`, name: 'TechLine Informática', url: `${SITE}/`, telephone: '+55-37-99840-0037', image: `${SITE}/img/og-techline.jpg`, priceRange: 'R$ 30 - R$ 150', address: { '@type': 'PostalAddress', streetAddress: 'Rua Furnas, 310 - Jardim Alvorada', addressLocality: 'Formiga', addressRegion: 'MG', postalCode: '35572-100', addressCountry: 'BR' }, openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' }] },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: p.menu, item: url }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  ];
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="geo.region" content="BR-MG"><meta name="geo.placename" content="Formiga">
<meta name="theme-color" content="#050A18">
<meta property="og:locale" content="pt_BR"><meta property="og:type" content="website"><meta property="og:site_name" content="TechLine Informática">
<meta property="og:title" content="${esc(p.title)}"><meta property="og:description" content="${esc(p.desc)}"><meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/img/og-techline.jpg"><meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" href="/favicon.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;600&family=Sora:wght@700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/site.css">
${ld.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
</head>
<body>
<header><div class="wrap nav">
  <a class="brand" href="/"><span><img src="/img/logo-simbolo.png" alt="" width="30" height="30"></span><b>TechLine</b></a>
  <nav aria-label="Principal"><a href="/#vitrine">Vitrine 3D</a><a href="/loja-de-informatica-formiga-mg">A loja</a><a href="/#precos">Preços</a><a href="/#contato">Contato</a></nav>
  <a class="btn btn-wa" href="${wa(p.msg)}" target="_blank" rel="noopener">WhatsApp</a>
</div></header>
<main>
  <div class="hero"><div class="wrap">
    <p class="crumbs"><a href="/">Início</a> / ${p.menu}</p>
    <h1>${p.h1}</h1>
    <p class="lead">${p.lead}</p>
    <div class="chips">${p.chips.map(c => `<span>${c}</span>`).join('')}</div>
    <div class="cta"><a class="btn btn-wa" href="${wa(p.msg)}" target="_blank" rel="noopener">Pedir orçamento no WhatsApp →</a><a class="btn btn-ghost" href="/#vitrine">Ver a vitrine 3D</a></div>
  </div></div>
${body}
  <section><div class="wrap"><h2>Perguntas frequentes</h2>${p.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></section>
  <section><div class="wrap contact">
    <div><h2>Fale com a TechLine</h2><p>Assistência técnica de informática em Formiga, MG. Orçamento pelo WhatsApp, atendimento na loja, em casa ou remoto.</p><a class="btn btn-wa" href="${wa(p.msg)}" target="_blank" rel="noopener">Chamar no WhatsApp →</a></div>
    <div class="card"><h3>Endereço e horário</h3><p>${ADDR}</p><p>Segunda a sexta, 9h às 18h</p><p>WhatsApp: <a href="https://wa.me/${WA}">(37) 99840-0037</a></p><p><a href="https://www.google.com/maps/dir/?api=1&amp;destination=${encodeURIComponent(ADDR)}" target="_blank" rel="noopener">Como chegar no Google Maps ↗</a></p></div>
  </div></section>
  <section><div class="wrap"><h2>Outros serviços em Formiga</h2><div class="links">${others.map(o => `<a href="/${o.slug}">${o.menu}<small>${esc(o.desc.split('.')[0])}</small></a>`).join('')}</div></div></section>
</main>
<footer><div class="wrap"><span>© ${new Date().getFullYear()} TechLine Informática · ${ADDR}</span><span><a href="/">Página inicial</a> · <a href="https://instagram.com/techline._" target="_blank" rel="noopener">Instagram</a></span></div></footer>
<a class="fab" href="${wa(p.msg)}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${WA_SVG}</a>
</body>
</html>
`;
}

for (const p of PAGES) fs.writeFileSync(path.join(ROOT, p.slug + '.html'), page(p));
const urls = [{ loc: `${SITE}/`, pr: '1.0' }, ...PAGES.map(p => ({ loc: `${SITE}/${p.slug}`, pr: p.slug.startsWith('loja') ? '0.9' : '0.8' }))];
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${HOJE}</lastmod><priority>${u.pr}</priority></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(__dirname, 'paginas.json'), JSON.stringify(PAGES.map(p => ({ slug: p.slug, menu: p.menu, desc: p.desc })), null, 1));
console.log('páginas geradas:', PAGES.length);
