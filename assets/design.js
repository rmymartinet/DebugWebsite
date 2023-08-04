function galleryTag() {
  var elements = document.querySelectorAll(".nav-link");
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      elements.forEach((el) => {
        el.style.backgroundColor = "";
        el.style.color = "black";
      });

      element.style.backgroundColor = "#737137";
      element.style.color = "white";
    });
  });
}

setTimeout(() => {
  galleryTag();
}, 300);
galleryTag();
