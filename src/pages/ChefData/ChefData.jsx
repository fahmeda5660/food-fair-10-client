import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefData = () => {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://food-fair-server-site.vercel.app/chef"
          );
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, []);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6 container mx-auto mt-16'>
            {/* <h2>{data.length}</h2> */}
            {
                data.map(singleData=><ChefCard key={singleData.id} singleData={singleData}></ChefCard>)
            }
        </div>
    );
};

export default ChefData;