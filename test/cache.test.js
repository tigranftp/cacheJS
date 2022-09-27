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



// // установлен ключ без количества обращений
// test('', () => {
//     let c = new Cache()
//     c.set("key", "value")
//     let val = c.get("key")   
//     expect(val).toBe("value")
//     val = c.get("key")
//     expect(val).toBe(null)
// });

