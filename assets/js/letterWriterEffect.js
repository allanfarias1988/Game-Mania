function letterWriterEffect(element) {
  const array = element.innerHTML.split("");
  element.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => (element.innerHTML += array[i]), 70 * i);
  }
}
letterWriterEffect(document.querySelector("h1"));
