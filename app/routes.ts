import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('login', 'routes/LoginPage/index.tsx'),
  route('login/koreapas', 'routes/KoreapasLoginPage/index.tsx'),
  route('record', 'routes/Record.tsx'),
  route('signup', 'routes/SignUpPage/index.tsx'),
  layout('common/components/AuthGuard/index.tsx', [
    route('live/:sports', 'routes/LivePage/index.tsx'),
    route('prediction', 'routes/PredictionPage/index.tsx'),
  ]),
] satisfies RouteConfig;
