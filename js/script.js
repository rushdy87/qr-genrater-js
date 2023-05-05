const form = document.querySelector('#generate-form');
const qr = document.querySelector('#qrcode');
const spinner = document.querySelector('#spinner');

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);

function onGenerateSubmit(event) {
  event.preventDefault();

  const url = document.querySelector('#url').value;
  const size = document.querySelector('#size').value;

  showSpinner();
  setTimeout(() => {
    hideSpinner();
    generateQRCode(url, size);
  }, 1000);
}

function showSpinner() {
  spinner.style.display = 'block';
}
function hideSpinner() {
  spinner.style.display = 'none';
}

function generateQRCode(url, size) {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  });
}
