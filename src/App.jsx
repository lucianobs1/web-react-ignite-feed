import React from 'react';
import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

function App() {
  return (
    <>
      <Header />
      <Post
        author="Luciano Brandão"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consectetur porro sint ipsam voluptatibus ad tempora alias. Nihil ipsam, similique eveniet, repudiandae necessitatibus accusamus suscipit non atque neque facere aliquid!"
      />
    </>
  );
}
export { App };
