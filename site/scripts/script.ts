import { allPlants } from "./objects.js";
import { Plant, BreedingPool } from "./classes.js";
import { t, setLanguage } from "./lang_change.js"

const plantA = document.getElementById('plant-a') as HTMLInputElement;
const plantB = document.getElementById('plant-b') as HTMLInputElement;
const calcBtn = document.getElementById('calc-btn') as HTMLButtonElement;
const clearBtn = document.getElementById('clear-btn') as HTMLButtonElement;
const resultCard = document.getElementById('result-card') as HTMLElement;
const resultBody = document.getElementById('result-body') as HTMLElement;
const datalist = document.getElementById('plant-list') as HTMLDataListElement;

allPlants.forEach(plant => {
    const option = document.createElement('option');
    option.value = plant.getName();
    datalist.appendChild(option);
});

function findPlantByName(name: string): Plant | undefined {
    const lower = name.trim().toLowerCase();
    return allPlants.find(p => 
        p.getName().toLowerCase() === lower || 
        p.name.toLowerCase() === lower
    );
}

function escapeHtml(text: string): string {
    return text.replace(/[&<>"']/g, ch => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch] || ch));
}

interface Step {
    from: Plant;
    to: Plant;
    pool: BreedingPool;
    partners: Plant[];
}

// Recursive assembly of all paths (if there are several)
function reconstructPaths(
    target: Plant, 
    parents: Map<Plant, { prev: Plant, pool: BreedingPool }[]>, 
    start: Plant
): Step[][] {
    if (target === start) return [[]];
    
    const paths: Step[][] = [];
    const targetParents = parents.get(target) || [];
    
    for (const { prev, pool } of targetParents) {
        const prevPaths = reconstructPaths(prev, parents, start);
        for (const p of prevPaths) {
            // We are collecting partners: all plants from the pool, except for the current and target ones
            const partners = pool.plants_list.filter(plant => plant !== prev && plant !== target);
            paths.push([...p, { from: prev, to: target, pool, partners }]);
        }
    }
    return paths;
}

// Main function (BFS - breadth-first search)
function calculate() {
    const nameA = plantA.value.trim();
    const nameB = plantB.value.trim();

    resultCard.classList.remove('hidden');

    if (!nameA || !nameB) {
        resultBody.innerHTML = `<div class="result-empty">${t('errBothPlants')}</div>`;
        return;
    }

    const startPlant = findPlantByName(nameA);
    const targetPlant = findPlantByName(nameB);

    if (!startPlant || !targetPlant) {
        const missing = !startPlant ? nameA : nameB;
        resultBody.innerHTML = `<div class="result-empty">${t('errNotFound', { plant: escapeHtml(missing) })}</div>`;
        return;
    }

    if (startPlant === targetPlant) {
        resultBody.innerHTML = `<div class="result-empty">${t('errSamePlant')}</div>`;
        return;
    }

    // === BFS Algorithm ===
    const queue: Plant[] = [startPlant];
    const dist = new Map<Plant, number>();
    const parents = new Map<Plant, { prev: Plant, pool: BreedingPool }[]>();
    
    dist.set(startPlant, 0);
    let found = false;

    while (queue.length > 0) {
        const u = queue.shift()!;
        const d = dist.get(u)!;

        if (u === targetPlant) {
            found = true;
            break; // Have you found the shortest way to the goal
        }

        // We go through all the pools of the current plant
        for (const pool of u.pools) {
            // We are trying to get every plant from this pool.
            for (const v of pool.plants_list) {
                if (v === u) continue;

                if (!dist.has(v)) {
                    dist.set(v, d + 1);
                    parents.set(v, [{ prev: u, pool }]);
                    queue.push(v);
                } else if (dist.get(v) === d + 1) {
                    // If we find another path of the same length, we add it as an alternative.
                    parents.get(v)!.push({ prev: u, pool });
                }
            }
        }
    }

    // === RENDERING THE RESULT ===
    if (!found) {
        resultBody.innerHTML = `<div class="result-empty">${
            t('errorImpossiblePath', { 
                target: escapeHtml(targetPlant.getName()),
                start: escapeHtml(startPlant.getName())
            })
        }</div>`;
        return;
    }

    const allPaths = reconstructPaths(targetPlant, parents, startPlant);
    
    const pathsToShow = allPaths.slice(0, 3); 

    let html = `<h3 style="margin-top: 0; color: var(--accent);">${t('pathsFound', { paths: allPaths.length })}</h3>`;
    
    pathsToShow.forEach((path, pathIndex) => {
        if (allPaths.length > 1) {
            html += `<h4 style="margin: 20px 0 10px; color: var(--text-muted);">${t('variant', { var: pathIndex + 1 })}</h4>`;
        }
        
        html += `<div class="path-container">`;
        
        path.forEach((step, idx) => {
            const partnerTags = step.partners.length > 0 ? 
            step.partners.map(p => `<span class="partner-tag">${escapeHtml(p.getName())}</span>`).join('')
            : `<span class="partner-tag" style="color: var(--text-muted)">${t('anyOtherPool')}</span>`;

            html += `
                <div class="step-card">
                    <div class="step-header">${t('stepCounter', { step: idx + 1 })}</div>
                    <div class="step-body">
                        <p>${t('breedingRecipe', { plantName: escapeHtml(step.from.getName()), poolName: escapeHtml(step.pool.getName()) })}:</p>
                        
                        <div class="partners-list">
                            ${partnerTags}
                        </div>
                        
                        <div class="arrow-down">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                        </div>
                        
                        <p style="text-align: center;">${t('toGetPlant', { plantName: step.to.getName() })}</p>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    });

    if (allPaths.length > 3) {
        html += `<p style="text-align: center; color: var(--text-muted); font-size: 0.9rem; margin-top: 15px;">${t('andSimilarWays', { ways: allPaths.length - 3 })}</p>`;
    }

    resultBody.innerHTML = html;
}

calcBtn.addEventListener('click', calculate);

[plantA, plantB].forEach(input => {
    input.addEventListener('keydown', event => {
        if (event.key === 'Enter') calculate();
    });
});

clearBtn.addEventListener('click', () => {
    plantA.value = '';
    plantB.value = '';
    resultCard.classList.add('hidden');
    resultBody.innerHTML = '';
    plantA.focus();
});


document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site_language') || 'en';
    setLanguage(savedLang);

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('site_language') || 'en';
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            setLanguage(newLang);

            if (typeof calculate === 'function') {
                const el = document.getElementById('result-body') as HTMLBodyElement;

                if (el.childNodes.length === 0) {
                    const observer = new MutationObserver(() => {
                    if (el.childNodes.length > 0) {
                        observer.disconnect();
                        calculate();
                    }
                });
                    observer.observe(el, { childList: true, subtree: true });
                }
            }
        });
    }
});