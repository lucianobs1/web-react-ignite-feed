import React from 'react';
import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Luciano Brandão"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae deserunt veniam. Voluptates enim nam id iste officia maxime possimus quis dicta! Illum, consequatur odio tempora soluta excepturi odit porro."
          />
          <Post
            author="John Doe"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores beatae deserunt veniam. Voluptates enim nam id iste officia maxime possimus quis dicta! Illum, consequatur odio tempora soluta."
          />
        </main>
      </div>
    </>
  );
}
export { App };
