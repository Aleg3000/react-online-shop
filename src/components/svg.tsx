import React from 'react';

interface ISVGProps {
  id: string;
}

const Svg = ({ id }: ISVGProps) => {
  switch (id) {
    case 'search':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      );
    case 'login':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
      );
    case 'bag':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20,6h-4c0-2.21-1.79-4-4-4S8,3.79,8,6H4v16h16V6z M10,11H8V8h2V11z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M16,11 h-2V8h2V11z"></path>
        </svg>
      );
    default:
      return <div></div>;
  }
};

export default Svg;
