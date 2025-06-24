function test() {
    let a = prompt("Enter your tweet:");
    let b = a.length;
    alert(`You have used: ${b} characters | Remaining: ${140 - b} characters`);
}
test();
