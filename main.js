console.log("main.js connected");

// activate evenlistener using forcus and forcus on events within a form
const searchTermsInput = document.body.querySelector("#search-terms");


// fetch meal categories data from TheMeal BD api
const getMealCategories = async() => {
  const mealCategoriesApiURL = "https://www.themealdb.com/api/json/v1/1/categories.php"

  try{
    const response = await fetch(mealCategoriesApiURL);
    const data = await response.json();
    const categories = await data.categories; 
   console.log(`categories:`, categories); 
   return categories;
  } catch (error){
  console.log(error);
  alert('Something went wrong,try again later');
}
};
// render meal categories data to dom
const renderMealCategories = (mealCategoriesArray) => {
  console.log('renderMealCategories');
  console.table(mealCategoriesArray);

            
  
  // find and select a ul with meal categories ID dom element to appened data
  const mealCategoriesList=document.body.querySelector('#meal-categories-list')
  mealCategoriesArray.forEach(mealCategory => {
 
 //create wrapping element <li>
 const mealCategoryListItem=document.createElement('li');
 mealCategoryListItem.className='meal-category-card';
 // apprehend child li.card to selected DOM element
 mealCategoriesList.appendChild(mealCategoryListItem);
  //display the category name, image and description
 
 //----------------------Meal Categories-------------
 //------IMG----------------IMAG CATEGORIES RENDERS FROM API TO DOM(WEBPAGE)
 // create an Meal Categories iMg elements START ADDING IMG
const mealCategoryImg=document.createElement('img');
//set img src to category thrumbnail url
mealCategoryImg.src=mealCategory?.strCategoryThumb
//give it a mobile friendly max width of like 300px
mealCategoryImg.with=300
//apprendChild the image to our card  LAST IMAGE CUSTOMLIZATION
mealCategoryListItem.appendChild(mealCategoryImg);

// ----NAME-------------------display catagories names-----------
//create an he 4 element
const mealCategoryName= document.createElement('h4');
//set h4 element textContent to be meal category name
mealCategoryListItem.appendChild(mealCategoryName);
//apprendChild h4 to the card
mealCategoryListItem.appendChild(mealCategoryName);

//DESCRIPTION----------------- OF ELEMENT
//create an paragraph elemment
const mealCategoryDescription = document.createElement('p');
// set p element textContent to be meal category description 
mealCategoryDescription.textContent=mealCategory?.strCategoryDescription
// appendChild the p to our card
mealCategoryListItem.appendChild(mealCategoryDescription);
  });

};


//function to call when form input is given focus
const handleFormInputFocus = async () => {
  console.log("focus occurred"); 
  
 const mealCategoriesArray= await getMealCategories ();
 renderMealCategories(mealCategoriesArray);
};
// add eventlistener to search term input
searchTermsInput.addEventListener("focus", handleFormInputFocus);
