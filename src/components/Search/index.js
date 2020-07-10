import React, { useEffect, useContext } from "react";
import { Card, Button, Form, Input, Row, Col } from "antd";
import { UserContext } from "../../shared/user/context";
import { useSearch } from "./use-search";

const Search = () => {
  const { editable } = useContext(UserContext);
  const [form] = Form.useForm();

  const { getUsers, initFormValues, updateData} = useSearch(form);

  const onFinish = async (values) => {
    await getUsers(values);
  };

  useEffect(() => {
    initFormValues();
    (async () => {
      const initialRequest = form.getFieldsValue();
      await getUsers(initialRequest);
    })();
  }, [form, initFormValues, getUsers]);

  return (
    <Card title="Bluepoint Test">
      <Form
        form={form}
        name="userForm"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="User" name="user">
              <Input placeholder="Ingrese user" disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Token" name="token">
              <Input placeholder="Ingrese un token" disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="User Id" name="userId">
              <Input placeholder="Ingrese un id" disabled/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ textAlign: "left" }}>
            <Button onClick={updateData} type="primary" htmlType="button" disabled={!editable}>
              Actualizar
            </Button>
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default Search;
