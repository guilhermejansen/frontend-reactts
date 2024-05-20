import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/guilhermejansen.png',
      name: 'Guilherme Jansen',
      role: 'CO @setupautomatizado'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'guilhermejansen.com.br' },
    ],
    publishedAt: new Date('2024-05-03 07:23:00'), 
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/setup-automatizado.png',
      name: 'Setup Automatizado',
      role: 'CTO @setupautomatizado'
    },
    content: [
      { type: 'paragraph', content: 'Show de Bola!' },
      { type: 'paragraph', content: 'Top de mais minha aplicação!' },
      { type: 'link', content: 'setupautomatizado.com.br' },
    ],
    publishedAt: new Date('2024-05-03 07:23:00'), 
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
        })}
        </main>
      </div>
    </div>
  )
}
