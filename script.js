
const QUESTIONS = [{"id": 1, "dimension": "activation", "text": "Dans les moments importants, je sens mon énergie augmenter."}, {"id": 2, "dimension": "activation", "text": "L’enjeu d’une compétition me stimule."}, {"id": 3, "dimension": "activation", "text": "Mon corps se prépare naturellement avant un match."}, {"id": 4, "dimension": "activation", "text": "Je ressens une montée d’adrénaline avant l’action."}, {"id": 5, "dimension": "activation", "text": "Les situations de défi me donnent envie de me dépasser."}, {"id": 6, "dimension": "activation", "text": "Je peux mobiliser rapidement mon énergie pour performer."}, {"id": 7, "dimension": "activation", "text": "La pression augmente mon intensité dans le jeu."}, {"id": 8, "dimension": "activation", "text": "Je sens que mon corps se met en mode compétition."}, {"id": 9, "dimension": "activation", "text": "Dans les moments clés, mon niveau d’énergie est élevé."}, {"id": 10, "dimension": "activation", "text": "L’environnement de compétition me stimule."}, {"id": 11, "dimension": "activation", "text": "Je peux augmenter mon intensité quand c’est nécessaire."}, {"id": 12, "dimension": "activation", "text": "L’enjeu renforce ma motivation à agir."}, {"id": 13, "dimension": "activation", "text": "Je sens mon attention se réveiller avant l’action."}, {"id": 14, "dimension": "activation", "text": "La compétition me donne envie de me battre."}, {"id": 15, "dimension": "activation", "text": "Je ressens une énergie particulière dans les moments décisifs."}, {"id": 16, "dimension": "attention", "text": "Je peux rester concentré pendant toute une compétition."}, {"id": 17, "dimension": "attention", "text": "Je me focalise facilement sur l’action en cours."}, {"id": 18, "dimension": "attention", "text": "Je remarque rapidement les détails importants du jeu."}, {"id": 19, "dimension": "attention", "text": "Je peux ignorer les distractions extérieures."}, {"id": 20, "dimension": "attention", "text": "Après une erreur, je retrouve rapidement ma concentration."}, {"id": 21, "dimension": "attention", "text": "Mon attention reste stable pendant l’effort."}, {"id": 22, "dimension": "attention", "text": "Je suis capable de me recentrer rapidement."}, {"id": 23, "dimension": "attention", "text": "Je garde mon attention sur l’objectif du moment."}, {"id": 24, "dimension": "attention", "text": "Les bruits autour de moi ne me perturbent pas."}, {"id": 25, "dimension": "attention", "text": "Je reste présent mentalement dans l’action."}, {"id": 26, "dimension": "attention", "text": "Je peux me concentrer sur une tâche précise."}, {"id": 27, "dimension": "attention", "text": "Je remarque les informations importantes du jeu."}, {"id": 28, "dimension": "attention", "text": "Je me reconcentre rapidement après une distraction."}, {"id": 29, "dimension": "attention", "text": "Je garde l’esprit clair pendant l’action."}, {"id": 30, "dimension": "attention", "text": "Je reste focalisé même lorsque la situation est intense."}, {"id": 31, "dimension": "regulation", "text": "Je sais retrouver mon calme après une erreur."}, {"id": 32, "dimension": "regulation", "text": "Mes émotions ne perturbent pas mon jeu."}, {"id": 33, "dimension": "regulation", "text": "Je peux prendre du recul dans les moments difficiles."}, {"id": 34, "dimension": "regulation", "text": "Je garde mon calme sous pression."}, {"id": 35, "dimension": "regulation", "text": "Je peux gérer la frustration en compétition."}, {"id": 36, "dimension": "regulation", "text": "Les émotions ne prennent pas le dessus sur mes actions."}, {"id": 37, "dimension": "regulation", "text": "Je sais respirer pour me calmer."}, {"id": 38, "dimension": "regulation", "text": "Je peux transformer une erreur en apprentissage."}, {"id": 39, "dimension": "regulation", "text": "Je retrouve rapidement un état mental stable."}, {"id": 40, "dimension": "regulation", "text": "Je sais relativiser les situations difficiles."}, {"id": 41, "dimension": "regulation", "text": "Je peux contrôler mes réactions émotionnelles."}, {"id": 42, "dimension": "regulation", "text": "Je reste lucide même lorsque je suis frustré."}, {"id": 43, "dimension": "regulation", "text": "Je retrouve facilement mon équilibre émotionnel."}, {"id": 44, "dimension": "regulation", "text": "Je garde une attitude constructive dans l’adversité."}, {"id": 45, "dimension": "regulation", "text": "Je peux repartir dans l’action après une erreur."}, {"id": 46, "dimension": "engagement", "text": "Je m’entraîne sérieusement pour progresser."}, {"id": 47, "dimension": "engagement", "text": "Je persévère même lorsque c’est difficile."}, {"id": 48, "dimension": "engagement", "text": "J’aime relever des défis sportifs."}, {"id": 49, "dimension": "engagement", "text": "Je suis motivé par la progression."}, {"id": 50, "dimension": "engagement", "text": "Je continue même après un échec."}, {"id": 51, "dimension": "engagement", "text": "Je donne le meilleur de moi-même à l’entraînement."}, {"id": 52, "dimension": "engagement", "text": "Je veux m’améliorer constamment."}, {"id": 53, "dimension": "engagement", "text": "Je m’investis pleinement dans mon sport."}, {"id": 54, "dimension": "engagement", "text": "Je travaille mes points faibles."}, {"id": 55, "dimension": "engagement", "text": "Les difficultés me motivent à progresser."}, {"id": 56, "dimension": "engagement", "text": "Je me fixe des objectifs sportifs."}, {"id": 57, "dimension": "engagement", "text": "Je reste engagé même quand c’est exigeant."}, {"id": 58, "dimension": "engagement", "text": "Je suis déterminé à progresser."}, {"id": 59, "dimension": "engagement", "text": "J’aime me dépasser."}, {"id": 60, "dimension": "engagement", "text": "Je poursuis mes objectifs malgré les obstacles."}, {"id": 61, "dimension": "confidence", "text": "Je crois en ma capacité à réussir."}, {"id": 62, "dimension": "confidence", "text": "Je me sens capable de relever les défis."}, {"id": 63, "dimension": "confidence", "text": "Je fais confiance à mes compétences."}, {"id": 64, "dimension": "confidence", "text": "Je me sens prêt à affronter la compétition."}, {"id": 65, "dimension": "confidence", "text": "Je crois en ma progression."}, {"id": 66, "dimension": "confidence", "text": "Je suis confiant dans mes capacités sportives."}, {"id": 67, "dimension": "confidence", "text": "Je me sens capable de gérer les situations difficiles."}, {"id": 68, "dimension": "confidence", "text": "Je crois en mes chances de réussite."}, {"id": 69, "dimension": "confidence", "text": "Je me sens solide mentalement."}, {"id": 70, "dimension": "confidence", "text": "Je peux affronter les défis avec confiance."}, {"id": 71, "dimension": "confidence", "text": "Je crois en mes ressources."}, {"id": 72, "dimension": "confidence", "text": "Je suis confiant dans mes décisions."}, {"id": 73, "dimension": "confidence", "text": "Je me sens capable de performer."}, {"id": 74, "dimension": "confidence", "text": "Je fais confiance à mon entraînement."}, {"id": 75, "dimension": "confidence", "text": "Je crois en mon potentiel."}, {"id": 76, "dimension": "resilience", "text": "Après un échec, je rebondis rapidement."}, {"id": 77, "dimension": "resilience", "text": "Je tire des leçons de mes erreurs."}, {"id": 78, "dimension": "resilience", "text": "Les difficultés me rendent plus fort."}, {"id": 79, "dimension": "resilience", "text": "Je continue malgré les obstacles."}, {"id": 80, "dimension": "resilience", "text": "Je me relève après une défaite."}, {"id": 81, "dimension": "resilience", "text": "Les échecs me motivent à progresser."}, {"id": 82, "dimension": "resilience", "text": "Je transforme les difficultés en apprentissage."}, {"id": 83, "dimension": "resilience", "text": "Je garde une attitude positive après un échec."}, {"id": 84, "dimension": "resilience", "text": "Je persévère même lorsque je doute."}, {"id": 85, "dimension": "resilience", "text": "Les obstacles me poussent à progresser."}, {"id": 86, "dimension": "resilience", "text": "Je reste motivé malgré les difficultés."}, {"id": 87, "dimension": "resilience", "text": "Je garde confiance après un échec."}, {"id": 88, "dimension": "resilience", "text": "Je progresse grâce aux difficultés."}, {"id": 89, "dimension": "resilience", "text": "Je sais repartir après une défaite."}, {"id": 90, "dimension": "resilience", "text": "Je continue d’avancer malgré les obstacles."}, {"id": 91, "dimension": "cognition", "text": "J’aime analyser les situations de jeu."}, {"id": 92, "dimension": "cognition", "text": "Je réfléchis aux stratégies possibles."}, {"id": 93, "dimension": "cognition", "text": "Je cherche à comprendre les situations."}, {"id": 94, "dimension": "cognition", "text": "J’observe les comportements des autres joueurs."}, {"id": 95, "dimension": "cognition", "text": "J’aime comprendre le fonctionnement du jeu."}, {"id": 96, "dimension": "cognition", "text": "J’analyse mes performances après un match."}, {"id": 97, "dimension": "cognition", "text": "Je réfléchis aux solutions possibles dans le jeu."}, {"id": 98, "dimension": "cognition", "text": "J’aime comprendre les tactiques sportives."}, {"id": 99, "dimension": "cognition", "text": "Je cherche à anticiper les actions."}, {"id": 100, "dimension": "cognition", "text": "J’observe attentivement ce qui se passe autour de moi."}, {"id": 101, "dimension": "cognition", "text": "Je réfléchis aux décisions à prendre."}, {"id": 102, "dimension": "cognition", "text": "J’aime comprendre les mécanismes du jeu."}, {"id": 103, "dimension": "cognition", "text": "J’analyse les situations avant d’agir."}, {"id": 104, "dimension": "cognition", "text": "Je cherche à améliorer mes stratégies."}, {"id": 105, "dimension": "cognition", "text": "Je réfléchis à ma progression."}, {"id": 106, "dimension": "motricity", "text": "Je ressens finement mes mouvements."}, {"id": 107, "dimension": "motricity", "text": "Je fais attention à mes appuis."}, {"id": 108, "dimension": "motricity", "text": "Je sens le rythme de mes actions."}, {"id": 109, "dimension": "motricity", "text": "Je ressens les mouvements de mon corps."}, {"id": 110, "dimension": "motricity", "text": "Je m’adapte facilement aux situations motrices."}, {"id": 111, "dimension": "motricity", "text": "Je ressens la fluidité de mes gestes."}, {"id": 112, "dimension": "motricity", "text": "Je suis attentif à mes sensations corporelles."}, {"id": 113, "dimension": "motricity", "text": "Je peux ajuster mes mouvements rapidement."}, {"id": 114, "dimension": "motricity", "text": "Je ressens la coordination de mes gestes."}, {"id": 115, "dimension": "motricity", "text": "Je m’adapte à la dynamique du jeu."}, {"id": 116, "dimension": "motricity", "text": "Je ressens le tempo du mouvement."}, {"id": 117, "dimension": "motricity", "text": "Je peux modifier mon geste en fonction de la situation."}, {"id": 118, "dimension": "motricity", "text": "Je sens la précision de mes mouvements."}, {"id": 119, "dimension": "motricity", "text": "Je ressens l’équilibre de mon corps dans l’action."}, {"id": 120, "dimension": "motricity", "text": "Je m’ajuste facilement dans le mouvement."}, {"id": 121, "dimension": "mbti", "text": "Je gagne de l’énergie quand j’échange avec les autres."}, {"id": 122, "dimension": "mbti", "text": "Je préfère réfléchir seul avant de parler."}, {"id": 123, "dimension": "mbti", "text": "Je fais d’abord confiance aux faits concrets."}, {"id": 124, "dimension": "mbti", "text": "Je repère vite les possibilités et les idées nouvelles."}, {"id": 125, "dimension": "mbti", "text": "Je décide plutôt avec logique et objectivité."}, {"id": 126, "dimension": "mbti", "text": "Je décide en tenant compte d’abord des personnes."}, {"id": 127, "dimension": "mbti", "text": "J’aime planifier et structurer à l’avance."}, {"id": 128, "dimension": "mbti", "text": "Je préfère garder plusieurs options ouvertes."}, {"id": 129, "dimension": "mbti", "text": "Le contact du groupe me stimule."}, {"id": 130, "dimension": "mbti", "text": "Je me ressource dans le calme et le retrait."}, {"id": 131, "dimension": "mbti", "text": "J’aime les repères précis, concrets et observables."}, {"id": 132, "dimension": "mbti", "text": "J’aime imaginer ce qui pourrait être possible."}, {"id": 133, "dimension": "mbti", "text": "Je tranche plus facilement sur des critères rationnels."}, {"id": 134, "dimension": "mbti", "text": "Je tiens compte de l’ambiance et de l’impact relationnel."}, {"id": 135, "dimension": "mbti", "text": "Je suis plus à l’aise quand c’est cadré et décidé."}, {"id": 136, "dimension": "mbti", "text": "Je suis plus à l’aise quand je peux m’adapter au fur et à mesure."}];
const MBTI_TO_MOTOR = {"ISTJ": "D4", "ISTP": "D2", "ESTP": "D1", "ESTJ": "D3", "ISFJ": "G4", "ISFP": "G2", "ESFP": "G1", "ESFJ": "G3", "INFJ": "R4", "INFP": "R2", "ENFP": "R1", "ENFJ": "R3", "INTJ": "C4", "INTP": "C2", "ENTP": "C1", "ENTJ": "C3"};
const MOTOR_DETAILS = {"D1": "Famille D (ST) – verticalité E-P", "D2": "Famille D (ST) – horizontalité I-P", "D3": "Famille D (ST) – horizontalité E-J", "D4": "Famille D (ST) – verticalité I-J", "G1": "Famille G (SF) – verticalité E-P", "G2": "Famille G (SF) – horizontalité I-P", "G3": "Famille G (SF) – horizontalité E-J", "G4": "Famille G (SF) – verticalité I-J", "R1": "Famille R (NF) – verticalité E-P", "R2": "Famille R (NF) – horizontalité I-P", "R3": "Famille R (NF) – horizontalité E-J", "R4": "Famille R (NF) – verticalité I-J", "C1": "Famille C (NT) – verticalité E-P", "C2": "Famille C (NT) – horizontalité I-P", "C3": "Famille C (NT) – horizontalité E-J", "C4": "Famille C (NT) – verticalité I-J"};
const E_IDS = [121,129], I_IDS = [122,130], S_IDS = [123,131], N_IDS = [124,132], T_IDS = [125,133], F_IDS = [126,134], J_IDS = [127,135], P_IDS = [128,136];
const scaleLabels = {1:'Jamais',2:'Rarement',3:'Parfois',4:'Souvent',5:'Toujours'};
let currentIndex = 0;
let answers = {};

const els = {
  startBtn: document.getElementById('startBtn'),
  demoBtn: document.getElementById('demoBtn'),
  metaCard: document.getElementById('metaCard'),
  testCard: document.getElementById('testCard'),
  resultsCard: document.getElementById('resultsCard'),
  questionCounter: document.getElementById('questionCounter'),
  dimensionBadge: document.getElementById('dimensionBadge'),
  questionText: document.getElementById('questionText'),
  scale: document.getElementById('scale'),
  progressBar: document.getElementById('progressBar'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  saveBtn: document.getElementById('saveBtn'),
  athleteName: document.getElementById('athleteName'),
  athleteSport: document.getElementById('athleteSport'),
  athleteAge: document.getElementById('athleteAge'),
  assessmentDate: document.getElementById('assessmentDate'),
  athleteClub: document.getElementById('athleteClub'),
  assessorName: document.getElementById('assessorName'),
  consentBox: document.getElementById('consentBox'),
  identityLine: document.getElementById('identityLine'),
  mbtiTypeLine: document.getElementById('mbtiTypeLine'),
  motorCodeLine: document.getElementById('motorCodeLine'),
  motorExplain: document.getElementById('motorExplain'),
  mainProfile: document.getElementById('mainProfile'),
  secondaryProfile: document.getElementById('secondaryProfile'),
  tertiaryProfile: document.getElementById('tertiaryProfile'),
  summaryText: document.getElementById('summaryText'),
  portraitText: document.getElementById('portraitText'),
  strengthsText: document.getElementById('strengthsText'),
  pressureText: document.getElementById('pressureText'),
  learningText: document.getElementById('learningText'),
  progressText: document.getElementById('progressText'),
  planText: document.getElementById('planText'),
  playerText: document.getElementById('playerText'),
  parentText: document.getElementById('parentText'),
  coachText: document.getElementById('coachText'),
  motorText: document.getElementById('motorText'),
  scoreGrid: document.getElementById('scoreGrid'),
  preferenceGrid: document.getElementById('preferenceGrid'),
  radarCanvas: document.getElementById('radarCanvas'),
  exportJsonBtn: document.getElementById('exportJsonBtn'),
  printBtn: document.getElementById('printBtn'),
  restartBtn: document.getElementById('restartBtn')
};

function init() {
  const saved = JSON.parse(localStorage.getItem('pmp_a4p_live_ready_final') || '{}');
  answers = saved.answers || {};
  currentIndex = saved.currentIndex || 0;
  if (!els.assessmentDate.value) els.assessmentDate.value = new Date().toISOString().slice(0,10);
  if (saved.meta) {
    els.athleteName.value = saved.meta.name || '';
    els.athleteSport.value = saved.meta.sport || '';
    els.athleteAge.value = saved.meta.age || '';
    els.assessmentDate.value = saved.meta.date || els.assessmentDate.value;
    els.athleteClub.value = saved.meta.club || '';
    els.assessorName.value = saved.meta.assessor || '';
    els.consentBox.checked = !!saved.meta.consent;
  }
  attachEvents();
}
function meta() {
  return {
    name: els.athleteName.value || '',
    sport: els.athleteSport.value || '',
    age: els.athleteAge.value || '',
    date: els.assessmentDate.value || '',
    club: els.athleteClub.value || '',
    assessor: els.assessorName.value || '',
    consent: els.consentBox.checked
  };
}
function saveState() {
  localStorage.setItem('pmp_a4p_live_ready_final', JSON.stringify({answers, currentIndex, meta: meta()}));
}
function attachEvents() {
  els.startBtn.addEventListener('click', startTest);
  els.demoBtn.addEventListener('click', loadDemo);
  els.saveBtn.addEventListener('click', () => { saveState(); alert('Progression sauvegardée sur cet appareil.'); });
  [els.athleteName, els.athleteSport, els.athleteAge, els.assessmentDate, els.athleteClub, els.assessorName, els.consentBox].forEach(el => {
    el.addEventListener('input', saveState);
    el.addEventListener('change', saveState);
  });
  els.prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; saveState(); renderQuestion(); } });
  els.nextBtn.addEventListener('click', () => {
    const q = QUESTIONS[currentIndex];
    if (!answers[q.id]) { alert('Sélectionne une réponse pour continuer.'); return; }
    if (currentIndex < QUESTIONS.length - 1) { currentIndex++; saveState(); renderQuestion(); } else { showResults(); }
  });
  els.exportJsonBtn.addEventListener('click', exportJSON);
  els.printBtn.addEventListener('click', () => window.print());
  els.restartBtn.addEventListener('click', restart);
}
function startTest() {
  if (!els.consentBox.checked) { alert("Coche d'abord la case de confirmation d’usage."); return; }
  els.metaCard.classList.remove('hidden');
  els.testCard.classList.remove('hidden');
  els.resultsCard.classList.add('hidden');
  renderQuestion();
  window.scrollTo({top: els.testCard.offsetTop - 12, behavior:'smooth'});
}
function loadDemo() {
  answers = {};
  QUESTIONS.forEach(q => {
    const baseMap = {activation:4, attention:4, regulation:3, engagement:5, confidence:4, resilience:4, cognition:4, motricity:4, mbti:4};
    const base = baseMap[q.dimension] || 4;
    answers[q.id] = Math.max(1, Math.min(5, base + (q.id % 5 === 0 ? -1 : 0)));
  });
  [121,124,126,128,129,132,134,136].forEach(id => answers[id] = 5);
  [122,123,125,127,130,131,133,135].forEach(id => answers[id] = 2);
  els.consentBox.checked = true;
  showResults();
}
function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  els.questionCounter.textContent = `Question ${currentIndex + 1} / ${QUESTIONS.length}`;
  els.dimensionBadge.textContent = q.dimension.charAt(0).toUpperCase() + q.dimension.slice(1);
  els.questionText.textContent = q.text;
  els.progressBar.style.width = `${(currentIndex / QUESTIONS.length) * 100}%`;
  els.scale.innerHTML = '';
  for (let score = 1; score <= 5; score++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = answers[q.id] === score ? 'active' : '';
    btn.innerHTML = `<div>${score}</div><small>${scaleLabels[score]}</small>`;
    btn.addEventListener('click', () => { answers[q.id] = score; saveState(); renderQuestion(); });
    els.scale.appendChild(btn);
  }
  els.prevBtn.disabled = currentIndex === 0;
  els.nextBtn.textContent = currentIndex === QUESTIONS.length - 1 ? 'Voir mes résultats' : 'Suivant';
}
function avg(ids) {
  let total = 0, count = 0;
  ids.forEach(id => {
    const v = Number(answers[id] || 0);
    if (!v) return;
    total += v;
    count += 1;
  });
  return count ? Math.round((total / (count * 5)) * 100) : 0;
}
function ids(start, end) { const out = []; for (let i = start; i <= end; i++) out.push(i); return out; }
function computeScores() {
  const d = {
    activation: avg(ids(1,15)),
    attention: avg(ids(16,30)),
    regulation: avg(ids(31,45)),
    engagement: avg(ids(46,60)),
    confidence: avg(ids(61,75)),
    resilience: avg(ids(76,90)),
    cognition: avg(ids(91,105)),
    motricity: avg(ids(106,120))
  };
  const axes = { E: avg(E_IDS), I: avg(I_IDS), S: avg(S_IDS), N: avg(N_IDS), T: avg(T_IDS), F: avg(F_IDS), J: avg(J_IDS), P: avg(P_IDS) };
  const mbtiType = `${axes.E >= axes.I ? 'E':'I'}${axes.S >= axes.N ? 'S':'N'}${axes.T >= axes.F ? 'T':'F'}${axes.J >= axes.P ? 'J':'P'}`;
  const motorCode = MBTI_TO_MOTOR[mbtiType] || '—';
  return {dimensions:d, axes, mbtiType, motorCode};
}
function computeProfiles(d) {
  return [
    {name:'Compétiteur', score:d.activation*0.4 + d.engagement*0.35 + d.confidence*0.25},
    {name:'Stratège', score:d.attention*0.4 + d.cognition*0.35 + d.regulation*0.25},
    {name:'Créatif', score:d.cognition*0.4 + d.activation*0.3 + d.engagement*0.3},
    {name:'Régulateur', score:d.regulation*0.5 + d.attention*0.3 + d.resilience*0.2},
    {name:'Endurant', score:d.engagement*0.45 + d.resilience*0.35 + d.confidence*0.2},
    {name:'Méthodique', score:d.attention*0.4 + d.engagement*0.3 + d.cognition*0.3}
  ].sort((a,b)=>b.score-a.score).slice(0,3);
}
function dimLabel(key) {
  return {activation:'activation mentale', attention:'stabilité attentionnelle', regulation:'régulation émotionnelle', engagement:'engagement', confidence:'confiance', resilience:'résilience', cognition:'capacité d’analyse', motricity:'intelligence motrice'}[key] || key;
}
function topKey(d, reverse=false) { return Object.entries(d).sort((a,b)=> reverse ? a[1]-b[1] : b[1]-a[1])[0][0]; }
function scoreLevel(v) { if(v >= 80) return 'très élevée'; if(v >= 70) return 'élevée'; if(v >= 60) return 'plutôt solide'; if(v >= 50) return 'intermédiaire'; return 'sensible'; }

function buildSummary(d, profiles) {
  const best = topKey(d), weakest = topKey(d, true);
  return `Ce profil met en évidence une organisation mentale dominante orientée vers ${profiles[0].name.toLowerCase()}, avec des composantes secondaires ${profiles[1].name.toLowerCase()} et ${profiles[2].name.toLowerCase()}.

Les résultats indiquent une activation mentale à ${d.activation}%, une attention à ${d.attention}%, une régulation émotionnelle à ${d.regulation}%, un engagement à ${d.engagement}%, une confiance à ${d.confidence}% et une résilience à ${d.resilience}%.

La dimension actuellement la plus installée semble être la ${dimLabel(best)}. Elle constitue un point d’appui naturel sur lequel la personne peut déjà s’appuyer pour performer, progresser et retrouver une forme de stabilité dans l’action.

À l’inverse, l’axe le plus sensible du moment se situe autour de la ${dimLabel(weakest)}. Cela ne traduit pas un manque de valeur, mais plutôt une zone dans laquelle la personne gagnerait à mettre davantage d’outils, de conscience et de régularité.

Dans l’ensemble, ce profil évoque une personne qui dispose de vraies ressources mentales et dont le développement peut encore être significativement renforcé par un travail ciblé, structuré et cohérent avec sa manière naturelle de fonctionner.`;
}
function buildPortrait(d, profiles) {
  const best = topKey(d), weakest = topKey(d, true);
  return `Chaque personne possède une manière particulière d’entrer dans l’action, de vivre la pression, d’interpréter les événements et de rebondir après une difficulté. Ce profil mental permet de mieux comprendre cette organisation intérieure.

Le profil principal ${profiles[0].name} suggère un fonctionnement dans lequel certaines ressources prennent naturellement le dessus. Cela peut concerner l’élan d’action, la capacité d’analyse, la gestion émotionnelle, la persévérance ou encore la structure de fonctionnement. Les profils secondaire et tertiaire viennent nuancer cette lecture et montrent que le fonctionnement réel est plus riche qu’une simple étiquette.

Dans ce rapport, la ${dimLabel(best)} apparaît comme ${scoreLevel(d[best])}. Cela signifie qu’en situation ordinaire, cette dimension sert souvent de point d’appui naturel. La personne a tendance à s’y reconnecter plus spontanément, à s’y sentir plus compétente et à l’utiliser comme levier pour avancer.

La ${dimLabel(weakest)} apparaît davantage comme une zone de fragilité relative. Dans certaines situations, notamment en contexte de fatigue, d’enjeu ou de perturbation, cette dimension peut devenir moins stable. C’est souvent là que se logent les écarts entre le niveau réellement possédé et la qualité de performance exprimée.

Ce portrait ne doit pas être lu comme une photographie figée. Il s’agit plutôt d’une carte de fonctionnement. Plus la personne comprend sa carte, plus elle peut apprendre à utiliser ses forces de manière consciente et à renforcer les zones qui demandent encore de la maturation.`;
}
function buildStrengths(d) {
  const parts = [];
  parts.push(`Plusieurs forces mentales ressortent de manière claire dans ce profil.`);
  if (d.engagement >= 70) parts.push(`La première concerne l’engagement. Le niveau observé indique une capacité réelle à s’investir, à poursuivre un objectif et à rester en mouvement même lorsque la situation devient exigeante. Cette force soutient la progression sur le long terme et favorise une vraie continuité dans l’effort.`);
  else parts.push(`L’engagement constitue déjà une base intéressante. Même s’il peut encore gagner en stabilité, il montre que la personne dispose de ressources pour se mobiliser lorsqu’un objectif prend du sens.`);
  if (d.attention >= 70) parts.push(`La seconde force réside dans l’attention. La personne semble capable de rester présente dans l’action, de repérer ce qui compte et de limiter l’impact des éléments secondaires. Cette stabilité attentionnelle est précieuse dans toutes les situations où la précision, le timing et la qualité de décision sont déterminants.`);
  else parts.push(`L’attention présente des ressources réelles. Même si elle peut encore être renforcée dans les contextes les plus intenses, elle constitue déjà un point d’appui sur lequel construire un travail de concentration plus avancé.`);
  if (d.regulation >= 70) parts.push(`Une autre force importante concerne la régulation émotionnelle. La personne paraît capable de ne pas se laisser entièrement envahir par ses émotions et de retrouver, après un événement perturbateur, une forme de disponibilité mentale compatible avec la performance.`);
  else parts.push(`La régulation émotionnelle montre des éléments positifs. La personne semble pouvoir retrouver un certain équilibre, même si cette capacité peut varier selon l’intensité de l’enjeu ou la nature de l’événement vécu.`);
  if (d.confidence >= 70) parts.push(`La confiance constitue également un levier majeur. Lorsqu’elle est suffisamment installée, elle facilite l’initiative, la qualité d’engagement dans l’action et la capacité à assumer pleinement ses choix.`);
  else parts.push(`La confiance dispose de bases présentes, mais peut encore être consolidée pour soutenir davantage la liberté d’action et la solidité mentale dans les moments d’incertitude.`);
  return parts.join("\\n\\n");
}
function buildPressure(d) {
  const parts = [];
  parts.push(`Le fonctionnement sous pression constitue un indicateur majeur de performance mentale, car c’est souvent dans les moments d’enjeu que les écarts apparaissent entre le potentiel et son expression réelle.`);
  if (d.activation >= 70) parts.push(`Ici, l’activation mentale semble plutôt bien mobilisée. La personne paraît capable de se mettre en énergie lorsque le contexte l’exige. Cela représente un avantage important, à condition que cette intensité reste suffisamment ajustée pour ne pas créer de précipitation ou de tension excessive.`);
  else parts.push(`Le niveau d’activation observé suggère qu’il peut être utile d’apprendre à mieux mobiliser l’énergie dans les moments importants. Cela ne signifie pas un manque d’envie, mais plutôt un besoin de mieux préparer l’entrée dans l’action.`);
  if (d.regulation >= 70) parts.push(`La régulation émotionnelle laisse penser que la personne peut, dans une certaine mesure, absorber la pression sans perdre complètement sa lucidité. Elle semble pouvoir transformer une partie de la tension en présence et en adaptation.`);
  else parts.push(`La régulation émotionnelle montre qu’en situation de pression, certaines émotions peuvent parfois prendre beaucoup de place. L’enjeu du travail mental sera alors de raccourcir le temps nécessaire pour revenir à un état interne plus stable.`);
  if (d.attention >= 70) parts.push(`L’attention apparaît comme un facteur protecteur dans les moments d’enjeu. Elle permet de rester focalisé sur la tâche et de ne pas se laisser disperser trop facilement par ce qui se passe autour ou dans le dialogue interne.`);
  else parts.push(`L’attention semble plus vulnérable lorsqu’une perturbation survient. Cela signifie que la pression peut parfois déplacer la personne hors du moment présent, d’où l’importance d’installer des routines de recentrage simples et efficaces.`);
  return parts.join("\\n\\n");
}
function buildLearning(d) {
  const parts = [];
  parts.push(`Le profil d’apprentissage décrit la manière dont la personne intègre le mieux les informations et transforme l’expérience en progression.`);
  if (d.cognition >= 70) parts.push(`La cognition apparaît ici comme ${scoreLevel(d.cognition)}. La personne semble apprécier le fait de comprendre, d’analyser et de donner du sens à ce qu’elle fait. Elle progresse probablement davantage lorsqu’elle perçoit la logique, l’objectif et l’utilité de l’exercice ou de la situation proposée.`);
  else parts.push(`La cognition montre des ressources présentes mais encore perfectibles. Il peut être utile de renforcer les temps d’analyse, de débrief ou de mise en mots afin de transformer davantage les situations vécues en apprentissages conscients.`);
  if (d.motricity >= 70) parts.push(`La motricité est également un indicateur important. Lorsqu’elle ressort à un niveau solide, cela signifie que la personne dispose d’une bonne sensibilité au mouvement, aux appuis, au rythme ou aux ajustements. Cette compétence favorise souvent une progression plus fine et plus incarnée.`);
  else parts.push(`La motricité peut encore être davantage exploitée. Un travail plus centré sur les sensations, les appuis, le tempo ou la perception du geste pourrait enrichir l’apprentissage et rendre l’intégration plus stable.`);
  parts.push(`Dans la pratique, ce profil gagnera probablement à bénéficier d’une pédagogie qui articule compréhension, mise en situation, ressenti et retour d’expérience, plutôt qu’une simple accumulation d’instructions techniques.`);
  return parts.join("\\n\\n");
}
function buildProgress(d) {
  const parts = [];
  parts.push(`Les axes de progression mis en évidence dans ce rapport ne doivent pas être interprétés comme des faiblesses. Ils indiquent simplement les zones dans lesquelles un travail ciblé pourrait produire les gains les plus significatifs.`);
  if (d.attention < 70) parts.push(`La première priorité concerne la stabilité attentionnelle. Dans les moments d’enjeu, après une erreur ou lorsqu’un élément perturbateur survient, la personne peut parfois mettre un peu de temps à revenir pleinement à ce qui compte. L’objectif du travail sera de raccourcir ce temps de retour.`);
  if (d.regulation < 70) parts.push(`La deuxième priorité concerne la régulation émotionnelle. Certaines émotions peuvent momentanément prendre de la place, brouiller la lecture de la situation ou affecter la qualité d’exécution. Le développement d’outils de retour au calme et de récupération mentale sera particulièrement utile.`);
  if (d.confidence < 70) parts.push(`La troisième piste de progression concerne la confiance. Il s’agira moins de “se convaincre” artificiellement que de consolider la perception des ressources, de mieux lire ses réussites et de transformer les doutes en informations exploitables.`);
  if (d.activation < 70) parts.push(`Le niveau d’activation mentale constitue également un axe intéressant. Apprendre à monter plus vite en énergie ou, au contraire, à éviter la sous-mobilisation avant l’action peut améliorer la qualité d’entrée dans les situations importantes.`);
  if (parts.length === 1) parts.push(`Les axes de progression sont ici plus subtils : il s’agit surtout de renforcer la régularité, de stabiliser les acquis et de maintenir les ressources mentales à un niveau accessible même dans les moments de forte intensité.`);
  return parts.join("\\n\\n");
}
function buildPlan() {
  return `Le plan de progression mentale proposé repose sur plusieurs leviers complémentaires.

Le premier vise l’installation de routines de concentration avant les moments importants : respiration, mot-clé, focus visuel, intention simple. L’objectif est de créer une entrée en action plus stable et plus reproductible.

Le deuxième levier concerne la gestion de l’erreur. Il s’agira d’apprendre à reconnaître rapidement ce qui s’est passé, à éviter de s’enfermer dans la rumination, puis à repartir avec une consigne claire et immédiatement mobilisable.

Le troisième axe porte sur l’ajustement du niveau d’énergie mentale. Des exercices de respiration, de préparation et de récupération permettront de mieux réguler l’intensité intérieure selon les besoins de la situation.

Enfin, la progression devra tendre vers l’autonomie. Le vrai objectif du travail mental n’est pas seulement d’aller mieux dans le moment, mais de permettre à la personne de connaître suffisamment son fonctionnement pour utiliser elle-même, au bon moment, les outils qui lui correspondent.`;
}
function buildPlayer(profiles) {
  return `Pour la personne qui passe ce test, le message principal est le suivant : ce profil ne dit pas seulement “ce qui va” ou “ce qui ne va pas”. Il montre surtout comment tu fonctionnes aujourd’hui, quelles sont tes ressources naturelles, et dans quelles situations tu risques de te décaler de toi-même.

Le fait d’avoir un profil principal ${profiles[0].name.toLowerCase()} n’est pas une case dans laquelle tu serais enfermé. C’est plutôt une tendance dominante, une manière assez naturelle pour toi d’entrer dans l’action, de réagir et d’utiliser tes ressources.

Plus tu comprendras cette logique, plus tu pourras progresser intelligemment. Le mental ne consiste pas à devenir quelqu’un d’autre. Il consiste à apprendre à mieux utiliser ce que tu es déjà, tout en développant ce qui te manque encore pour devenir plus stable, plus libre et plus régulier.`;
}
function buildParent() {
  return `Pour les parents, ce rapport a d’abord une fonction de compréhension. Il permet de mieux voir comment le jeune vit les situations d’enjeu, comment il peut réagir à l’erreur, et quelles ressources mentales sont déjà présentes chez lui.

L’accompagnement parental n’a pas pour objectif de tout corriger. Il vise surtout à créer un environnement qui sécurise, encourage et valorise le processus de progression. Lorsqu’un jeune sent qu’il peut apprendre sans être réduit à son résultat, sa confiance et son autonomie se construisent de manière beaucoup plus solide.

Ce rapport peut donc servir de support de dialogue : pour comprendre ce qui aide le jeune, ce qui le fragilise, et comment l’entourage peut soutenir sa progression sans ajouter de pression inutile.`;
}
function buildCoach() {
  return `Pour l’entraîneur ou le coach, ce rapport offre plusieurs repères d’ajustement. Il ne s’agit pas de changer complètement sa pédagogie, mais d’affiner la manière de communiquer, de débriefer et de proposer les situations d’apprentissage.

Certains profils ont besoin de comprendre avant de s’engager pleinement. D’autres ont besoin de sentir, d’expérimenter ou d’être mis rapidement dans l’action. Certains réagissent bien au défi, d’autres ont besoin d’un cadre plus sécurisant pour exprimer leur potentiel.

Ce profil peut donc aider à ajuster le niveau de cadrage, le type de feedback, le rythme du débrief et la nature des routines à mettre en place. À terme, cela permet souvent de rendre l’apprentissage plus efficace et la performance plus régulière.`;
}
function buildMotor(type, code) {
  return `La ligne MBTI inspiré → préférence motrice a été intégrée ici comme support de lecture complémentaire pour le rendez-vous de débrief.

La traduction obtenue dans ce rapport est la suivante : ${type} → ${code}. Cette correspondance n’est pas destinée à se substituer au reste du rapport, mais à enrichir l’analyse individuelle, notamment lorsqu’il s’agit de parler de style moteur, de pédagogie, de ressenti du geste et de conditions d’apprentissage.

${MOTOR_DETAILS[code] ? 'Dans cette lecture, ' + MOTOR_DETAILS[code] + '.' : ''}

L’intérêt de cette ligne est surtout pratique : elle fournit une base commune pour parler de motricité, d’ajustement pédagogique et de cohérence entre fonctionnement cognitif et manière d’entrer dans le mouvement.`;
}
function renderScoreGrid(d) {
  els.scoreGrid.innerHTML = '';
  const labels = {activation:'Activation', attention:'Attention', regulation:'Régulation', engagement:'Engagement', confidence:'Confiance', resilience:'Résilience'};
  Object.keys(labels).forEach(key => {
    const val = d[key];
    const card = document.createElement('div');
    card.className = 'score-card';
    card.innerHTML = `<div class="name">${labels[key]}</div><div class="value">${val}</div><div class="meter"><span style="width:${val}%"></span></div>`;
    els.scoreGrid.appendChild(card);
  });
}
function renderPreferenceGrid(axes, type, code, d) {
  els.preferenceGrid.innerHTML = '';
  const items = [
    ['E', axes.E], ['I', axes.I], ['S', axes.S], ['N', axes.N],
    ['T', axes.T], ['F', axes.F], ['J', axes.J], ['P', axes.P],
    ['Type inspiré', type], ['Préférence motrice', code],
    ['Cognition', d.cognition], ['Motricité', d.motricity]
  ];
  items.forEach(([label, val]) => {
    const card = document.createElement('div');
    card.className = 'score-card';
    const meter = typeof val === 'number' ? `<div class="meter"><span style="width:${val}%"></span></div>` : '';
    card.innerHTML = `<div class="name">${label}</div><div class="value">${val}</div>${meter}`;
    els.preferenceGrid.appendChild(card);
  });
}
function drawRadar(d) {
  const canvas = els.radarCanvas, ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);
  const cx = w/2, cy = h/2, radius = Math.min(w,h)*0.33;
  const labels = ['Activation','Attention','Régulation','Engagement','Confiance','Résilience'];
  const vals = [d.activation,d.attention,d.regulation,d.engagement,d.confidence,d.resilience];
  const n = labels.length;
  for(let level=1; level<=5; level++) {
    const r = radius * (level/5);
    ctx.beginPath();
    for(let i=0;i<n;i++) {
      const a = (-Math.PI/2)+(i*2*Math.PI/n), x = cx + Math.cos(a)*r, y = cy + Math.sin(a)*r;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.closePath(); ctx.strokeStyle='rgba(130,157,212,0.25)'; ctx.lineWidth=1; ctx.stroke();
  }
  for(let i=0;i<n;i++) {
    const a = (-Math.PI/2)+(i*2*Math.PI/n), x = cx + Math.cos(a)*radius, y = cy + Math.sin(a)*radius;
    ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(x,y); ctx.strokeStyle='rgba(130,157,212,0.35)'; ctx.stroke();
    const lx = cx + Math.cos(a)*(radius+44), ly = cy + Math.sin(a)*(radius+44);
    ctx.fillStyle='#eef4ff'; ctx.font='600 16px Arial';
    ctx.textAlign = lx<cx-10?'right':lx>cx+10?'left':'center';
    ctx.textBaseline = ly<cy?'bottom':'top';
    ctx.fillText(labels[i], lx, ly);
  }
  ctx.beginPath();
  vals.forEach((val,i) => {
    const a = (-Math.PI/2)+(i*2*Math.PI/n), r = radius*(val/100), x = cx + Math.cos(a)*r, y = cy + Math.sin(a)*r;
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.closePath(); ctx.fillStyle='rgba(121,167,255,0.18)'; ctx.strokeStyle='rgba(212,227,255,0.95)'; ctx.lineWidth=3; ctx.fill(); ctx.stroke();
  vals.forEach((val,i) => {
    const a = (-Math.PI/2)+(i*2*Math.PI/n), r = radius*(val/100), x = cx + Math.cos(a)*r, y = cy + Math.sin(a)*r;
    ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.fillStyle='#d4e3ff'; ctx.fill();
  });
}
function showResults() {
  const unanswered = QUESTIONS.filter(q => !answers[q.id]);
  if(unanswered.length) {
    const ok = confirm(`Il reste ${unanswered.length} question(s) sans réponse. Les calculs seront faits uniquement sur les questions répondues. Continuer ?`);
    if(!ok) return;
  }
  saveState();
  const scores = computeScores(), profiles = computeProfiles(scores.dimensions), m = meta();
  els.identityLine.textContent = [m.name || 'Sportif', m.sport || 'Sport non renseigné', m.age ? `${m.age} ans` : '', m.club || '', m.date || ''].filter(Boolean).join(' · ');
  els.mbtiTypeLine.textContent = scores.mbtiType;
  els.motorCodeLine.textContent = scores.motorCode;
  els.motorExplain.textContent = `${scores.mbtiType} → ${scores.motorCode} • ${MOTOR_DETAILS[scores.motorCode] || ''}`;
  els.mainProfile.textContent = profiles[0].name;
  els.secondaryProfile.textContent = profiles[1].name;
  els.tertiaryProfile.textContent = profiles[2].name;
  els.summaryText.textContent = buildSummary(scores.dimensions, profiles);
  els.portraitText.textContent = buildPortrait(scores.dimensions, profiles);
  els.strengthsText.textContent = buildStrengths(scores.dimensions);
  els.pressureText.textContent = buildPressure(scores.dimensions);
  els.learningText.textContent = buildLearning(scores.dimensions);
  els.progressText.textContent = buildProgress(scores.dimensions);
  els.planText.textContent = buildPlan();
  els.playerText.textContent = buildPlayer(profiles);
  els.parentText.textContent = buildParent();
  els.coachText.textContent = buildCoach();
  els.motorText.textContent = buildMotor(scores.mbtiType, scores.motorCode);
  renderScoreGrid(scores.dimensions);
  renderPreferenceGrid(scores.axes, scores.mbtiType, scores.motorCode, scores.dimensions);
  drawRadar(scores.dimensions);
  els.resultsCard.classList.remove('hidden');
  els.testCard.classList.add('hidden');
  window.scrollTo({top: els.resultsCard.offsetTop - 12, behavior:'smooth'});
}
function exportJSON() {
  const payload = {meta: meta(), answers, analysis: computeScores()};
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'pmp_a4p_resultats.json';
  a.click();
  URL.revokeObjectURL(a.href);
}
function restart() {
  if(!confirm('Recommencer le test ? Les réponses seront effacées.')) return;
  answers = {}; currentIndex = 0;
  localStorage.removeItem('pmp_a4p_live_ready_final');
  els.resultsCard.classList.add('hidden');
  els.metaCard.classList.remove('hidden');
  els.testCard.classList.remove('hidden');
  renderQuestion();
}
init();
