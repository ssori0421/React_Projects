import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

const ProductDetailPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    const url = `http://localhost:5000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <>
      {product && (
        <Container>
          <Row>
            <Col className='imgWrap'>
              <img src={product.img} />
            </Col>
            <Col>
              <div style={{ fontSize: '30px' }}>{product.title}</div>
              <div style={{ fontSize: '23px' }}>₩{product.price}</div>
              <div>Conscious choice</div>
              <Dropdown className='dropdown-box'>
                <Dropdown.Toggle variant='light' id='dropdown-basic'>
                  사이즈 선택
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>S</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>M</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>L</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className='addButton'>추가</button>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductDetailPage;
