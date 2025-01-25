const openButton = document.getElementById('liderBoardOpenButton');
const closeButton = document.getElementById('liderBoardCloseButton');
const menu = document.getElementById('liderBoardWrapper');
const menuList = document.getElementById('menuList');
const users = [
  { name: 'Frak', points: 119 },
  { name: 'Valentyai', points: 105 },
  { name: 'Koleso', points: 93 },
  { name: 'Yarik', points: 91 },
  { name: 'SANYA', points: 84 },
  { name: 'Nicolai', points: 80 },
  { name: '120445', points: 77 },
  { name: 'tigr', points: 76 },
  { name: 'user454', points: 74 },
  { name: 'aufer', points: 70 },
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
    listItem.textContent = `${user.name} - ${user.points} score`;
    menuList.appendChild(listItem);
  });
};

openButton.addEventListener('click', handleOpen);
closeButton.addEventListener('click', handleClose);
renderUsersList(users);
