// import logo from './logo.svg';
import './App.css';
import './App.test'
import React from 'react';

  
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>


/* <div className="App">
 <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </div>   */
// );
//  }

//  export default App;


export default function App() {
  return (
    
    <MDBCard>
      <div className='App'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://blogger.googleusercontent.com/img/a/AVvXsEi32rDKQR2Swi7YfHjDzyZUBGEmxTz77OClnm24SZl7kWuls7fsVCIfAObY_JRJIReQnBWZIPSVfDLSqDvqeu4CCXCoNQIoUGK-OSDUGMtDJFxh9vmU6WGajIgXH4CsR_-sXU0qWbyJTJl7N0BSTB8HcAGSpCJ54G1daZPnU6h2oANo2CTGsbHCoaGJHQ' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
      <h1>$<span id="bitcoin"></span></h1>
        <MDBCardTitle>Bitcoin</MDBCardTitle>
        <MDBCardText>
          {/* //Some quick example text to build on the card title and make up the bulk of the card's content. */}
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
</div>

      <div className='App'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://blogger.googleusercontent.com/img/a/AVvXsEhrUFoHC68rLHQYMV41awqGtoeU6qI-CkSVmcYK-KBCrOvL-jzwLOx8pN-5B8aALsHh1Zc9mmDm8LVQSSpdpsw0v6vrJsv4r9_lv0ic5aYbogc3i3h9mG6ZGMc7g9_cGSRh_soaKmXtpMEOxBFIsmiTa_wticu9T07MbqQ42J9NwowHp8tn8OUIBlhjqA' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
      <h1>$<span id="litecoin"></span></h1>
        <MDBCardTitle>Litecoin</MDBCardTitle>
        <MDBCardText>
          {/* //Some quick example text to build on the card title and make up the bulk of the card's content. */}
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
</div>

      <div className='App'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://blogger.googleusercontent.com/img/a/AVvXsEgfcodOJm7ZIXw2kiqdo5abN4cUvFYgyqpKt91zHI8710ltPK5Ny_S5X93w9LSDsF5jW61frn3C8a_8w2GXu4bf0clzxuJljoQ8n6az5EI5zQOcl5W2LScP-1-41NQwPW5A3JWT9EwejtOnHsd3q2-llUsJJQ3Z74v_2FOPn0TrI2529NS9_hmFbvModw' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
      <h1>$<span id="ethereum"></span></h1>
        <MDBCardTitle>Ethereum</MDBCardTitle>
        <MDBCardText>
          {/* //Some quick example text to build on the card title and make up the bulk of the card's content. */}
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
</div>

      <div className='App'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://blogger.googleusercontent.com/img/a/AVvXsEj9YzGIFUSMpRoWE4IjGl_o2zpdPkvtUS6jzIgZWEWl7ztYyV20oXu80A52v0R_nXpt_qXVBzxnfse2_pfeIbVHwQSR3oLqqAyMqVqnzJpdbSCBHA2b_zlheiLY3Bb0PYCEXQny7q-FnGE01ZtxVFVC8DbLWW-ZC1PC-gaqL7IC7ZfRxFOZufcv8lcY1g' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
      <h1>$<span id="dogecoin"></span></h1>
        <MDBCardTitle>Dogecoin</MDBCardTitle>
        <MDBCardText>
          {/* //Some quick example text to build on the card title and make up the bulk of the card's content. */}
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
      </div>

<div className='App'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://blogger.googleusercontent.com/img/a/AVvXsEi32rDKQR2Swi7YfHjDzyZUBGEmxTz77OClnm24SZl7kWuls7fsVCIfAObY_JRJIReQnBWZIPSVfDLSqDvqeu4CCXCoNQIoUGK-OSDUGMtDJFxh9vmU6WGajIgXH4CsR_-sXU0qWbyJTJl7N0BSTB8HcAGSpCJ54G1daZPnU6h2oANo2CTGsbHCoaGJHQ' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
      <h1>$<span id="bitcoin"></span></h1>
        <MDBCardTitle>Bitcoin</MDBCardTitle>
        <MDBCardText>
          {/* //Some quick example text to build on the card title and make up the bulk of the card's content. */}
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
      </div>
    </MDBCard>

   
  )
 

  
}


