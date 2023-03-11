import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import axios from 'axios';
import Editrecipes from './Editrecipes';

const Home = () => {
  var [recipe,setRecipe] = useState([]);
  var [updatedRecipes,setUpdatedRecipes] = useState(false);
  var [editRecipes,seteditMovies] = useState('');
  var editedRecipes;

  useEffect(()=>{
   fetchRecipe();
  },[]);

   const fetchRecipe =() =>{
    axios.get('http://localhost:7000/api/view')
    .then((response)=>{
      console.log(response.data)
      setRecipe(recipe = response.data)
    })
   }

   const deleteRecipe = (id) =>{
    const data = { "_id":id }
    axios.post('http://localhost:7000/api/delete',data)
    .then((response) =>{
      console.log(response.data)
      alert('Deleted Successfully');
      fetchRecipe();
    })
   }

   const updateRecipe =(value)=>{
    console.log(value);
    setUpdatedRecipes(true)
    seteditMovies(value)
    console.log(updateRecipe)

   }
   if(updatedRecipes){
    editedRecipes = <Editrecipes value={editRecipes}/>
   }else{
    editedRecipes = 
    <div className='card'>
      {recipe.map((value,index)=>{
        return(

          <Card sx={{ minWidth: 250 }}>
          <CardMedia
            sx={{ height: 140 }}
            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{value.recipeName}</Typography>
            <Typography variant="body2" color="text.secondary">
            {value.recipeType}
            </Typography>
            <div className='icon'>
            <div className='time'>
            <AccessTimeIcon/>
            <p>{value.recipeDuration}</p>
            </div>
            <div className='icon2'>
                <PeopleIcon/>
            </div>
            </div>
          </CardContent>
          <CardActions>
            <Button onClick={()=>{updateRecipe(value)}} variant='contained' size="small">Edit</Button>
            <Button onClick={()=>{ deleteRecipe(value._id) }} variant='contained' size="small" color='error'>Delete</Button>
          </CardActions>
        </Card>

        )
      })
   
}
    </div>
   }

  return (
  editedRecipes
  )
}

export default Home;