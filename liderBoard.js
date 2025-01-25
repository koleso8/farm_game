const openButton = document.getElementById('liderBoardOpenButton');
const closeButton = document.getElementById('liderBoardCloseButton');
const menu = document.getElementById('liderBoardWrapper');
const menuList = document.getElementById('menuList');
const users = [
  { name: 'GmUjmtrM6aHyPTEJs6GWXUVBG8XTFKPQdNZfLDKUVsoy' },
  { name: 'GoUSidwGAY5ZDmch6mQppCgvz2ERJan8drH9JMWMhP5K' },
  { name: 'BiSx4vbuc4D2uEpMHib5f63tL42h6Nndpy7Jnc2MwMBv' },
  { name: 'CiCuGTuKYP53L7HSKNHX5VgWGeQE2i1WPKMxA58GESF2' },
  { name: 'EUrZxKi5AYmAnJDBiq3hCqqFYyg84mGdC8msS6yrpWo6' },
  { name: 'AcyP65mDg8rKCTrb9dUzyzVxJ6BF8fCvjdJ9cRqpdVoD' },
  { name: '2mqSxxA3t18H5nJ7KpeHcnkuGNRYRQZ3aKYLNhVfDEm1' },
  { name: 'ArpWiHxGKquR4eST6YiUEdMZvYsCPbBg1UV2zKbQLaso' },
  { name: '75JcsmfHGqPth5nEFV7ZztxBhkN5tLCg8HhT16eJqaYN' },
  { name: '4yBaS8rVpAjebHcZ5aqXFAz6BabWgGPSx7ZqBtKYcNBq' },
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
