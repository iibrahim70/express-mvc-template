import { Router } from 'express';

const router = Router();

const routes = [{ path: '/pathname', route: 'RouteLocation' }];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
