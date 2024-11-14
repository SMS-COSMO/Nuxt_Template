import { router } from '../trpc';
import { userRouter } from './user';
import { s3Router } from './s3';

export const appRouter = router({
  user: userRouter,
  s3: s3Router,
});

export type AppRouter = typeof appRouter;
