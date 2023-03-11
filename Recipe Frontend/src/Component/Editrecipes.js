import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const Editrecipes = (props) => {

    console.log(props)

    var [newRecipes,setnewRecipes] = useState({

        recipeName : props.value.recipeName,
        recipeDuration : props.value.recipeDuration,
        
        recipeType : props.value.recipeType
    
      });

      const inputHandler = (event) =>{
        const { name, value } = event.target;
        setnewRecipes((previousState) =>({
          ...previousState,
          [name] : value,
        }));
      };

      const readValues = () =>{
        var newData = { ...newRecipes , _id : props.value._id };
        axios.post('https://localhost:7000/api/update',newData)
        .then((response) =>{
          console.log('New Data' + response.data);
          alert('Success');
          window.location.reload();
    
        }); 
      };
    

  return (
    <div className='add'>
     <div className='recipe'>
      <form>
      <h2>Edit Cuisine</h2>
      <br/>
      <TextField name="recipeName" value={newRecipes.recipeName} onChange={inputHandler} variant='outlined'  label='Name'></TextField>
      <br/>
      <br/>
      <TextField  name="recipeDuration" value={newRecipes.recipeDuration} onChange={inputHandler} variant='outlined' label='Duration'></TextField>
      <br/>
      <br/>
      <TextField  name="recipeType" value={newRecipes.recipeType} onChange={inputHandler} type='text' variant='outlined' label='Descrption'></TextField>
      <br/>
      <br/>
      <Button onClick={readValues} variant='contained' >Update</Button>
      </form>
     </div>
    </div>
  )
}

export default Editrecipes;