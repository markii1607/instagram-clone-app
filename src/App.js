import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram logo"
        />
      </div>

      {/* Posts */}
      <Post />
    </div>
  );
}

export default App;
