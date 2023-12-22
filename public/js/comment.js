const commentHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector('#hidden-id').value;
  
    if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {

        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
    
  document
    .querySelector('#comment-form')
    .addEventListener('submit', commentHandler);
  
