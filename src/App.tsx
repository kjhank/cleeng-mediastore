import { useState } from 'react';
import { Theme } from '@/theme';
import logo from './logo.svg';
import {
  Header, Link, Logo, Wrapper,
} from './App.styled';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Theme>
      <Wrapper>
        <Header>
          <Logo
            alt="logo" className="App-logo"
            src={logo}
          />
          <p>Hello Vite + React!</p>
          <p>
            <button onClick={() => setCount(current => current + 1)} type="button">
              count is:
              {' '}
              {count}
            </button>
          </p>
          <p>
            Edit
            {' '}
            <code>App.tsx</code>
            {' '}
            and save to test HMR updates.
          </p>
          <p>
            <Link
              href="https://reactjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn React
            </Link>
            {' | '}
            <Link
              href="https://vitejs.dev/guide/features.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vite Docs
            </Link>
          </p>
        </Header>
      </Wrapper>
    </Theme>
  );
};

export default App;
