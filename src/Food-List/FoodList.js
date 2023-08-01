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
      {!isEmpty && <div className='mx-5 mt-5'>
        <div className="row">
          {filteredFoodList.map((food) => (
            <div key={food.id} className="col-md-4 mb-5">
              <div className="card d-flex flex-column h-100"> 
                <div className='m-3 flex-grow-1'> 
                  <div className='d-flex border-bottom mb-2'>
                    <div>
                      <h3 className='card-title'>{food.name}</h3>
                      <h6 className='card-subtitle mb-2 text-muted'>Category: {food.category}</h6>
                    </div>
                    <p className='ms-auto'>
                      {food.cat && <img src={CatIcon} alt="Cats" style={{height: "2rem"}} />} 
                      {food.dog && <img src={DogIcon} alt="Dog" style={{height: "2rem"}} />}  
                      {!food.dog && !food.cat && <img src={NoPetsIcon} alt="No Pets" style={{height: "2rem"}} />}
                    </p>
                  </div>
                  {food.benefits && <p><span className='text-success'>Benefits</span>: {food.benefits}</p>}
                  {food.instructions && <p class="card-text"><img src={WarningIcon} style={{height: "1.5rem", marginBottom: '5px' }}/> <b>Warning</b>: {food.instructions}</p>}
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
