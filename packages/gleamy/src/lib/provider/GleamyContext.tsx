import { createContext } from 'react';
import { type TProviderValues } from '../../types/provider/TProvider';
import { defaultGleamySettings } from './defaultGleamySettings';

export const GleamyContext = createContext<Partial<TProviderValues>>(
  defaultGleamySettings,
);
