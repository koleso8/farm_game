const openButton = document.getElementById('liderBoardOpenButton');
const closeButton = document.getElementById('liderBoardCloseButton');
const menu = document.getElementById('liderBoardWrapper');
const menuList = document.getElementById('menuList');
const users = [
  { name: 'Frak', points: 437 },
  { name: 'Valentyai', points: 405 },
  { name: 'Koleso', points: 388 },
  { name: 'Yarik', points: 360 },
  { name: 'SANYA', points: 304 },
  { name: 'Nicolai', points: 298 },
  { name: '120445', points: 290 },
  { name: 'tigr', points: 287 },
  { name: 'user454', points: 277 },
  { name: 'aufer', points: 268 },
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
    listItem.textContent = `${user.name} - ${user.points} farts`;
    menuList.appendChild(listItem);
  });
};

openButton.addEventListener('click', handleOpen);
closeButton.addEventListener('click', handleClose);
renderUsersList(users);
