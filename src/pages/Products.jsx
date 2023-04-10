import React , {useState , useEffect} from 'react'
import { Container , Row , Col , Button} from 'react-bootstrap'
import prod from '../lib/products.js'

export default function Products() {

  const [Products,setProducts] = useState([])
  const [saveProducts, setSaveProducts] = useState([])
  // setProducts(prod)
  
  useEffect(() => {
    setProducts(prod)
    setSaveProducts(prod)
  }, [])

  // function SaveProducts() {
  //   setSaveProducts(prod)
  // }
  function productFilter(input, type) {
    console.log("I'm clicked")
      let newProduct = []
      if (input !== "all") {
        saveProducts.map((x) => {
          if (x.life_stage === input) {
            newProduct.push(x)
          }
        })
        setProducts(newProduct)
      } else {
        saveProducts.map((x) => {
          if (x.category === type) {
            newProduct.push(x)
          }
        })
        setProducts(newProduct)
      }
      newProduct = []
  }

  return (
    <section>
        <Container>
          <h1>Dog Foods</h1>
            <div>
              <Button onClick={() => {productFilter("all", "dog-food")}}>All</Button>
              <Button onClick={() => {productFilter("puppy")}}>Puppy</Button>
              <Button onClick={() => {productFilter("adult")}}>Adult</Button>
            </div>
            <Row>
                {Products.map((product) => (
                    // <Col key={product.id}>
                    //   <img src={`images/product-img/${product.img}`} alt="" />
                    //   <h5 className='text-center'>{product.name}</h5>
                    //   <h4 className='text-center'>{product.price}</h4>
                    //   <Button>Add to Cart</Button>
                    // </Col>
                    product.category === "dog-food" && <Col key={product.id}>
                    <img className='product-img' src={`images/product-img/${product.img}`} alt="" />
                    <h5 className='text-center'>{product.name}</h5>
                    <h4 className='text-center'>{product.price}</h4>
                    <Button>Add to Cart</Button>
                  </Col>
                ))}
            </Row>

            <h1>Dog Accessories</h1>
            <div>
              <Button>Dog Beds</Button>
            </div>
            <Row>
            {Products.map((product) => (
                product.category === "dog-bed" && <Col key={product.id}>
                <img className='product-img' src={`images/product-img/${product.img}`} alt="" />
                <h5 className='text-center'>{product.name}</h5>
                <h4 className='text-center'>{product.price}</h4>
                <Button>Add to Cart</Button>
              </Col>
            ))}
            </Row>

        </Container>
    </section>
  )
}
