import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ENTREE } from '../utils/queries';


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
      {entrees.map((entree) => (
        <p key={entree._id}>{entree.name}</p>
      ))}
    </>
  );
};

export default Entree;
