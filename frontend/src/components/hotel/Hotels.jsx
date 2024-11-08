import { useState, useEffect } from 'react';
import axios from 'axios';
import Hotel from './Hotel';

export const Hotels = () => {
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getHotels = async () => {
      try {
        const res = await axios.get('http://localhost:5002/api/hotels'); // URL assoluto
        if (res.status === 200) {
          console.log('Response data:', res.data);
          setHotel(res.data);
        } else {
          setError('Something went wrong');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getHotels();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Hotel List</h1>
      {hotel.length > 0 ? (
        <ul>
          {hotel.map((item) => (
            <li key={item._id}>  <Hotel hotel={item} /> </li>
          ))}
        </ul>
      ) : (
        <div>No hotels found</div>
      )}
    </div>
  );
};




// export const Hotels = () => {
//   return (
//     <div>Hotels</div>
//   )
// }

// Hotels.propTypes = {}

