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
  Social,
  BtnSocial,
} from "./style";

// Icon
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card primary={isOpen}>
      <WrapperContent
        tranform={isOpen ? "-800px" : "0"}
        primary={isOpen}
        left={0}
        right={"45%"}
      >
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
      <WrapperContent
        tranform={isOpen ? "0" : "800px"}
        primary={isOpen}
        left={"55%"}
        right={0}
      >
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
          <Input placeholder="Username" type="text" />
          <Input placeholder="Email" type="text" />
          <Input placeholder="Password" type="password" />
          <Button>Register</Button>
          <Link align="center">Or Create account using social media</Link>
          <Social>
            <BtnSocial>
              <img src={Facebook} alt="facebook" />
            </BtnSocial>
            <BtnSocial>
              <img src={Twitter} alt="twitter" />
            </BtnSocial>
            <BtnSocial>
              <img src={Instagram} alt="instagram" />
            </BtnSocial>
          </Social>
        </WrapperInput>
      </WrapperContent>
      <Section primary={isOpen}></Section>
      <Hero primary={isOpen}>
        {isOpen ? (
          <WrapperHero>
            <TitleHero>Hello,Friend!</TitleHero>
            <DescHero>
              Enter your personal details and start journey with us
            </DescHero>
            <ButtonHero onClick={handleShow}>Login</ButtonHero>
          </WrapperHero>
        ) : (
          <WrapperHero>
            <TitleHero>Welcome Back!</TitleHero>
            <DescHero>
              To keep connected with us please Login with your personal info
            </DescHero>
            <ButtonHero onClick={handleShow}>Register</ButtonHero>
          </WrapperHero>
        )}
      </Hero>
    </Card>
  );
};

export default Index;
