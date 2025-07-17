import { z } from 'zod';
import { config } from 'dotenv';

if (process.env.NODE_ENV === 'test') {
  config({
    path: '.env.test',
  });
} else {
  config();
}

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string(),
  NODE_ENV: z.string().default('dev'),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('Error in reading variables', _env.error.format());

  throw new Error('Invalid enviroment variables');
}

const env = _env.data;

export default env;
