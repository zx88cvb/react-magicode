import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import style,
{
  MainElement,
  PaperBase,
  AElement
} from '../../assets/style/global-style';

export const DivPaper = PaperBase;

export {AElement};

export const ButtonSign = styled(Button)`
  position: relative;
  font-size: .75rem;
  padding: .3125rem .75rem .25rem .75rem;

  background-color: ${style["theme-color-primary"]};
`;

export const DivLogin = styled.div`
  display: flex;
  min-height: 76vh;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const Main = styled(MainElement)`
  max-width: 920px;
  width: 100%;
  margin: 0 auto;

  .sign-cover {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;

    background-image: url(https://apollo.1.demo.nicetheme.xyz/wp-content/uploads/2019/08/2019081314383732-e1565707133808.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    ::after {
      content: '';
      display: block;
      padding-top: 66.66666%;
    }
  }

  .sign-body {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.dark ? "#1D1F20": '#fff'};

    @media (min-width: 768px) {
      padding: 3rem;
      margin-top: 0;
    }

    .sign-header {
      font-size: 1.375rem;

      @media (min-width: 768px) {
        margin-top: .5rem;
        margin-bottom: 3rem;
      }
    }

    .sign-form {
      .text-muted{
        margin-top: 1rem;
        @media (min-width: 768px) {
          margin-top: 1.5rem;
        }
        font-size: 0.75rem;

        span {
          font-size: 0.75rem;
          color: #5e646d;
          ${AElement} {
            color: ${style["font-color-light"]};

            :hover {
              color: ${style["font-color-light-hover"]};
            }
          }
        }

        .text-primary {
          margin: 0 .5rem;
          color: ${style["theme-color-primary"]};
        }
      }
      .mt-3 {
        margin-top: 1rem;
        @media (min-width: 768px) {
          margin-top: 1.5rem;
        }
        button {
          width: 100%;
        }
      }
    }
  }
`;
