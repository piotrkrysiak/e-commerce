import React, { ChangeEvent, FormEvent, useState } from "react";
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
import { v4 as uuid } from "uuid";
import moment from "moment";



// TODO: OnChange on date and number

interface IProps {
  setEditMode: (editMode: boolean) => void;
  product: IProduct | null;
  createProduct: (product: IProduct) => void;
  editProduct: (product: IProduct) => void;
  submitting: boolean
}
const dateFormat = "YYYY-MM-DD HH:mm";

export const ProductForm: React.FC<IProps> = ({
  setEditMode,
  product: initializeFormProduct,
  createProduct,
  editProduct,
  submitting
}) => {
  const initializeForm = () => {
    if (initializeFormProduct) {
      return initializeFormProduct;
    } else {
      return {
        addedDate: "0001-01-01T00:00:00",
        availabity: true,
        buyersAmount: 5,
        currency: "zł",
        discount: 20,
        discryption: "",
        endDate: "0001-01-01T00:00:00",
        feedbackAmount: 4,
        id: "",
        labael: "Promocja",
        mainPhoto: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/4/pr_2020_4_9_13_38_6_587_00.jpg",
        model: "M.2 2280",
        name: "",
        photo: "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/CRUCIAL/CT250P2SSD8/a2-dysk-ssd-crucial-p2-250gb-m.2-nvme.jpg",
        price: 199,
        producent: "Crucial",
        rating: 4,
        serialNumber: "",
        shippingCost: 0,
        storeId: 50,
      };
    }
  };

  const [product, setProduct] = useState<IProduct>(initializeForm);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | any
  ) => {
    const { name, value } = event.currentTarget;
    console.log(name);
    setProduct({ ...product, [name]: value });
  };
  

  const handleSubmit = () => {
    if (product.id.length === 0) {
      console.log("if");
      let newProduct = {
        ...product,
        id: uuid()
      };
      console.log(newProduct);
      createProduct(newProduct);
    } else editProduct(product);
  };

  const handleDateChange = (date: any, dateString: any) =>{
    const value = dateString;
    console.log(value);
    setProduct({ ...product, [product.addedDate]: value }); //TODO: data nie działa zupełnie nie przekazuje wartości do produktu 
    console.log(product);
  }

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
            name="storeId"
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
            name="discryption"
            onChange={handleInputChange}
            placeholder="descryption"
            value={product.discryption}
          />
        </Form.Item>
        <Form.Item label="Discount">
          <InputNumber
            name="discount"
            onChange={handleInputChange}
            placeholder="discount"
            value={product.discount}
          />
        </Form.Item>
        <Form.Item label="Avalibity">
          <Switch defaultChecked />
          {/* TODO: */}
        </Form.Item>
        <Form.Item label="bouyersAmount">
          <InputNumber
            name="bouyersAmount"
            onChange={handleInputChange}
            placeholder="buyersAmount"
            value={product.buyersAmount}
          />
        </Form.Item>
        <Form.Item label="feedbackAmoint">
          <InputNumber
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
            value={product.labael}
          />
        </Form.Item>
        <Form.Item label="rating">
          <InputNumber
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
            format="YYYY-MM-DD HH:mm"
          />
        </Form.Item>
        <Form.Item label="endDate">
          <DatePicker
            defaultValue={moment(product.endDate, dateFormat)}
            onChange={handleDateChange}
            name="endDate"
          />
        </Form.Item>
        <Row>
          <Button onClick={handleSubmit} type="primary" loading={submitting}>
            Submit
          </Button>
          <Button onClick={() => setEditMode(false)}>Cancel</Button>
        </Row>
      </Form>
    </div>
  );
};
