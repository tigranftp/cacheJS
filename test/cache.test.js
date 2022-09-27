import {Cache} from "../src/cache";


// test('it fails', () => {
//     expect(false).toBe(true);
// });

// ключа нет
test('no key ', () => {
    let c = new Cache()
    let val = c.get("some key")    
    expect(val).toBe(null);
});


// установлен ключ без количества обращений
test('set with no count', () => {
    let c = new Cache()
    c.set("key", "value")
    let val = c.get("key")   
    expect(val).toBe("value")
    val = c.get("key")
    expect(val).toBe(null)
});


test('set with count below zero', () => {
    let c = new Cache()
    c.set("key", "value", -5)
    let val = c.get("key")   
    expect(val).toBe(null)
});


test('usual use', () => {
    let c = new Cache()
    c.set("key", 228, 3)   
    expect(c.get("key")).toBe(228)
    expect(c.get("key")).toBe(228)
    expect(c.get("key")).toBe(228)
    expect(c.get("key")).toBe(null)
    expect(c.get("key")).toBe(null)
    expect(c.get("key")).toBe(null)
    expect(c.get("key")).toBe(null)
});


test('test print stats', () => {
    let c = new Cache()
    c.get("3145da")
    c.set("3145da", "kek", 1)
    c.get("3145da")
    let logs = c.Stat().split('\n')
    expect(logs[0].indexOf('GET | KEY = 3145da | THE KEY WAS NEVER SET') > 0).toBe(true)
    expect(logs[1].indexOf('SET | KEY = 3145da | VALUE =  kek | COUNT = 1') > 0).toBe(true)
    expect(logs[2].indexOf('GET | KEY = 3145da |  VALUE = kek | 1 ---> 0') > 0).toBe(true)
});


// // установлен ключ без количества обращений
// test('', () => {
//     let c = new Cache()
//     c.set("key", "value")
//     let val = c.get("key")   
//     expect(val).toBe("value")
//     val = c.get("key")
//     expect(val).toBe(null)
// });

