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
