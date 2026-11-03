# Dati geografici inclusi
Il catalogo è derivato da https://github.com/mledoze/countries (ODbL), con nomi italiani e sei continenti come nella versione originale.
I confini sono derivati da https://github.com/datasets/geo-countries (Natural Earth, pubblico dominio), scaricati il 2026-11-03.
Coordinate arrotondate a tre decimali e vertici ravvicinati ridotti per uso a scala mondiale. I confini sono indicativi, non adatti a navigazione o misurazioni.
Kosovo usa UNK, come nel catalogo mledoze, perché il GeoJSON lo contrassegna -99.
Il catalogo include anche territori dipendenti; i piccoli territori possono non avere un poligono nel dataset.
Le copie locali sono la fonte primaria; GitHub raw è il fallback. Nessuna dipendenza da REST Countries.
I record non validi vengono normalizzati all'avvio e all'importazione. Prima della modifica l'originale viene conservato in IndexedDB/data con chiave recovery-TIMESTAMP.

Confini dei 50 Stati USA: https://github.com/PublicaMundi/MappingAPI/blob/master/data/geojson/us-states.json (dataset usato negli esempi cartografici Leaflet). District of Columbia e Porto Rico non sono inclusi nel conteggio dei 50 Stati. Codici ISO 3166-2 US-XX.
