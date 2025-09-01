import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('login', 'routes/LoginPage/index.tsx'),
  route('login/koreapas', 'routes/KoreapasLoginPage/index.tsx'),
  route('record', 'routes/Record.tsx'),
  route('player', 'routes/Player.tsx'),
  route('signup', 'routes/SignUpPage/index.tsx'),
  route('application', 'routes/DrawPage/index.tsx'),
  route('prediction', 'routes/PredictionPage/index.tsx'),
  layout('common/components/AuthGuard/index.tsx', [
    route('welcome', 'routes/WelcomePage/index.tsx'),
    route('live/:sports', 'routes/LivePage/index.tsx'),
    route('attendance', 'routes/AttendancePage/index.tsx'),
    route('attendance/game', 'routes/GamePage/index.tsx'),
    route('account', 'routes/EditInfoPage/index.tsx'),
    route('tickets', 'routes/TicketHistoryPage/index.tsx'),
  ]),
] satisfies RouteConfig;
