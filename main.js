const getBackgroundColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getBrightness = (hexColor) => {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  return r * 0.299 + g * 0.587 + b * 0.114;
};

const getTextColor = (bgColor) => {
  return getBrightness(bgColor) > 186 ? "#000" : "#FFF";
};

const contentBoxes = document.querySelectorAll(".content-box");
contentBoxes.forEach((box) => {
  const bgColor = getBackgroundColor();
  box.style.backgroundColor = bgColor;
  box.style.color = getTextColor(bgColor);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.body.style.backgroundColor =
          entry.target.style.backgroundColor;
      }
    });
  },
  { threshold: 0.7 }
);

contentBoxes.forEach((box) => {
  observer.observe(box);
});
