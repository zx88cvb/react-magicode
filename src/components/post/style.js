import styled from 'styled-components';
import { Link } from 'react-router-dom';
import style from 'assets/style/global-style';


export const ATag = styled(Link)`
  display: inline-block;

  padding-right: .25rem;
  text-decoration: none;
  
  color: #222831;
  /* transition: all .3s ease; */
  cursor: pointer;
`;

export const DivPostHeader = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-color: #f2f2f5;
  border-bottom: 1px solid #dee2e6;

  .mb-3 {
    margin-bottom: 1rem;
  }

  .h3 {
    font-size: 1.75rem;
  }

  .meta {
    display: flex;
    color: #9ca0ad;
    font-size: 0.75rem;
    align-items: center;

    time {
      color: #9ca0ad;
    }
  }

  .badge-primary {
    display: block;

    color: #fff;
    background-color: #448EF6;

    border-radius: 2px;
    font-weight: 400;
    padding: .25em .3em;

    font-size: 75%;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
  }

  .ml-auto {
    margin-left: auto;
    font-size: 0.875rem;

    .mx-1 {
      margin:0 .25rem;

      svg {
        margin:0 .25rem;
        font-size: 1rem;
      }
    }
  }

  .border-theme {
    position: absolute;
    display: inline-block;
    left: 0;
    bottom: -1px;
    width: 8%;
    height: 2px;
    z-index: 2;

    background-color: ${style["theme-color-primary"]};
  }
`;

export const DivPostContent = styled.div`
  &&& {
    img {
      max-width: 100%;
      height: auto;

      vertical-align: middle;
      border-style: none;
    }

    p {
      margin-bottom: 1.25rem;
      font-size: 1rem;
      line-height: 2;
      word-wrap: break-word;

      color: #393E46;
      margin: 0;
      white-space: normal;
      word-break: break-all;
    }
  }
`;

export const DivFooter = styled.div`
  background-clip: padding-box;
  background-color: transparent;
  line-height: 1;
  &&& {
    padding-top: 0;
    border: 0;
  }

  .post-share-section {
    display: flex;
    text-align: center;
    align-items: center;
    @media (min-width: 768px) {
      justify-content: flex-start;
      text-align: left!important;
    }
    
    .mr {
      cursor: pointer;
      transition: all .3s ease;
      @media (min-width: 768px){
        margin-right: 1.5rem;
      }

      svg {
        margin:0 .25rem;
        font-size: 1rem;
      }
        
    }
  }
`;