const delButnHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const deletedId = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${deletedId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to delete project');
        }
    }

};

document
    .querySelector('.blogs')
    .addEventListener('click', delButnHandler);