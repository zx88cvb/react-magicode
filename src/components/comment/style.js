import styled from 'styled-components';
import style from 'assets/style/global-style';

export const DivTitle = styled.div`
  margin: 1rem .25rem;

  svg {
    margin-right: .5rem;
    color: #448EF6;
    font-size: 1.375rem;
  }

  .c-title {
    margin: 0 .25rem;
  }

  small {
    color: #9ca0ad;
  }
`;

export const UlCommentList = styled.ul`
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin-top: 3rem;
  }

  .comment {
    position: relative;

    .comment-body {
      position: relative;
      display: flex;

      .comment-avatar-author {
        margin-right: .5rem;
        @media (min-width: 768px) {
          margin-right: 1rem;
        }

        .flex-avatar {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 1;
          white-space: nowrap;
          font-weight: bold;
          flex-shrink: 0;
          border-radius: 500px;

          width: 48px;
          height: 48px;

          img {
            border-radius: inherit;
            width: 100%;
          }
        }
      }

      .comment-text {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #f2f2f5;
        padding-bottom: 1rem;
        margin-bottom: 1rem;

        .comment-info {
          display: flex;
          align-items: center;
          margin-bottom: .25rem;

          .comment-author {
            position: relative;
            font-size: 0.875rem;
          }
        }
        
        .comment-content {
          display: inline-block;
          font-size: 0.875rem;

          p {
            color: #393E46;
            margin: 0;
            white-space: normal;
            word-break: break-all;
          }
        }

        .comment-footer {
          display: flex;
          flex: 1 1 auto;
          padding-top: .5rem;
          color: #9ca0ad;
          font-size: 0.75rem;
          
          .comment-reply-link {
            color: #222831;
            font-size: 0.75rem;
            transition: all .3s ease;
            cursor: pointer;

            :hover {
              color: ${style["font-color-light-hover"]};
            }
          }
        }
      }
    }
  }
`;