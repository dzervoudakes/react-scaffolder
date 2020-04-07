/**
 * Imports and configures extensions for Jest.
 * @packageDocumentation
 */
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);
