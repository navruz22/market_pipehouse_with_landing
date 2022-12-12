import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'
// Components
import Sidebar from '../Nav/Sidebar'
import Backdrop from '../Elements/Backdrop'
// Assets
import BurgerIcon from '../../assets/svg/BurgerIcon'

export default function TopNavbar() {
    const [y, setY] = useState(window.scrollY)
    const [sidebarOpen, toggleSidebar] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => setY(window.scrollY))
        return () => {
            window.removeEventListener('scroll', () => setY(window.scrollY))
        }
    }, [y])

    return (
        <>
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
            <Wrapper
                className='flexCenter animate whiteBg'
                style={y > 100 ? {height: '60px'} : {height: '80px'}}
            >
                <NavInner className='container flexSpaceCenter'>
                    <Link
                        className='pointer flexNullCenter'
                        to='home'
                        smooth={true}
                    >
                        <h1
                            style={{marginLeft: '15px', color: '#fece1a'}}
                            className='font36 extraBold'
                        >
                            TUXTAEVICH
                        </h1>
                    </Link>
                    <BurderWrapper
                        className='pointer'
                        onClick={() => toggleSidebar(!sidebarOpen)}
                    >
                        <BurgerIcon />
                    </BurderWrapper>
                    <UlWrapper className='flexNullCenter'>
                        <li className='semiBold font15 pointer'>
                            <Link
                                activeClass='active'
                                style={{
                                    padding: '10px 15px',
                                    color: '#fece1a',
                                    borderColor: '#fece1a',
                                }}
                                to='home'
                                spy={true}
                                smooth={true}
                                offset={-80}
                            >
                                Bosh sahifa
                            </Link>
                        </li>
                        <li className='semiBold font15 pointer'>
                            <Link
                                activeClass='active'
                                style={{
                                    padding: '10px 15px',
                                    color: '#fece1a',
                                    borderColor: '#fece1a',
                                }}
                                to='projects'
                                spy={true}
                                smooth={true}
                                offset={-80}
                            >
                                Maxsulotlar
                            </Link>
                        </li>
                        <li className='semiBold font15 pointer'>
                            <Link
                                activeClass='active'
                                style={{
                                    padding: '10px 15px',
                                    color: '#fece1a',
                                    borderColor: '#fece1a',
                                }}
                                to='services'
                                spy={true}
                                smooth={true}
                                offset={-80}
                            >
                                Biz haqimizda
                            </Link>
                        </li>
                        <li className='semiBold font15 pointer'>
                            <Link
                                activeClass='active'
                                style={{
                                    padding: '10px 15px',
                                    color: '#fece1a',
                                    borderColor: '#fece1a',
                                }}
                                to='contact'
                                spy={true}
                                smooth={true}
                                offset={-80}
                            >
                                Bog'lanish
                            </Link>
                        </li>
                    </UlWrapper>
                </NavInner>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: #181a1c;
`
const NavInner = styled.div`
    position: relative;
    height: 100%;
`
const BurderWrapper = styled.button`
    outline: none;
    border: 0px;
    background-color: transparent;
    height: 100%;
    padding: 0 15px;
    display: none;
    @media (max-width: 760px) {
        display: block;
    }
`
const UlWrapper = styled.ul`
    display: flex;
    @media (max-width: 760px) {
        display: none;
    }
`
const UlWrapperRight = styled.ul`
    @media (max-width: 760px) {
        display: none;
    }
`
