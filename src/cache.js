class Cache{
    #_mapOfValues;
    #_mapOfCounts;
    #_arrayOflogs;

    constructor() {
		this.#_mapOfValues = new Map()
        this.#_mapOfCounts = new Map()
        this.#_arrayOflogs = new Array()
    }

    get(key) {
        //log part
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        let log = today.toDateString() + " | GET | KEY = " + key + " | "

        let count = this.#_mapOfCounts[key]
        if (count == undefined){
            log += "THE KEY WAS NEVER SET"
            this.#_arrayOflogs.push(log)
            return null
        }
        if (count < 1 ){
            log += " VALUE = " + this.#_mapOfValues[key] + " | 0 ---> 0"
            this.#_arrayOflogs.push(log)
            return null
        } 
        log += " VALUE = " + this.#_mapOfValues[key] + " | " + count + " ---> " +  (count - 1)
        this.#_arrayOflogs.push(log)
        this.#_mapOfCounts[key] = count - 1
        return this.#_mapOfValues[key]
    }

    set(key, value, count = 1) {
        if (count < 1){
            count = 0
        }
        this.#_mapOfCounts[key] = count
        this.#_mapOfValues[key] = value

        //log part
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        let log = today.toDateString() + " | SET | KEY = " + key + " | VALUE =  " + value + " | COUNT = " + count
        this.#_arrayOflogs.push(log)
    }

    Stat() {
        let res = ""
        this.#_arrayOflogs.forEach(element => res += element + '\n')
        return res
    }
}

export {Cache}