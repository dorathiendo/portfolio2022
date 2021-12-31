// const webviewImages = document.querySelectorAll('.webview img');
// let len = 0;
// const timer = setInterval(() => {
//   if (len >= webviewImages.length) {
//     len = 0;
//   }
//   // const prev = webviewImages[len - 1];
//   // if (prev && prev.classList.contains('show')){
//   //   prev.classList.remove('show');
//   // }
//   document.querySelector('.webview img.show').classList.remove('show');
//   const cur = webviewImages[len];
//   cur.classList.add('show');
//   len++;
// }, 1000);


const arrowButton = document.querySelectorAll('.arrow');
arrowButton.forEach(button => {
  const screen = button.parentElement.id;
  button.addEventListener('click', () => {

  });
})
