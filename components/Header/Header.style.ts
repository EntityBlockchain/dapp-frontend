import styled from 'styled-components';

type DivProps = {
  click: any;
};

export const HeaderWrapper = styled.div`
  width: 100%;
  background: var(--text-black);
  height: 60px;
  display: flex;
  align-items: center;
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  @media screen and (max-width: 900px) {
    padding: 0;
    flex-direction: column;
  }
`;
export const Logo = styled.div`
  img {
    width: 100%;
    height: 40px;
    object-fit: contain;
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    padding: 10px;
    width: 100%;
    justify-content: space-between;
  }
`;

export const ButtonCon = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  background: #1673b9;
  padding: 10px;
  border-radius: 5px;

  .icon {
    color: #ffff;
    font-size: 20px;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;
export const NavLinks = styled.div<DivProps>`
  padding: 0 10px;
  flex-grow: 2;
  color: #fff;
  transition: all ease-out 0.3s;

  @media screen and (max-width: 900px) {
    padding: 30px 10px;
    /* left:0 ; */
    left: ${({ click }) => (click ? 0 : '-100%')};
    position: fixed;
    top: 0;
    background: #fff;
    width: 250px;
    height: 300px;
  }
`;

export const Div = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 100%;
  }
`;
export const SubDiv = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const NavLink = styled.div`
  font-size: 1rem;
  margin: 0 10px;
  a {
    color: var(--text-white) !important;

    :hover {
      color: var(--btn-blue) !important;
    }
  }
  @media screen and (max-width: 900px) {
    margin: 10px 0;
  }
`;
