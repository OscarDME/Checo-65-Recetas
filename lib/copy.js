// lib/copy.js — Veškerý viditelný textový obsah cílové stránky (landing page). 
// Každá změna textu se provádí zde.

export const copy = {
  metadata: {
    title: "365 zdravých receptů — Bez cukru a bez lepku",
    description:
      "1000 receptů bez cukru a bez lepku na 365 dní. Jezte bez výčitek, bez komplikací a bez omezení. Speciální nabídka: 199 Kč + 8 dárků.",
    lang: "cs",
  },

  hero: {
    banner: "NABÍDKA PLATÍ POUZE DNES!",
    timerLabels: { days: "Dny", hours: "Hodiny", minutes: "Min", seconds: "Sek" },
    headline:
      "365 dní plných lahodných receptů bez cukru a lepku. Jezte konečně bez výčitek!",
    bullets: [
      "Udělejte ze svých jídel zdravější a příjemnější zážitek, aniž byste museli slevit z chuti",
      "BEZ KOMPLIKACÍ",
      "BEZ OMEZENÍ",
      "BEZ VÝČITEK",
    ],
    cta: "CHCI JÍST BEZ VÝČITEK",
    kicker: "365 dní · 1000 receptů",
    imageAlt: "Kuchařka na 365 dní bez cukru a bez lepku",
    trustChips: [
      { icon: "⭐", text: "Více než 5 000 rodin" },
      { icon: "🎁", text: "8 bonusových dárků" },
      { icon: "🛡️", text: "Sleva 75 % pouze dnes" },
    ],
  },

  story: {
    headlinePre: "Cukr je tichý nepřítel,",
    headlineHighlight: "který ničí vaše zdraví",
    intro:
      "Skrývá se v jídle, které jíte každý den, dokonce i v produktech, které se zdají být zcela neškodné.",
    problemsLead:
      "Zde jsou hlavní problémy způsobené cukrem a jak vás možná právě teď ovlivňují:",
    problems: [
      "Neustálá únava a nevysvětlitelné vyčerpání",
      "Přibývání na váze a ukládání tuku v oblasti břicha",
      "Hormonální a metabolická nerovnováha",
      "Riziko chronických onemocnění (cukrovka, hypertenze, obezita atd.)",
      "Prudké výkyvy nálad a úzkost",
      "Předčasné stárnutí",
      "Závislost na jídle a neustálé chutě",
    ],
    solutionHeadline:
      "Konečně snadné a efektivní řešení, jak změnit své stravování, aniž byste se museli vzdát toho, co milujete.",
    solutionBadge: "Řešení",
  },

  benefits: {
    stepsHeadline: "K vaší transformaci stačí jen 3 kroky",
    steps: [
      {
        number: "1",
        title: "Dodržujte jídelníček bez výčitek",
        desc: "Získáte přístup ke kompletnímu menu s recepty na každý den v roce – vše bez cukru a bez lepku. Nemusíte nic plánovat!",
      },
      {
        number: "2",
        title: "Vařte snadná a chutná jídla",
        desc: "Postupujte podle jednoduchých pokynů v receptech a připravujte úžasná jídla, která od základů změní váš jídelníček.",
      },
      {
        number: "3",
        title: "Pociťte tu změnu na vlastní kůži",
        desc: "Při vaření podle našich receptů ucítíte rozdíl na svém těle i zdraví: více energie, kontrola hmotnosti a nižší riziko onemocnění.",
      },
    ],
    ctaMid: "CHCI JÍST BEZ VÝČITEK",
    headline: "OBJEVTE VÝHODY, KTERÉ VÁM ZMĚNÍ ŽIVOT",
    items: [
      {
        icon: "HeartPulse",
        title: "Kontrola hladiny cukru v krvi",
        desc: "Zlepšete si hladinu cukru v krvi a snižte riziko cukrovky díky výživným a lahodným receptům.",
      },
      {
        icon: "Utensils",
        title: "Svoboda ve stravování",
        desc: "Vychutnejte si neodolatelná jídla bez výčitek a vybudujte si k jídlu pozitivní vztah.",
      },
      {
        icon: "CalendarDays",
        title: "Každodenní rozmanitost",
        desc: "S 1000 recepty máte na výběr z nových možností pro každý den v roce.",
      },
      {
        icon: "Timer",
        title: "Praktičnost v kuchyni",
        desc: "Připravte si chutná jídla za 30 minut nebo méně, ušetřete čas a zbavte se každodenního stresu.",
      },
      {
        icon: "GraduationCap",
        title: "Nutriční vzdělání",
        desc: "Naučte se vědomě vybírat potraviny a vybudujte si zdravé návyky na celý život.",
      },
      {
        icon: "Scale",
        title: "Kontrola hmotnosti",
        desc: "Udržujte si zdravou váhu díky receptům, které zasytí a vyživí, aniž byste museli obětovat skvělou chuť.",
      },
    ],
  },

  features: {
    headline: "Máte k dispozici hotová menu na 365 dní – jedno na každý den v roce",
    subheadline: "Provedeme vás každým krokem na vaší cestě za zdravějším stravováním",
    categories: [
      {
        image: "/carousel/categoria-1.webp",
        title: "Snídaně a svačiny",
        desc: "Recepty na snídaně a svačiny, jaké jste JEŠTĚ neviděli. Rychlá příprava z praktických a běžně dostupných surovin!",
      },
      {
        image: "/carousel/categoria-2.webp",
        title: "Obědy a večeře",
        desc: "Přineste na svůj stůl rozmanitá a chutná jídla pro všední dny i speciální příležitosti! Připravená z dostupných surovin, které už máte doma.",
      },
      {
        image: "/carousel/categoria-3.webp",
        title: "Cukroví a dezerty",
        desc: "SPOUSTA variant bezlepkových cukroví a dezertů bez přidaného cukru, abyste si mohli mlsat úplně bez výčitek.",
      },
      {
        image: "/carousel/categoria-4.webp",
        title: "Omáčky a dipy",
        desc: "Omáčky a pomazánky, které dodají vašim jídlům neuvěřitelnou chuť – snadno a rychle!",
      },
      {
        image: "/carousel/categoria-5.webp",
        title: "Zdravé polévky a krémy",
        desc: "Polévky, krémové polévky a vývary – to vše z výživných surovin a se speciálně vybraným kořením.",
      },
      {
        image: "/carousel/categoria-6.webp",
        title: "Alternativy k běžné mouce",
        desc: "Vše bez lepku a s nízkým glykemickým indexem, takže můžete péct dorty, chleba a pečivo bez obav.",
      },
    ],
    ctaMid: "CHCI JÍST BEZ VÝČITEK",
    badgesHeadline: "Ta nejchutnější jídla ve variantách",
    badges: ["BEZ CUKRU", "BEZ LEPKU", "NÍZKOKALORICKÉ", "BEZ LAKTÓZY"],
    audienceHeadline: "Kuchařka „Jídlo bez výčitek“ je přesně pro vás, pokud:",
    audience: [
      {
        title: "Máte dietní omezení:",
        desc: "Lidé, kteří se musí vyhýbat cukru a lepku ze zdravotních důvodů, jako je cukrovka nebo intolerance.",
      },
      {
        title: "Chcete mít zdravou rodinu:",
        desc: "Rodiče, kteří chtějí svým dětem zajistit výživné a chutné jídlo a podporovat u nich zdravé návyky už od útlého věku.",
      },
      {
        title: "Žijete zdravým životním stylem:",
        desc: "Lidé, kteří dodržují specifické diety – low carb, paleo nebo veganství, a hledají recepty, které do těchto přístupů zapadají.",
      },
      {
        title: "Chcete mít svou váhu pod kontrolou:",
        desc: "Lidé, kteří chtějí zhubnout nebo si váhu udržet a potřebují recepty, které je zasytí, ale zároveň pomohou s kontrolou kalorií.",
      },
    ],
  },

  testimonials: {
    headline: "Přečtěte si recenze od lidí, kteří už s námi vaří",
    cta: "CHCI JÍST BEZ VÝČITEK",
    wallpaper: "/wallpaper-whatsapp.webp",
    messages: [
      {
        text: "Chci vám jen říct, že tahle kuchařka je pro mě opravdovým požehnáním. Se třemi malými dětmi mi vždycky chyběl čas, a to, že mám tolik receptů na jednom místě, mi všechno hrozně usnadnilo. Konečně doma jíme chutně a zdravě 😊",
        time: "20:04",
        reactions: ["👌", "❤️"],
      },
      {
        text: "To je naprosto skvělá kuchařka! Od té doby, co mi diagnostikovali intoleranci na lepek, jsem si myslela, že už si jídlo nikdy nevychutnám. Ale s vašimi recepty můžu jíst úplně bez obav. Děkuju, že jste to takhle usnadnili! 🙏",
        time: "19:57",
      },
      {
        text: "Chtěla bych vám moc poděkovat, protože tyhle recepty mi změnily život. Jsem diabetička a vždycky jsem měla problém najít chutné a zdravé varianty jídel. Teď si vychutnávám každé jídlo bez strachu. Opravdu moc děkuji! 🙏",
        time: "19:49",
      },
      {
        text: "Tisíceré díky za ty recepty! Hrozně ráda mlsám a vždycky jsem s cukrem trochu bojovala, ale vaše recepty mi daly úžasné a snadné alternativy.",
        time: "18:55",
        reactions: ["❤️"],
      },
    ],
  },

  carouselSection: {
    prevLabel: "Předchozí",
    nextLabel: "Další",
    images: [
      { src: "/carousel/categoria-7.webp", alt: "Zdravý recept 1" },
      { src: "/carousel/categoria-8.webp", alt: "Zdravý recept 2" },
      { src: "/carousel/categoria-9.webp", alt: "Zdravý recept 3" },
      { src: "/carousel/categoria-10.webp", alt: "Zdravý recept 4" },
      { src: "/carousel/categoria-11.webp", alt: "Zdravý recept 5" },
      { src: "/carousel/categoria-1.webp", alt: "Zdravý recept 6" },
    ],
  },

  bonuses: {
    badge: "Speciálně pro vás, že jste dočetli až sem",
    headline: "POKUD SI DNES KOUPÍTE 1000 RECEPTŮ, ZÍSKÁTE 8 EXKLUZIVNÍCH DÁRKŮ 🎁",
    valueLabel: "Hodnota:",
    freeLabel: "ZDARMA",
    items: [
      { image: "/bonuses/bono-1.webp", tag: "DÁREK 1", title: "Recepty na dezerty bez cukru", value: "279 Kč" },
      { image: "/bonuses/bono-2.webp", tag: "DÁREK 2", title: "Recepty na omáčky a dipy", value: "199 Kč" },
      { image: "/bonuses/bono-3.webp", tag: "DÁREK 3", title: "Recepty na polévky a krémové polévky", value: "159 Kč" },
      { image: "/bonuses/bono-4.webp", tag: "DÁREK 4", title: "Recepty z bezlepkové mouky", value: "119 Kč" },
      { image: "/bonuses/bono-5.webp", tag: "DÁREK 5", title: "Recepty na bezlepkový chléb", value: "249 Kč" },
      { image: "/bonuses/bono-6.webp", tag: "DÁREK 6", title: "Recepty na zdravé tortilly", value: "249 Kč" },
      { image: "/bonuses/bono-7.webp", tag: "DÁREK 7", title: "Zdravé pizzy", value: "249 Kč" },
      { image: "/bonuses/bono-8.webp", tag: "DÁREK 8", title: "500 lahodných receptů vytvořených pro diabetiky", value: "249 Kč" },
    ],
    totalLabel: "Vše, co získáte, má hodnotu více než 1 000 Kč",
    footer: "Ale vy dnes tuto částku nezaplatíte... i když to stojí za každý halíř.",
  },

  finalCta: {
    preHeadline: "Vaše celková investice do 1000 receptů a všech bonusů...",
    urgencyTop: "Časově omezená nabídka!",
    subUrgency:
      "Nenechte si ujít příležitost získat tuto kuchařku se slevou 75 %. Změňte své zdraví hned teď s naším kompletním menu na 365 dní.",
    headline: "365 DNÍ S RECEPTY BEZ CUKRU A LEPKU + EXTRA BONUSY",
    bundleList: [
      "1000 receptů bez cukru a bez lepku",
      "Bonus 1: Recepty na dezerty bez cukru",
      "Bonus 2: Recepty na omáčky a dipy",
      "Bonus 3: Recepty na polévky a krémy",
      "Bonus 4: Recepty z bezlepkové mouky",
      "Bonus 5: Recepty na bezlepkový chléb",
      "Bonus 6: Recepty na zdravé tortilly",
      "Bonus 7: Recepty na zdravé pizzy",
      "Bonus 8: 500 lahodných receptů pro diabetiky",
    ],
    guaranteeText:
      "Upozornění: Pokud jste někdo, kdo se chce opravdu postarat o své zdraví nebo zdraví své rodiny, naše recepty bez cukru a lepku vám v tom mohou okamžitě pomoci. Nenechte si tuto příležitost utéct!",
    regularPriceLabel: "MÍSTO:",
    regularPrice: "1 000 Kč",
    urgencyText: "NABÍDKA PLATÍ POUZE DNES!",
    offerPrice: "199 Kč",
    bottomUrgency: "Poslední volné kusy",
    discountBadge: "SLEVA 75 %",
    button: "ANO, CHCI RECEPTY + BONUSY HNED TEĎ",
    trustRow: "🔒 100% bezpečná platba • ⚡ Okamžitý přístup • ✅ Doživotní záruka",
    imageAlt: "365 zdravých receptů + 8 bonusů",
  },

  faq: {
    authorHeadline: "Kdo je Petra Nováková?",
    authorBio:
      "Petra Nováková je odbornice na zdravou výživu, která mění stravovací návyky díky svému inovativnímu programu „Jídlo bez výčitek“. S bohatými zkušenostmi nutriční specialistky Petra sdílí 1000 snadných a dostupných receptů, vytvořených tak, aby vás podpořily na každém kroku vaší cesty ke zdravějšímu životu. Petra, absolventka oboru Nutriční terapie, kombinuje své odborné znalosti s praktickým přístupem a nabízí chutné a vyvážené recepty přizpůsobené různým potřebám. Spolu s nimi předává cenné rady, které vám pomohou užívat si jídlo bez omezení a pocitů viny.",
    authorRole: "Nutriční terapeutka",
    authorImageAlt: "Petra Nováková — Nutriční terapeutka",
    worksHeadline: "CO OPRAVDU FUNGUJE?",
    doesntWork: [
      "JÍST MÁLO A HLADOVĚT",
      "DRŽET SLOŽITÉ DIETY",
      "ODEPÍRAT SI TO, CO MÁTE RÁDI",
    ],
    worksText:
      "To, co skutečně funguje, je promyšlené stravování se snadnými a praktickými recepty bez cukru a lepku. S naším jídelníčkem na 365 dní se už nikdy nebudete muset trápit frustrujícími nebo omezujícími dietami.",
    headline: "Často kladené dotazy",
    subheadline: "Odpovědi na ty nejčastější otázky",
    items: [
      { q: "JAK RECEPTY OBDRŽÍM?", a: "Veškerý obsah vám zašleme přímo na váš e-mail." },
      { q: "MOHU SI KUCHAŘKU PROHLÍŽET I NA TELEFONU?", a: "Ano, z telefonu, tabletu nebo počítače." },
      { q: "MÁTE NĚJAKÉ DOTAZY?", a: "Během celého procesu se mě můžete napřímo zeptat na cokoli, co vás zajímá." },
      { q: "JAK DLOUHO BUDU MÍT K RECEPTŮM PŘÍSTUP?", a: "Přístup ke všem materiálům máte na celý život." },
    ],
  },

  closing: {
    kicker: "POSLEDNÍ ŠANCE! ⚡ Tato nabídka brzy vyprší",
    headline:
      "Změňte své zdraví hned teď s naším kompletním menu na 365 dní.",
    subheadline:
      "1000 receptů bez cukru a lepku + 8 bonusových dárků. To vše za cenu jednoho jídla v restauraci.",
    regularPrice: "1 000 Kč",
    offerPrice: "199 Kč",
    ctaLabel: "ANO, CHCI RECEPTY A BONUSY HNED TEĎ",
    trustRow:
      "🔒 100% bezpečná platba • ⚡ Okamžitý a doživotní přístup • ✅ Poslední volné kusy",
  },

  footer: {
    brand: "Crearis",
    copyright: "2025 © Všechna práva vyhrazena. Seznamte se s našimi Zásadami ochrany osobních údajů.",
  },
};