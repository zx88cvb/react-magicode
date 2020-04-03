import styled from 'styled-components';
import style from 'assets/style/global-style';

import Button from '@material-ui/core/Button';

export {PaperBase} from 'assets/style/global-style';

export const DivRespond = styled.div`

  form {
    margin-bottom: 1.5rem;

    .comment-avatar-author {
      display: flex;
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
      align-items: center;

      .flex-avatar {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 500px;
        line-height: 1;
        white-space: nowrap;
        font-weight: bold;

        width: 32px;
        height: 32px;
        font-size: 0.85em;

        img {
          max-width: 100%;
          width: 32px;
          height: 32px;
          font-size: 0.85em;
          vertical-align: middle;
          border-style: none;
          border-radius: inherit;
        }
      }
    }

    .comment-form-text {
      .comment-textarea {
        margin-bottom: 1rem;
        .form-control {
          display: block;
          margin: 0;
          /* padding: .25rem .5rem; */
          width: 100%;
          height: auto;
          line-height: 1.5;

          color: #393E46;
          font-weight: 400;
          font-size: .875rem;

          background-color: #fff;
          background-clip: padding-box;
          transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
          border: 1px solid #f2f2f5;
          border-radius: .15rem;
          
          resize: none;

          overflow: auto;
        }
      }

      .d-flex {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const ButtonComment = styled(Button)`
  color: ${style["font-color-light"]};
`;