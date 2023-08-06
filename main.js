console.log("main.js connected");

// activate evenlistener using forcus and forcus on events within a form
const searchTermsInput = document.body.querySelector("#search-terms");

// fetch meal categories data from TheMeal BD api
const getMealCategories = async() => {
  const mealCategoriesApiURL = "https://www.themealdb.com/api/json/v1/1/categories.php"

  try{
    const response = await fetch(mealCategoriesApiURL)
    const data = a1wait response.json()
    const categories = await data.categories 
   console.log(`categories:`, categories); 
   return categories;
  } catch (error){
  console.log(error)
  alert('Something went wrong,try again later')
}




}
// render meal catefories data to dom
const renderMealCategories = (mealCategoriesObj) => {
  console.log('renderMealCategories')
  console.table(mealCategoriesObj)
            
  
              // Things that completed
  // find and select a ul with meal categories ID dom elemt to appened data
  const mealCategoriesList=document.body.querySelector('#meal-categories-list')
  mealCategoriesArray.forEach(mealCategory =>{

  });

}
//function to call when form input is given focus
const handleFormInputFocus = async () => {
  console.log("focus occurred"); 
  
 const mealCategoriesObj= await getMealCategories ();
 renderMealCategories(mealCategoriesObj);
};
// add eventlistener to search term input
searchTermsInput.addEventListener("focus", handleFormInputFocus);
