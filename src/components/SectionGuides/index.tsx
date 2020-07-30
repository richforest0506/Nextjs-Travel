import React from 'react';

import { Container, ContentLeft, Image } from './styles';
import Button from '../Button';
import { Circle, Plus } from '../Shape';

const SectionGuides: React.FC = () => (
  <Container>
    <Circle x="22%" y="345%" />
    <Plus x="40%" y="330%" />
    <ContentLeft>
      <h1>Guides by Thousand Sunny</h1>
      <p>
        Pocket with tips and advice from our on-the-ground expects, our city
        guides app (IOS and Android) is the ultimate resource before and during
        a trip
      </p>
      <Button>Dowload</Button>
    </ContentLeft>
    <Image />
  </Container>
);

export default SectionGuides;
