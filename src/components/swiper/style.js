import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import style,
{
  AElement,
  PaperBase
} from '../../assets/style/global-style';

// material-ui
export const DivPaper = styled(PaperBase)`
  padding-right: 0;
  padding-left: 0;
`;

export const DivGrid = styled(Grid)`
  background-color: ${props => props.theme.dark ? 'style["theme-color-dark"]': style["theme-color-dark"]};
`;

// customer ui
export const DivGutters = styled.div`
  margin-right: 0;
  margin-left: 0;
`;

export const DivMedia = styled.div`
  align-items: flex-start;
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0;
  flex-shrink: 0;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  ::after {
    content: '';
    display: block;
    padding-top: 66.66666%;
  }
`;

export const AMedia =styled(AElement)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 0;
  border-radius: inherit;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: rgba(120, 120, 120, 0.1);
  background-image: url(https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2019/06/2019062004540484.jpg);
`;

// 轮播图右侧文件描述
export const DivListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DivListBody = styled.div`
  flex: 1 1 auto;
`;

export const DivListFooter = styled.div`
  margin-top: 0.5rem;
`;

export const DivH2X = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 4rem;
  margin-bottom: .5rem;

  @media (min-width: 768px){
    margin-top: 4.5rem;
    margin-bottom: 1rem;
  }
  @media (min-width: 1200px) {
    margin-bottom: 1.5rem;
  }
`;

export const DivListDesc = styled.div`
  display: none;
  color: #f2f2f5;
  font-size: 0.875rem;
  @media (min-width: 768px) {
    margin-bottom: .5rem;
    margin-top: .5rem;
  }

  @media (min-width: 992px) {
    display: block;
  }
`;

export const AH2X = styled(AElement)`
  line-height: 1.4285714286;
  display: block;
  font-size: 1.125rem;
  color: #fff;
`;

export const PTextLight = styled.p`
  color: #f2f2f5;
`;

export const DivFooterText = styled.div`
  color: #f2f2f5;
  font-size: 0.75rem;

  span {
    display: inline-block;
  }

  svg {
    margin: 0 .25rem;
    color: ${style["theme-color-primary"]};

    @media (min-width: 768px) {
      margin: 0 .5rem;
    }
  }

  time {
    display: inline-block;
  }
`;

export const AFooterCategory = styled(AElement)`
  color: #f2f2f5;
`;