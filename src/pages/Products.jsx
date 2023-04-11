import React , {useState , useEffect} from 'react'
import { Container , Row , Col , Button , Card} from 'react-bootstrap'
import prod from '../lib/products.js'

export default function Products() {

  const [Products,setProducts] = useState([])
  const [saveProducts, setSaveProducts] = useState([])
  
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
          } else if (x.category === input) {
            newProduct.push(x)
          }
        })
        setProducts(newProduct)
      } else {
        saveProducts.map((x) => {
            newProduct.push(x)
        })
        setProducts(newProduct)
      }
      newProduct = []
  }

  return (
    <section>
        <h1 className='products'>Products</h1>
        <Container>
            <div className='d-flex filter-btn justify-content-center align-items-center'>
                  <p className='m-0'>Filter by:</p>
                  <button onClick={() => {productFilter("all")}}>All</button>
                  <button onClick={() => {productFilter("puppy")}}>Puppy</button>
                  <button onClick={() => {productFilter("adult")}}>Adult</button>
                  <button onClick={() => {productFilter("dog-bed")}}>Dog Bed</button>
            </div>
            <Row className='justify-content-center align-items-center'>
                {Products.map((product) => (
                    // <Col key={product.id}>
                    //   <img src={`images/product-img/${product.img}`} alt="" />
                    //   <h5 className='text-center'>{product.name}</h5>
                    //   <h4 className='text-center'>{product.price}</h4>
                    //   <Button>Add to Cart</Button>
                    // </Col>
                  <Col className='col-7 col-lg-3 col-md-4 col-sm-6' key={product.id}>
                    <Card className='my-4' style={{ width: '18rem' }}>
                      <img className='product-img' src={`images/product-img/${product.img}`} alt="" />
                      <h5 className='text-center product-title'>{product.name}</h5>
                      <h6 className='text-center'>&#8369; {product.price}.00</h6>
                      <Button className='cart-btn'>Add to Cart</Button>
                    </Card>
                  </Col>
                ))}
            </Row>

        </Container>
    </section>
  )
}
