import styled from 'styled-components';

export const FooterStyle = styled.footer`
  padding: 1rem 0;
  @media (min-width: 992px) {
    padding: 1.5rem 0;
  }
  
  background-color: #222831;

  
  .align-items-md-center {
    @media (min-width: 768px) {
      display: flex;
      flex: 1 1 auto;
      align-items: center;
      .flex-md-column {
        @media (min-width: 768px) {
          display: flex;
          flex-direction: column;
        }
        .footer-copyright {
          color: #9ca0ad;
          font-size: 0.75rem;
        }
      }
    }
  }

  .footer-links {
    margin-top: 1rem;
    padding-top: 1rem;
    border-color: #393E46 !important;
    border-top: 1px solid #dee2e6;
    font-size: 0.75rem;
    color: #9ca0ad;
  }
`;