import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
      <NavLink to='/cuisine/Indian'>
        <SLink> 
            <GiChopsticks />
            <h4>Indian</h4>
        </SLink>
      </NavLink>
      <NavLink to='/cuisine/Italian'>
          <SLink>
            <FaPizzaSlice/>
            <h4>Italian</h4>
         </SLink>
      </NavLink>
      <NavLink to='/cuisine/American'>
        <SLink>
          <FaHamburger/>
          <h4>American</h4>
        </SLink> 
      </NavLink>
      <NavLink to='/cuisine/Thai'>
        <SLink>
          <GiNoodles />
          <h4>Thai</h4>
        </SLink>
      </NavLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg,#494949, #313131);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transformation: scale(0.8);

  h4{
    color: white;
    font-size: 0.8rem;
  }
  svg{
    color: white;
    font-size:1.5rem;
  }

  &:hover{
    background: linear-gradient(to right, #f27121, #e94057);
    svg{
      color: white;
    }
    h4{
      color:white;
    }
  }

`;

export default Category
