import {Cache} from './cache.js'
const cache = new Cache();
cache.set("ff", "ff", -5)
cache.get("GG")
alert(cache.Stat())