import React from 'react'
import { LoadingReducer, LoadingAction } from './LoadingReducer';
import { LoadingContext } from './LoadingContext';

export const LoadingState = (props) => {
  const initialState = { loading: false };
  const [state, dispatch] = React.useReducer(LoadingReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: LoadingAction.SET_LOADING,
      loading: !state.loading
    });

    setTimeout(() => {
      dispatch({
        type: LoadingAction.SET_LOADING,
        loading: state.loading
      });
    }, 3000);
  }

  return (
    <LoadingContext.Provider
      value={{
        setLoading,
        loading: state.loading
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  )
}
