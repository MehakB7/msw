import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { mswServer } from "./mock/server";
import { afterEach, beforeAll, afterAll } from '@jest/globals';
import { configure } from '@testing-library/react';

beforeAll(() => mswServer.listen())
afterEach(() => mswServer.resetHandlers())
afterAll(() => mswServer.close())
configure({ testIdAttribute: 'data-cy' });

