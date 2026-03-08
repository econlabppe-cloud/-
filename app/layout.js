import './globals.css';

export const metadata = {
  title: 'סימולטור שכר שירות המדינה',
  description: 'סימולטור שכר מקיף לעובדי שירות המדינה — עדכני לשנת 2025',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧮</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HN2KQSB70R" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HN2KQSB70R');
            `,
          }}
        />
      </head>
      <body className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen font-sans text-slate-800">
        {children}
      </body>
    </html>
  );
}
