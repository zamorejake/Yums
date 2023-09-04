// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Card, Button } from 'flowbite-react';


import { QUERY_SINGLE_ENTREE } from '../utils/queries';

const SingleEntree = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { entreeId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_ENTREE, {
    // pass URL parameter
    variables: { entreeId: entreeId },
  });

  const entree = data?.entree || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Card className='max-w-lg flex'>
      <div className="">
        <p>{entree.name}</p>
        <p>{entree.description}</p>
        <p>{entree.price}</p>
        <p>{entree.in_stock}</p>
        <p>{entree.allergy}</p>
      </div>
    <Button color="gray" href="/admin/entrees">
        Go Back
    </Button>
    </Card>
  );
};

export default SingleEntree;
