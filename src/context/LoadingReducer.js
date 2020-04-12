export const LoadingAction = {
  SET_LOADING: '@@SET_LOADING',
}

export const LoadingReducer = (state, action) => {
  switch (action.type) {
    case LoadingAction.SET_LOADING:
      return { ...state, loading: action.loading };
  
    default:
      return state;
  }
}