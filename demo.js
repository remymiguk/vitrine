/* vt-questionnaire demo. No framework: plain DOM. Event data is only ever written with textContent. */
(function () {
  'use strict';

  var q = document.getElementById('q');
  var out = document.getElementById('out');
  var statusEl = document.getElementById('status');
  var logEl = document.getElementById('log');
  var $ = function (id) { return document.getElementById(id); };

  // ---- the questions, in English and French ----
  var TEXT = {
    en: {
      renderer: ['How do you render?', 'Pick the approach that fits your app. In the full variant your choice moves on by itself.', 'Rendering'],
      components: ['Which components do you need?', 'Choose at least one. Pick as many as you like.', 'Components'],
      project: ['Name your project', 'A short slug: lowercase letters, digits and hyphens, 3 to 30 characters.', 'Project'],
      email: ['Contact email', 'Optional. Used only for this demo.', 'Email'],
      tags: ['Tag your project', 'Optional. Type a tag and press Enter, or skip this step.', 'Tags'],
      start: ['When do you start?', 'Optional. Pick the day you plan to start building.', 'Start'],
      source: ['How did you hear about it?', 'Pick one.', 'Discovery'],
      comment: ['Anything to add?', 'Optional comment.', 'Comment']
    },
    fr: {
      renderer: ['Comment affichez-vous vos pages ?', 'Choisissez l’approche qui convient. Dans la variante full, le choix passe tout seul à la suite.', 'Rendu'],
      components: ['De quels composants avez-vous besoin ?', 'Choisissez-en au moins un, autant que vous voulez.', 'Composants'],
      project: ['Nommez votre projet', 'Un identifiant court : minuscules, chiffres et tirets, de 3 à 30 caractères.', 'Projet'],
      email: ['E-mail de contact', 'Facultatif. Utilisé uniquement pour cette démo.', 'E-mail'],
      tags: ['Étiquetez votre projet', 'Facultatif. Saisissez une étiquette et appuyez sur Entrée, ou passez.', 'Étiquettes'],
      start: ['Quand commencez-vous ?', 'Facultatif. Choisissez le jour où vous pensez commencer.', 'Début'],
      source: ['Comment l’avez-vous découvert ?', 'Choisissez-en un.', 'Découverte'],
      comment: ['Quelque chose à ajouter ?', 'Commentaire facultatif.', 'Commentaire']
    }
  };

  // [value, en label, en description, fr label, fr description]
  var RENDERERS = [
    ['html', 'Plain HTML', 'A script tag and some markup. No build step.', 'HTML simple', 'Une balise script et du balisage. Aucune étape de build.'],
    ['react', 'React', 'Vitrine elements inside JSX components.', 'React', 'Des éléments Vitrine dans des composants JSX.'],
    ['vue', 'Vue', 'Elements in templates, events with v-on.', 'Vue', 'Des éléments dans les templates, événements avec v-on.'],
    ['leptos', 'Leptos (Rust)', 'Rust compiled to WebAssembly, rendered in the browser.', 'Leptos (Rust)', 'Du Rust compilé en WebAssembly, rendu dans le navigateur.'],
    ['unsure', 'Not sure yet', 'Still choosing. Every option works with Vitrine.', 'Pas encore sûr', 'Je choisis encore. Chaque option fonctionne avec Vitrine.']
  ];
  // [value, group en, group fr, en label, en description, fr label, fr description]
  var COMPONENTS = [
    ['code', 'Code & config', 'Code et configuration', 'Code blocks', 'Highlighted source with line numbers.', 'Blocs de code', 'Source colorée avec numéros de ligne.'],
    ['diff', 'Code & config', 'Code et configuration', 'Diffs', 'Compare two versions of a text.', 'Diffs', 'Comparer deux versions d’un texte.'],
    ['table', 'Data', 'Données', 'Tables', 'Sortable, filterable rows from CSV or JSON.', 'Tableaux', 'Lignes triables et filtrables depuis CSV ou JSON.'],
    ['chart', 'Data', 'Données', 'Charts', 'Line, area, bar and donut.', 'Graphiques', 'Courbes, aires, barres et anneaux.'],
    ['markdown', 'Docs', 'Documentation', 'Markdown', 'Prose rendered from plain text.', 'Markdown', 'Du texte mis en forme depuis du texte brut.'],
    ['faq', 'Docs', 'Documentation', 'FAQ', 'Folding questions and answers.', 'FAQ', 'Questions et réponses dépliables.'],
    ['fields', 'Inputs', 'Saisie', 'Fields', 'Text, select, range and switch inputs.', 'Champs', 'Texte, liste, curseur et interrupteur.'],
    ['tags', 'Inputs', 'Saisie', 'Tags and dates', 'Tag lists and date pickers.', 'Étiquettes et dates', 'Listes d’étiquettes et sélecteurs de date.'],
    ['timeline', 'Planning', 'Planification', 'Timelines', 'Roadmaps and schedules.', 'Chronologies', 'Feuilles de route et calendriers.']
  ];
  var SOURCES = [
    ['search', 'A web search', 'I was looking for web components.', 'Une recherche web', 'Je cherchais des composants web.'],
    ['friend', 'A colleague', 'Someone on my team mentioned it.', 'Un collègue', 'Quelqu’un de mon équipe m’en a parlé.'],
    ['repo', 'A code repository', 'I found it while reading source.', 'Un dépôt de code', 'Je l’ai trouvé en lisant du code.'],
    ['social', 'A social post', 'It showed up in my feed.', 'Une publication', 'Il est apparu dans mon fil.'],
    ['other', 'Somewhere else', 'None of the above.', 'Ailleurs', 'Aucune de ces réponses.']
  ];

  function buildQuestions(lang) {
    var fr = lang === 'fr';
    var t = TEXT[lang] || TEXT.en;
    function head(id, extra) {
      var o = { id: id, label: t[id][0], hint: t[id][1], short: t[id][2] };
      for (var k in extra) o[k] = extra[k];
      return o;
    }
    return [
      head('renderer', {
        type: 'single', required: true,
        options: RENDERERS.map(function (r) {
          return { value: r[0], label: fr ? r[3] : r[1], description: fr ? r[4] : r[2] };
        })
      }),
      head('components', {
        type: 'multiple', required: true, min: 1,
        options: COMPONENTS.map(function (c) {
          return { value: c[0], group: fr ? c[2] : c[1], label: fr ? c[5] : c[3], description: fr ? c[6] : c[4] };
        })
      }),
      head('project', {
        type: 'text', required: true, pattern: '^[a-z][a-z0-9-]{2,29}$', placeholder: 'my-project'
      }),
      head('email', { type: 'email', placeholder: 'you@example.com' }),
      head('tags', { type: 'tags', max: 8, placeholder: fr ? 'ajouter une étiquette' : 'add a tag' }),
      head('start', { type: 'date' }),
      head('source', {
        type: 'single', required: true,
        options: SOURCES.map(function (s) {
          return { value: s[0], label: fr ? s[3] : s[1], description: fr ? s[4] : s[2] };
        })
      }),
      head('comment', { type: 'textarea', maxLength: 300 })
    ];
  }

  // ---- JSON panel, status and log ----
  function show(value) {
    out.content = JSON.stringify(value || {}, null, 2);
  }
  function setStatus(state) {
    statusEl.dataset.state = state;
    var fr = q.getAttribute('lang-ui') === 'fr';
    statusEl.textContent = state === 'submitted' ? (fr ? 'Envoyé' : 'Submitted') : (fr ? 'Brouillon' : 'Draft');
  }

  var LOG_MAX = 8;
  var seq = 0;
  function log(type, detail) {
    var empty = logEl.querySelector('.empty');
    if (empty) empty.remove();
    var li = document.createElement('li');
    var n = document.createElement('span');
    n.className = 'n';
    n.textContent = '#' + (++seq);
    var name = document.createElement('span');
    name.className = 'ev ev-' + type.replace('vt-', '');
    name.textContent = type;
    var d = document.createElement('code');
    var text;
    try { text = JSON.stringify(detail); } catch (e) { text = String(detail); }
    if (text && text.length > 160) text = text.slice(0, 157) + '...';
    d.textContent = text || '';
    li.append(n, name, d);
    logEl.prepend(li);
    while (logEl.children.length > LOG_MAX) logEl.lastElementChild.remove();
  }

  q.addEventListener('vt-step', function (e) { log('vt-step', e.detail); });
  q.addEventListener('vt-change', function (e) {
    log('vt-change', e.detail);
    setStatus('draft');
    show(q.value);
  });
  q.addEventListener('vt-submit', function (e) {
    log('vt-submit', e.detail);
    show(e.detail && e.detail.value);
    setStatus('submitted');
  });

  // ---- controls ----
  function setBool(name, on) {
    q.setAttribute(name, on ? '' : 'false');
  }
  function applyControls() {
    q.setAttribute('variant', $('c-variant').value);
    q.setAttribute('layout', $('c-layout').value);
    q.setAttribute('progress', $('c-progress').value);
    setBool('review', $('c-review').checked);
    setBool('auto-advance', $('c-auto').checked);
    setBool('allow-skip', $('c-skip').checked);
  }

  // Changing the variant resets progress, review and auto-advance to what that variant turns on.
  $('c-variant').addEventListener('change', function () {
    var full = this.value === 'full';
    $('c-review').checked = full;
    $('c-auto').checked = full;
    $('c-progress').value = full ? 'steps' : 'bar';
    applyControls();
  });
  ['c-layout', 'c-progress', 'c-review', 'c-auto', 'c-skip'].forEach(function (id) {
    $(id).addEventListener('change', applyControls);
  });

  function applyLang() {
    var lang = $('c-lang').value;
    var keep = q.value;
    document.documentElement.lang = lang;
    q.setAttribute('lang-ui', lang);
    q.questions = buildQuestions(lang);
    q.value = keep;
    setStatus(statusEl.dataset.state);
  }
  $('c-lang').addEventListener('change', applyLang);

  var root = document.documentElement;
  function applyTheme() {
    var v = $('c-theme').value;
    if (v === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', v);
    document.querySelectorAll('vt-questionnaire, vt-json').forEach(function (el) {
      el.setAttribute('theme', v);
    });
  }
  $('c-theme').addEventListener('change', applyTheme);

  $('c-reset').addEventListener('click', function () {
    q.reset();
    setStatus('draft');
    show(q.value);
    log('reset', {});
  });

  // ---- start ----
  q.questions = buildQuestions('en');
  applyControls();
  applyTheme();
  show(q.value);
})();
