import React from 'react'
import styled from 'styled-components'
// Components
import ServiceBox from '../Elements/ServiceBox'

export default function Services() {
    return (
        <Wrapper id='services'>
            {/* <div className='lightBg' style={{padding: '50px 0'}}>
                <div className='container'>
                    <ClientSlider />
                </div>
            </div> */}
            <div className='whiteBg' style={{padding: '60px 0'}}>
                <div className='container'>
                    <HeaderInfo>
                        <h1 className='font40 extraBold'>Nega ayan biz...</h1>
                    </HeaderInfo>
                    <ServiceBoxRow className='flex '>
                        <ServiceBoxWrapper>
                            <ServiceBox
                                icon='roller'
                                title='SIFAT KAFOLATI'
                                subtitle="Kompaniyamiz tomonidan taqdim etilayotgan mahsulotlar jahon standartlariga to'liq javob berganligi sababli-sifat kafolatiga ega."
                            />
                        </ServiceBoxWrapper>
                        <ServiceBoxWrapper>
                            <ServiceBox
                                icon='monitor'
                                title='YETKAZIB BERISH'
                                subtitle='Koompaniyamiz tomonidan haridorlarga qulaylik yaratish maqsaida yetkazib berish xizmati tashkil etilgan.'
                            />
                        </ServiceBoxWrapper>
                        <ServiceBoxWrapper>
                            <ServiceBox
                                icon='browser'
                                title='SERVIS XIZMATI'
                                subtitle="Kompaniyamizda malakali va ko'p yillik tajribaga ega xodimlardan tashkil topgan servis xizmati tashkil etilgan  ."
                            />
                        </ServiceBoxWrapper>
                        <ServiceBoxWrapper>
                            <ServiceBox
                                icon='printer'
                                title='KENG ASSORTIMENT'
                                subtitle="Asosiy yutuqlarimizdan yana biri kompaniyamizning maxsulotlar assortementi ko'pligida bo'lib siz bu yerda 2500 turdan ortiq mahsulotlarni ulgirji va chakana xarid qilishingiz mumkin ."
                            />
                        </ServiceBoxWrapper>
                    </ServiceBoxRow>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
`
const ServiceBoxRow = styled.div`
    display: flex;
    align-items: start;
    gap: 1%;
    padding: 80px 0;
    @media (max-width: 860px) {
        flex-direction: column;
    }
`
const ServiceBoxWrapper = styled.div`
    width: 24%;
    @media (max-width: 860px) {
        width: 100%;
        text-align: center;
        padding: 40px 0;
    }
`
const HeaderInfo = styled.div`
    @media (max-width: 860px) {
        text-align: center;
    }
`
