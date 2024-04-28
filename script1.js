document.addEventListener("DOMContentLoaded", function() {
    const postList = document.getElementById("postList");

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = post.title;
                postList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
