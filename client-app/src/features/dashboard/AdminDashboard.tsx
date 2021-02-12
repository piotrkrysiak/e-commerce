import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "../../app/layout/styles.css";
import { IProduct } from "../../app/models/product";
import { ProductDashboard } from "./ProductDashboard";
import agent from "../../app/api/agent";
import LoadingComponent from "../components/design/LoadingComponent";

const AppDashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [target, setTarget] = useState("");

  const handleSelectProduct = (id: string) => {
    setSelectedProduct(products.filter((p) => p.id === id)[0]);
  };

  const handleOpenCreateForm = () => {
    setSelectedProduct(null);
    setEditMode(true);
  };

  const handleCreateProducts = (product: IProduct) => {
    setSubmitting(true);
    agent.Products.create(product)
      .then(() => {
        setProducts([...products, product]);
        setSelectedProduct(product);
        setEditMode(false);
      })
      .then(() => setSubmitting(false));
  };

  const handleEditProducts = (product: IProduct) => {
    setSubmitting(true);
    agent.Products.update(product)
      .then(() => {
        setProducts([...products.filter((p) => p.id !== product.id), product]);
        setSelectedProduct(product);
        setEditMode(false);
      })
      .then(() => setSubmitting(false));
  };

  const handleDeleteProduct = (event: any, id: string) => {
    setSubmitting(true);
    setTarget(event.currentTarget.name)
    agent.Products.delete(id)
      .then(() => {
        setProducts([...products.filter((p) => p.id !== id)]);
      })
      .then(() => setSubmitting(false));
  };

  useEffect(() => {
    agent.Products.list()
      .then((response) => {
        let products: IProduct[] = [];
        response.forEach((product) => {
          product.addedDate = product.addedDate.split(".")[0];
          products.push(product);
        });

        setProducts(response);
        setLoading(false);
      })
      .then(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent />;

  // const fetchProduct = async () => {
  //   setLoading(true);
  //   const res = await axios.get("http://localhost:5000/api/products");
  //   setProducts(res.data);
  //   setLoading(false);
  // };
  // fetchProduct();
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
        submitting={submitting}
        target={target}
      />
    </>
  );
};

export default AppDashboard;
