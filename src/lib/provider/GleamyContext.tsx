import { createContext } from 'react';
import { TProviderValues } from '../types/provider/TProvider';

export const GleamyContext = createContext<Partial<TProviderValues>>({});
