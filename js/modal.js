const modal = document.getElementById('imgModal');
const img = document.getElementById('imgToClick');
const span = document.getElementsByClassName('close')[0];

img.onclick = function () {
  modal.style.display = 'block';
};

/* window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}; */

span.onclick = function () {
  modal.style.display = 'none';
};
