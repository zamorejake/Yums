// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Card, Button } from 'flowbite-react';


import { QUERY_SINGLE_ENTREE } from '../../utils/queries';

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
    <Card className='p-8 flex justify-center self-center'>
      <div>
          <div className="p-8">
            <div className="mr-4">
            </div>
            <div className="flex-1">
                <h5 className="mb-2 text-2xl font-bold">
                  {entree.name}
                </h5>
              <p className="mb-2 font-normal">
                ${entree.price}
              </p>
              <p className="mb-3 font-normal">
                {entree.description}
              </p>
              <p className="mb-2 text-xl font-bold text-danger">
                {!entree.allergy.length == 0
                  ? `ALLERGY: ${entree.allergy.join(', ')}`
                  : null}
              </p>
              <p className="mb-2 text-xl font-bold text-danger">
                {entree.in_stock ? 'In Stock' : 'Out of Stock'}
              </p>
              <Button.Group className='flex gap-2 justify-center'>
                <Button color="gray" href={`/admin/entrees/${entree._id}/edit`}>Edit</Button>
                <Button color="red" href={`/admin/entrees/${entree._id}/delete`}>Delete</Button>
                <Button color="blue" href={`/admin/entrees`}>Back</Button>
              </Button.Group>
            </div>
          </div>
        </div>
    </Card>
  );
};

export default SingleEntree;
