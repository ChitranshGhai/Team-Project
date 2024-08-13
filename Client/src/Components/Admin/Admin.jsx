import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import './admin.css'
function Admin() {
    const [items, setItems] = useState([])
    const [formData, setFormData] = useState({ name: '', description: '', price: '', image: '', detail: '', additional: '' })
    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState(null)

    useEffect(() => {
        fetchItems()
    },[])
    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:9998/api/items');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setItems(data);
        } catch (err) {
            console.error('Failed to fetch items:', err);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = isEdit ? `http://localhost:9998/api/items/${editId}` : 'http://localhost:9998/api/items';
            const method = isEdit ? 'PUT' : 'POST';
            
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            setFormData({ name: '', description: '', price: '', image: '', detail: '', additional: '' });
            setIsEdit(false);
            setEditId(null);
            fetchItems(); // Consider if fetching is necessary after the update
        } catch (err) {
            console.error('Failed to submit form:', err);
        }
    };

    const handleEdit = (item) => {
        setFormData(item);
        setIsEdit(true);
        setEditId(item._id);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:9998/api/items/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            fetchItems();
        } catch (err) {
            console.error('Failed to delete item:', err);
        }
    };
    return (
        <>
            <div className="admin-form-container">
                <h2>Admin Form</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' value={formData.name} onChange={handleInputChange} placeholder='Name' required />
                    <input type="text" name='description' value={formData.description} onChange={handleInputChange} placeholder='description' required />
                    <input type="text" name='detail' value={formData.detail} onChange={handleInputChange} placeholder='Detail' required />
                    <input type="text" name='price' value={formData.price} onChange={handleInputChange} placeholder='Price' required />
                    <input type="text" name='image' value={formData.image} onChange={handleInputChange} placeholder='Image URL' required />
                    <button type="submit">{isEdit ? 'Update' : 'Add'} Item</button>
                </form>
            </div>
            <div className="items-list">
                <h3>Items List</h3>
                {/* All Data In this div Every candel Information */}
                <div className="image-container">
                    {/* One Candel Information In This Div */}
                    {items.map((val) => (
                        <div key={val._id} className="image-wrapper">
                            <div className="image-inner-wrapper">
                                <img src={val.image} alt="" className="product-image" />

                            </div>
                            <div className='product-content'>
                            
                            <h2 className="product-title">{val.name}</h2>
                            <h6>Description</h6>
                            <p className="product-desc">{val.description}</p>
                            <h6>Detail</h6>
                            <p className="product-detail placeholder-glow">{val.detail}</p>
                            <h6>Price</h6>
                            <p className="product-price">Rs.{val.price}</p>
                            <div className="product-btn">
                                <button onClick={() => handleEdit(val)} className='edit'>Edit</button>
                                <button onClick={() => handleDelete(val._id)} className='delete'>Delete</button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Admin