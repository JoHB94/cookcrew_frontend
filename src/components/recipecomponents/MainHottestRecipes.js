import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import { BsFillStarFill } from 'react-icons/bs'

const HottestRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [like, setLike] = useState(false);

    

    
    useEffect(() => {
        axios.get('/popmain')
            .then((response) => {
                setRecipes(response.data)
            }) 
            ;
    }, []);

    return (
        <>
        <div className='py-10 pl-10' 
            style = {{
                
                width: "768px",
                display: "grid",
                gridTemplateRows: "1fr",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                
            }}
            >
                 {recipes.map(c => (
                    <Card key={c.rno}
                    style={{
                      width: '18rem',
                      fontSize: '1.125rem',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      margin: '1rem',
                    }}
                  >
                    
                    <Link to = {`/reciperef/${c.rno}`}>
                    <img
                      alt="Sample"
                      src={c.thumbPath}
                    />
                    </Link>
                    
                    <CardBody
                       >
                      
                      <CardTitle tag="h5" className='inline'>
                        <Link to={`/reciperef/${c.rno}`}><span className='inline'>{c.title}</span></Link><span className='inline'><LikeButton className='inline'/></span>
                      </CardTitle>
                     
                      
                      <Link to = {`/reciperef/${c.rno}`}>
                      <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                      >
                        칼로리: {c.kcal}
                      </CardSubtitle>
                      <CardText className="mb-2 text-muted"
                        tag="h6">
                        작성자: {c.regId}
                      </CardText>
                      </Link>
                      <span>
                        <Link to = {`/reciperef/${c.rno}`}></Link>
                      </span>
                      <div>

                        {/* <IconCheckboxes style={{float:"left"}}onClick={()=>{submit()}}/> */}
                        {/* <LikeButton className='inline items-end h-4'></LikeButton> */}
                        <span className='inline items-justify'><BsFillStarFill className='inline fill-yellow-400'/> {c.rating}</span>
                      </div>
                    </CardBody>
                  </Card>
                  
                ))}
            </div>
           
        </>
    );
}

export default HottestRecipes;