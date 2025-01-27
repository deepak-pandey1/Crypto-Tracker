import React from 'react'
import styled from 'styled-components';


function SelectButton( {children, selected, onClick } ) {

    const StyledButton = styled('span')({
        border: '1px solid gold',
        borderRadius: 5,
        padding: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        fontFamily: 'Montserrat',
        cursor: 'pointer',
        backgroundColor: selected ? 'gold' : '',
        color: selected ? 'black' : '',
        fontWeight: selected ? 900 : 700,
        '&:hover': {
          backgroundColor: 'gold',
          color: 'black',
        },
        width: '22%',
        margin: '0 10px', // Add margin to create space between buttons
    });

  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default SelectButton