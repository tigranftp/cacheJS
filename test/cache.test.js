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



// // установлен ключ без количества обращений
// test('', () => {
//     let c = new Cache()
//     c.set("key", "value")
//     let val = c.get("key")   
//     expect(val).toBe("value")
//     val = c.get("key")
//     expect(val).toBe(null)
// });

