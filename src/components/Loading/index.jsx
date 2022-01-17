import React from 'react';
import styled from 'styled-components'

export const Loading = ({id, colors}) => {

  return (
    <>
        <Container colors={colors}>
            <div className="loader"></div>
        </Container> 
    </>
  );
}


const Container = styled.div`

    .loader {
        border: 6px solid ${({colors}) => colors.primary}; 
        border-top: 6px solid ${({colors}) => colors.secundary};
        border-bottom: 6px solid ${({colors}) => colors.secundary};
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

