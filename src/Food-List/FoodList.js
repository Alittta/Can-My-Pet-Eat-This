// FoodList.js
import React, { useState, useEffect } from 'react';
import CatIcon from '../Assets/icon_cat.png';
import DogIcon from '../Assets/icon_dog.png';
import WarningIcon from '../Assets/icon-warning.png';
import NoPetsIcon from '../Assets/icon-no-pet.png';
import ErrorMsg from '../UI/ErrorMsg';

const FoodList = ({ foodList, searchQuery, selectedCategory }) => {
  const errorMsg = "Oops! looks like we couldn't find any matches!";
  const [isEmpty, setIsEmpty] = useState(false);

  const filteredFoodList = foodList.filter((food) => {
    const nameMatches = food.name.toLowerCase().includes(searchQuery.toLowerCase());

    const isFilterByAll = selectedCategory === "All";
    const isFilterByCat = selectedCategory === "Cat" && food.cat;
    const isFilterByDog = selectedCategory === "Dog" && food.dog;
    const isFilterByToxic = selectedCategory === "Toxic" && !food.cat && !food.dog;
    
    return nameMatches && (isFilterByAll || isFilterByCat || isFilterByDog || isFilterByToxic);
  });

  useEffect(() => {
    setIsEmpty(filteredFoodList.length === 0);
  }, [filteredFoodList]);
  
  filteredFoodList.sort((a,b) => a.name.localeCompare(b.name));
  
  return (
    <div>
      {!isEmpty && <div className='col-9 offset-2 mt-5'>
        <div className="row">
          {filteredFoodList.map((food) => (
            <div key={food.id} className="col-md-4 mb-4">
              <div className="card d-flex flex-column h-100"> 
                <div className='m-3 flex-grow-1'> 
                  <div className='d-flex'>
                    <h3>{food.name}</h3>
                    <p className='ms-auto'>
                      {food.cat && <img src={CatIcon} alt="Cats" style={{height: "2rem"}} />} 
                      {food.dog && <img src={DogIcon} alt="Dog" style={{height: "2rem"}} />}  
                      {!food.dog && !food.cat && <img src={NoPetsIcon} alt="No Pets" style={{height: "2rem"}} />}
                    </p>
                  </div>
                  <p>Category: {food.category}</p>
                  {food.instructions && <p><img src={WarningIcon} style={{height: "1.5rem", marginBottom: '5px' }}/> Warning: {food.instructions}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      } 
      {isEmpty && <ErrorMsg msg={errorMsg}/>}
    </div>
  );
};

export default FoodList;
