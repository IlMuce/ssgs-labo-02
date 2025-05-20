# Labo-String: CLI per Utilità su Stringhe

Benvenuto/a a `labo-string`!

Questo progetto fornisce una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Prerequisiti  
- Node.js v20 o superiore (https://nodejs.org/en/download)
- npm (incluso con Node.js)

## Installazione
```bash
git clone https://github.com/IlMuce/ssgs-labo-02.git
cd ssgs-labo-02
npm ci
```
## Avvio
```bash
node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```
- Dove "Numero funzione" equivale a:
  
  1: Inverti Stringa (reverseString)
  
  2: Controlla Palindromo (isPalindrome)
  
  3: Tronca Stringa (truncateString) - richiede [lunghezza_massima]
  
  4: Conta Caratteri (countCharacters)

## Esecuzione test con Jest e generazione report di coverage
```bash
npm test
```
  
Esegue tutti i test implementati con jest (e coverage integrata) per tutte le funzioni in `stringUtils.js`:
  - `reverseString` (caso normale e stringa vuota)
  - `isPalindrome` (palindromo e non palindromo)
  - `truncateString` (n <, =, > lunghezza)
  - `countCharacters` (conteggio corretto e stringa vuota)

## Pipeline CI  
Questo progetto include un workflow GitHub Actions (`.github/workflows/ci.yml`) che, ad ogni push o pull sul ramo main:  
1) Recupera il codice dal repository
2) Prepara Node.js (versione 20)
3) Installa le dipendenze con 'npm ci' (usa package-lock.json)
4) Esegue tutti i test (npm test) e misura la copertura del codice
5) Carica il report di coverage (coverage/lcov.info) come artefatto scaricabile
