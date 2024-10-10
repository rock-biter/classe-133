# Fare la spesa seguendo una lista

### Punto di partenza

- abbiamo una lista della spesa:

  - pane
  - pasta
  - insalata
  - birra

- siamo fuori dal supermercato (che è aperto)

## Soluzione

- Entrare nel supermercato:
  - SE mi serve il carrello grande
    - prendo il carello
  - entro nel supermercato
  - SE non ho preso il carrello grande E mi serve il carrelo piccolo
    - prendo il carrellino piccolo
- Prendere tutti i prodotti della lista:
  - PER OGNI prodotto Della lista
    - cerchiamo il prodotto
    - SE troviamo il prodotto
      - prendiamo il prodotto:
        - SE ho il carrello grande
          - metto il prodotto nel carello grande
        - ALTRIMENTI SE ho il carello piccolo
          - metto il prodotto nel carello piccolo
        - ALTRIMENTI
          - tengo il prodotto il mano
- Pagare la spesa:
  - andare verso le casse
  - scegliere la cassa:
    - SE ce molta fila E ci sono casse automatiche
      - Vado alla prima cassa automatica libera
    - ALTRIMENTI SE ci sono le casse automatiche
      - Vado alla prima cassa automatica libera
    - ALTRIMENTI
      - vado alla cassa non automatica
  - pago la spesa:
    - SE ho contanti
      - pago in contanti
    - ALTRIMENTI
      - pago con la carta
- Uscire dal supermercato
  - esco con la spesa
  - porto la spesa in macchina
  - SE ho il carrelo grande
    - metto giu il carrello grande
  - salgo in macchina
- vado a casa
