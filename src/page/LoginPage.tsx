import { Link } from 'react-router-dom';




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

function LoginPage() {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto justify-content-center' style={{borderRadius: '1rem', maxWidth: '600px'}}>
            <MDBCardBody className='p-5 w-200 d-flex flex-column' style={{width:'500px'}}>
              <h2 className="fw-bold mb-2 text-center" style={style.sign}>Sign in</h2>
              <br/>

              <MDBInput wrapperClass='mb-4 w-150' label='Email address' id='' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4 w-150' label='Password' id='formControlLg' type='password' size="lg"/>

              <div className="d-flex justify-content-between w-100">
                <MDBCheckbox name='showPassword' id='showPassword' className='mb-4' label='Show password' />
                <a style={{cursor: 'pointer'}}>Forget password</a>
              </div>


              <MDBBtn size='lg' style={{background:'#0d95e8'}}>
                Login
              </MDBBtn>
              <br/>
                <div className="d-flex justify-content-center">
                <MDBIcon fab icon="google" className="mx-3" style={{ fontSize: '24px', cursor: 'pointer', color: '#db4437' }} />
                <MDBIcon fab icon="facebook" className="mx-3" style={{ fontSize: '24px', cursor: 'pointer', color: '#4267B2' }} />
                <MDBIcon fab icon="twitter" className="mx-3" style={{ fontSize: '24px', cursor: 'pointer', color: '#1DA1F2' }} />
              </div>
              <br/>
              <h6>
  Don't have an account?
  <Link to="/signup" style={{ cursor: 'pointer', fontWeight: 'bold' }}>
    Sign up
  </Link>
</h6>
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
export default LoginPage;
