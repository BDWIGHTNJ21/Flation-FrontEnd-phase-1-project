console.log("main.js connected");

// activate evenlistener using forcus and forcus on events within a form
const searchTermsInput = document.body.querySelector("#search-terms");

const renderMealCategories = () => {
  console.log('renderMealCategories')
}

const getMealCategories = async() =>{
  const mealCategoriesApiURL = "https://www.themealdb.com/api/json/v1/1/categories.php"

  try{
    const response = await fetch(mealCategoriesApiURL)
    const data = await response.json()
    const categories = await data.categories 
   console.log(`categories:`, categories); 
  } catch (error){
  console.log(error)
  alert('Something went wrong,try again later')
}

  return categories
}
const handleFormInputFocus = async () => {
  console.log("focus occurred"); 
  
 const mealCategoriesObj= await getMealCategories ();
 renderMealCategories();
};

searchTermsInput.addEventListener("focus", handleFormInputFocus);
