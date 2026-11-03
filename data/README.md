# Dati geografici inclusi
Il catalogo è derivato da https://github.com/mledoze/countries (ODbL), con nomi italiani e sei continenti come nella versione originale.
I confini sono derivati da https://github.com/datasets/geo-countries (Natural Earth, pubblico dominio), scaricati il 2026-11-03.
Coordinate arrotondate a tre decimali e vertici ravvicinati ridotti per uso a scala mondiale. I confini sono indicativi, non adatti a navigazione o misurazioni.
Kosovo usa UNK, come nel catalogo mledoze, perché il GeoJSON lo contrassegna -99.
Il catalogo include anche territori dipendenti; i piccoli territori possono non avere un poligono nel dataset.
Le copie locali sono la fonte primaria; GitHub raw è il fallback. Nessuna dipendenza da REST Countries.
I record non validi vengono normalizzati all'avvio e all'importazione. Prima della modifica l'originale viene conservato in IndexedDB/data con chiave recovery-TIMESTAMP.

Confini dei 50 Stati USA: https://github.com/PublicaMundi/MappingAPI/blob/master/data/geojson/us-states.json (dataset usato negli esempi cartografici Leaflet). District of Columbia e Porto Rico non sono inclusi nel conteggio dei 50 Stati. Codici ISO 3166-2 US-XX.

Ricerca città e quartieri: Photon, https://photon.komoot.io/ (dati OpenStreetMap, ODbL). API: https://github.com/komoot/photon/blob/master/docs/api-v1.md . Query filtrate per countrycode ISO alpha-2 e layer city/district/locality, nomi del luogo conservati. Debounce 700 ms, cache in memoria di 80 query, richieste superate annullate. Il servizio pubblico non garantisce disponibilità. Non viene più usato Nominatim per autocomplete.

Aggiornamento: ricerca limitata al layer city con osm_tag=place e verifica locale osm_value city/town/village/hamlet/municipality. Quartieri, vie e indirizzi non sono più destinazioni proposte. Coordinate del punto rappresentativo del centro abitato fornite da Photon; nessuna geocodifica di indirizzi. I record già salvati mantengono le loro coordinate.

Nomi italiani: dizionario incluso di 97 città, associato al codice Paese per evitare omonimie. Ricerca tramite alias italiani e internazionali, etichette italiane con nome internazionale tra parentesi quando diverso. Il servizio Photon pubblico non accetta lang=it: si mantiene lang=en con traduzione locale; le città non presenti nel dizionario conservano il nome restituito dal servizio. I record preesistenti riconosciuti vengono tradotti durante la normalizzazione, conservando copia di recupero e coordinate.
