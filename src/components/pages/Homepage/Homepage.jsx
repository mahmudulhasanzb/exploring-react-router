import React, { use } from 'react';
import { NavLink } from 'react-router';

const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts/').then(
  res => res.json(),
);

const Homepage = () => {
  const posts = use(postsPromise);
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-5 mt-5 ">This is Home page</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {posts.map(post => {
          console.log(post.title);
          return (
            <div
              key={post.id}
              className="card bg-neutral text-primary-content max-w-96"
            >
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
                <div className="card-actions justify-end">
                  <NavLink to={`/details/${post.id}` }className="btn btn-primary">Show Details</NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
