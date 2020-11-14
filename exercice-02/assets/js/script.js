let boldButton = document.getElementById('buttonBold');
let colorButton = document.getElementById('buttonColor');
let zoomButton = document.getElementById('buttonZoom');
let divMain = document.getElementById('divMain');

function getBold() {
    this.classList.toggle('font-weight-bold');
};

function getColor() {
    this.classList.toggle('text-danger');
};

function getZoom() {
    this.classList.toggle('zoom');
};

boldButton.addEventListener('click', getBold.bind(divMain));
colorButton.addEventListener('click', getColor.bind(divMain));
zoomButton.addEventListener('click', getZoom.bind(divMain));