import { Container } from '@/components/styled';
import { Link } from 'react-router-dom';
import { navigationItems } from './AppNavigation.static';
import { ItemsList, NavigationNode } from './AppNavigation.styled';

export const AppNavigation = () => (
  <NavigationNode>
    <Container>
      <ItemsList>
        {navigationItems.map(item => (
          <li key={item.path}>
            <Link to={`components/${item.path}`}>{item.label ?? item.path}</Link>
          </li>
        ))}
      </ItemsList>
    </Container>
  </NavigationNode>
);

