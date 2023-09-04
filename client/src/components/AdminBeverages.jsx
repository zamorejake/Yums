import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BEVERAGE } from '../utils/queries';
import { Dropdown, Card, Button } from 'flowbite-react';

const AdminMenu = () => {
    const { loading, data } = useQuery(QUERY_BEVERAGE);
    const [beverages, setBeverages] = useState([]);

    useEffect(() => {
        if (data && data.beverages) {
          setBeverages(data.beverages);
        }
    }, [data]);
    
    if (loading) {
    return <h2>LOADING...</h2>;
    }


  return (
    <>
    <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">View Beverage</h1>

    <Card className='max-w-lg flex'>
        <Dropdown color="gray" label="Select Beverage">
            {beverages.map((beverage) => (
                <div key={beverage._id} >
                <div className="">
                    <div className="">
                    <a href={`/admin/beverages/${beverage._id}`}>
                        <h5 className="">
                        {beverage.name}
                        </h5>
                    </a>
                    </div>
                </div>
                </div>
            ))}
        </Dropdown>
        <Button color="gray" href="/admin">
            Go Back
        </Button>
    </Card>
    </>
  )
}

export default AdminMenu

