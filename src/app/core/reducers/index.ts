import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromMenu from './menu';
import * as fromVotes from './votes';


// collect States from multiple files
export interface State {
  menu: fromMenu.State,
  votes: fromVotes.State
}

// collect all reducers
const reducers = {
  menu: fromMenu.reducer,
  votes: fromVotes.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getMenuState = (state: State) => state.menu;
export const getVotesState = (state: State) => state.votes;

export const getIsLeftMenuOpen = createSelector(getMenuState, fromMenu.getLeftMenuOpen);
export const getIsRightMenuOpen = createSelector(getMenuState, fromMenu.getRightMenuOpen);

export const getVotes = createSelector(getVotesState, fromVotes.getVotes);
