const openButton = document.getElementById('liderBoardOpenButton');
const closeButton = document.getElementById('liderBoardCloseButton');
const menu = document.getElementById('liderBoardWrapper');
const menuList = document.getElementById('menuList');
const users = [
  { name: 'GmUj...Vsoy  11.2 SOL' },
  { name: 'GoUS...hP5K  9.7 SOL' },
  { name: 'BiSx...wMBv  8.5 SOL' },
  { name: 'CiCu...ESF2  8.3 SOL' },
  { name: 'EUrZ...pWo6  4.1 SOL' },
  { name: 'AcyP...dVoD  3.9 SOL' },
  { name: '2mqS...DEm1  2.4 SOL' },
  { name: 'ArpW...Laso  1.1 SOL' },
  { name: '75Jc...qaYN  0.8 SOL' },
  { name: '4yBa...cNBq  0.5 SOL' },
];

const handleOpen = () => {
  menu.classList.add('isOpen');
};
const handleClose = () => {
  menu.classList.remove('isOpen');
};
const renderUsersList = users => {
  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = `${user.name}`;
    menuList.appendChild(listItem);
  });
};

openButton.addEventListener('click', handleOpen);
closeButton.addEventListener('click', handleClose);
renderUsersList(users);
