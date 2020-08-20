import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import style,
{
  AElement
} from 'assets/style/global-style';

export {AElement};

export const ButtonSign = styled(Button)`
  position: relative;
  font-size: .75rem;
  padding: .3125rem .75rem .25rem .75rem;

  background-color: ${style["theme-color-primary"]};
`;