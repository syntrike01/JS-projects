const colorBtn = document.getElementById('color__change');

const colorBg = document.getElementById('color__background')

const colors = [
  '#F94144',
  '#F3722C',
  '#F9C74F',
  '#90BE6D',
  '#43AA8B',
  '#577590',
  '#4D96FF',
  '#6A4C93',
  '#FF6F91',
  '#FFD166',
  '#06D6A0',
  '#118AB2',
  '#073B4C',
];

// console.log(colors[2])


colorBtn.addEventListener('click', () => {
  const randomColr = Math.floor(Math.random() * colors.length);
  colorBg.style.backgroundColor = colors[randomColr];

  // console.log(colors[randomColr]);
});
