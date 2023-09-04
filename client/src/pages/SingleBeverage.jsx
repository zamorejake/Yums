// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Card, Button } from 'flowbite-react';


import { QUERY_SINGLE_BEVERAGE } from '../utils/queries';

const SingleBeverage = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { beverageId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_BEVERAGE, {
    // pass URL parameter
    variables: { beverageId: beverageId },
  });

  const beverage = data?.beverage || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Card className='max-w-lg flex'>
      <div className="">
        <p>{beverage.name}</p>
        <p>{beverage.description}</p>
        <p>{beverage.price}</p>
        <p>{beverage.in_stock}</p>
        <p>{beverage.has_alcohol}</p>
      </div>
      <Button color="gray" href="/admin/beverages">
        Go Back
      </Button>
    </Card>
  );
};

export default SingleBeverage;
