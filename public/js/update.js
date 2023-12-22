
const updateHandler = async (event) => {
    const id = event.target.getAttribute('data-id');
    
    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;

    if (name && description) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, description }),
            headers: {
            'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
        alert('Failed to update post');
        }
    }
}

document
    .querySelector('.update-button')
    .addEventListener('click', updateHandler);