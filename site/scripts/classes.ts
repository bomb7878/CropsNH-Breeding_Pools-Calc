export class BreedingPool {
    public name: string
    public ru_name: string
    public plants_list: Array<Plant>

    constructor(name: string, ru_name: string) {
        this.name = name
        this.ru_name = ru_name
        this.plants_list = new Array()
    }

    add(plant: Plant) {
        this.plants_list.push(plant);
    }

    getName(): string {
        const currentLang = localStorage.getItem('site_language') || 'en';
        return currentLang === 'ru' ? this.ru_name : this.name;
    }
}

export class Plant {
    public name: string
    public ru_name: string
    public pools: Array<BreedingPool>

    constructor(name: string, ru_name:string, pools: Array<BreedingPool>) {
        this.name = name
        this.ru_name = ru_name
        this.pools = pools

        pools.forEach(pool => pool.add(this));
    }

    getName(): string {
        const currentLang = localStorage.getItem('site_language') || 'en';
        return currentLang === 'ru' ? this.ru_name : this.name;
    }
}