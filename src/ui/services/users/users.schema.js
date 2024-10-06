import { z } from 'zod';

export const userSchema = z.object({
  _id: z.string(),
  email: z.string(),
  admin: z.boolean(),
  gitAccount: z.string(),
  username: z.string(),
});
