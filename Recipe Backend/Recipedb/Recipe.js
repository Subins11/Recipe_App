//importing Mongoose
const mongoose = require("mongoose");

//Connect to the Database
mongoose.connect("mongodb+srv://Subin_S:Subin@cluster0.y9zoefe.mongodb.net/?retryWrites=true&w=majority");

//creating Schema

const Schema = mongoose.Schema;
 var recipeSchema = new Schema({
    recipeName : String,
    recipeDuration : Number,
    recipeNumber : Number
   });

var recipeDetails = mongoose.model("recipes",movieSchema);

//exporting module
module.exports = recipeDetails;