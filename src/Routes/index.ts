import { useRoutes } from 'react-router-dom';

// routes
import UiRoute from './Animation';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([UiRoute]);
}
