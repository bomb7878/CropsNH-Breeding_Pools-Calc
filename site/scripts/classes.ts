export class BreedingPool {
    public name: string
    public plants_list: Array<Plant>

    constructor(name: string) {
        this.name = name
        this.plants_list = new Array()
    }

    add(plant: Plant) {
        this.plants_list.push(plant);
    }
}

export class Plant {
    public name: string
    public pools: Array<BreedingPool>

    constructor(name: string, pools: Array<BreedingPool>) {
        this.name = name
        this.pools = pools

        pools.forEach(pool => pool.add(this));
    }
}