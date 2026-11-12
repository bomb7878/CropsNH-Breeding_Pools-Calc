# CropsNH Breeding Pools Calc

A web calculator for calculating the crossing of plants in fashion **CropsNH** (assembly of GregTech: New Horizons). 
It allows you to quickly find out which plants can be obtained by crossing two parents through common Breeding Pools.

## 🚀 Features
- Enter the names of two plants with auto-completion (Datalist).
- Checking the availability of common pools for selected plants.
- Calculation of the probabilities of obtaining each possible descendant (taking into account the random selection of the pool and the plant within the pool).
- Support for all plants and pools from the current version of CropsNH (including basic, Twilight Forest, Thaumcraft, Witchery, etc.).
- User-friendly and minimalistic interface without unnecessary panels.

## 🛠 Technologies
- **HTML5 / CSS3** — interface (single-page application, card design).
- **TypeScript** — the logic of the calculator and data structures.
- **Node.js / npm** — for TypeScript installation and assembly.

## 📁 Project structure
```text
CROPSNH-BREEDING-POOLS-CALC/
├── site/                   # Web Application source code
│   ├── scripts/            # Logic in TypeScript
│   │   ├── classes.ts      # BreedingPool and Plant classes
│   │   ├── objects.ts      # Initialization of all pools and plants
│   │   |── script.ts       # DOM-logic and algorithm of crossing
|── index.html              # Home page
│ └── styles.css            # Styles
├── package.json            # npm Configuration
|── README.md               # This file
