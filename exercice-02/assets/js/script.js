let boldButton = document.getElementById('buttonBold');
let colorButton = document.getElementById('buttonColor');
let zoomButton = document.getElementById('buttonZoom');
let divMain = document.getElementById('divMain');

getBold = () => {
    divMain.classList.toggle('font-weight-bold');
};

getColor = () => {
    divMain.classList.toggle('text-danger');
};

getZoom = () => {
    divMain.classList.toggle('zoom');
};

boldButton.addEventListener('click', getBold);
colorButton.addEventListener('click', getColor);
zoomButton.addEventListener('click', getZoom);