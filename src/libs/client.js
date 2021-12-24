import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: SERVICE,
  apiKey: API_KEY,
});