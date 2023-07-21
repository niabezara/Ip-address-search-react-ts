import React from "react";
import { IpData } from "../Data/IpDataInterface";
import styled from "styled-components";

export default function SearchBar({
  handleClick,
  setIP,
  IpValue,
  Ip,
  Handleinput,
}: {
  handleClick: () => void;
  Ip: string;
  setIP: (ip: string) => void;
  IpValue: IpData | null;
  setIpValue: React.Dispatch<React.SetStateAction<IpData | null>>;
  Handleinput: () => void;
}) {
  return (
    <SearchContainer>
      <Tracker>IP Address Tracker</Tracker>
      <SearchSection>
        <input
          type="text"
          value={Ip}
          onFocus={Handleinput}
          onChange={(e) => setIP(e.target.value)}
        />
        <SearchButton onClick={handleClick}>
          <img src="/icon-arrow.svg" alt="" />
        </SearchButton>
      </SearchSection>
      <InfoData>
        <Title>IP Address</Title>
        <Info>{IpValue?.query}</Info>
        <Title>Location</Title>
        <Info>{IpValue?.city}</Info>
        <Title>Timezone</Title>
        <Info>{IpValue?.timezone}</Info>
        <Title>ISP</Title>
        <Info>{IpValue?.isp}</Info>
      </InfoData>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  background-image: url("./public/pattern-bg-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Tracker = styled.h1`
  color: #fff;
  font-family: Rubik;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.232px;
`;
const SearchButton = styled.button`
  background-color: rgba(0, 0, 0, 1);
  border: none;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 0 15px 15px 0;
`;
const SearchSection = styled.section`
  margin-top: 2.9rem;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.1);
  border: none;
  height: 3.8rem;
  input {
    border: none;
  }
`;

const Title = styled.p`
  color: #404040;
  text-align: center;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.458px;
  text-transform: uppercase;
`;
const InfoData = styled.div`
  margin-top: 2.4rem;
  color: #2c2c2c;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.179px;
  border-radius: 15px;
  background: #fff;
  width: 80%;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.1);
  padding: 2.6rem 2.4rem;
`;
const Info = styled.p`
  color: #2c2c2c;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.179px;
`;
