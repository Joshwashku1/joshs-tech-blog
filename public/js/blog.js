const newBlogHandler = async (event) => {
    event.preventDefault();

    const blogTitle = document.querySelector('#blog-title').value.trim();
    const blogBody = document.querySelector('#blog-body').value.trim();


    if((blogTitle && blogBody)) {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({ blogTitle, blogBody }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if(response.ok) {
            document.location.replace('/homepage');
        } else {
            alert('Failed to create blog');
        }
    }
};

document
    .querySelector('.add-blog')
    .addEventListener('submit', newBlogHandler)

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