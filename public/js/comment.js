const commentHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
  
    if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        //i just want to update the comment to the page
        //would that work 
        document.location.replace('/post/:id');
      } else {
        alert('Failed to create comment');
      }
    }
  };
    
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentHandler);
  
