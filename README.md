# news-image-18nov

Sum up 18 November's world news in one image — make.fun bounty
`news-image-20261118` ($250 escrowed, top 50 paid).

A newspaper-style poster for **Wednesday, 18 November 2026**: six stories
that defined the day — the U.S.–Iran flare-up in the Gulf, Xi meeting Putin
at APEC Shenzhen, Peltola winning the Alaska Senate seat, Nvidia beating
then falling 2.9%, Ebola passing 11,000 cases in Congo, and Voyager 1
crossing one light-day — plus a strip of the day's other news.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`, after checking it is a whole PNG under
the 1 MiB limit. It writes the same bytes on every run.

## Files

- `entry.png` — the poster, 1024×1024, ~201 KB
- `main.ts` — the entry program
- `poster.html` — the poster source (HTML + CSS, screenshotted to PNG)
- `LICENSE` — MIT
