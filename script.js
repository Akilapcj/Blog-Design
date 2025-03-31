// Function to handle creating a new post in the Admin panel
document.getElementById('new-post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('post-content').value;
    
    // Create a new post element
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    
    // Add post title, content, and a "Read More" link
    postElement.innerHTML = `
      <h3>${postTitle}</h3>
      <p>Posted on March 31, 2025 by Admin</p>
      <p class="summary">${postContent.slice(0, 100)}... <a href="#">Read More</a></p>
    `;
    
    // Add the new post to the post list
    document.getElementById('posts-list').appendChild(postElement);
    
    // Clear form fields
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
  });
  