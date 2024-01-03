import { Component } from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className='footer'>
          <div className='footer-container'>
            <a
              href='https://github.com/ahmtydn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHub className='icon' sx={{ fontSize: 30 }} />
            </a>
            <a
              href='https://www.linkedin.com/in/ahmttyydn/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedIn className='icon' sx={{ fontSize: 30 }} />
            </a>
          </div>
          <div className='rn-footer-area rn-section-gap section-separator'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='footer-area text-center'>
                    <p className='description mt--30'>
                      © 2024. All rights reserved by{' '}
                      <a href='https://www.ahmetaydin.dev'>Ahmet Aydın.</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
