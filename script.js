
url ="./api.json"

fetch(url)
  .then(response => response.json())
  .then(data => {
    const apple = data.find(item => item.name === 'Apple');
    const avocado = data.find(item => item.name === 'Avocado');
    const mango = data.find(item => item.name === 'Mango');
    
    console.log(`Apple calories: ${apple.nutritions.calories}`);
    console.log(`Avocado fat: ${avocado.nutritions.fat}`);
    console.log(`Mango carbohydrates: ${mango.nutritions.carbohydrates}`);
  })
  .catch(error => console.error('Error:', error));