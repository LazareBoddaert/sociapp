import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {

  const [loading, setloading] = useState(false);
  const { categoryId } = useParams();
  const [pins, setPins] = useState(null)

  useEffect(() => {
    setloading(true);

    if (categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query)
        .then((data) => {
          setPins(data);
          setloading(false);
        })
    } else {
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setloading(false);
        })
    }
  }, [categoryId])


  if (loading) return <Spinner message="We are filling your feed with beautifull images!" />;

  if (!pins?.length) return <h2 className='font-bold mt-10 text-center text-xl'>No pins available</h2>;

  return (
    <div>
      {pins && <MasonryLayout pins={pins} />}
    </div>
  )
}

export default Feed
