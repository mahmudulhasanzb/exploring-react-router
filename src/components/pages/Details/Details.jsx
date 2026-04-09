import React, { use } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router';

// const postPromise = fetch('https://jsonplaceholder.typicode.com/posts/').then(res => res.json())

const Details = () => {
  const{ id} = useParams();
  // const posts = use(postPromise)
  const posts = useLoaderData();
  console.log("=====================")
  console.log("paramsId:", id, "-", "post:", posts)
  console.log("=====================")
  const expectedPost = posts.find(post=> post.id == id)
  console.log(expectedPost)
  return (
    <div className="max-w-9/10 mx-auto mt-20">
      <div className="card bg-info  shadow-sm p-10">
        <div className="card-body">
          <h2 className="card-title text-primary">Details</h2>
          <p className="font-bold text-xl">
            {expectedPost.body}{' '}
            <span className='text-sm font-normal'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, adfjak,
              quibusdam nemo, tempore blanditiis unde qui, tempora eaque aperiam
              repellendus ea molestiae iusto quidem voluptatibus repellat quod
              ratione fuga. Debitis, natus
            </span>
          </p>
          <div className="card-actions justify-end">
            <NavLink to="/" className="btn btn-primary">
              Back
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;