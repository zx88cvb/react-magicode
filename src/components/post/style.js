import styled from 'styled-components';
import style,
{
  AElement
} from 'assets/style/global-style';

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
`;