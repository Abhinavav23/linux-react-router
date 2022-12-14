import React from 'react'
import { useSearchParams } from 'react-router-dom';

export const Product = () => {
   const  [searchValue, setSearchValue] = useSearchParams();
   console.log(searchValue);
    let type;
    let color;
    type = searchValue.get('clothType');
    color = searchValue.get('color');
    console.log(type);
    if(!type) type = 'please select a cloth type';
  return (
   <>
     <h3>Product</h3>
     <button onClick={() => setSearchValue({clothType: 'shirt', color: 'black'})}>black shirt</button>
     <button onClick={() => setSearchValue({clothType: 'shirt', color: 'green'})}>green shirt</button>
     <button onClick={() => setSearchValue({clothType: 'shirt', color: 'white'})}>white shirt</button>
     <button onClick={() => setSearchValue({clothType: 'jeans'})}>jeans</button>

    <h3>Cloth type: {type}</h3>
    <h3>Color selected:  {color}</h3>
   </>
  )
}
