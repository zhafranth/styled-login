import React, { useState } from "react";
import {
  Card,
  Section,
  Hero,
  Logo,
  Title,
  Desc,
  WrapperInput,
  Input,
  Link,
  Button,
  WrapperContent,
  WrapperDesc,
  TitleHero,
  DescHero,
  ButtonHero,
  WrapperHero,
} from "./style";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card primary={isOpen}>
      <WrapperContent tranform={isOpen ? "-500px" : "0"}>
        <Logo>
          Bon<span>Sante</span>
        </Logo>
        <WrapperDesc>
          <Title>Bonjour!</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            culpa quisquam dolorem
          </Desc>
        </WrapperDesc>
        <WrapperInput>
          <Input placeholder="Email" type="text" />
          <Input placeholder="Password" type="password" />
          <Link>Forget Password?</Link>
          <Button>Login</Button>
        </WrapperInput>
      </WrapperContent>
      <Section primary={isOpen}></Section>
      <Hero primary={isOpen}>
        <WrapperHero>
          <TitleHero>Hello,Friend!</TitleHero>
          <DescHero>
            Enter your personal details and start journey with us
          </DescHero>
          <ButtonHero onClick={handleShow}>Register</ButtonHero>
        </WrapperHero>
      </Hero>
    </Card>
  );
};

export default Index;
