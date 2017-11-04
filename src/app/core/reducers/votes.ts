import { createSelector } from 'reselect';
import {Action} from '@ngrx/store';
export interface ActionWithPayload<T> extends Action {
  payload: T;
}
export interface State {
  votes: any[];
};

export const initialState: State = {
  votes: []
};

export function reducer(state = initialState, action: ActionWithPayload<any> ): State {
  switch (action.type) {
    case 'ADD_VOTE': {

      return {
        votes: [ ...state.votes ]
      };
    }

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

export const getVotes = (state: State) => state.votes;
