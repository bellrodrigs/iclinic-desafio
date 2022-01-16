import React from 'react';
import styled from 'styled-components'

export const Loading = ({id}) => {

  return (
    <>
    {
        !id ? 
        <HomeLoading>
            <div className="loader"></div>
        </HomeLoading> 
        :
        <ResultLoading id={id}>
            <div className="loader"></div>
        </ResultLoading> 
    }
    </>
  );
}


const HomeLoading = styled.div`

    .loader {
        border: 6px solid #fff; /* Light grey */
        border-top: 6px solid #2C97D1; /* Blue */
        border-bottom: 6px solid #2C97D1;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`
const ResultLoading = styled.div`

    .loader {
        border: 16px solid ${({id}) => id === 1 ? '#2B2B2B' : '#FBFE63' }; /* Light grey */
        border-top: 16px solid ${({id}) => id === 1 ?  '#FBFE63' : '#2B2B2B' }; /* Blue */
        border-bottom: 16px solid ${({id}) => id === 1 ?  '#FBFE63' : '#2B2B2B' };
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

