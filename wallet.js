const openSolana = document.getElementById('openSolana');
const SolanaMenu = document.getElementById('solanaMenu');
const addWalletMenu = document.getElementById('addWalletMenu');
const walletForm = document.getElementById('walletForm');
const addWalletMenuForm = document.getElementById('addWalletMenuForm');
const shareScoreBtn = document.getElementById('shareScore');
const inputForm = document.querySelector('.input');
const inputField = document.querySelector('.input');
const inputWalletField = document.getElementById('inputWalletField');
const wallet_id_Save = localStorage.getItem('wallet_id');

let previousValue = parseInt(localStorage.getItem('best'));

function roundDownToNearestTen(num) {
  return Math.floor(num / 10) * 10;
}

function checkLocalStorage() {
  const currentValue = parseInt(localStorage.getItem('best'));

  if (isNaN(currentValue)) previousValue = 0;
  if (currentValue > previousValue && currentValue >= 2) {
    console.log(currentValue);

    previousValue = currentValue;
    handleCloseWalletMenu();
    handleOpenMenu();
  }
}

setInterval(checkLocalStorage, 1000); // Проверка каждую секунду

const saveToLocalStorage = event => {
  const inputValue = event.target.value;
  localStorage.setItem('wallet_id', inputValue);
};

inputField.addEventListener('input', saveToLocalStorage);
inputWalletField.addEventListener('input', saveToLocalStorage);

async function sendHighscore() {
  const score = roundDownToNearestTen(parseInt(localStorage.getItem('best')));
  const wallet_id = localStorage.getItem('wallet_id');
  // const service = 'http://localhost:3000/sendScore';
  // const service = 'https://fartrump.ngrok.io/submit_score';
  const service = 'https://lox-19k0.onrender.com';
  try {
    const response = await fetch(service, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ score, wallet_id }),
    });

    const data = await response.json();
    console.log('Highscore successfully sent:', data);
  } catch (error) {
    console.error('Error sending highscore:', error);
  }
}

inputForm.value = wallet_id_Save;

const handleOpenMenu = () => {
  console.log('handleOpenMenu');

  SolanaMenu.classList.add('isOpen');
};
const handleOpenWalletMenu = () => {
  addWalletMenu.classList.add('isOpen');
};
const handletoggleWalletMenu = () => {
  addWalletMenu.classList.toggle('isOpen');
};

const handleCloseMenu = () => {
  SolanaMenu.classList.remove('isOpen');
};
const handleCloseWalletMenu = () => {
  addWalletMenu.classList.remove('isOpen');
};

const onSubmitForm = event => {
  event.preventDefault();

  sendHighscore();
  handleCloseMenu();
};
const onSubmitAddWalletForm = event => {
  event.preventDefault();
  handleCloseWalletMenu();
};

walletForm.addEventListener('submit', onSubmitForm);
// addWalletMenuForm.addEventListener('submit', onSubmitAddWalletForm);//TODO
addWalletMenuForm.addEventListener('submit', onSubmitForm);

openSolana.addEventListener('click', handletoggleWalletMenu);
