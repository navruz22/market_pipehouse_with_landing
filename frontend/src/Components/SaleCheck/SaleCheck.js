import React, {forwardRef} from 'react'
import {useSelector} from 'react-redux'
import {uniqueId, map} from 'lodash'
import {FaPhoneAlt, FaTelegramPlane} from 'react-icons/fa'
export const SaleCheck = forwardRef((props, ref) => {
    const {product} = props
    const {products} = product
    const {market} = useSelector((state) => state.login)
    const {currencyType} = useSelector((state) => state.currency)
    const calculateDebt = (total, payment, discount = 0) => {
        return (total - payment - discount).toLocaleString('ru-Ru')
    }

    return (
        <div ref={ref} className={'bg-white-900 p-4 rounded-md'}>
            <div className='flex pb-2 justify-between border-b-[0.8px] border-black-700'>
                <ul className='w-[35%]'>
                    <li className='check-ul-li'>
                        Do'kon:
                        <span className='check-ul-li-span'>{market.name}</span>
                    </li>
                    <li className='check-ul-li'>
                        Manzil:
                        <span className='check-ul-li-span'>
                            {market?.address}
                        </span>
                    </li>
                    <li className='check-ul-li'>
                        Sana:
                        <span className='check-ul-li-span'>
                            {new Date(product?.createdAt).toLocaleDateString()}
                        </span>
                    </li>
                    <li className='check-ul-li'>
                        Mijoz:{' '}
                        <span className='check-ul-li-span'>
                            {product?.client?.name ||
                                product?.packman?.name ||
                                ''}
                        </span>
                    </li>
                </ul>
                {market.image && (
                    <div className='w-[100px]'>
                        <img src={`${market?.image}`} alt='logo' />
                    </div>
                )}
                <div className='check-ul-li flex-col items-end'>
                    <div className={'grow text-center'}>
                        <span className='check-ul-li-span flex flex-col	items-start'>
                            {market.phone1 && (
                                <span className='flex items-center gap-[5px]'>
                                    <FaTelegramPlane
                                        style={{fontSize: '12px'}}
                                    />{' '}
                                    {market.phone1}
                                </span>
                            )}
                            {market.phone2 && (
                                <span className='flex items-center gap-[5px]'>
                                    <FaPhoneAlt style={{fontSize: '12px'}} />{' '}
                                    {market.phone2}
                                </span>
                            )}
                            {market.phone3 && (
                                <span className='flex items-center gap-[5px]'>
                                    <FaPhoneAlt style={{fontSize: '12px'}} />{' '}
                                    {market?.phone3}
                                </span>
                            )}
                        </span>
                    </div>
                    <div className='check-ul-li justify-end'>
                        <p>
                            Sotuvchi:{' '}
                            <span className='check-ul-li-span'>
                                {product?.user?.firstname}{' '}
                                {product?.user?.lastname}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <table className='border-collapse border border-slate-400 w-full break-inside-auto'>
                    <thead>
                        <tr className={'break-inside-avoid break-after-auto'}>
                            <td className='check-table-rtr'>№</td>
                            <td className='check-table-rtr'>Kodi</td>
                            <td className='check-table-rtr'>Maxsulot</td>
                            <td className='check-table-rtr'>Soni</td>
                            <td className='check-table-rtr'>Narxi (dona)</td>
                            <td className='check-table-rtr'>Jami</td>
                        </tr>
                    </thead>
                    <tbody>
                        {map(
                            [...products].sort(
                                (a, b) =>
                                    a.product?.category?.code.localeCompare(
                                        b.product?.category?.code
                                    ) ||
                                    a.product?.productdata?.code -
                                        b.product?.productdata?.code
                            ),
                            (item, index) => {
                                return (
                                    <tr key={uniqueId('saleCheck')}>
                                        <td className='check-table-body text-center'>
                                            {index + 1}
                                        </td>
                                        <td className='check-table-body text-center'>
                                            {item?.product?.category?.code +
                                                item?.product?.productdata
                                                    ?.code}
                                        </td>
                                        <td className='check-table-body text-start'>
                                            {item?.product?.productdata?.name}
                                        </td>
                                        <td className='check-table-body'>
                                            {item?.pieces}
                                        </td>
                                        <td className='check-table-body'>
                                            {currencyType === 'USD'
                                                ? item?.unitprice
                                                : item?.unitpriceuzs}{' '}
                                            {currencyType}
                                        </td>
                                        <td className='check-table-body'>
                                            {currencyType === 'USD'
                                                ? item?.totalprice
                                                : item?.totalpriceuzs}{' '}
                                            {currencyType}
                                        </td>
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                </table>
            </div>
            <div className='border-t-[0.8px] border-black-700 w-full my-[1rem]'></div>
            <ul>
                <li className='check-ul-li-foot border-t-0'>
                    Jami:{' '}
                    <span>
                        {currencyType === 'USD'
                            ? product?.payment?.totalprice
                            : product?.payment?.totalpriceuzs}{' '}
                        {currencyType}
                    </span>
                </li>
                <li className='check-ul-li-foot'>
                    {' '}
                    Chegirma:{' '}
                    <span>
                        {product?.hasOwnProperty('discount')
                            ? currencyType === 'USD'
                                ? product?.discount.discount
                                : product?.discount.discountuzs
                            : 0}{' '}
                        {currencyType}
                    </span>
                </li>
                <li className='check-ul-li-foot'>
                    {' '}
                    To'langan:{' '}
                    <span>
                        {currencyType === 'USD'
                            ? product?.payment?.payment
                            : product?.payment?.paymentuzs}{' '}
                        {currencyType}
                    </span>
                </li>
                <li className='check-ul-li-foot'>
                    {' '}
                    Qarz:{' '}
                    <span>
                        {currencyType === 'USD'
                            ? calculateDebt(
                                  product?.payment?.totalprice,
                                  product?.payment?.payment,
                                  product?.discount?.discount
                              )
                            : calculateDebt(
                                  product?.payment?.totalpriceuzs,
                                  product?.payment?.paymentuzs,
                                  product?.discount?.discountuzs
                              )}{' '}
                        {currencyType}
                    </span>
                </li>
            </ul>
        </div>
    )
})
