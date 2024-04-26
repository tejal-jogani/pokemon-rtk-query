import { setupServer } from 'msw/node';
import { handlers as serverHandlers } from './serverHandlers';

const server = setupServer(...serverHandlers);

export { server };