import { Col, Drawer, Grid, Row } from "antd";
import React, { useState } from "react";
import { IProduct } from "../../app/models/product";
import { ProductList } from "./ProductList";
import { ProductDetails } from "../details/ProductDetails";
import { ProductForm } from "../form/ProductForm";
import { MobileBar } from "./MobileBar";
const { useBreakpoint } = Grid;
interface IProps {
  products: IProduct[];
  loading: boolean;
  selectProduct: (id: number) => void;
  selectedProduct: IProduct | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  openCreateForm: () => void;
  setSelectedProduct: (product: IProduct | null) => void;
  createProduct: (product: IProduct) => void;
  editProduct: (product: IProduct) => void;
  deleteProduct: (id: number) => void;
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
}) => {
  const screens = useBreakpoint();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
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
            showDrawer={showDrawer}
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
            />
          )}
        </Col>
        <Drawer
          title="S Tech"
          placement="bottom"
          onClose={onClose}
          visible={visible}
          height="100%"
        >
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
            />
          )}
        </Drawer>
      </Row>
    </div>
  );
};
