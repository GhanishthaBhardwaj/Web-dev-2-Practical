import React, { useState, useEffect } from "react";
const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

// fatching api  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // extract only thumbnail images
        const imgs = data.products.map((item) => item.thumbnail);
        setImages(imgs);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleNext = () => {
    if (index + 4 < images.length) {
      setIndex(index + 4);
    }
  };
  return (
    <div style={{ textAlign: "center",marginTop:"100px" }}>
      <div style={{ display: "flex", gap: "10px", justifyContent: "left"  }}>
        {images.slice(index, index + 4).map((img, i) => (
          <img
            key={i}
            src={img}
            alt="product"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        ))}
      </div>
      <button onClick={handleNext} style={{ marginTop: "20px" ,fontSize:"20px",color:"white",background:"black",padding:"5px"}}>
        Next
      </button>

    </div>
  );
};

export default ImageSlider;