![version](https://img.shields.io/github/package-json/v/alessandrocurcu/skills)

# Le skills di Ale QRQ (Curcu)
Una lista di [skill agentiche](https://agentskills.io/home), curata secondo le mie preferenze. Alcune le ho create io, molte sono di autori come Addy Osmani, Debbie O'Brien, Anthony Fu e altri. Nella sua forma generale questo proggetto è praticamente un fork della repository [skills](https://github.com/antfu/skills/tree/main?tab=readme-ov-file) di Anthony Fu, adattato alle mie esigenze

## Installazione
L'installazione si fa con lo strumento [skills](https://github.com/vercel-labs/skills) di Vercel

```bash
pnpx skills add alessandrocurcu/skills --skill='*'
```
o per installarle globalmente

```bash
pnpx skills add alessandrocurcu/skills --skill='*' -g
```

## Come funziona
- [meta.ts](./meta.ts) è il file di configurazione centrale: definisce quali vendor esistono, le loro URL, e il mapping nomeSkillVendor → nomeSkillLocale.
- Modifica [meta.ts](./meta.ts) per aggiungere un nuovo vendor o una nuova skill scritta a mano

## Comandi
| Comando              | Cosa fa                          |
| -------------------- | -------------------------------- |
| `pnpm start`         | Menu interattivo                 |
| `pnpm start init`    | Aggiunge submoduli vendor        |
| `pnpm start sync`    | Aggiorna e copia le skill        |
| `pnpm start check`   | Verifica aggiornamenti upstream  |
| `pnpm start cleanup` | Rimuove orfani                   |
- init — Aggiunge vendor come submodules git
  - Legge meta.ts per sapere quali vendor esistono
  - Se trova submodules non in meta.ts, propone di rimuoverli
  - Aggiunge i nuovi via git submodule add

- sync — Copia i file delle skill dai vendor nella cartella skills/
  - Fa git submodule update --remote --merge per aggiornare
  - Per ogni vendor, copia i file dalla sua cartella skills/<nome>/ a skills/<output-name>/
  - Aggiunge LICENSE.md e genera SYNC.md con SHA e data

- check — Controlla se ci sono aggiornamenti upstream
  - Fa git fetch su ogni submodule
  - Conta quanti commit sono in ritardo rispetto al remoto

- cleanup — Rimuove ciò che non è più in meta.ts
  - Submodules extra (via git submodule deinit + git rm)
  - Cartelle in skills/ non dichiarate né come vendor né come manual
