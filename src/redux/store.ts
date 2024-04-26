import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from '../services/pokemon'

/* Configure store redux-toolkit */
const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
