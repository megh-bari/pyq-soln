import { PdfCard } from "./components/pdf-card";

export default function Home() {
  const pdfResources = [
    {
      id: 1,
      title: "M4 CheatSheet",
      description: "CheatSheet of Maths-IV",
      pdfUrl: "/pdfs/M4-CHEAT-SHEET.pdf",
      coverImage: "/images/image.png",
    },
    {
      id: 2,
      title: "AOA",
      description: "PYQ's answers Of AOA",
      pdfUrl: "/pdfs/AOA-PYQ-Solutions.pdf",
      coverImage: "/images/image.png",
    },
    {
      id: 3,
      title: "DBMS",
      description: "PYQ's answers Of DBMS",
      pdfUrl: "/pdfs/DBMS-PYQ-Solutions.pdf",
      coverImage: "/images/image.png",
    },
    {
      id: 4,
      title: "OS",
      description: "PYQ's answers Of OS",
      pdfUrl: "/pdfs/OS-PYQ-Solutions.pdf",
      coverImage: "/images/image.png",
    },
    {
      id: 5,
      title: "MP",
      description: "PYQ's answers Of MP",
      pdfUrl: "/pdfs/MP-PYQ-Solutions.pdf",
      coverImage: "/images/image.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
            Chill & Pass – Sem IV
          </h1>
          <p className="text-gray-300 mb-4 text-lg">
            Previous Year Question Papers Solutions
          </p>

          <p className="leading-snug text-center">
            <strong>Note:</strong> If you find the handwriting difficult to
            read, try your best to follow along or feel free to skip it!
          </p>
        </header>
        <div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          style={{ width: "100%" }}
        >
          {pdfResources.map((pdf) => (
            <PdfCard key={pdf.id} pdf={pdf} />
          ))}
        </div>
      </div>

      <footer className="mt-16 py-6 text-center text-gray-400 text-sm relative z-10">
        <p className="text-sm text-gray-400">
          Created by{" "}
          <a
            href="https://x.com/megh_bari"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white"
          >
            Megh
          </a>
        </p>

        <p>
          © {new Date().getFullYear()} Resources by Megh. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
