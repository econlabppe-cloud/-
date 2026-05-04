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
      {id:"36",   label:"דרגה 36",   salary:7441.39},
      {id:"36א",  label:"דרגה 36א",  salary:7998.23},
      {id:"36ב",  label:"דרגה 36ב",  salary:8555.08},
      {id:"37",   label:"דרגה 37",   salary:8036.71},
      {id:"37א",  label:"דרגה 37א",  salary:8593.55},
      {id:"37ב",  label:"דרגה 37ב",  salary:9150.39},
      {id:"38",   label:"דרגה 38",   salary:8992.27},
      {id:"38א",  label:"דרגה 38א",  salary:9549.12},
      {id:"38ב",  label:"דרגה 38ב",  salary:10105.96},
      {id:"39",   label:"דרגה 39",   salary:9801.58},
      {id:"39א",  label:"דרגה 39א",  salary:10358.80},
      {id:"39ב",  label:"דרגה 39ב",  salary:10916.04},
      {id:"40",   label:"דרגה 40",   salary:11446.83},
      {id:"40א",  label:"דרגה 40א",  salary:12004.05},
      {id:"40ב",  label:"דרגה 40ב",  salary:12561.28},
      {id:"41",   label:"דרגה 41",   salary:13383.55},
      {id:"41א",  label:"דרגה 41א",  salary:13940.76},
      {id:"41ב",  label:"דרגה 41ב",  salary:14497.98},
      {id:"42",   label:"דרגה 42",   salary:14834.05},
      {id:"42א",  label:"דרגה 42א",  salary:15391.24},
      {id:"42ב",  label:"דרגה 42ב",  salary:15948.49},
      {id:"43",   label:"דרגה 43",   salary:16442.75},
      {id:"43א",  label:"דרגה 43א",  salary:17915.37},
      {id:"43ב",  label:"דרגה 43ב",  salary:18472.61},
      {id:"44",   label:"דרגה 44",   salary:18580.31},
      {id:"44א",  label:"דרגה 44א",  salary:20244.36},
      {id:"44ב",  label:"דרגה 44ב",  salary:20874.05},
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
      {id:"36",  label:"דרגה 36",  salary:6315.25},
      {id:"36א", label:"דרגה 36א", salary:6914.31},
      {id:"36ב", label:"דרגה 36ב", salary:7513.38},
      {id:"37",  label:"דרגה 37",  salary:6464.66},
      {id:"37א", label:"דרגה 37א", salary:7063.25},
      {id:"37ב", label:"דרגה 37ב", salary:7661.81},
      {id:"38",  label:"דרגה 38",  salary:6614.30},
      {id:"38א", label:"דרגה 38א", salary:7212.88},
      {id:"38ב", label:"דרגה 38ב", salary:7811.45},
      {id:"39",  label:"דרגה 39",  salary:7063.06},
      {id:"39א", label:"דרגה 39א", salary:7721.75},
      {id:"39ב", label:"דרגה 39ב", salary:8380.47},
      {id:"40",  label:"דרגה 40",  salary:7805.78},
      {id:"40א", label:"דרגה 40א", salary:8464.45},
      {id:"40ב", label:"דרגה 40ב", salary:9123.18},
      {id:"41",  label:"דרגה 41",  salary:8673.92},
      {id:"41א", label:"דרגה 41א", salary:9332.63},
      {id:"41ב", label:"דרגה 41ב", salary:9991.37},
      {id:"42",  label:"דרגה 42",  salary:10016.67},
      {id:"42א", label:"דרגה 42א", salary:10675.36},
      {id:"42ב", label:"דרגה 42ב", salary:11334.08},
      {id:"43",  label:"דרגה 43",  salary:11719.15},
      {id:"43א", label:"דרגה 43א", salary:12377.88},
      {id:"43ב", label:"דרגה 43ב", salary:13036.57},
      {id:"44",  label:"דרגה 44",  salary:13242.66},
      {id:"44א", label:"דרגה 44א", salary:13987.00},
      {id:"44ב", label:"דרגה 44ב", salary:14731.32},
    ]
  },
  "568": {
    name: "סגל בכיר מוביל",
    shortName: "בכיר מוביל",
    number: "568",
    noTravel: true,
    color: "from-purple-600 to-violet-700",
    btnActive: "bg-gradient-to-br from-purple-600 to-violet-700",
    accent: "#7c3aed",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"מ-א-0",  label:"משנה/קצוב 43-45 - ותק 0",   salary:37732.74, mealAllowance:1070.1},
      {id:"מ-א-1",  label:"משנה/קצוב 43-45 - ותק 1",   salary:38304.44, mealAllowance:1086.2},
      {id:"מ-א-2",  label:"משנה/קצוב 43-45 - ותק 2+",  salary:38876.16, mealAllowance:1102.3},
      {id:"ב1-0",   label:"בכיר מוביל ב1 - ותק 0",     salary:34302.49, mealAllowance:972.7},
      {id:"ב1-1",   label:"בכיר מוביל ב1 - ותק 1",     salary:34874.19, mealAllowance:988.7},
      {id:"ב1-2",   label:"בכיר מוביל ב1 - ותק 2",     salary:35445.90, mealAllowance:1004.8},
      {id:"ב1-3",   label:"בכיר מוביל ב1 - ותק 3",     salary:36017.62, mealAllowance:1020.9},
      {id:"ב1-4",   label:"בכיר מוביל ב1 - ותק 4",     salary:36589.32, mealAllowance:1038.0},
      {id:"ב1-5",   label:"בכיר מוביל ב1 - ותק 5",     salary:37161.03, mealAllowance:1054.1},
      {id:"ב1-6+",  label:"בכיר מוביל ב1 - ותק 6+",    salary:37732.74, mealAllowance:1070.1},
      {id:"ב2-0",   label:"בכיר מוביל ב2 - ותק 0",     salary:32015.65, mealAllowance:908.4},
      {id:"ב2-1",   label:"בכיר מוביל ב2 - ותק 1",     salary:32587.36, mealAllowance:924.4},
      {id:"ב2-2",   label:"בכיר מוביל ב2 - ותק 2",     salary:33159.07, mealAllowance:940.5},
      {id:"ב2-3",   label:"בכיר מוביל ב2 - ותק 3",     salary:33730.78, mealAllowance:956.6},
      {id:"ב2-4",   label:"בכיר מוביל ב2 - ותק 4",     salary:34302.49, mealAllowance:972.7},
      {id:"ב2-5",   label:"בכיר מוביל ב2 - ותק 5",     salary:34874.19, mealAllowance:988.7},
      {id:"ב2-6+",  label:"בכיר מוביל ב2 - ותק 6+",    salary:35445.90, mealAllowance:1004.8},
      {id:"ב3-0",   label:"בכיר מוביל ב3 - ותק 0",     salary:29728.81, mealAllowance:843.0},
      {id:"ב3-1",   label:"בכיר מוביל ב3 - ותק 1",     salary:30300.53, mealAllowance:859.1},
      {id:"ב3-2",   label:"בכיר מוביל ב3 - ותק 2",     salary:30872.24, mealAllowance:875.2},
      {id:"ב3-3",   label:"בכיר מוביל ב3 - ותק 3",     salary:31443.94, mealAllowance:891.2},
      {id:"ב3-4",   label:"בכיר מוביל ב3 - ותק 4",     salary:32015.65, mealAllowance:908.4},
      {id:"ב3-5",   label:"בכיר מוביל ב3 - ותק 5",     salary:32587.36, mealAllowance:924.4},
      {id:"ב3-6+",  label:"בכיר מוביל ב3 - ותק 6+",    salary:33159.07, mealAllowance:940.5},
    ]
  },
  "569": {
    name: "סגל בכיר שאינו מוביל",
    shortName: "בכיר לא מוביל",
    number: "569",
    noTravel: true,
    color: "from-slate-600 to-gray-700",
    btnActive: "bg-gradient-to-br from-slate-600 to-gray-700",
    accent: "#475569",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"ג1-0",  label:"בכיר שאינו מוביל ג1 - ותק 0",  salary:29728.81, mealAllowance:843.0},
      {id:"ג1-1",  label:"בכיר שאינו מוביל ג1 - ותק 1",  salary:30300.53, mealAllowance:859.1},
      {id:"ג1-2",  label:"בכיר שאינו מוביל ג1 - ותק 2",  salary:30872.24, mealAllowance:875.2},
      {id:"ג1-3",  label:"בכיר שאינו מוביל ג1 - ותק 3",  salary:31443.94, mealAllowance:891.2},
      {id:"ג1-4",  label:"בכיר שאינו מוביל ג1 - ותק 4",  salary:32015.65, mealAllowance:908.4},
      {id:"ג1-5",  label:"בכיר שאינו מוביל ג1 - ותק 5",  salary:32587.36, mealAllowance:924.4},
      {id:"ג1-6+", label:"בכיר שאינו מוביל ג1 - ותק 6+", salary:33159.07, mealAllowance:940.5},
      {id:"ג2-0",  label:"בכיר שאינו מוביל ג2 - ותק 0",  salary:25155.16, mealAllowance:713.4},
      {id:"ג2-1",  label:"בכיר שאינו מוביל ג2 - ותק 1",  salary:25726.87, mealAllowance:729.5},
      {id:"ג2-2",  label:"בכיר שאינו מוביל ג2 - ותק 2",  salary:26298.57, mealAllowance:745.6},
      {id:"ג2-3",  label:"בכיר שאינו מוביל ג2 - ותק 3",  salary:26870.28, mealAllowance:761.6},
      {id:"ג2-4",  label:"בכיר שאינו מוביל ג2 - ותק 4",  salary:27442.00, mealAllowance:777.7},
      {id:"ג2-5",  label:"בכיר שאינו מוביל ג2 - ותק 5",  salary:28013.70, mealAllowance:793.8},
      {id:"ג2-6",  label:"בכיר שאינו מוביל ג2 - ותק 6",  salary:28585.41, mealAllowance:809.8},
      {id:"ג2-7",  label:"בכיר שאינו מוביל ג2 - ותק 7",  salary:29157.12, mealAllowance:825.9},
      {id:"ג2-8+", label:"בכיר שאינו מוביל ג2 - ותק 8+", salary:29728.81, mealAllowance:843.0},
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
      {id:"409", label:"צוער",         salary:7108.33},
      {id:"410", label:"צוער ותיק",    salary:7776.58},
      {id:"411", label:"צוע.א1",       salary:7590.20},
      {id:"412", label:"צוע.א2",       salary:8072.05},
      {id:"413", label:"צוע.ב1 ותיק", salary:8258.43},
      {id:"414", label:"צוע.ב2 ותיק", salary:8740.28},
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
      {id:"11",   label:"דרגה 11",           salary:10056.36},
      {id:"12",   label:"דרגה 12",           salary:10647.92},
      {id:"13",   label:"דרגה 13",           salary:11239.46},
      {id:"14",   label:"דרגה 14",           salary:11831.01},
      {id:"15",   label:"דרגה 15",           salary:12422.56},
      {id:"16",   label:"דרגה 16",           salary:13014.11},
      {id:"17",   label:"דרגה 17",           salary:13605.67},
      {id:"18",   label:"דרגה 18",           salary:14197.23},
      {id:"205",  label:"מנהל משימות",       salary:15380.32},
      {id:"1",    label:"דרגה 1 (210)",      salary:16749.28},
      {id:"2",    label:"דרגה 2 (220)",      salary:18089.21},
      {id:"3",    label:"דרגה 3 (230)",      salary:19429.15},
      {id:"240א", label:"דרגה א (240)",      salary:20564.61},
      {id:"250ב", label:"דרגה ב (250)",      salary:22033.52},
      {id:"260ג", label:"דרגה ג (260)",      salary:23502.42},
      {id:"270ד", label:"דרגה ד (270)",      salary:24971.32},
      {id:"280ה", label:"דרגה ה (280)",      salary:26440.22},
      {id:"290ו", label:"דרגה ו (290)",      salary:27909.13},
      {id:"300ז", label:"דרגה ז (300)",      salary:29378.03},
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
      {id:"300", label:"דרגה ג",   salary:7996.70},
      {id:"301", label:"דרגה ג1",  salary:8574.92},
      {id:"302", label:"דרגה ג2",  salary:9153.15},
      {id:"312", label:"דרגה א",   salary:10795.45},
      {id:"315", label:"דרגה א3",  salary:11381.20},
      {id:"318", label:"דרגה א6",  salary:11966.94},
      {id:"322", label:"דרגה א10", salary:11891.46},
      {id:"325", label:"דרגה א13", salary:12477.21},
      {id:"328", label:"דרגה א16", salary:13062.95},
      {id:"332", label:"דרגה א20", salary:13314.12},
      {id:"335", label:"דרגה א23", salary:13899.85},
      {id:"338", label:"דרגה א26", salary:14485.58},
      {id:"342", label:"דרגה א30", salary:15159.41},
      {id:"345", label:"דרגה א33", salary:15745.14},
      {id:"348", label:"דרגה א36", salary:16330.89},
      {id:"352", label:"דרגה א40", salary:17298.85},
      {id:"355", label:"דרגה א43", salary:17884.59},
      {id:"358", label:"דרגה א46", salary:18470.33},
      {id:"401", label:"דרגה א50", salary:19893.67},
      {id:"403", label:"דרגה א53", salary:20567.28},
      {id:"405", label:"דרגה א56", salary:21240.88},
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
      {id:"210", label:"דרגה 1",  salary:18948.77},
      {id:"220", label:"דרגה 2",  salary:20464.67},
      {id:"230", label:"דרגה 3",  salary:21980.58},
      {id:"240", label:"דרגה א",  salary:23265.15},
      {id:"250", label:"דרגה ב",  salary:24926.95},
      {id:"260", label:"דרגה ג",  salary:26588.73},
      {id:"270", label:"דרגה ד",  salary:28250.52},
      {id:"280", label:"דרגה ה",  salary:29912.33},
      {id:"290", label:"דרגה ו",  salary:31574.12},
      {id:"300", label:"דרגה ז",  salary:33235.92},
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
      {id:"100", label:"דרגה 37",   salary:7422.50},
      {id:"101", label:"דרגה 37א",  salary:8012.77},
      {id:"102", label:"דרגה 37ב",  salary:8603.07},
      {id:"110", label:"דרגה 38",   salary:7718.22},
      {id:"111", label:"דרגה 38א",  salary:8308.51},
      {id:"112", label:"דרגה 38ב",  salary:8898.78},
      {id:"120", label:"דרגה 39",   salary:8294.49},
      {id:"121", label:"דרגה 39א",  salary:8944.09},
      {id:"122", label:"דרגה 39ב",  salary:9593.68},
      {id:"130", label:"דרגה 40",   salary:9189.36},
      {id:"131", label:"דרגה 40א",  salary:9838.81},
      {id:"132", label:"דרגה 40ב",  salary:10488.42},
      {id:"140", label:"דרגה 41",   salary:10235.19},
      {id:"141", label:"דרגה 41א",  salary:10884.79},
      {id:"142", label:"דרגה 41ב",  salary:11534.39},
      {id:"150", label:"דרגה 42",   salary:11833.22},
      {id:"151", label:"דרגה 42א",  salary:12482.83},
      {id:"152", label:"דרגה 42ב",  salary:13132.44},
      {id:"160", label:"דרגה 43",   salary:13880.62},
      {id:"161", label:"דרגה 43א",  salary:14530.07},
      {id:"162", label:"דרגה 43ב",  salary:15179.68},
      {id:"170", label:"דרגה 44",   salary:15685.09},
      {id:"171", label:"דרגה 44א",  salary:16418.99},
      {id:"172", label:"דרגה 44ב",  salary:17153.04},
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
      {id:"80",  label:"דרגה א",   salary:8071.85},
      {id:"82",  label:"דרגה ב",   salary:8818.13},
      {id:"90",  label:"דרגה ג",   salary:8798.33},
      {id:"92",  label:"דרגה ד",   salary:9611.76},
      {id:"95",  label:"דרגה ה",   salary:9374.74},
      {id:"96",  label:"דרגה ו",   salary:9779.47},
      {id:"97",  label:"דרגה ז",   salary:11273.13},
      {id:"100", label:"דרגה ח",   salary:10265.62},
      {id:"102", label:"דרגה ט",   salary:11214.83},
      {id:"104", label:"דרגה י",   salary:12164.04},
      {id:"110", label:"דרגה יא",  salary:11346.56},
      {id:"112", label:"דרגה יב",  salary:12295.79},
      {id:"114", label:"דרגה יג",  salary:13244.99},
      {id:"120", label:"דרגה יד",  salary:12610.16},
      {id:"122", label:"דרגה טו",  salary:13559.33},
      {id:"124", label:"דרגה טז",  salary:14508.57},
      {id:"130", label:"דרגה יז",  salary:14434.16},
      {id:"132", label:"דרגה יח",  salary:15383.36},
      {id:"134", label:"דרגה יט",  salary:16332.59},
      {id:"140", label:"דרגה כ",   salary:16887.46},
      {id:"142", label:"דרגה כא",  salary:17836.70},
      {id:"144", label:"דרגה כב",  salary:18785.89},
      {id:"146", label:"דרגה כג",  salary:19815.73},
      {id:"265", label:"דרגה כד",  salary:26328.59},
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
      {id:"80",  label:"דרגה 36",  salary:6315.25},
      {id:"82",  label:"דרגה 36א", salary:6914.31},
      {id:"84",  label:"דרגה 36ב", salary:7513.38},
      {id:"90",  label:"דרגה 37",  salary:6464.66},
      {id:"92",  label:"דרגה 37א", salary:7063.25},
      {id:"94",  label:"דרגה 37ב", salary:7661.81},
      {id:"95",  label:"דרגה 38",  salary:6614.30},
      {id:"96",  label:"דרגה 38א", salary:7212.88},
      {id:"97",  label:"דרגה 38ב", salary:7811.45},
      {id:"100", label:"דרגה 39",  salary:7063.06},
      {id:"102", label:"דרגה 39א", salary:7721.75},
      {id:"104", label:"דרגה 39ב", salary:8380.47},
      {id:"110", label:"דרגה 40",  salary:7805.78},
      {id:"112", label:"דרגה 40א", salary:8464.45},
      {id:"114", label:"דרגה 40ב", salary:9123.18},
      {id:"120", label:"דרגה 41",  salary:8673.92},
      {id:"122", label:"דרגה 41א", salary:9332.63},
      {id:"124", label:"דרגה 41ב", salary:9991.37},
      {id:"130", label:"דרגה 42",  salary:10016.67},
      {id:"132", label:"דרגה 42א", salary:10675.36},
      {id:"134", label:"דרגה 42ב", salary:11334.08},
      {id:"140", label:"דרגה 43",  salary:11719.15},
      {id:"142", label:"דרגה 43א", salary:12377.88},
      {id:"144", label:"דרגה 43ב", salary:13036.57},
      {id:"150", label:"דרגה 44",  salary:13242.66},
      {id:"152", label:"דרגה 44א", salary:13987.00},
      {id:"154", label:"דרגה 44ב", salary:14731.32},
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
      {id:"100", label:"דרגה 39",       salary:11088.69},
      {id:"102", label:"דרגה 39א",      salary:11719.10},
      {id:"104", label:"דרגה 39ב",      salary:12349.51},
      {id:"110", label:"דרגה 40",       salary:12950.02},
      {id:"112", label:"דרגה 40א",      salary:13580.41},
      {id:"114", label:"דרגה 40ב",      salary:14210.79},
      {id:"120", label:"דרגה 41",       salary:15141.06},
      {id:"122", label:"דרגה 41א",      salary:15771.44},
      {id:"124", label:"דרגה 41ב",      salary:16401.84},
      {id:"130", label:"דרגה 42",       salary:16782.04},
      {id:"132", label:"דרגה 42א",      salary:17412.42},
      {id:"134", label:"דרגה 42ב",      salary:18042.84},
      {id:"140", label:"דרגה 43",       salary:18601.99},
      {id:"142", label:"דרגה 43א",      salary:20268.00},
      {id:"144", label:"דרגה 43ב",      salary:20898.41},
      {id:"150", label:"דרגה 44",       salary:21020.26},
      {id:"152", label:"דרגה 44א",      salary:22902.84},
      {id:"154", label:"דרגה 44ב",      salary:23615.21},
      {id:"200", label:"משופר 1",       salary:19788.74},
      {id:"202", label:"משופר 1א",      salary:20976.06},
      {id:"204", label:"משופר 1ב",      salary:22163.39},
      {id:"210", label:"משופר 2",       salary:22427.23},
      {id:"212", label:"משופר 2א",      salary:23746.47},
      {id:"214", label:"משופר 2ב",      salary:25197.64},
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
      {id:"b5-0",  label:"ב ללא גמול (ב5)",   salary:19565.27,  hourlyRate:48.83},
      {id:"b5-a",  label:"ב גמול א' (ב5)",    salary:20143.49,  hourlyRate:51.97},
      {id:"b5-b",  label:"ב גמול ב' (ב5)",    salary:20721.73,  hourlyRate:55.12},
      {id:"b1-0",  label:"ב1 ללא גמול (ב2)",  salary:20326.94,  hourlyRate:52.97},
      {id:"b1-a",  label:"ב1 גמול א' (ב3)",   salary:20912.69,  hourlyRate:56.16},
      {id:"b1-b",  label:"ב1 גמול ב' (ב6)",   salary:21498.44,  hourlyRate:59.35},
      {id:"b2-0",  label:"ב2 ללא גמול (ב20)", salary:21104.38,  hourlyRate:57.20},
      {id:"b2-a",  label:"ב2 גמול א' (ב23)",  salary:21690.15,  hourlyRate:60.39},
      {id:"b2-b",  label:"ב2 גמול ב' (ב26)",  salary:22275.88,  hourlyRate:63.58},
      {id:"a-0",   label:"א ללא גמול (א)",    salary:11474.90,  hourlyRate:62.47},
      {id:"a-a",   label:"א גמול א' (א3)",    salary:12060.65,  hourlyRate:65.66},
      {id:"a-b",   label:"א גמול ב' (א6)",    salary:12646.39,  hourlyRate:68.85},
      {id:"a1-0",  label:"א1 ללא גמול (א10)", salary:12639.90,  hourlyRate:68.81},
      {id:"a1-a",  label:"א1 גמול א' (א13)",  salary:13225.65,  hourlyRate:72.00},
      {id:"a1-b",  label:"א1 גמול ב' (א16)",  salary:13811.39,  hourlyRate:75.19},
      {id:"a2-0",  label:"א2 ללא גמול (א20)", salary:14152.10,  hourlyRate:77.05},
      {id:"a2-a",  label:"א2 גמול א' (א23)",  salary:14737.84,  hourlyRate:80.24},
      {id:"a2-b",  label:"א2 גמול ב' (א26)",  salary:15323.58,  hourlyRate:83.43},
      {id:"a3-0",  label:"א3 ללא גמול (א30)", salary:16113.53,  hourlyRate:87.73},
      {id:"a3-a",  label:"א3 גמול א' (א33)",  salary:16699.27,  hourlyRate:90.91},
      {id:"a3-b",  label:"א3 גמול ב' (א36)",  salary:17285.01,  hourlyRate:94.10},
      {id:"a4-0",  label:"א4 ללא גמול (א40)", salary:18387.63,  hourlyRate:100.11},
      {id:"a4-a",  label:"א4 גמול א' (א43)",  salary:18973.36,  hourlyRate:103.30},
      {id:"a4-b",  label:"א4 גמול ב' (א46)",  salary:19559.10,  hourlyRate:106.48},
      {id:"a5-0",  label:"א5 ללא גמול (א50)", salary:21145.77,  hourlyRate:115.12},
      {id:"a5-a",  label:"א5 גמול א' (א53)",  salary:21819.37,  hourlyRate:118.79},
      {id:"a5-b",  label:"א5 גמול ב' (א56)",  salary:22492.98,  hourlyRate:122.46},
    ]
  },

  // ── בכירים ──
  // בכירים ותיקים (557)
  "557": {
    name: "בכירים ותיקים (צמודי יוקר)",
    shortName: "בכירים ותיקים",
    number: "557",
    noTravel: true,
    color: "from-gray-700 to-zinc-800",
    btnActive: "bg-gradient-to-br from-gray-700 to-zinc-800",
    accent: "#374151",
    pensionEmployee: 0.07, pensionEmployer: 0.135,
    studyFundEmployee: 0.025, studyFundEmployer: 0.075,
    grades: [
      {id:"340", label:"רמה 340",        salary:32935.86, mealAllowance:1058},
      {id:"350", label:"רמה 350",        salary:34992.64, mealAllowance:1058},
      {id:"360", label:"רמה 360",        salary:37051.70, mealAllowance:1058},
      {id:"370", label:"רמה 370",        salary:41788.22, mealAllowance:1058},
      {id:"450", label:"רמה 450 (מנהל מינהל האדמה)", salary:48354.89, mealAllowance:1058},
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
      {id:"145", label:"דרגה 7 (145)", salary:32935.85},
      {id:"150", label:"דרגה 8 (150)", salary:34993.45},
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
      {id:"80",  label:"דרגה 18",  salary:7662.72},
      {id:"95",  label:"דרגה 38",  salary:9195.26},
      {id:"100", label:"דרגה 39",  salary:10727.81},
      {id:"110", label:"דרגה 40",  salary:12260.34},
      {id:"120", label:"דרגה 41",  salary:13792.88},
      {id:"130", label:"דרגה 42",  salary:15325.42},
      {id:"140", label:"דרגה 43",  salary:16857.96},
      {id:"210", label:"דרגה 1",   salary:18302.66},
      {id:"220", label:"דרגה 2",   salary:19766.87},
      {id:"230", label:"דרגה 3",   salary:21231.09},
      {id:"240", label:"דרגה א",   salary:22471.84},
      {id:"250", label:"דרגה ב",   salary:24076.99},
      {id:"260", label:"דרגה ג",   salary:25682.09},
      {id:"270", label:"דרגה ד",   salary:27287.24},
      {id:"280", label:"דרגה ה",   salary:28892.38},
      {id:"290", label:"דרגה ו",   salary:30497.50},
      {id:"300", label:"דרגה ז",   salary:32102.64},
      {id:"310", label:"דרגה ח",   salary:33242.37},
      {id:"320", label:"דרגה ט",   salary:34825.36},
      {id:"330", label:"דרגה י",   salary:36408.33},
      {id:"340", label:"דרגה יא",  salary:38645.29},
      {id:"350", label:"דרגה יב",  salary:40131.64},
      {id:"360", label:"דרגה יג",  salary:41157.23},
      {id:"370", label:"דרגה יד",  salary:42740.18},
      {id:"380", label:"דרגה טו",  salary:44323.17},
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
      {id:"100", label:"דרגה 37",  salary:7422.50},
      {id:"101", label:"דרגה 37א", salary:8012.77},
      {id:"102", label:"דרגה 37ב", salary:8603.07},
      {id:"110", label:"דרגה 38",  salary:7718.22},
      {id:"111", label:"דרגה 38א", salary:8308.51},
      {id:"112", label:"דרגה 38ב", salary:8898.78},
      {id:"120", label:"דרגה 39",  salary:8294.49},
      {id:"121", label:"דרגה 39א", salary:8944.09},
      {id:"122", label:"דרגה 39ב", salary:9593.68},
      {id:"130", label:"דרגה 40",  salary:9189.36},
      {id:"131", label:"דרגה 40א", salary:9838.81},
      {id:"132", label:"דרגה 40ב", salary:10488.42},
      {id:"140", label:"דרגה 41",  salary:10235.19},
      {id:"141", label:"דרגה 41א", salary:10884.79},
      {id:"142", label:"דרגה 41ב", salary:11534.39},
      {id:"150", label:"דרגה 42",  salary:11833.22},
      {id:"151", label:"דרגה 42א", salary:12482.83},
      {id:"152", label:"דרגה 42ב", salary:13132.44},
      {id:"160", label:"דרגה 43",  salary:13880.62},
      {id:"161", label:"דרגה 43א", salary:14530.07},
      {id:"162", label:"דרגה 43ב", salary:15179.68},
      {id:"170", label:"דרגה 44",  salary:15685.09},
      {id:"171", label:"דרגה 44א", salary:16418.99},
      {id:"172", label:"דרגה 44ב", salary:17153.04},
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
      {id:"70",  label:"דרגה א",   salary:7030.34},
      {id:"72",  label:"דרגה ב",   salary:7257.83},
      {id:"80",  label:"דרגה ג",   salary:8071.85},
      {id:"82",  label:"דרגה ד",   salary:8818.13},
      {id:"90",  label:"דרגה ה",   salary:8798.33},
      {id:"92",  label:"דרגה ו",   salary:9611.76},
      {id:"95",  label:"דרגה ז",   salary:9374.74},
      {id:"96",  label:"דרגה ח",   salary:9779.47},
      {id:"97",  label:"דרגה ט",   salary:11273.13},
      {id:"100", label:"דרגה י",   salary:10265.62},
      {id:"102", label:"דרגה יא",  salary:11214.83},
      {id:"104", label:"דרגה יב",  salary:12164.04},
      {id:"110", label:"דרגה יג",  salary:11346.56},
      {id:"112", label:"דרגה יד",  salary:12295.79},
      {id:"114", label:"דרגה טו",  salary:13244.99},
      {id:"120", label:"דרגה טז",  salary:12610.16},
      {id:"122", label:"דרגה יז",  salary:13559.33},
      {id:"124", label:"דרגה יח",  salary:14508.57},
      {id:"130", label:"דרגה יט",  salary:14434.16},
      {id:"132", label:"דרגה כ",   salary:15383.36},
      {id:"134", label:"דרגה כא",  salary:16332.59},
      {id:"140", label:"דרגה כב",  salary:16887.46},
      {id:"142", label:"דרגה כג",  salary:17836.70},
      {id:"144", label:"דרגה כד",  salary:18785.89},
      {id:"146", label:"דרגה כה",  salary:17901.98},
      {id:"148", label:"דרגה כו",  salary:19766.86},
      {id:"149", label:"דרגה כז",  salary:21231.09},
      {id:"250", label:"דרגה כח",  salary:22499.88},
      {id:"251", label:"דרגה כט",  salary:23185.04},
      {id:"260", label:"דרגה ל",   salary:23999.89},
      {id:"265", label:"דרגה לא",  salary:24346.67},
      {id:"270", label:"דרגה לב",  salary:25504.17},
      {id:"280", label:"דרגה לג",  salary:26622.24},
      {id:"290", label:"דרגה לד",  salary:27805.46},
      {id:"300", label:"דרגה לה",  salary:28988.66},
      {id:"310", label:"דרגה לו",  salary:30171.88},
      {id:"145", label:"דרגה לז",  salary:32935.85},
      {id:"150", label:"דרגה לח",  salary:34993.45},
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
      {id:"409", label:"צוער",         salary:6283.23},
      {id:"410", label:"צוער ותיק",    salary:6873.90},
      {id:"411", label:"צוע.א1",       salary:6709.15},
      {id:"412", label:"צוע.א2",       salary:7135.07},
      {id:"413", label:"צוע.ב1 ותיק", salary:7299.82},
      {id:"414", label:"צוע.ב2 ותיק", salary:7725.75},
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
      {id:"101", label:"ראש ענף 1",             salary:11376.96},
      {id:"102", label:"ראש ענף 2",             salary:12046.20},
      {id:"103", label:"ראש ענף 3",             salary:12715.42},
      {id:"111", label:"מרכז בכיר 1",           salary:12715.42},
      {id:"112", label:"מרכז בכיר 2",           salary:14053.88},
      {id:"113", label:"מרכז בכיר 3",           salary:15392.35},
      {id:"121", label:"מנהל תחום תיאום 1",    salary:14053.88},
      {id:"122", label:"מנהל תחום תיאום 2",    salary:15392.35},
      {id:"123", label:"מנהל תחום תיאום 3",    salary:17400.05},
      {id:"131", label:"מנהל תחום מעקב 1",     salary:14053.88},
      {id:"132", label:"מנהל תחום מעקב 2",     salary:15392.35},
      {id:"133", label:"מנהל תחום מעקב 3",     salary:17400.05},
      {id:"134", label:"מנהל תחום מעקב 4",     salary:20746.21},
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
      {id:"10", label:"צוער",                           salary:7224.44},
      {id:"20", label:"חוקר א׳",                        salary:7881.21},
      {id:"21", label:"חוקר א׳ + גמול השתלמות א׳",     salary:8406.63},
      {id:"22", label:"חוקר א׳ + גמול השתלמות א׳+ב׳",  salary:8932.04},
      {id:"30", label:"חוקר ב׳",                        salary:8800.69},
      {id:"31", label:"חוקר ב׳ + גמול א׳",             salary:9326.10},
      {id:"32", label:"חוקר ב׳ + גמול א׳+ב׳",          salary:9851.50},
      {id:"40", label:"חוקר ג׳",                        salary:9588.80},
      {id:"41", label:"חוקר ג׳ + גמול א׳",             salary:10114.21},
      {id:"42", label:"חוקר ג׳ + גמול א׳+ב׳",          salary:10639.63},
      {id:"50", label:"חוקר בכיר א׳",                  salary:10508.27},
      {id:"51", label:"חוקר בכיר א׳ + גמול א׳",       salary:11033.69},
      {id:"52", label:"חוקר בכיר א׳ + גמול א׳+ב׳",    salary:11559.11},
      {id:"60", label:"חוקר בכיר ב׳",                  salary:11427.75},
      {id:"61", label:"חוקר בכיר ב׳ + גמול א׳",       salary:11953.17},
      {id:"62", label:"חוקר בכיר ב׳ + גמול א׳+ב׳",    salary:12478.59},
      {id:"70", label:"חוקר בכיר ג׳",                  salary:12347.22},
      {id:"71", label:"חוקר בכיר ג׳ + גמול א׳",       salary:12872.65},
      {id:"72", label:"חוקר בכיר ג׳ + גמול א׳+ב׳",    salary:13398.04},
      {id:"75", label:"ראש שלוחה",                      salary:13147.62},
      {id:"76", label:"ראש שלוחה + גמול א׳",           salary:13673.03},
      {id:"77", label:"ראש שלוחה + גמול א׳+ב׳",        salary:14198.44},
      {id:"80", label:"סגן ראש צוות",                   salary:13266.70},
      {id:"90", label:"ראש צוות",                       salary:14580.24},
      {id:"91", label:"ראש צוות + גמול א׳",            salary:15171.34},
      {id:"92", label:"ראש צוות + גמול א׳+ב׳",         salary:15762.41},
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
      {id:"10",  label:"טייסים 1",   salary:22926.41},
      {id:"11",  label:"טייסים 1א",  salary:23579.68},
      {id:"12",  label:"טייסים 1ב",  salary:24234.33},
      {id:"20",  label:"טייסים 2",   salary:20186.52},
      {id:"21",  label:"טייסים 2א",  salary:20840.17},
      {id:"22",  label:"טייסים 2ב",  salary:21494.84},
      {id:"30",  label:"טייסים 3",   salary:18024.58},
      {id:"31",  label:"טייסים 3א",  salary:18677.45},
      {id:"32",  label:"טייסים 3ב",  salary:19332.09},
      {id:"40",  label:"טייסים 4",   salary:16581.61},
      {id:"41",  label:"טייסים 4א",  salary:17235.64},
      {id:"42",  label:"טייסים 4ב",  salary:17890.29},
      {id:"50",  label:"טייסים 5",   salary:15139.89},
      {id:"51",  label:"טייסים 5א",  salary:15793.80},
      {id:"52",  label:"טייסים 5ב",  salary:16448.45},
      {id:"60",  label:"טייסים 6",   salary:13698.18},
      {id:"61",  label:"טייסים 6א",  salary:14351.98},
      {id:"62",  label:"טייסים 6ב",  salary:15006.66},
      {id:"70",  label:"טייסים 7",   salary:12976.69},
      {id:"71",  label:"טייסים 7א",  salary:13631.08},
      {id:"72",  label:"טייסים 7ב",  salary:14285.76},
      {id:"80",  label:"מהנדסים 8",  salary:14885.55},
      {id:"81",  label:"מהנדסים 8א", salary:15636.22},
      {id:"82",  label:"מהנדסים 8ב", salary:16387.18},
      {id:"90",  label:"מהנדסים 9",  salary:13645.29},
      {id:"91",  label:"מהנדסים 9א", salary:14395.78},
      {id:"92",  label:"מהנדסים 9ב", salary:15146.75},
      {id:"100", label:"מהנדסים 10", salary:12405.04},
      {id:"110", label:"מהנדסים 11", salary:11164.78},
      {id:"120", label:"מהנדסים 12", salary:9924.55},
      {id:"130", label:"מהנדסים 13", salary:9097.29},
      {id:"140", label:"מהנדסים 14", salary:8270.02},
      {id:"150", label:"מהנדסים 15", salary:7442.77},
      {id:"160", label:"הנדסאים 16", salary:9169.06},
      {id:"170", label:"הנדסאים 17", salary:8252.40},
      {id:"180", label:"הנדסאים 18", salary:7335.75},
      {id:"190", label:"הנדסאים 19", salary:6417.83},
      {id:"210", label:"מפקח מובילים א",  salary:28960.20},
      {id:"220", label:"מפקח מובילים ב",  salary:30219.35},
      {id:"230", label:"מפקח מובילים ג",  salary:31478.48},
      {id:"240", label:"מפקח מובילים ד",  salary:32737.64},
      {id:"250", label:"מפקח מובילים ה",  salary:33996.77},
      {id:"260", label:"מפקח ראשי ו",     salary:35255.90},
      {id:"270", label:"מפקח ראשי ז",     salary:36515.05},
      {id:"280", label:"מפקח ראשי ח",     salary:37774.19},
      {id:"290", label:"מפקח ראשי ט",     salary:39033.33},
      {id:"300", label:"מפקח ראשי י",     salary:40292.46},
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
      {id:"10", label:"מאבטח מתקן",        salary:6731.28},
      {id:"20", label:"קורס אחיד",          salary:7277.92},
      {id:"30", label:"קב\"ט",              salary:8874.08},
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
      {id:"810", label:"מאבטח 1",           salary:6060.11},
      {id:"820", label:"מאבטח 2",           salary:6174.76},
      {id:"830", label:"מאבטח 3",           salary:6618.82},
      {id:"840", label:"מדריך ירי/קמ\"ג 1", salary:7111.09},
      {id:"850", label:"מדריך ירי/קמ\"ג 2", salary:7560.73},
      {id:"815", label:"מאבטח 1 ב.מ.",      salary:6317.37},
      {id:"825", label:"מאבטח 2 ב.מ.",      salary:6436.05},
      {id:"835", label:"מאבטח 3 ב.מ.",      salary:6899.38},
      {id:"860", label:"חמוש 1",             salary:7308.35},
      {id:"870", label:"חמוש 2",             salary:7430.15},
      {id:"880", label:"חמוש 3",             salary:7978.27},
      {id:"890", label:"לא חמוש 1",          salary:6800.81},
      {id:"900", label:"לא חמוש 2",          salary:6942.92},
      {id:"910", label:"לא חמוש 3",          salary:7430.15},
      {id:"920", label:"מדריך ירי 1",        salary:8526.39},
      {id:"930", label:"מדריך ירי 2",        salary:9742.23},
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
      {id:"130", label:"עוזר ראש מדור 1", salary:10073.11},
      {id:"140", label:"עוזר ראש מדור 2", salary:11332.26},
      {id:"150", label:"עוזר ראש מדור 3", salary:12591.40},
      {id:"160", label:"עוזר ראש מדור 4", salary:13850.54},
      {id:"170", label:"ראש מדור 1",      salary:15109.68},
      {id:"180", label:"ראש מדור 2",      salary:16368.80},
      {id:"190", label:"ראש מדור 3",      salary:17627.95},
      {id:"200", label:"ראש ענף 1",       salary:18887.09},
      {id:"210", label:"ראש ענף 2",       salary:20146.24},
      {id:"220", label:"ראש ענף 3",       salary:21405.37},
      {id:"230", label:"ראש מחלקה 1",     salary:22664.51},
      {id:"240", label:"ראש מחלקה 2",     salary:23923.65},
      {id:"250", label:"ראש מחלקה 3",     salary:25182.79},
      {id:"260", label:"ראש חטיבה 1",     salary:28960.20},
      {id:"270", label:"ראש חטיבה 2",     salary:30219.35},
      {id:"280", label:"ראש חטיבה 3",     salary:31824.74},
      {id:"290", label:"ראש אגף",         salary:33697.08},
      {id:"300", label:"סגן ראש המל\"ל",  salary:40797.38},
      {id:"310", label:"סגן ראש המל\"ל חדש", salary:41783.66},
      {id:"320", label:"משנה לראש המל\"ל", salary:42895.02},
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
      {id:"1",  label:"דרגה 1",   salary:6105.41},
      {id:"2",  label:"דרגה 2",   salary:6251.43},
      {id:"3",  label:"דרגה 3",   salary:6399.70},
      {id:"4",  label:"דרגה 4",   salary:6547.61},
      {id:"5",  label:"דרגה 5",   salary:6991.86},
      {id:"6",  label:"דרגה 6",   salary:7727.07},
      {id:"10", label:"דרגה 10",  salary:6613.75},
      {id:"11", label:"דרגה 11",  salary:7062.48},
      {id:"12", label:"דרגה 12",  salary:7805.13},
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
      {id:"36",   label:"דרגה 36",             salary:8482.66},
      {id:"36א",  label:"36 תוספת למידה 1",    salary:8732.66},
      {id:"36ב",  label:"36 תוספת למידה 2",    salary:8982.66},
      {id:"37",   label:"דרגה 37",             salary:9095.59},
      {id:"37א",  label:"37 תוספת למידה 1",    salary:9345.59},
      {id:"37ב",  label:"37 תוספת למידה 2",    salary:9595.59},
      {id:"38",   label:"דרגה 38",             salary:10079.41},
      {id:"38א",  label:"38 תוספת למידה 1",    salary:10329.41},
      {id:"38ב",  label:"38 תוספת למידה 2",    salary:10579.41},
      {id:"39",   label:"דרגה 39",             salary:10912.67},
      {id:"39א",  label:"39 תוספת למידה 1",    salary:11162.67},
      {id:"39ב",  label:"39 תוספת למידה 2",    salary:11412.67},
      {id:"40",   label:"דרגה 40",             salary:12606.59},
      {id:"40א",  label:"40 תוספת למידה 1",    salary:12856.59},
      {id:"40ב",  label:"40 תוספת למידה 2",    salary:13106.59},
      {id:"41",   label:"דרגה 41",             salary:14600.60},
      {id:"41א",  label:"41 תוספת למידה 1",    salary:14850.60},
      {id:"41ב",  label:"41 תוספת למידה 2",    salary:15100.60},
      {id:"42",   label:"דרגה 42",             salary:16094.00},
      {id:"42א",  label:"42 תוספת למידה 1",    salary:16344.00},
      {id:"42ב",  label:"42 תוספת למידה 2",    salary:16594.00},
      {id:"43",   label:"דרגה 43",             salary:17750.30},
      {id:"43א",  label:"43 תוספת למידה 1",    salary:18000.30},
      {id:"43ב",  label:"43 תוספת למידה 2",    salary:18250.30},
      {id:"44",   label:"דרגה 44",             salary:19951.08},
      {id:"44א",  label:"44 תוספת למידה 1",    salary:20201.08},
      {id:"44ב",  label:"44 תוספת למידה 2",    salary:20451.08},
    ]
  },

  // ── חוזים נוספים מהמאגר המלא ──

  "514": { name:"כלכלנים נבחרים (514)", shortName:"כלכלנים 514", number:"514",
    color:"from-blue-500 to-sky-600", btnActive:"bg-gradient-to-br from-blue-500 to-sky-600", accent:"#0284c7",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"דרגה 39",salary:11416.93},{id:"102",label:"דרגה 39א",salary:12047.33},{id:"104",label:"דרגה 39ב",salary:12677.75},
      {id:"110",label:"דרגה 40",salary:13333.34},{id:"112",label:"דרגה 40א",salary:13963.73},{id:"114",label:"דרגה 40ב",salary:14594.12},
      {id:"120",label:"דרגה 41",salary:15589.24},{id:"122",label:"דרגה 41א",salary:16219.61},{id:"124",label:"דרגה 41ב",salary:16850.03},
      {id:"130",label:"דרגה 42",salary:17278.77},{id:"132",label:"דרגה 42א",salary:17909.16},{id:"134",label:"דרגה 42ב",salary:18539.58},
      {id:"140",label:"דרגה 43",salary:19152.61},{id:"142",label:"דרגה 43א",salary:20818.62},{id:"144",label:"דרגה 43ב",salary:21449.03},
      {id:"150",label:"דרגה 44",salary:21642.46},{id:"152",label:"דרגה 44א",salary:23525.04},{id:"154",label:"דרגה 44ב",salary:24237.41},
    ]},

  "964": { name:"מומחים (964)", shortName:"מומחים 964", number:"964",
    color:"from-rose-500 to-red-600", btnActive:"bg-gradient-to-br from-rose-500 to-red-600", accent:"#e11d48",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"130",label:"דרגה 11",salary:11713.71},{id:"140",label:"דרגה 12",salary:12402.76},{id:"150",label:"דרגה 13",salary:13091.79},
      {id:"160",label:"דרגה 14",salary:13780.84},{id:"170",label:"דרגה 15",salary:14469.88},{id:"180",label:"דרגה 16",salary:15158.92},
      {id:"190",label:"דרגה 17",salary:15847.97},{id:"200",label:"דרגה 18",salary:16537.02},{id:"205",label:"מנהל משימות",salary:17915.09},
      {id:"210",label:"דרגה 1",salary:19509.66},{id:"220",label:"דרגה 2",salary:21070.42},{id:"230",label:"דרגה 3",salary:22631.20},
      {id:"240",label:"דרגה א",salary:23953.78},{id:"250",label:"דרגה ב",salary:25664.79},{id:"260",label:"דרגה ג",salary:27375.76},
      {id:"270",label:"דרגה ד",salary:29086.74},{id:"280",label:"דרגה ה",salary:30797.74},{id:"290",label:"דרגה ו",salary:32508.71},
      {id:"300",label:"דרגה ז",salary:34219.70},{id:"350",label:"דרגה 350 (חדשה)",salary:45074.63},{id:"600",label:"דרגה 600 (חדשה)",salary:70354.28},
    ]},

  "48": { name:"פרה-רפואיים (48)", shortName:"פרה-רפואי", number:"48",
    color:"from-red-500 to-pink-600", btnActive:"bg-gradient-to-br from-red-500 to-pink-600", accent:"#ef4444",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"11-0",label:"דרגה 1 (0-9 שנ')",salary:6687.20},{id:"21-0",label:"דרגה 2 (0-9 שנ')",salary:7219.01},{id:"31-0",label:"דרגה 3 (0-9 שנ')",salary:7550.25},
      {id:"41-0",label:"דרגה 4 (0-9 שנ')",salary:7898.20},{id:"51-0",label:"דרגה 5 (0-9 שנ')",salary:8265.91},{id:"61-0",label:"דרגה 6 (0-9 שנ')",salary:8670.11},
      {id:"71-0",label:"דרגה 7 (0-9 שנ')",salary:9097.07},{id:"81-0",label:"דרגה 8 (0-9 שנ')",salary:9548.35},{id:"91-0",label:"דרגה 9 (0-9 שנ')",salary:10153.10},
      {id:"11-10",label:"דרגה 1 (10-19 שנ')",salary:7971.13},{id:"21-10",label:"דרגה 2 (10-19 שנ')",salary:8605.06},{id:"31-10",label:"דרגה 3 (10-19 שנ')",salary:8999.89},
      {id:"41-10",label:"דרגה 4 (10-19 שנ')",salary:9414.67},{id:"51-10",label:"דרגה 5 (10-19 שנ')",salary:9852.97},{id:"61-10",label:"דרגה 6 (10-19 שנ')",salary:10334.75},
      {id:"71-10",label:"דרגה 7 (10-19 שנ')",salary:10843.70},{id:"81-10",label:"דרגה 8 (10-19 שנ')",salary:11381.64},{id:"91-10",label:"דרגה 9 (10-19 שנ')",salary:12102.49},
      {id:"11-20",label:"דרגה 1 (20+ שנ')",salary:9501.58},{id:"21-20",label:"דרגה 2 (20+ שנ')",salary:10257.21},{id:"31-20",label:"דרגה 3 (20+ שנ')",salary:10727.87},
      {id:"41-20",label:"דרגה 4 (20+ שנ')",salary:11222.27},{id:"51-20",label:"דרגה 5 (20+ שנ')",salary:11744.74},{id:"61-20",label:"דרגה 6 (20+ שנ')",salary:12319.02},
      {id:"71-20",label:"דרגה 7 (20+ שנ')",salary:12925.70},{id:"81-20",label:"דרגה 8 (20+ שנ')",salary:13566.91},{id:"91-20",label:"דרגה 9 (20+ שנ')",salary:14426.17},
    ]},

  "110": { name:"משרד הפנים - דירוג 110", shortName:"פנים 110", number:"110",
    color:"from-indigo-500 to-blue-600", btnActive:"bg-gradient-to-br from-indigo-500 to-blue-600", accent:"#4338ca",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"300",label:"א36",salary:6222.74},{id:"310",label:"ב36",salary:6845.01},{id:"311",label:"ג37",salary:7467.32},
      {id:"312",label:"ד37",salary:7882.14},{id:"313",label:"ה37",salary:8296.98},{id:"314",label:"א38",salary:8919.29},
      {id:"315",label:"ב38",salary:9541.55},{id:"322",label:"ג38",salary:9956.39},{id:"323",label:"ד38",salary:10752.89},
      {id:"324",label:"א39",salary:10993.50},{id:"325",label:"ב39",salary:11615.80},{id:"330",label:"א40",salary:12030.63},
      {id:"340",label:"ב40",salary:12428.71},{id:"350",label:"41",salary:14044.63},{id:"360",label:"42",salary:16010.01},{id:"370",label:"43",salary:17771.11},
    ]},

  "610": { name:"משרד הפנים - דירוג 610", shortName:"פנים 610", number:"610",
    color:"from-indigo-600 to-violet-700", btnActive:"bg-gradient-to-br from-indigo-600 to-violet-700", accent:"#4c1d95",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"300",label:"א36",salary:6222.74},{id:"310",label:"ב36",salary:6845.01},{id:"311",label:"ג37",salary:7467.32},
      {id:"312",label:"ד37",salary:7882.14},{id:"313",label:"ה37",salary:8296.98},{id:"314",label:"א38",salary:8919.29},
      {id:"315",label:"ב38",salary:9541.55},{id:"322",label:"ג38",salary:9956.39},{id:"323",label:"ד38",salary:10752.89},
      {id:"324",label:"א39",salary:10993.50},{id:"325",label:"ב39",salary:11615.80},{id:"330",label:"א40",salary:12030.63},
      {id:"340",label:"ב40",salary:12428.71},{id:"350",label:"41",salary:14044.63},{id:"360",label:"42",salary:16010.01},{id:"370",label:"43",salary:17771.11},
    ]},

  "553": { name:"משרד הפנים חדש (553)", shortName:"פנים חדש 553", number:"553",
    color:"from-blue-600 to-indigo-700", btnActive:"bg-gradient-to-br from-blue-600 to-indigo-700", accent:"#2563eb",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"300",label:"א36",salary:5500.41},{id:"310",label:"ב36",salary:6050.48},{id:"311",label:"ג37",salary:6600.54},
      {id:"312",label:"ד37",salary:6967.21},{id:"313",label:"ה37",salary:7333.89},{id:"314",label:"א38",salary:7883.96},
      {id:"315",label:"ב38",salary:8434.00},{id:"322",label:"ג38",salary:8800.70},{id:"323",label:"ד38",salary:9504.74},
      {id:"324",label:"א39",salary:9717.42},{id:"325",label:"ב39",salary:10267.50},{id:"330",label:"א40",salary:10634.16},
      {id:"340",label:"ב40",salary:10986.05},{id:"350",label:"41",salary:12414.40},{id:"360",label:"42",salary:14151.64},{id:"370",label:"43",salary:15708.31},
    ]},

  "556": { name:"עובדי המשטרה הירוקה (556)", shortName:"משטרה ירוקה", number:"556",
    color:"from-green-600 to-emerald-700", btnActive:"bg-gradient-to-br from-green-600 to-emerald-700", accent:"#16a34a",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"150",label:"דרגה 15",salary:7789.32},{id:"151",label:"15א",salary:8394.87},{id:"152",label:"15ב",salary:8841.03},
      {id:"160",label:"דרגה 16",salary:8375.24},{id:"161",label:"16א",salary:8980.82},{id:"162",label:"16ב",salary:9426.98},
      {id:"170",label:"דרגה 17",salary:9091.13},{id:"171",label:"17א",salary:9696.68},{id:"172",label:"17ב",salary:10142.86},
      {id:"180",label:"דרגה 18",salary:9795.23},{id:"181",label:"18א",salary:10400.81},{id:"182",label:"18ב",salary:10846.98},
      {id:"190",label:"דרגה 19",salary:10741.87},{id:"191",label:"19א",salary:11347.43},{id:"192",label:"19ב",salary:11793.58},
      {id:"200",label:"דרגה 20",salary:11890.33},{id:"201",label:"20א",salary:12495.90},{id:"202",label:"20ב",salary:12942.06},
      {id:"210",label:"דרגה 21",salary:13079.37},{id:"211",label:"21א",salary:13684.94},{id:"212",label:"21ב",salary:14131.11},
      {id:"220",label:"דרגה 22",salary:14477.56},{id:"221",label:"22א",salary:15083.11},{id:"222",label:"22ב",salary:15529.28},
    ]},

  "210": { name:"סיירת ירוקה (210)", shortName:"סיירת ירוקה 210", number:"210",
    color:"from-green-500 to-teal-600", btnActive:"bg-gradient-to-br from-green-500 to-teal-600", accent:"#059669",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"250",label:"15",salary:8412.47},{id:"251",label:"15א",salary:9066.46},{id:"252",label:"15ב",salary:9548.31},
      {id:"253",label:"16",salary:9045.25},{id:"254",label:"16א",salary:9699.25},{id:"255",label:"16ב",salary:10181.11},
      {id:"256",label:"17",salary:9818.41},{id:"257",label:"17א",salary:10472.40},{id:"258",label:"17ב",salary:10954.26},
      {id:"259",label:"18",salary:10578.84},{id:"260",label:"18א",salary:11232.87},{id:"261",label:"18ב",salary:11714.73},
      {id:"262",label:"19",salary:11601.18},{id:"263",label:"19א",salary:12255.19},{id:"264",label:"19ב",salary:12737.05},
      {id:"265",label:"20",salary:12841.53},{id:"266",label:"20א",salary:13495.55},{id:"267",label:"20ב",salary:13977.42},
      {id:"268",label:"21",salary:14305.48},{id:"269",label:"21א",salary:14959.49},{id:"270",label:"21ב",salary:15441.36},
      {id:"271",label:"22",salary:16022.13},{id:"272",label:"22א",salary:16676.15},{id:"273",label:"22ב",salary:17158.00},
    ]},

  "710": { name:"סיירת ירוקה (710)", shortName:"סיירת ירוקה 710", number:"710",
    color:"from-teal-500 to-green-700", btnActive:"bg-gradient-to-br from-teal-500 to-green-700", accent:"#0d9488",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"250",label:"15",salary:8412.47},{id:"251",label:"15א",salary:9066.46},{id:"252",label:"15ב",salary:9548.31},
      {id:"253",label:"16",salary:9045.25},{id:"254",label:"16א",salary:9699.25},{id:"255",label:"16ב",salary:10181.11},
      {id:"256",label:"17",salary:9818.41},{id:"257",label:"17א",salary:10472.40},{id:"258",label:"17ב",salary:10954.26},
      {id:"259",label:"18",salary:10578.84},{id:"260",label:"18א",salary:11232.87},{id:"261",label:"18ב",salary:11714.73},
      {id:"262",label:"19",salary:11601.18},{id:"263",label:"19א",salary:12255.19},{id:"264",label:"19ב",salary:12737.05},
      {id:"265",label:"20",salary:12841.53},{id:"266",label:"20א",salary:13495.55},{id:"267",label:"20ב",salary:13977.42},
      {id:"268",label:"21",salary:14305.48},{id:"269",label:"21א",salary:14959.49},{id:"270",label:"21ב",salary:15441.36},
      {id:"271",label:"22",salary:16022.13},{id:"272",label:"22א",salary:16676.15},{id:"273",label:"22ב",salary:17158.00},
    ]},

  "520": { name:"הגירה - ישן (520)", shortName:"הגירה ישן", number:"520",
    color:"from-orange-500 to-amber-600", btnActive:"bg-gradient-to-br from-orange-500 to-amber-600", accent:"#ea580c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"דרגה 1",salary:5704.20},{id:"20",label:"דרגה 2",salary:5932.37},{id:"30",label:"דרגה 3",salary:6160.54},
      {id:"40",label:"דרגה 4",salary:6480.76},{id:"50",label:"דרגה 5",salary:6616.87},{id:"60",label:"דרגה 6",salary:6845.05},
      {id:"70",label:"דרגה 7",salary:7073.21},{id:"80",label:"דרגה 8",salary:7407.69},{id:"90",label:"דרגה 9",salary:7529.54},
      {id:"100",label:"דרגה 10",salary:7757.71},{id:"110",label:"דרגה 11",salary:7985.89},{id:"120",label:"דרגה 12",salary:8333.33},
      {id:"130",label:"דרגה 13",salary:8597.80},
    ]},

  "521": { name:"הגירה - חדש (521)", shortName:"הגירה חדש", number:"521",
    color:"from-amber-500 to-orange-600", btnActive:"bg-gradient-to-br from-amber-500 to-orange-600", accent:"#d97706",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"36",salary:6845.06},{id:"82",label:"36א",salary:7229.42},{id:"84",label:"36ב",salary:7710.17},
      {id:"90",label:"37",salary:7073.21},{id:"92",label:"37א",salary:7455.89},{id:"94",label:"37ב",salary:7865.17},
      {id:"95",label:"38",salary:7407.69},{id:"96",label:"38א",salary:7714.56},{id:"97",label:"38ב",salary:8024.43},
      {id:"100",label:"39",salary:7529.54},{id:"102",label:"39א",salary:7938.23},{id:"104",label:"39ב",salary:8596.95},
      {id:"110",label:"40",salary:8036.83},{id:"112",label:"40א",salary:8695.51},{id:"114",label:"40ב",salary:9354.24},
      {id:"120",label:"41",salary:8930.66},{id:"122",label:"41א",salary:9589.38},{id:"124",label:"41ב",salary:10248.11},
      {id:"130",label:"42",salary:10313.16},{id:"132",label:"42א",salary:10971.84},{id:"134",label:"42ב",salary:11630.56},
      {id:"140",label:"43",salary:12066.06},{id:"142",label:"43א",salary:12724.77},{id:"144",label:"43ב",salary:13383.46},
      {id:"150",label:"44",salary:13634.64},{id:"152",label:"44א",salary:14378.98},{id:"154",label:"44ב",salary:15123.29},
    ]},

  "600": { name:"מאבטחי ראש הממשלה והנשיא (600)", shortName:"מאבטחי רה\"מ", number:"600",
    color:"from-gray-700 to-slate-800", btnActive:"bg-gradient-to-br from-gray-700 to-slate-800", accent:"#374151",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"860",label:"חמוש 1 - מחמ\"ץ",salary:50.34*182},{id:"870",label:"חמוש 2 - מחמ\"א",salary:51.93*182},
      {id:"880",label:"חמוש 3 - קמ\"צ",salary:53.52*182},{id:"890",label:"לא חמוש 3",salary:44.83*182},
      {id:"900",label:"לא חמוש 2 - מחמ\"א",salary:45.77*182},{id:"910",label:"לא חמוש 1 - קמ\"צ",salary:48.98*182},
    ]},

  "310": { name:"הגנת עדים קורס (310)", shortName:"הגנ\"ע קורס 310", number:"310",
    color:"from-violet-600 to-purple-700", btnActive:"bg-gradient-to-br from-violet-600 to-purple-700", accent:"#7c3aed",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"1",label:"חניך",salary:8342.08},{id:"2",label:"השלמה",salary:8342.08},{id:"3",label:"רמה 3",salary:7493.91},{id:"4",label:"רמה 4",salary:6930.53}]},

  "320": { name:"הגנת עדים קורס (320)", shortName:"הגנ\"ע קורס 320", number:"320",
    color:"from-purple-600 to-indigo-700", btnActive:"bg-gradient-to-br from-purple-600 to-indigo-700", accent:"#9333ea",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"1",label:"דרגה 1",salary:10617.56},{id:"2",label:"דרגה 2",salary:12078.69},{id:"3",label:"דרגה 3",salary:13537.43},
      {id:"4",label:"דרגה 4",salary:14731.29},{id:"5",label:"דרגה 5",salary:15794.49},{id:"6",label:"דרגה 6",salary:16590.39},
      {id:"7",label:"דרגה 7",salary:17651.19},{id:"8",label:"דרגה 8",salary:18315.22},{id:"9",label:"דרגה 9",salary:20439.21},{id:"10",label:"דרגה 10",salary:21117.72},
    ]},

  "331": { name:"הגנת עדים - ליבה 1 כולל (331)", shortName:"הגנ\"ע ליבה 1 כולל", number:"331",
    color:"from-fuchsia-600 to-violet-700", btnActive:"bg-gradient-to-br from-fuchsia-600 to-violet-700", accent:"#a21caf",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:9967.88},{id:"361",label:"36א",salary:10886.03},{id:"362",label:"36ב",salary:11804.19},
      {id:"370",label:"37",salary:10405.81},{id:"371",label:"37א",salary:11343.41},{id:"372",label:"37ב",salary:12277.58},
      {id:"380",label:"38",salary:11400.60},{id:"381",label:"38א",salary:12401.09},{id:"382",label:"38ב",salary:13405.02},
      {id:"390",label:"39",salary:12405.98},{id:"391",label:"39א",salary:13529.97},{id:"392",label:"39ב",salary:14656.23},
      {id:"400",label:"40",salary:14635.71},{id:"401",label:"40א",salary:15835.17},{id:"402",label:"40ב",salary:17033.46},
      {id:"410",label:"41",salary:16564.06},{id:"411",label:"41א",salary:17787.52},{id:"412",label:"41ב",salary:19008.69},
      {id:"420",label:"42",salary:19477.79},{id:"421",label:"42א",salary:20720.68},{id:"422",label:"42ב",salary:21964.72},
      {id:"430",label:"43",salary:23193.23},{id:"431",label:"43א",salary:24460.13},{id:"432",label:"43ב",salary:25725.89},
    ]},

  "332": { name:"הגנת עדים - ליבה 2 כולל (332)", shortName:"הגנ\"ע ליבה 2 כולל", number:"332",
    color:"from-violet-500 to-fuchsia-600", btnActive:"bg-gradient-to-br from-violet-500 to-fuchsia-600", accent:"#7c3aed",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:9027.23},{id:"361",label:"36א",salary:9859.65},{id:"362",label:"36ב",salary:10690.91},
      {id:"370",label:"37",salary:9425.15},{id:"371",label:"37א",salary:10274.72},{id:"372",label:"37ב",salary:11121.99},
      {id:"380",label:"38",salary:10325.76},{id:"381",label:"38א",salary:11232.49},{id:"382",label:"38ב",salary:12140.36},
      {id:"390",label:"39",salary:11238.12},{id:"391",label:"39א",salary:12255.78},{id:"392",label:"39ב",salary:13274.57},
      {id:"400",label:"40",salary:13257.14},{id:"401",label:"40א",salary:14344.53},{id:"402",label:"40ב",salary:15429.63},
      {id:"410",label:"41",salary:15008.90},{id:"411",label:"41א",salary:16111.17},{id:"412",label:"41ב",salary:17216.84},
      {id:"420",label:"42",salary:17643.61},{id:"421",label:"42א",salary:18768.74},{id:"422",label:"42ב",salary:19895.00},
      {id:"430",label:"43",salary:21008.22},{id:"431",label:"43א",salary:22156.22},{id:"432",label:"43ב",salary:23301.91},
    ]},

  "333": { name:"הגנת עדים - תומך 1 כולל (333)", shortName:"הגנ\"ע תומך 1 כולל", number:"333",
    color:"from-purple-500 to-violet-600", btnActive:"bg-gradient-to-br from-purple-500 to-violet-600", accent:"#9333ea",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:8449.20},{id:"370",label:"37",salary:8823.58},{id:"380",label:"38",salary:9665.33},
      {id:"390",label:"39",salary:10517.66},{id:"400",label:"40",salary:12409.51},{id:"410",label:"41",salary:14043.55},
      {id:"420",label:"42",salary:16514.62},{id:"430",label:"43",salary:19664.97},{id:"432",label:"43ב",salary:21811.17},
    ]},

  "334": { name:"הגנת עדים - תומך 2 כולל (334)", shortName:"הגנ\"ע תומך 2 כולל", number:"334",
    color:"from-indigo-500 to-purple-600", btnActive:"bg-gradient-to-br from-indigo-500 to-purple-600", accent:"#4338ca",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:8088.96},{id:"370",label:"37",salary:8445.67},{id:"380",label:"38",salary:9252.09},
      {id:"390",label:"39",salary:10070.30},{id:"400",label:"40",salary:11878.57},{id:"410",label:"41",salary:13443.15},
      {id:"420",label:"42",salary:15808.26},{id:"430",label:"43",salary:18824.41},{id:"432",label:"43ב",salary:20879.12},
    ]},

  "335": { name:"הגנת עדים - מינהלה כולל (335)", shortName:"הגנ\"ע מינהלה כולל", number:"335",
    color:"from-slate-500 to-violet-600", btnActive:"bg-gradient-to-br from-slate-500 to-violet-600", accent:"#475569",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7583.92},{id:"370",label:"37",salary:7918.26},{id:"380",label:"38",salary:8674.06},
      {id:"390",label:"39",salary:9441.64},{id:"400",label:"40",salary:11135.71},{id:"410",label:"41",salary:12603.76},
      {id:"420",label:"42",salary:14818.18},{id:"430",label:"43",salary:17647.15},{id:"432",label:"43ב",salary:19573.82},
    ]},

  "336": { name:"הגנת עדים - ליבה 1 לא כולל (336)", shortName:"הגנ\"ע ליבה 1 לא כולל", number:"336",
    color:"from-red-500 to-rose-600", btnActive:"bg-gradient-to-br from-red-500 to-rose-600", accent:"#dc2626",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7222.50},{id:"361",label:"36א",salary:7889.10},{id:"362",label:"36ב",salary:8553.44},
      {id:"370",label:"37",salary:7540.35},{id:"371",label:"37א",salary:8219.55},{id:"372",label:"37ב",salary:8897.60},
      {id:"380",label:"38",salary:7866.46},{id:"381",label:"38א",salary:8559.36},{id:"382",label:"38ב",salary:9249.99},
      {id:"390",label:"39",salary:8563.39},{id:"391",label:"39א",salary:9337.48},{id:"392",label:"39ב",salary:10113.86},
      {id:"400",label:"40",salary:9640.59},{id:"401",label:"40א",salary:10431.83},{id:"402",label:"40ב",salary:11220.79},
      {id:"410",label:"41",salary:10912.03},{id:"411",label:"41א",salary:11715.86},{id:"412",label:"41ב",salary:12521.97},
      {id:"420",label:"42",salary:12601.41},{id:"421",label:"42א",salary:13406.37},{id:"422",label:"42ב",salary:14211.34},
      {id:"430",label:"43",salary:14742.85},{id:"431",label:"43א",salary:15546.68},{id:"432",label:"43ב",salary:16353.93},
    ]},

  "337": { name:"הגנת עדים - ליבה 2 לא כולל (337)", shortName:"הגנ\"ע ליבה 2 לא כולל", number:"337",
    color:"from-orange-500 to-red-600", btnActive:"bg-gradient-to-br from-orange-500 to-red-600", accent:"#ea580c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7222.50},{id:"370",label:"37",salary:7540.35},{id:"380",label:"38",salary:7866.46},
      {id:"390",label:"39",salary:8575.17},{id:"400",label:"40",salary:9640.59},{id:"410",label:"41",salary:10912.03},
      {id:"420",label:"42",salary:12601.41},{id:"430",label:"43",salary:14742.85},
    ]},

  "338": { name:"הגנת עדים - תומך 1 לא כולל (338)", shortName:"הגנ\"ע תומך 1 לא כולל", number:"338",
    color:"from-yellow-500 to-orange-600", btnActive:"bg-gradient-to-br from-yellow-500 to-orange-600", accent:"#ca8a04",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7222.50},{id:"370",label:"37",salary:7540.35},{id:"380",label:"38",salary:7866.46},
      {id:"390",label:"39",salary:8575.17},{id:"400",label:"40",salary:9640.59},{id:"410",label:"41",salary:10912.03},
      {id:"420",label:"42",salary:12601.41},{id:"430",label:"43",salary:14742.85},
    ]},

  "339": { name:"הגנת עדים - תומך 2 לא כולל (339)", shortName:"הגנ\"ע תומך 2 לא כולל", number:"339",
    color:"from-lime-500 to-yellow-600", btnActive:"bg-gradient-to-br from-lime-500 to-yellow-600", accent:"#65a30d",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7222.50},{id:"370",label:"37",salary:7540.35},{id:"380",label:"38",salary:7866.46},
      {id:"390",label:"39",salary:8575.17},{id:"400",label:"40",salary:9640.59},{id:"410",label:"41",salary:10912.03},
      {id:"420",label:"42",salary:12601.41},{id:"430",label:"43",salary:14742.85},
    ]},

  "340": { name:"הגנת עדים - מינהלה לא כולל (340)", shortName:"הגנ\"ע מינהלה לא כולל", number:"340",
    color:"from-teal-500 to-cyan-600", btnActive:"bg-gradient-to-br from-teal-500 to-cyan-600", accent:"#0d9488",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"360",label:"36",salary:7222.50},{id:"370",label:"37",salary:7540.35},{id:"380",label:"38",salary:7866.46},
      {id:"390",label:"39",salary:8575.17},{id:"400",label:"40",salary:9640.59},{id:"410",label:"41",salary:10912.03},
      {id:"420",label:"42",salary:12601.41},{id:"430",label:"43",salary:14742.85},
    ]},

  "635": { name:"הגנת עדים - מנודקמים (635)", shortName:"הגנ\"ע מנודקמים", number:"635",
    color:"from-sky-500 to-indigo-600", btnActive:"bg-gradient-to-br from-sky-500 to-indigo-600", accent:"#0284c7",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:39.91*182},{id:"20",label:"רמה 2",salary:42.85*182},{id:"30",label:"רמה 3",salary:47.43*182}]},

  "636": { name:"הגנת עדים - רכז ביצוע שעתי (636)", shortName:"הגנ\"ע ביצוע שעתי", number:"636",
    color:"from-cyan-500 to-sky-600", btnActive:"bg-gradient-to-br from-cyan-500 to-sky-600", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"שטח 1",salary:39.67*182},{id:"20",label:"שטח 2",salary:44.47*182},{id:"30",label:"שטח 3",salary:47.61*182},
      {id:"40",label:"מתקן 1",salary:36.70*182},{id:"50",label:"מתקן 2",salary:42.64*182},{id:"60",label:"מתקן 3",salary:45.64*182},
    ]},

  "382": { name:"מטה קיברנטי לאומי - גלובלי (382)", shortName:"קיברנטי גלובלי", number:"382",
    color:"from-emerald-700 to-teal-800", btnActive:"bg-gradient-to-br from-emerald-700 to-teal-800", accent:"#047857",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"עוזר ראש מדור 1",salary:10204.48},{id:"110",label:"עוזר ראש מדור 2",salary:11480.03},{id:"120",label:"עוזר ראש מדור 3",salary:12755.60},
      {id:"130",label:"ראש מדור 1",salary:15306.71},{id:"140",label:"ראש מדור 2",salary:16582.28},{id:"150",label:"ראש מדור 3",salary:17857.83},
      {id:"160",label:"ראש ענף 1",salary:19133.40},{id:"170",label:"ראש ענף 2",salary:20408.94},{id:"180",label:"ראש ענף 3",salary:21684.53},
      {id:"190",label:"ראש תחום 1",salary:22960.09},{id:"200",label:"ראש תחום 2",salary:24235.63},{id:"210",label:"ראש תחום 3",salary:25511.20},
      {id:"220",label:"ראש תחום בכיר 1",salary:29337.88},{id:"230",label:"ראש תחום בכיר 2",salary:30613.44},{id:"240",label:"ראש תחום בכיר 3",salary:32239.76},
      {id:"250",label:"ראש אגף 1",salary:34136.55},{id:"260",label:"ראש אגף 2",salary:35575.11},{id:"270",label:"ראש אגף 3",salary:37013.68},
      {id:"280",label:"ראש אגף בכיר 1",salary:38452.27},{id:"290",label:"ראש אגף בכיר 2",salary:39890.86},{id:"300",label:"ראש אגף בכיר 3",salary:41329.42},
    ]},

  "383": { name:"מטה קיברנטי לאומי - לא גלובלי (383)", shortName:"קיברנטי לא גלובלי", number:"383",
    color:"from-teal-700 to-emerald-800", btnActive:"bg-gradient-to-br from-teal-700 to-emerald-800", accent:"#0f766e",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"עוזר ראש מדור 1",salary:9019.34},{id:"110",label:"עוזר ראש מדור 2",salary:10146.75},{id:"120",label:"עוזר ראש מדור 3",salary:11274.17},
      {id:"130",label:"ראש מדור 1",salary:13528.99},{id:"140",label:"ראש מדור 2",salary:14656.42},{id:"150",label:"ראש מדור 3",salary:15783.85},
      {id:"160",label:"ראש ענף 1",salary:16911.26},{id:"170",label:"ראש ענף 2",salary:18038.68},{id:"180",label:"ראש ענף 3",salary:19166.10},
      {id:"190",label:"ראש תחום 1",salary:20293.51},{id:"200",label:"ראש תחום 2",salary:21420.93},{id:"210",label:"ראש תחום 3",salary:22548.35},
      {id:"220",label:"ראש תחום בכיר 1",salary:25930.59},{id:"230",label:"ראש תחום בכיר 2",salary:27058.02},{id:"240",label:"ראש תחום בכיר 3",salary:28495.47},
      {id:"250",label:"ראש אגף 1",salary:30171.94},{id:"260",label:"ראש אגף 2",salary:31443.44},{id:"270",label:"ראש אגף 3",salary:32714.93},
    ]},

  "421": { name:"מנהל מערכות מידע ב' (421)", shortName:"מנהל מידע ב'", number:"421",
    color:"from-cyan-600 to-blue-700", btnActive:"bg-gradient-to-br from-cyan-600 to-blue-700", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:27915.81},{id:"20",label:"רמה 2",salary:29185.21},{id:"30",label:"רמה 3",salary:30453.41}]},

  "422": { name:"מנהל טכנולוגיות ופיתוח א' (422)", shortName:"טכנולוגיות א'", number:"422",
    color:"from-blue-600 to-cyan-700", btnActive:"bg-gradient-to-br from-blue-600 to-cyan-700", accent:"#2563eb",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:22780.96},{id:"20",label:"רמה 2",salary:23865.19},{id:"30",label:"רמה 3",salary:24950.64},
      {id:"40",label:"רמה 4",salary:26036.09},{id:"50",label:"רמה 5",salary:27120.32},{id:"60",label:"רמה 6",salary:28205.75},{id:"70",label:"רמה 7",salary:29289.99},
    ]},

  "423": { name:"מנהל טכנולוגיות ופיתוח ב' (423)", shortName:"טכנולוגיות ב'", number:"423",
    color:"from-sky-600 to-blue-700", btnActive:"bg-gradient-to-br from-sky-600 to-blue-700", accent:"#0284c7",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:18442.83},{id:"20",label:"רמה 2",salary:19527.07},{id:"30",label:"רמה 3",salary:20612.52},
      {id:"40",label:"רמה 4",salary:21696.73},{id:"50",label:"רמה 5",salary:22780.96},{id:"60",label:"רמה 6",salary:23865.19},{id:"70",label:"רמה 7",salary:24950.64},
    ]},

  "424": { name:"מנהל יישומים א' (424)", shortName:"יישומים א'", number:"424",
    color:"from-indigo-600 to-blue-700", btnActive:"bg-gradient-to-br from-indigo-600 to-blue-700", accent:"#4338ca",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:21696.73},{id:"20",label:"רמה 2",salary:22780.96},{id:"30",label:"רמה 3",salary:23865.19},
      {id:"40",label:"רמה 4",salary:24950.64},{id:"50",label:"רמה 5",salary:26036.09},{id:"60",label:"רמה 6",salary:27120.32},{id:"70",label:"רמה 7",salary:28205.75},
    ]},

  "425": { name:"מנהל יישומים ב' (425)", shortName:"יישומים ב'", number:"425",
    color:"from-violet-600 to-indigo-700", btnActive:"bg-gradient-to-br from-violet-600 to-indigo-700", accent:"#7c3aed",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:17357.40},{id:"20",label:"רמה 2",salary:18442.83},{id:"30",label:"רמה 3",salary:19527.07},
      {id:"40",label:"רמה 4",salary:20612.52},{id:"50",label:"רמה 5",salary:21696.73},{id:"60",label:"רמה 6",salary:22780.96},{id:"70",label:"רמה 7",salary:23865.19},
    ]},

  "426": { name:"מנהל אבטחת מידע א' (426)", shortName:"אבטחת מידע א'", number:"426",
    color:"from-purple-600 to-violet-700", btnActive:"bg-gradient-to-br from-purple-600 to-violet-700", accent:"#9333ea",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:17357.40},{id:"20",label:"רמה 2",salary:18442.83},{id:"30",label:"רמה 3",salary:19527.07},
      {id:"40",label:"רמה 4",salary:20612.52},{id:"50",label:"רמה 5",salary:21696.73},{id:"60",label:"רמה 6",salary:22780.96},{id:"70",label:"רמה 7",salary:23865.19},
    ]},

  "427": { name:"מנהל אבטחת מידע ב' (427)", shortName:"אבטחת מידע ב'", number:"427",
    color:"from-fuchsia-600 to-purple-700", btnActive:"bg-gradient-to-br from-fuchsia-600 to-purple-700", accent:"#a21caf",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:14102.27},{id:"20",label:"רמה 2",salary:15187.71},{id:"30",label:"רמה 3",salary:16271.95},
      {id:"40",label:"רמה 4",salary:17357.40},{id:"50",label:"רמה 5",salary:18442.83},{id:"60",label:"רמה 6",salary:19527.07},{id:"70",label:"רמה 7",salary:20612.52},
    ]},

  "491": { name:"אב בית דין גיור - ותיקים (491)", shortName:"אב ביה\"ד ותיק", number:"491",
    color:"from-amber-600 to-yellow-700", btnActive:"bg-gradient-to-br from-amber-600 to-yellow-700", accent:"#d97706",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:25194.30},{id:"20",label:"רמה 2",salary:26580.09},{id:"30",label:"רמה 3",salary:28042.67}]},

  "492": { name:"אב בית דין גיור - חדשים (492)", shortName:"אב ביה\"ד חדש", number:"492",
    color:"from-yellow-600 to-amber-700", btnActive:"bg-gradient-to-br from-yellow-600 to-amber-700", accent:"#ca8a04",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:20861.22},{id:"20",label:"רמה 2",salary:22008.43},{id:"30",label:"רמה 3",salary:23218.04}]},

  "493": { name:"חבר בית דין גיור - ותיקים (493)", shortName:"חבר ביה\"ד ותיק", number:"493",
    color:"from-orange-600 to-yellow-700", btnActive:"bg-gradient-to-br from-orange-600 to-yellow-700", accent:"#ea580c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:22149.77},{id:"20",label:"רמה 2",salary:23368.28}]},

  "494": { name:"חבר בית דין גיור - חדשים (494)", shortName:"חבר ביה\"ד חדש", number:"494",
    color:"from-amber-500 to-orange-600", btnActive:"bg-gradient-to-br from-amber-500 to-orange-600", accent:"#f59e0b",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:18742.51},{id:"20",label:"רמה 2",salary:19773.85}]},

  "495": { name:"המרכז הלאומי לבקרת מחלות (495)", shortName:"בקרת מחלות", number:"495",
    color:"from-red-600 to-rose-700", btnActive:"bg-gradient-to-br from-red-600 to-rose-700", accent:"#dc2626",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"ב1",salary:8821.27},{id:"20",label:"ב2",salary:9308.56},{id:"30",label:"ב3",salary:9795.85},
      {id:"40",label:"ב4",salary:10283.13},{id:"50",label:"ב5",salary:10645.11},{id:"60",label:"ב6",salary:11254.24},
      {id:"70",label:"ב7",salary:11863.35},{id:"80",label:"ב8",salary:15518.05},{id:"90",label:"ב9",salary:16370.80},
      {id:"100",label:"ב10",salary:17345.40},{id:"110",label:"ב11",salary:18563.64},
    ]},

  "496": { name:"אב ביה\"ד ותיק ב.מ.י (496)", shortName:"אב ביה\"ד ב.מ.י ותיק", number:"496",
    color:"from-lime-600 to-green-700", btnActive:"bg-gradient-to-br from-lime-600 to-green-700", accent:"#65a30d",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:25194.30},{id:"20",label:"רמה 2",salary:26580.09},{id:"30",label:"רמה 3",salary:28042.67}]},

  "497": { name:"אב ביה\"ד חדש ב.מ.י (497)", shortName:"אב ביה\"ד ב.מ.י חדש", number:"497",
    color:"from-green-600 to-lime-700", btnActive:"bg-gradient-to-br from-green-600 to-lime-700", accent:"#16a34a",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"רמה 1",salary:22149.77},{id:"20",label:"רמה 2",salary:23368.28}]},

  "286": { name:"מסיימי הליכי גיור (286)", shortName:"מסיימי גיור", number:"286",
    color:"from-emerald-600 to-teal-700", btnActive:"bg-gradient-to-br from-emerald-600 to-teal-700", accent:"#059669",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"1a",label:"בלנית עד 12 מועמדים",salary:170.86*20},{id:"1b",label:"בלנית 13-18 מועמדים",salary:256.28*20},
      {id:"1c",label:"בלנית 19-25 מועמדים",salary:355.48*20},{id:"2a",label:"ראש צוות עד 12",salary:187.38*20},
      {id:"2b",label:"ראש צוות 13-18",salary:281.08*20},{id:"2c",label:"ראש צוות 19-25",salary:389.93*20},
    ]},

  "315": { name:"אנשי דת מוסלמים - פנים (315)", shortName:"דת מוסלמית פנים", number:"315",
    color:"from-green-700 to-emerald-800", btnActive:"bg-gradient-to-br from-green-700 to-emerald-800", accent:"#15803d",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"דרגה 1",salary:5343.80},{id:"20",label:"דרגה 2",salary:6011.78},{id:"30",label:"דרגה 3",salary:6679.75},
      {id:"40",label:"דרגה 4",salary:7347.73},{id:"50",label:"דרגה 5",salary:8015.70},{id:"60",label:"דרגה 6",salary:8683.67},
      {id:"70",label:"דרגה 7",salary:9351.65},{id:"80",label:"דרגה 8",salary:10019.64},{id:"90",label:"דרגה 9",salary:10687.60},
    ]},

  "343": { name:"חוקרי המרכז למחקר מדיני (343)", shortName:"מרכז מחקר מדיני", number:"343",
    color:"from-blue-700 to-indigo-800", btnActive:"bg-gradient-to-br from-blue-700 to-indigo-800", accent:"#1d4ed8",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"39",label:"עוזר מחקר 39",salary:9694.56},{id:"39א",label:"עוזר מחקר 39א",salary:10229.85},{id:"39ב",label:"עוזר מחקר 39ב",salary:10765.15},
      {id:"40",label:"חוקר 40",salary:11321.85},{id:"40א",label:"חוקר 40א",salary:11907.50},{id:"40ב",label:"חוקר 40ב",salary:12392.44},
      {id:"41",label:"חוקר בכיר 41",salary:13237.40},{id:"41א",label:"חוקר בכיר 41א",salary:13772.68},{id:"41ב",label:"חוקר בכיר 41ב",salary:14307.99},
      {id:"42",label:"מעריך 42",salary:14672.08},{id:"42א",label:"מעריך 42א",salary:15207.34},{id:"42ב",label:"מעריך 42ב",salary:15742.67},
      {id:"43",label:"מעריך בכיר 43",salary:16263.20},{id:"43א",label:"מעריך בכיר 43א",salary:17677.87},{id:"43ב",label:"מעריך בכיר 43ב",salary:18213.17},
    ]},

  "123": { name:"חוקרי תאונות אוויריות (123)", shortName:"חוקרי תאונות אוויר", number:"123",
    color:"from-sky-600 to-indigo-700", btnActive:"bg-gradient-to-br from-sky-600 to-indigo-700", accent:"#0284c7",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"400",label:"חוקר ב' (שעתי)",salary:168.36*182},{id:"500",label:"חוקר א' (שעתי)",salary:194.47*182}]},

  "512": { name:"מטאורולוגים - משרד התחבורה (512)", shortName:"מטאורולוגים", number:"512",
    color:"from-sky-500 to-blue-600", btnActive:"bg-gradient-to-br from-sky-500 to-blue-600", accent:"#0ea5e9",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"38",label:"מרכז 38",salary:8978.67},{id:"38א",label:"מרכז 38א",salary:9586.51},{id:"38ב",label:"מרכז 38ב",salary:10194.35},
      {id:"39",label:"מרכז בכיר 39",salary:10854.81},{id:"39א",label:"39א",salary:11462.65},{id:"39ב",label:"39ב",salary:12070.47},
      {id:"40",label:"מנהל גף 40",salary:12730.95},{id:"40א",label:"40א",salary:13338.77},{id:"40ב",label:"40ב",salary:13946.60},
      {id:"41",label:"מנהל גף 41",salary:14607.07},{id:"41א",label:"41א",salary:15214.91},{id:"41ב",label:"41ב",salary:15822.75},
      {id:"42",label:"מנהל תחום 42",salary:15945.84},{id:"42א",label:"42א",salary:16533.86},{id:"42ב",label:"42ב",salary:17121.88},
      {id:"43",label:"מנהל תחום בכיר 43",salary:17062.04},{id:"43א",label:"43א",salary:17650.07},{id:"43ב",label:"43ב",salary:18238.09},
    ]},

  "188": { name:"בודק כלי שיט קטנים (188)", shortName:"בודק כלי שיט 188", number:"188",
    color:"from-cyan-600 to-blue-700", btnActive:"bg-gradient-to-br from-cyan-600 to-blue-700", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"1",label:"רמה א'",salary:78.53*182},{id:"2",label:"רמה ב'",salary:95.82*182},{id:"3",label:"רמה ג'",salary:112.09*182}]},

  "688": { name:"בודקי כלי שיט קטנים (688)", shortName:"בודק כלי שיט 688", number:"688",
    color:"from-blue-600 to-cyan-700", btnActive:"bg-gradient-to-br from-blue-600 to-cyan-700", accent:"#2563eb",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"1",label:"רמה א'",salary:78.53*182},{id:"2",label:"רמה ב'",salary:95.82*182},{id:"3",label:"רמה ג'",salary:112.09*182}]},

  "561": { name:"עוזרים משפטיים - ביהמ\"ש העליון (561)", shortName:"עוזרים עליון", number:"561",
    color:"from-amber-700 to-yellow-800", btnActive:"bg-gradient-to-br from-amber-700 to-yellow-800", accent:"#b45309",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"210",label:"א - דרגה 1",salary:13719.09},{id:"220",label:"א - דרגה 2",salary:14774.39},
      {id:"230",label:"א - דרגה 3",salary:15829.71},{id:"240",label:"א - דרגה 4",salary:16885.03},
      {id:"310",label:"ב - דרגה 1",salary:17940.33},{id:"320",label:"ב - דרגה 2",salary:18995.66},
      {id:"330",label:"ב - דרגה 3",salary:20050.96},{id:"340",label:"ב - דרגה 4",salary:21106.29},
    ]},

  "588": { name:"בוחני רישוי (588)", shortName:"בוחני רישוי", number:"588",
    color:"from-teal-600 to-cyan-700", btnActive:"bg-gradient-to-br from-teal-600 to-cyan-700", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"1",label:"רמה 1",salary:10467.89},{id:"2",label:"רמה 2",salary:10741.08},{id:"3",label:"רמה 3",salary:11003.44},
      {id:"4",label:"רמה 4",salary:11265.76},{id:"5",label:"רמה 5",salary:11547.51},{id:"6",label:"רמה 6",salary:11835.76},
    ]},

  "516": { name:"מזכירות - לשכות שרים ומנכ\"לים (516)", shortName:"מזכירות לשכות שרים", number:"516",
    color:"from-pink-600 to-rose-700", btnActive:"bg-gradient-to-br from-pink-600 to-rose-700", accent:"#db2777",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"דרגה 1",salary:7191.84},{id:"20",label:"דרגה 2",salary:7791.16},{id:"30",label:"דרגה 3",salary:8390.49},
      {id:"40",label:"דרגה 4",salary:8989.81},{id:"50",label:"דרגה 5",salary:9589.14},{id:"60",label:"דרגה 6",salary:10188.45},
    ]},

  "517": { name:"יועצים ועוזרים - לשכות שרים ומנכ\"לים (517)", shortName:"יועצים לשכות שרים", number:"517",
    color:"from-rose-600 to-pink-700", btnActive:"bg-gradient-to-br from-rose-600 to-pink-700", accent:"#e11d48",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"70",label:"דרגה 7",salary:10787.77},{id:"80",label:"דרגה 8",salary:11986.42},{id:"90",label:"דרגה 9",salary:13185.03},
      {id:"100",label:"דרגה 10",salary:14383.68},{id:"110",label:"דרגה 11",salary:15582.32},{id:"120",label:"דרגה 12",salary:16780.96},
      {id:"130",label:"דרגה 13",salary:17979.61},{id:"140",label:"דרגה 14",salary:19178.25},{id:"150",label:"דרגה 15",salary:20376.89},
      {id:"160",label:"דרגה 16",salary:21575.52},{id:"170",label:"דרגה 17",salary:22774.17},{id:"180",label:"דרגה 18",salary:23972.80},
    ]},

  "166": { name:"גאוגרפים - נ\"רים (166)", shortName:"גאוגרפים נ\"ר", number:"166",
    color:"from-emerald-600 to-green-700", btnActive:"bg-gradient-to-br from-emerald-600 to-green-700", accent:"#059669",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"40",label:"דרגה 4",salary:15847.97},{id:"50",label:"דרגה 5",salary:17226.04},{id:"60",label:"דרגה 6",salary:18604.13},
      {id:"70",label:"דרגה 7",salary:20092.46},{id:"80",label:"דרגה 8",salary:21699.87},{id:"90",label:"דרגה 9",salary:23435.85},
    ]},

  "134": { name:"פרמקאים (134)", shortName:"פרמקאים", number:"134",
    color:"from-green-600 to-teal-700", btnActive:"bg-gradient-to-br from-green-600 to-teal-700", accent:"#16a34a",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"1",label:"דרגה 1",salary:9819.57},{id:"2",label:"דרגה 2",salary:10365.10},{id:"3",label:"דרגה 3",salary:11456.17},
      {id:"4",label:"דרגה 4",salary:12547.23},{id:"5",label:"דרגה 5",salary:14183.83},{id:"6",label:"דרגה 6",salary:15820.43},
      {id:"7",label:"דרגה 7",salary:16911.49},{id:"8",label:"דרגה 8",salary:18002.55},{id:"9",label:"דרגה 9",salary:19093.61},
    ]},

  "195": { name:"מפקחי מזון (195)", shortName:"מפקחי מזון", number:"195",
    color:"from-lime-600 to-green-700", btnActive:"bg-gradient-to-br from-lime-600 to-green-700", accent:"#65a30d",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"1",label:"רמה 1",salary:8728.51},{id:"2",label:"רמה 2",salary:9164.94},{id:"3",label:"רמה 3",salary:9601.36},
      {id:"4",label:"רמה 4",salary:10037.78},{id:"5",label:"רמה 5",salary:10474.21},{id:"6",label:"רמה 6",salary:11565.28},
      {id:"7",label:"רמה 7",salary:13092.77},{id:"8",label:"רמה 8",salary:15384.00},
    ]},

  "204": { name:"מהנדסים וטכנאים בכבאות (204)", shortName:"כבאות מהנדסים", number:"204",
    color:"from-orange-600 to-red-700", btnActive:"bg-gradient-to-br from-orange-600 to-red-700", accent:"#ea580c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"36",salary:8185.15},{id:"82",label:"36א",salary:8939.28},{id:"84",label:"36ב",salary:9693.38},
      {id:"90",label:"37",salary:8378.78},{id:"92",label:"37א",salary:9132.30},{id:"94",label:"37ב",salary:9885.81},
      {id:"95",label:"38",salary:8572.72},{id:"96",label:"38א",salary:9326.24},{id:"97",label:"38ב",salary:10079.74},
      {id:"100",label:"39",salary:9154.37},{id:"102",label:"39א",salary:9983.55},{id:"104",label:"39ב",salary:10812.77},
      {id:"110",label:"40",salary:10117.00},{id:"112",label:"40א",salary:10946.16},{id:"114",label:"40ב",salary:11775.37},
      {id:"120",label:"41",salary:11242.21},{id:"122",label:"41א",salary:12071.41},{id:"124",label:"41ב",salary:12900.64},
      {id:"130",label:"42",salary:12982.53},{id:"132",label:"42א",salary:13811.69},{id:"134",label:"42ב",salary:14640.90},
      {id:"140",label:"43",salary:15189.09},{id:"142",label:"43א",salary:16018.30},{id:"144",label:"43ב",salary:16847.47},
    ]},

  "264": { name:"נהגי שרים ומנכ\"לים (264)", shortName:"נהגי שרים 264", number:"264",
    color:"from-slate-600 to-gray-700", btnActive:"bg-gradient-to-br from-slate-600 to-gray-700", accent:"#475569",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"500",label:"נ.שר א",salary:14681.74},{id:"502",label:"נ.שר ב",salary:15268.76},{id:"506",label:"נ.שר ג",salary:15878.89},
      {id:"520",label:"נ.סגן.שר א",salary:13513.84},{id:"522",label:"נ.סגן.שר ב",salary:14054.66},{id:"526",label:"נ.סגן.שר ג",salary:14617.02},
      {id:"540",label:"נ.מ.נ.מ א",salary:12345.97},{id:"542",label:"נ.מ.נ.מ ב",salary:12840.56},{id:"546",label:"נ.מ.נ.מ ג",salary:13353.63},
      {id:"508",label:"נ.רה\"מ ג'",salary:17020.27},
    ]},

  "265": { name:"בוחני פטנטים א' (265)", shortName:"פטנטים א'", number:"265",
    color:"from-indigo-700 to-blue-800", btnActive:"bg-gradient-to-br from-indigo-700 to-blue-800", accent:"#3730a3",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:10015.58},{id:"20",label:"רמה 2",salary:11194.24},{id:"30",label:"רמה 3",salary:12371.69},
      {id:"40",label:"רמה 4",salary:13550.35},{id:"50",label:"רמה 5",salary:14729.02},{id:"60",label:"רמה 6",salary:15906.45},
      {id:"70",label:"רמה 7",salary:17085.11},{id:"80",label:"רמה 8",salary:18263.79},{id:"90",label:"רמה 9",salary:19442.46},
      {id:"100",label:"רמה 10",salary:20619.90},{id:"110",label:"רמה 11",salary:21798.56},
    ]},

  "266": { name:"בוחני פטנטים ב' (266)", shortName:"פטנטים ב'", number:"266",
    color:"from-blue-700 to-indigo-800", btnActive:"bg-gradient-to-br from-blue-700 to-indigo-800", accent:"#1d4ed8",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"רמה 1",salary:10542.40},{id:"20",label:"רמה 2",salary:11783.06},{id:"30",label:"רמה 3",salary:13022.44},
      {id:"40",label:"רמה 4",salary:14263.10},{id:"50",label:"רמה 5",salary:15503.76},{id:"60",label:"רמה 6",salary:16743.14},
      {id:"70",label:"רמה 7",salary:17983.79},{id:"80",label:"רמה 8",salary:19224.45},{id:"90",label:"רמה 9",salary:20465.14},
      {id:"100",label:"רמה 10",salary:21704.49},{id:"110",label:"רמה 11",salary:22945.15},
    ]},

  "165": { name:"בוחני פטנטים - צוערים (165)", shortName:"פטנטים צוערים", number:"165",
    color:"from-sky-700 to-blue-800", btnActive:"bg-gradient-to-br from-sky-700 to-blue-800", accent:"#0369a1",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"10",label:"דרגה 1",salary:7303.84},{id:"20",label:"דרגה 2",salary:8130.69},{id:"30",label:"דרגה 3",salary:8957.54}]},

  "525": { name:"אזרח ותיק (525)", shortName:"אזרח ותיק", number:"525",
    color:"from-slate-500 to-zinc-600", btnActive:"bg-gradient-to-br from-slate-500 to-zinc-600", accent:"#64748b",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"90",label:"מינהלי (שעתי)",salary:35.26*182},{id:"120",label:"מקצועי (שעתי)",salary:47.31*182}]},

  "787": { name:"צוערים (787)", shortName:"צוערים 787", number:"787",
    color:"from-orange-700 to-amber-700", btnActive:"bg-gradient-to-br from-orange-700 to-amber-700", accent:"#c2410c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"409",label:"צוער",salary:7318.73},{id:"410",label:"צוער ותיק",salary:8006.77},{id:"411",label:"צוע.א1",salary:7814.86},
      {id:"412",label:"צוע.א2",salary:8310.98},{id:"413",label:"צוע.ב1 ותיק",salary:8502.87},{id:"414",label:"צוע.ב2 ותיק",salary:8998.99},
    ]},

  // ── כל הדירוגים החסרים מה-PDF ──

  "10": { name:"איכות הסביבה (10)", shortName:"איכות סביבה 10", number:"10",
    color:"from-green-500 to-lime-600", btnActive:"bg-gradient-to-br from-green-500 to-lime-600", accent:"#22c55e",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"180",label:"15",salary:8412.46},{id:"182",label:"15א",salary:9066.44},{id:"183",label:"15ב",salary:9548.30},
      {id:"190",label:"16",salary:9045.25},{id:"192",label:"16א",salary:9699.25},{id:"193",label:"16ב",salary:10181.12},
      {id:"200",label:"17",salary:9818.41},{id:"202",label:"17א",salary:10472.40},{id:"203",label:"17ב",salary:10954.26},
      {id:"210",label:"18",salary:10578.84},{id:"212",label:"18א",salary:11232.87},{id:"213",label:"18ב",salary:11714.73},
      {id:"220",label:"19",salary:11601.19},{id:"222",label:"19א",salary:12255.20},{id:"223",label:"19ב",salary:12737.05},
      {id:"230",label:"20",salary:12841.54},{id:"232",label:"20א",salary:13495.56},{id:"233",label:"20ב",salary:13977.42},
    ]},

  "510": { name:"איכות הסביבה (510)", shortName:"איכות סביבה 510", number:"510",
    color:"from-lime-500 to-green-600", btnActive:"bg-gradient-to-br from-lime-500 to-green-600", accent:"#84cc16",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"180",label:"15",salary:8412.47},{id:"182",label:"15א",salary:9066.46},{id:"183",label:"15ב",salary:9548.31},
      {id:"190",label:"16",salary:9045.25},{id:"192",label:"16א",salary:9699.25},{id:"193",label:"16ב",salary:10181.11},
      {id:"200",label:"17",salary:9818.41},{id:"202",label:"17א",salary:10472.40},{id:"203",label:"17ב",salary:10954.26},
      {id:"210",label:"18",salary:10578.84},{id:"212",label:"18א",salary:11232.87},{id:"213",label:"18ב",salary:11714.73},
      {id:"220",label:"19",salary:11601.18},{id:"222",label:"19א",salary:12255.19},{id:"223",label:"19ב",salary:12737.05},
      {id:"230",label:"20",salary:12841.53},{id:"232",label:"20א",salary:13495.55},{id:"233",label:"20ב",salary:13977.42},
    ]},

  "552": { name:"איכות הסביבה חדש (552)", shortName:"איכות סביבה 552", number:"552",
    color:"from-emerald-500 to-lime-600", btnActive:"bg-gradient-to-br from-emerald-500 to-lime-600", accent:"#10b981",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"180",label:"15",salary:7435.96},{id:"182",label:"15א",salary:8014.05},{id:"183",label:"15ב",salary:8439.97},
      {id:"190",label:"16",salary:7995.30},{id:"192",label:"16א",salary:8573.41},{id:"193",label:"16ב",salary:8999.33},
      {id:"200",label:"17",salary:8678.72},{id:"202",label:"17א",salary:9256.82},{id:"203",label:"17ב",salary:9682.74},
      {id:"210",label:"18",salary:9350.88},{id:"212",label:"18א",salary:9929.00},{id:"213",label:"18ב",salary:10354.92},
      {id:"220",label:"19",salary:10254.58},{id:"222",label:"19א",salary:10832.67},{id:"223",label:"19ב",salary:11258.59},
      {id:"230",label:"20",salary:11350.95},{id:"232",label:"20א",salary:11929.05},{id:"233",label:"20ב",salary:12354.98},
      {id:"234",label:"21",salary:12486.05},{id:"235",label:"21א",salary:13064.14},{id:"236",label:"21ב",salary:13490.08},
      {id:"237",label:"22",salary:13820.80},{id:"238",label:"22א",salary:14398.89},{id:"239",label:"22ב",salary:14824.83},
    ]},

  "14": { name:"כלכלנים נבחרים - ותיק (14)", shortName:"כלכלנים ותיק 14", number:"14",
    color:"from-sky-600 to-blue-700", btnActive:"bg-gradient-to-br from-sky-600 to-blue-700", accent:"#0284c7",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"39",salary:11416.93},{id:"102",label:"39א",salary:12047.33},{id:"104",label:"39ב",salary:12677.75},
      {id:"110",label:"40",salary:13333.34},{id:"112",label:"40א",salary:13963.73},{id:"114",label:"40ב",salary:14594.12},
      {id:"120",label:"41",salary:15589.24},{id:"122",label:"41א",salary:16219.61},{id:"124",label:"41ב",salary:16850.03},
      {id:"130",label:"42",salary:17278.77},{id:"132",label:"42א",salary:17909.16},{id:"134",label:"42ב",salary:18539.58},
      {id:"140",label:"43",salary:19152.61},{id:"142",label:"43א",salary:20818.62},{id:"144",label:"43ב",salary:21449.03},
      {id:"150",label:"44",salary:21642.46},{id:"152",label:"44א",salary:23525.04},{id:"154",label:"44ב",salary:24237.41},
      {id:"200",label:"משופר 1",salary:20374.49},{id:"202",label:"משופר 1א",salary:21561.81},{id:"204",label:"משופר 1ב",salary:22749.13},
      {id:"210",label:"משופר 2",salary:23091.07},{id:"212",label:"משופר 2א",salary:24410.32},{id:"214",label:"משופר 2ב",salary:25861.49},
    ]},

  "87": { name:"עובדים חיוניים אקדמאים - ותיק (87)", shortName:"אקדמאים ותיק 87", number:"87",
    color:"from-teal-600 to-emerald-700", btnActive:"bg-gradient-to-br from-teal-600 to-emerald-700", accent:"#0d9488",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"36",salary:6502.18},{id:"82",label:"36א",salary:7101.24},{id:"84",label:"36ב",salary:7700.31},
      {id:"90",label:"37",salary:6656.01},{id:"92",label:"37א",salary:7254.60},{id:"94",label:"37ב",salary:7853.16},
      {id:"95",label:"38",salary:6810.08},{id:"96",label:"38א",salary:7408.66},{id:"97",label:"38ב",salary:8007.24},
      {id:"100",label:"39",salary:7272.12},{id:"102",label:"39א",salary:7930.82},{id:"104",label:"39ב",salary:8589.54},
      {id:"110",label:"40",salary:8036.83},{id:"112",label:"40א",salary:8695.50},{id:"114",label:"40ב",salary:9354.24},
      {id:"120",label:"41",salary:8930.66},{id:"122",label:"41א",salary:9589.37},{id:"124",label:"41ב",salary:10248.11},
      {id:"130",label:"42",salary:10313.16},{id:"132",label:"42א",salary:10971.84},{id:"134",label:"42ב",salary:11630.57},
      {id:"140",label:"43",salary:12066.05},{id:"142",label:"43א",salary:12724.78},{id:"144",label:"43ב",salary:13383.46},
      {id:"150",label:"44",salary:13634.64},{id:"152",label:"44א",salary:14378.98},{id:"154",label:"44ב",salary:15123.30},
    ]},

  "587": { name:"עובדים חיוניים אקדמאים - חדש (587)", shortName:"אקדמאים חדש 587", number:"587",
    color:"from-emerald-600 to-teal-700", btnActive:"bg-gradient-to-br from-emerald-600 to-teal-700", accent:"#059669",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"36",salary:6502.18},{id:"82",label:"36א",salary:7101.24},{id:"84",label:"36ב",salary:7700.31},
      {id:"90",label:"37",salary:6656.01},{id:"92",label:"37א",salary:7254.60},{id:"94",label:"37ב",salary:7853.16},
      {id:"95",label:"38",salary:6810.08},{id:"96",label:"38א",salary:7408.66},{id:"97",label:"38ב",salary:8007.24},
      {id:"100",label:"39",salary:7272.12},{id:"102",label:"39א",salary:7930.82},{id:"104",label:"39ב",salary:8589.54},
      {id:"110",label:"40",salary:8036.83},{id:"112",label:"40א",salary:8695.50},{id:"114",label:"40ב",salary:9354.24},
      {id:"120",label:"41",salary:8930.66},{id:"122",label:"41א",salary:9589.37},{id:"124",label:"41ב",salary:10248.11},
      {id:"130",label:"42",salary:10313.16},{id:"132",label:"42א",salary:10971.84},{id:"134",label:"42ב",salary:11630.57},
      {id:"140",label:"43",salary:12066.05},{id:"142",label:"43א",salary:12724.78},{id:"144",label:"43ב",salary:13383.46},
      {id:"150",label:"44",salary:13634.64},{id:"152",label:"44א",salary:14378.98},{id:"154",label:"44ב",salary:15123.30},
    ]},

  "187": { name:"עובדים חיוניים משפטנים - חדש (187)", shortName:"משפטנים חדש 187", number:"187",
    color:"from-cyan-600 to-sky-700", btnActive:"bg-gradient-to-br from-cyan-600 to-sky-700", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"300",label:"ג",salary:8233.39},{id:"301",label:"ג1",salary:8811.62},{id:"302",label:"ג2",salary:9389.84},
      {id:"303",label:"ב51",salary:8687.01},{id:"304",label:"ב52",salary:9265.23},{id:"305",label:"ב53",salary:9843.47},
      {id:"312",label:"א",salary:11114.99},{id:"315",label:"א3",salary:11700.74},{id:"318",label:"א6",salary:12286.48},
      {id:"322",label:"א10",salary:12243.45},{id:"325",label:"א13",salary:12829.20},{id:"328",label:"א16",salary:13414.93},
      {id:"332",label:"א20",salary:13708.22},{id:"335",label:"א23",salary:14293.95},{id:"338",label:"א26",salary:14879.68},
      {id:"342",label:"א30",salary:15608.13},{id:"345",label:"א33",salary:16193.86},{id:"348",label:"א36",salary:16779.60},
      {id:"352",label:"א40",salary:17810.89},{id:"355",label:"א43",salary:18396.63},{id:"358",label:"א46",salary:18982.37},
      {id:"362",label:"ב2",salary:9424.79},{id:"365",label:"ב3",salary:10010.54},{id:"368",label:"ב6",salary:10596.29},
      {id:"372",label:"ב20",salary:10177.85},{id:"375",label:"ב23",salary:10763.62},{id:"378",label:"ב26",salary:11349.35},
      {id:"401",label:"א50",salary:20482.53},{id:"403",label:"א53",salary:21156.13},{id:"405",label:"א56",salary:21829.73},
    ]},

  "987": { name:"עובדים חיוניים משפטנים - ותיק (987)", shortName:"משפטנים ותיק 987", number:"987",
    color:"from-sky-700 to-cyan-800", btnActive:"bg-gradient-to-br from-sky-700 to-cyan-800", accent:"#0369a1",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"300",label:"ג",salary:8233.39},{id:"301",label:"ג1",salary:8811.62},{id:"302",label:"ג2",salary:9389.84},
      {id:"303",label:"ב51",salary:8687.01},{id:"304",label:"ב52",salary:9265.23},{id:"305",label:"ב53",salary:9843.47},
      {id:"312",label:"א",salary:11114.99},{id:"315",label:"א3",salary:11700.74},{id:"318",label:"א6",salary:12286.48},
      {id:"322",label:"א10",salary:12243.45},{id:"325",label:"א13",salary:12829.20},{id:"328",label:"א16",salary:13414.93},
      {id:"332",label:"א20",salary:13708.22},{id:"335",label:"א23",salary:14293.95},{id:"338",label:"א26",salary:14879.68},
      {id:"342",label:"א30",salary:15608.13},{id:"345",label:"א33",salary:16193.86},{id:"348",label:"א36",salary:16779.60},
      {id:"352",label:"א40",salary:17810.89},{id:"355",label:"א43",salary:18396.63},{id:"358",label:"א46",salary:18982.37},
      {id:"362",label:"ב2",salary:9424.79},{id:"365",label:"ב3",salary:10010.54},{id:"368",label:"ב6",salary:10596.29},
      {id:"372",label:"ב20",salary:10177.85},{id:"375",label:"ב23",salary:10763.62},{id:"378",label:"ב26",salary:11349.35},
      {id:"401",label:"א50",salary:20482.53},{id:"403",label:"א53",salary:21156.13},{id:"405",label:"א56",salary:21829.73},
    ]},

  "64": { name:"לשכות שר ומנכ\"ל - ישן (64)", shortName:"לשכות שר/מנכ\"ל ישן", number:"64",
    color:"from-amber-600 to-yellow-700", btnActive:"bg-gradient-to-br from-amber-600 to-yellow-700", accent:"#d97706",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"א",salary:8310.78},{id:"82",label:"ב",salary:9079.14},
      {id:"90",label:"ג",salary:9058.75},{id:"92",label:"ד",salary:9896.27},
      {id:"95",label:"ה",salary:9652.24},{id:"96",label:"ו",salary:10068.95},{id:"97",label:"ז",salary:11606.83},
      {id:"100",label:"ח",salary:10569.48},{id:"102",label:"ט",salary:11546.79},{id:"104",label:"י",salary:12524.10},
      {id:"110",label:"יא",salary:11682.42},{id:"112",label:"יב",salary:12659.74},{id:"114",label:"יג",salary:13637.05},
      {id:"120",label:"יד",salary:12983.43},{id:"122",label:"טו",salary:13960.70},{id:"124",label:"טז",salary:14938.02},
      {id:"130",label:"יז",salary:14861.40},{id:"132",label:"יח",salary:15838.72},{id:"134",label:"יט",salary:16816.03},
      {id:"140",label:"כ",salary:17387.33},{id:"142",label:"כא",salary:18364.67},{id:"144",label:"כב",salary:19341.97},
      {id:"146",label:"כג",salary:20402.28},{id:"265",label:"כד",salary:27107.91},
    ]},

  "148": { name:"מנהל ומשק - חדש (148)", shortName:"מנהל ומשק 148", number:"148",
    color:"from-teal-600 to-cyan-700", btnActive:"bg-gradient-to-br from-teal-600 to-cyan-700", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"37",salary:7642.21},{id:"101",label:"37א",salary:8232.48},{id:"102",label:"37ב",salary:8822.77},
      {id:"110",label:"38",salary:7946.69},{id:"111",label:"38א",salary:8536.97},{id:"112",label:"38ב",salary:9127.24},
      {id:"120",label:"39",salary:8540.01},{id:"121",label:"39א",salary:9189.61},{id:"122",label:"39ב",salary:9839.21},
      {id:"130",label:"40",salary:9461.36},{id:"131",label:"40א",salary:10110.81},{id:"132",label:"40ב",salary:10760.43},
      {id:"140",label:"41",salary:10538.14},{id:"141",label:"41א",salary:11187.74},{id:"142",label:"41ב",salary:11837.35},
      {id:"150",label:"42",salary:12183.48},{id:"151",label:"42א",salary:12833.10},{id:"152",label:"42ב",salary:13482.70},
      {id:"160",label:"43",salary:14291.48},{id:"161",label:"43א",salary:14940.94},{id:"162",label:"43ב",salary:15590.55},
      {id:"170",label:"44",salary:16149.36},{id:"171",label:"44א",salary:16883.25},{id:"172",label:"44ב",salary:17617.32},
    ]},

  "948": { name:"מנהל ומשק - ותיק (948)", shortName:"מנהל ומשק 948", number:"948",
    color:"from-cyan-600 to-teal-700", btnActive:"bg-gradient-to-br from-cyan-600 to-teal-700", accent:"#0891b2",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"37",salary:7642.21},{id:"101",label:"37א",salary:8232.48},{id:"102",label:"37ב",salary:8822.77},
      {id:"110",label:"38",salary:7946.69},{id:"111",label:"38א",salary:8536.97},{id:"112",label:"38ב",salary:9127.24},
      {id:"120",label:"39",salary:8540.01},{id:"121",label:"39א",salary:9189.61},{id:"122",label:"39ב",salary:9839.21},
      {id:"130",label:"40",salary:9461.36},{id:"131",label:"40א",salary:10110.81},{id:"132",label:"40ב",salary:10760.43},
      {id:"140",label:"41",salary:10538.14},{id:"141",label:"41א",salary:11187.74},{id:"142",label:"41ב",salary:11837.35},
      {id:"150",label:"42",salary:12183.48},{id:"151",label:"42א",salary:12833.10},{id:"152",label:"42ב",salary:13482.70},
      {id:"160",label:"43",salary:14291.48},{id:"161",label:"43א",salary:14940.94},{id:"162",label:"43ב",salary:15590.55},
      {id:"170",label:"44",salary:16149.36},{id:"171",label:"44א",salary:16883.25},{id:"172",label:"44ב",salary:17617.32},
    ]},

  "164": { name:"מומחים - ישן (164)", shortName:"מומחים ישן 164", number:"164",
    color:"from-fuchsia-600 to-purple-700", btnActive:"bg-gradient-to-br from-fuchsia-600 to-purple-700", accent:"#a21caf",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"210",label:"דרגה 1",salary:19509.66},{id:"220",label:"דרגה 2",salary:21070.42},{id:"230",label:"דרגה 3",salary:22631.20},
      {id:"240",label:"דרגה א",salary:23953.78},{id:"250",label:"דרגה ב",salary:25664.79},{id:"260",label:"דרגה ג",salary:27375.76},
      {id:"270",label:"דרגה ד",salary:29086.74},{id:"280",label:"דרגה ה",salary:30797.74},{id:"290",label:"דרגה ו",salary:32508.71},
      {id:"300",label:"דרגה ז",salary:34219.70},
    ]},

  "555": { name:"מומחים - חדש (555)", shortName:"מומחים חדש 555", number:"555",
    color:"from-rose-600 to-pink-700", btnActive:"bg-gradient-to-br from-rose-600 to-pink-700", accent:"#e11d48",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"130",label:"דרגה 11",salary:10354.03},{id:"140",label:"דרגה 12",salary:10963.09},{id:"150",label:"דרגה 13",salary:11572.16},
      {id:"160",label:"דרגה 14",salary:12181.22},{id:"170",label:"דרגה 15",salary:12790.26},{id:"180",label:"דרגה 16",salary:13399.33},
      {id:"190",label:"דרגה 17",salary:14008.39},{id:"200",label:"דרגה 18",salary:14617.46},
      {id:"205",label:"מנהל משימות",salary:15835.58},
      {id:"210",label:"דרגה 1",salary:17245.05},{id:"220",label:"דרגה 2",salary:18624.65},{id:"230",label:"דרגה 3",salary:20004.27},
      {id:"240",label:"דרגה א",salary:21173.32},{id:"250",label:"דרגה ב",salary:22685.71},{id:"260",label:"דרגה ג",salary:24198.09},
      {id:"270",label:"דרגה ד",salary:25710.47},{id:"280",label:"דרגה ה",salary:27222.85},{id:"290",label:"דרגה ו",salary:28735.23},
      {id:"300",label:"דרגה ז",salary:30247.61},
    ]},

  "551": { name:"כלכלנים נבחרים - חדש (551)", shortName:"כלכלנים חדש 551", number:"551",
    color:"from-blue-600 to-indigo-700", btnActive:"bg-gradient-to-br from-blue-600 to-indigo-700", accent:"#2563eb",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"70",label:"36",salary:7661.66},{id:"72",label:"36א",salary:8218.50},{id:"74",label:"36ב",salary:8775.34},
      {id:"80",label:"37",salary:8274.59},{id:"82",label:"37א",salary:8831.44},{id:"84",label:"37ב",salary:9388.28},
      {id:"90",label:"38",salary:9258.44},{id:"92",label:"38א",salary:9815.29},{id:"94",label:"38ב",salary:10372.14},
      {id:"100",label:"39",salary:10091.70},{id:"102",label:"39א",salary:10648.92},{id:"104",label:"39ב",salary:11206.16},
      {id:"110",label:"40",salary:11785.66},{id:"112",label:"40א",salary:12342.88},{id:"114",label:"40ב",salary:12900.10},
      {id:"120",label:"41",salary:13779.70},{id:"122",label:"41א",salary:14336.91},{id:"124",label:"41ב",salary:14894.15},
      {id:"130",label:"42",salary:15273.13},{id:"132",label:"42א",salary:15830.33},{id:"134",label:"42ב",salary:16387.58},
      {id:"140",label:"43",salary:16929.45},{id:"142",label:"43א",salary:18402.08},{id:"144",label:"43ב",salary:18959.32},
      {id:"150",label:"44",salary:19130.28},{id:"152",label:"44א",salary:20794.33},{id:"154",label:"44ב",salary:21424.03},
    ]},

  "564": { name:"לשכות שר ומנכ\"ל - חדש (564)", shortName:"לשכות שר/מנכ\"ל חדש", number:"564",
    color:"from-yellow-600 to-amber-700", btnActive:"bg-gradient-to-br from-yellow-600 to-amber-700", accent:"#ca8a04",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"70",label:"א",salary:7238.44},{id:"72",label:"ב",salary:7472.67},
      {id:"80",label:"ג",salary:8310.78},{id:"82",label:"ד",salary:9079.14},
      {id:"90",label:"ה",salary:9058.75},{id:"92",label:"ו",salary:9896.27},
      {id:"95",label:"ז",salary:9652.24},{id:"96",label:"ח",salary:10068.95},{id:"97",label:"ט",salary:11606.83},
      {id:"100",label:"י",salary:10569.48},{id:"102",label:"יא",salary:11546.79},{id:"104",label:"יב",salary:12524.10},
      {id:"110",label:"יג",salary:11682.42},{id:"112",label:"יד",salary:12659.74},{id:"114",label:"טו",salary:13637.05},
      {id:"120",label:"טז",salary:12983.43},{id:"122",label:"יז",salary:13960.70},{id:"124",label:"יח",salary:14938.02},
      {id:"130",label:"יט",salary:14861.40},{id:"132",label:"כ",salary:15838.72},{id:"134",label:"כא",salary:16816.03},
      {id:"140",label:"כב",salary:17387.33},{id:"142",label:"כג",salary:18364.67},{id:"144",label:"כד",salary:19341.97},
      {id:"146",label:"כה",salary:18431.88},{id:"148",label:"כו",salary:20351.96},{id:"149",label:"כז",salary:21859.53},
      {id:"250",label:"כח",salary:23165.88},{id:"251",label:"כט",salary:23871.32},
      {id:"260",label:"ל",salary:24710.29},{id:"265",label:"לא",salary:25067.34},{id:"270",label:"לב",salary:26259.11},
      {id:"280",label:"לג",salary:27410.26},{id:"290",label:"לד",salary:28628.50},
      {id:"300",label:"לה",salary:29846.73},{id:"310",label:"לו",salary:31064.96},
      {id:"145",label:"לז",salary:33910.74},{id:"150",label:"לח",salary:36029.27},
    ]},

  "568": { name:"סגל בכיר מוביל (568)", shortName:"בכיר מוביל 568", number:"568", noTravel:true,
    color:"from-purple-600 to-violet-700", btnActive:"bg-gradient-to-br from-purple-600 to-violet-700", accent:"#9333ea",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"top0",label:"מינויים מיוחדים - 0 שנים",salary:38849.62,mealAllowance:1070.1},{id:"top1",label:"מינויים מיוחדים - 1 שנה",salary:39438.26,mealAllowance:1086.2},{id:"top2",label:"מינויים מיוחדים - 2+ שנים",salary:40026.89,mealAllowance:1102.3},
      {id:"b1-0",label:"בכיר מוביל ב1 - 0 שנים",salary:35317.84,mealAllowance:972.7},{id:"b1-1",label:"בכיר מוביל ב1 - 1 שנה",salary:35906.46,mealAllowance:988.7},
      {id:"b1-2",label:"בכיר מוביל ב1 - 2 שנים",salary:36495.09,mealAllowance:1004.8},{id:"b1-3",label:"בכיר מוביל ב1 - 3 שנים",salary:37083.74,mealAllowance:1020.9},
      {id:"b1-4",label:"בכיר מוביל ב1 - 4 שנים",salary:37672.36,mealAllowance:1038.0},{id:"b1-5",label:"בכיר מוביל ב1 - 5 שנים",salary:38260.99,mealAllowance:1054.1},
      {id:"b1-6",label:"בכיר מוביל ב1 - 6+ שנים",salary:38849.62,mealAllowance:1070.1},
      {id:"b2-0",label:"בכיר מוביל ב2 - 0 שנים",salary:32963.32,mealAllowance:908.4},{id:"b2-1",label:"בכיר מוביל ב2 - 1 שנה",salary:33551.94,mealAllowance:924.4},
      {id:"b2-2",label:"בכיר מוביל ב2 - 2 שנים",salary:34140.59,mealAllowance:940.5},{id:"b2-3",label:"בכיר מוביל ב2 - 3 שנים",salary:34729.22,mealAllowance:956.6},
      {id:"b2-4",label:"בכיר מוביל ב2 - 4 שנים",salary:35317.84,mealAllowance:972.7},{id:"b2-5",label:"בכיר מוביל ב2 - 5 שנים",salary:35906.46,mealAllowance:988.7},
      {id:"b2-6",label:"בכיר מוביל ב2 - 6+ שנים",salary:36495.09,mealAllowance:1004.8},
      {id:"b3-0",label:"בכיר מוביל ב3 - 0 שנים",salary:30608.79,mealAllowance:843.0},{id:"b3-1",label:"בכיר מוביל ב3 - 1 שנה",salary:31197.42,mealAllowance:859.1},
      {id:"b3-2",label:"בכיר מוביל ב3 - 2 שנים",salary:31786.05,mealAllowance:875.2},{id:"b3-3",label:"בכיר מוביל ב3 - 3 שנים",salary:32374.69,mealAllowance:891.2},
      {id:"b3-4",label:"בכיר מוביל ב3 - 4 שנים",salary:32963.32,mealAllowance:908.4},{id:"b3-5",label:"בכיר מוביל ב3 - 5 שנים",salary:33551.94,mealAllowance:924.4},
      {id:"b3-6",label:"בכיר מוביל ב3 - 6+ שנים",salary:34140.59,mealAllowance:940.5},
    ]},

  "569": { name:"סגל בכיר שאינו מוביל (569)", shortName:"בכיר לא מוביל 569", number:"569", noTravel:true,
    color:"from-slate-600 to-gray-700", btnActive:"bg-gradient-to-br from-slate-600 to-gray-700", accent:"#475569",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"g1-0",label:"בכיר ג1 - 0 שנים",salary:30608.79,mealAllowance:843.0},{id:"g1-1",label:"בכיר ג1 - 1 שנה",salary:31197.42,mealAllowance:859.1},
      {id:"g1-2",label:"בכיר ג1 - 2 שנים",salary:31786.05,mealAllowance:875.2},{id:"g1-3",label:"בכיר ג1 - 3 שנים",salary:32374.69,mealAllowance:891.2},
      {id:"g1-4",label:"בכיר ג1 - 4 שנים",salary:32963.32,mealAllowance:908.4},{id:"g1-5",label:"בכיר ג1 - 5 שנים",salary:33551.94,mealAllowance:924.4},
      {id:"g1-6",label:"בכיר ג1 - 6+ שנים",salary:34140.59,mealAllowance:940.5},
      {id:"g2-0",label:"בכיר ג2 - 0 שנים",salary:25899.76,mealAllowance:713.4},{id:"g2-1",label:"בכיר ג2 - 1 שנה",salary:26488.39,mealAllowance:729.5},
      {id:"g2-2",label:"בכיר ג2 - 2 שנים",salary:27077.02,mealAllowance:745.6},{id:"g2-3",label:"בכיר ג2 - 3 שנים",salary:27665.64,mealAllowance:761.6},
      {id:"g2-4",label:"בכיר ג2 - 4 שנים",salary:28254.28,mealAllowance:777.7},{id:"g2-5",label:"בכיר ג2 - 5 שנים",salary:28842.91,mealAllowance:793.8},
      {id:"g2-6",label:"בכיר ג2 - 6 שנים",salary:29431.53,mealAllowance:809.8},{id:"g2-7",label:"בכיר ג2 - 7 שנים",salary:30020.17,mealAllowance:825.9},
      {id:"g2-8",label:"בכיר ג2 - 8+ שנים",salary:30608.79,mealAllowance:843.0},
    ]},

  "557": { name:"בכירים ותיקים - צמודי יוקר (557)", shortName:"בכירים ותיקים 557", number:"557", noTravel:true,
    color:"from-gray-700 to-zinc-800", btnActive:"bg-gradient-to-br from-gray-700 to-zinc-800", accent:"#374151",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"340",label:"רמה 340",salary:33910.75,mealAllowance:1058},{id:"350",label:"רמה 350",salary:36028.42,mealAllowance:1058},
      {id:"360",label:"רמה 360",salary:38148.43,mealAllowance:1058},{id:"370",label:"רמה 370",salary:43025.14,mealAllowance:1058},
      {id:"450",label:"רמה 450 (מנהל מינהל האדמה)",salary:49786.19,mealAllowance:1058},
    ]},

  "864": { name:"בכירים בלשכות שר ומנכ\"ל (864)", shortName:"בכירים לשכות 864", number:"864",
    color:"from-stone-600 to-neutral-700", btnActive:"bg-gradient-to-br from-stone-600 to-neutral-700", accent:"#57534e",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"145",label:"דרגה 7",salary:33910.74},{id:"150",label:"דרגה 8",salary:36029.27},
    ]},

  "287": { name:"צוערים - ישן (287)", shortName:"צוערים ישן 287", number:"287",
    color:"from-orange-600 to-amber-600", btnActive:"bg-gradient-to-br from-orange-600 to-amber-600", accent:"#ea580c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"409",label:"צוער",salary:7318.73},{id:"410",label:"צוער ותיק",salary:8006.77},{id:"411",label:"צוע.א1",salary:7814.86},
      {id:"412",label:"צוע.א2",salary:8310.98},{id:"413",label:"צוע.ב1 ותיק",salary:8502.87},{id:"414",label:"צוע.ב2 ותיק",salary:8998.99},
    ]},

  "554": { name:"צוערים - חדש (554)", shortName:"צוערים חדש 554", number:"554",
    color:"from-amber-600 to-orange-700", btnActive:"bg-gradient-to-br from-amber-600 to-orange-700", accent:"#d97706",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"409",label:"צוער",salary:6469.21},{id:"410",label:"צוער ותיק",salary:7077.38},{id:"411",label:"צוע.א1",salary:6907.74},
      {id:"412",label:"צוע.א2",salary:7346.27},{id:"413",label:"צוע.ב1 ותיק",salary:7515.89},{id:"414",label:"צוע.ב2 ותיק",salary:7954.44},
    ]},

  "167": { name:"יחידת היעדים (167)", shortName:"יחידת היעדים", number:"167",
    color:"from-indigo-700 to-blue-800", btnActive:"bg-gradient-to-br from-indigo-700 to-blue-800", accent:"#3730a3",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"101",label:"ראש ענף 1",salary:11713.71},{id:"102",label:"ראש ענף 2",salary:12402.76},{id:"103",label:"ראש ענף 3",salary:13091.79},
      {id:"111",label:"מרכז בכיר 1",salary:13091.79},{id:"112",label:"מרכז בכיר 2",salary:14469.88},{id:"113",label:"מרכז בכיר 3",salary:15847.97},
      {id:"121",label:"מנהל תחום תיאום 1",salary:14469.88},{id:"122",label:"מנהל תחום תיאום 2",salary:15847.97},{id:"123",label:"מנהל תחום תיאום 3",salary:17915.09},
      {id:"131",label:"מנהל תחום מעקב 1",salary:14469.88},{id:"132",label:"מנהל תחום מעקב 2",salary:15847.97},{id:"133",label:"מנהל תחום מעקב 3",salary:17915.09},
      {id:"134",label:"מנהל תחום מעקב 4",salary:21360.30},
    ]},

  "168": { name:"חוקרי חקירות שוטרים (168)", shortName:"חוקרי שוטרים 168", number:"168",
    color:"from-blue-800 to-indigo-900", btnActive:"bg-gradient-to-br from-blue-800 to-indigo-900", accent:"#1e3a8a",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"צוער",salary:7438.28},{id:"20",label:"חוקר א'",salary:8114.49},{id:"21",label:"חוקר א' + גמול א'",salary:8639.90},{id:"22",label:"חוקר א' + א'+ב'",salary:9165.32},
      {id:"30",label:"חוקר ב'",salary:9061.19},{id:"31",label:"חוקר ב' + גמול א'",salary:9586.61},{id:"32",label:"חוקר ב' + א'+ב'",salary:10112.00},
      {id:"40",label:"חוקר ג'",salary:9872.62},{id:"41",label:"חוקר ג' + גמול א'",salary:10398.04},{id:"42",label:"חוקר ג' + א'+ב'",salary:10923.46},
      {id:"50",label:"חוקר בכיר א'",salary:10819.31},{id:"51",label:"חוקר בכיר א' + א'",salary:11344.73},{id:"52",label:"חוקר בכיר א' + א'+ב'",salary:11870.15},
      {id:"60",label:"חוקר בכיר ב'",salary:11766.01},{id:"61",label:"חוקר בכיר ב' + א'",salary:12291.43},{id:"62",label:"חוקר בכיר ב' + א'+ב'",salary:12816.85},
      {id:"70",label:"חוקר בכיר ג'",salary:12712.71},{id:"71",label:"חוקר בכיר ג' + א'",salary:13238.12},{id:"72",label:"חוקר בכיר ג' + א'+ב'",salary:13763.52},
      {id:"75",label:"ראש שלוחה",salary:13536.78},{id:"76",label:"ראש שלוחה + א'",salary:14062.21},{id:"77",label:"ראש שלוחה + א'+ב'",salary:14587.61},
      {id:"80",label:"סגן ראש צוות",salary:13659.38},{id:"81",label:"סגן ראש צוות + א'",salary:14250.48},{id:"82",label:"סגן ראש צוות + א'+ב'",salary:14841.57},
      {id:"90",label:"ראש צוות",salary:15011.81},{id:"91",label:"ראש צוות + א'",salary:15602.91},{id:"92",label:"ראש צוות + א'+ב'",salary:16193.99},
    ]},

  "109": { name:"עובדי אית\"ן ואית\"ן אבטחה (109)", shortName:"עובדי אית\"ן", number:"109",
    color:"from-emerald-700 to-green-800", btnActive:"bg-gradient-to-br from-emerald-700 to-green-800", accent:"#047857",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"דרגה 1",salary:6286.13},{id:"20",label:"דרגה 2",salary:6436.47},{id:"30",label:"דרגה 3",salary:6589.13},
      {id:"40",label:"דרגה 4",salary:6741.42},{id:"50",label:"דרגה 5",salary:7198.82},{id:"60",label:"דרגה 6",salary:7955.80},
      {id:"100",label:"דרגה 10",salary:6809.53},{id:"110",label:"דרגה 11",salary:7271.54},{id:"120",label:"דרגה 12",salary:8036.16},
    ]},

  "384": { name:"מאבטחי מתקן (384)", shortName:"מאבטחי מתקן", number:"384",
    color:"from-zinc-600 to-stone-700", btnActive:"bg-gradient-to-br from-zinc-600 to-stone-700", accent:"#52525b",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"מאבטח מתקן",salary:6930.52},{id:"20",label:"קורס אחיד",salary:7493.35},{id:"30",label:"קב\"ט",salary:9136.75},
    ]},

  "387": { name:"מאבטחים (387)", shortName:"מאבטחים", number:"387",
    color:"from-slate-700 to-gray-800", btnActive:"bg-gradient-to-br from-slate-700 to-gray-800", accent:"#334155",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"810",label:"מאבטח 1",salary:6239.48},{id:"820",label:"מאבטח 2",salary:6357.53},{id:"830",label:"מאבטח 3",salary:6814.74},
      {id:"840",label:"מדריך ירי/קמ\"ג 1",salary:7321.59},{id:"850",label:"מדריך ירי/קמ\"ג 2",salary:7784.52},
      {id:"815",label:"מאבטח 1 ב.מ.",salary:6504.37},{id:"825",label:"מאבטח 2 ב.מ.",salary:6626.56},{id:"835",label:"מאבטח 3 ב.מ.",salary:7103.60},
      {id:"860",label:"חמוש 1",salary:7524.68},{id:"870",label:"חמוש 2",salary:7650.08},{id:"880",label:"חמוש 3",salary:8214.42},
      {id:"890",label:"לא חמוש 1",salary:7002.12},{id:"900",label:"לא חמוש 2",salary:7148.43},{id:"910",label:"לא חמוש 3",salary:7650.08},
      {id:"920",label:"מדריך ירי 1",salary:8778.77},{id:"930",label:"מדריך ירי 2",salary:10030.59},
    ]},

  "522": { name:"עובדי המטה לביטחון לאומי (522)", shortName:"מטה ביטחון לאומי", number:"522",
    color:"from-red-800 to-red-900", btnActive:"bg-gradient-to-br from-red-800 to-red-900", accent:"#991b1b",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"130",label:"עוזר ראש מדור 1",salary:10371.28},{id:"140",label:"עוזר ראש מדור 2",salary:11667.70},
      {id:"150",label:"עוזר ראש מדור 3",salary:12964.10},{id:"160",label:"עוזר ראש מדור 4",salary:14260.51},
      {id:"170",label:"ראש מדור 1",salary:15556.92},{id:"180",label:"ראש מדור 2",salary:16853.32},{id:"190",label:"ראש מדור 3",salary:18149.73},
      {id:"200",label:"ראש ענף 1",salary:19446.14},{id:"210",label:"ראש ענף 2",salary:20742.57},{id:"220",label:"ראש ענף 3",salary:22038.98},
      {id:"230",label:"ראש מחלקה 1",salary:23335.38},{id:"240",label:"ראש מחלקה 2",salary:24631.79},{id:"250",label:"ראש מחלקה 3",salary:25928.20},
      {id:"260",label:"ראש חטיבה 1",salary:29817.43},{id:"270",label:"ראש חטיבה 2",salary:31113.84},{id:"280",label:"ראש חטיבה 3",salary:32766.77},
      {id:"290",label:"ראש אגף",salary:34694.51},{id:"300",label:"סגן ראש המל\"ל",salary:42004.97},
      {id:"310",label:"סגן ראש המל\"ל (חדש)",salary:43020.50},{id:"320",label:"משנה לראש המל\"ל",salary:44164.97},
    ]},

  "965": { name:"מומחים בשירותי הביטחון (965)", shortName:"מומחים ביטחון 965", number:"965",
    color:"from-red-700 to-rose-800", btnActive:"bg-gradient-to-br from-red-700 to-rose-800", accent:"#b91c1c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"18",salary:7889.54},{id:"95",label:"38",salary:9467.45},{id:"100",label:"39",salary:11045.35},
      {id:"110",label:"40",salary:12623.24},{id:"120",label:"41",salary:14201.16},{id:"130",label:"42",salary:15779.05},{id:"140",label:"43",salary:17356.97},
      {id:"210",label:"דרגה 1",salary:18844.41},{id:"220",label:"דרגה 2",salary:20351.96},{id:"230",label:"דרגה 3",salary:21859.53},
      {id:"240",label:"דרגה א",salary:23137.01},{id:"250",label:"דרגה ב",salary:24789.67},{id:"260",label:"דרגה ג",salary:26442.30},
      {id:"270",label:"דרגה ד",salary:28094.95},{id:"280",label:"דרגה ה",salary:29747.60},{id:"290",label:"דרגה ו",salary:31400.24},
      {id:"300",label:"דרגה ז",salary:33052.88},{id:"310",label:"דרגה ח",salary:34226.34},{id:"320",label:"דרגה ט",salary:35856.20},
      {id:"330",label:"דרגה י",salary:37486.01},{id:"340",label:"דרגה יא",salary:39789.20},{id:"350",label:"דרגה יב",salary:41319.54},
      {id:"360",label:"דרגה יג",salary:42375.48},{id:"370",label:"דרגה יד",salary:44005.29},{id:"380",label:"דרגה טו",salary:45635.13},
    ]},

  "122": { name:"מינהל תעופה אזרחי (122)", shortName:"תעופה אזרחי 122", number:"122",
    color:"from-sky-500 to-cyan-600", btnActive:"bg-gradient-to-br from-sky-500 to-cyan-600", accent:"#0ea5e9",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"10",label:"טייסים 1",salary:23605.03},{id:"11",label:"טייסים 1א",salary:24258.30},{id:"12",label:"טייסים 1ב",salary:24912.95},
      {id:"20",label:"טייסים 2",salary:20784.04},{id:"21",label:"טייסים 2א",salary:21437.69},{id:"22",label:"טייסים 2ב",salary:22092.37},
      {id:"30",label:"טייסים 3",salary:18558.11},{id:"31",label:"טייסים 3א",salary:19210.97},{id:"32",label:"טייסים 3ב",salary:19865.63},
      {id:"40",label:"טייסים 4",salary:17072.44},{id:"41",label:"טייסים 4א",salary:17726.45},{id:"42",label:"טייסים 4ב",salary:18381.12},
      {id:"50",label:"טייסים 5",salary:15588.03},{id:"51",label:"טייסים 5א",salary:16241.95},{id:"52",label:"טייסים 5ב",salary:16896.60},
      {id:"60",label:"טייסים 6",salary:14103.64},{id:"61",label:"טייסים 6א",salary:14757.45},{id:"62",label:"טייסים 6ב",salary:15412.11},
      {id:"70",label:"טייסים 7",salary:13360.79},{id:"71",label:"טייסים 7א",salary:14015.19},{id:"72",label:"טייסים 7ב",salary:14669.87},
      {id:"80",label:"מהנדסים 8",salary:15326.16},{id:"81",label:"מהנדסים 8א",salary:16076.84},{id:"82",label:"מהנדסים 8ב",salary:16827.80},
      {id:"90",label:"מהנדסים 9",salary:14049.19},{id:"91",label:"מהנדסים 9א",salary:14799.68},{id:"92",label:"מהנדסים 9ב",salary:15550.66},
      {id:"100",label:"מהנדסים 10",salary:12772.23},{id:"101",label:"מהנדסים 10א",salary:13522.54},{id:"102",label:"מהנדסים 10ב",salary:14273.48},
      {id:"110",label:"מהנדסים 11",salary:11495.27},{id:"111",label:"מהנדסים 11א",salary:12245.39},{id:"112",label:"מהנדסים 11ב",salary:12996.35},
      {id:"120",label:"מהנדסים 12",salary:10218.31},{id:"121",label:"מהנדסים 12א",salary:10968.23},{id:"122",label:"מהנדסים 12ב",salary:11719.20},
      {id:"130",label:"מהנדסים 13",salary:9366.56},{id:"131",label:"מהנדסים 13א",salary:10116.78},{id:"132",label:"מהנדסים 13ב",salary:10867.75},
      {id:"140",label:"מהנדסים 14",salary:8514.81},{id:"141",label:"מהנדסים 14א",salary:9265.35},{id:"142",label:"מהנדסים 14ב",salary:10016.31},
      {id:"150",label:"מהנדסים 15",salary:7663.08},{id:"151",label:"מהנדסים 15א",salary:8413.90},{id:"152",label:"מהנדסים 15ב",salary:9164.86},
      {id:"160",label:"הנדסאים 16",salary:9440.46},{id:"161",label:"הנדסאים 16א",salary:10272.77},{id:"162",label:"הנדסאים 16ב",salary:11105.36},
      {id:"170",label:"הנדסאים 17",salary:8496.67},{id:"171",label:"הנדסאים 17א",salary:9328.74},{id:"172",label:"הנדסאים 17ב",salary:10161.38},
      {id:"180",label:"הנדסאים 18",salary:7552.89},{id:"181",label:"הנדסאים 18א",salary:8384.75},{id:"182",label:"הנדסאים 18ב",salary:9217.36},
      {id:"190",label:"הנדסאים 19",salary:6607.80},{id:"191",label:"הנדסאים 19א",salary:7440.69},{id:"192",label:"הנדסאים 19ב",salary:8273.30},
      {id:"210",label:"מפקח מובילים א",salary:29817.43},{id:"220",label:"מפקח מובילים ב",salary:31113.84},{id:"230",label:"מפקח מובילים ג",salary:32410.24},
      {id:"240",label:"מפקח מובילים ד",salary:33706.66},{id:"250",label:"מפקח מובילים ה",salary:35003.08},
      {id:"260",label:"מפקח ראשי ו",salary:36299.49},{id:"270",label:"מפקח ראשי ז",salary:37595.90},
      {id:"280",label:"מפקח ראשי ח",salary:38892.30},{id:"290",label:"מפקח ראשי ט",salary:40188.71},{id:"300",label:"מפקח ראשי י",salary:41485.12},
      {id:"a1",label:"מנהל אגף בכיר - תפעול אוויריים",salary:51856.41},
      {id:"a2",label:"מנהל תחום בכיר - ייריווא",salary:49263.59},
      {id:"a3",label:"מנהל תחום בכיר - רישוי טייסי עובדים",salary:38892.30},
    ]},

  "88": { name:"בוחני רישוי נהיגה (88 - שעתי)", shortName:"בוחני נהיגה 88", number:"88",
    color:"from-violet-500 to-indigo-600", btnActive:"bg-gradient-to-br from-violet-500 to-indigo-600", accent:"#6d28d9",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"1",label:"רמה 1 (שעתי)",salary:56.83*182},{id:"2",label:"רמה 2 (שעתי)",salary:58.31*182},
      {id:"3",label:"רמה 3 (שעתי)",salary:59.75*182},{id:"4",label:"רמה 4 (שעתי)",salary:61.17*182},
    ]},

  "589": { name:"עובדי חדר מצב קיברנטי (589)", shortName:"חדר מצב קיברנטי", number:"589",
    color:"from-violet-700 to-purple-800", btnActive:"bg-gradient-to-br from-violet-700 to-purple-800", accent:"#6d28d9",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"100",label:"עובד חדר מצב קיברנטי (שעתי)",salary:59.92*182}]},

  "590": { name:"קשרים - משרד ראש הממשלה (590)", shortName:"קשרים מרה\"מ", number:"590",
    color:"from-cyan-700 to-teal-800", btnActive:"bg-gradient-to-br from-cyan-700 to-teal-800", accent:"#0e7490",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"100",label:"קשר האזנה 1 (שעתי)",salary:35.61*182},{id:"110",label:"קשר האזנה 2 (שעתי)",salary:36.75*182},
      {id:"120",label:"קשר האזנה 3 (שעתי)",salary:38.47*182},{id:"130",label:"קשר האזנה חמ\"א (שעתי)",salary:40.54*182},
      {id:"200",label:"קשר תקשורת זרה 1 (שעתי)",salary:37.32*182},{id:"210",label:"קשר תקשורת זרה 2 (שעתי)",salary:38.13*182},
      {id:"220",label:"קשר תקשורת זרה 3 (שעתי)",salary:39.38*182},{id:"230",label:"קשר תקשורת זרה חמ\"א (שעתי)",salary:41.68*182},
    ]},

  "487": { name:"סוקרים - ישן (487)", shortName:"סוקרים 487", number:"487",
    color:"from-rose-500 to-red-600", btnActive:"bg-gradient-to-br from-rose-500 to-red-600", accent:"#f43f5e",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"80",label:"סוקרי טלפון (שעתי)",salary:33.62*182},{id:"90",label:"סוקרי עסקים (שעתי)",salary:34.40*182},
      {id:"95",label:"סוקרי משפחות (שעתי)",salary:35.22*182},
    ]},

  "584": { name:"סוקרים - חדש (584)", shortName:"סוקרים חדש 584", number:"584",
    color:"from-pink-500 to-rose-600", btnActive:"bg-gradient-to-br from-pink-500 to-rose-600", accent:"#ec4899",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"170",label:"סוקרי טלפון (שעתי)",salary:40.55*182},{id:"175",label:"סוקרי טלפון א (שעתי)",salary:42.17*182},{id:"176",label:"סוקרי טלפון ב (שעתי)",salary:44.27*182},
      {id:"180",label:"סוקרי עסקים שטח (שעתי)",salary:41.51*182},{id:"185",label:"סוקרי עסקים שטח א (שעתי)",salary:43.16*182},{id:"186",label:"סוקרי עסקים שטח ב (שעתי)",salary:44.02*182},
      {id:"190",label:"סוקרי משפחות (שעתי)",salary:41.90*182},{id:"195",label:"סוקרי משפחות א (שעתי)",salary:44.40*182},{id:"196",label:"סוקרי משפחות ב (שעתי)",salary:46.62*182},
    ]},

  "585": { name:"סוקרים (585)", shortName:"סוקרים 585", number:"585",
    color:"from-red-500 to-pink-600", btnActive:"bg-gradient-to-br from-red-500 to-pink-600", accent:"#ef4444",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"13",label:"סוקרי טלפון (שעתי)",salary:34.11*182},{id:"14",label:"סוקרי עסקים ושטח (שעתי)",salary:34.91*182},
      {id:"15",label:"סוקרי משפחות (שעתי)",salary:35.73*182},
    ]},

  "586": { name:"פיקוח אלקטרוני - משרד הפנים (586)", shortName:"פיקוח אלקטרוני 586", number:"586",
    color:"from-violet-600 to-indigo-700", btnActive:"bg-gradient-to-br from-violet-600 to-indigo-700", accent:"#7c3aed",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"70",label:"רמה 1 (שעתי)",salary:39.96*182},{id:"80",label:"רמה 2 (שעתי)",salary:42.04*182},{id:"90",label:"רמה 3 (שעתי)",salary:44.11*182},
    ]},

  "381": { name:"מנהלי חטיבות ביחידת תקשורת - אוצר (381)", shortName:"מנהלי חטיבות תקשורת", number:"381",
    color:"from-stone-600 to-zinc-700", btnActive:"bg-gradient-to-br from-stone-600 to-zinc-700", accent:"#78716c",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"1",label:"מנהל חטיבה",salary:29966.00}]},

  "509": { name:"מרגתמי ביטחון - משרד החוץ (509)", shortName:"מרגתמי ביטחון חוץ", number:"509",
    color:"from-zinc-600 to-slate-700", btnActive:"bg-gradient-to-br from-zinc-600 to-slate-700", accent:"#71717a",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[{id:"100",label:"מאבטח (שעתי)",salary:37.60*182}]},

  "764": { name:"נהג שר ומנכ\"ל (764)", shortName:"נהג שר 764", number:"764",
    color:"from-neutral-600 to-stone-700", btnActive:"bg-gradient-to-br from-neutral-600 to-stone-700", accent:"#737373",
    pensionEmployee:0.07,pensionEmployer:0.135,studyFundEmployee:0.025,studyFundEmployer:0.075,
    grades:[
      {id:"500",label:"נ.שר א",salary:14681.74},{id:"502",label:"נ.שר ב",salary:15268.76},{id:"506",label:"נ.שר ג",salary:15878.89},
      {id:"520",label:"נ.סגן.שר א",salary:13513.84},{id:"522",label:"נ.סגן.שר ב",salary:14054.66},{id:"526",label:"נ.סגן.שר ג",salary:14617.02},
      {id:"540",label:"נ.מ.נ.מ א",salary:12345.97},{id:"542",label:"נ.מ.נ.מ ב",salary:12840.56},{id:"546",label:"נ.מ.נ.מ ג",salary:13353.63},
      {id:"508",label:"נ.רה\"מ ג'",salary:17020.27},
    ]},

};

export const CAR_PACKAGES = {
  "none":    { label: "ללא רכב", value: 0, isCar: false },
  "level2":  { label: "רכב שירות - רמה ב'", value: 1022, isCar: true, insurance: 444 },
  "level3":  { label: "רכב שירות - רמה ג'", value: 1228, isCar: true, insurance: 570 },
  "level4":  { label: "רכב שירות - רמה ד'", value: 1403, isCar: true, insurance: 676 },
};

// יישובים מזכים — הנחת מס הכנסה סעיף 11 לפקודה
export const LOCALITY_GROUPS = {
  "1":  { rate:0.07, monthlyCeiling:12220, maxMonthlyBenefit:855  },
  "2":  { rate:0.10, monthlyCeiling:15000, maxMonthlyBenefit:1500 },
  "3":  { rate:0.12, monthlyCeiling:15500, maxMonthlyBenefit:1860 },
  "4":  { rate:0.12, monthlyCeiling:15550, maxMonthlyBenefit:1866 },
  "5":  { rate:0.12, monthlyCeiling:17770, maxMonthlyBenefit:2132 },
  "6":  { rate:0.12, monthlyCeiling:18880, maxMonthlyBenefit:2265 },
  "7":  { rate:0.14, monthlyCeiling:18330, maxMonthlyBenefit:2566 },
  "8":  { rate:0.14, monthlyCeiling:21660, maxMonthlyBenefit:3032 },
  "9":  { rate:0.16, monthlyCeiling:18880, maxMonthlyBenefit:3020 },
  "10": { rate:0.18, monthlyCeiling:20450, maxMonthlyBenefit:3681 },
  "11": { rate:0.18, monthlyCeiling:21660, maxMonthlyBenefit:3898 },
  "12": { rate:0.20, monthlyCeiling:21660, maxMonthlyBenefit:4332 },
  "13": { rate:0.20, monthlyCeiling:22320, maxMonthlyBenefit:4464 },
};
export const LOCALITY_MAP = {
  "אבו סנאן":3,"אבו קורינאת (יישוב)":5,"אבו תלול":5,"אביבים":7,"אביגיל":2,"אבירים":5,"אבן מנחם":5,"אבן שמואל":1,"אבני איתן":5,"אבנת":5,
  "אבשלום":13,"אדורה":1,"אדמית":7,"אודם":5,"אוהד":13,"אום בטין":5,"אופקים":11,"אור הגנוז":5,"אור הנר":13,"אורטל":5,"אורים":1,"אחוזם":1,
  "אחיהוד":1,"איבים":13,"איילת השחר":1,"אילון":5,"אילות":5,"איתן":1,"אל-רום":5,"אל סייד":5,"אלומות":5,"אלוני הבשן":7,"אלי-עד":5,"אליאב":1,
  "אליפז":5,"אליפלט":1,"אלמגור":1,"אלקוש":5,"אמירים":2,"אמנון":1,"אמציה":1,"אניעם":1,"אספר":5,"אפיק":5,"אפיקים":5,"ארגמן":5,
  "ארז":13,"אשבול":1,"אשבל":1,"אשדות יעקב (איחוד)":5,"אשדות יעקב (מאוחד)":5,"אשחר":1,"אשכולות":1,"אשל הנשיא":1,"אשלים":1,"אשרת":1,
  "באר אורה":5,"באר מילכה":5,"בארי":13,"בוסתן הגליל":1,"בוקעאתא":5,"בטחה":1,"ביר הדאג'":5,"בירייה":2,"בית ג'ן":8,"בית הגדי":1,"בית הלל":5,
  "בית העמק":1,"בית הערבה":2,"בית זרע":5,"בית חוגלה":2,"בית יוסף":5,"בית קמה":1,"בית שאן":5,"בן עמי":2,"בני דקלים":1,"בני יהודה":2,
  "בני נצרים":13,"בענה":3,"בצת":4,"בר יוחאי":5,"ברור חיל":13,"ברוש":1,"ברעם":7,
  "ג'דיידה-מכר":3,"ג'ולס":1,"ג'ש (גוש חלב)":5,"גבולות":1,"גבים":13,"גבעולים":1,"גבעות בר":1,"גבעת יואב":1,"גברעם":13,"גדות":1,
  "גונן":1,"גורן":5,"גורנות הגליל":5,"גילון":1,"גילת":1,"גינוסר":1,"גיתה":1,"געתון":2,"גרופית":5,"גשור":1,"גשר":5,"גשר הזיו":2,
  "דביר":1,"דגניה א'":5,"דגניה ב'":5,"דוב\"ב":7,"דורות":13,"דייר אל-אסד":3,"דייר חנא":3,"דימונה":10,"דישון":7,"דלתון":5,"דן":5,"דפנה":7,"דקל":13,
  "דריג'את":5,"האון":5,"הגושרים":5,"הילה":5,"הר עמשא":1,"הררית":1,
  "זיקים":13,"זמרת":13,"זרועה":1,"חגי":1,"חד-נס":1,"חולית":13,"חולתה":1,"חוסן":5,"חוסנייה":5,"חוקוק":1,"חורה":11,"חורפיש":8,"חזון":2,"חלוץ":1,
  "חלץ":1,"חמדיה":5,"חמדת":5,"חניתה":7,"חספין":5,"חצבה":5,"חצור הגלילית":5,"חצרים":1,"חרשים":1,
  "טבריה":5,"טובא-זנגרייה":5,"טירת צבי":5,"טל-אל":1,"טללים":1,"טמרה":3,"טנא":1,"טפחות":2,
  "יאנוח-ג'ת":3,"יבול":13,"יד מרדכי":13,"יהל":5,"יובל":7,"יובלים":1,"יונתן":5,"יושיביה":5,"יחיעם":1,"יטבתה":5,"יכיני":13,"יסוד המעלה":5,"יסעור":1,"יעד":1,
  "יערה":7,"יפית":5,"יפתח":7,"יראון":7,"ירדנה":5,"ירוחם":10,"ירכא":5,"ישע":13,"יתד":13,
  "כאבול":3,"כברי":2,"כדיתה":5,"כורזים":1,"כחל":1,"כחלה":5,"כיסופים":13,"כישור":1,"כליל":1,"כלנית":2,"כמאנה":5,"כמהין":5,"כמון":1,"כנף":1,
  "כנרת (מושבה)":5,"כנרת (קבוצה)":5,"כסיפה":11,"כסרא-סמיע":8,"כפר בלום":5,"כפר גלעדי":5,"כפר הנשיא":1,"כפר חושן":5,"כפר חנניה":2,"כפר חרוב":5,
  "כפר יאסיף":1,"כפר מימון":13,"כפר מסריק":1,"כפר סאלד":5,"כפר עזה":13,"כפר ראש הנקרה":7,"כפר רוזנואלד (זרעית)":7,"כפר רופין":5,"כפר שמאי":2,
  "כרכום":1,"כרם בן זמרה":5,"כרם שלום":13,"כרמי קטיף":1,"כרמיאל":1,"כרמייה":13,"כרמים":1,"כרמל":1,
  "לבון":1,"לבנים":2,"להב":1,"להבות הבשן":1,"לוחמי הגיטאות":1,"לוטם":1,"לוטן":5,"לימן":2,"לפידות":1,"לקיה":11,
  "מבוא חמה":5,"מבועים":1,"מבטחים":13,"מבקיעים":13,"מג'ד אל-כרום":3,"מג'דל שמס":12,"מגאר":5,"מגדל":2,"מגן":13,"מדרשת בן גוריון":1,"מולדה":5,"מורן":1,
  "מזרעה":3,"מחולה":5,"מחנה טלי":1,"מחנה יוכבד":2,"מחנה יפה":1,"מחנה יתיר":1,"מחניים":1,"מטולה":7,"מיצר":5,"מירון":5,"מכחול":5,"מכמנים":1,"מלילות":1,
  "מלכייה":7,"מנוף":1,"מנות":5,"מנחמיה":5,"מנרה":7,"מסדה":5,"מסלול":1,"מסעדה":8,"מעגלים":1,"מעגן":5,"מעוז חיים":5,"מעון":5,"מעונה":5,"מעיין ברוך":7,
  "מעיליא":2,"מעלה גמלא":1,"מעלות-תרשיחא":8,"מפלסים":13,"מצדות יהודה":2,"מצובה":2,"מצפה רמון":11,"מצפה שלם":1,"מרגליות":7,"מרום גולן":5,
  "מרחב עם":2,"משאבי שדה":1,"משגב עם":7,"משואה":5,"משכיות":5,"משמר הירדן":1,"משמר הנגב":1,"מתת":7,
  "נאות גולן":1,"נאות הכיכר":5,"נאות מרדכי":5,"נאות סמדר":5,"נבטים":1,"נגוהות":1,"נהרייה":6,"נוב":5,"נווה":13,"נווה אור":5,"נווה אטי\"ב":5,
  "נווה איתן":5,"נווה זוהר":1,"נווה זיו":5,"נווה חריף":5,"נועם":1,"נחל עוז":13,"נחף":5,"נטועה":7,"נטור":5,"נטע":1,"ניצנה (קהילת חינוך)":5,
  "ניצני סיני":5,"ניר יצחק":13,"ניר משה":1,"ניר עוז":13,"ניר עם":13,"ניר עקיבא":1,"נירים":13,"נמרוד":5,"נס עמים":1,"נעמה":5,"נתיב העשרה":13,
  "נתיב השיירה":1,"נתיבות":9,
  "סאג'ור":3,"סאסא":5,"סוסיה":2,"סופה":13,"סח'נין":3,"סלמה":5,"סמר":5,"סנסנה":1,"סעד":13,"סער":2,"ספיר":5,
  "ע'ג'ר":12,"עבדון":5,"עברון":2,"עזוז":5,"עידן":5,"עין אל-אסד":5,"עין גב":1,"עין גדי":1,"עין הבשור":13,"עין המפרץ":1,"עין הנציב":5,
  "עין השלושה":13,"עין זיוון":5,"עין חצבה":5,"עין יהב":5,"עין יעקב":5,"עין קנייא":8,"עין תמר":5,"עיר אובות":1,"עכו":3,"עלומים":13,"עלמה":5,
  "עמוקה":2,"עמיעד":1,"עמיעוז":13,"עמיר":5,"עמקה":1,"עצמון שגב":1,"עראבה":5,"עראמשה":7,"ערב אל נעים":5,"ערד":11,"ערערה-בנגב":11,"עשהאל":1,"עתניאל":2,
  "פארן":5,"פדויים":1,"פורייה – כפר עבודה":1,"פורייה – נווה עובד":1,"פורייה עילית":1,"פטיש":1,"פלך":1,"פני חבר":5,"פסוטה":5,"פעמי תשז":1,"פצאל":5,
  "פקיעין (בוקייעה)":8,"פקיעין חדשה":5,"פרוד":2,"פרי גן":13,
  "צאלים":5,"צביה":1,"צבעון":5,"צוחר":13,"צופר":5,"צוקים":5,"צוריאל":5,"צורית":1,"צפת":5,
  "קדמת צבי":1,"קדרים":1,"קורנית":1,"קטורה":5,"קלחים":1,"קליה":2,"קלע":1,"קצר א-סר":5,"קצרין":2,"קריית ארבע":5,"קריית שמונה":12,"קשת":5,
  "ראמה":1,"ראס אל-עין":5,"ראש פינה":1,"רביבים":2,"רביד":2,"רגבה":1,"רהט":9,"רוח מדבר":1,"רוחמה":1,"רועי":5,"רותם":5,"רחוב":5,"ריחאנייה":5,
  "רמות":1,"רמות נפתלי":5,"רמת טראמפ":1,"רמת מגשימים":5,"רנן":1,"רעים":13,"רקפת":1,"רתמים":1,
  "שאר ישוב":5,"שבי דרום":1,"שבי ציון":1,"שגב-שלום":11,"שדה אליהו":5,"שדה אליעזר":5,"שדה בוקר":1,"שדה דוד":1,"שדה נחום":5,"שדה נחמיה":5,
  "שדה ניצן":13,"שדה צבי":1,"שדי אברהם":13,"שדי תרומות":5,"שדמות מחולה":5,"שדרות":13,"שובה":13,"שובל":1,"שומרה":7,"שומרייה":5,"שוקדה":13,
  "שורשים":1,"שזור":2,"שחרות":2,"שיבולים":1,"שיזף":1,"שיטים":2,"שייח' דנון":5,"שכניה":1,"שלווה":1,"שלווה במדבר":1,"שלומי":12,"שלומית":13,
  "שמיר":5,"שמעה":2,"שמרת":1,"שני (ליבנה)":1,"שניר":5,"שעב":5,"שעל":1,"שער הגולן":5,"שפר":2,"שקף":1,"שרשרת":1,"שתולה":7,
  "תאשור":1,"תדהר":1,"תובל":1,"תושייה":13,"תל קציר":5,"תל שבע":11,"תל תאומים":5,"תלם":1,"תלמי אליהו":13,"תלמי ביל\"ו":1,"תלמי יוסף":13,
  "תלמים":1,"תפרח":5,"תקומה":13,"תרבין א-צאנע (יישוב)":5,
};
