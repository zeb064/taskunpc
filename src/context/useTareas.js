import { useContext } from 'react';
import { TareasContext } from './tareasContextValue';

export const useTareas = () => useContext(TareasContext);
