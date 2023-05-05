const form = document.querySelector('#generate-form');
const qr = document.querySelector('#qrcode');
const spinner = document.querySelector('#spinner');

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);

function onGenerateSubmit(event) {
  event.preventDefault();
  clearUI();

  const url = document.querySelector('#url').value;
  const size = document.querySelector('#size').value;

  showSpinner();
  setTimeout(() => {
    hideSpinner();
    generateQRCode(url, size);
    setTimeout(() => {
      const saveUrl = qr.querySelector('img').src;
      createSaveBtn(saveUrl);
    }, 50);
  }, 1000);
}

function clearUI() {
  qr.innerHTML = '';
  const saveLink = document.querySelector('#save-link');
  if (saveLink) {
    saveLink.remove();
  }
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

function createSaveBtn(saveUrl) {
  const link = document.createElement('a');
  link.id = 'save-link';
  link.classList =
    'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
  link.href = saveUrl;
  link.download = 'qrcode';
  link.innerHTML = 'Save Image';
  document.querySelector('#generated').appendChild(link);
}
