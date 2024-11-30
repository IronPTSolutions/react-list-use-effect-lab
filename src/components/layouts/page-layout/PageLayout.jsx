import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PageLayout = ({ children }) => {
  return (
    <div className="container mt-4 mb-4">
      {children}
    </div>
  );
};

export default PageLayout;