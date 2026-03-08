// © 2025 Yehuda Saadia — All Rights Reserved. Unauthorized copying or distribution prohibited.
// SERVER ONLY — never import this file from any "use client" component

export const CONTRACT_GROUPS = {
  "כלכלנים ואקדמאים":   ["551","514","14","87","587","187","987","402"],
  "בכירים":              ["568","569","557","864"],
  "מומחים":              ["555","964","164","965"],
  "מנהל ומשק":           ["148","948","64","564","516","517"],
  "צוערים":              ["287","554","787"],
  "הגנת עדים":           ["331","332","333","334","335","336","337","338","339","340","310","320","635","636"],
  "פנים וביטחון":        ["110","553","610","556","210","710","520","521","384","387","109","600"],
  "ביטחון לאומי":        ["522","382","383"],
  "טכנולוגיה מידע":     ["421","422","423","424","425","426","427"],
  "גיור ורבנות":         ["491","492","493","494","495","496","497","286","315"],
  "חקירות ומיוחדים":    ["168","167","343","123"],
  "תעופה ותחבורה":       ["122","512","188","688"],
  "מגוון":               ["134","195","204","264","265","266","165","166","561","588","525"],
};

export const CONTRACT_ENTITLEMENTS = {
  // ── בכירים ──
  "557": { overtime:false, oncall:false, personalGrade:false, choiceOption:true  }, // בכירים (ותיקים)
  "568": { overtime:false, oncall:false, personalGrade:false, choiceOption:true  }, // סגל בכיר מוביל
  "569": { overtime:false, oncall:false, personalGrade:false, choiceOption:true  }, // סגל בכיר לא מוביל
  "864": { overtime:false, oncall:false, personalGrade:false, choiceOption:true  }, // בכירים לשכות שר/מנכ"ל

  // ── לשכות שרים ומנכ"לים ──
  "564": { overtime:false, oncall:false, personalGrade:true,  choiceOption:false }, // עוזרים ויועצים לשכות שרים
  "764": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // נהגי שרים / מנכ"לים
  "516": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false }, // מזכירות לשכה שרים/מנכ"לים
  "517": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // עוזרים ויועצים לשכות מנכ"לים

  // ── כלכלנים ואקדמאים חיוניים ──
  "551": { overtime:true,  oncall:false, personalGrade:true,  choiceOption:true  }, // כלכלנים חדש
  "514": { overtime:true,  oncall:false, personalGrade:true,  choiceOption:true  }, // כלכלנים ותיק
  "14":  { overtime:true,  oncall:false, personalGrade:true,  choiceOption:true  }, // כלכלנים ותיק 14
  "87":  { overtime:true,  oncall:true,  personalGrade:true,  choiceOption:true  }, // אקדמאים חיוניים ותיק
  "587": { overtime:true,  oncall:true,  personalGrade:true,  choiceOption:true  }, // אקדמאים חיוניים חדש
  "187": { overtime:true,  oncall:true,  personalGrade:true,  choiceOption:true  }, // אקדמאים חיוניים (187)
  "402": { overtime:true,  oncall:false, personalGrade:true,  choiceOption:true  }, // אקדמאים חיוניים (402) - כוננויות בהצהרה בלבד

  // ── משפטנים ──
  "987": { overtime:true,  oncall:true,  personalGrade:true,  choiceOption:true  }, // משפטנים

  // ── חוקרי מח"ש ──
  "168": { overtime:true,  oncall:true,  personalGrade:true,  choiceOption:true  }, // חוקרי מח"ש

  // ── בוחני פטנטים ──
  "165": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // בוחני פטנטים צוערים
  "264": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // בוחני פטנטים צוערים (264)
  "265": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // בוחני פטנטים
  "266": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // בוחני פטנטים דור ב'

  // ── עוזרים משפטיים ──
  "561": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false }, // עוזר משפטי ביהמ"ש עליון
  "562": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // עוזר משפטי ביהמ"ש (לא עליון)

  // ── כלכלנים / רו"ח / סטטיסטיקאים ──  (551 מטופל למעלה)

  // ── מומחים ──
  "555": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // מומחים לא גלובלי
  "964": { overtime:false, oncall:false, personalGrade:false, choiceOption:true  }, // מומחים גלובלי
  "164": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // מומחים (164)
  "965": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // מומחים בשירותי ביטחון

  // ── פקחים ──
  "552": { overtime:true,  oncall:false, personalGrade:true,  choiceOption:true  }, // פקחים איכות הסביבה/תכנון ובניה

  // ── תעופה ותחבורה ──
  "122": { overtime:false, oncall:false, personalGrade:false, choiceOption:true  }, // רשות תעופה אזרחית (רת"א)
  "688": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // בודקי כלי שיט קטנים (שעתי)
  "588": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // פיקוח מבחני נהיגה
  "188": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // פיקוח נהיגה (188)
  "512": { overtime:true,  oncall:true,  personalGrade:true,  choiceOption:true  }, // מטאורולוגים

  // ── יחידת היעדים (רשות המסים) ──
  "167": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // יחידת היעדים

  // ── אנשי דת מוסלמים ──
  "315": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // אנשי דת מוסלמים

  // ── מאבטחים ──
  "387": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false }, // מאבטחים (שעתי)
  "384": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // מאבטחי מתקן חו"ל

  // ── סוקרים (לשכה המרכזית לסטטיסטיקה) ──
  "584": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false }, // סוקרים (שעתי)
  "525": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false }, // סוקרים/שעתי (525)

  // ── מטאורולוגים (כבר למעלה 512) ──

  // ── מפקחי הגירה ──
  "521": { overtime:true,  oncall:false, personalGrade:true,  choiceOption:true  }, // מפקחי משטרת ההגירה
  "520": { overtime:true,  oncall:false, personalGrade:true,  choiceOption:true  }, // מפקחי הגירה (520)

  // ── מעברי גבול (רשות האוכלוסין) ──
  "519": { overtime:true,  oncall:false, personalGrade:true,  choiceOption:false }, // מעברי גבול (הסכם קיבוצי)
  "210": { overtime:true,  oncall:false, personalGrade:true,  choiceOption:false }, // מעברי גבול (210)
  "710": { overtime:true,  oncall:false, personalGrade:true,  choiceOption:false }, // מעברי גבול (710)
  "556": { overtime:true,  oncall:false, personalGrade:true,  choiceOption:true  }, // מפקחי הגירה (556)

  // ── צוערים משרד החוץ ──
  "554": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false }, // צוערים משרד החוץ

  // ── מתגברי אבטחה משרד החוץ ──
  "509": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // מתגברי אבטחה משרד החוץ

  // ── חוקרי ממ"ד משרד החוץ ──
  "343": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // חוקרי ממ"ד חוץ

  // ── מאבטחי מתקן חו"ל (384 כבר למעלה) ──

  // ── אית"ן (אזרח ישראלי תומך נציגות) ──
  "109": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false }, // אית"ן
  "110": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false }, // אית"ן (110)
  "553": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false }, // אית"ן בן זוג שליח
  "610": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // אית"ן אבטחה

  // ── רע"ן גיאוגרפיים / רמ"חים מבצעיים ──
  "166": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // רע"ן גיאוגרפיים

  // ── עובדי המל"ל ──
  "522": { overtime:false, oncall:false, personalGrade:false, choiceOption:true  }, // עובדי המטה לביטחון לאומי

  // ── פיקוח אלקטרוני (ביטחון פנים) ──
  "586": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false }, // פיקוח אלקטרוני (שעתי)

  // ── מערך הסייבר הלאומי ──
  "382": { overtime:false, oncall:false, personalGrade:false, choiceOption:true  }, // סייבר גלובלי
  "383": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // סייבר לא גלובלי
  "589": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // חדר מצב קיברנטי

  // ── טכנולוגיית מידע ──
  "421": { overtime:false, oncall:false, personalGrade:false, choiceOption:true  }, // מנהל מערכות מידע ב'
  "422": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // מנהל טכנולוגיות ופיתוח א
  "423": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // מנהל טכנולוגיות ופיתוח ב
  "424": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // מנהל יישומים א
  "425": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // מנהל יישומים ב
  "426": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // מנהל אבטחת מידע א
  "427": { overtime:true,  oncall:false, personalGrade:false, choiceOption:true  }, // מנהל אבטחת מידע ב

  // ── גיור ──
  "496": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // אב"ד לגיור
  "497": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // חבר בי"ד לגיור
  "491": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // גיור (491)
  "492": { overtime:false, oncall:false, personalGrade:false, choiceOption:false },
  "493": { overtime:false, oncall:false, personalGrade:false, choiceOption:false },
  "494": { overtime:false, oncall:false, personalGrade:false, choiceOption:false },
  "286": { overtime:false, oncall:false, personalGrade:false, choiceOption:false },

  // ── מרכז לאומי לבקרת מחלות (מלב"ם) ──
  "495": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false }, // מלב"ם

  // ── פארה-רפואיים ──
  "48":  { overtime:true,  oncall:true,  personalGrade:true,  choiceOption:true  }, // פארה-רפואיים (דירוג מקצועי)
  "148": { overtime:true,  oncall:true,  personalGrade:true,  choiceOption:true  }, // פארה-רפואיים / מנהל משק

  // ── מנמ"ש בתי חולים ממשלתיים ──
  "948": { overtime:true,  oncall:true,  personalGrade:true,  choiceOption:true  }, // מנמ"ש חדש בי"ח ממשלתי
  "64":  { overtime:true,  oncall:false, personalGrade:false, choiceOption:false }, // מנהל ומשק כללי (64)

  // ── חוזה שליחים בחו"ל ──
  "09":  { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // חוזה שליחים
  "600": { overtime:false, oncall:false, personalGrade:false, choiceOption:false }, // שונות/שליחים

  // ── צוערים ──
  "287": { overtime:true,  oncall:true,  personalGrade:true,  choiceOption:true  }, // צוערים
  "787": { overtime:true,  oncall:true,  personalGrade:true,  choiceOption:true  }, // צוערים (787)

  // ── חקירות ומיוחדים נוספים ──
  "123": { overtime:true,  oncall:true,  personalGrade:true,  choiceOption:true  }, // חוקרים (123)

  // ── הגנת עדים ──
  "331": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "332": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "333": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "334": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "335": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "336": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "337": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "338": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "339": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "340": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "310": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "320": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "635": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },
  "636": { overtime:true,  oncall:true,  personalGrade:false, choiceOption:false },

  // ── שונות ──
  "134": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false },
  "195": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false },
  "204": { overtime:true,  oncall:false, personalGrade:false, choiceOption:false },
};

export const CONTRACTS = {
  // ── אקדמאים וכלכלנים ──
  "551": {
    name: "כלכלנים נבחרים (חדש)",
    shortName: "כלכלנים נבחרים",
    number: "551",
    color: "from-blue-600 to-indigo-700",
    btnActive: "bg-gradient-to-br from-blue-600 to-indigo-700",
    accent: "#2563eb",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"36",   label:"דרגה 36",   salary:7249.71},
      {id:"36א",  label:"דרגה 36א",  salary:7792.2},
      {id:"36ב",  label:"דרגה 36ב",  salary:8334.71},
      {id:"37",   label:"דרגה 37",   salary:7829.69},
      {id:"37א",  label:"דרגה 37א",  salary:8372.19},
      {id:"37ב",  label:"דרגה 37ב",  salary:8914.69},
      {id:"38",   label:"דרגה 38",   salary:8760.64},
      {id:"38א",  label:"דרגה 38א",  salary:9303.14},
      {id:"38ב",  label:"דרגה 38ב",  salary:9845.64},
      {id:"39",   label:"דרגה 39",   salary:9549.1},
      {id:"39א",  label:"דרגה 39א",  salary:10091.97},
      {id:"39ב",  label:"דרגה 39ב",  salary:10634.85},
      {id:"40",   label:"דרגה 40",   salary:11151.97},
      {id:"40א",  label:"דרגה 40א",  salary:11694.84},
      {id:"40ב",  label:"דרגה 40ב",  salary:12237.71},
      {id:"41",   label:"דרגה 41",   salary:13038.8},
      {id:"41א",  label:"דרגה 41א",  salary:13581.66},
      {id:"41ב",  label:"דרגה 41ב",  salary:14124.53},
      {id:"42",   label:"דרגה 42",   salary:14451.94},
      {id:"42א",  label:"דרגה 42א",  salary:14994.78},
      {id:"42ב",  label:"דרגה 42ב",  salary:15537.67},
      {id:"43",   label:"דרגה 43",   salary:16019.2},
      {id:"43א",  label:"דרגה 43א",  salary:17453.89},
      {id:"43ב",  label:"דרגה 43ב",  salary:17996.78},
      {id:"44",   label:"דרגה 44",   salary:18101.7},
      {id:"44א",  label:"דרגה 44א",  salary:19722.89},
      {id:"44ב",  label:"דרגה 44ב",  salary:20336.36},
    ]
  },
  "587": {
    name: "עובדים חיוניים אקדמאים",
    shortName: "אקדמאים חיוניים",
    number: "587",
    color: "from-emerald-600 to-teal-700",
    btnActive: "bg-gradient-to-br from-emerald-600 to-teal-700",
    accent: "#059669",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"36",  label:"דרגה 36",  salary:6152.58},
      {id:"36א", label:"דרגה 36א", salary:6736.2},
      {id:"36ב", label:"דרגה 36ב", salary:7319.84},
      {id:"37",  label:"דרגה 37",  salary:6298.14},
      {id:"37א", label:"דרגה 37א", salary:6881.31},
      {id:"37ב", label:"דרגה 37ב", salary:7464.45},
      {id:"38",  label:"דרגה 38",  salary:6443.92},
      {id:"38א", label:"דרגה 38א", salary:7027.08},
      {id:"38ב", label:"דרגה 38ב", salary:7610.24},
      {id:"39",  label:"דרגה 39",  salary:6881.12},
      {id:"39א", label:"דרגה 39א", salary:7522.85},
      {id:"39ב", label:"דרגה 39ב", salary:8164.6},
      {id:"40",  label:"דרגה 40",  salary:7604.71},
      {id:"40א", label:"דרגה 40א", salary:8246.41},
      {id:"40ב", label:"דרגה 40ב", salary:8888.18},
      {id:"41",  label:"דרגה 41",  salary:8450.49},
      {id:"41א", label:"דרגה 41א", salary:9092.23},
      {id:"41ב", label:"דרגה 41ב", salary:9734.0},
      {id:"42",  label:"דרגה 42",  salary:9758.65},
      {id:"42א", label:"דרגה 42א", salary:10400.37},
      {id:"42ב", label:"דרגה 42ב", salary:11042.13},
      {id:"43",  label:"דרגה 43",  salary:11417.28},
      {id:"43א", label:"דרגה 43א", salary:12059.04},
      {id:"43ב", label:"דרגה 43ב", salary:12700.76},
      {id:"44",  label:"דרגה 44",  salary:12901.54},
      {id:"44א", label:"דרגה 44א", salary:13626.71},
      {id:"44ב", label:"דרגה 44ב", salary:14351.86},
    ]
  },
  "568": {
    name: "סגל בכיר מוביל",
    shortName: "בכיר מוביל",
    number: "568",
    color: "from-purple-600 to-violet-700",
    btnActive: "bg-gradient-to-br from-purple-600 to-violet-700",
    accent: "#7c3aed",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"מ-א-0",  label:"משנה/קצוב 43-45 - ותק 0",   salary:36760.78},
      {id:"מ-א-1",  label:"משנה/קצוב 43-45 - ותק 1",   salary:37317.76},
      {id:"מ-א-2",  label:"משנה/קצוב 43-45 - ותק 2+",  salary:37874.75},
      {id:"ב1-0",   label:"בכיר מוביל ב1 - ותק 0",     salary:33418.89},
      {id:"ב1-1",   label:"בכיר מוביל ב1 - ותק 1",     salary:33975.87},
      {id:"ב1-2",   label:"בכיר מוביל ב1 - ותק 2",     salary:34532.85},
      {id:"ב1-3",   label:"בכיר מוביל ב1 - ותק 3",     salary:35089.84},
      {id:"ב1-4",   label:"בכיר מוביל ב1 - ותק 4",     salary:35646.82},
      {id:"ב1-5",   label:"בכיר מוביל ב1 - ותק 5",     salary:36203.8},
      {id:"ב1-6+",  label:"בכיר מוביל ב1 - ותק 6+",    salary:36760.78},
      {id:"ב2-0",   label:"בכיר מוביל ב2 - ותק 0",     salary:31190.96},
      {id:"ב2-1",   label:"בכיר מוביל ב2 - ותק 1",     salary:31747.94},
      {id:"ב2-2",   label:"בכיר מוביל ב2 - ותק 2",     salary:32304.93},
      {id:"ב2-3",   label:"בכיר מוביל ב2 - ותק 3",     salary:32861.91},
      {id:"ב2-4",   label:"בכיר מוביל ב2 - ותק 4",     salary:33418.89},
      {id:"ב2-5",   label:"בכיר מוביל ב2 - ותק 5",     salary:33975.87},
      {id:"ב2-6+",  label:"בכיר מוביל ב2 - ותק 6+",    salary:34532.85},
      {id:"ב3-0",   label:"בכיר מוביל ב3 - ותק 0",     salary:28963.03},
      {id:"ב3-1",   label:"בכיר מוביל ב3 - ותק 1",     salary:29520.02},
      {id:"ב3-2",   label:"בכיר מוביל ב3 - ותק 2",     salary:30077.0},
      {id:"ב3-3",   label:"בכיר מוביל ב3 - ותק 3",     salary:30633.98},
      {id:"ב3-4",   label:"בכיר מוביל ב3 - ותק 4",     salary:31190.96},
      {id:"ב3-5",   label:"בכיר מוביל ב3 - ותק 5",     salary:31747.94},
      {id:"ב3-6+",  label:"בכיר מוביל ב3 - ותק 6+",    salary:32304.93},
    ]
  },
  "569": {
    name: "סגל בכיר שאינו מוביל",
    shortName: "בכיר לא מוביל",
    number: "569",
    color: "from-slate-600 to-gray-700",
    btnActive: "bg-gradient-to-br from-slate-600 to-gray-700",
    accent: "#475569",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"ג1-0",  label:"בכיר שאינו מוביל ג1 - ותק 0",  salary:28963.03},
      {id:"ג1-1",  label:"בכיר שאינו מוביל ג1 - ותק 1",  salary:29520.02},
      {id:"ג1-2",  label:"בכיר שאינו מוביל ג1 - ותק 2",  salary:30077.0},
      {id:"ג1-3",  label:"בכיר שאינו מוביל ג1 - ותק 3",  salary:30633.98},
      {id:"ג1-4",  label:"בכיר שאינו מוביל ג1 - ותק 4",  salary:31190.96},
      {id:"ג1-5",  label:"בכיר שאינו מוביל ג1 - ותק 5",  salary:31747.94},
      {id:"ג1-6+", label:"בכיר שאינו מוביל ג1 - ותק 6+", salary:32304.93},
      {id:"ג2-0",  label:"בכיר שאינו מוביל ג2 - ותק 0",  salary:24507.19},
      {id:"ג2-1",  label:"בכיר שאינו מוביל ג2 - ותק 1",  salary:25064.17},
      {id:"ג2-2",  label:"בכיר שאינו מוביל ג2 - ותק 2",  salary:25621.15},
      {id:"ג2-3",  label:"בכיר שאינו מוביל ג2 - ותק 3",  salary:26178.13},
      {id:"ג2-4",  label:"בכיר שאינו מוביל ג2 - ותק 4",  salary:26735.12},
      {id:"ג2-5",  label:"בכיר שאינו מוביל ג2 - ותק 5",  salary:27292.1},
      {id:"ג2-6",  label:"בכיר שאינו מוביל ג2 - ותק 6",  salary:27849.08},
      {id:"ג2-7",  label:"בכיר שאינו מוביל ג2 - ותק 7",  salary:28406.06},
      {id:"ג2-8+", label:"בכיר שאינו מוביל ג2 - ותק 8+", salary:28963.03},
    ]
  },
  "287": {
    name: "צוערים",
    shortName: "צוערים",
    number: "287",
    color: "from-orange-500 to-amber-600",
    btnActive: "bg-gradient-to-br from-orange-500 to-amber-600",
    accent: "#ea580c",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"409", label:"צוער",         salary:6925.23},
      {id:"410", label:"צוער ותיק",    salary:7576.26},
      {id:"411", label:"צוע.א1",       salary:7394.68},
      {id:"412", label:"צוע.א2",       salary:7864.12},
      {id:"413", label:"צוע.ב1 ותיק", salary:8045.7},
      {id:"414", label:"צוע.ב2 ותיק", salary:8515.14},
    ]
  },
  "555": {
    name: "מומחים (חדש)",
    shortName: "מומחים",
    number: "555",
    color: "from-rose-600 to-pink-700",
    btnActive: "bg-gradient-to-br from-rose-600 to-pink-700",
    accent: "#e11d48",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"11",   label:"דרגה 11",           salary:9797.32},
      {id:"12",   label:"דרגה 12",           salary:10373.64},
      {id:"13",   label:"דרגה 13",           salary:10949.94},
      {id:"14",   label:"דרגה 14",           salary:11526.26},
      {id:"15",   label:"דרגה 15",           salary:12102.57},
      {id:"16",   label:"דרגה 16",           salary:12678.88},
      {id:"17",   label:"דרגה 17",           salary:13255.2},
      {id:"18",   label:"דרגה 18",           salary:13831.52},
      {id:"205",  label:"מנהל משימות",       salary:14984.14},
      {id:"1",    label:"דרגה 1 (210)",      salary:16317.84},
      {id:"2",    label:"דרגה 2 (220)",      salary:17623.25},
      {id:"3",    label:"דרגה 3 (230)",      salary:18928.68},
      {id:"240א", label:"דרגה א (240)",      salary:20034.89},
      {id:"250ב", label:"דרגה ב (250)",      salary:21465.96},
      {id:"260ג", label:"דרגה ג (260)",      salary:22897.02},
      {id:"270ד", label:"דרגה ד (270)",      salary:24328.09},
      {id:"280ה", label:"דרגה ה (280)",      salary:25759.15},
      {id:"290ו", label:"דרגה ו (290)",      salary:27190.22},
      {id:"300ז", label:"דרגה ז (300)",      salary:28621.28},
    ]
  },
  "187": {
    name: "עובדים חיוניים משפטנים",
    shortName: "משפטנים חיוניים",
    number: "187",
    color: "from-cyan-600 to-sky-700",
    btnActive: "bg-gradient-to-br from-cyan-600 to-sky-700",
    accent: "#0891b2",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"300", label:"דרגה ג",   salary:7790.71},
      {id:"301", label:"דרגה ג1",  salary:8354.04},
      {id:"302", label:"דרגה ג2",  salary:8917.37},
      {id:"312", label:"דרגה א",   salary:10517.37},
      {id:"315", label:"דרגה א3",  salary:11088.03},
      {id:"318", label:"דרגה א6",  salary:11658.68},
      {id:"322", label:"דרגה א10", salary:11585.15},
      {id:"325", label:"דרגה א13", salary:12155.81},
      {id:"328", label:"דרגה א16", salary:12726.46},
      {id:"332", label:"דרגה א20", salary:12971.16},
      {id:"335", label:"דרגה א23", salary:13541.8},
      {id:"338", label:"דרגה א26", salary:14112.45},
      {id:"342", label:"דרגה א30", salary:14768.92},
      {id:"345", label:"דרגה א33", salary:15339.56},
      {id:"348", label:"דרגה א36", salary:15910.22},
      {id:"352", label:"דרגה א40", salary:16853.25},
      {id:"355", label:"דרגה א43", salary:17423.9},
      {id:"358", label:"דרגה א46", salary:17994.55},
      {id:"401", label:"דרגה א50", salary:19381.23},
      {id:"403", label:"דרגה א53", salary:20037.49},
      {id:"405", label:"דרגה א56", salary:20693.74},
    ]
  },
  "164": {
    name: "מומחים (ותיק)",
    shortName: "מומחים ותיק",
    number: "164",
    color: "from-fuchsia-600 to-purple-700",
    btnActive: "bg-gradient-to-br from-fuchsia-600 to-purple-700",
    accent: "#a21caf",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"210", label:"דרגה 1",  salary:18460.67},
      {id:"220", label:"דרגה 2",  salary:19937.52},
      {id:"230", label:"דרגה 3",  salary:21414.38},
      {id:"240", label:"דרגה א",  salary:22665.86},
      {id:"250", label:"דרגה ב",  salary:24284.86},
      {id:"260", label:"דרגה ג",  salary:25903.83},
      {id:"270", label:"דרגה ד",  salary:27522.82},
      {id:"280", label:"דרגה ה",  salary:29141.82},
      {id:"290", label:"דרגה ו",  salary:30760.8},
      {id:"300", label:"דרגה ז",  salary:32379.8},
    ]
  },
  "148": {
    name: "מנהל ומשק",
    shortName: "מנהל ומשק",
    number: "148",
    color: "from-teal-600 to-green-700",
    btnActive: "bg-gradient-to-br from-teal-600 to-green-700",
    accent: "#0d9488",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"100", label:"דרגה 37",   salary:7231.3},
      {id:"101", label:"דרגה 37א",  salary:7806.37},
      {id:"102", label:"דרגה 37ב",  salary:8381.46},
      {id:"110", label:"דרגה 38",   salary:7519.41},
      {id:"111", label:"דרגה 38א",  salary:8094.49},
      {id:"112", label:"דרגה 38ב",  salary:8669.56},
      {id:"120", label:"דרגה 39",   salary:8080.83},
      {id:"121", label:"דרגה 39א",  salary:8713.7},
      {id:"122", label:"דרגה 39ב",  salary:9346.56},
      {id:"130", label:"דרגה 40",   salary:8952.65},
      {id:"131", label:"דרגה 40א",  salary:9585.37},
      {id:"132", label:"דרגה 40ב",  salary:10218.25},
      {id:"140", label:"דרגה 41",   salary:9971.54},
      {id:"141", label:"דרגה 41א",  salary:10604.41},
      {id:"142", label:"דרגה 41ב",  salary:11237.28},
      {id:"150", label:"דרגה 42",   salary:11528.41},
      {id:"151", label:"דרגה 42א",  salary:12161.29},
      {id:"152", label:"דרגה 42ב",  salary:12794.16},
      {id:"160", label:"דרגה 43",   salary:13523.07},
      {id:"161", label:"דרגה 43א",  salary:14155.79},
      {id:"162", label:"דרגה 43ב",  salary:14788.67},
      {id:"170", label:"דרגה 44",   salary:15281.06},
      {id:"171", label:"דרגה 44א",  salary:15996.05},
      {id:"172", label:"דרגה 44ב",  salary:16711.2},
    ]
  },
  "64": {
    name: "לשכות שר ומנכ\"ל",
    shortName: "לשכות שר/מנכ\"ל",
    number: "64",
    color: "from-amber-600 to-yellow-600",
    btnActive: "bg-gradient-to-br from-amber-600 to-yellow-600",
    accent: "#d97706",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"80",  label:"דרגה א",   salary:7863.93},
      {id:"82",  label:"דרגה ב",   salary:8590.98},
      {id:"90",  label:"דרגה ג",   salary:8571.69},
      {id:"92",  label:"דרגה ד",   salary:9364.17},
      {id:"95",  label:"דרגה ה",   salary:9133.26},
      {id:"96",  label:"דרגה ו",   salary:9527.56},
      {id:"97",  label:"דרגה ז",   salary:10982.75},
      {id:"100", label:"דרגה ח",   salary:10001.19},
      {id:"102", label:"דרגה ט",   salary:10925.95},
      {id:"104", label:"דרגה י",   salary:11850.71},
      {id:"110", label:"דרגה יא",  salary:11054.28},
      {id:"112", label:"דרגה יב",  salary:11979.06},
      {id:"114", label:"דרגה יג",  salary:12903.81},
      {id:"120", label:"דרגה יד",  salary:12285.34},
      {id:"122", label:"דרגה טו",  salary:13210.06},
      {id:"124", label:"דרגה טז",  salary:14134.84},
      {id:"130", label:"דרגה יז",  salary:14062.35},
      {id:"132", label:"דרגה יח",  salary:14987.1},
      {id:"134", label:"דרגה יט",  salary:15911.88},
      {id:"140", label:"דרגה כ",   salary:16452.46},
      {id:"142", label:"דרגה כא",  salary:17377.25},
      {id:"144", label:"דרגה כב",  salary:18301.99},
      {id:"146", label:"דרגה כג",  salary:19305.3},
      {id:"265", label:"דרגה כד",  salary:25650.39},
    ]
  },
  "87": {
    name: "עובדים חיוניים אקדמאים (ותיק)",
    shortName: "אקדמאים ותיק",
    number: "87",
    color: "from-lime-600 to-green-600",
    btnActive: "bg-gradient-to-br from-lime-600 to-green-600",
    accent: "#65a30d",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"80",  label:"דרגה 36",  salary:6152.58},
      {id:"82",  label:"דרגה 36א", salary:6736.2},
      {id:"84",  label:"דרגה 36ב", salary:7319.84},
      {id:"90",  label:"דרגה 37",  salary:6298.14},
      {id:"92",  label:"דרגה 37א", salary:6881.31},
      {id:"94",  label:"דרגה 37ב", salary:7464.45},
      {id:"95",  label:"דרגה 38",  salary:6443.92},
      {id:"96",  label:"דרגה 38א", salary:7027.08},
      {id:"97",  label:"דרגה 38ב", salary:7610.24},
      {id:"100", label:"דרגה 39",  salary:6881.12},
      {id:"102", label:"דרגה 39א", salary:7522.85},
      {id:"104", label:"דרגה 39ב", salary:8164.6},
      {id:"110", label:"דרגה 40",  salary:7604.71},
      {id:"112", label:"דרגה 40א", salary:8246.41},
      {id:"114", label:"דרגה 40ב", salary:8888.18},
      {id:"120", label:"דרגה 41",  salary:8450.49},
      {id:"122", label:"דרגה 41א", salary:9092.23},
      {id:"124", label:"דרגה 41ב", salary:9734.0},
      {id:"130", label:"דרגה 42",  salary:9758.65},
      {id:"132", label:"דרגה 42א", salary:10400.37},
      {id:"134", label:"דרגה 42ב", salary:11042.13},
      {id:"140", label:"דרגה 43",  salary:11417.28},
      {id:"142", label:"דרגה 43א", salary:12059.04},
      {id:"144", label:"דרגה 43ב", salary:12700.76},
      {id:"150", label:"דרגה 44",  salary:12901.54},
      {id:"152", label:"דרגה 44א", salary:13626.71},
      {id:"154", label:"דרגה 44ב", salary:14351.86},
    ]
  },

  // כלכלנים נבחרים ותיק (14)
  "14": {
    name: "כלכלנים נבחרים (ותיק)",
    shortName: "כלכלנים ותיק",
    number: "14",
    color: "from-sky-600 to-blue-700",
    btnActive: "bg-gradient-to-br from-sky-600 to-blue-700",
    accent: "#0284c7",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"100", label:"דרגה 39",       salary:10803.06},
      {id:"102", label:"דרגה 39א",      salary:11417.23},
      {id:"104", label:"דרגה 39ב",      salary:12031.4},
      {id:"110", label:"דרגה 40",       salary:12616.44},
      {id:"112", label:"דרגה 40א",      salary:13230.59},
      {id:"114", label:"דרגה 40ב",      salary:13844.74},
      {id:"120", label:"דרגה 41",       salary:14751.04},
      {id:"122", label:"דרגה 41א",      salary:15365.18},
      {id:"124", label:"דרגה 41ב",      salary:15979.35},
      {id:"130", label:"דרגה 42",       salary:16349.75},
      {id:"132", label:"דרגה 42א",      salary:16963.89},
      {id:"134", label:"דרגה 42ב",      salary:17578.08},
      {id:"140", label:"דרגה 43",       salary:18122.82},
      {id:"142", label:"דרגה 43א",      salary:19745.92},
      {id:"144", label:"דרגה 43ב",      salary:20360.09},
      {id:"150", label:"דרגה 44",       salary:20478.8},
      {id:"152", label:"דרגה 44א",      salary:22312.89},
      {id:"154", label:"דרגה 44ב",      salary:23006.91},
      {id:"200", label:"משופר 1",       salary:19279.0},
      {id:"202", label:"משופר 1א",      salary:20435.74},
      {id:"204", label:"משופר 1ב",      salary:21592.48},
      {id:"210", label:"משופר 2",       salary:21849.53},
      {id:"212", label:"משופר 2א",      salary:23134.79},
      {id:"214", label:"משופר 2ב",      salary:24548.58},
    ]
  },

  // עובדים חיוניים משפטנים ותיק (987) - same table as 187
  "987": {
    name: "עובדים חיוניים משפטנים (987)",
    shortName: "משפטנים 987",
    number: "987",
    color: "from-cyan-700 to-sky-800",
    btnActive: "bg-gradient-to-br from-cyan-700 to-sky-800",
    accent: "#0e7490",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"b5-0",  label:"ב ללא גמול (ב5)",   salary:19061.29,  hourlyRate:48.83},
      {id:"b5-a",  label:"ב גמול א' (ב5)",    salary:19624.62,  hourlyRate:51.97},
      {id:"b5-b",  label:"ב גמול ב' (ב5)",    salary:20187.96,  hourlyRate:55.12},
      {id:"b1-0",  label:"ב1 ללא גמול (ב2)",  salary:19803.34,  hourlyRate:52.97},
      {id:"b1-a",  label:"ב1 גמול א' (ב3)",   salary:20374.0,  hourlyRate:56.16},
      {id:"b1-b",  label:"ב1 גמול ב' (ב6)",   salary:20944.66,  hourlyRate:59.35},
      {id:"b2-0",  label:"ב2 ללא גמול (ב20)", salary:20560.75,  hourlyRate:57.20},
      {id:"b2-a",  label:"ב2 גמול א' (ב23)",  salary:21131.43,  hourlyRate:60.39},
      {id:"b2-b",  label:"ב2 גמול ב' (ב26)",  salary:21702.08,  hourlyRate:63.58},
      {id:"a-0",   label:"א ללא גמול (א)",    salary:11179.32,  hourlyRate:62.47},
      {id:"a-a",   label:"א גמול א' (א3)",    salary:11749.98,  hourlyRate:65.66},
      {id:"a-b",   label:"א גמול ב' (א6)",    salary:12320.63,  hourlyRate:68.85},
      {id:"a1-0",  label:"א1 ללא גמול (א10)", salary:12314.31,  hourlyRate:68.81},
      {id:"a1-a",  label:"א1 גמול א' (א13)",  salary:12884.97,  hourlyRate:72.00},
      {id:"a1-b",  label:"א1 גמול ב' (א16)",  salary:13455.62,  hourlyRate:75.19},
      {id:"a2-0",  label:"א2 ללא גמול (א20)", salary:13787.56,  hourlyRate:77.05},
      {id:"a2-a",  label:"א2 גמול א' (א23)",  salary:14358.21,  hourlyRate:80.24},
      {id:"a2-b",  label:"א2 גמול ב' (א26)",  salary:14928.86,  hourlyRate:83.43},
      {id:"a3-0",  label:"א3 ללא גמול (א30)", salary:15698.46,  hourlyRate:87.73},
      {id:"a3-a",  label:"א3 גמול א' (א33)",  salary:16269.11,  hourlyRate:90.91},
      {id:"a3-b",  label:"א3 גמול ב' (א36)",  salary:16839.77,  hourlyRate:94.10},
      {id:"a4-0",  label:"א4 ללא גמול (א40)", salary:17913.98,  hourlyRate:100.11},
      {id:"a4-a",  label:"א4 גמול א' (א43)",  salary:18484.63,  hourlyRate:103.30},
      {id:"a4-b",  label:"א4 גמול ב' (א46)",  salary:19055.28,  hourlyRate:106.48},
      {id:"a5-0",  label:"א5 ללא גמול (א50)", salary:20601.08,  hourlyRate:115.12},
      {id:"a5-a",  label:"א5 גמול א' (א53)",  salary:21257.33,  hourlyRate:118.79},
      {id:"a5-b",  label:"א5 גמול ב' (א56)",  salary:21913.58,  hourlyRate:122.46},
    ]
  },

  // ── בכירים ──
  // בכירים ותיקים (557)
  "557": {
    name: "בכירים ותיקים (צמודי יוקר)",
    shortName: "בכירים ותיקים",
    number: "557",
    color: "from-gray-700 to-zinc-800",
    btnActive: "bg-gradient-to-br from-gray-700 to-zinc-800",
    accent: "#374151",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"340", label:"רמה 340",        salary:32087.47},
      {id:"350", label:"רמה 350",        salary:34091.27},
      {id:"360", label:"רמה 360",        salary:36097.29},
      {id:"370", label:"רמה 370",        salary:40711.8},
      {id:"450", label:"רמה 450 (מנהל מינהל האדמה)", salary:47109.32},
    ]
  },

  // בכירים בלשכות שר ומנכ"ל (864)
  "864": {
    name: "בכירים בלשכות שר ומנכ\"ל",
    shortName: "בכירים לשכות",
    number: "864",
    color: "from-stone-600 to-neutral-700",
    btnActive: "bg-gradient-to-br from-stone-600 to-neutral-700",
    accent: "#57534e",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"145", label:"דרגה 7 (145)", salary:32087.46},
      {id:"150", label:"דרגה 8 (150)", salary:34092.06},
    ]
  },

  // ── מומחים ──
  // מומחים בשירותי הביטחון (965)
  "965": {
    name: "מומחים בשירותי הביטחון",
    shortName: "מומחים ביטחון",
    number: "965",
    color: "from-red-700 to-rose-800",
    btnActive: "bg-gradient-to-br from-red-700 to-rose-800",
    accent: "#b91c1c",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"80",  label:"דרגה 18",  salary:7465.34},
      {id:"95",  label:"דרגה 38",  salary:8958.4},
      {id:"100", label:"דרגה 39",  salary:10451.47},
      {id:"110", label:"דרגה 40",  salary:11944.53},
      {id:"120", label:"דרגה 41",  salary:13437.59},
      {id:"130", label:"דרגה 42",  salary:14930.65},
      {id:"140", label:"דרגה 43",  salary:16423.72},
      {id:"210", label:"דרגה 1",   salary:17831.2},
      {id:"220", label:"דרגה 2",   salary:19257.7},
      {id:"230", label:"דרגה 3",   salary:20684.2},
      {id:"240", label:"דרגה א",   salary:21892.99},
      {id:"250", label:"דרגה ב",   salary:23456.79},
      {id:"260", label:"דרגה ג",   salary:25020.55},
      {id:"270", label:"דרגה ד",   salary:26584.35},
      {id:"280", label:"דרגה ה",   salary:28148.14},
      {id:"290", label:"דרגה ו",   salary:29711.92},
      {id:"300", label:"דרגה ז",   salary:31275.71},
      {id:"310", label:"דרגה ח",   salary:32386.08},
      {id:"320", label:"דרגה ט",   salary:33928.3},
      {id:"330", label:"דרגה י",   salary:35470.49},
      {id:"340", label:"דרגה יא",  salary:37649.83},
      {id:"350", label:"דרגה יב",  salary:39097.89},
      {id:"360", label:"דרגה יג",  salary:40097.06},
      {id:"370", label:"דרגה יד",  salary:41639.24},
      {id:"380", label:"דרגה טו",  salary:43181.45},
    ]
  },

  // ── מנהל ומשק ──
  // מנהל ומשק ותיק (948) - same as 148
  "948": {
    name: "מנהל ומשק (ותיק)",
    shortName: "מנהל ומשק ותיק",
    number: "948",
    color: "from-teal-700 to-cyan-800",
    btnActive: "bg-gradient-to-br from-teal-700 to-cyan-800",
    accent: "#0f766e",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"100", label:"דרגה 37",  salary:7231.3},
      {id:"101", label:"דרגה 37א", salary:7806.37},
      {id:"102", label:"דרגה 37ב", salary:8381.46},
      {id:"110", label:"דרגה 38",  salary:7519.41},
      {id:"111", label:"דרגה 38א", salary:8094.49},
      {id:"112", label:"דרגה 38ב", salary:8669.56},
      {id:"120", label:"דרגה 39",  salary:8080.83},
      {id:"121", label:"דרגה 39א", salary:8713.7},
      {id:"122", label:"דרגה 39ב", salary:9346.56},
      {id:"130", label:"דרגה 40",  salary:8952.65},
      {id:"131", label:"דרגה 40א", salary:9585.37},
      {id:"132", label:"דרגה 40ב", salary:10218.25},
      {id:"140", label:"דרגה 41",  salary:9971.54},
      {id:"141", label:"דרגה 41א", salary:10604.41},
      {id:"142", label:"דרגה 41ב", salary:11237.28},
      {id:"150", label:"דרגה 42",  salary:11528.41},
      {id:"151", label:"דרגה 42א", salary:12161.29},
      {id:"152", label:"דרגה 42ב", salary:12794.16},
      {id:"160", label:"דרגה 43",  salary:13523.07},
      {id:"161", label:"דרגה 43א", salary:14155.79},
      {id:"162", label:"דרגה 43ב", salary:14788.67},
      {id:"170", label:"דרגה 44",  salary:15281.06},
      {id:"171", label:"דרגה 44א", salary:15996.05},
      {id:"172", label:"דרגה 44ב", salary:16711.2},
    ]
  },

  // לשכות שר ומנכ"ל חדש (564)
  "564": {
    name: "לשכות שר ומנכ\"ל (חדש)",
    shortName: "לשכות שר/מנכ\"ל חדש",
    number: "564",
    color: "from-yellow-600 to-amber-700",
    btnActive: "bg-gradient-to-br from-yellow-600 to-amber-700",
    accent: "#ca8a04",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"70",  label:"דרגה א",   salary:6849.25},
      {id:"72",  label:"דרגה ב",   salary:7070.88},
      {id:"80",  label:"דרגה ג",   salary:7863.93},
      {id:"82",  label:"דרגה ד",   salary:8590.98},
      {id:"90",  label:"דרגה ה",   salary:8571.69},
      {id:"92",  label:"דרגה ו",   salary:9364.17},
      {id:"95",  label:"דרגה ז",   salary:9133.26},
      {id:"96",  label:"דרגה ח",   salary:9527.56},
      {id:"97",  label:"דרגה ט",   salary:10982.75},
      {id:"100", label:"דרגה י",   salary:10001.19},
      {id:"102", label:"דרגה יא",  salary:10925.95},
      {id:"104", label:"דרגה יב",  salary:11850.71},
      {id:"110", label:"דרגה יג",  salary:11054.28},
      {id:"112", label:"דרגה יד",  salary:11979.06},
      {id:"114", label:"דרגה טו",  salary:12903.81},
      {id:"120", label:"דרגה טז",  salary:12285.34},
      {id:"122", label:"דרגה יז",  salary:13210.06},
      {id:"124", label:"דרגה יח",  salary:14134.84},
      {id:"130", label:"דרגה יט",  salary:14062.35},
      {id:"132", label:"דרגה כ",   salary:14987.1},
      {id:"134", label:"דרגה כא",  salary:15911.88},
      {id:"140", label:"דרגה כב",  salary:16452.46},
      {id:"142", label:"דרגה כג",  salary:17377.25},
      {id:"144", label:"דרגה כד",  salary:18301.99},
      {id:"146", label:"דרגה כה",  salary:17440.84},
      {id:"148", label:"דרגה כו",  salary:19257.69},
      {id:"149", label:"דרגה כז",  salary:20684.2},
      {id:"250", label:"דרגה כח",  salary:21920.31},
      {id:"251", label:"דרגה כט",  salary:22587.82},
      {id:"260", label:"דרגה ל",   salary:23381.68},
      {id:"265", label:"דרגה לא",  salary:23719.53},
      {id:"270", label:"דרגה לב",  salary:24847.21},
      {id:"280", label:"דרגה לג",  salary:25936.48},
      {id:"290", label:"דרגה לד",  salary:27089.22},
      {id:"300", label:"דרגה לה",  salary:28241.94},
      {id:"310", label:"דרגה לו",  salary:29394.68},
      {id:"145", label:"דרגה לז",  salary:32087.46},
      {id:"150", label:"דרגה לח",  salary:34092.06},
    ]
  },

  // ── מיוחדים ──
  // צוערים חדש (554)
  "554": {
    name: "צוערים (חדש)",
    shortName: "צוערים חדש",
    number: "554",
    color: "from-orange-600 to-red-600",
    btnActive: "bg-gradient-to-br from-orange-600 to-red-600",
    accent: "#ea580c",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"409", label:"צוער",         salary:6121.38},
      {id:"410", label:"צוער ותיק",    salary:6696.84},
      {id:"411", label:"צוע.א1",       salary:6536.33},
      {id:"412", label:"צוע.א2",       salary:6951.28},
      {id:"413", label:"צוע.ב1 ותיק", salary:7111.78},
      {id:"414", label:"צוע.ב2 ותיק", salary:7526.74},
    ]
  },

  // יחידת היעדים (167)
  "167": {
    name: "יחידת היעדים",
    shortName: "יחידת היעדים",
    number: "167",
    color: "from-indigo-700 to-blue-800",
    btnActive: "bg-gradient-to-br from-indigo-700 to-blue-800",
    accent: "#3730a3",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"101", label:"ראש ענף 1",             salary:11083.9},
      {id:"102", label:"ראש ענף 2",             salary:11735.9},
      {id:"103", label:"ראש ענף 3",             salary:12387.88},
      {id:"111", label:"מרכז בכיר 1",           salary:12387.88},
      {id:"112", label:"מרכז בכיר 2",           salary:13691.87},
      {id:"113", label:"מרכז בכיר 3",           salary:14995.86},
      {id:"121", label:"מנהל תחום תיאום 1",    salary:13691.87},
      {id:"122", label:"מנהל תחום תיאום 2",    salary:14995.86},
      {id:"123", label:"מנהל תחום תיאום 3",    salary:16951.84},
      {id:"131", label:"מנהל תחום מעקב 1",     salary:13691.87},
      {id:"132", label:"מנהל תחום מעקב 2",     salary:14995.86},
      {id:"133", label:"מנהל תחום מעקב 3",     salary:16951.84},
      {id:"134", label:"מנהל תחום מעקב 4",     salary:20211.81},
    ]
  },

  // חוקרים במחלקה לחקירות שוטרים (168)
  "168": {
    name: "חוקרים - חקירות שוטרים",
    shortName: "חוקרי שוטרים",
    number: "168",
    color: "from-blue-800 to-indigo-900",
    btnActive: "bg-gradient-to-br from-blue-800 to-indigo-900",
    accent: "#1e3a8a",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"10", label:"צוער",                           salary:7038.35},
      {id:"20", label:"חוקר א׳",                        salary:7678.2},
      {id:"21", label:"חוקר א׳ + גמול השתלמות א׳",     salary:8190.08},
      {id:"22", label:"חוקר א׳ + גמול השתלמות א׳+ב׳",  salary:8701.96},
      {id:"30", label:"חוקר ב׳",                        salary:8573.99},
      {id:"31", label:"חוקר ב׳ + גמול א׳",             salary:9085.87},
      {id:"32", label:"חוקר ב׳ + גמול א׳+ב׳",          salary:9597.74},
      {id:"40", label:"חוקר ג׳",                        salary:9341.8},
      {id:"41", label:"חוקר ג׳ + גמול א׳",             salary:9853.68},
      {id:"42", label:"חוקר ג׳ + גמול א׳+ב׳",          salary:10365.56},
      {id:"50", label:"חוקר בכיר א׳",                  salary:10237.59},
      {id:"51", label:"חוקר בכיר א׳ + גמול א׳",       salary:10749.47},
      {id:"52", label:"חוקר בכיר א׳ + גמול א׳+ב׳",    salary:11261.36},
      {id:"60", label:"חוקר בכיר ב׳",                  salary:11133.38},
      {id:"61", label:"חוקר בכיר ב׳ + גמול א׳",       salary:11645.27},
      {id:"62", label:"חוקר בכיר ב׳ + גמול א׳+ב׳",    salary:12157.15},
      {id:"70", label:"חוקר בכיר ג׳",                  salary:12029.17},
      {id:"71", label:"חוקר בכיר ג׳ + גמול א׳",       salary:12541.06},
      {id:"72", label:"חוקר בכיר ג׳ + גמול א׳+ב׳",    salary:13052.92},
      {id:"75", label:"ראש שלוחה",                      salary:12808.95},
      {id:"76", label:"ראש שלוחה + גמול א׳",           salary:13320.83},
      {id:"77", label:"ראש שלוחה + גמול א׳+ב׳",        salary:13832.7},
      {id:"80", label:"סגן ראש צוות",                   salary:12924.96},
      {id:"90", label:"ראש צוות",                       salary:14204.67},
      {id:"91", label:"ראש צוות + גמול א׳",            salary:14780.54},
      {id:"92", label:"ראש צוות + גמול א׳+ב׳",         salary:15356.39},
    ]
  },

  // מינהל תעופה אזרחי (122)
  "122": {
    name: "מינהל תעופה אזרחי",
    shortName: "תעופה אזרחי",
    number: "122",
    color: "from-sky-500 to-cyan-600",
    btnActive: "bg-gradient-to-br from-sky-500 to-cyan-600",
    accent: "#0ea5e9",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"10",  label:"טייסים 1",   salary:22335.85},
      {id:"11",  label:"טייסים 1א",  salary:22972.29},
      {id:"12",  label:"טייסים 1ב",  salary:23610.08},
      {id:"20",  label:"טייסים 2",   salary:19666.54},
      {id:"21",  label:"טייסים 2א",  salary:20303.35},
      {id:"22",  label:"טייסים 2ב",  salary:20941.16},
      {id:"30",  label:"טייסים 3",   salary:17560.29},
      {id:"31",  label:"טייסים 3א",  salary:18196.34},
      {id:"32",  label:"טייסים 3ב",  salary:18834.12},
      {id:"40",  label:"טייסים 4",   salary:16154.49},
      {id:"41",  label:"טייסים 4א",  salary:16791.67},
      {id:"42",  label:"טייסים 4ב",  salary:17429.46},
      {id:"50",  label:"טייסים 5",   salary:14749.9},
      {id:"51",  label:"טייסים 5א",  salary:15386.97},
      {id:"52",  label:"טייסים 5ב",  salary:16024.76},
      {id:"60",  label:"טייסים 6",   salary:13345.33},
      {id:"61",  label:"טייסים 6א",  salary:13982.29},
      {id:"62",  label:"טייסים 6ב",  salary:14620.1},
      {id:"70",  label:"טייסים 7",   salary:12642.42},
      {id:"71",  label:"טייסים 7א",  salary:13279.96},
      {id:"72",  label:"טייסים 7ב",  salary:13917.77},
      {id:"80",  label:"מהנדסים 8",  salary:14502.11},
      {id:"81",  label:"מהנדסים 8א", salary:15233.45},
      {id:"82",  label:"מהנדסים 8ב", salary:15965.06},
      {id:"90",  label:"מהנדסים 9",  salary:13293.8},
      {id:"91",  label:"מהנדסים 9א", salary:14024.96},
      {id:"92",  label:"מהנדסים 9ב", salary:14756.59},
      {id:"100", label:"מהנדסים 10", salary:12085.5},
      {id:"110", label:"מהנדסים 11", salary:10877.19},
      {id:"120", label:"מהנדסים 12", salary:9668.9},
      {id:"130", label:"מהנדסים 13", salary:8862.95},
      {id:"140", label:"מהנדסים 14", salary:8056.99},
      {id:"150", label:"מהנדסים 15", salary:7251.05},
      {id:"160", label:"הנדסאים 16", salary:8932.87},
      {id:"170", label:"הנדסאים 17", salary:8039.83},
      {id:"180", label:"הנדסאים 18", salary:7146.79},
      {id:"190", label:"הנדסאים 19", salary:6252.51},
      {id:"210", label:"מפקח מובילים א",  salary:28214.22},
      {id:"220", label:"מפקח מובילים ב",  salary:29440.93},
      {id:"230", label:"מפקח מובילים ג",  salary:30667.63},
      {id:"240", label:"מפקח מובילים ד",  salary:31894.35},
      {id:"250", label:"מפקח מובילים ה",  salary:33121.05},
      {id:"260", label:"מפקח ראשי ו",     salary:34347.75},
      {id:"270", label:"מפקח ראשי ז",     salary:35574.46},
      {id:"280", label:"מפקח ראשי ח",     salary:36801.17},
      {id:"290", label:"מפקח ראשי ט",     salary:38027.87},
      {id:"300", label:"מפקח ראשי י",     salary:39254.57},
    ]
  },

  // ── ביטחון ואחרים ──
  // מאבטחי מתקן (384)
  "384": {
    name: "מאבטחי מתקן",
    shortName: "מאבטחי מתקן",
    number: "384",
    color: "from-zinc-600 to-stone-700",
    btnActive: "bg-gradient-to-br from-zinc-600 to-stone-700",
    accent: "#52525b",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"10", label:"מאבטח מתקן",        salary:6557.89},
      {id:"20", label:"קורס אחיד",          salary:7090.45},
      {id:"30", label:"קב\"ט",              salary:8645.49},
    ]
  },

  // מאבטחים (387)
  "387": {
    name: "מאבטחים",
    shortName: "מאבטחים",
    number: "387",
    color: "from-slate-700 to-gray-800",
    btnActive: "bg-gradient-to-br from-slate-700 to-gray-800",
    accent: "#334155",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"810", label:"מאבטח 1",           salary:5904.01},
      {id:"820", label:"מאבטח 2",           salary:6015.7},
      {id:"830", label:"מאבטח 3",           salary:6448.33},
      {id:"840", label:"מדריך ירי/קמ\"ג 1", salary:6927.92},
      {id:"850", label:"מדריך ירי/קמ\"ג 2", salary:7365.97},
      {id:"815", label:"מאבטח 1 ב.מ.",      salary:6154.64},
      {id:"825", label:"מאבטח 2 ב.מ.",      salary:6270.26},
      {id:"835", label:"מאבטח 3 ב.מ.",      salary:6721.66},
      {id:"860", label:"חמוש 1",             salary:7120.09},
      {id:"870", label:"חמוש 2",             salary:7238.76},
      {id:"880", label:"חמוש 3",             salary:7772.76},
      {id:"890", label:"לא חמוש 1",          salary:6625.63},
      {id:"900", label:"לא חמוש 2",          salary:6764.08},
      {id:"910", label:"לא חמוש 3",          salary:7238.76},
      {id:"920", label:"מדריך ירי 1",        salary:8306.76},
      {id:"930", label:"מדריך ירי 2",        salary:9491.28},
    ]
  },

  // עובדי המטה לביטחון לאומי (522)
  "522": {
    name: "עובדי המטה לביטחון לאומי",
    shortName: "מטה ביטחון לאומי",
    number: "522",
    color: "from-red-800 to-red-900",
    btnActive: "bg-gradient-to-br from-red-800 to-red-900",
    accent: "#991b1b",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"130", label:"עוזר ראש מדור 1", salary:9813.64},
      {id:"140", label:"עוזר ראש מדור 2", salary:11040.35},
      {id:"150", label:"עוזר ראש מדור 3", salary:12267.06},
      {id:"160", label:"עוזר ראש מדור 4", salary:13493.76},
      {id:"170", label:"ראש מדור 1",      salary:14720.47},
      {id:"180", label:"ראש מדור 2",      salary:15947.16},
      {id:"190", label:"ראש מדור 3",      salary:17173.87},
      {id:"200", label:"ראש ענף 1",       salary:18400.58},
      {id:"210", label:"ראש ענף 2",       salary:19627.29},
      {id:"220", label:"ראש ענף 3",       salary:20853.99},
      {id:"230", label:"ראש מחלקה 1",     salary:22080.7},
      {id:"240", label:"ראש מחלקה 2",     salary:23307.4},
      {id:"250", label:"ראש מחלקה 3",     salary:24534.11},
      {id:"260", label:"ראש חטיבה 1",     salary:28214.22},
      {id:"270", label:"ראש חטיבה 2",     salary:29440.93},
      {id:"280", label:"ראש חטיבה 3",     salary:31004.97},
      {id:"290", label:"ראש אגף",         salary:32829.08},
      {id:"300", label:"סגן ראש המל\"ל",  salary:39746.48},
      {id:"310", label:"סגן ראש המל\"ל חדש", salary:40707.36},
      {id:"320", label:"משנה לראש המל\"ל", salary:41790.09},
    ]
  },

  // עובדי חדר מצב קיברנטי (589)
  "589": {
    name: "עובדי חדר מצב קיברנטי",
    shortName: "חדר מצב קיברנטי",
    number: "589",
    color: "from-violet-700 to-purple-800",
    btnActive: "bg-gradient-to-br from-violet-700 to-purple-800",
    accent: "#6d28d9",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"100", label:"עובד חדר מצב קיברנטי (שעתי)", salary: 54.92 * 182},
    ]
  },

  // עובדי אית"ן (109)
  "109": {
    name: "עובדי אית\"ן ואית\"ן אבטחה",
    shortName: "עובדי אית\"ן",
    number: "109",
    color: "from-emerald-700 to-green-800",
    btnActive: "bg-gradient-to-br from-emerald-700 to-green-800",
    accent: "#047857",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"1",  label:"דרגה 1",   salary:5948.14},
      {id:"2",  label:"דרגה 2",   salary:6090.4},
      {id:"3",  label:"דרגה 3",   salary:6234.85},
      {id:"4",  label:"דרגה 4",   salary:6378.95},
      {id:"5",  label:"דרגה 5",   salary:6811.76},
      {id:"6",  label:"דרגה 6",   salary:7528.03},
      {id:"10", label:"דרגה 10",  salary:6443.39},
      {id:"11", label:"דרגה 11",  salary:6880.56},
      {id:"12", label:"דרגה 12",  salary:7604.08},
    ]
  },

  // ── דירוג 402 ──
  "402": {
    name: "כלכלנים דירוג 402",
    shortName: "דירוג 402",
    number: "402",
    color: "from-blue-700 to-violet-800",
    btnActive: "bg-gradient-to-br from-blue-700 to-violet-800",
    accent: "#1d4ed8",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"36",   label:"דרגה 36",  salary:8264.16},
      {id:"36א",  label:"דרגה 36א", salary:8764.16},
      {id:"37",   label:"דרגה 37",  salary:8861.30},
      {id:"37א",  label:"דרגה 37א", salary:9361.30},
      {id:"38",   label:"דרגה 38",  salary:9819.78},
      {id:"38א",  label:"דרגה 38א", salary:10319.78},
      {id:"39",   label:"דרגה 39",  salary:10631.57},
      {id:"39א",  label:"דרגה 39א", salary:11131.57},
      {id:"40",   label:"דרגה 40",  salary:12281.86},
      {id:"40א",  label:"דרגה 40א", salary:12781.86},
      {id:"41",   label:"דרגה 41",  salary:14224.50},
      {id:"41א",  label:"דרגה 41א", salary:14724.50},
      {id:"42",   label:"דרגה 42",  salary:15679.44},
      {id:"42א",  label:"דרגה 42א", salary:16179.44},
      {id:"43",   label:"דרגה 43",  salary:17293.07},
      {id:"43א",  label:"דרגה 43א", salary:17793.07},
      {id:"44",   label:"דרגה 44",  salary:19437.16},
      {id:"44א",  label:"דרגה 44א", salary:19937.16},
    ]
  },

  // ── חוזים נוספים מהמאגר המלא ──

  "514": { name:"כלכלנים נבחרים (514)", shortName:"כלכלנים 514", number:"514",
    color:"from-blue-500 to-sky-600", btnActive:"bg-gradient-to-br from-blue-500 to-sky-600", accent:"#0284c7",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"דרגה 39",salary:11122.84},{id:"102",label:"דרגה 39א",salary:11737.0},{id:"104",label:"דרגה 39ב",salary:12351.18},
      {id:"110",label:"דרגה 40",salary:12989.89},{id:"112",label:"דרגה 40א",salary:13604.04},{id:"114",label:"דרגה 40ב",salary:14218.19},
      {id:"120",label:"דרגה 41",salary:15187.68},{id:"122",label:"דרגה 41א",salary:15801.81},{id:"124",label:"דרגה 41ב",salary:16415.99},
      {id:"130",label:"דרגה 42",salary:16833.69},{id:"132",label:"דרגה 42א",salary:17447.84},{id:"134",label:"דרגה 42ב",salary:18062.02},
      {id:"140",label:"דרגה 43",salary:18659.26},{id:"142",label:"דרגה 43א",salary:20282.35},{id:"144",label:"דרגה 43ב",salary:20896.53},
      {id:"150",label:"דרגה 44",salary:21084.97},{id:"152",label:"דרגה 44א",salary:22919.06},{id:"154",label:"דרגה 44ב",salary:23613.08},
    ]},

  "964": { name:"מומחים (964)", shortName:"מומחים 964", number:"964",
    color:"from-rose-500 to-red-600", btnActive:"bg-gradient-to-br from-rose-500 to-red-600", accent:"#e11d48",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"130",label:"דרגה 11",salary:11411.98},{id:"140",label:"דרגה 12",salary:12083.28},{id:"150",label:"דרגה 13",salary:12754.56},
      {id:"160",label:"דרגה 14",salary:13425.86},{id:"170",label:"דרגה 15",salary:14097.15},{id:"180",label:"דרגה 16",salary:14768.44},
      {id:"190",label:"דרגה 17",salary:15439.74},{id:"200",label:"דרגה 18",salary:16111.04},{id:"205",label:"מנהל משימות",salary:17453.62},
      {id:"210",label:"דרגה 1",salary:19007.11},{id:"220",label:"דרגה 2",salary:20527.67},{id:"230",label:"דרגה 3",salary:22048.24},
      {id:"240",label:"דרגה א",salary:23336.76},{id:"250",label:"דרגה ב",salary:25003.69},{id:"260",label:"דרגה ג",salary:26670.59},
      {id:"270",label:"דרגה ד",salary:28337.5},{id:"280",label:"דרגה ה",salary:30004.42},{id:"290",label:"דרגה ו",salary:31671.32},
      {id:"300",label:"דרגה ז",salary:33338.24},{id:"350",label:"דרגה 350 (חדשה)",salary:43913.56},{id:"600",label:"דרגה 600 (חדשה)",salary:68542.03},
    ]},

  "48": { name:"פרה-רפואיים (48)", shortName:"פרה-רפואי", number:"48",
    color:"from-red-500 to-pink-600", btnActive:"bg-gradient-to-br from-red-500 to-pink-600", accent:"#ef4444",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"11-0",label:"דרגה 1 (0-9 שנ')",salary:6514.94},{id:"21-0",label:"דרגה 2 (0-9 שנ')",salary:7033.06},{id:"31-0",label:"דרגה 3 (0-9 שנ')",salary:7355.76},
      {id:"41-0",label:"דרגה 4 (0-9 שנ')",salary:7694.75},{id:"51-0",label:"דרגה 5 (0-9 שנ')",salary:8052.99},{id:"61-0",label:"דרגה 6 (0-9 שנ')",salary:8446.78},
      {id:"71-0",label:"דרגה 7 (0-9 שנ')",salary:8862.74},{id:"81-0",label:"דרגה 8 (0-9 שנ')",salary:9302.39},{id:"91-0",label:"דרגה 9 (0-9 שנ')",salary:9891.57},
      {id:"11-10",label:"דרגה 1 (10-19 שנ')",salary:7765.8},{id:"21-10",label:"דרגה 2 (10-19 שנ')",salary:8383.4},{id:"31-10",label:"דרגה 3 (10-19 שנ')",salary:8768.06},
      {id:"41-10",label:"דרגה 4 (10-19 שנ')",salary:9172.16},{id:"51-10",label:"דרגה 5 (10-19 שנ')",salary:9599.17},{id:"61-10",label:"דרגה 6 (10-19 שנ')",salary:10068.54},
      {id:"71-10",label:"דרגה 7 (10-19 שנ')",salary:10564.38},{id:"81-10",label:"דרגה 8 (10-19 שנ')",salary:11088.46},{id:"91-10",label:"דרגה 9 (10-19 שנ')",salary:11790.74},
      {id:"11-20",label:"דרגה 1 (20+ שנ')",salary:9256.83},{id:"21-20",label:"דרגה 2 (20+ שנ')",salary:9993.0},{id:"31-20",label:"דרגה 3 (20+ שנ')",salary:10451.53},
      {id:"41-20",label:"דרגה 4 (20+ שנ')",salary:10933.2},{id:"51-20",label:"דרגה 5 (20+ שנ')",salary:11442.21},{id:"61-20",label:"דרגה 6 (20+ שנ')",salary:12001.7},
      {id:"71-20",label:"דרגה 7 (20+ שנ')",salary:12592.75},{id:"81-20",label:"דרגה 8 (20+ שנ')",salary:13217.44},{id:"91-20",label:"דרגה 9 (20+ שנ')",salary:14054.57},
    ]},

  "110": { name:"משרד הפנים - דירוג 110", shortName:"פנים 110", number:"110",
    color:"from-indigo-500 to-blue-600", btnActive:"bg-gradient-to-br from-indigo-500 to-blue-600", accent:"#4338ca",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"300",label:"א36",salary:6062.45},{id:"310",label:"ב36",salary:6668.69},{id:"311",label:"ג37",salary:7274.97},
      {id:"312",label:"ד37",salary:7679.1},{id:"313",label:"ה37",salary:8083.26},{id:"314",label:"א38",salary:8689.54},
      {id:"315",label:"ב38",salary:9295.77},{id:"322",label:"ג38",salary:9699.92},{id:"323",label:"ד38",salary:10475.91},
      {id:"324",label:"א39",salary:10710.32},{id:"325",label:"ב39",salary:11316.59},{id:"330",label:"א40",salary:11720.73},
      {id:"340",label:"ב40",salary:12108.56},{id:"350",label:"41",salary:13682.86},{id:"360",label:"42",salary:15597.61},{id:"370",label:"43",salary:17313.35},
    ]},

  "610": { name:"משרד הפנים - דירוג 610", shortName:"פנים 610", number:"610",
    color:"from-indigo-600 to-violet-700", btnActive:"bg-gradient-to-br from-indigo-600 to-violet-700", accent:"#4c1d95",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"300",label:"א36",salary:6062.45},{id:"310",label:"ב36",salary:6668.69},{id:"311",label:"ג37",salary:7274.97},
      {id:"312",label:"ד37",salary:7679.1},{id:"313",label:"ה37",salary:8083.26},{id:"314",label:"א38",salary:8689.54},
      {id:"315",label:"ב38",salary:9295.77},{id:"322",label:"ג38",salary:9699.92},{id:"323",label:"ד38",salary:10475.91},
      {id:"324",label:"א39",salary:10710.32},{id:"325",label:"ב39",salary:11316.59},{id:"330",label:"א40",salary:11720.73},
      {id:"340",label:"ב40",salary:12108.56},{id:"350",label:"41",salary:13682.86},{id:"360",label:"42",salary:15597.61},{id:"370",label:"43",salary:17313.35},
    ]},

  "553": { name:"משרד הפנים חדש (553)", shortName:"פנים חדש 553", number:"553",
    color:"from-blue-600 to-indigo-700", btnActive:"bg-gradient-to-br from-blue-600 to-indigo-700", accent:"#2563eb",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"300",label:"א36",salary:5358.73},{id:"310",label:"ב36",salary:5894.63},{id:"311",label:"ג37",salary:6430.52},
      {id:"312",label:"ד37",salary:6787.74},{id:"313",label:"ה37",salary:7144.98},{id:"314",label:"א38",salary:7680.88},
      {id:"315",label:"ב38",salary:8216.75},{id:"322",label:"ג38",salary:8574.0},{id:"323",label:"ד38",salary:9259.91},
      {id:"324",label:"א39",salary:9467.11},{id:"325",label:"ב39",salary:10003.02},{id:"330",label:"א40",salary:10360.24},
      {id:"340",label:"ב40",salary:10703.06},{id:"350",label:"41",salary:12094.62},{id:"360",label:"42",salary:13787.11},{id:"370",label:"43",salary:15303.68},
    ]},

  "556": { name:"עובדי המשטרה הירוקה (556)", shortName:"משטרה ירוקה", number:"556",
    color:"from-green-600 to-emerald-700", btnActive:"bg-gradient-to-br from-green-600 to-emerald-700", accent:"#16a34a",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"150",label:"דרגה 15",salary:7588.68},{id:"151",label:"15א",salary:8178.63},{id:"152",label:"15ב",salary:8613.29},
      {id:"160",label:"דרגה 16",salary:8159.5},{id:"161",label:"16א",salary:8749.48},{id:"162",label:"16ב",salary:9184.15},
      {id:"170",label:"דרגה 17",salary:8856.95},{id:"171",label:"17א",salary:9446.9},{id:"172",label:"17ב",salary:9881.59},
      {id:"180",label:"דרגה 18",salary:9542.92},{id:"181",label:"18א",salary:10132.9},{id:"182",label:"18ב",salary:10567.57},
      {id:"190",label:"דרגה 19",salary:10465.17},{id:"191",label:"19א",salary:11055.13},{id:"192",label:"19ב",salary:11489.79},
      {id:"200",label:"דרגה 20",salary:11584.05},{id:"201",label:"20א",salary:12174.02},{id:"202",label:"20ב",salary:12608.69},
      {id:"210",label:"דרגה 21",salary:12742.46},{id:"211",label:"21א",salary:13332.43},{id:"212",label:"21ב",salary:13767.11},
      {id:"220",label:"דרגה 22",salary:14104.63},{id:"221",label:"22א",salary:14694.59},{id:"222",label:"22ב",salary:15129.26},
    ]},

  "210": { name:"סיירת ירוקה (210)", shortName:"סיירת ירוקה 210", number:"210",
    color:"from-green-500 to-teal-600", btnActive:"bg-gradient-to-br from-green-500 to-teal-600", accent:"#059669",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"250",label:"15",salary:8195.77},{id:"251",label:"15א",salary:8832.92},{id:"252",label:"15ב",salary:9302.36},
      {id:"253",label:"16",salary:8812.25},{id:"254",label:"16א",salary:9449.41},{id:"255",label:"16ב",salary:9918.86},
      {id:"256",label:"17",salary:9565.5},{id:"257",label:"17א",salary:10202.64},{id:"258",label:"17ב",salary:10672.09},
      {id:"259",label:"18",salary:10306.34},{id:"260",label:"18א",salary:10943.52},{id:"261",label:"18ב",salary:11412.97},
      {id:"262",label:"19",salary:11302.35},{id:"263",label:"19א",salary:11939.51},{id:"264",label:"19ב",salary:12408.96},
      {id:"265",label:"20",salary:12510.75},{id:"266",label:"20א",salary:13147.92},{id:"267",label:"20ב",salary:13617.38},
      {id:"268",label:"21",salary:13936.99},{id:"269",label:"21א",salary:14574.15},{id:"270",label:"21ב",salary:15043.61},
      {id:"271",label:"22",salary:15609.42},{id:"272",label:"22א",salary:16246.59},{id:"273",label:"22ב",salary:16716.03},
    ]},

  "710": { name:"סיירת ירוקה (710)", shortName:"סיירת ירוקה 710", number:"710",
    color:"from-teal-500 to-green-700", btnActive:"bg-gradient-to-br from-teal-500 to-green-700", accent:"#0d9488",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"250",label:"15",salary:8195.77},{id:"251",label:"15א",salary:8832.92},{id:"252",label:"15ב",salary:9302.36},
      {id:"253",label:"16",salary:8812.25},{id:"254",label:"16א",salary:9449.41},{id:"255",label:"16ב",salary:9918.86},
      {id:"256",label:"17",salary:9565.5},{id:"257",label:"17א",salary:10202.64},{id:"258",label:"17ב",salary:10672.09},
      {id:"259",label:"18",salary:10306.34},{id:"260",label:"18א",salary:10943.52},{id:"261",label:"18ב",salary:11412.97},
      {id:"262",label:"19",salary:11302.35},{id:"263",label:"19א",salary:11939.51},{id:"264",label:"19ב",salary:12408.96},
      {id:"265",label:"20",salary:12510.75},{id:"266",label:"20א",salary:13147.92},{id:"267",label:"20ב",salary:13617.38},
      {id:"268",label:"21",salary:13936.99},{id:"269",label:"21א",salary:14574.15},{id:"270",label:"21ב",salary:15043.61},
      {id:"271",label:"22",salary:15609.42},{id:"272",label:"22א",salary:16246.59},{id:"273",label:"22ב",salary:16716.03},
    ]},

  "520": { name:"הגירה - ישן (520)", shortName:"הגירה ישן", number:"520",
    color:"from-orange-500 to-amber-600", btnActive:"bg-gradient-to-br from-orange-500 to-amber-600", accent:"#ea580c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"דרגה 1",salary:5557.27},{id:"20",label:"דרגה 2",salary:5779.56},{id:"30",label:"דרגה 3",salary:6001.85},
      {id:"40",label:"דרגה 4",salary:6313.82},{id:"50",label:"דרגה 5",salary:6446.43},{id:"60",label:"דרגה 6",salary:6668.73},
      {id:"70",label:"דרגה 7",salary:6891.01},{id:"80",label:"דרגה 8",salary:7216.88},{id:"90",label:"דרגה 9",salary:7335.59},
      {id:"100",label:"דרגה 10",salary:7557.88},{id:"110",label:"דרגה 11",salary:7780.18},{id:"120",label:"דרגה 12",salary:8118.67},
      {id:"130",label:"דרגה 13",salary:8376.33},
    ]},

  "521": { name:"הגירה - חדש (521)", shortName:"הגירה חדש", number:"521",
    color:"from-amber-500 to-orange-600", btnActive:"bg-gradient-to-br from-amber-500 to-orange-600", accent:"#d97706",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"36",salary:6668.74},{id:"82",label:"36א",salary:7043.2},{id:"84",label:"36ב",salary:7511.56},
      {id:"90",label:"37",salary:6891.01},{id:"92",label:"37א",salary:7263.83},{id:"94",label:"37ב",salary:7662.57},
      {id:"95",label:"38",salary:7216.88},{id:"96",label:"38א",salary:7515.84},{id:"97",label:"38ב",salary:7817.73},
      {id:"100",label:"39",salary:7335.59},{id:"102",label:"39א",salary:7733.75},{id:"104",label:"39ב",salary:8375.5},
      {id:"110",label:"40",salary:7829.81},{id:"112",label:"40א",salary:8471.52},{id:"114",label:"40ב",salary:9113.28},
      {id:"120",label:"41",salary:8700.62},{id:"122",label:"41א",salary:9342.37},{id:"124",label:"41ב",salary:9984.13},
      {id:"130",label:"42",salary:10047.5},{id:"132",label:"42א",salary:10689.22},{id:"134",label:"42ב",salary:11330.97},
      {id:"140",label:"43",salary:11755.25},{id:"142",label:"43א",salary:12396.99},{id:"144",label:"43ב",salary:13038.72},
      {id:"150",label:"44",salary:13283.43},{id:"152",label:"44א",salary:14008.59},{id:"154",label:"44ב",salary:14733.73},
    ]},

  "600": { name:"מאבטחי ראש הממשלה והנשיא (600)", shortName:"מאבטחי רה\"מ", number:"600",
    color:"from-gray-700 to-slate-800", btnActive:"bg-gradient-to-br from-gray-700 to-slate-800", accent:"#374151",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"860",label:"חמוש 1 - מחמ\"ץ",salary:49.04*182},{id:"870",label:"חמוש 2 - מחמ\"א",salary:50.59*182},
      {id:"880",label:"חמוש 3 - קמ\"צ",salary:52.14*182},{id:"890",label:"לא חמוש 3",salary:43.68*182},
      {id:"900",label:"לא חמוש 2 - מחמ\"א",salary:44.59*182},{id:"910",label:"לא חמוש 1 - קמ\"צ",salary:47.72*182},
    ]},

  "310": { name:"הגנת עדים קורס (310)", shortName:"הגנ\"ע קורס 310", number:"310",
    color:"from-violet-600 to-purple-700", btnActive:"bg-gradient-to-br from-violet-600 to-purple-700", accent:"#7c3aed",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"1",label:"חניך",salary:8127.2},{id:"2",label:"השלמה",salary:8127.2},{id:"3",label:"רמה 3",salary:7300.87},{id:"4",label:"רמה 4",salary:6752.01}]},

  "320": { name:"הגנת עדים קורס (320)", shortName:"הגנ\"ע קורס 320", number:"320",
    color:"from-purple-600 to-indigo-700", btnActive:"bg-gradient-to-br from-purple-600 to-indigo-700", accent:"#9333ea",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"1",label:"דרגה 1",salary:10344.06},{id:"2",label:"דרגה 2",salary:11767.56},{id:"3",label:"דרגה 3",salary:13188.72},
      {id:"4",label:"דרגה 4",salary:14351.83},{id:"5",label:"דרגה 5",salary:15387.64},{id:"6",label:"דרגה 6",salary:16163.04},
      {id:"7",label:"דרגה 7",salary:17196.51},{id:"8",label:"דרגה 8",salary:17843.44},{id:"9",label:"דרגה 9",salary:19912.72},{id:"10",label:"דרגה 10",salary:20573.75},
    ]},

  "331": { name:"הגנת עדים - ליבה 1 כולל (331)", shortName:"הגנ\"ע ליבה 1 כולל", number:"331",
    color:"from-fuchsia-600 to-violet-700", btnActive:"bg-gradient-to-br from-fuchsia-600 to-violet-700", accent:"#a21caf",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:9711.12},{id:"361",label:"36א",salary:10605.62},{id:"362",label:"36ב",salary:11500.13},
      {id:"370",label:"37",salary:10137.77},{id:"371",label:"37א",salary:11051.22},{id:"372",label:"37ב",salary:11961.32},
      {id:"380",label:"38",salary:11106.93},{id:"381",label:"38א",salary:12081.65},{id:"382",label:"38ב",salary:13059.72},
      {id:"390",label:"39",salary:12086.42},{id:"391",label:"39א",salary:13181.45},{id:"392",label:"39ב",salary:14278.7},
      {id:"400",label:"40",salary:14258.71},{id:"401",label:"40א",salary:15427.27},{id:"402",label:"40ב",salary:16594.7},
      {id:"410",label:"41",salary:16137.39},{id:"411",label:"41א",salary:17329.33},{id:"412",label:"41ב",salary:18519.05},
      {id:"420",label:"42",salary:18976.06},{id:"421",label:"42א",salary:20186.94},{id:"422",label:"42ב",salary:21398.93},
      {id:"430",label:"43",salary:22595.8},{id:"431",label:"43א",salary:23830.06},{id:"432",label:"43ב",salary:25063.22},
    ]},

  "332": { name:"הגנת עדים - ליבה 2 כולל (332)", shortName:"הגנ\"ע ליבה 2 כולל", number:"332",
    color:"from-violet-500 to-fuchsia-600", btnActive:"bg-gradient-to-br from-violet-500 to-fuchsia-600", accent:"#7c3aed",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:8794.7},{id:"361",label:"36א",salary:9605.68},{id:"362",label:"36ב",salary:10415.52},
      {id:"370",label:"37",salary:9182.37},{id:"371",label:"37א",salary:10010.05},{id:"372",label:"37ב",salary:10835.5},
      {id:"380",label:"38",salary:10059.78},{id:"381",label:"38א",salary:10943.15},{id:"382",label:"38ב",salary:11827.64},
      {id:"390",label:"39",salary:10948.64},{id:"391",label:"39א",salary:11940.08},{id:"392",label:"39ב",salary:12932.63},
      {id:"400",label:"40",salary:12915.65},{id:"401",label:"40א",salary:13975.03},{id:"402",label:"40ב",salary:15032.18},
      {id:"410",label:"41",salary:14622.29},{id:"411",label:"41א",salary:15696.16},{id:"412",label:"41ב",salary:16773.35},
      {id:"420",label:"42",salary:17189.13},{id:"421",label:"42א",salary:18285.28},{id:"422",label:"42ב",salary:19382.53},
      {id:"430",label:"43",salary:20467.07},{id:"431",label:"43א",salary:21585.5},{id:"432",label:"43ב",salary:22701.68},
    ]},

  "333": { name:"הגנת עדים - תומך 1 כולל (333)", shortName:"הגנ\"ע תומך 1 כולל", number:"333",
    color:"from-purple-500 to-violet-600", btnActive:"bg-gradient-to-br from-purple-500 to-violet-600", accent:"#9333ea",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:8231.56},{id:"370",label:"37",salary:8596.29},{id:"380",label:"38",salary:9416.36},
      {id:"390",label:"39",salary:10246.74},{id:"400",label:"40",salary:12089.85},{id:"410",label:"41",salary:13681.8},
      {id:"420",label:"42",salary:16089.22},{id:"430",label:"43",salary:19158.42},{id:"432",label:"43ב",salary:21249.34},
    ]},

  "334": { name:"הגנת עדים - תומך 2 כולל (334)", shortName:"הגנ\"ע תומך 2 כולל", number:"334",
    color:"from-indigo-500 to-purple-600", btnActive:"bg-gradient-to-br from-indigo-500 to-purple-600", accent:"#4338ca",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7880.6},{id:"370",label:"37",salary:8228.12},{id:"380",label:"38",salary:9013.77},
      {id:"390",label:"39",salary:9810.9},{id:"400",label:"40",salary:11572.59},{id:"410",label:"41",salary:13096.87},
      {id:"420",label:"42",salary:15401.06},{id:"430",label:"43",salary:18339.51},{id:"432",label:"43ב",salary:20341.3},
    ]},

  "335": { name:"הגנת עדים - מינהלה כולל (335)", shortName:"הגנ\"ע מינהלה כולל", number:"335",
    color:"from-slate-500 to-violet-600", btnActive:"bg-gradient-to-br from-slate-500 to-violet-600", accent:"#475569",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7388.57},{id:"370",label:"37",salary:7714.29},{id:"380",label:"38",salary:8450.63},
      {id:"390",label:"39",salary:9198.43},{id:"400",label:"40",salary:10848.87},{id:"410",label:"41",salary:12279.1},
      {id:"420",label:"42",salary:14436.48},{id:"430",label:"43",salary:17192.58},{id:"432",label:"43ב",salary:19069.62},
    ]},

  "336": { name:"הגנת עדים - ליבה 1 לא כולל (336)", shortName:"הגנ\"ע ליבה 1 לא כולל", number:"336",
    color:"from-red-500 to-rose-600", btnActive:"bg-gradient-to-br from-red-500 to-rose-600", accent:"#dc2626",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7036.46},{id:"361",label:"36א",salary:7685.89},{id:"362",label:"36ב",salary:8333.11},
      {id:"370",label:"37",salary:7346.12},{id:"371",label:"37א",salary:8007.82},{id:"372",label:"37ב",salary:8668.41},
      {id:"380",label:"38",salary:7663.83},{id:"381",label:"38א",salary:8338.88},{id:"382",label:"38ב",salary:9011.72},
      {id:"390",label:"39",salary:8342.81},{id:"391",label:"39א",salary:9096.96},{id:"392",label:"39ב",salary:9853.34},
      {id:"400",label:"40",salary:9392.26},{id:"401",label:"40א",salary:10163.12},{id:"402",label:"40ב",salary:10931.75},
      {id:"410",label:"41",salary:10630.95},{id:"411",label:"41א",salary:11414.07},{id:"412",label:"41ב",salary:12199.42},
      {id:"420",label:"42",salary:12276.81},{id:"421",label:"42א",salary:13061.04},{id:"422",label:"42ב",salary:13845.27},
      {id:"430",label:"43",salary:14363.09},{id:"431",label:"43א",salary:15146.21},{id:"432",label:"43ב",salary:15932.67},
    ]},

  "337": { name:"הגנת עדים - ליבה 2 לא כולל (337)", shortName:"הגנ\"ע ליבה 2 לא כולל", number:"337",
    color:"from-orange-500 to-red-600", btnActive:"bg-gradient-to-br from-orange-500 to-red-600", accent:"#ea580c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7036.46},{id:"370",label:"37",salary:7346.12},{id:"380",label:"38",salary:7663.83},
      {id:"390",label:"39",salary:8354.28},{id:"400",label:"40",salary:9392.26},{id:"410",label:"41",salary:10630.95},
      {id:"420",label:"42",salary:12276.81},{id:"430",label:"43",salary:14363.09},
    ]},

  "338": { name:"הגנת עדים - תומך 1 לא כולל (338)", shortName:"הגנ\"ע תומך 1 לא כולל", number:"338",
    color:"from-yellow-500 to-orange-600", btnActive:"bg-gradient-to-br from-yellow-500 to-orange-600", accent:"#ca8a04",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7036.46},{id:"370",label:"37",salary:7346.12},{id:"380",label:"38",salary:7663.83},
      {id:"390",label:"39",salary:8354.28},{id:"400",label:"40",salary:9392.26},{id:"410",label:"41",salary:10630.95},
      {id:"420",label:"42",salary:12276.81},{id:"430",label:"43",salary:14363.09},
    ]},

  "339": { name:"הגנת עדים - תומך 2 לא כולל (339)", shortName:"הגנ\"ע תומך 2 לא כולל", number:"339",
    color:"from-lime-500 to-yellow-600", btnActive:"bg-gradient-to-br from-lime-500 to-yellow-600", accent:"#65a30d",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7036.46},{id:"370",label:"37",salary:7346.12},{id:"380",label:"38",salary:7663.83},
      {id:"390",label:"39",salary:8354.28},{id:"400",label:"40",salary:9392.26},{id:"410",label:"41",salary:10630.95},
      {id:"420",label:"42",salary:12276.81},{id:"430",label:"43",salary:14363.09},
    ]},

  "340": { name:"הגנת עדים - מינהלה לא כולל (340)", shortName:"הגנ\"ע מינהלה לא כולל", number:"340",
    color:"from-teal-500 to-cyan-600", btnActive:"bg-gradient-to-br from-teal-500 to-cyan-600", accent:"#0d9488",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7036.46},{id:"370",label:"37",salary:7346.12},{id:"380",label:"38",salary:7663.83},
      {id:"390",label:"39",salary:8354.28},{id:"400",label:"40",salary:9392.26},{id:"410",label:"41",salary:10630.95},
      {id:"420",label:"42",salary:12276.81},{id:"430",label:"43",salary:14363.09},
    ]},

  "635": { name:"הגנת עדים - מנודקמים (635)", shortName:"הגנ\"ע מנודקמים", number:"635",
    color:"from-sky-500 to-indigo-600", btnActive:"bg-gradient-to-br from-sky-500 to-indigo-600", accent:"#0284c7",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:38.88*182},{id:"20",label:"רמה 2",salary:41.75*182},{id:"30",label:"רמה 3",salary:46.21*182}]},

  "636": { name:"הגנת עדים - רכז ביצוע שעתי (636)", shortName:"הגנ\"ע ביצוע שעתי", number:"636",
    color:"from-cyan-500 to-sky-600", btnActive:"bg-gradient-to-br from-cyan-500 to-sky-600", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"שטח 1",salary:38.65*182},{id:"20",label:"שטח 2",salary:43.32*182},{id:"30",label:"שטח 3",salary:46.38*182},
      {id:"40",label:"מתקן 1",salary:35.75*182},{id:"50",label:"מתקן 2",salary:41.54*182},{id:"60",label:"מתקן 3",salary:44.46*182},
    ]},

  "382": { name:"מטה קיברנטי לאומי - גלובלי (382)", shortName:"קיברנטי גלובלי", number:"382",
    color:"from-emerald-700 to-teal-800", btnActive:"bg-gradient-to-br from-emerald-700 to-teal-800", accent:"#047857",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"עוזר ראש מדור 1",salary:9941.62},{id:"110",label:"עוזר ראש מדור 2",salary:11184.32},{id:"120",label:"עוזר ראש מדור 3",salary:12427.03},
      {id:"130",label:"ראש מדור 1",salary:14912.43},{id:"140",label:"ראש מדור 2",salary:16155.14},{id:"150",label:"ראש מדור 3",salary:17397.83},
      {id:"160",label:"ראש ענף 1",salary:18640.54},{id:"170",label:"ראש ענף 2",salary:19883.23},{id:"180",label:"ראש ענף 3",salary:21125.96},
      {id:"190",label:"ראש תחום 1",salary:22368.66},{id:"200",label:"ראש תחום 2",salary:23611.35},{id:"210",label:"ראש תחום 3",salary:24854.06},
      {id:"220",label:"ראש תחום בכיר 1",salary:28582.17},{id:"230",label:"ראש תחום בכיר 2",salary:29824.87},{id:"240",label:"ראש תחום בכיר 3",salary:31409.3},
      {id:"250",label:"ראש אגף 1",salary:33257.23},{id:"260",label:"ראש אגף 2",salary:34658.73},{id:"270",label:"ראש אגף 3",salary:36060.25},
      {id:"280",label:"ראש אגף בכיר 1",salary:37461.78},{id:"290",label:"ראש אגף בכיר 2",salary:38863.31},{id:"300",label:"ראש אגף בכיר 3",salary:40264.82},
    ]},

  "383": { name:"מטה קיברנטי לאומי - לא גלובלי (383)", shortName:"קיברנטי לא גלובלי", number:"383",
    color:"from-teal-700 to-emerald-800", btnActive:"bg-gradient-to-br from-teal-700 to-emerald-800", accent:"#0f766e",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"עוזר ראש מדור 1",salary:8787.01},{id:"110",label:"עוזר ראש מדור 2",salary:9885.38},{id:"120",label:"עוזר ראש מדור 3",salary:10983.76},
      {id:"130",label:"ראש מדור 1",salary:13180.5},{id:"140",label:"ראש מדור 2",salary:14278.89},{id:"150",label:"ראש מדור 3",salary:15377.27},
      {id:"160",label:"ראש ענף 1",salary:16475.64},{id:"170",label:"ראש ענף 2",salary:17574.02},{id:"180",label:"ראש ענף 3",salary:18672.4},
      {id:"190",label:"ראש תחום 1",salary:19770.77},{id:"200",label:"ראש תחום 2",salary:20869.15},{id:"210",label:"ראש תחום 3",salary:21967.53},
      {id:"220",label:"ראש תחום בכיר 1",salary:25262.65},{id:"230",label:"ראש תחום בכיר 2",salary:26361.03},{id:"240",label:"ראש תחום בכיר 3",salary:27761.46},
      {id:"250",label:"ראש אגף 1",salary:29394.74},{id:"260",label:"ראש אגף 2",salary:30633.49},{id:"270",label:"ראש אגף 3",salary:31872.23},
    ]},

  "421": { name:"מנהל מערכות מידע ב' (421)", shortName:"מנהל מידע ב'", number:"421",
    color:"from-cyan-600 to-blue-700", btnActive:"bg-gradient-to-br from-cyan-600 to-blue-700", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:27196.73},{id:"20",label:"רמה 2",salary:28433.43},{id:"30",label:"רמה 3",salary:29668.96}]},

  "422": { name:"מנהל טכנולוגיות ופיתוח א' (422)", shortName:"טכנולוגיות א'", number:"422",
    color:"from-blue-600 to-cyan-700", btnActive:"bg-gradient-to-br from-blue-600 to-cyan-700", accent:"#2563eb",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:22194.15},{id:"20",label:"רמה 2",salary:23250.45},{id:"30",label:"רמה 3",salary:24307.94},
      {id:"40",label:"רמה 4",salary:25365.43},{id:"50",label:"רמה 5",salary:26421.73},{id:"60",label:"רמה 6",salary:27479.2},{id:"70",label:"רמה 7",salary:28535.51},
    ]},

  "423": { name:"מנהל טכנולוגיות ופיתוח ב' (423)", shortName:"טכנולוגיות ב'", number:"423",
    color:"from-sky-600 to-blue-700", btnActive:"bg-gradient-to-br from-sky-600 to-blue-700", accent:"#0284c7",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:17967.76},{id:"20",label:"רמה 2",salary:19024.07},{id:"30",label:"רמה 3",salary:20081.56},
      {id:"40",label:"רמה 4",salary:21137.85},{id:"50",label:"רמה 5",salary:22194.15},{id:"60",label:"רמה 6",salary:23250.45},{id:"70",label:"רמה 7",salary:24307.94},
    ]},

  "424": { name:"מנהל יישומים א' (424)", shortName:"יישומים א'", number:"424",
    color:"from-indigo-600 to-blue-700", btnActive:"bg-gradient-to-br from-indigo-600 to-blue-700", accent:"#4338ca",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:21137.85},{id:"20",label:"רמה 2",salary:22194.15},{id:"30",label:"רמה 3",salary:23250.45},
      {id:"40",label:"רמה 4",salary:24307.94},{id:"50",label:"רמה 5",salary:25365.43},{id:"60",label:"רמה 6",salary:26421.73},{id:"70",label:"רמה 7",salary:27479.2},
    ]},

  "425": { name:"מנהל יישומים ב' (425)", shortName:"יישומים ב'", number:"425",
    color:"from-violet-600 to-indigo-700", btnActive:"bg-gradient-to-br from-violet-600 to-indigo-700", accent:"#7c3aed",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:16910.29},{id:"20",label:"רמה 2",salary:17967.76},{id:"30",label:"רמה 3",salary:19024.07},
      {id:"40",label:"רמה 4",salary:20081.56},{id:"50",label:"רמה 5",salary:21137.85},{id:"60",label:"רמה 6",salary:22194.15},{id:"70",label:"רמה 7",salary:23250.45},
    ]},

  "426": { name:"מנהל אבטחת מידע א' (426)", shortName:"אבטחת מידע א'", number:"426",
    color:"from-purple-600 to-violet-700", btnActive:"bg-gradient-to-br from-purple-600 to-violet-700", accent:"#9333ea",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:16910.29},{id:"20",label:"רמה 2",salary:17967.76},{id:"30",label:"רמה 3",salary:19024.07},
      {id:"40",label:"רמה 4",salary:20081.56},{id:"50",label:"רמה 5",salary:21137.85},{id:"60",label:"רמה 6",salary:22194.15},{id:"70",label:"רמה 7",salary:23250.45},
    ]},

  "427": { name:"מנהל אבטחת מידע ב' (427)", shortName:"אבטחת מידע ב'", number:"427",
    color:"from-fuchsia-600 to-purple-700", btnActive:"bg-gradient-to-br from-fuchsia-600 to-purple-700", accent:"#a21caf",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:13739.01},{id:"20",label:"רמה 2",salary:14796.49},{id:"30",label:"רמה 3",salary:15852.8},
      {id:"40",label:"רמה 4",salary:16910.29},{id:"50",label:"רמה 5",salary:17967.76},{id:"60",label:"רמה 6",salary:19024.07},{id:"70",label:"רמה 7",salary:20081.56},
    ]},

  "491": { name:"אב בית דין גיור - ותיקים (491)", shortName:"אב ביה\"ד ותיק", number:"491",
    color:"from-amber-600 to-yellow-700", btnActive:"bg-gradient-to-br from-amber-600 to-yellow-700", accent:"#d97706",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:24545.32},{id:"20",label:"רמה 2",salary:25895.42},{id:"30",label:"רמה 3",salary:27320.32}]},

  "492": { name:"אב בית דין גיור - חדשים (492)", shortName:"אב ביה\"ד חדש", number:"492",
    color:"from-yellow-600 to-amber-700", btnActive:"bg-gradient-to-br from-yellow-600 to-amber-700", accent:"#ca8a04",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:20323.86},{id:"20",label:"רמה 2",salary:21441.52},{id:"30",label:"רמה 3",salary:22619.97}]},

  "493": { name:"חבר בית דין גיור - ותיקים (493)", shortName:"חבר ביה\"ד ותיק", number:"493",
    color:"from-orange-600 to-yellow-700", btnActive:"bg-gradient-to-br from-orange-600 to-yellow-700", accent:"#ea580c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:21579.22},{id:"20",label:"רמה 2",salary:22766.34}]},

  "494": { name:"חבר בית דין גיור - חדשים (494)", shortName:"חבר ביה\"ד חדש", number:"494",
    color:"from-amber-500 to-orange-600", btnActive:"bg-gradient-to-br from-amber-500 to-orange-600", accent:"#f59e0b",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:18259.72},{id:"20",label:"רמה 2",salary:19264.5}]},

  "495": { name:"המרכז הלאומי לבקרת מחלות (495)", shortName:"בקרת מחלות", number:"495",
    color:"from-red-600 to-rose-700", btnActive:"bg-gradient-to-br from-red-600 to-rose-700", accent:"#dc2626",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"ב1",salary:8594.04},{id:"20",label:"ב2",salary:9068.78},{id:"30",label:"ב3",salary:9543.52},
      {id:"40",label:"ב4",salary:10018.25},{id:"50",label:"ב5",salary:10370.9},{id:"60",label:"ב6",salary:10964.34},
      {id:"70",label:"ב7",salary:11557.76},{id:"80",label:"ב8",salary:15118.32},{id:"90",label:"ב9",salary:15949.11},
      {id:"100",label:"ב10",salary:16898.6},{id:"110",label:"ב11",salary:18085.46},
    ]},

  "496": { name:"אב ביה\"ד ותיק ב.מ.י (496)", shortName:"אב ביה\"ד ב.מ.י ותיק", number:"496",
    color:"from-lime-600 to-green-700", btnActive:"bg-gradient-to-br from-lime-600 to-green-700", accent:"#65a30d",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:24545.32},{id:"20",label:"רמה 2",salary:25895.42},{id:"30",label:"רמה 3",salary:27320.32}]},

  "497": { name:"אב ביה\"ד חדש ב.מ.י (497)", shortName:"אב ביה\"ד ב.מ.י חדש", number:"497",
    color:"from-green-600 to-lime-700", btnActive:"bg-gradient-to-br from-green-600 to-lime-700", accent:"#16a34a",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:21579.22},{id:"20",label:"רמה 2",salary:22766.34}]},

  "286": { name:"מסיימי הליכי גיור (286)", shortName:"מסיימי גיור", number:"286",
    color:"from-emerald-600 to-teal-700", btnActive:"bg-gradient-to-br from-emerald-600 to-teal-700", accent:"#059669",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"1a",label:"בלנית עד 12 מועמדים",salary:166.46*20},{id:"1b",label:"בלנית 13-18 מועמדים",salary:249.68*20},
      {id:"1c",label:"בלנית 19-25 מועמדים",salary:346.32*20},{id:"2a",label:"ראש צוות עד 12",salary:182.55*20},
      {id:"2b",label:"ראש צוות 13-18",salary:273.84*20},{id:"2c",label:"ראש צוות 19-25",salary:379.89*20},
    ]},

  "315": { name:"אנשי דת מוסלמים - פנים (315)", shortName:"דת מוסלמית פנים", number:"315",
    color:"from-green-700 to-emerald-800", btnActive:"bg-gradient-to-br from-green-700 to-emerald-800", accent:"#15803d",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"דרגה 1",salary:5206.15},{id:"20",label:"דרגה 2",salary:5856.92},{id:"30",label:"דרגה 3",salary:6507.69},
      {id:"40",label:"דרגה 4",salary:7158.46},{id:"50",label:"דרגה 5",salary:7809.22},{id:"60",label:"דרגה 6",salary:8459.99},
      {id:"70",label:"דרגה 7",salary:9110.76},{id:"80",label:"דרגה 8",salary:9761.54},{id:"90",label:"דרגה 9",salary:10412.3},
    ]},

  "343": { name:"חוקרי המרכז למחקר מדיני (343)", shortName:"מרכז מחקר מדיני", number:"343",
    color:"from-blue-700 to-indigo-800", btnActive:"bg-gradient-to-br from-blue-700 to-indigo-800", accent:"#1d4ed8",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"39",label:"עוזר מחקר 39",salary:9444.84},{id:"39א",label:"עוזר מחקר 39א",salary:9966.34},{id:"39ב",label:"עוזר מחקר 39ב",salary:10487.85},
      {id:"40",label:"חוקר 40",salary:11030.21},{id:"40א",label:"חוקר 40א",salary:11600.78},{id:"40ב",label:"חוקר 40ב",salary:12073.22},
      {id:"41",label:"חוקר בכיר 41",salary:12896.42},{id:"41א",label:"חוקר בכיר 41א",salary:13417.91},{id:"41ב",label:"חוקר בכיר 41ב",salary:13939.43},
      {id:"42",label:"מעריך 42",salary:14294.14},{id:"42א",label:"מעריך 42א",salary:14815.62},{id:"42ב",label:"מעריך 42ב",salary:15337.16},
      {id:"43",label:"מעריך בכיר 43",salary:15844.28},{id:"43א",label:"מעריך בכיר 43א",salary:17222.51},{id:"43ב",label:"מעריך בכיר 43ב",salary:17744.02},
    ]},

  "123": { name:"חוקרי תאונות אוויריות (123)", shortName:"חוקרי תאונות אוויר", number:"123",
    color:"from-sky-600 to-indigo-700", btnActive:"bg-gradient-to-br from-sky-600 to-indigo-700", accent:"#0284c7",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"400",label:"חוקר ב' (שעתי)",salary:164.02*182},{id:"500",label:"חוקר א' (שעתי)",salary:189.46*182}]},

  "512": { name:"מטאורולוגים - משרד התחבורה (512)", shortName:"מטאורולוגים", number:"512",
    color:"from-sky-500 to-blue-600", btnActive:"bg-gradient-to-br from-sky-500 to-blue-600", accent:"#0ea5e9",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"38",label:"מרכז 38",salary:8747.39},{id:"38א",label:"מרכז 38א",salary:9339.57},{id:"38ב",label:"מרכז 38ב",salary:9931.75},
      {id:"39",label:"מרכז בכיר 39",salary:10575.2},{id:"39א",label:"39א",salary:11167.38},{id:"39ב",label:"39ב",salary:11759.55},
      {id:"40",label:"מנהל גף 40",salary:12403.01},{id:"40א",label:"40א",salary:12995.18},{id:"40ב",label:"40ב",salary:13587.35},
      {id:"41",label:"מנהל גף 41",salary:14230.81},{id:"41א",label:"41א",salary:14822.99},{id:"41ב",label:"41ב",salary:15415.17},
      {id:"42",label:"מנהל תחום 42",salary:15535.09},{id:"42א",label:"42א",salary:16107.97},{id:"42ב",label:"42ב",salary:16680.84},
      {id:"43",label:"מנהל תחום בכיר 43",salary:16622.54},{id:"43א",label:"43א",salary:17195.42},{id:"43ב",label:"43ב",salary:17768.3},
    ]},

  "188": { name:"בודק כלי שיט קטנים (188)", shortName:"בודק כלי שיט 188", number:"188",
    color:"from-cyan-600 to-blue-700", btnActive:"bg-gradient-to-br from-cyan-600 to-blue-700", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"1",label:"רמה א'",salary:76.51*182},{id:"2",label:"רמה ב'",salary:93.35*182},{id:"3",label:"רמה ג'",salary:109.2*182}]},

  "688": { name:"בודקי כלי שיט קטנים (688)", shortName:"בודק כלי שיט 688", number:"688",
    color:"from-blue-600 to-cyan-700", btnActive:"bg-gradient-to-br from-blue-600 to-cyan-700", accent:"#2563eb",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"1",label:"רמה א'",salary:76.51*182},{id:"2",label:"רמה ב'",salary:93.35*182},{id:"3",label:"רמה ג'",salary:109.2*182}]},

  "561": { name:"עוזרים משפטיים - ביהמ\"ש העליון (561)", shortName:"עוזרים עליון", number:"561",
    color:"from-amber-700 to-yellow-800", btnActive:"bg-gradient-to-br from-amber-700 to-yellow-800", accent:"#b45309",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"210",label:"א - דרגה 1",salary:13365.7},{id:"220",label:"א - דרגה 2",salary:14393.82},
      {id:"230",label:"א - דרגה 3",salary:15421.95},{id:"240",label:"א - דרגה 4",salary:16450.09},
      {id:"310",label:"ב - דרגה 1",salary:17478.21},{id:"320",label:"ב - דרגה 2",salary:18506.35},
      {id:"330",label:"ב - דרגה 3",salary:19534.47},{id:"340",label:"ב - דרגה 4",salary:20562.61},
    ]},

  "588": { name:"בוחני רישוי (588)", shortName:"בוחני רישוי", number:"588",
    color:"from-teal-600 to-cyan-700", btnActive:"bg-gradient-to-br from-teal-600 to-cyan-700", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"1",label:"רמה 1",salary:10198.25},{id:"2",label:"רמה 2",salary:10464.4},{id:"3",label:"רמה 3",salary:10720.0},
      {id:"4",label:"רמה 4",salary:10975.57},{id:"5",label:"רמה 5",salary:11250.06},{id:"6",label:"רמה 6",salary:11530.88},
    ]},

  "516": { name:"מזכירות - לשכות שרים ומנכ\"לים (516)", shortName:"מזכירות לשכות שרים", number:"516",
    color:"from-pink-600 to-rose-700", btnActive:"bg-gradient-to-br from-pink-600 to-rose-700", accent:"#db2777",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"דרגה 1",salary:7006.59},{id:"20",label:"דרגה 2",salary:7590.47},{id:"30",label:"דרגה 3",salary:8174.36},
      {id:"40",label:"דרגה 4",salary:8758.24},{id:"50",label:"דרגה 5",salary:9342.13},{id:"60",label:"דרגה 6",salary:9926.01},
    ]},

  "517": { name:"יועצים ועוזרים - לשכות שרים ומנכ\"לים (517)", shortName:"יועצים לשכות שרים", number:"517",
    color:"from-rose-600 to-pink-700", btnActive:"bg-gradient-to-br from-rose-600 to-pink-700", accent:"#e11d48",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"70",label:"דרגה 7",salary:10509.89},{id:"80",label:"דרגה 8",salary:11677.66},{id:"90",label:"דרגה 9",salary:12845.4},
      {id:"100",label:"דרגה 10",salary:14013.17},{id:"110",label:"דרגה 11",salary:15180.94},{id:"120",label:"דרגה 12",salary:16348.7},
      {id:"130",label:"דרגה 13",salary:17516.47},{id:"140",label:"דרגה 14",salary:18684.24},{id:"150",label:"דרגה 15",salary:19852.0},
      {id:"160",label:"דרגה 16",salary:21019.76},{id:"170",label:"דרגה 17",salary:22187.53},{id:"180",label:"דרגה 18",salary:23355.29},
    ]},

  "166": { name:"גאוגרפים - נ\"רים (166)", shortName:"גאוגרפים נ\"ר", number:"166",
    color:"from-emerald-600 to-green-700", btnActive:"bg-gradient-to-br from-emerald-600 to-green-700", accent:"#059669",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"40",label:"דרגה 4",salary:15439.74},{id:"50",label:"דרגה 5",salary:16782.32},{id:"60",label:"דרגה 6",salary:18124.91},
      {id:"70",label:"דרגה 7",salary:19574.9},{id:"80",label:"דרגה 8",salary:21140.9},{id:"90",label:"דרגה 9",salary:22832.17},
    ]},

  "134": { name:"פרמקאים (134)", shortName:"פרמקאים", number:"134",
    color:"from-green-600 to-teal-700", btnActive:"bg-gradient-to-br from-green-600 to-teal-700", accent:"#16a34a",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"1",label:"דרגה 1",salary:9566.63},{id:"2",label:"דרגה 2",salary:10098.11},{id:"3",label:"דרגה 3",salary:11161.07},
      {id:"4",label:"דרגה 4",salary:12224.03},{id:"5",label:"דרגה 5",salary:13818.47},{id:"6",label:"דרגה 6",salary:15412.91},
      {id:"7",label:"דרגה 7",salary:16475.87},{id:"8",label:"דרגה 8",salary:17538.82},{id:"9",label:"דרגה 9",salary:18601.78},
    ]},

  "195": { name:"מפקחי מזון (195)", shortName:"מפקחי מזון", number:"195",
    color:"from-lime-600 to-green-700", btnActive:"bg-gradient-to-br from-lime-600 to-green-700", accent:"#65a30d",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"1",label:"רמה 1",salary:8503.67},{id:"2",label:"רמה 2",salary:8928.86},{id:"3",label:"רמה 3",salary:9354.04},
      {id:"4",label:"רמה 4",salary:9779.22},{id:"5",label:"רמה 5",salary:10204.41},{id:"6",label:"רמה 6",salary:11267.37},
      {id:"7",label:"רמה 7",salary:12755.51},{id:"8",label:"רמה 8",salary:14987.72},
    ]},

  "204": { name:"מהנדסים וטכנאים בכבאות (204)", shortName:"כבאות מהנדסים", number:"204",
    color:"from-orange-600 to-red-700", btnActive:"bg-gradient-to-br from-orange-600 to-red-700", accent:"#ea580c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"36",salary:7974.31},{id:"82",label:"36א",salary:8709.01},{id:"84",label:"36ב",salary:9443.69},
      {id:"90",label:"37",salary:8162.95},{id:"92",label:"37א",salary:8897.06},{id:"94",label:"37ב",salary:9631.16},
      {id:"95",label:"38",salary:8351.9},{id:"96",label:"38א",salary:9086.01},{id:"97",label:"38ב",salary:9820.1},
      {id:"100",label:"39",salary:8918.56},{id:"102",label:"39א",salary:9726.38},{id:"104",label:"39ב",salary:10534.24},
      {id:"110",label:"40",salary:9856.4},{id:"112",label:"40א",salary:10664.2},{id:"114",label:"40ב",salary:11472.05},
      {id:"120",label:"41",salary:10952.62},{id:"122",label:"41א",salary:11760.46},{id:"124",label:"41ב",salary:12568.33},
      {id:"130",label:"42",salary:12648.11},{id:"132",label:"42א",salary:13455.92},{id:"134",label:"42ב",salary:14263.77},
      {id:"140",label:"43",salary:14797.84},{id:"142",label:"43א",salary:15605.69},{id:"144",label:"43ב",salary:16413.5},
    ]},

  "264": { name:"נהגי שרים ומנכ\"לים (264)", shortName:"נהגי שרים 264", number:"264",
    color:"from-slate-600 to-gray-700", btnActive:"bg-gradient-to-br from-slate-600 to-gray-700", accent:"#475569",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"500",label:"נ.שר א",salary:14303.55},{id:"502",label:"נ.שר ב",salary:14875.45},{id:"506",label:"נ.שר ג",salary:15469.87},
      {id:"520",label:"נ.סגן.שר א",salary:13165.74},{id:"522",label:"נ.סגן.שר ב",salary:13692.63},{id:"526",label:"נ.סגן.שר ג",salary:14240.5},
      {id:"540",label:"נ.מ.נ.מ א",salary:12027.95},{id:"542",label:"נ.מ.נ.מ ב",salary:12509.8},{id:"546",label:"נ.מ.נ.מ ג",salary:13009.65},
      {id:"508",label:"נ.רה\"מ ג'",salary:16581.85},
    ]},

  "265": { name:"בוחני פטנטים א' (265)", shortName:"פטנטים א'", number:"265",
    color:"from-indigo-700 to-blue-800", btnActive:"bg-gradient-to-br from-indigo-700 to-blue-800", accent:"#3730a3",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:9757.59},{id:"20",label:"רמה 2",salary:10905.89},{id:"30",label:"רמה 3",salary:12053.01},
      {id:"40",label:"רמה 4",salary:13201.31},{id:"50",label:"רמה 5",salary:14349.62},{id:"60",label:"רמה 6",salary:15496.72},
      {id:"70",label:"רמה 7",salary:16645.02},{id:"80",label:"רמה 8",salary:17793.33},{id:"90",label:"רמה 9",salary:18941.64},
      {id:"100",label:"רמה 10",salary:20088.75},{id:"110",label:"רמה 11",salary:21237.05},
    ]},

  "266": { name:"בוחני פטנטים ב' (266)", shortName:"פטנטים ב'", number:"266",
    color:"from-blue-700 to-indigo-800", btnActive:"bg-gradient-to-br from-blue-700 to-indigo-800", accent:"#1d4ed8",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:10270.84},{id:"20",label:"רמה 2",salary:11479.54},{id:"30",label:"רמה 3",salary:12687.0},
      {id:"40",label:"רמה 4",salary:13895.7},{id:"50",label:"רמה 5",salary:15104.4},{id:"60",label:"רמה 6",salary:16311.85},
      {id:"70",label:"רמה 7",salary:17520.55},{id:"80",label:"רמה 8",salary:18729.25},{id:"90",label:"רמה 9",salary:19937.98},
      {id:"100",label:"רמה 10",salary:21145.41},{id:"110",label:"רמה 11",salary:22354.11},
    ]},

  "165": { name:"בוחני פטנטים - צוערים (165)", shortName:"פטנטים צוערים", number:"165",
    color:"from-sky-700 to-blue-800", btnActive:"bg-gradient-to-br from-sky-700 to-blue-800", accent:"#0369a1",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"דרגה 1",salary:7115.7},{id:"20",label:"דרגה 2",salary:7921.25},{id:"30",label:"דרגה 3",salary:8726.8}]},

  "525": { name:"אזרח ותיק (525)", shortName:"אזרח ותיק", number:"525",
    color:"from-slate-500 to-zinc-600", btnActive:"bg-gradient-to-br from-slate-500 to-zinc-600", accent:"#64748b",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"90",label:"מינהלי (שעתי)",salary:34.35*182},{id:"120",label:"מקצועי (שעתי)",salary:46.09*182}]},

  "787": { name:"צוערים (787)", shortName:"צוערים 787", number:"787",
    color:"from-orange-700 to-amber-700", btnActive:"bg-gradient-to-br from-orange-700 to-amber-700", accent:"#c2410c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"409",label:"צוער",salary:7130.21},{id:"410",label:"צוער ותיק",salary:7800.52},{id:"411",label:"צוע.א1",salary:7613.56},
      {id:"412",label:"צוע.א2",salary:8096.9},{id:"413",label:"צוע.ב1 ותיק",salary:8283.85},{id:"414",label:"צוע.ב2 ותיק",salary:8767.19},
    ]},

  // ── כל הדירוגים החסרים מה-PDF ──

  "10": { name:"איכות הסביבה (10)", shortName:"איכות סביבה 10", number:"10",
    color:"from-green-500 to-lime-600", btnActive:"bg-gradient-to-br from-green-500 to-lime-600", accent:"#22c55e",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"180",label:"15",salary:8195.76},{id:"182",label:"15א",salary:8832.9},{id:"183",label:"15ב",salary:9302.35},
      {id:"190",label:"16",salary:8812.25},{id:"192",label:"16א",salary:9449.41},{id:"193",label:"16ב",salary:9918.87},
      {id:"200",label:"17",salary:9565.5},{id:"202",label:"17א",salary:10202.64},{id:"203",label:"17ב",salary:10672.09},
      {id:"210",label:"18",salary:10306.34},{id:"212",label:"18א",salary:10943.52},{id:"213",label:"18ב",salary:11412.97},
      {id:"220",label:"19",salary:11302.36},{id:"222",label:"19א",salary:11939.52},{id:"223",label:"19ב",salary:12408.96},
      {id:"230",label:"20",salary:12510.76},{id:"232",label:"20א",salary:13147.93},{id:"233",label:"20ב",salary:13617.38},
    ]},

  "510": { name:"איכות הסביבה (510)", shortName:"איכות סביבה 510", number:"510",
    color:"from-lime-500 to-green-600", btnActive:"bg-gradient-to-br from-lime-500 to-green-600", accent:"#84cc16",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"180",label:"15",salary:8195.77},{id:"182",label:"15א",salary:8832.92},{id:"183",label:"15ב",salary:9302.36},
      {id:"190",label:"16",salary:8812.25},{id:"192",label:"16א",salary:9449.41},{id:"193",label:"16ב",salary:9918.86},
      {id:"200",label:"17",salary:9565.5},{id:"202",label:"17א",salary:10202.64},{id:"203",label:"17ב",salary:10672.09},
      {id:"210",label:"18",salary:10306.34},{id:"212",label:"18א",salary:10943.52},{id:"213",label:"18ב",salary:11412.97},
      {id:"220",label:"19",salary:11302.35},{id:"222",label:"19א",salary:11939.51},{id:"223",label:"19ב",salary:12408.96},
      {id:"230",label:"20",salary:12510.75},{id:"232",label:"20א",salary:13147.92},{id:"233",label:"20ב",salary:13617.38},
    ]},

  "552": { name:"איכות הסביבה חדש (552)", shortName:"איכות סביבה 552", number:"552",
    color:"from-emerald-500 to-lime-600", btnActive:"bg-gradient-to-br from-emerald-500 to-lime-600", accent:"#10b981",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"180",label:"15",salary:7244.42},{id:"182",label:"15א",salary:7807.62},{id:"183",label:"15ב",salary:8222.57},
      {id:"190",label:"16",salary:7789.35},{id:"192",label:"16א",salary:8352.57},{id:"193",label:"16ב",salary:8767.52},
      {id:"200",label:"17",salary:8455.17},{id:"202",label:"17א",salary:9018.37},{id:"203",label:"17ב",salary:9433.32},
      {id:"210",label:"18",salary:9110.01},{id:"212",label:"18א",salary:9673.24},{id:"213",label:"18ב",salary:10088.19},
      {id:"220",label:"19",salary:9990.43},{id:"222",label:"19א",salary:10553.63},{id:"223",label:"19ב",salary:10968.58},
      {id:"230",label:"20",salary:11058.56},{id:"232",label:"20א",salary:11621.77},{id:"233",label:"20ב",salary:12036.73},
      {id:"234",label:"21",salary:12164.42},{id:"235",label:"21א",salary:12727.62},{id:"236",label:"21ב",salary:13142.59},
      {id:"237",label:"22",salary:13464.79},{id:"238",label:"22א",salary:14027.99},{id:"239",label:"22ב",salary:14442.96},
    ]},

  "14": { name:"כלכלנים נבחרים - ותיק (14)", shortName:"כלכלנים ותיק 14", number:"14",
    color:"from-sky-600 to-blue-700", btnActive:"bg-gradient-to-br from-sky-600 to-blue-700", accent:"#0284c7",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"39",salary:11122.84},{id:"102",label:"39א",salary:11737.0},{id:"104",label:"39ב",salary:12351.18},
      {id:"110",label:"40",salary:12989.89},{id:"112",label:"40א",salary:13604.04},{id:"114",label:"40ב",salary:14218.19},
      {id:"120",label:"41",salary:15187.68},{id:"122",label:"41א",salary:15801.81},{id:"124",label:"41ב",salary:16415.99},
      {id:"130",label:"42",salary:16833.69},{id:"132",label:"42א",salary:17447.84},{id:"134",label:"42ב",salary:18062.02},
      {id:"140",label:"43",salary:18659.26},{id:"142",label:"43א",salary:20282.35},{id:"144",label:"43ב",salary:20896.53},
      {id:"150",label:"44",salary:21084.97},{id:"152",label:"44א",salary:22919.06},{id:"154",label:"44ב",salary:23613.08},
      {id:"200",label:"משופר 1",salary:19849.66},{id:"202",label:"משופר 1א",salary:21006.4},{id:"204",label:"משופר 1ב",salary:22163.14},
      {id:"210",label:"משופר 2",salary:22496.27},{id:"212",label:"משופר 2א",salary:23781.54},{id:"214",label:"משופר 2ב",salary:25195.33},
    ]},

  "87": { name:"עובדים חיוניים אקדמאים - ותיק (87)", shortName:"אקדמאים ותיק 87", number:"87",
    color:"from-teal-600 to-emerald-700", btnActive:"bg-gradient-to-br from-teal-600 to-emerald-700", accent:"#0d9488",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"36",salary:6334.69},{id:"82",label:"36א",salary:6918.32},{id:"84",label:"36ב",salary:7501.96},
      {id:"90",label:"37",salary:6484.56},{id:"92",label:"37א",salary:7067.73},{id:"94",label:"37ב",salary:7650.87},
      {id:"95",label:"38",salary:6634.66},{id:"96",label:"38א",salary:7217.82},{id:"97",label:"38ב",salary:7800.98},
      {id:"100",label:"39",salary:7084.8},{id:"102",label:"39א",salary:7726.53},{id:"104",label:"39ב",salary:8368.28},
      {id:"110",label:"40",salary:7829.81},{id:"112",label:"40א",salary:8471.51},{id:"114",label:"40ב",salary:9113.28},
      {id:"120",label:"41",salary:8700.62},{id:"122",label:"41א",salary:9342.36},{id:"124",label:"41ב",salary:9984.13},
      {id:"130",label:"42",salary:10047.5},{id:"132",label:"42א",salary:10689.22},{id:"134",label:"42ב",salary:11330.98},
      {id:"140",label:"43",salary:11755.24},{id:"142",label:"43א",salary:12397.0},{id:"144",label:"43ב",salary:13038.72},
      {id:"150",label:"44",salary:13283.43},{id:"152",label:"44א",salary:14008.59},{id:"154",label:"44ב",salary:14733.74},
    ]},

  "587": { name:"עובדים חיוניים אקדמאים - חדש (587)", shortName:"אקדמאים חדש 587", number:"587",
    color:"from-emerald-600 to-teal-700", btnActive:"bg-gradient-to-br from-emerald-600 to-teal-700", accent:"#059669",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"36",salary:6334.69},{id:"82",label:"36א",salary:6918.32},{id:"84",label:"36ב",salary:7501.96},
      {id:"90",label:"37",salary:6484.56},{id:"92",label:"37א",salary:7067.73},{id:"94",label:"37ב",salary:7650.87},
      {id:"95",label:"38",salary:6634.66},{id:"96",label:"38א",salary:7217.82},{id:"97",label:"38ב",salary:7800.98},
      {id:"100",label:"39",salary:7084.8},{id:"102",label:"39א",salary:7726.53},{id:"104",label:"39ב",salary:8368.28},
      {id:"110",label:"40",salary:7829.81},{id:"112",label:"40א",salary:8471.51},{id:"114",label:"40ב",salary:9113.28},
      {id:"120",label:"41",salary:8700.62},{id:"122",label:"41א",salary:9342.36},{id:"124",label:"41ב",salary:9984.13},
      {id:"130",label:"42",salary:10047.5},{id:"132",label:"42א",salary:10689.22},{id:"134",label:"42ב",salary:11330.98},
      {id:"140",label:"43",salary:11755.24},{id:"142",label:"43א",salary:12397.0},{id:"144",label:"43ב",salary:13038.72},
      {id:"150",label:"44",salary:13283.43},{id:"152",label:"44א",salary:14008.59},{id:"154",label:"44ב",salary:14733.74},
    ]},

  "187": { name:"עובדים חיוניים משפטנים - חדש (187)", shortName:"משפטנים חדש 187", number:"187",
    color:"from-cyan-600 to-sky-700", btnActive:"bg-gradient-to-br from-cyan-600 to-sky-700", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"300",label:"ג",salary:8021.31},{id:"301",label:"ג1",salary:8584.64},{id:"302",label:"ג2",salary:9147.97},
      {id:"303",label:"ב51",salary:8463.24},{id:"304",label:"ב52",salary:9026.57},{id:"305",label:"ב53",salary:9589.91},
      {id:"312",label:"א",salary:10828.68},{id:"315",label:"א3",salary:11399.34},{id:"318",label:"א6",salary:11969.99},
      {id:"322",label:"א10",salary:11928.07},{id:"325",label:"א13",salary:12498.73},{id:"328",label:"א16",salary:13069.38},
      {id:"332",label:"א20",salary:13355.11},{id:"335",label:"א23",salary:13925.75},{id:"338",label:"א26",salary:14496.4},
      {id:"342",label:"א30",salary:15206.08},{id:"345",label:"א33",salary:15776.72},{id:"348",label:"א36",salary:16347.38},
      {id:"352",label:"א40",salary:17352.1},{id:"355",label:"א43",salary:17922.75},{id:"358",label:"א46",salary:18493.4},
      {id:"362",label:"ב2",salary:9182.02},{id:"365",label:"ב3",salary:9752.68},{id:"368",label:"ב6",salary:10323.34},
      {id:"372",label:"ב20",salary:9915.68},{id:"375",label:"ב23",salary:10486.36},{id:"378",label:"ב26",salary:11057.0},
      {id:"401",label:"א50",salary:19954.92},{id:"403",label:"א53",salary:20611.17},{id:"405",label:"א56",salary:21267.42},
    ]},

  "987": { name:"עובדים חיוניים משפטנים - ותיק (987)", shortName:"משפטנים ותיק 987", number:"987",
    color:"from-sky-700 to-cyan-800", btnActive:"bg-gradient-to-br from-sky-700 to-cyan-800", accent:"#0369a1",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"300",label:"ג",salary:8021.31},{id:"301",label:"ג1",salary:8584.64},{id:"302",label:"ג2",salary:9147.97},
      {id:"303",label:"ב51",salary:8463.24},{id:"304",label:"ב52",salary:9026.57},{id:"305",label:"ב53",salary:9589.91},
      {id:"312",label:"א",salary:10828.68},{id:"315",label:"א3",salary:11399.34},{id:"318",label:"א6",salary:11969.99},
      {id:"322",label:"א10",salary:11928.07},{id:"325",label:"א13",salary:12498.73},{id:"328",label:"א16",salary:13069.38},
      {id:"332",label:"א20",salary:13355.11},{id:"335",label:"א23",salary:13925.75},{id:"338",label:"א26",salary:14496.4},
      {id:"342",label:"א30",salary:15206.08},{id:"345",label:"א33",salary:15776.72},{id:"348",label:"א36",salary:16347.38},
      {id:"352",label:"א40",salary:17352.1},{id:"355",label:"א43",salary:17922.75},{id:"358",label:"א46",salary:18493.4},
      {id:"362",label:"ב2",salary:9182.02},{id:"365",label:"ב3",salary:9752.68},{id:"368",label:"ב6",salary:10323.34},
      {id:"372",label:"ב20",salary:9915.68},{id:"375",label:"ב23",salary:10486.36},{id:"378",label:"ב26",salary:11057.0},
      {id:"401",label:"א50",salary:19954.92},{id:"403",label:"א53",salary:20611.17},{id:"405",label:"א56",salary:21267.42},
    ]},

  "64": { name:"לשכות שר ומנכ\"ל - ישן (64)", shortName:"לשכות שר/מנכ\"ל ישן", number:"64",
    color:"from-amber-600 to-yellow-700", btnActive:"bg-gradient-to-br from-amber-600 to-yellow-700", accent:"#d97706",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"א",salary:8096.7},{id:"82",label:"ב",salary:8845.27},
      {id:"90",label:"ג",salary:8825.41},{id:"92",label:"ד",salary:9641.35},
      {id:"95",label:"ה",salary:9403.61},{id:"96",label:"ו",salary:9809.58},{id:"97",label:"ז",salary:11307.85},
      {id:"100",label:"ח",salary:10297.22},{id:"102",label:"ט",salary:11249.36},{id:"104",label:"י",salary:12201.49},
      {id:"110",label:"יא",salary:11381.49},{id:"112",label:"יב",salary:12333.64},{id:"114",label:"יג",salary:13285.77},
      {id:"120",label:"יד",salary:12648.99},{id:"122",label:"טו",salary:13601.09},{id:"124",label:"טז",salary:14553.23},
      {id:"130",label:"יז",salary:14478.59},{id:"132",label:"יח",salary:15430.73},{id:"134",label:"יט",salary:16382.87},
      {id:"140",label:"כ",salary:16939.45},{id:"142",label:"כא",salary:17891.62},{id:"144",label:"כב",salary:18843.74},
      {id:"146",label:"כג",salary:19876.74},{id:"265",label:"כד",salary:26409.64},
    ]},

  "148": { name:"מנהל ומשק - חדש (148)", shortName:"מנהל ומשק 148", number:"148",
    color:"from-teal-600 to-cyan-700", btnActive:"bg-gradient-to-br from-teal-600 to-cyan-700", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"37",salary:7445.35},{id:"101",label:"37א",salary:8020.42},{id:"102",label:"37ב",salary:8595.5},
      {id:"110",label:"38",salary:7741.99},{id:"111",label:"38א",salary:8317.07},{id:"112",label:"38ב",salary:8892.13},
      {id:"120",label:"39",salary:8320.03},{id:"121",label:"39א",salary:8952.9},{id:"122",label:"39ב",salary:9585.76},
      {id:"130",label:"40",salary:9217.65},{id:"131",label:"40א",salary:9850.37},{id:"132",label:"40ב",salary:10483.25},
      {id:"140",label:"41",salary:10266.69},{id:"141",label:"41א",salary:10899.56},{id:"142",label:"41ב",salary:11532.43},
      {id:"150",label:"42",salary:11869.65},{id:"151",label:"42א",salary:12502.53},{id:"152",label:"42ב",salary:13135.4},
      {id:"160",label:"43",salary:13923.35},{id:"161",label:"43א",salary:14556.08},{id:"162",label:"43ב",salary:15188.95},
      {id:"170",label:"44",salary:15733.37},{id:"171",label:"44א",salary:16448.36},{id:"172",label:"44ב",salary:17163.52},
    ]},

  "948": { name:"מנהל ומשק - ותיק (948)", shortName:"מנהל ומשק 948", number:"948",
    color:"from-cyan-600 to-teal-700", btnActive:"bg-gradient-to-br from-cyan-600 to-teal-700", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"37",salary:7445.35},{id:"101",label:"37א",salary:8020.42},{id:"102",label:"37ב",salary:8595.5},
      {id:"110",label:"38",salary:7741.99},{id:"111",label:"38א",salary:8317.07},{id:"112",label:"38ב",salary:8892.13},
      {id:"120",label:"39",salary:8320.03},{id:"121",label:"39א",salary:8952.9},{id:"122",label:"39ב",salary:9585.76},
      {id:"130",label:"40",salary:9217.65},{id:"131",label:"40א",salary:9850.37},{id:"132",label:"40ב",salary:10483.25},
      {id:"140",label:"41",salary:10266.69},{id:"141",label:"41א",salary:10899.56},{id:"142",label:"41ב",salary:11532.43},
      {id:"150",label:"42",salary:11869.65},{id:"151",label:"42א",salary:12502.53},{id:"152",label:"42ב",salary:13135.4},
      {id:"160",label:"43",salary:13923.35},{id:"161",label:"43א",salary:14556.08},{id:"162",label:"43ב",salary:15188.95},
      {id:"170",label:"44",salary:15733.37},{id:"171",label:"44א",salary:16448.36},{id:"172",label:"44ב",salary:17163.52},
    ]},

  "164": { name:"מומחים - ישן (164)", shortName:"מומחים ישן 164", number:"164",
    color:"from-fuchsia-600 to-purple-700", btnActive:"bg-gradient-to-br from-fuchsia-600 to-purple-700", accent:"#a21caf",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"210",label:"דרגה 1",salary:19007.11},{id:"220",label:"דרגה 2",salary:20527.67},{id:"230",label:"דרגה 3",salary:22048.24},
      {id:"240",label:"דרגה א",salary:23336.76},{id:"250",label:"דרגה ב",salary:25003.69},{id:"260",label:"דרגה ג",salary:26670.59},
      {id:"270",label:"דרגה ד",salary:28337.5},{id:"280",label:"דרגה ה",salary:30004.42},{id:"290",label:"דרגה ו",salary:31671.32},
      {id:"300",label:"דרגה ז",salary:33338.24},
    ]},

  "555": { name:"מומחים - חדש (555)", shortName:"מומחים חדש 555", number:"555",
    color:"from-rose-600 to-pink-700", btnActive:"bg-gradient-to-br from-rose-600 to-pink-700", accent:"#e11d48",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"130",label:"דרגה 11",salary:10087.32},{id:"140",label:"דרגה 12",salary:10680.69},{id:"150",label:"דרגה 13",salary:11274.07},
      {id:"160",label:"דרגה 14",salary:11867.44},{id:"170",label:"דרגה 15",salary:12460.8},{id:"180",label:"דרגה 16",salary:13054.18},
      {id:"190",label:"דרגה 17",salary:13647.55},{id:"200",label:"דרגה 18",salary:14240.93},
      {id:"205",label:"מנהל משימות",salary:15427.67},
      {id:"210",label:"דרגה 1",salary:16800.84},{id:"220",label:"דרגה 2",salary:18144.9},{id:"230",label:"דרגה 3",salary:19488.98},
      {id:"240",label:"דרגה א",salary:20627.92},{id:"250",label:"דרגה ב",salary:22101.35},{id:"260",label:"דרגה ג",salary:23574.77},
      {id:"270",label:"דרגה ד",salary:25048.2},{id:"280",label:"דרגה ה",salary:26521.62},{id:"290",label:"דרגה ו",salary:27995.04},
      {id:"300",label:"דרגה ז",salary:29468.46},
    ]},

  "551": { name:"כלכלנים נבחרים - חדש (551)", shortName:"כלכלנים חדש 551", number:"551",
    color:"from-blue-600 to-indigo-700", btnActive:"bg-gradient-to-br from-blue-600 to-indigo-700", accent:"#2563eb",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"70",label:"36",salary:7464.3},{id:"72",label:"36א",salary:8006.8},{id:"74",label:"36ב",salary:8549.3},
      {id:"80",label:"37",salary:8061.45},{id:"82",label:"37א",salary:8603.95},{id:"84",label:"37ב",salary:9146.45},
      {id:"90",label:"38",salary:9019.95},{id:"92",label:"38א",salary:9562.46},{id:"94",label:"38ב",salary:10104.96},
      {id:"100",label:"39",salary:9831.75},{id:"102",label:"39א",salary:10374.62},{id:"104",label:"39ב",salary:10917.5},
      {id:"110",label:"40",salary:11482.07},{id:"112",label:"40א",salary:12024.94},{id:"114",label:"40ב",salary:12567.81},
      {id:"120",label:"41",salary:13424.75},{id:"122",label:"41א",salary:13967.61},{id:"124",label:"41ב",salary:14510.49},
      {id:"130",label:"42",salary:14879.71},{id:"132",label:"42א",salary:15422.56},{id:"134",label:"42ב",salary:15965.45},
      {id:"140",label:"43",salary:16493.37},{id:"142",label:"43א",salary:17928.06},{id:"144",label:"43ב",salary:18470.95},
      {id:"150",label:"44",salary:18637.5},{id:"152",label:"44א",salary:20258.69},{id:"154",label:"44ב",salary:20872.17},
    ]},

  "564": { name:"לשכות שר ומנכ\"ל - חדש (564)", shortName:"לשכות שר/מנכ\"ל חדש", number:"564",
    color:"from-yellow-600 to-amber-700", btnActive:"bg-gradient-to-br from-yellow-600 to-amber-700", accent:"#ca8a04",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"70",label:"א",salary:7051.99},{id:"72",label:"ב",salary:7280.18},
      {id:"80",label:"ג",salary:8096.7},{id:"82",label:"ד",salary:8845.27},
      {id:"90",label:"ה",salary:8825.41},{id:"92",label:"ו",salary:9641.35},
      {id:"95",label:"ז",salary:9403.61},{id:"96",label:"ח",salary:9809.58},{id:"97",label:"ט",salary:11307.85},
      {id:"100",label:"י",salary:10297.22},{id:"102",label:"יא",salary:11249.36},{id:"104",label:"יב",salary:12201.49},
      {id:"110",label:"יג",salary:11381.49},{id:"112",label:"יד",salary:12333.64},{id:"114",label:"טו",salary:13285.77},
      {id:"120",label:"טז",salary:12648.99},{id:"122",label:"יז",salary:13601.09},{id:"124",label:"יח",salary:14553.23},
      {id:"130",label:"יט",salary:14478.59},{id:"132",label:"כ",salary:15430.73},{id:"134",label:"כא",salary:16382.87},
      {id:"140",label:"כב",salary:16939.45},{id:"142",label:"כג",salary:17891.62},{id:"144",label:"כד",salary:18843.74},
      {id:"146",label:"כה",salary:17957.09},{id:"148",label:"כו",salary:19827.72},{id:"149",label:"כז",salary:21296.45},
      {id:"250",label:"כח",salary:22569.15},{id:"251",label:"כט",salary:23256.42},
      {id:"260",label:"ל",salary:24073.78},{id:"265",label:"לא",salary:24421.63},{id:"270",label:"לב",salary:25582.7},
      {id:"280",label:"לג",salary:26704.2},{id:"290",label:"לד",salary:27891.06},
      {id:"300",label:"לה",salary:29077.91},{id:"310",label:"לו",salary:30264.76},
      {id:"145",label:"לז",salary:33037.24},{id:"150",label:"לח",salary:35101.19},
    ]},

  "568": { name:"סגל בכיר מוביל (568)", shortName:"בכיר מוביל 568", number:"568",
    color:"from-purple-600 to-violet-700", btnActive:"bg-gradient-to-br from-purple-600 to-violet-700", accent:"#9333ea",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"top0",label:"מינויים מיוחדים - 0 שנים",salary:37848.9},{id:"top1",label:"מינויים מיוחדים - 1 שנה",salary:38422.37},{id:"top2",label:"מינויים מיוחדים - 2+ שנים",salary:38995.84},
      {id:"b1-0",label:"בכיר מוביל ב1 - 0 שנים",salary:34408.09},{id:"b1-1",label:"בכיר מוביל ב1 - 1 שנה",salary:34981.55},
      {id:"b1-2",label:"בכיר מוביל ב1 - 2 שנים",salary:35555.02},{id:"b1-3",label:"בכיר מוביל ב1 - 3 שנים",salary:36128.5},
      {id:"b1-4",label:"בכיר מוביל ב1 - 4 שנים",salary:36701.96},{id:"b1-5",label:"בכיר מוביל ב1 - 5 שנים",salary:37275.43},
      {id:"b1-6",label:"בכיר מוביל ב1 - 6+ שנים",salary:37848.9},
      {id:"b2-0",label:"בכיר מוביל ב2 - 0 שנים",salary:32114.22},{id:"b2-1",label:"בכיר מוביל ב2 - 1 שנה",salary:32687.68},
      {id:"b2-2",label:"בכיר מוביל ב2 - 2 שנים",salary:33261.16},{id:"b2-3",label:"בכיר מוביל ב2 - 3 שנים",salary:33834.63},
      {id:"b2-4",label:"בכיר מוביל ב2 - 4 שנים",salary:34408.09},{id:"b2-5",label:"בכיר מוביל ב2 - 5 שנים",salary:34981.55},
      {id:"b2-6",label:"בכיר מוביל ב2 - 6+ שנים",salary:35555.02},
      {id:"b3-0",label:"בכיר מוביל ב3 - 0 שנים",salary:29820.34},{id:"b3-1",label:"בכיר מוביל ב3 - 1 שנה",salary:30393.81},
      {id:"b3-2",label:"בכיר מוביל ב3 - 2 שנים",salary:30967.28},{id:"b3-3",label:"בכיר מוביל ב3 - 3 שנים",salary:31540.75},
      {id:"b3-4",label:"בכיר מוביל ב3 - 4 שנים",salary:32114.22},{id:"b3-5",label:"בכיר מוביל ב3 - 5 שנים",salary:32687.68},
      {id:"b3-6",label:"בכיר מוביל ב3 - 6+ שנים",salary:33261.16},
    ]},

  "569": { name:"סגל בכיר שאינו מוביל (569)", shortName:"בכיר לא מוביל 569", number:"569",
    color:"from-slate-600 to-gray-700", btnActive:"bg-gradient-to-br from-slate-600 to-gray-700", accent:"#475569",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"g1-0",label:"בכיר ג1 - 0 שנים",salary:29820.34},{id:"g1-1",label:"בכיר ג1 - 1 שנה",salary:30393.81},
      {id:"g1-2",label:"בכיר ג1 - 2 שנים",salary:30967.28},{id:"g1-3",label:"בכיר ג1 - 3 שנים",salary:31540.75},
      {id:"g1-4",label:"בכיר ג1 - 4 שנים",salary:32114.22},{id:"g1-5",label:"בכיר ג1 - 5 שנים",salary:32687.68},
      {id:"g1-6",label:"בכיר ג1 - 6+ שנים",salary:33261.16},
      {id:"g2-0",label:"בכיר ג2 - 0 שנים",salary:25232.61},{id:"g2-1",label:"בכיר ג2 - 1 שנה",salary:25806.08},
      {id:"g2-2",label:"בכיר ג2 - 2 שנים",salary:26379.54},{id:"g2-3",label:"בכיר ג2 - 3 שנים",salary:26953.0},
      {id:"g2-4",label:"בכיר ג2 - 4 שנים",salary:27526.48},{id:"g2-5",label:"בכיר ג2 - 5 שנים",salary:28099.95},
      {id:"g2-6",label:"בכיר ג2 - 6 שנים",salary:28673.41},{id:"g2-7",label:"בכיר ג2 - 7 שנים",salary:29246.88},
      {id:"g2-8",label:"בכיר ג2 - 8+ שנים",salary:29820.34},
    ]},

  "557": { name:"בכירים ותיקים - צמודי יוקר (557)", shortName:"בכירים ותיקים 557", number:"557",
    color:"from-gray-700 to-zinc-800", btnActive:"bg-gradient-to-br from-gray-700 to-zinc-800", accent:"#374151",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"340",label:"רמה 340",salary:33037.25},{id:"350",label:"רמה 350",salary:35100.37},
      {id:"360",label:"רמה 360",salary:37165.77},{id:"370",label:"רמה 370",salary:41916.86},
      {id:"450",label:"רמה 450 (מנהל מינהל האדמה)",salary:48503.75},
    ]},

  "864": { name:"בכירים בלשכות שר ומנכ\"ל (864)", shortName:"בכירים לשכות 864", number:"864",
    color:"from-stone-600 to-neutral-700", btnActive:"bg-gradient-to-br from-stone-600 to-neutral-700", accent:"#57534e",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"145",label:"דרגה 7",salary:33037.24},{id:"150",label:"דרגה 8",salary:35101.19},
    ]},

  "287": { name:"צוערים - ישן (287)", shortName:"צוערים ישן 287", number:"287",
    color:"from-orange-600 to-amber-600", btnActive:"bg-gradient-to-br from-orange-600 to-amber-600", accent:"#ea580c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"409",label:"צוער",salary:7130.21},{id:"410",label:"צוער ותיק",salary:7800.52},{id:"411",label:"צוע.א1",salary:7613.56},
      {id:"412",label:"צוע.א2",salary:8096.9},{id:"413",label:"צוע.ב1 ותיק",salary:8283.85},{id:"414",label:"צוע.ב2 ותיק",salary:8767.19},
    ]},

  "554": { name:"צוערים - חדש (554)", shortName:"צוערים חדש 554", number:"554",
    color:"from-amber-600 to-orange-700", btnActive:"bg-gradient-to-br from-amber-600 to-orange-700", accent:"#d97706",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"409",label:"צוער",salary:6302.57},{id:"410",label:"צוער ותיק",salary:6895.07},{id:"411",label:"צוע.א1",salary:6729.8},
      {id:"412",label:"צוע.א2",salary:7157.04},{id:"413",label:"צוע.ב1 ותיק",salary:7322.29},{id:"414",label:"צוע.ב2 ותיק",salary:7749.54},
    ]},

  "167": { name:"יחידת היעדים (167)", shortName:"יחידת היעדים", number:"167",
    color:"from-indigo-700 to-blue-800", btnActive:"bg-gradient-to-br from-indigo-700 to-blue-800", accent:"#3730a3",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"101",label:"ראש ענף 1",salary:11411.98},{id:"102",label:"ראש ענף 2",salary:12083.28},{id:"103",label:"ראש ענף 3",salary:12754.56},
      {id:"111",label:"מרכז בכיר 1",salary:12754.56},{id:"112",label:"מרכז בכיר 2",salary:14097.15},{id:"113",label:"מרכז בכיר 3",salary:15439.74},
      {id:"121",label:"מנהל תחום תיאום 1",salary:14097.15},{id:"122",label:"מנהל תחום תיאום 2",salary:15439.74},{id:"123",label:"מנהל תחום תיאום 3",salary:17453.62},
      {id:"131",label:"מנהל תחום מעקב 1",salary:14097.15},{id:"132",label:"מנהל תחום מעקב 2",salary:15439.74},{id:"133",label:"מנהל תחום מעקב 3",salary:17453.62},
      {id:"134",label:"מנהל תחום מעקב 4",salary:20810.08},
    ]},

  "168": { name:"חוקרי חקירות שוטרים (168)", shortName:"חוקרי שוטרים 168", number:"168",
    color:"from-blue-800 to-indigo-900", btnActive:"bg-gradient-to-br from-blue-800 to-indigo-900", accent:"#1e3a8a",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"צוער",salary:7246.68},{id:"20",label:"חוקר א'",salary:7905.47},{id:"21",label:"חוקר א' + גמול א'",salary:8417.35},{id:"22",label:"חוקר א' + א'+ב'",salary:8929.23},
      {id:"30",label:"חוקר ב'",salary:8827.78},{id:"31",label:"חוקר ב' + גמול א'",salary:9339.67},{id:"32",label:"חוקר ב' + א'+ב'",salary:9851.53},
      {id:"40",label:"חוקר ג'",salary:9618.31},{id:"41",label:"חוקר ג' + גמול א'",salary:10130.2},{id:"42",label:"חוקר ג' + א'+ב'",salary:10642.08},
      {id:"50",label:"חוקר בכיר א'",salary:10540.62},{id:"51",label:"חוקר בכיר א' + א'",salary:11052.5},{id:"52",label:"חוקר בכיר א' + א'+ב'",salary:11564.39},
      {id:"60",label:"חוקר בכיר ב'",salary:11462.93},{id:"61",label:"חוקר בכיר ב' + א'",salary:11974.82},{id:"62",label:"חוקר בכיר ב' + א'+ב'",salary:12486.7},
      {id:"70",label:"חוקר בכיר ג'",salary:12385.24},{id:"71",label:"חוקר בכיר ג' + א'",salary:12897.12},{id:"72",label:"חוקר בכיר ג' + א'+ב'",salary:13408.99},
      {id:"75",label:"ראש שלוחה",salary:13188.09},{id:"76",label:"ראש שלוחה + א'",salary:13699.98},{id:"77",label:"ראש שלוחה + א'+ב'",salary:14211.85},
      {id:"80",label:"סגן ראש צוות",salary:13307.53},{id:"81",label:"סגן ראש צוות + א'",salary:13883.4},{id:"82",label:"סגן ראש צוות + א'+ב'",salary:14459.27},
      {id:"90",label:"ראש צוות",salary:14625.12},{id:"91",label:"ראש צוות + א'",salary:15201.0},{id:"92",label:"ראש צוות + א'+ב'",salary:15776.85},
    ]},

  "109": { name:"עובדי אית\"ן ואית\"ן אבטחה (109)", shortName:"עובדי אית\"ן", number:"109",
    color:"from-emerald-700 to-green-800", btnActive:"bg-gradient-to-br from-emerald-700 to-green-800", accent:"#047857",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"דרגה 1",salary:6124.21},{id:"20",label:"דרגה 2",salary:6270.67},{id:"30",label:"דרגה 3",salary:6419.4},
      {id:"40",label:"דרגה 4",salary:6567.77},{id:"50",label:"דרגה 5",salary:7013.39},{id:"60",label:"דרגה 6",salary:7750.87},
      {id:"100",label:"דרגה 10",salary:6634.12},{id:"110",label:"דרגה 11",salary:7084.23},{id:"120",label:"דרגה 12",salary:7829.16},
    ]},

  "384": { name:"מאבטחי מתקן (384)", shortName:"מאבטחי מתקן", number:"384",
    color:"from-zinc-600 to-stone-700", btnActive:"bg-gradient-to-br from-zinc-600 to-stone-700", accent:"#52525b",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"מאבטח מתקן",salary:6752.0},{id:"20",label:"קורס אחיד",salary:7300.33},{id:"30",label:"קב\"ט",salary:8901.4},
    ]},

  "387": { name:"מאבטחים (387)", shortName:"מאבטחים", number:"387",
    color:"from-slate-700 to-gray-800", btnActive:"bg-gradient-to-br from-slate-700 to-gray-800", accent:"#334155",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"810",label:"מאבטח 1",salary:6078.76},{id:"820",label:"מאבטח 2",salary:6193.77},{id:"830",label:"מאבטח 3",salary:6639.2},
      {id:"840",label:"מדריך ירי/קמ\"ג 1",salary:7132.99},{id:"850",label:"מדריך ירי/קמ\"ג 2",salary:7584.0},
      {id:"815",label:"מאבטח 1 ב.מ.",salary:6336.82},{id:"825",label:"מאבטח 2 ב.מ.",salary:6455.87},{id:"835",label:"מאבטח 3 ב.מ.",salary:6920.62},
      {id:"860",label:"חמוש 1",salary:7330.85},{id:"870",label:"חמוש 2",salary:7453.02},{id:"880",label:"חמוש 3",salary:8002.83},
      {id:"890",label:"לא חמוש 1",salary:6821.75},{id:"900",label:"לא חמוש 2",salary:6964.29},{id:"910",label:"לא חמוש 3",salary:7453.02},
      {id:"920",label:"מדריך ירי 1",salary:8552.64},{id:"930",label:"מדריך ירי 2",salary:9772.21},
    ]},

  "522": { name:"עובדי המטה לביטחון לאומי (522)", shortName:"מטה ביטחון לאומי", number:"522",
    color:"from-red-800 to-red-900", btnActive:"bg-gradient-to-br from-red-800 to-red-900", accent:"#991b1b",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"130",label:"עוזר ראש מדור 1",salary:10104.13},{id:"140",label:"עוזר ראש מדור 2",salary:11367.15},
      {id:"150",label:"עוזר ראש מדור 3",salary:12630.16},{id:"160",label:"עוזר ראש מדור 4",salary:13893.17},
      {id:"170",label:"ראש מדור 1",salary:15156.19},{id:"180",label:"ראש מדור 2",salary:16419.2},{id:"190",label:"ראש מדור 3",salary:17682.21},
      {id:"200",label:"ראש ענף 1",salary:18945.23},{id:"210",label:"ראש ענף 2",salary:20208.26},{id:"220",label:"ראש ענף 3",salary:21471.28},
      {id:"230",label:"ראש מחלקה 1",salary:22734.29},{id:"240",label:"ראש מחלקה 2",salary:23997.3},{id:"250",label:"ראש מחלקה 3",salary:25260.32},
      {id:"260",label:"ראש חטיבה 1",salary:29049.36},{id:"270",label:"ראש חטיבה 2",salary:30312.38},{id:"280",label:"ראש חטיבה 3",salary:31922.73},
      {id:"290",label:"ראש אגף",salary:33800.82},{id:"300",label:"סגן ראש המל\"ל",salary:40922.97},
      {id:"310",label:"סגן ראש המל\"ל (חדש)",salary:41912.34},{id:"320",label:"משנה לראש המל\"ל",salary:43027.33},
    ]},

  "965": { name:"מומחים בשירותי הביטחון (965)", shortName:"מומחים ביטחון 965", number:"965",
    color:"from-red-700 to-rose-800", btnActive:"bg-gradient-to-br from-red-700 to-rose-800", accent:"#b91c1c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"18",salary:7686.31},{id:"95",label:"38",salary:9223.58},{id:"100",label:"39",salary:10760.83},
      {id:"110",label:"40",salary:12298.08},{id:"120",label:"41",salary:13835.35},{id:"130",label:"42",salary:15372.6},{id:"140",label:"43",salary:16909.87},
      {id:"210",label:"דרגה 1",salary:18359.0},{id:"220",label:"דרגה 2",salary:19827.72},{id:"230",label:"דרגה 3",salary:21296.45},
      {id:"240",label:"דרגה א",salary:22541.03},{id:"250",label:"דרגה ב",salary:24151.11},{id:"260",label:"דרגה ג",salary:25761.17},
      {id:"270",label:"דרגה ד",salary:27371.25},{id:"280",label:"דרגה ה",salary:28981.33},{id:"290",label:"דרגה ו",salary:30591.4},
      {id:"300",label:"דרגה ז",salary:32201.47},{id:"310",label:"דרגה ח",salary:33344.71},{id:"320",label:"דרגה ט",salary:34932.58},
      {id:"330",label:"דרגה י",salary:36520.41},{id:"340",label:"דרגה יא",salary:38764.27},{id:"350",label:"דרגה יב",salary:40255.19},
      {id:"360",label:"דרגה יג",salary:41283.93},{id:"370",label:"דרגה יד",salary:42871.76},{id:"380",label:"דרגה טו",salary:44459.62},
    ]},

  "122": { name:"מינהל תעופה אזרחי (122)", shortName:"תעופה אזרחי 122", number:"122",
    color:"from-sky-500 to-cyan-600", btnActive:"bg-gradient-to-br from-sky-500 to-cyan-600", accent:"#0ea5e9",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"טייסים 1",salary:22996.99},{id:"11",label:"טייסים 1א",salary:23633.43},{id:"12",label:"טייסים 1ב",salary:24271.22},
      {id:"20",label:"טייסים 2",salary:20248.67},{id:"21",label:"טייסים 2א",salary:20885.48},{id:"22",label:"טייסים 2ב",salary:21523.29},
      {id:"30",label:"טייסים 3",salary:18080.07},{id:"31",label:"טייסים 3א",salary:18716.12},{id:"32",label:"טייסים 3ב",salary:19353.91},
      {id:"40",label:"טייסים 4",salary:16632.67},{id:"41",label:"טייסים 4א",salary:17269.84},{id:"42",label:"טייסים 4ב",salary:17907.64},
      {id:"50",label:"טייסים 5",salary:15186.5},{id:"51",label:"טייסים 5א",salary:15823.57},{id:"52",label:"טייסים 5ב",salary:16461.36},
      {id:"60",label:"טייסים 6",salary:13740.35},{id:"61",label:"טייסים 6א",salary:14377.31},{id:"62",label:"טייסים 6ב",salary:15015.11},
      {id:"70",label:"טייסים 7",salary:13016.63},{id:"71",label:"טייסים 7א",salary:13654.17},{id:"72",label:"טייסים 7ב",salary:14291.99},
      {id:"80",label:"מהנדסים 8",salary:14931.37},{id:"81",label:"מהנדסים 8א",salary:15662.72},{id:"82",label:"מהנדסים 8ב",salary:16394.33},
      {id:"90",label:"מהנדסים 9",salary:13687.3},{id:"91",label:"מהנדסים 9א",salary:14418.46},{id:"92",label:"מהנדסים 9ב",salary:15150.09},
      {id:"100",label:"מהנדסים 10",salary:12443.23},{id:"101",label:"מהנדסים 10א",salary:13174.21},{id:"102",label:"מהנדסים 10ב",salary:13905.81},
      {id:"110",label:"מהנדסים 11",salary:11199.16},{id:"111",label:"מהנדסים 11א",salary:11929.96},{id:"112",label:"מהנדסים 11ב",salary:12661.58},
      {id:"120",label:"מהנדסים 12",salary:9955.1},{id:"121",label:"מהנדסים 12א",salary:10685.7},{id:"122",label:"מהנדסים 12ב",salary:11417.33},
      {id:"130",label:"מהנדסים 13",salary:9125.29},{id:"131",label:"מהנדסים 13א",salary:9856.18},{id:"132",label:"מהנדסים 13ב",salary:10587.81},
      {id:"140",label:"מהנדסים 14",salary:8295.48},{id:"141",label:"מהנדסים 14א",salary:9026.68},{id:"142",label:"מהנדסים 14ב",salary:9758.3},
      {id:"150",label:"מהנדסים 15",salary:7465.69},{id:"151",label:"מהנדסים 15א",salary:8197.17},{id:"152",label:"מהנדסים 15ב",salary:8928.78},
      {id:"160",label:"הנדסאים 16",salary:9197.28},{id:"161",label:"הנדסאים 16א",salary:10008.15},{id:"162",label:"הנדסאים 16ב",salary:10819.3},
      {id:"170",label:"הנדסאים 17",salary:8277.8},{id:"171",label:"הנדסאים 17א",salary:9088.44},{id:"172",label:"הנדסאים 17ב",salary:9899.63},
      {id:"180",label:"הנדסאים 18",salary:7358.34},{id:"181",label:"הנדסאים 18א",salary:8168.77},{id:"182",label:"הנדסאים 18ב",salary:8979.93},
      {id:"190",label:"הנדסאים 19",salary:6437.59},{id:"191",label:"הנדסאים 19א",salary:7249.03},{id:"192",label:"הנדסאים 19ב",salary:8060.19},
      {id:"210",label:"מפקח מובילים א",salary:29049.36},{id:"220",label:"מפקח מובילים ב",salary:30312.38},{id:"230",label:"מפקח מובילים ג",salary:31575.39},
      {id:"240",label:"מפקח מובילים ד",salary:32838.41},{id:"250",label:"מפקח מובילים ה",salary:34101.44},
      {id:"260",label:"מפקח ראשי ו",salary:35364.45},{id:"270",label:"מפקח ראשי ז",salary:36627.47},
      {id:"280",label:"מפקח ראשי ח",salary:37890.48},{id:"290",label:"מפקח ראשי ט",salary:39153.49},{id:"300",label:"מפקח ראשי י",salary:40416.51},
      {id:"a1",label:"מנהל אגף בכיר - תפעול אוויריים",salary:50520.64},
      {id:"a2",label:"מנהל תחום בכיר - ייריווא",salary:47994.61},
      {id:"a3",label:"מנהל תחום בכיר - רישוי טייסי עובדים",salary:37890.48},
    ]},

  "88": { name:"בוחני רישוי נהיגה (88 - שעתי)", shortName:"בוחני נהיגה 88", number:"88",
    color:"from-violet-500 to-indigo-600", btnActive:"bg-gradient-to-br from-violet-500 to-indigo-600", accent:"#6d28d9",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"1",label:"רמה 1 (שעתי)",salary:55.37*182},{id:"2",label:"רמה 2 (שעתי)",salary:56.81*182},
      {id:"3",label:"רמה 3 (שעתי)",salary:58.21*182},{id:"4",label:"רמה 4 (שעתי)",salary:59.59*182},
    ]},

  "589": { name:"עובדי חדר מצב קיברנטי (589)", shortName:"חדר מצב קיברנטי", number:"589",
    color:"from-violet-700 to-purple-800", btnActive:"bg-gradient-to-br from-violet-700 to-purple-800", accent:"#6d28d9",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"100",label:"עובד חדר מצב קיברנטי (שעתי)",salary:58.38*182}]},

  "590": { name:"קשרים - משרד ראש הממשלה (590)", shortName:"קשרים מרה\"מ", number:"590",
    color:"from-cyan-700 to-teal-800", btnActive:"bg-gradient-to-br from-cyan-700 to-teal-800", accent:"#0e7490",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"קשר האזנה 1 (שעתי)",salary:34.69*182},{id:"110",label:"קשר האזנה 2 (שעתי)",salary:35.8*182},
      {id:"120",label:"קשר האזנה 3 (שעתי)",salary:37.48*182},{id:"130",label:"קשר האזנה חמ\"א (שעתי)",salary:39.5*182},
      {id:"200",label:"קשר תקשורת זרה 1 (שעתי)",salary:36.36*182},{id:"210",label:"קשר תקשורת זרה 2 (שעתי)",salary:37.15*182},
      {id:"220",label:"קשר תקשורת זרה 3 (שעתי)",salary:38.37*182},{id:"230",label:"קשר תקשורת זרה חמ\"א (שעתי)",salary:40.61*182},
    ]},

  "487": { name:"סוקרים - ישן (487)", shortName:"סוקרים 487", number:"487",
    color:"from-rose-500 to-red-600", btnActive:"bg-gradient-to-br from-rose-500 to-red-600", accent:"#f43f5e",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"סוקרי טלפון (שעתי)",salary:32.75*182},{id:"90",label:"סוקרי עסקים (שעתי)",salary:33.51*182},
      {id:"95",label:"סוקרי משפחות (שעתי)",salary:34.31*182},
    ]},

  "584": { name:"סוקרים - חדש (584)", shortName:"סוקרים חדש 584", number:"584",
    color:"from-pink-500 to-rose-600", btnActive:"bg-gradient-to-br from-pink-500 to-rose-600", accent:"#ec4899",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"170",label:"סוקרי טלפון (שעתי)",salary:39.51*182},{id:"175",label:"סוקרי טלפון א (שעתי)",salary:41.08*182},{id:"176",label:"סוקרי טלפון ב (שעתי)",salary:43.13*182},
      {id:"180",label:"סוקרי עסקים שטח (שעתי)",salary:40.44*182},{id:"185",label:"סוקרי עסקים שטח א (שעתי)",salary:42.05*182},{id:"186",label:"סוקרי עסקים שטח ב (שעתי)",salary:42.89*182},
      {id:"190",label:"סוקרי משפחות (שעתי)",salary:40.82*182},{id:"195",label:"סוקרי משפחות א (שעתי)",salary:43.26*182},{id:"196",label:"סוקרי משפחות ב (שעתי)",salary:45.42*182},
    ]},

  "585": { name:"סוקרים (585)", shortName:"סוקרים 585", number:"585",
    color:"from-red-500 to-pink-600", btnActive:"bg-gradient-to-br from-red-500 to-pink-600", accent:"#ef4444",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"13",label:"סוקרי טלפון (שעתי)",salary:33.23*182},{id:"14",label:"סוקרי עסקים ושטח (שעתי)",salary:34.01*182},
      {id:"15",label:"סוקרי משפחות (שעתי)",salary:34.81*182},
    ]},

  "586": { name:"פיקוח אלקטרוני - משרד הפנים (586)", shortName:"פיקוח אלקטרוני 586", number:"586",
    color:"from-violet-600 to-indigo-700", btnActive:"bg-gradient-to-br from-violet-600 to-indigo-700", accent:"#7c3aed",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"70",label:"רמה 1 (שעתי)",salary:38.93*182},{id:"80",label:"רמה 2 (שעתי)",salary:40.96*182},{id:"90",label:"רמה 3 (שעתי)",salary:42.97*182},
    ]},

  "381": { name:"מנהלי חטיבות ביחידת תקשורת - אוצר (381)", shortName:"מנהלי חטיבות תקשורת", number:"381",
    color:"from-stone-600 to-zinc-700", btnActive:"bg-gradient-to-br from-stone-600 to-zinc-700", accent:"#78716c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"1",label:"מנהל חטיבה",salary:29194.11}]},

  "509": { name:"מרגתמי ביטחון - משרד החוץ (509)", shortName:"מרגתמי ביטחון חוץ", number:"509",
    color:"from-zinc-600 to-slate-700", btnActive:"bg-gradient-to-br from-zinc-600 to-slate-700", accent:"#71717a",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"100",label:"מאבטח (שעתי)",salary:36.63*182}]},

  "764": { name:"נהג שר ומנכ\"ל (764)", shortName:"נהג שר 764", number:"764",
    color:"from-neutral-600 to-stone-700", btnActive:"bg-gradient-to-br from-neutral-600 to-stone-700", accent:"#737373",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"500",label:"נ.שר א",salary:14303.55},{id:"502",label:"נ.שר ב",salary:14875.45},{id:"506",label:"נ.שר ג",salary:15469.87},
      {id:"520",label:"נ.סגן.שר א",salary:13165.74},{id:"522",label:"נ.סגן.שר ב",salary:13692.63},{id:"526",label:"נ.סגן.שר ג",salary:14240.5},
      {id:"540",label:"נ.מ.נ.מ א",salary:12027.95},{id:"542",label:"נ.מ.נ.מ ב",salary:12509.8},{id:"546",label:"נ.מ.נ.מ ג",salary:13009.65},
      {id:"508",label:"נ.רה\"מ ג'",salary:16581.85},
    ]},

};

export const CAR_PACKAGES = {
  "none":    { label: "ללא רכב", value: 0, isCar: false },
  "level2":  { label: "רכב שירות - רמה ב'", value: 1022, isCar: true, insurance: 444 },
  "level3":  { label: "רכב שירות - רמה ג'", value: 1228, isCar: true, insurance: 570 },
  "level4":  { label: "רכב שירות - רמה ד'", value: 1403, isCar: true, insurance: 676 },
};
