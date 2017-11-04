import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromMenu from './menu';
import * as fromVotes from './votes';


// collect States from multiple files
export interface State {
  menu: fromMenu.State,
  votes: fromVotes.State
}

// collect all reducers
export const reducers: ActionReducerMap<State> = {
  menu: fromMenu.reducer,
  votes: fromVotes.reducer
};

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

export const getMenuState = (state: State) => state.menu;
export const getVotesState = (state: State) => state.votes;

export const getIsLeftMenuOpen = createSelector(getMenuState, fromMenu.getLeftMenuOpen);
export const getIsRightMenuOpen = createSelector(getMenuState, fromMenu.getRightMenuOpen);

export const getVotes = createSelector(getVotesState, fromVotes.getVotes);
