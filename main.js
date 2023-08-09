console.log("main.js connected");

// activate evenlistener using forcus and forcus on events within a form
//const searchTermsInput = document.body.querySelector("#search-terms");
//--------------------New---------------------------------
function carsData() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    function carsDataData() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
      
        fetch('data.json')
          .then(response => response.json())
          .then(data => {
            const filteredData = data.filter(item => item.category.toLowerCase().includes(searchInput));
            displayResults(filteredData);
          })
          .catch(error => console.error('Error:', error));
      }
      
      function displayResults(data) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
      
        if (data.length === 0) {
          resultsDiv.textContent = 'No results found.';
          return;
        }

        const table = document.createElement('table');
        const tableHeader = document.createElement('tr');
        tableHeader.innerHTML = '<th>Brand</th><th>Model</th><th>Type</th>';
        table.appendChild(tableHeader);
      
        data.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `<td>${item.brand}</td><td>${item.model}</td><td>${item.type}</td>`;
          table.appendChild(row);
        });
      
        resultsDiv.appendChild(table);
      };
// fetch Car type data from  BD api


function addCars() {
    const cars = document.getElementById('cars').value;
    
    const Brand = document.getElementById('Brand').value;
    const model =  document.getElementById('model').value;
    const type = document.getElementById('type').value;
    
    const carsData = {
      brand : brand ,
      model: model,
      type: type,
    };
    //============= add input data to json file Removed option ==================//
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        data.push(carsData);
        return data;
      })
      .then(uptypedData => {
        fetch('data.json', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(uptypedData)
        });
      })
      .catch(error => console.error('Error:', error));
    
    displayCars();
  }
  //==============Belongs to the returns that was removed ====================================//
  function returnCars() {
    const returnInput = document.getElementById('return').value;
    
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const uptypedData = data.filter(item => item.type !== returnInput);
        return uptypedData;
      })
      .then(uptypedData => {
        fetch('data.json', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(uptypedData)
        });
      })
      .catch(error => console.error('Error:', error));
    
    displayCars();   
  }
  //=========== add data to table and display results ==============//
  
  function displayCars() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.getElementById('carsData');
        tableBody.innerHTML = '';
      
        data.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${item.brand}</td>
            <td>${item.model}</td>
            <td>${item.type}</td>
            `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error:', error))
    
    }
  displayCars() 
}