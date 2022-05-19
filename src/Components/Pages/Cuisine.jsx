import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisne = async(name) =>{
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
      const recipes = await data.json();
      setCuisine( recipes.results );
    }

    useEffect(() => {
      getCuisne(params.type); 
    }, [params.type])
    

  return (
    <Grid 
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{duraiton:0.5}}
    >
      {cuisine.map(item =>{
        return (
          <Card key={item.id} >
            <Link to={"/recipe/"+item.id} >
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-grap: 3rem;
`;

const Card = styled.div`
  margin:1rem;
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h1{
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine