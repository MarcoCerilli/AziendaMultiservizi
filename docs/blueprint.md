# **App Name**: Zecchi Soluzioni

## Core Features:

- Servizi Presentati: Visualizzazione di tutti i servizi offerti (giardinaggio, pulizia terreni, taglio piante, pulizie condomini, lavori edili, scavi, impianti irrigazione, taglio siepi) in una griglia con icone moderne.
- Gestione Servizi e Contatti (Firestore): Memorizzazione e recupero dinamico dei dati dei servizi e delle informazioni di contatto (email, numeri di telefono) da un database Firestore.
- Assistente AI 'Zecchi Bot': Un chatbot fluttuante che fornisce informazioni sui servizi di Zecchi Monica, con istruzioni chiare per gestire le richieste di preventivo, invitando gli utenti a contattare Monica o via email, senza fornire prezzi, utilizzando un tool con prompt di sistema dedicato.
- Navbar e Layout Home: Una barra di navigazione fissa in alto e una sezione hero con lo slogan 'Soluzioni Professionali per Casa e Giardino'.
- Configurazione Ambiente Vercel: Integrazione delle credenziali di Firebase utilizzando variabili d'ambiente (process.env) nel file lib/firebase.ts per la deploy su Vercel.

## Style Guidelines:

- Schema di colori scuro. Il colore primario è un verde foglia vibrante per i dettagli e le evidenziazioni (#57C322). Il colore di sfondo è un grigio molto scuro con un sottotono verdastro per un'estetica minimale (#181D16). Il colore d'accento è un verde più chiaro e vivace, usato per CTA o elementi interattivi importanti (#77ED5E).
- Font primario: 'Inter' (sans-serif) per tutte le intestazioni e il corpo del testo, scelto per la sua leggibilità pulita e l'estetica moderna e neutra, allineata al minimalismo richiesto.
- Utilizzo di icone moderne e pulite per rappresentare visivamente ogni servizio, in linea con lo stile minimalista dell'applicazione.
- Design responsivo con header fisso. La home page presenterà una sezione hero ampia seguita da una griglia di servizi organizzata in modo pulito e intuitivo.