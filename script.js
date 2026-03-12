const dimensionItems = {
  Activation: [
    ["J’entre facilement dans l’action quand un entraînement démarre.", false],
    ["Je manque souvent d’énergie avant même d’avoir commencé.", true],
    ["Je me sens stimulé par l’intensité d’une séance.", false],
    ["Quand il y a de l’enjeu, mon niveau d’énergie monte utilement.", false],
    ["Je peine à me mettre en route quand le rythme augmente.", true],
    ["Je sais mobiliser mon énergie au bon moment.", false],
    ["Je me sens rapidement dépassé quand tout s’accélère.", true],
    ["Je peux rester actif mentalement même dans une longue séance.", false],
    ["J’ai besoin de beaucoup de temps pour être prêt mentalement.", true],
    ["Je sais relancer mon énergie quand elle baisse.", false],
    ["En compétition, je trouve vite le bon niveau d’intensité.", false],
    ["Mon énergie varie trop d’un moment à l’autre.", true],
    ["Je réponds bien aux situations qui demandent du rythme.", false],
    ["Je me sens souvent éteint quand la séance devient exigeante.", true],
    ["Je peux élever mon activation sans perdre en lucidité.", false]
  ],
  Attention: [
    ["Je reste concentré malgré le bruit autour de moi.", false],
    ["Une petite distraction suffit à me sortir de mon geste.", true],
    ["Je retrouve vite mon attention après une erreur.", false],
    ["Je me disperse facilement quand plusieurs informations arrivent en même temps.", true],
    ["Je sais revenir à l’essentiel dans les moments clés.", false],
    ["Pendant un match, mon esprit part souvent ailleurs.", true],
    ["Je garde le fil même quand la pression augmente.", false],
    ["Je confonds parfois vitesse et précipitation mentale.", true],
    ["Je suis capable d’identifier ce qui mérite vraiment mon attention.", false],
    ["Je sur-réagis aux détails qui n’ont pas d’importance.", true],
    ["Je me reconcentre rapidement entre deux actions.", false],
    ["Je perds de la qualité quand je dois enchaîner plusieurs tâches.", true],
    ["Mon attention reste stable sur toute la durée d’un effort important.", false],
    ["Je laisse trop facilement mon attention être captée par l’extérieur.", true],
    ["Je sais poser un point de focalisation clair avant d’agir.", false]
  ],
  Régulation: [
    ["Je sais calmer mon stress avant qu’il me déborde.", false],
    ["Quand je suis frustré, cela se voit tout de suite dans mon jeu.", true],
    ["Je récupère émotionnellement après une mauvaise action.", false],
    ["La colère ou la peur me font perdre mes moyens.", true],
    ["Je sais mettre de la distance avec mes émotions pendant la performance.", false],
    ["Je rumine longtemps ce qui s’est mal passé.", true],
    ["Je reconnais rapidement mon état interne.", false],
    ["Un mauvais début de séance me plombe durablement.", true],
    ["Je sais utiliser ma respiration pour revenir à un état utile.", false],
    ["Je suis souvent envahi par l’émotion dans les moments importants.", true],
    ["Je peux transformer une tension en énergie maîtrisée.", false],
    ["Quand je doute, mon corps se crispe durablement.", true],
    ["Je sais me recadrer intérieurement dans les temps faibles.", false],
    ["Mes émotions prennent parfois le contrôle sur mes décisions.", true],
    ["Je retrouve assez vite un état mental stable.", false]
  ],
  Engagement: [
    ["Je vais au bout de l’effort même quand c’est inconfortable.", false],
    ["Je baisse facilement d’intensité quand cela devient difficile.", true],
    ["Je reste investi même lorsque la séance me plaît moins.", false],
    ["J’ai du mal à garder le cap sur la durée.", true],
    ["Je me donne des objectifs concrets à l’entraînement.", false],
    ["Je relâche mon implication quand personne ne me regarde.", true],
    ["Je suis capable de maintenir un haut niveau d’effort.", false],
    ["Je me décourage trop vite face aux contraintes.", true],
    ["Je trouve du sens à ce que je travaille.", false],
    ["Je fonctionne surtout à l’envie du moment.", true],
    ["Je respecte mes engagements personnels d’entraînement.", false],
    ["Je remets trop souvent au lendemain ce qui devrait être travaillé.", true],
    ["Je sais pourquoi je fais les efforts qu’on me demande.", false],
    ["Je m’investis moins quand les progrès sont lents.", true],
    ["Je reste mobilisé même sans récompense immédiate.", false]
  ],
  Confiance: [
    ["Je crois en ma capacité à réussir dans les moments importants.", false],
    ["Je doute vite dès qu’une difficulté apparaît.", true],
    ["Je garde confiance même après une erreur.", false],
    ["Je me compare souvent négativement aux autres.", true],
    ["Je sais reconnaître mes points forts.", false],
    ["Je cherche souvent la preuve que je ne suis pas au niveau.", true],
    ["Je peux m’appuyer sur mes réussites passées pour avancer.", false],
    ["Mon niveau de confiance dépend trop du regard extérieur.", true],
    ["Je sens que je peux trouver une solution quand la situation se complique.", false],
    ["Une seule erreur suffit à faire chuter ma confiance.", true],
    ["Je m’autorise à viser haut.", false],
    ["Je me protège en visant plus bas que mes capacités.", true],
    ["Je peux performer même sans être parfaitement rassuré.", false],
    ["Je confonds parfois prudence et manque de confiance.", true],
    ["Je me présente mentalement à la performance avec solidité.", false]
  ],
  Résilience: [
    ["Je rebondis rapidement après un échec.", false],
    ["Je reste bloqué longtemps sur mes erreurs.", true],
    ["Je tire des leçons utiles des moments difficiles.", false],
    ["Quand je rate, j’ai tendance à me refermer.", true],
    ["Je peux repartir avec envie après une contre-performance.", false],
    ["Je vis les revers comme une preuve durable de faiblesse.", true],
    ["Je continue à avancer même quand le contexte devient dur.", false],
    ["Je perds facilement le goût de l’effort après un échec.", true],
    ["Je sais transformer une difficulté en apprentissage.", false],
    ["Je mets beaucoup de temps à récupérer moralement.", true],
    ["Je retrouve une direction claire après un moment difficile.", false],
    ["Je me définis trop par mes résultats récents.", true],
    ["Je sais reconstruire ma dynamique après une baisse.", false],
    ["Les échecs me suivent mentalement trop longtemps.", true],
    ["Je garde une forme de stabilité intérieure même dans l’adversité.", false]
  ],
  Cognition: [
    ["Je comprends vite les logiques de jeu ou de situation.", false],
    ["J’ai du mal à lire ce qui se passe quand le contexte bouge vite.", true],
    ["Je repère facilement les options possibles dans une action.", false],
    ["Je me contente souvent d’agir sans comprendre ce qui se joue vraiment.", true],
    ["Je relie facilement technique, tactique et intention.", false],
    ["Je manque parfois de recul pour analyser ce que je fais.", true],
    ["Je sais observer et ajuster ma stratégie.", false],
    ["Je reproduis parfois sans comprendre pourquoi cela fonctionne ou non.", true],
    ["Je vois vite les schémas utiles dans une situation.", false],
    ["Je suis vite perdu quand plusieurs paramètres changent en même temps.", true],
    ["Je peux verbaliser clairement ce que j’essaie de faire.", false],
    ["J’ai du mal à faire le lien entre mes sensations et mes choix.", true],
    ["Je réfléchis de façon utile sans me surcharger.", false],
    ["Je manque parfois de structure mentale dans mes analyses.", true],
    ["Je comprends assez vite ce qu’il faut changer pour progresser.", false]
  ],
  Motricité: [
    ["Je sens clairement d’où part mon mouvement.", false],
    ["Je me sens parfois brouillé dans mes coordinations.", true],
    ["Je trouve assez naturellement des appuis efficaces.", false],
    ["Je peine à sentir la bonne organisation de mon corps dans l’action.", true],
    ["Je peux ajuster mon geste sans perdre mes repères.", false],
    ["Je me sens souvent en décalage entre intention et mouvement.", true],
    ["Mes sensations corporelles m’aident à progresser.", false],
    ["Je comprends mal ce que mon corps me dit dans l’effort.", true],
    ["Je repère vite les coordinations qui me conviennent.", false],
    ["Je force parfois un geste qui ne me correspond pas.", true],
    ["Je sens si le mouvement part plutôt du haut ou du bas.", false],
    ["Mes repères moteurs changent trop selon les contextes.", true],
    ["Je trouve un rythme corporel assez naturel quand je suis relâché.", false],
    ["Je compense souvent avec de la volonté ce que je ne sens pas vraiment.", true],
    ["Je peux décrire avec précision mes sensations motrices utiles.", false]
  ]
};

const cognitiveItems = [
  { axis: 'EI', key: 'E', text: 'Je gagne de l’énergie quand j’échange avec les autres.' },
  { axis: 'EI', key: 'I', text: 'Je préfère retrouver mes idées seul avant de reparler.' },
  { axis: 'EI', key: 'E', text: 'L’ambiance du groupe me stimule pendant l’action.' },
  { axis: 'EI', key: 'I', text: 'Je performe mieux quand je protège ma bulle intérieure.' },
  { axis: 'SN', key: 'S', text: 'Je m’appuie d’abord sur ce que je vois, sens et constate.' },
  { axis: 'SN', key: 'N', text: 'Je perçois vite les possibilités cachées derrière une situation.' },
  { axis: 'SN', key: 'S', text: 'Je préfère partir du concret avant d’interpréter.' },
  { axis: 'SN', key: 'N', text: 'Je fonctionne beaucoup par intuition et anticipation.' },
  { axis: 'TF', key: 'T', text: 'Je décide d’abord à partir de ce qui semble le plus logique.' },
  { axis: 'TF', key: 'F', text: 'Je décide aussi en fonction de l’impact humain et du ressenti.' },
  { axis: 'TF', key: 'T', text: 'Je cherche d’abord la cohérence avant le confort relationnel.' },
  { axis: 'TF', key: 'F', text: 'Je tiens beaucoup compte des personnes concernées quand je tranche.' },
  { axis: 'JP', key: 'J', text: 'Je me sens plus efficace quand les choses sont cadrées.' },
  { axis: 'JP', key: 'P', text: 'Je préfère garder de la souplesse jusqu’au dernier moment.' },
  { axis: 'JP', key: 'J', text: 'J’aime planifier et structurer ce que j’ai à faire.' },
  { axis: 'JP', key: 'P', text: 'Je reste plus performant quand je peux m’adapter librement.' }
];

const actionTypesMap = {
  ESTP: 'D1', ISTP: 'D2', ESTJ: 'D3', ISTJ: 'D4',
  ESFP: 'G1', ISFP: 'G2', ESFJ: 'G3', ISFJ: 'G4',
  ENFP: 'R1', INFP: 'R2', ENFJ: 'R3', INFJ: 'R4',
  ENTP: 'C1', INTP: 'C2', ENTJ: 'C3', INTJ: 'C4'
};

const profileDefinitions = [
  { name: 'Compétiteur', keys: ['Activation', 'Engagement', 'Confiance'] },
  { name: 'Stratège', keys: ['Cognition', 'Attention'] },
  { name: 'Créatif', keys: ['Cognition', 'Activation', 'Motricité'] },
  { name: 'Régulateur', keys: ['Régulation', 'Attention'] },
  { name: 'Endurant', keys: ['Résilience', 'Engagement'] },
  { name: 'Méthodique', keys: ['Attention', 'Cognition'] }
];

const scaleLabels = ['Pas du tout d’accord', 'Plutôt pas d’accord', 'Mitigé', 'Plutôt d’accord', 'Tout à fait d’accord'];

const questions = [];
Object.entries(dimensionItems).forEach(([dimension, items]) => {
  items.forEach((item, index) => {
    questions.push({
      type: 'dimension',
      dimension,
      reverse: item[1],
      text: item[0],
      section: `Dimension ${dimension}`,
      numberInSection: index + 1
    });
  });
});

cognitiveItems.forEach((item, index) => {
  questions.push({
    type: 'cognitive',
    axis: item.axis,
    key: item.key,
    text: item.text,
    section: 'Axes cognitifs',
    numberInSection: index + 1
  });
});

let currentIndex = 0;
const answers = new Array(questions.length).fill(null);

const intro = document.getElementById('intro');
const testSection = document.getElementById('testSection');
const resultsSection = document.getElementById('resultsSection');
const questionContainer = document.getElementById('questionContainer');
const progressText = document.getElementById('progressText');
const sectionText = document.getElementById('sectionText');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');

function renderQuestion() {
  const q = questions[currentIndex];
  progressText.textContent = `${currentIndex + 1} / ${questions.length}`;
  sectionText.textContent = q.section;
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

  questionContainer.innerHTML = `
    <div class="question-meta">${q.section} — question ${q.numberInSection}</div>
    <h3>${q.type === 'dimension' ? q.dimension : 'Axe ' + q.axis}</h3>
    <div class="question-text">${q.text}</div>
    <div class="scale">
      ${scaleLabels.map((label, idx) => `
        <label class="option ${answers[currentIndex] === idx + 1 ? 'selected' : ''}">
          <input type="radio" name="answer" value="${idx + 1}" ${answers[currentIndex] === idx + 1 ? 'checked' : ''}>
          <span class="score">${idx + 1}</span>
          <span class="label">${label}</span>
        </label>
      `).join('')}
    </div>
  `;

  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
      const value = Number(option.querySelector('input').value);
      answers[currentIndex] = value;
      renderQuestion();
    });
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.classList.toggle('hidden', currentIndex === questions.length - 1);
  finishBtn.classList.toggle('hidden', currentIndex !== questions.length - 1);
}

function dimensionScore(values, reverseFlags) {
  const adjusted = values.map((v, i) => reverseFlags[i] ? 6 - v : v);
  const sum = adjusted.reduce((a, b) => a + b, 0);
  const normalized = ((sum - adjusted.length) / (adjusted.length * 4)) * 100;
  return Math.round(normalized);
}

function computeResults() {
  if (answers.some(a => a === null)) {
    alert('Merci de répondre à toutes les questions avant de calculer le profil.');
    return;
  }

  const dimensionScores = {};
  Object.keys(dimensionItems).forEach(dim => {
    const dimQs = questions.filter(q => q.type === 'dimension' && q.dimension === dim);
    const vals = dimQs.map(q => answers[questions.indexOf(q)]);
    const reverseFlags = dimQs.map(q => q.reverse);
    dimensionScores[dim] = dimensionScore(vals, reverseFlags);
  });

  const axisScores = {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 }
  };

  questions.forEach((q, idx) => {
    if (q.type === 'cognitive') axisScores[q.axis][q.key] += answers[idx];
  });

  const mbti = [
    axisScores.EI.E >= axisScores.EI.I ? 'E' : 'I',
    axisScores.SN.S >= axisScores.SN.N ? 'S' : 'N',
    axisScores.TF.T >= axisScores.TF.F ? 'T' : 'F',
    axisScores.JP.J >= axisScores.JP.P ? 'J' : 'P'
  ].join('');

  const motorType = actionTypesMap[mbti] || 'Non déterminé';

  const profileScores = profileDefinitions.map(profile => {
    const value = Math.round(profile.keys.reduce((sum, key) => sum + dimensionScores[key], 0) / profile.keys.length);
    return { name: profile.name, value };
  }).sort((a, b) => b.value - a.value);

  const expectedMotorFamily = ({ S: 'D/G', N: 'R/C' })[mbti[1]];
  const actualMotorFamily = motorType.charAt(0);
  const coherence = (mbti.includes('N') && ['R', 'C'].includes(actualMotorFamily)) || (mbti.includes('S') && ['D', 'G'].includes(actualMotorFamily)) ? 'Élevée' : 'À explorer';

  renderResults({ dimensionScores, mbti, motorType, profileScores, coherence, axisScores });
}

function renderResults(data) {
  intro.classList.add('hidden');
  testSection.classList.add('hidden');
  resultsSection.classList.remove('hidden');

  document.getElementById('mainProfile').textContent = `${data.profileScores[0].name} (${data.profileScores[0].value})`;
  document.getElementById('secondProfile').textContent = `${data.profileScores[1].name} (${data.profileScores[1].value})`;
  document.getElementById('thirdProfile').textContent = `${data.profileScores[2].name} (${data.profileScores[2].value})`;
  document.getElementById('mbtiType').textContent = data.mbti;
  document.getElementById('motorType').textContent = data.motorType;
  document.getElementById('coherence').textContent = data.coherence;

  const scoreTable = document.getElementById('scoreTable');
  scoreTable.innerHTML = Object.entries(data.dimensionScores).map(([key, value]) => `
    <div class="score-row">
      <div class="score-label">${key}</div>
      <div class="score-bar"><div style="width:${value}%"></div></div>
      <div><strong>${value}</strong></div>
    </div>
  `).join('');

  drawRadar(data.dimensionScores);
  buildReport(data);
}

function drawRadar(scores) {
  const canvas = document.getElementById('radarCanvas');
  const ctx = canvas.getContext('2d');
  const labels = ['Activation', 'Attention', 'Régulation', 'Engagement', 'Confiance', 'Résilience'];
  const values = labels.map(l => scores[l]);
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = 160;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let ring = 1; ring <= 5; ring++) {
    ctx.beginPath();
    labels.forEach((_, i) => {
      const angle = (-Math.PI / 2) + (i * 2 * Math.PI / labels.length);
      const r = radius * ring / 5;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = '#d8e2f2';
    ctx.stroke();
  }

  labels.forEach((label, i) => {
    const angle = (-Math.PI / 2) + (i * 2 * Math.PI / labels.length);
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#d8e2f2';
    ctx.stroke();
    ctx.fillStyle = '#223554';
    ctx.font = '14px Arial';
    const tx = cx + Math.cos(angle) * (radius + 24);
    const ty = cy + Math.sin(angle) * (radius + 24);
    ctx.fillText(label, tx - 30, ty);
  });

  ctx.beginPath();
  values.forEach((value, i) => {
    const angle = (-Math.PI / 2) + (i * 2 * Math.PI / labels.length);
    const r = radius * (value / 100);
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(29, 93, 184, 0.25)';
  ctx.strokeStyle = '#1d5db8';
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();
}

function levelText(score) {
  if (score >= 75) return 'très solide';
  if (score >= 60) return 'plutôt solide';
  if (score >= 45) return 'à renforcer';
  return 'fragile';
}

function buildReport(data) {
  const d = data.dimensionScores;
  const top2 = Object.entries(d).sort((a,b) => b[1]-a[1]).slice(0,2).map(x => x[0]);
  const low2 = Object.entries(d).sort((a,b) => a[1]-b[1]).slice(0,2).map(x => x[0]);
  const report = document.getElementById('reportContent');
  report.innerHTML = `
    <h4>1. Portrait mental</h4>
    <p>Le profil met en évidence une dominante <strong>${data.profileScores[0].name.toLowerCase()}</strong>. Les ressources les plus visibles apparaissent autour de <strong>${top2.join(' et ')}</strong>, tandis que les zones à travailler en priorité concernent <strong>${low2.join(' et ')}</strong>. Cela dessine un fonctionnement mental qui combine ${levelText(d.Activation)} en activation, ${levelText(d.Attention)} en attention et ${levelText(d.Régulation)} en régulation émotionnelle.</p>

    <h4>2. Forces mentales</h4>
    <p>Les points d’appui naturels du sportif se situent d’abord dans les dimensions les plus élevées. Quand ${top2[0].toLowerCase()} et ${top2[1].toLowerCase()} sont mobilisées volontairement, il devient plus facile de stabiliser la performance, de donner du sens au travail et d’installer une forme de confiance opérationnelle.</p>

    <h4>3. Fonctionnement sous pression</h4>
    <p>Sous pression, l’équilibre entre <strong>activation (${d.Activation})</strong>, <strong>régulation (${d.Régulation})</strong> et <strong>confiance (${d.Confiance})</strong> donne une lecture centrale. Plus ces trois dimensions restent proches et solides, plus le sportif a de chances de préserver ses repères quand l’enjeu monte. Ici, la lecture suggère un fonctionnement ${d.Régulation >= 60 && d.Confiance >= 60 ? 'plutôt stable' : 'qui peut fluctuer selon le contexte'}.</p>

    <h4>4. Profil d’apprentissage</h4>
    <p>Le score de cognition à <strong>${d.Cognition}</strong> et celui de motricité à <strong>${d.Motricité}</strong> montrent comment le sportif comprend, ressent et réorganise son progrès. Un score élevé en cognition favorise les liens entre sensation, stratégie et adaptation. Un score plus bas invite à simplifier les consignes, à passer davantage par l’expérience concrète et à valider rapidement ce qui fonctionne.</p>

    <h4>5. Lecture Action Types</h4>
    <p>Le type cognitif estimé est <strong>${data.mbti}</strong>. La table de correspondance intégrée à l’outil lui associe la préférence motrice <strong>${data.motorType}</strong>. Cette lecture sert de repère d’accompagnement pour relier la manière de traiter l’information et une hypothèse de fonctionnement moteur. Elle ne constitue pas un diagnostic clinique ni une certification officielle.</p>

    <h4>6. Axes de progression</h4>
    <p>Les deux priorités actuelles sont <strong>${low2[0]}</strong> et <strong>${low2[1]}</strong>. Le travail le plus utile consiste à installer un protocole simple, répété et observable : une routine avant séance, un point de focalisation pendant l’action, puis un débrief court après effort. L’objectif n’est pas de tout corriger en même temps, mais de créer une dynamique de progrès lisible.</p>

    <h4>7. Plan de progression</h4>
    <p><strong>Semaine 1 :</strong> stabiliser l’activation et clarifier l’objectif de séance. <strong>Semaine 2 :</strong> renforcer l’attention avec un repère unique avant action. <strong>Semaine 3 :</strong> travailler la régulation par respiration, recentrage et recadrage. <strong>Semaine 4 :</strong> consolider confiance et résilience par des retours précis sur les progrès observés.</p>

    <h4>8. Lecture joueur</h4>
    <p>Le joueur peut retenir une idée simple : ses meilleures performances apparaissent quand il s’appuie volontairement sur ses forces naturelles tout en gardant un protocole de retour au calme et de reconcentration dans les temps faibles.</p>

    <h4>9. Lecture parents</h4>
    <p>Le parent peut soutenir ce profil en valorisant les progrès concrets, la régularité de l’effort et la qualité de l’engagement plutôt qu’en commentant uniquement le résultat final. L’environnement émotionnel compte directement sur la stabilité du jeune sportif.</p>

    <h4>10. Lecture coach</h4>
    <p>Pour le coach, ce profil suggère d’adapter les feedbacks au niveau de structuration mentale disponible. Plus les consignes sont claires, reliées à une sensation repérable et répétées dans des contextes proches du réel, plus l’appropriation a des chances d’être durable.</p>
  `;
}

document.getElementById('startBtn').addEventListener('click', () => {
  intro.classList.add('hidden');
  testSection.classList.remove('hidden');
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  renderQuestion();
});

nextBtn.addEventListener('click', () => {
  if (answers[currentIndex] === null) {
    alert('Merci de choisir une réponse avant de continuer.');
    return;
  }
  if (currentIndex < questions.length - 1) currentIndex++;
  renderQuestion();
});

finishBtn.addEventListener('click', computeResults);

document.getElementById('restartBtn').addEventListener('click', () => {
  window.location.reload();
});
