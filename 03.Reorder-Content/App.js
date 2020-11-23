const btn = document.querySelector('button');
const gridItem = document.querySelectorAll('.grid-item');

// 객체 분해를 이용한 코드
// const [item1, item2, item3, item4] = gridItem;

// btn.addEventListener('click', () => {
//   item1.style.order = parseInt(Math.random() * 5);
//   item2.style.order = parseInt(Math.random() * 5);
//   item3.style.order = parseInt(Math.random() * 5);
//   item4.style.order = parseInt(Math.random() * 5);
// })

// 객체 병합을 이용한 코드
const items = [...gridItem];
btn.addEventListener('click', () => {
  items.forEach((item) => {
    const random = parseInt(Math.random() * 5)
    item.style.order = random;
  })
})