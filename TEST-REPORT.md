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
