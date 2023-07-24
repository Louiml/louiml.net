import React from 'react';

const NotFoundPage = () => {

  const HomePageRoute = () => {
    window.location.pathname = '/';
   };

  return (
    <div className='NotFound-Page'>
      <h1>404 - Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <button onClick={HomePageRoute} className='NotFound-Button-Page'>Home Page</button>
    </div>
  );
};

export default NotFoundPage;
