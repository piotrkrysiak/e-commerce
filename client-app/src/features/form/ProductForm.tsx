import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  Form,
  Button,
  DatePicker,
  Input,
  Row,
  InputNumber,
  Switch,
} from "antd";
import { IProduct } from "../../app/models/product";
import moment from "moment";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useHistory, useParams } from "react-router-dom";
import LoadingComponent from "../components/design/LoadingComponent";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

// TODO: validation, error handling, file structure, migrations

const dateFormat = "YYYY-MM-DD";

export default observer(function ProductForm() {
  const { productStore } = useStore();
  const {
    createProduct,
    updateProduct,
    loading,
    loadProduct,
    loadingInitial,
  } = productStore;

  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<IProduct>({
    addedDate: "2021-01-01T00:00:00",
    availability: false,
    buyersAmount: 0,
    currency: "zł",
    discount: 0,
    description: "",
    endDate: "2021-01-01T00:00:00",
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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = event.currentTarget;
    console.log(name);
    setProduct({ ...product, [name]: value });
  };

  const handleSwitch = (checked: any) => {
    console.log(checked);
    console.log(product);
    product.availability = checked;
    setProduct({ ...product, ["availability"]: checked });
  };


  const handleDateChange = (_moment: any, date: any, name: string) => {
    const value = date;
    console.log(value);
    setProduct({ ...product, [name]: value });
    console.log(product);
  };

  function handleNumberChange(id: any, value: any) {
    console.log(id);
    setProduct({ ...product, [id]: value });
  }

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
          <InputNumber
            name="storeId"
            onChange={(e) => handleNumberChange("storeId", e)}
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
          <InputNumber
            name="price"
            onChange={(e) => handleNumberChange("price", e)}
            placeholder="price"
            value={product.price}
          />
        </Form.Item>
        <Form.Item label="shippingcost">
          <InputNumber
            name="shippingCost"
            onChange={(e) => handleNumberChange("shippingCost", e)}
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
        <Form.Item label="Description">
          <Input
            name="description"
            onChange={handleInputChange}
            placeholder="description"
            value={product.description}
          />
        </Form.Item>
        <Form.Item label="Discount">
          <InputNumber
            name="discount"
            onChange={(e) => handleNumberChange("discount", e)}
            placeholder="discount"
            value={product.discount}
          />
        </Form.Item>
        <Form.Item label="bouyersAmount">
          <InputNumber
            name="bouyersAmount"
            onChange={(e) => handleNumberChange("buyersAmount", e)}
            placeholder="buyersAmount"
            value={product.buyersAmount}
          />
        </Form.Item>
        <Form.Item label="feedbackAmount">
          <InputNumber
            name="feedbackAmount"
            onChange={(e) => handleNumberChange("feedbackAmount", e)}
            placeholder="feedbackAmount"
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
          <InputNumber
            name="rating"
            onChange={(e) => handleNumberChange("rating", e)}
            placeholder="rating"
            value={product.rating}
          />
        </Form.Item>
        <Form.Item label="addedDate">
          <DatePicker
            value={moment(product.addedDate, dateFormat)}
            onChange={(m, d) => handleDateChange(m, d, "addedDate")}
            name="addedDate"
            format="YYYY-MM-DD"
          />
        </Form.Item>
        <Form.Item label="endDate">
          <DatePicker
            value={moment(product.endDate, dateFormat)}
            onChange={(m, d) => handleDateChange(m, d, "endDate")}
            name="endDate"
            format="YYYY-MM-DD"
          />
        </Form.Item>
        <Form.Item label="Availaibity:">
          <Switch checked={product.availability} onClick={handleSwitch} />
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
