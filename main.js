function f1() {
  let a = 1;
  return a + f2();
}
function f2() {
  let b = 2;
  return b + f3();
}
function f3() {
  let c = 3;
  return c;
}
