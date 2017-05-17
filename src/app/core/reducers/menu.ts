import { createSelector } from 'reselect';
import {Action} from '@ngrx/store';

export interface State {
  leftMenuOpen: boolean,
  rightMenuOpen: boolean
};

export const initialState: State = {
  leftMenuOpen: false,
  rightMenuOpen: false
};

export function reducer(state = initialState, action: Action ): State {
  switch (action.type) {
    case 'TOGGLE_LEFT_MENU':

      return { ...state, leftMenuOpen: action.payload }


    case 'TOGGLE_RIGHT_MENU':

      return { ...state, rightMenuOpen: action.payload }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getLeftMenuOpen = (state: State) => state.leftMenuOpen;
export const getRightMenuOpen = (state: State) => state.rightMenuOpen;
