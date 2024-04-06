
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import profile from './assets/user.png'
import { CiGrid42 } from "react-icons/ci";
import Stack from 'react-bootstrap/Stack';
import { IoStorefrontOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './assets/camera.png'
import { FaPlus } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import ThreeDot from './Components/ThreeDot';




function App() {


  return (
    <>
      <Header />
      <div className='row'>
        <div className='col-lg-3'>

          <div className='first rounded d-flex mt-4 ms-3' style={{ width: '250px', height: '100px' }}>
            <div className='proDiv mt-3 ms-2'> <img className='profile' src={profile} alt="" /></div>

            <div className='ms-5 mt-2 '>
              <h6 style={{ marginTop: '14px', fontSize: '19px', fontWeight: 'bold' }}> Adithyan U</h6>
              <p className='text-success' style={{ fontSize: '13px', marginTop: '-10px', fontWeight: 'bold' }}> Verification Level 3</p>
              <p style={{ color: '#a1a1a1', fontSize: '12px', marginTop: '-20px' }}> palakkad,India</p>
            </div>
          </div>

          <div className='second row rounded  mt-3 ms-3' style={{ width: '250px', height: '140px' }}>

            <div className='col-md-8'>
              <p style={{ fontWeight: 'bold' }} className='mt-2'>Available for use</p>
              <h3 style={{ marginTop: '-16px' }}>0.00</h3>
              <p style={{ fontWeight: 'bold', marginTop: '-10px' }}>Being cleared</p>
              <h3 style={{ marginTop: '-16px' }}>0.00</h3>
            </div>

            <div className='col-md-4 '>
              <button className='button btn border rounded ' style={{ marginLeft: '-23px' }}><p style={{ marginTop: '-8px', fontSize: '12px', fontWeight: 'bold' }}>Withdraw</p></button>
              <button className='button2 btn border rounded mt-2' style={{ marginLeft: '-23px' }}><p style={{ marginTop: '-8px', fontSize: '12px', fontWeight: 'bold' }}>History</p></button>
            </div>
          </div>

          <div className='third mt-4 ms-3  ' style={{ height: '200px', width: '280px' }}>
            <Stack gap={3}>
              <div className='list p-2 ms-2 d-flex border rounded mt-2' style={{ height: '40px', width: '240px' }}><CiGrid42 size={25} />
                <p style={{ color: '#a1a1a1' }} className='ms-1'>Overview</p>
                <i class="downArrow fa-solid fa-angle-down " style={{ color: '#595959', marginLeft: '90px', marginTop: '-1px' }}></i>
              </div>

              <div className='list p-2 ms-2 d-flex border rounded' style={{ height: '40px', width: '240px' }}><IoStorefrontOutline size={25} />

                <p style={{ color: '#a1a1a1' }} className='ms-1'>Store</p>
                <i class="downArrow fa-solid fa-angle-down " style={{ color: '#595959', marginLeft: '115px', marginTop: '-1px' }}></i>
              </div>

              <div className='list p-2 ms-2 d-flex border rounded' style={{ height: '40px', width: '240px' }}><FaRegUser size={25} />
                <p style={{ color: '#a1a1a1', }} className='ms-1'>User  </p>
                <i class="downArrow fa-solid fa-angle-down " style={{ color: '#595959', marginLeft: '119px', marginTop: '-1px' }}></i>
              </div>

              <div className='list p-2 ms-2 d-flex border rounded' style={{ height: '40px', width: '240px' }}><CiBookmarkCheck size={25} />
                <p style={{ color: '#a1a1a1' }} className='ms-1'>Orders</p>
                <i class="downArrow fa-solid fa-angle-down " style={{ color: '#595959', marginLeft: '105px', marginTop: '-1px' }}></i>
              </div>

              <div className='list p-2 ms-2 d-flex border rounded' style={{ height: '40px', width: '240px' }}><BiSupport style={{ marginTop: '-3px' }} size={25} />
                <h6 style={{ color: '#a1a1a1' }} className='ms-1'>Contact & Support</h6>
                <i class="downArrow fa-solid fa-angle-down " style={{ color: '#595959', marginLeft: '30px', marginTop: '-1px' }}></i>
              </div>

              <div className='list p-2 ms-2 d-flex border rounded' style={{ height: '40px', width: '240px' }}><HiOutlinePencilSquare size={25} />
                <p style={{ color: '#a1a1a1' }} className='ms-1'>Terms & Condition</p>
                <i class="downArrow fa-solid fa-angle-down " style={{ color: '#595959', marginLeft: '30px', marginTop: '-1px' }}></i>
              </div>
            </Stack>


          </div>
        </div>
<div className='col-lg-1' style={{backgroundColor: 'white' }}>
  {/* Products , orders , store settings */}
  <div style={{marginTop:'170px'}}>
<button className=' btn rounded shadow  ' id='mainbuttons' style={{width:'100px', height:'40px', marginLeft:'-4px'}}><p style={{fontSize:'13px', fontWeight:'bold'}}>Products</p></button>
<button  className='  btn rounded shadow mt-3' id='mainbuttons' style={{width:'100px', height:'40px', marginLeft:'-4px'}}><p style={{fontSize:'13px', fontWeight:'bold'}}>Orders</p></button>
<button  className=' btn rounded shadow mt-3'id='mainbuttons'  style={{width:'100px', height:'40px', marginLeft:'-4px'}}> <p style={{fontSize:'13px', fontWeight:'bold'}}>Store settings</p></button>
</div>
</div>
        <div className='col-lg-8' style={{ backgroundColor: 'white' }}>

          {/* dropdowns */}
          <div className='d-flex mt-4 gap-3' style={{ marginLeft: '200px' }} >

            <label htmlFor="exampleDataList" className="form-label">
            </label>
            <select className="form-select" id="exampleDataList" style={{ width: '180px', height: '35px', marginRight: '-90px' }}>
              <option value="">All</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>

            </select>

            <label htmlFor="exampleDataList" className="form-label">
            </label>
            <select className="form-select" id="exampleDataList" style={{ width: '180px', height: '35px', marginLeft: '90px' }}>
              <option value="">All</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>

            </select>

            <label htmlFor="exampleDataList" className="form-label">
            </label>
            <select className="form-select" id="exampleDataList" style={{ width: '180px', height: '35px', }}>
              <option value="">All</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>

            </select>
          </div>


          <div className="" style={{ height: '425px', width: '800px', marginTop: '29px', marginLeft: '0px',backgroundColor: 'white' }}>

            <div className='d-flex ' style={{}}>
              {/* searchbar */}
              <label for="exampleDataList" class="form-label"></label>
              <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Search products" style={{ width: '250px', height: '30px', marginLeft: '360px', marginTop: '20px' }} />
              {/* dropdown */}
              <Dropdown style={{ width: '110px' }} className='rounded bg-primary mt-3 ms-5'>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Sort<FaFilter style={{ marginLeft: '20px' }} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Price (low - high)</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Price (high - low)</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Rating</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className='d-flex justify-content-evenly mt-2 ' style={{backgroundColor: 'white'}}>

              <Button variant="outline-primary" style={{ height: "230px", width: '160px' }} className='shadow' >
                <FaPlus />
                <p style={{ fontSize: '13px' }}>Add a product</p>
              </Button>{' '}


              <Card style={{ width: '160px', height: '160px' }} className='border shadow'>
                <ThreeDot/>
                <Card.Img variant="top" src={product}  style={{marginTop:'-40px'}}/>
                <Card.Body style={{ width: '160px', height: '70px' }} className='border shadow'>
                  <Card.Title style={{ fontSize: '15px', marginTop: '-10px' }}><h6 style={{ fontWeight: 'bold' }}>Canon 1500D for rent</h6> </Card.Title>
                  <Card.Text style={{ fontSize: '10px', marginTop: '-5px' }}>

                    <p style={{ marginTop: '-8px', fontWeight: 'bolder' }}> From <span className='text-primary'> ₹1,00,000</span></p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '160px', height: '160px' }} className='border shadow'>
              <ThreeDot/>
                <Card.Img variant="top" src={product}  style={{marginTop:'-40px'}} />
                <Card.Body style={{ width: '160px', height: '70px' }} className='border shadow'>
                  <Card.Title style={{ fontSize: '15px', marginTop: '-10px' }}><h6 style={{ fontWeight: 'bold' }}>Canon 1500D for rent</h6> </Card.Title>
                  <Card.Text style={{ fontSize: '10px', marginTop: '-5px' }}>

                    <p style={{ marginTop: '-8px', fontWeight: 'bolder' }}> From <span className='text-primary'> ₹1,00,000</span></p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '160px', height: '160px' }} className='border shadow'>
              <ThreeDot/>
                <Card.Img variant="top" src={product}  style={{marginTop:'-40px'}}/>
                <Card.Body style={{ width: '160px', height: '70px' }} className='border shadow'>
                  <Card.Title style={{ fontSize: '15px', marginTop: '-10px' }}><h6 style={{ fontWeight: 'bold' }}>Canon 1500D for rent</h6> </Card.Title>
                  <Card.Text style={{ fontSize: '10px', marginTop: '-5px' }}>

                    <p style={{ marginTop: '-8px', fontWeight: 'bolder' }}> From <span className='text-primary'> ₹1,00,000</span></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div >


          </div>
        </div>
      </div>
    </>
  )
}

export default App


