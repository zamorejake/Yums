// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Card, Button } from 'flowbite-react';


import { QUERY_SINGLE_BEVERAGE } from '../../utils/queries';

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
    <Card className='p-8 flex justify-center self-center'>
      <div>
          <div className=" p-8">
            <div className="mr-4">
            </div>
            <div className="flex-1">
                <h5 className="mb-2 text-2xl font-bold">
                  {beverage.name}
                </h5>
              <p className="mb-2 font-normal">
                ${beverage.price}
              </p>
              <p className="mb-3 font-normal">
                {beverage.description}
              </p>
              <p className="mb-2 text-xl font-bold text-danger">
                {beverage.has_alcohol ? 'Contains Alcohol' : 'No Alcohol'}
              </p>
              <p className="mb-2 text-xl font-bold text-danger">
                {beverage.in_stock ? 'In Stock' : 'Out of Stock'}
              </p>
              <Button.Group className='flex gap-2 justify-center'>
                <Button color="gray" href={`/admin/beverages/${beverage._id}/edit`}>Edit</Button>
                <Button color="red" href={`/admin/beverages/${beverage._id}/delete`}>Delete</Button>
                <Button color="blue" href={`/admin/beverages`}>Back</Button>
              </Button.Group>
            </div>
          </div>
        </div>
    </Card>
  );
};

export default SingleBeverage;
