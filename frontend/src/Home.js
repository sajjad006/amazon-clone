import React, {useState, useEffect} from 'react';
import "./Home.css";
import Product from "./Product";
import axios from './axios';

function Home() {
  const [products, setProducts]=useState([]);

  useEffect(() => {
      async function fetchData() {
          const request=await axios.get('/api/products');
          setProducts(request.data);
          return request;
          console.log(request.data);
      }
      fetchData();
  }, []);
  
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Nov/1500x600_Hero-Tall_np._CB416108473_.jpg"
          alt=""
        />

        <div className="home__row">
          {
            products.map(product => (
              <Product
                id={products._id}
                title={product.name}
                image={product.image}
                price={parseInt(product.price)}
                rating={parseInt(product.rating)}
              />
            ))
          }
        </div>


      <div className="home__row">
          <Product
            id="121221"
            title="New Apple iPad Pro (11-inch, Wi-Fi, 1TB) - Space Grey (2nd Generation)"
            image="https://m.media-amazon.com/images/I/81p1L85KinL._AC_UY218_.jpg"
            price={400}
            rating={5}
          />

          <Product
            id="121224"
            title="Samsung 810 L Frost Free Side-by-Side Refrigerator(RF28N9780SG/TL, Black, Inverter)"
            image="https://m.media-amazon.com/images/I/21xq087cPcL._AC_UY218_.jpg"
            price={100}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="121212542"
            title="Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)"
            image="https://m.media-amazon.com/images/I/71dujTTJDZL._AC_UY218_.jpg"
            price={299}
            rating={4}
          />

          <Product
            id="37937"
            title="Concept of Physics Part-1 (2019-2020 Session) by H.C Verma"
            image="https://m.media-amazon.com/images/I/71EK+TbNJkL._AC_UY218_.jpg"
            price={39}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="1216"
            title="LG 25UM58 25-inch Ultra-Wide LED Monitor (Black)"
            image="https://m.media-amazon.com/images/I/81pv0g8bQhL._AC_UY218_.jpg"
            price={299}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
