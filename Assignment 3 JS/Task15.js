let n = 7;
let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 3; i <= n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}
