const openButton = document.getElementById('liderBoardOpenButton');
const closeButton = document.getElementById('liderBoardCloseButton');
const menu = document.getElementById('liderBoardWrapper');
const menuList = document.getElementById('menuList');
const users = [
  { name: 'King', points: 78 },
  { name: 'User2a', points: 72 },
  { name: 'tolik33', points: 68 },
  { name: 'fima', points: 60 },
  { name: 'Саня', points: 55 },
  { name: 'Nicolai', points: 34 },
  { name: '120445245', points: 30 },
  { name: 'tigr', points: 29 },
  { name: 'lev', points: 20 },
  { name: 'auf', points: 10 },
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
