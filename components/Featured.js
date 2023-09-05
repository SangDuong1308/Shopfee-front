import { styled } from "styled-components"
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { CartContext } from "./CartContext";
import {useContext} from "react";

const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size: 3rem;
`;
const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    img{
        max-width: 100%;
        max-height: 200px;
        display: block;
        margin: 0 auto;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart() {
      addProduct(product._id);
    }
    return (
      <Bg>
        <Center>
          <ColumnsWrapper>
            <Column>
              <div>
                <Title>{product.title}</Title>
                <Desc>
                  {product.description}
                </Desc>
                <ButtonsWrapper>
                  <ButtonLink href = {'/products/'+product._id} white outline>
                    Read more
                  </ButtonLink>
                  <Button white onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
                </ButtonsWrapper>
              </div>
            </Column>
            <Column>
              {/* <img src="https://ecommerce-proj-hcmus.s3.amazonaws.com/1693448695344.png"></img> */}
              <img src="https://ecommerce-proj-hcmus.s3.amazonaws.com/1693926262312.png"></img>
            </Column>
          </ColumnsWrapper>
        </Center>
      </Bg>
    );
}