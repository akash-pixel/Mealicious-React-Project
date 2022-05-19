import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/search/'+input);
    }   


  return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch/>
                <input onChange={(e)=>{setInput(e.target.value)}} text="text" value={input} />
            </div>
        </FormStyle>    
  )
}

const FormStyle = styled.form`
    margin: 0% 26%;
    div{
        position: relative;
        width: 100%;
    }
    input {
        border: none;
        background: #313131;
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none
    }

    svg{
        color: white;
        postion: relative;
        top:80%;
        left:0%;
        transform: translate(200%, 20%);
    }
`

export default Search
