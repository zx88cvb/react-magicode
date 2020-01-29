import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import style,
{
  AElement
} from '../../assets/style/global-style';

export const DivPaper = styled(Paper)`
  padding-right: 0;
  padding-left: 0;

  &&& {
    background-color: #222831;
  }
`;

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

export const DivListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;