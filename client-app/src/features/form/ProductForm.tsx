import React, { ChangeEvent, useEffect, useState } from "react";
import { Form, Button, DatePicker, Input, Row } from "antd";
import { IProduct } from "../../app/models/product";
import moment from "moment";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useHistory, useParams } from "react-router-dom";
import LoadingComponent from "../components/design/LoadingComponent";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

// TODO: validation, error handler, endData, number field, file structure

const dateFormat = "YYYY-MM-DD";

export default observer(function ProductForm() {
  const history = useHistory();
  const { productStore } = useStore();
  const {
    createProduct,
    updateProduct,
    loading,
    loadProduct,
    loadingInitial,
  } = productStore;
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<IProduct>({
    addedDate: "0001-01-01T00:00:00",
    availability: false,
    buyersAmount: 0,
    currency: "zł",
    discount: 0,
    description: "",
    endDate: "0001-01-01T00:00:00",
    feedbackAmount: 4,
    id: "",
    label: "",
    mainPhoto:
      "https://dzialowskiego.pl/wp-content/plugins/visualisation/images/empty.jpg",
    model: "M.2 2280",
    name: "",
    photo:
      "https://dzialowskiego.pl/wp-content/plugins/visualisation/images/empty.jpg",
    price: 0,
    producent: "",
    rating: 1,
    serialNumber: "",
    shippingCost: 0,
    storeId: 0,
  });

  useEffect(() => {
    if (id) loadProduct(id).then((product) => setProduct(product!));
  }, [id, loadProduct]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = event.currentTarget;
    console.log(name);
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = () => {
    if (product.id.length === 0) {
      let newProduct = {
        ...product,
        id: uuid(),
      };
      createProduct(newProduct).then(() =>
        history.push(`/products/${newProduct.id}`)
      );
    } else {
      updateProduct(product).then(() =>
        history.push(`/products/${product.id}`)
      );
    }
  };

  const handleDateChange = (_moment: any, date: any) => {
    const value = date;
    console.log(value);
    product.addedDate = value;
    setProduct(product);
    console.log(product);
  };

  if (loadingInitial) return <LoadingComponent />;

  return (
    <FormContainer>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        initialValues={{ size: "default" }}
      >
        <Form.Item label="storeId">
          <Input
            name="storeId"
            onChange={handleInputChange}
            placeholder="storeId"
            value={product.storeId}
          />
        </Form.Item>
        <Form.Item label="serialNumber">
          <Input
            placeholder="serialNumber"
            onChange={handleInputChange}
            name="serialNumber"
            value={product.serialNumber}
          />
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
            name="mainPhoto"
            onChange={handleInputChange}
            placeholder="mainPhoto"
            value={product.mainPhoto}
          />
        </Form.Item>
        <Form.Item label="photo">
          <Input
            name="photo"
            onChange={handleInputChange}
            placeholder="photo"
            value={product.photo}
          />
        </Form.Item>
        <Form.Item label="producent">
          <Input
            name="producent"
            onChange={handleInputChange}
            placeholder="producent"
            value={product.producent}
          />
        </Form.Item>
        <Form.Item label="model">
          <Input
            name="model"
            onChange={handleInputChange}
            placeholder="model"
            value={product.model}
          />
        </Form.Item>
        <Form.Item label="price">
          <Input
            name="price"
            onChange={handleInputChange}
            placeholder="price"
            value={product.price}
          />
        </Form.Item>
        <Form.Item label="shippingcost">
          <Input
            name="shippingCost"
            onChange={handleInputChange}
            placeholder="shippingcost"
            value={product.shippingCost}
          />
        </Form.Item>
        <Form.Item label="currency">
          <Input
            name="currency"
            onChange={handleInputChange}
            placeholder="currency"
            value={product.currency}
          />
        </Form.Item>
        <Form.Item label="Descryption">
          <Input.TextArea
            name="description"
            onChange={handleInputChange}
            placeholder="description"
            value={product.description}
          />
        </Form.Item>
        <Form.Item label="Discount">
          <Input
            name="discount"
            onChange={handleInputChange}
            placeholder="discount"
            value={product.discount}
          />
        </Form.Item>
        <Form.Item label="bouyersAmount">
          <Input
            name="bouyersAmount"
            onChange={handleInputChange}
            placeholder="buyersAmount"
            value={product.buyersAmount}
          />
        </Form.Item>
        <Form.Item label="feedbackAmoint">
          <Input
            name="feedbackAmoint"
            onChange={handleInputChange}
            placeholder="feedbackAmoint"
            value={product.feedbackAmount}
          />
        </Form.Item>

        <Form.Item label="label">
          <Input
            name="label"
            onChange={handleInputChange}
            placeholder="label"
            value={product.label}
          />
        </Form.Item>
        <Form.Item label="rating">
          <Input
            name="rating"
            onChange={handleInputChange}
            placeholder="rating"
            value={product.rating}
          />
        </Form.Item>
        <Form.Item label="addedDate">
          <DatePicker
            defaultValue={moment(product.addedDate, dateFormat)}
            onChange={handleDateChange}
            name="addedDate"
            format="YYYY-MM-DD"
          />
        </Form.Item>
        <Row>
          <Button onClick={handleSubmit} type="primary" loading={loading}>
            Submit
          </Button>
          <Link to="/products">
            <Button>Cancel</Button>
          </Link>
        </Row>
      </Form>
    </FormContainer>
  );
});
const FormContainer = styled.div`
  display: flex;
  margin: 20vh 10vw;
  justify-content: center;
  align-items: center;
  .ant-form {
    width: 90vh;
    height: auto;
    background-color: white;
    border-radius: 20px;
    padding: 5vh 10vh;
  }
  .ant-row {
    justify-content: center;
    align-items: center;
  }
  .ant-btn {
    margin: 10px;
  }
`;
