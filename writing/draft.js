// Everything the page says. Pranav's own words are verbatim; anything Claude adds or changes is marked:
//   from  replace "from" with "to"
//         Claude's words, added (project lines, group notes, the "games" group)
//   from    remove "from"
// He accepts or rejects each one on the page (index.html); decisions live in localStorage "lab:redline".
// Built months and models come from his session records; model null = no record survived.
// Public repo months are the GitHub creation dates.
(function () {
  const top = {
    hi: "hi. i'm pranav",
    about: "friendly, ambitious nerd. spend a lot of time exploring my curiosity, and it's led me down a lot of interesting roads.",
    intro: "this past year, i've been experimenting with llms quite a lot. this is a compilation of projects i've built together with claude.",
  };

  const claudeTitle = "the journey";
  // models: which builds belong to each era (drives the highlight as you scroll)
  const eras = [
    {label: "2022-2025 · chatgpt · o1 and o3", models: [],
     text: ["i was an openai fanboy straight from chatgpt days; was an o3 power user but building projects end to end wasn't something i'd explored."]},
    {label: "early 2026 · claude · opus 4.6", models: [],
     text: ["switched to claude in the beginning of 2026- opus 4.6 was the first model which blew me away and made me seriously switch.",
            "though my initial usage with opus 4.6 was for knowledge work- decks and memos, i started experimenting and building little things."]},
    {label: "artifacts → claude code", models: ["opus + sonnet 4.6", "sonnet 4.6", "opus 4.6", "opus 4.7", "opus 4.8", null],
     text: ["claude artifacts was the gateway. claude code got me hooked."]},
    {label: "mid 2026 · fable", models: ["fable 5", "fable 5.1", "opus 5"],
     text: ["on models post 4.6- the peak model for me was fable; was such a fable-maxi until opus 5.5 came out."]},
    {label: "my current model of choice", models: ["opus 5.5"],
     text: ["now everything runs on the opus 5.5 medium setting, or max when i want to consume that usage."]},
  ];

  // media: "file", ["file", "caption"], or {video: "name"} (assets/video/name.mp4 + .jpg poster). note: a short line under the entry.
  // ar: aspect ratio for a strip of several pictures. kids: entries nested under this one.
  const E = (slug, name, when, model, what, extra = {}) => ({slug, name, when, model, what, ...extra});
  const G = (slug, name, what, items) => ({group: true, slug, name, what, items});
  const R = (repo, when, what, extra = {}) => ({repo: true, slug: "r-" + repo, name: repo, when, what, code: "https://github.com/pranavharan02/" + repo, ...extra});

  const sections = [
    {id: "built", name: "built", items: [
      E("mumbairents", "mumbairents.com", "2026.04", "opus + sonnet 4.6",
        "a public good for rent transparency in mumbai; anyone can come and pin how much they're paying in rent on a map-like interface. you can explore what people are paying from the pins.",
        {numbers: "some numbers: 20k+ visits, 650+ users", live: "https://www.mumbairents.com",
         media: [["mr-stage-apr19-welcome.jpg", "19 apr 2026"], ["mr-stage-apr19-map.jpg", "19 apr 2026"], ["mumbai-rents.jpg", "4 oct 2026"]]}),
      E("beosound", "beosound 9000", "2026.05", "opus 4.6", "the bang & olufsen six-cd stereo, rebuilt in the browser, playing real music through spotify.", {media: ["beosound.jpg"]}),
      E("aajbanega", "aajbanega.com", "2026.06", "opus 4.6", "plan the week's dinners, then send your cook each day's recipe in hindi or marathi. no app needed.",
        {live: "https://www.aajbanega.com", media: ["aajbanega.jpg"]}),
      E("bom-live", "bom-live", "2026.06", "opus 4.6", "mumbai's local trains, buses and planes moving live on one map, from an open transit dataset i put together.", {media: ["bom-live.jpg"]}),
      E("isometric-mumbai", "isometric mumbai", "2026.06", "opus 4.6", "mumbai as an isometric pixel-art map, painted block by block by image models.",
        {media: ["isometric-mumbai.jpg", "iso-churchgate.jpg", "iso-haji-ali.jpg"]}),
      G("games", "games", "two games built by teams of agents, each judged by critics that only ever saw screenshots.", [
        E("the-odyssey", "the odyssey", "2026.07", "opus 5", "an open-world sailing game about odysseus' voyage home.", {media: ["argos.jpg", "argos-beach.jpg", "argos-helm.jpg"], ar: "16/9"}),
        E("breakline", "breakline", "2026.08", "opus 5", "a 2002 console surf game rebuilt from one 60-second clip. ships as a single html file.", {media: ["breakline.jpg", "breakline-title.jpg"], ar: "4/3"}),
      ]),
      E("static-fm", "ai radio simulation", "2026.08", "fable 5", "gta-style talk radio where every host, ad and caller is ai.", {media: ["static-fm.jpg"]}),
      G("creative-coding", "creative coding experiments", "films, comics, anime and whole worlds, where code draws every frame.", [
        E("halftone", "creative coding v1 · a life in halftone", "2026.09", "fable 5.1", "a human life in ten chapters, every frame drawn in javascript and printed in halftone dots. built in 13 minutes.",
          {media: ["halftone.jpg", "halftone-kite.jpg"], ar: "4/3"}),
        E("cc-v2", "creative coding v2 · one line, small change", "2026.09", "opus 5.5", "two short films where code draws every frame, after kevin ngo. the moodboard is sixteen frames from small change.",
          {media: [{video: "one-line"}, {video: "small-change"}, "cc2-moodboard.jpg"], ar: "1/1"}),
        E("horror", "she always draws four", "2026.09", "opus 5.5", "a one-minute horror short: crayon and charcoal frames, score and voice, all made in code.",
          {media: ["horror.jpg", "horror-sh03.jpg", "horror-sh09.jpg"], ar: "9/14"}),
        E("zen-pencils", "zen pencils in code", "2026.09", "opus 5.5", "inspirational comics in the zen pencils style, every panel and letter drawn by code.",
          {code: "https://github.com/pranavharan02/comics-in-code", media: ["comics.jpg", "comics-up-hill.jpg", "comics-butterfly.jpg"], ar: "4/3"}),
        E("akira-city", "building the city from akira in code", "2026.10", "opus 5.5", "can code paint anime? four experiments in akira-style frames, ending in a whole procedural city judged by blind ai critics.",
          {code: "https://github.com/pranavharan02/anime-with-claude", media: ["anime-city.jpg", "akira-aerial.jpg", "akira-canyon.jpg"], ar: "16/9"}),
        E("explorable-world", "map to explorable world", "2026.10", "opus 5.5", "turn a real place into a world you can walk and fly through, from open map and satellite data. open source.",
          {code: "https://github.com/pranavharan02/map-to-explorable-world", media: ["world-hallstatt.jpg", "world-marine-drive.jpg"], ar: "16/9",
           kids: [E("kumbalangi", "kumbalangi", "2026.10", "opus 5.5", "the first world it built: a backwater village in kochi, with boatmen, net crews and the monsoon.",
             {live: "https://pranavharan02.github.io/map-to-explorable-world/", media: ["kumbalangi.jpg", "kumbalangi-boatman.jpg", "kumbalangi-monsoon.jpg"], ar: "16/9"})]}),
      ]),
    ]},
    {id: "personal", name: "personal builds", items: [
      E("the-vault", "the vault", "2026.04", "opus 4.6", "years of notes, chats and whatsapp exports, tagged by an llm into a 2,124-note linked obsidian vault."),
      E("idea-engine", "idea engine", "2026.09", "fable 5.1", "every night it reads hn, reddit, youtube and substacks, and leaves me a brief of ideas worth building.",
        {note: "still WIP", media: ["idea-engine.jpg"]}),
      E("laptop-control", "laptop control center", "2026.09", "opus 5.5", "a control panel for my laptop: it watches cpu, fans, battery and both gpus, explains every problem in a sentence, and switches between four power modes, from overdrive to cool & quiet."),
      E("claude-micro", "claude micro", "2026.10", "opus 5.5", "a retro android handheld turned into a remote for my claude code sessions."),
    ]},
    {id: "repos", name: "public repos", list: true, items: [
      R("kopar", "2026.07", "a font i had made with claude: an original futuristic-cyberpunk display typeface."),
      R("projectkanye", "2026.09", "trying to make astra write and produce bangers using various music production software."),
      R("comics-in-code", "2026.09", "the code behind zen pencils in code.", {see: "zen-pencils"}),
      R("anime-with-claude", "2026.10", "the code behind building the city from akira in code.", {see: "akira-city"}),
      R("map-to-explorable-world", "2026.10", "the engine behind kumbalangi, with a live demo.", {see: "explorable-world"}),
    ]},
    {id: "ideas", name: "ideas half explored", items: [
      E("turing-test", "turing test", "2026.04", null, "chat with a stranger for 90 seconds, then guess: human or bot."),
      E("point-me-to", "point me to", "2026.06", "opus 4.6", "a compass with no map: pick café or pharmacy, and a needle points to the nearest one."),
    ]},
  ];

  // one reason per suggested change to his words; Claude's added lines need no reason
  const why = {
    a1: "a comma, not a semicolon, before “and”",
    a2: "“never thought possible” says it without the extra words",
    1: "typo", 2: "“an”, because o3 is read “oh-three”",
    3: "“wowed me away” blends two phrases; “blew me away” keeps your meaning",
    4: "the sentence opens with “though”, so a comma joins it",
    5: "the product is spelled “artifacts”",
    t1: "reads more smoothly with “the”",
    w1: "“what?” was a prompt to yourself; the entry reads fine without it",
    6: "“ui” already means interface, and “map-like” takes a hyphen",
    7: "stray second full stop",
    l3: "my label for this stretch of the timeline", l4: "my label for this stretch of the timeline",
    "g-games": "my suggestion: group the two games. keep mine to ungroup them",
  };

  const RX = /\{\{([\w-]+)\|([^|]*)\|([^}]*)\}\}/g;
  const KEY = "lab:redline";
  const decisions = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const save = d => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch {} };
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}[c]));
  // plain text: "final" applies accepted edits, "suggested" applies everything not rejected, "original" applies nothing
  const text = (s, mode = "final", d = decisions()) => s == null ? s : s.replace(RX, (_, id, from, to) =>
    mode === "original" ? from : mode === "suggested" ? (d[id] === "reject" ? from : to) : (d[id] === "accept" ? to : from));
  const ids = s => [...String(s ?? "").matchAll(RX)].map(m => m[1]);

  // every entry in reading order, with its section and group
  const walk = () => {
    const out = [];
    const visit = (it, sec, group, depth) => {
      if (it.group) { it.items.forEach(x => visit(x, sec, it, depth)); return; }
      out.push({...it, sec, group, depth});
      (it.kids || []).forEach(k => visit(k, sec, group, depth + 1));
    };
    sections.forEach(s => s.items.forEach(it => visit(it, s, null, 0)));
    return out;
  };

  window.DRAFT = {top, claudeTitle, eras, sections, why, RX, KEY, decisions, save, esc, text, ids, walk,
    asset: f => "assets/" + f};
})();
