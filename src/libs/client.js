import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'temp',
  apiKey: process.env.API_KEY,
});