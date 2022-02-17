import React, { useState } from 'react';
import Cat from './Cat';

const Category = () => {
  const [data, setData] = useState(Cat);
  const filterresult = (catItem) => {
    const result = Cat.filter((curData) => {
      return curData.category === catItem

    })
    setData(result)

  }
  return (
    <>
      <h1 className='text-center text-info'>Let's shop </h1>
      <div className='container-fluid mx-2'>
        <div className='row mt-5 mx-2 ' >
          <div className='col-md-3'>
            <button className='btn btn-warning w-100 mb-4' onClick={() => filterresult('Men')}>Men</button>
            <button className='btn btn-warning w-100 mb-4' onClick={() => filterresult('Women')} >Women</button>
            <button className='btn btn-warning w-100 mb-4' onClick={() => filterresult('Children')} >Children</button>
            <button className='btn btn-warning w-100 mb-4' onClick={() => filterresult('Black')} >Black</button>
            <button className='btn btn-warning w-100 mb-4' onClick={() => filterresult('White')}>White</button>
            <button className='btn btn-warning w-100 mb-4' onClick={() => filterresult('All')} >All</button>

          </div>
          <div className='col-md-9'>
            <div className='row'>
              {
                data.map((values) => {//mapping
                  const { id, title, price, image } = values;//destructuring
                  return (
                    <>
                      <div className='col-md-4 mb-4' key={id}>
                        <div className="card" >
                          <img src={image} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title text-center">{title}</h5>
                            <p style={{color:"red"}}>
                              Price:{price}
                            </p>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='text-center'>
                              <a href="#" className="btn btn-dark ">Buy now</a>
                            </div>
                            
                          </div>

                        </div>
                      </div>


                    </>
                  )

                })}





            </div>

          </div>

        </div>



      </div>
    </>
  )
}

export default Category