import React from 'react'
import styled from 'styled-components'
// Components
import ProjectBox from '../Elements/ProjectBox'
import FullButton from '../Buttons/FullButton'
// Assets
import ProjectImg1 from '../../assets/pipehouse/product-1.png'
import ProjectImg2 from '../../assets/pipehouse/product-2.png'
import ProjectImg3 from '../../assets/pipehouse/product-3.png'
import ProjectImg4 from '../../assets/pipehouse/product-4.png'
import ProjectImg5 from '../../assets/pipehouse/product-5.png'
import ProjectImg6 from '../../assets/pipehouse/product-6.png'
import AddImage2 from '../../assets/pipehouse/logo.jpg'

export default function Projects() {
    return (
        <Wrapper id='projects'>
            <div className='whiteBg'>
                <div className='container'>
                    <HeaderInfo>
                        <h1 className='font40 extraBold'>
                            Bizning maxsulotlarimiz
                        </h1>
                    </HeaderInfo>
                    <div className='row textCenter'>
                        <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                            <ProjectBox
                                img={ProjectImg1}
                                title='POLIETELIN QUVURLAR'
                                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                                action={() => alert('clicked')}
                            />
                        </div>
                        <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                            <ProjectBox
                                img={ProjectImg2}
                                title='ISITGICHLAR'
                                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                                action={() => alert('clicked')}
                            />
                        </div>
                        <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                            <ProjectBox
                                img={ProjectImg3}
                                title='SUV ISITISH QURILMALARI'
                                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                                action={() => alert('clicked')}
                            />
                        </div>
                    </div>
                    <div className='row textCenter'>
                        <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                            <ProjectBox
                                img={ProjectImg4}
                                title='SUV NASOSLARI'
                                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                                action={() => alert('clicked')}
                            />
                        </div>
                        <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                            <ProjectBox
                                img={ProjectImg5}
                                title='FITINGLAR'
                                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                                action={() => alert('clicked')}
                            />
                        </div>
                        <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                            <ProjectBox
                                img={ProjectImg6}
                                title='BOSHQA SANTEXNIKA MAXSULOTLARI'
                                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                                action={() => alert('clicked')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lightBg'>
                <div className='container'>
                    <Advertising className='flexSpaceCenter'>
                        <AddLeft>
                            <AddLeftInner>
                                <ImgWrapper className='flexCenter'>
                                    <img
                                        className='radius8'
                                        src={AddImage2}
                                        alt='add'
                                    />
                                </ImgWrapper>
                            </AddLeftInner>
                        </AddLeft>
                        <AddRight>
                            <h2 className='font40 extraBold'>Biz haqimizda</h2>
                            <p className='font12' style={{marginTop: '30px'}}>
                                Bizning kompaniyamiz 2008 yilda yashkil topkan
                                bulib 14 yildan buyon xalqimizga ulgurchi va
                                chakana narxlarda sifatli santexnika mollarini
                                taqdim etib kelmoqda. Kompaniyamizning Navoiy
                                shahri bo'ylam ucta fillaiali mavjud bo'lim u
                                yerda siz keng turdagi Santexnika mollarini
                                Ulgirji va chakana ko'rinishda sotib olishingiz
                                mumkin. Mahsulotlarimizning aksariyati jaxon
                                brendidagi mahulotlar bo'lganligi sababli
                                ularning barchasi sifat kafolatiga ega.Bundan
                                tashqari bizda yetkazib berish va servis
                                xizmatlarimiz mavjud. To'lovlar siz istagan
                                turda Naqd/Plastik yoki pul ko'chirish yo'li
                                bilan amalga oshiriladi.
                            </p>
                        </AddRight>
                    </Advertising>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
`
const HeaderInfo = styled.div`
    @media (max-width: 860px) {
        text-align: center;
    }
`
const Advertising = styled.div`
    padding: 100px 0;
    margin: 100px 0;
    position: relative;
    @media (max-width: 1160px) {
        padding: 60px 0 40px 0;
    }
    @media (max-width: 860px) {
        flex-direction: column;
        padding: 0 0 30px 0;
        margin: 80px 0 0px 0;
    }
`
const ButtonsRow = styled.div`
    @media (max-width: 860px) {
        justify-content: space-between;
    }
`
const AddLeft = styled.div`
    position: relative;
    width: 50%;
    top: 70px;
    p {
        max-width: 475px;
    }
    @media (max-width: 860px) {
        width: 80%;
        order: 2;
        text-align: center;
        h2 {
            line-height: 3rem;
            margin: 15px 0;
        }
        p {
            margin: 0 auto;
        }
    }
`
const AddRight = styled.div`
    width: 50%;
    @media (max-width: 860px) {
        width: 80%;
        order: 2;
    }
`
const AddLeftInner = styled.div`
    width: 100%;
    position: absolute;
    top: -300px;
    left: 0;
    @media (max-width: 1190px) {
        top: -250px;
    }
    @media (max-width: 920px) {
        top: -200px;
    }
    @media (max-width: 860px) {
        order: 1;
        position: relative;
        top: -60px;
        left: 0;
    }
`
const ImgWrapper = styled.div`
    width: 100%;
    padding: 0 15%;
    img {
        width: 100%;
        height: auto;
    }
    @media (max-width: 400px) {
        padding: 0;
    }
`
