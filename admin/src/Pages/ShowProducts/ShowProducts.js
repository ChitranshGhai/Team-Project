import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ShowProducts.css'

function ShowProducts() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get('http://localhost:2003/showproducts');
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error(response.data.message || 'Error fetching products');
      }
    } catch (error) {
      console.error('Error fetching the product list', error);
      toast.error('Error fetching products');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);


  const removeProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:2003/product/${id}`);
      toast.success('Product deleted successfully');
      await fetchList(); // Refresh the product list after deletion
    } catch (error) {
      toast.error('Error deleting the product');
    }
  };
  

  return (
    <div className='flex-coll'>
      <p>All Products List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Detail</b>
          <b>Price</b>
          <b>Remove</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.detail}</p>
            <p>{item.price}</p>
            <p onClick={()=>{removeProduct(item._id)}} className='cursor'>X</p> {/* Add appropriate actions here */}
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default ShowProducts;
