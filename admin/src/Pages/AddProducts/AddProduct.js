import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddProduct.css";
import UploadFile from "../Images/Upload-Image.png";

const AddProduct = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    detail: "",
    additional: "",
    description: "",
  });
  const [image, setImage] = useState(null); // To store the selected image

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change (for the image)
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send as multipart/form-data
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("detail", formData.detail);
    data.append("additional", formData.additional);
    data.append("description", formData.description);
    if (image) {
      data.append("image", image);
    }

    try {
      await axios.post("http://localhost:2003/product", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Product added successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Error adding product.");
    }
  };

  return (
    <div className="Add-Product">
      <form
        className="flex-col"
        action="/profile"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="image-input">
          <p style={{marginBottom:10}}>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):UploadFile} alt="" />
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            required
            hidden
          />
        </div>
        <div className="text-input flex-col">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Type Here"
            required
          />
        </div>

        <div className="text-input flex-col">
          <p>Product Detail</p>
          <input
            type="text"
            name="detail"
            value={formData.detail}
            onChange={handleChange}
            required
            placeholder="Type Here"
          />
        </div>

        <div className="text-input flex-col">
          <p>Product Description</p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Write Content Here"
          />
        </div>

        <div className="combined-inputs">
          <div className="flex-col" style={{width:'auto'}}>
            <p>Additional Info</p>
            <input
              type="text"
              name="additional"
              value={formData.additional}
              onChange={handleChange}
              placeholder="Any Extra Details"
            />
          </div>
          <div className="flex-col" style={{width:'auto'}}>
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Rs 2000"
            />
          </div>
        </div>

        <button className="add-btn" type="submit">Add</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
