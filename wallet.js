const openSolana = document.getElementById('openSolana');
const SolanaMenu = document.getElementById('solanaMenu');
const walletForm = document.getElementById('walletForm');
const shareScoreBtn = document.getElementById('shareScore');
const inputForm = document.querySelector('.input');
const inputField = document.querySelector('.input');
const wallet_id_Save = localStorage.getItem('wallet_id');

const saveToLocalStorage = event => {
  const inputValue = event.target.value;
  localStorage.setItem('wallet_id', inputValue);
};

inputField.addEventListener('input', saveToLocalStorage);

async function sendHighscore() {
  const score = localStorage.getItem('best');
  const wallet_id = localStorage.getItem('wallet_id');

  try {
    const response = await fetch(`http://localhost:3000/sendScore/`, {
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
  SolanaMenu.classList.add('isOpen');
};

const handleCloseMenu = () => {
  SolanaMenu.classList.remove('isOpen');
};

const handleToggleMenu = () => {
  SolanaMenu.classList.toggle('isOpen');
};

const onSubmitForm = event => {
  event.preventDefault();

  sendHighscore();
  handleCloseMenu();
};

walletForm.addEventListener('submit', onSubmitForm);

openSolana.addEventListener('click', handleToggleMenu);
