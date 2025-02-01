import { Weather } from '../services/http.services';
import { signalStore, withState } from '@ngrx/signals';

type WeatherState = {
  books: Weather[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: WeatherState = {
  books: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const WeatherStore = signalStore(withState(initialState));
