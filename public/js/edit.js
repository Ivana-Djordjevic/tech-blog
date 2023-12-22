const updateBtnHandler = async (event) => {
  if (event.target.matches('.post-list .edit-button')) {      
    const id = event.target.getAttribute('data-id');
  
    document.location.replace(`/edit/${id}`);
  }
};
  
document
  .querySelector('.post-list')
  .addEventListener('click', updateBtnHandler);