import React from 'react';
import Blog from './Blog';

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: 'How to get notifications on iOS with personal focus on?',
      image: '../img/blog/iphone-mail-notifications.jpg',
      content: 'Are you one of those people who have been experiencing difficulty getting notifications on your iPhone lately?.',
    },
    {
      id: 2,
      title: 'Circle of Daily Rhythm',
      image: '../img/blog-writing.jpg',
      content: 'The circle of daily rhythm is the pattern of behaviors and activities that one follows throughout a typical day.',
    },

];

  return (
    <div>
      {blogs.map(blog => (
        <Blog
          key={blog.id}
          title={blog.title}
          image={blog.image}
          content={blog.content}
        />
      ))}
    </div>
  );
}

export default BlogList;
