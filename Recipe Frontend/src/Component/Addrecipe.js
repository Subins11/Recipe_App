import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useForm from './useForm';

const Addrecipe = () => {

  var [recipes,setrecipes] = useForm({recipeName:"",recipeDuration:"",recipeType : ""});
  var [result,setResult] = useState({});

  const addRecipe =()=>{
    console.log(recipes);
    axios.post('http://localhost:7000/api/create', recipes)
    .then((response) =>{
      console.log(response.data)
      setResult(result = response.data)
    })
  }
  return (
    <div className='add'>
     <div className='recipe'>
      <form>
      <h2>Add Cuisine</h2>
      <br/>
      <TextField name="recipeName" value={recipes.recipeName} onChange={setrecipes} variant='outlined'  label='Name'></TextField>
      <br/>
      <br/>
      <TextField  name="recipeDuration" value={recipes.recipeDuration} onChange={setrecipes} variant='outlined'  label='Duration'></TextField>
      <br/>
      <br/>
      <TextField  name="recipeType" value={recipes.recipeType} onChange={setrecipes} type='text' variant='outlined'  label='Description'></TextField>
      <br/>
      <br/>
      <Button onClick={addRecipe} variant='contained' color='success' fullWidth>ADD RECIPE</Button>
      </form>
     </div>
    </div>
  )
}

export default Addrecipe;