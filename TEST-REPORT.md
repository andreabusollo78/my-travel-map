# Verifica della correzione — 2026-11-03
Test eseguiti sullo script reale della pagina in Node VM, con DOM, Leaflet, rete e archivio simulati:
- catalogo statico: 245 voci, indipendente dai poligoni;
- fallback catalogo e confini con errore della prima fonte;
- risposte JSON di errore rifiutate anche con HTTP 200;
- riconoscimento ISO del GeoJSON corrente, inclusi Italia e Kosovo;
- aggiunta Francia: etichetta Salvato: Francia e colore europeo;
- placeholder Caricamento non salvabile;
- migrazione: placeholder e codici sconosciuti eliminati, ISO alpha-2 convertiti, duplicati rimossi;
- città valide conservate, continente ricalcolato, coordinate fuori intervallo rifiutate;
- statistiche globali e filtro Europa;
- catalogo utilizzabile mentre i confini sono ancora in attesa;
- errore totale dei confini non disabilita il catalogo;
- copia dei dati originali prima della migrazione.
Esito: tutti superati. Nessun test visuale in un browser reale eseguito in questa sessione.

## Estensione Stati USA — 2026-11-03
Superati test sullo script reale in Node VM: 50 codici unici; aggiunta California/Alaska/Hawaii; colore selettivo; nessun incremento del numero dei Paesi; conteggio continenti; filtro Europa; vista USA; duplicati; normalizzazione backup con e senza usStates; ripristino dopo errore di salvataggio.

## Ricerca città e quartieri — 2026-11-03
Comando riproducibile: node tests/search.test.mjs
Test superati con fixture delle risposte reali Photon: New York City restituisce New York; Manhattan conserva il proprio nome e il contesto New York; località omonime distinte per Stato; filtro Paese ISO; esclusione negozi e coordinate non valide; duplicati; cache; salvataggio città/quartieri; conteggio città nella vista USA; cancellazione richieste superate; errori HTTP e zero risultati.
Verifiche aggiuntive su risposte reali: Phoenix e Phoenix Arizona restituiscono Phoenix · Arizona come primo risultato.

## Centri abitati e spilli — 2026-11-03
Test aggiornati e superati: layer city e tag place, rifiuto di indirizzi/POI e distretti, New York/Phoenix ancora reperibili, Manhattan NY esclusa come distretto; spilli SVG con capocchia #c218b8 diversa dalla palette Paesi, punta ancorata alle coordinate; città preesistenti disegnate con lo stesso indicatore.

## Nomi italiani — 2026-11-03
Test superati: Londra/Lond con Paese GB → London; Monaco di Baviera → Munich; Firenze/Florence; nomi italiani dei record preesistenti; deduplica London/Londra alle stesse coordinate; nessuna traduzione di Naples USA in Napoli. Filtri per centri abitati e spilli invariati.

## Günzburg e Senigallia — 2026-11-03
Test su risposte reali superati per Günzburg DE e Senigallia IT. Accettati place city/town/village/hamlet/municipality anche nei layer district/locality, e boundary administrative solo se classificato city. Il punto del centro abitato ha precedenza sul poligono del comune; duplicati comune/centro eliminati. Restano esclusi quartieri, landuse, indirizzi, stazioni e attività.

## Isole visitate — 2026-11-03
Test riproducibili: node tests/search.test.mjs. Superati: risposte reali Meedhupparu (islet Adaaran Select), Fuerteventura e Lanzarote; esclusione reef, strade e hotel; filtro Paese dedicato e separazione cache città/isole; aggiunta e duplicati; conteggi indipendenti e continenti; spilli isole separati; migrazione archivio senza islands; export versione 3 e import; coordinate errate e annullamento di salvataggio fallito.

## Backup con orario ed Excel — 2026-11-03
Test: node tests/search.test.mjs. Esportazione JSON confermata solo dopo chiusura del file tramite selettore di salvataggio; alternativa download indicata esplicitamente. Orari Europe/Rome e cronologia locale, annullamento, errori scrittura, successo import e rollback su errore. Excel XLSX: riepilogo, sei continenti, eventuale Da verificare, tutte le categorie e tutte le viste; controllo ZIP/CRC e validità XML con .NET. Stringhe trattate come testo per impedire formule da nomi esterni. File di prova: tests/output/continenti-test.xlsx (non pubblicato).
