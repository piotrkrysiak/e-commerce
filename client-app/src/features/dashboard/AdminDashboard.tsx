import React, { useEffect, useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "../../app/layout/styles.css";
import { IProduct } from "../../app/models/product";
import { ProductDashboard } from "./ProductDashboard";

const AppDashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleSelectProduct = (id: number) => {
    setSelectedProduct(products.filter((p) => p.id === id)[0]);
  };

  const handleOpenCreateForm = () => {
    setSelectedProduct(null);
    setEditMode(true);
  };

  const handleCreateProducts = (product: IProduct) => {
    setProducts([...products, product]);
    setSelectedProduct(product);
    setEditMode(false);
  };

  const handleEditProducts = (product: IProduct) => {
    setProducts([...products.filter((p) => p.id !== product.id), product]);
    setSelectedProduct(product);
    setEditMode(false);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts([...products.filter((p) => p.id !== id)]);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
      setLoading(false);
    };
    fetchProduct();
  }, []);


  return (
    <>
      <ProductDashboard
        products={products}
        loading={loading}
        selectProduct={handleSelectProduct}
        selectedProduct={selectedProduct}
        editMode={editMode}
        setEditMode={setEditMode}
        openCreateForm={handleOpenCreateForm}
        setSelectedProduct={setSelectedProduct}
        createProduct={handleCreateProducts}
        editProduct={handleEditProducts}
        deleteProduct={handleDeleteProduct}
      />
    </>
  );
};

export default AppDashboard;
