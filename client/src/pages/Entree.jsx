import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ENTREE } from '../utils/queries';
import Header from '../pages/Header';
import Footer2 from '../pages/Footer';

const Entree = () => {
  const { loading, data } = useQuery(QUERY_ENTREE);
  const [entrees, setEntrees] = useState([]);

  useEffect(() => {
    if (data && data.entrees) {
      setEntrees(data.entrees);
    }
  }, [data]);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Header />
      {/*there is an issue with resizing the cols with lower viewports so by default its for fullscreen, 2 looks good on small viewport 6 looks good on normal */}
      <div className="grid grid-cols-6 gap-2 md:gap-4">
      {entrees.map((entree) => (
        <div key={entree._id} className="pb-4">
          <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 flex">
            <div class="mr-4">
              <img
                src={entree.image}
                alt="Entree"
                class="w-24 h-24 rounded-md object-cover"
              />
            </div>
            <div class="flex-1">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold">
                  {entree.name}
                </h5>
              </a>
              <p class="mb-2 font-normal">
                ${entree.price}
              </p>
              <p class="mb-2 text-xl font-bold text-danger">
                {!entree.allergy.length == 0
                  ? `ALLERGY: ${entree.allergy.join(', ')}`
                  : null}
              </p>
              <p class="mb-3 font-normal">
                {entree.description}
              </p>
              <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
      <Footer2 />
    </>
  );
};

export default Entree;
