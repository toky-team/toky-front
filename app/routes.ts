import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('login', 'routes/LoginPage/index.tsx'),
  route('login/koreapas', 'routes/KoreapasLoginPage/index.tsx'),
] satisfies RouteConfig;
