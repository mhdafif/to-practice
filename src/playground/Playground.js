import React from 'react'
import { LoadingContext } from '../context/LoadingContext';

export const Playground = () => {

  const loadingContext = React.useContext(LoadingContext);
  const { loading, setLoading } = loadingContext;

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  };

  return (
    <div style={divStyle}>
      <button disabled={loading} onClick={setLoading} style={{padding: '6px 12px', fontSize: '14px', color: '#fff', backgroundColor: loading ? 'gray' : '#337ab7'}}>
        Tes loading HERE
      </button>
    </div>
  )
}
