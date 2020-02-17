import styled from 'styled-components'
import arrow from 'assets/img/arrow.svg'

export const UserWalletWrapper = styled.div<{ $walletOpen: boolean }>`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  /* background: var(--color-background-pageWrapper);
  border-radius: ${({ $walletOpen }): string =>
    $walletOpen ? 'var(--border-radius) var(--border-radius) 0 0' : 'var(--border-radius)'};
  box-shadow: var(--box-shadow); */
  line-height: 1;
  text-align: left;
  position: relative;
  
    .QRCode {
      margin: 0 0 0 auto;
    }
`

export const UserWalletItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  white-space: initial;
  font-family: var(--font-mono);
  letter-spacing: 0;
  font-weight: var(--font-weight-medium);
  color: #476481;
  letter-spacing: 0;
  flex: 1 1 auto;
`

export const UserAddress = styled.div`
  font-weight: var(--font-weight-medium);
  font-size: 1.6rem;
  color: #476481;
  letter-spacing: 0;
`

export const QRCode = styled.div`
  margin: 0 0 0 auto;
`

export const UserWalletToggler = styled(UserWalletItem)`
  cursor: pointer;
  margin: 0 3rem 0 0;
  &::after {
    content: '';
    background: url(${arrow}) no-repeat center/contain;
    height: 1.4rem;
    width: 1.4rem;
    display: flex;
    transform: rotate(90deg);
    align-items: center;
    justify-content: center;
    align-content: center;
    margin: 0 0 0 0.7rem;
    opacity: 0.5;
    transition: transform .2s ease-in-out;
  }
  &.visible::after {
      transform: rotate(-90deg);
    }
  }
`

export const EtherImage = styled.img`
  width: 2.6rem;
  height: 2.6rem;
  object-fit: contain;

  @media (prefers-color-scheme: dark) {
    body:not(.light-theme) & {
      filter: invert(100%);
    }
  }

  body.dark-theme & {
    filter: invert(100%);
  }
`

export const CopyDiv = styled.div`
  background: #90ee90ad;
  border-radius: var(--border-radius);
  width: 60%;
`

export const UserWalletSlideWrapper = styled.div`
  position: absolute;
  background: inherit;
  width: 100%;
  left: 0;
  background: #ffffff;
  width: 35rem;
  display: flex;
  border-radius: 0.6rem;
  padding: 1.6rem;
  box-sizing: border-box;
  z-index: 10;
  top: 135%;
  box-shadow: 0 -1rem 4rem 0 rgba(0,0,0,0.05), rgba(0,0,0,0.02) 0 0.276726rem 0.221381rem 0, rgba(0,0,0,0.027) 0 0.666501rem 0.532008rem 0, rgba(0,0,0,0.035) 0 1.25216rem 1.0172rem 0, rgba(0,0,0,0.043) 0 2.23363rem 1.7869rem 0, rgba(0,0,0,0.05) 0 4.17776rem 3.34221rem 0, rgba(0,0,0,0.07) 0 10rem 8rem 0;
}
`

export const NetworkTitle = styled.div`
  /* color: ${({ color = 'var(--color-text-primary)' }): string => color};
  font-size: ${({ $fontSize = '1rem' }): string => $fontSize};
  font-weight: bolder; */
  color: inherit;
  position: absolute;
  text-transform: uppercase;
  font-size: .9rem;
  text-transform: uppercase;
  letter-spacing: .3rem;
  top: -.6rem;
`

export const MonospaceAddress = styled(NetworkTitle)`
  margin: 0 0.625rem;
  font-family: 'monospace';
  font-size: 85%;
  font-weight: lighter;
  word-break: break-all;
`
