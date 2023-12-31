import './App.css';
import { Component } from 'react';
import { loadPosts } from './utils/loadPosts';
import { Posts } from './components/Posts';

// 👉 Componente de classe
class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const postsAndPhotos = await loadPosts();

    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

export default App;
