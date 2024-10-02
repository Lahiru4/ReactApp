import { Link } from 'react-router-dom';
import React, { useState } from 'react';


import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(value);
  };


  const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // Example signup request using fetch
      const response = await fetch('https://your-api-endpoint.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      console.log('Signup successful:', data);

      // Navigate to login or dashboard after successful signup
      //navigate('/login');

    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup failed, please try again later.');
    }
  };

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto justify-content-center' style={{borderRadius: '1rem', maxWidth: '600px'}}>
            <MDBCardBody className='p-5 w-200 d-flex flex-column' style={{width:'500px'}}>
              <h2 className="fw-bold mb-2 text-center" style={style.sign}>Sign up</h2>
              <br/>
              <form onSubmit={handleSubmit}>
              <MDBInput
                  wrapperClass='mb-4 w-150'
                  label='Full Name' id='fullName'
                  type='test' size="lg"
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleInputChange}
              />
              <MDBInput
                  wrapperClass='mb-4 w-150'
                  label='Email address'
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  size="lg"
              />
              <MDBInput
                  wrapperClass='mb-4 w-150'
                  label='Password'
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  size="lg"
                />
                <MDBInput
                  wrapperClass='mb-4 w-150'
                  label='Confirm password'
                  id='confirmPassword'
                  name='confirmPassword'
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  size="lg"
                />

              <div className="d-flex justify-content-between w-100">
                  <MDBCheckbox
                    name='showPassword'
                    id='showPassword'
                    className='mb-4'
                    label='Show password'
                    onChange={() => setShowPassword(!showPassword)}
                  />
                </div>
                <MDBBtn size='lg' type='submit' style={{
    background: '#0d95e8',
    borderRadius: '5px',
    width:'100%'  // Optional: Adjust border radius
  }}>
              Sign up
              </MDBBtn>
              </form>


              <br/>
                <div className="d-flex justify-content-center">
                <MDBIcon fab icon="google" className="mx-3" style={{ fontSize: '24px', cursor: 'pointer', color: '#db4437' }} />
                <MDBIcon fab icon="facebook" className="mx-3" style={{ fontSize: '24px', cursor: 'pointer', color: '#4267B2' }} />
                <MDBIcon fab icon="twitter" className="mx-3" style={{ fontSize: '24px', cursor: 'pointer', color: '#1DA1F2' }} />
              </div>
              <br/>
              <h6>Do you have an account ? <Link to="/" style={{ cursor: 'pointer', fontWeight: 'bold' }}>
    Lagin
  </Link></h6>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}
const style={
  sign:{
    color:'#0d95e8',
  }


}
export default Signup;
