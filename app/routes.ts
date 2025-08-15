import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('login', 'routes/LoginPage/index.tsx'),
  route('login/koreapas', 'routes/KoreapasLoginPage/index.tsx'),
  route('live/:sports', 'routes/LivePage/index.tsx'),
  route('signup', 'routes/SignUpPage/index.tsx'),
] satisfies RouteConfig;
