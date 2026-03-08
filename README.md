# מחשבון שכר שירות המדינה

מחשבון שכר מקיף לעובדי שירות המדינה, עדכני לשנת 2025.

## ארכיטקטורה

### אבטחת IP — שרת בלבד
כל לוגיקת החישוב ונתוני השכר נמצאים **אך ורק בצד השרת** ואינם נחשפים ללקוח:

- `lib/contracts.js` — כל טבלאות השכר, הדירוגים, הזכאויות
- `lib/calcAll.js` — פונקציות החישוב (מס, ביטוח לאומי, פנסיה, הבראה)

### API Routes
- `POST /api/calculate` — מקבל פרמטרים, מחזיר תוצאות מחושבות בלבד
- `GET /api/contracts` — מחזיר **מטא-דטה בלבד** (שמות, צבעים, תוויות דרגות) — **ללא ערכי שכר**

### Frontend
- `app/page.js` — דף ראשי (Client Component)
- `components/` — רכיבי UI

---

## הרצה מקומית

```bash
# התקנת תלויות
npm install

# הרצה בסביבת פיתוח
npm run dev
```

פתח את [http://localhost:3000](http://localhost:3000).

---

## פריסה ל-Vercel

### דרך Vercel CLI
```bash
npm i -g vercel
vercel
```

### דרך GitHub
1. דחוף את הקוד ל-GitHub
2. היכנס ל-[vercel.com](https://vercel.com)
3. בחר "Import Project" ובחר את ה-repository
4. Vercel יזהה אוטומטית Next.js ויבנה את הפרויקט

---

## עדכון טבלאות שכר

כל נתוני השכר נמצאים ב-`lib/contracts.js`.

לעדכון לאחר הסכם שכר חדש:

1. פתח את `lib/contracts.js`
2. אתר את החוזה הרלוונטי לפי מספרו (למשל `"551"`)
3. עדכן את ערכי `salary` בכל דרגה
4. שמור את הקובץ — הבנייה תתעדכן אוטומטית

### דוגמה:
```js
"551": {
  name: "כלכלנים נבחרים (חדש)",
  grades: [
    { id: "40", label: "דרגה 40", salary: 11151.97 }, // ← עדכן כאן
    // ...
  ]
}
```

---

## אבטחה

- **SERVER ONLY**: `lib/contracts.js` ו-`lib/calcAll.js` מסומנים ואסור לייבא אותם מרכיבי `"use client"`
- **Rate limiting header**: `Cache-Control: no-store` על נתיב החישוב
- **Input validation**: כל בקשה ל-`/api/calculate` מאומתת (contractId חוקי, carType חוקי)

---

## טכנולוגיות

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **React 18**
- **Vercel** (פריסה)

---

© 2025 יהודה סעדיה — כל הזכויות שמורות
יצירת קשר: yehoda.sadaay@gmail.com | 050-620-2972
