import { allPlants } from "./objects";
import { Plant } from "./classes";

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

// The main calculation function
function calculate() {
    const nameA = plantA.value.trim();
    const nameB = plantB.value.trim();

    resultCard.classList.remove('hidden');

    // Checking for empty fields
    if (!nameA || !nameB) {
        resultBody.innerHTML = `<div class="result-empty">Пожалуйста, введите названия обоих растений.</div>`;
        return;
    }

    const firstPlant = findPlantByName(nameA);
    const secondPlant = findPlantByName(nameB);

    // Verification of existence
    if (!firstPlant || !secondPlant) {
        const missing = !firstPlant ? nameA : nameB;
        resultBody.innerHTML = `<div class="result-empty">Растение «${escapeHtml(missing)}» не найдено в базе.</div>`;
        return;
    }

    // If a plant does not have pools, it does not participate in pool breeding.
    if (firstPlant.pools.length === 0 || secondPlant.pools.length === 0) {
        const noPoolsPlant = firstPlant.pools.length === 0 ? firstPlant : secondPlant;
        resultBody.innerHTML = `<div class="result-empty">Растение «${escapeHtml(noPoolsPlant.name)}» не принадлежит ни одному пулу и не может использоваться для pool breeding.</div>`;
        return;
    }

    // Finding common pools
    const sharedPools = firstPlant.pools.filter(pool => secondPlant.pools.includes(pool));

    if (sharedPools.length === 0) {
        resultBody.innerHTML = `<div class="result-empty">У «${escapeHtml(firstPlant.name)}» и «${escapeHtml(secondPlant.name)}» нет общих пулов.</div>`;
        return;
    }

    // We collect all possible descendants and their probabilities
    const offspringMap = new Map<Plant, number>();
    const poolCount = sharedPools.length;

    sharedPools.forEach(pool => {
        const plantsInPool = pool.plants_list;
        const probPerPlant = 1 / (poolCount * plantsInPool.length);
        plantsInPool.forEach(plant => {
            const current = offspringMap.get(plant) || 0;
            offspringMap.set(plant, current + probPerPlant);
        });
    });

    // We sort the probability in descending order
    const sortedOffspring = Array.from(offspringMap.entries())
        .sort((a, b) => b[1] - a[1]);

    // Creating HTML
    let html = `
        <div class="result-flow">
            <span class="chip">${escapeHtml(firstPlant.name)}</span>
            <span class="arrow">✕</span>
            <span class="chip">${escapeHtml(secondPlant.name)}</span>
            <span class="arrow">→</span>
            <span class="chip out">Общие пулы</span>
        </div>
        <div class="result-meta">
            <span class="meta-item">Общие пулы: <b>${sharedPools.map(p => escapeHtml(p.name)).join(', ')}</b></span>
        </div>
        <h3 style="margin-top: 20px; font-size: 0.9rem; color: var(--text-muted);">Возможные потомки:</h3>
        <ul style="list-style: none; padding: 0; margin: 8px 0 0; display: flex; flex-wrap: wrap; gap: 8px;">
    `;

    sortedOffspring.forEach(([plant, prob]) => {
        const percentage = (prob * 100).toFixed(1);
        html += `<li class="chip" style="display: inline-flex; align-items: center; gap: 8px;">
            ${escapeHtml(plant.name)}
            <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 400;">${percentage}%</span>
        </li>`;
    });

    html += `</ul>`;
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