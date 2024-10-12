const decr = document.querySelectorAll(".decrement");
const incr = document.querySelectorAll(".increment");

decr.forEach((btn) => {
  btn.addEventListener("click", () => {
    let data = btn.nextElementSibling.innerHTML;
    num = new Number(data);

    if (num != 1) {
      btn.disabled = false;
      data = num - 1;
      btn.nextElementSibling.innerHTML = data;
    }
  });
});

incr.forEach((btn) => {
  btn.addEventListener("click", () => {
    let data = btn.previousElementSibling.innerHTML;
    num = new Number(data);
    data = num + 1;
    btn.previousElementSibling.innerHTML = data;
  });
});
