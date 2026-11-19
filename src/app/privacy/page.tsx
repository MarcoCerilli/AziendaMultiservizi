import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Zecchi Multiservizi",
  description: "Informativa sul trattamento dei dati personali ai sensi del GDPR (Regolamento UE 2016/679).",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-28 text-zinc-300 space-y-6">
      <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
      <p className="text-sm text-zinc-400">Informativa ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (GDPR)</p>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-white">1. Titolare del trattamento</h2>
        <p>
          Zecchi Multiservizi di Zecchi Monica e Fabio — P.IVA 02990560597 — Email:{" "}
          <a href="mailto:monicazecchi56@gmail.com" className="text-primary underline">monicazecchi56@gmail.com</a>.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-white">2. Dati trattati e finalità</h2>
        <p>
          I dati trasmessi volontariamente dall&apos;utente tramite telefono, WhatsApp o email vengono trattati esclusivamente per formulare preventivi e rispondere alle richieste di intervento.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-white">3. Diritti dell&apos;interessato</h2>
        <p>
          È possibile richiedere in ogni momento l&apos;accesso, la rettifica o la cancellazione dei propri dati scrivendo a{" "}
          <a href="mailto:monicazecchi56@gmail.com" className="text-primary underline">monicazecchi56@gmail.com</a>.
        </p>
      </section>

      <div className="pt-4">
        <Link href="/" className="text-sm font-semibold text-primary hover:underline">&larr; Torna alla Home</Link>
      </div>
    </main>
  );
}
