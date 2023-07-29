// BootstrapWrapper.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (optional, for components that require JS)

const BootstrapWrapper = ({ children }) => {
  return <>{children}</>;
};

export default BootstrapWrapper;
