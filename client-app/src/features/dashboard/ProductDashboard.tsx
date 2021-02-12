import { Col, Row } from "antd";
import React from "react";
import { IProduct } from "../../app/models/product";
import { ProductList } from "./ProductList";
import { ProductDetails } from "../details/ProductDetails";
import { ProductForm } from "../form/ProductForm";

interface IProps {
  products: IProduct[];
  loading: boolean;
  selectProduct: (id: string) => void;
  selectedProduct: IProduct | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  openCreateForm: () => void;
  setSelectedProduct: (product: IProduct | null) => void;
  createProduct: (product: IProduct) => void;
  editProduct: (product: IProduct) => void;
  deleteProduct: (event:any ,id: string) => void;
  submitting: boolean;
  target: string
}
export const ProductDashboard: React.FC<IProps> = ({
  products,
  loading,
  selectProduct,
  selectedProduct,
  editMode,
  setEditMode,
  openCreateForm,
  setSelectedProduct,
  createProduct,
  editProduct,
  deleteProduct,
  submitting,
  target
}) => {
 
  return (
    <div style={{ margin: "200px 0px 200px" }}>
      <Row>
        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 13, offset: 1 }}>
          <ProductList
            products={products}
            loading={loading}
            selectProduct={selectProduct}
            openCreateForm={openCreateForm}
            deleteProduct={deleteProduct}
            submitting={submitting}
            target={target}
          />
        </Col>
        <Col  xs={{ span: 0, offset: 1 }} sm={{ span: 8, offset: 1 }}>
          {selectedProduct && !editMode && (
            <ProductDetails
              product={selectedProduct}
              setEditMode={setEditMode}
              setSelectedProduct={setSelectedProduct}
            />
          )}
          {editMode && (
            <ProductForm
              key={(selectedProduct && selectedProduct.id) || 0}
              setEditMode={setEditMode}
              product={selectedProduct}
              createProduct={createProduct}
              editProduct={editProduct}
              submitting={submitting}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};
