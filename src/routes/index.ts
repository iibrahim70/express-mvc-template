import { Router } from 'express';

const router = Router();

const routes = [{ path: '/pathname', route: ImportRoute }];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
