import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  
  @media (max-width: 600px) {
    font-size: 25px;
    line-height: 30px;
  }
`;

export const HeadingSmall = styled.h2`
  font-size: 18px; 
  line-height: 24px;

  @media (max-width: 600px) {
    font-size: 12px; 
    line-height: 10px;
  }
`;

export const HeadingMedium = styled.h3`
  font-size: 20px;
  line-height: 32px;

  @media (max-width: 600px) {
    font-size: 18px; 
    line-height: 24px;
  }
`;

export const Content = styled.p`
  vertical-align: text-bottom;
`;

export const ContentXLarge = styled(Content)`
  font-size: 20px;
  line-height: 32px;

  @media (max-width: 600px) {
    font-size: 18px; 
    line-height: 24px;
  }
`;

export const ContentLarge = styled(Content)`
  font-size: 18px;
  line-height: 24px;

  @media (max-width: 600px) {
    font-size: 16px; 
    line-height: 22px;
  }
`;

export const ContentRegular = styled(Content)`
  font-size: 16px;
  line-height: 22px;

  @media (max-width: 600px) {
    font-size: 14px; 
    line-height: 24px;
  }
`;

export const ContentSmall = styled(Content)`
  font-size: 14px;
  line-height: 24px;

  @media (max-width: 600px) {
    font-size: 12px; 
    line-height: 18px;
  }
`

export const ContentXSmall = styled(Content)`
  font-size: 12px;
  line-height: 12px;

  @media (max-width: 600px) {
    font-size: 8px; 
    line-height: 8px;
  }
`