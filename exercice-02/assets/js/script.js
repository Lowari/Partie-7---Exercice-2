let boldButton = document.getElementById('buttonBold');
let ColorButton = document.getElementById('buttonColor');
let zoomButton = document.getElementById('buttonZoom');
let divMain = document.getElementById('divMain');

function getBold(element) {
    element.classList.toggle('font-weight-bold');
};

function getColor(element) {
    element.classList.toggle('text-danger');
};

function getZoom(element) {
    element.classList.toggle('zoom');
};

boldButton.addEventListener('click', getBold(divMain));
ColorButton.addEventListener('click', getColor(divMain));
zoomButton.addEventListener('click', getZoom(divMain));

// onclick="getBold(document.getElementById('divMain'))"
// onclick="getColor(document.getElementById('divMain'))"
// onclick="getZoom(document.getElementById('divMain'))"