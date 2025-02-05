const openInfoButton = document.getElementById('infoOpenButton');
const closeInfoButton = document.getElementById('infoCloseButton');
const infoWrapper = document.getElementById('infoWrapper');

const handleOpenInfo = () => {
  infoWrapper.classList.add('isOpen');
};
const handleCloseInfo = () => {
  infoWrapper.classList.remove('isOpen');
};

openInfoButton.addEventListener('click', handleOpenInfo);
closeInfoButton.addEventListener('click', handleCloseInfo);
