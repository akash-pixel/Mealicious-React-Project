import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    useEffect(()=>{

        const fetchDetails = async()=>{
            const url = `https://api.spoonacular.com/recipes/${params.recipe}/information?apiKey=${process.env.REACT_APP_API_KEY}`
            const data = await fetch(url);
            const detailData = await data.json();
            setDetails( detailData);
        }

        fetchDetails();
    },[params.recipe ])

  return (
    <DetailWrapper >
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <Button className={activeTab === "instructions"?"active":''} onClick={()=>{setActiveTab("instructions")}}>
                Instructions
            </Button>
            <Button className={activeTab === "ingredients"?'active':''} onClick={()=>{setActiveTab("ingredients")}}>
                Ingredients
            </Button>
            
            { activeTab==="instructions" && 
                (<Description style={{"fontFamily":"Times New Roman"}} >
                    <h4  dangerouslySetInnerHTML={{__html: details.summary }}></h4>
                    <h4 dangerouslySetInnerHTML={{__html: details.instructions }}></h4>
                </Description>)
            }

            { activeTab==="ingredients" && 
                (<ul>
                    {details.extendedIngredients.map((ingredient)=>{
                       return <li key={ingredient.id}>{ingredient.original} </li>
                    })}
                </ul>)
            }
            
            
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active{
        &.active{
            background: black;
            color:white;
        }    
    }

    img{
        max-height: 16rem;
        max-width: 25rem;
    }
    h2{
        margin-bottom:2rem;
    }
    li{
        font-size:1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 1rem;
    margin-top: 1rem;
    font-weight: 600;

`;
const Info = styled.div`
    margin-left: 10rem;
`;

const Description = styled.div`
    margin-top : 20px; 
    font-family: 'Sans-serif';
    letter-spacing: 1px;
`

export default Recipe