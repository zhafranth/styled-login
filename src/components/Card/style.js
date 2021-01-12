import styled from "styled-components/macro";
import Image from "../../assets/bg.jpg";

export const Card = styled.div`
  /* background-color: #fff; */
  border-radius: 40px;
  max-width: 1080px;
  width: 70vw;
  height: 680px;
  overflow: hidden;
  background: url(${Image});
  background-size: cover;
  position: relative;
  /* display: flex;
  justify-content: space-between; */
`;

export const Section = styled.div`
  background-color: #fff;
  /* width: 45%; */
  box-sizing: border-box;
  /*  */
  position: absolute;
  top: 0;
  left: ${(props) => (props.primary ? "55%" : 0)};
  right: ${(props) => (props.primary ? 0 : "55%")};
  bottom: 0;
  transition: left ${(props) => (props.primary ? "0.7s" : "0.4s")} linear,
    right ${(props) => (props.primary ? "0.4s" : "0.7s")} linear;
  /* transform: translateX(${(props) => (props.primary ? "200px" : "0")});
  transition: transform 0.5s linear; */
  z-index: 9;
`;

export const WrapperContent = styled.div`
  width: 45%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  padding: 2rem 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  transform: translateX(${(props) => props.tranform});
  transition: transform ${(props) => (props.primary ? "0.7s" : "0.7s")} linear;
  z-index: 10;
`;

export const Logo = styled.h3`
  position: absolute;
  top: 2rem;
  left: 3.5rem;
  font-size: 24px;
  font-weight: 700;
  color: #100f0f;
  margin: 0;
  span {
    color: #47c269;
  }
`;

export const WrapperDesc = styled.div`
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #100f0f;
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: #6b6767;
  font-weight: 400;
  line-height: 1.5rem;
`;
export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Input = styled.input`
  box-sizing: border-box;
  border-radius: 10px;
  border: 0;
  outline: 0;
  background-color: #f0f0f0;
  padding: 0.6rem 0.9rem;
  width: 100%;
  margin-bottom: 1rem;
  font-weight: 400;
  height: 45px;
  &::placeholder {
    color: #6b6767;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  color: #47c269;
  font-size: 12px;
  margin: 2rem 0;
  text-align: ${(props) => props.align || "left"};
`;
export const Button = styled.button`
  /* margin-top: 2rem; */
  background-color: #100f0f;
  color: #fff;
  border-radius: 10px;
  height: 50px;
  border: 0;
  outline: none;
  cursor: pointer;
`;

export const Hero = styled.div`
  /* width: 50%;
  height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  /*  */
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${(props) => (props.primary ? "45%" : 0)};
  left: ${(props) => (props.primary ? 0 : "45%")};
  transition: left ${(props) => (props.primary ? "0.7s" : "0.4s")} ease-in-out,
    right ${(props) => (props.primary ? "0.4s" : "0.7s")} ease-in-out;
  /* transform: translateX(${(props) => (props.primary ? "-200px" : "0")}); */
  /* opacity: ${(props) => (props.primary ? 0 : 1)};
  visibility:${(props) => (props.primary ? "hidden" : "visible")} */
  /* transition: transform 0.5s linear; */
  z-index: 5;
`;

export const WrapperHero = styled.div`
  width: 350px;
  border-radius: 30px;
  background: rgba(196, 196, 196, 0.47);
  backdrop-filter: blur(5px);
  box-sizing: border-box;
  padding: 1.5rem;
  color: #fff;
`;

export const TitleHero = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;
export const DescHero = styled.p`
  font-size: 18px;
  margin: 1rem 0;
`;
export const ButtonHero = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  border-radius: 50px;
  border: 1px solid #fff;
  padding: 0.5rem 1.2rem;
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
`;
export const BtnSocial = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    img {
      color: #47c269;
    }
  }
`;
