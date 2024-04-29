import React from 'react';
import CreatePost from '../CreatePost';
const CreatePostPage = () => {
  const handlePostSubmit = async (postData) => {
    try {
      // Send post data to server (replace with actual API call)
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Failed to create post.');
      }

      // Handle successful post creation
      console.log('Post created successfully!');
    } catch (error) {
      // Handle error
      console.error('Error creating post:', error.message);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <CreatePost onSubmit={handlePostSubmit} />
    </div>
  );
};

export default CreatePostPage;
