import { allPlants } from "./objects.js";
import { Plant, BreedingPool } from "./classes.js";

const plantA = document.getElementById('plant-a') as HTMLInputElement;
const plantB = document.getElementById('plant-b') as HTMLInputElement;
const calcBtn = document.getElementById('calc-btn') as HTMLButtonElement;
const clearBtn = document.getElementById('clear-btn') as HTMLButtonElement;
const resultCard = document.getElementById('result-card') as HTMLElement;
const resultBody = document.getElementById('result-body') as HTMLElement;
const datalist = document.getElementById('plant-list') as HTMLDataListElement;

allPlants.forEach(plant => {
    const option = document.createElement('option');
    option.value = plant.name;
    datalist.appendChild(option);
});

function findPlantByName(name: string): Plant | undefined {
    const lower = name.trim().toLowerCase();
    return allPlants.find(p => p.name.toLowerCase() === lower);
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
        resultBody.innerHTML = `<div class="result-empty">Пожалуйста, введите названия обоих растений.</div>`;
        return;
    }

    const startPlant = findPlantByName(nameA);
    const targetPlant = findPlantByName(nameB);

    if (!startPlant || !targetPlant) {
        const missing = !startPlant ? nameA : nameB;
        resultBody.innerHTML = `<div class="result-empty">Растение «${escapeHtml(missing)}» не найдено в базе.</div>`;
        return;
    }

    if (startPlant === targetPlant) {
        resultBody.innerHTML = `<div class="result-empty">Это одно и то же растение.</div>`;
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
        resultBody.innerHTML = `<div class="result-empty">Невозможно получить «${escapeHtml(targetPlant.name)}» из «${escapeHtml(startPlant.name)}» через пулы.</div>`;
        return;
    }

    const allPaths = reconstructPaths(targetPlant, parents, startPlant);
    
    const pathsToShow = allPaths.slice(0, 3); 

    let html = `<h3 style="margin-top: 0; color: var(--accent);">Найдено путей: ${allPaths.length}</h3>`;
    
    pathsToShow.forEach((path, pathIndex) => {
        if (allPaths.length > 1) {
            html += `<h4 style="margin: 20px 0 10px; color: var(--text-muted);">Вариант ${pathIndex + 1}</h4>`;
        }
        
        html += `<div class="path-container">`;
        
        path.forEach((step, idx) => {
            html += `
                <div class="step-card">
                    <div class="step-header">Шаг ${idx + 1}</div>
                    <div class="step-body">
                        <p>Возьмите <span class="chip">${escapeHtml(step.from.name)}</span> и скрестите с любым растением из пула <span class="chip pool">${escapeHtml(step.pool.name)}</span>:</p>
                        <div class="partners-list">
                            ${step.partners.length > 0 
                                ? step.partners.map(p => `<span class="chip-small">${escapeHtml(p.name)}</span>`).join('')
                                : '<span class="chip-small" style="color: var(--text-muted)">Любое другое растение из этого пула</span>'}
                        </div>
                        <p class="arrow-down">↓</p>
                        <p>Чтобы получить <span class="chip out">${escapeHtml(step.to.name)}</span></p>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    });

    if (allPaths.length > 3) {
        html += `<p style="text-align: center; color: var(--text-muted); font-size: 0.9rem; margin-top: 15px;">...и еще ${allPaths.length - 3} путей такой же длины.</p>`;
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