import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Row,
  Switch,
} from "antd";
import { IProduct } from "../../app/models/product";

interface IProps {
  setEditMode: (editMode: boolean) => void;
  product: IProduct | null;
  createProduct: (product: IProduct) => void;
  editProduct: (product: IProduct) => void;
}

export const ProductForm: React.FC<IProps> = ({
  setEditMode,
  product: initializeFormProduct,
  createProduct,
  editProduct,
}) => {
  const initializeForm = () => {
    if (initializeFormProduct) {
      return initializeFormProduct;
    } else {
      return {
        id: 0,
        storeId: 0,
        serialNumber: "",
        name: "",
        mainPhoto: "",
        photo: "",
        producent: "",
        model: "",
        price: 0,
        shippingCost: 0,
        currency: "",
        discryption: "",
        discount: 0,
        avalibity: false,
        buyersAmount: 0,
        feedbackAmount: 0,
        labael: "",
        rating: 0,
        addedDate: "",
        endDate: "",
      };
    }
  };

  const [product, setProduct] = useState<IProduct>(initializeForm);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = () => {
    if (product.name.length === 0) {
      let newProduct = {
        ...product,
        id: 51,
      };
      createProduct(newProduct);
    } else editProduct(product);
  };

  const onChange = () => {
    console.log(`switch to `);
  };

  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        initialValues={{ size: "default" }}
      >
        <Form.Item label="storeId">
          <InputNumber
            onChange={handleInputChange}
            placeholder="storeId"
            value={product.storeId}
          />
        </Form.Item>
        <Form.Item label="serialNumber">
          <Input placeholder="id" value={product.serialNumber} />
        </Form.Item>
        <Form.Item label="name">
          <Input
            onChange={handleInputChange}
            name="name"
            placeholder="name"
            value={product.name}
          />
        </Form.Item>
        <Form.Item label="mainPhoto">
          <Input
            onChange={handleInputChange}
            placeholder="mainPhoto"
            value={product.mainPhoto}
          />
        </Form.Item>
        <Form.Item label="photo">
          <Input
            onChange={handleInputChange}
            placeholder="photo"
            value={product.photo}
          />
        </Form.Item>
        <Form.Item label="producent">
          <Input
            onChange={handleInputChange}
            placeholder="producent"
            value={product.producent}
          />
        </Form.Item>
        <Form.Item label="model">
          <Input
            onChange={handleInputChange}
            placeholder="model"
            value={product.model}
          />
        </Form.Item>
        <Form.Item label="price">
          <Input
            onChange={handleInputChange}
            placeholder="price"
            value={product.price}
          />
        </Form.Item>
        <Form.Item label="shippingcost">
          <Input
            onChange={handleInputChange}
            placeholder="shippingcost"
            value={product.shippingCost}
          />
        </Form.Item>
        <Form.Item label="currency">
          <Input
            onChange={handleInputChange}
            placeholder="currency"
            value={product.currency}
          />
        </Form.Item>
        <Form.Item label="Descryption">
          <Input.TextArea
            onChange={handleInputChange}
            placeholder="descryption"
            value={product.discryption}
          />
        </Form.Item>
        <Form.Item label="Discount">
          <InputNumber
            onChange={handleInputChange}
            placeholder="discount"
            value={product.discount}
          />
        </Form.Item>
        <Form.Item label='Avalibity'>
          <Switch defaultChecked onChange={onChange} />
        </Form.Item>
        <Form.Item label="bouyersAmount">
          <InputNumber
            onChange={handleInputChange}
            placeholder="buyersAmount"
            value={product.buyersAmount}
          />
        </Form.Item>
        <Form.Item label="feedbackAmoint">
          <InputNumber
            onChange={handleInputChange}
            placeholder="feedbackAmoint"
            value={product.feedbackAmount}
          />
        </Form.Item>

        <Form.Item label="label">
          <Input
            onChange={handleInputChange}
            placeholder="label"
            value={product.labael}
          />
        </Form.Item>
        <Form.Item label="rating">
          <InputNumber
            onChange={handleInputChange}
            placeholder="rating"
            value={product.rating}
          />
        </Form.Item>
        <Form.Item label="addedDate">
          <DatePicker />
        </Form.Item>
        <Form.Item label="endDate">
          <DatePicker />
        </Form.Item>
       
        <Row>
          <Button onClick={handleSubmit} type="primary">
            Submit
          </Button>
          <Button onClick={() => setEditMode(false)}>Cancel</Button>
        </Row>
      </Form>
    </div>
  );
};
