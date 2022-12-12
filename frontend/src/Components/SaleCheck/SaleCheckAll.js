import React, {forwardRef} from 'react'
import {uniqueId, map} from 'lodash'
import {useSelector} from 'react-redux'
import {FaTelegramPlane, FaPhoneAlt} from 'react-icons/fa'

export const SaleCheckAll = forwardRef((props, ref) => {
    const {
        selled,
        returned,
        selledDiscounts,
        returnedDiscounts,
        selledPayments,
        returnedPayments,
        product,
        userInfo,
    } = props

    const {market} = useSelector((state) => state.login)
    const {currencyType} = useSelector((state) => state.currency)
    const calculateAllSum = (data) => {
        return data
            ? data.reduce((acc, pr) => {
                  return (
                      acc +
                      pr[
                          currencyType === 'USD'
                              ? 'totalprice'
                              : 'totalpriceuzs'
                      ]
                  )
              }, 0)
            : 0
    }
    const calculateAllDiscounts = (data) => {
        return data
            ? data.reduce((acc, pr) => {
                  return (
                      acc +
                      pr[currencyType === 'USD' ? 'discount' : 'discountuzs']
                  )
              }, 0)
            : 0
    }
    const calculateAllPayments = (data) => {
        return data
            ? data.reduce((acc, pr) => {
                  return (
                      acc +
                      pr[currencyType === 'USD' ? 'payment' : 'paymentuzs']
                  )
              }, 0)
            : 0
    }
    console.log(selled)
    return (
        <div ref={ref} className={'bg-white-900 p-4 rounded-md'}>
            <div className='flex pb-2 justify-between items-center border-b-[0.8px] border-black-700'>
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
                            {new Date(product?.createdAt).toLocaleDateString()}{' '}
                            <span className='ml-3'>
                                {new Date(
                                    product?.createdAt
                                ).toLocaleTimeString()}
                            </span>
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
                                {userInfo?.firstname} {userInfo?.lastname}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {selled?.length > 0 && (
                <div className='mt-5'>
                    <h3 className='text-[1.3rem] text-black-700 mb-5 font-bold'>
                        Sotilganlar :
                    </h3>
                    <table className='border-collapse border border-slate-400 w-full'>
                        <thead>
                            <tr>
                                <td className='check-table-rtr'>№</td>
                                <td className='check-table-rtr'>Sana</td>
                                <td className='check-table-rtr'>Kodi</td>
                                <td className='check-table-rtr'>Maxsulot</td>
                                <td className='check-table-rtr'>Soni</td>
                                <td className='check-table-rtr'>Narxi(dona)</td>
                                <td className='check-table-rtr'>Jami</td>
                                <td className='check-table-rtr'>Sotuvchi</td>
                            </tr>
                        </thead>
                        <tbody>
                            {map(
                                selled.sort(
                                    (a, b) =>
                                        a.product?.category?.code.localeCompare(
                                            b.product?.category?.code
                                        ) ||
                                        a.product?.productdata?.code -
                                            b.product?.productdata?.code
                                ),
                                (item, index) => {
                                    return (
                                        <tr key={uniqueId('selled-row')}>
                                            <td className='check-table-body text-center'>
                                                {index + 1}
                                            </td>
                                            <td className='check-table-body'>
                                                {new Date(
                                                    item?.createdAt
                                                ).toLocaleDateString()}
                                            </td>
                                            <td className='check-table-body text-center'>
                                                {item?.product?.category?.code +
                                                    item?.product?.productdata
                                                        ?.code}
                                            </td>
                                            <td className='check-table-body text-start'>
                                                {
                                                    item?.product?.productdata
                                                        ?.name
                                                }
                                            </td>
                                            <td className='check-table-body'>
                                                {item?.pieces}
                                            </td>
                                            <td className='check-table-body'>
                                                {currencyType === 'USD'
                                                    ? item?.unitprice.toLocaleString(
                                                          'ru-Ru'
                                                      )
                                                    : item?.unitpriceuzs.toLocaleString(
                                                          'ru-Ru'
                                                      )}{' '}
                                                {currencyType}
                                            </td>
                                            <td className='check-table-body'>
                                                {currencyType === 'USD'
                                                    ? item?.totalprice.toLocaleString(
                                                          'ru-Ru'
                                                      )
                                                    : item?.totalpriceuzs.toLocaleString(
                                                          'ru-Ru'
                                                      )}{' '}
                                                {currencyType}
                                            </td>
                                            <td className='check-table-body'>
                                                {item?.user
                                                    ? item.user.firstname +
                                                      ' ' +
                                                      item.user.lastname[0]
                                                    : ''}
                                            </td>
                                        </tr>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            )}
            <div className='border-t-[0.8px] border-black-700 w-full mt-4 mb-4 text-end'>
                <h3 className='text-[1.1rem] text-black-700 font-bold pt-4'>
                    Sotilganlar jami :{' '}
                    <span>
                        {calculateAllSum(selled).toLocaleString('ru-Ru')}{' '}
                        {currencyType}
                    </span>
                </h3>
            </div>
            {returned?.length > 0 && (
                <>
                    <div className='mt-5'>
                        <h3 className='text-[1.3rem] text-black-700 mb-5 font-bold'>
                            Qaytarilganlar :
                        </h3>
                        <table className='border-collapse border border-slate-400 w-full'>
                            <thead>
                                <tr>
                                    <td className='check-table-rtr'>№</td>
                                    <td className='check-table-rtr'>Sana</td>
                                    <td className='check-table-rtr'>Kodi</td>
                                    <td className='check-table-rtr'>
                                        Maxsulot
                                    </td>
                                    <td className='check-table-rtr'>Soni</td>
                                    <td className='check-table-rtr'>
                                        Narxi(dona)
                                    </td>
                                    <td className='check-table-rtr'>Jami</td>
                                </tr>
                            </thead>
                            <tbody>
                                {map(returned, (item, index) => {
                                    return (
                                        <tr key={uniqueId('selled-row')}>
                                            <td className='p-1 border text-center text-[0.875rem] font-bold'>
                                                {index + 1}
                                            </td>
                                            <td className='check-table-body'>
                                                {new Date(
                                                    item?.createdAt
                                                ).toLocaleDateString()}
                                            </td>
                                            <td className='check-table-body'>
                                                {item?.product?.category?.code +
                                                    item?.product?.productdata
                                                        ?.code}
                                            </td>
                                            <td className='check-table-body'>
                                                {
                                                    item?.product?.productdata
                                                        ?.name
                                                }
                                            </td>
                                            <td className='check-table-body'>
                                                {item?.pieces}
                                            </td>
                                            <td className='check-table-body'>
                                                {currencyType === 'USD'
                                                    ? item?.unitprice.toLocaleString(
                                                          'ru-Ru'
                                                      )
                                                    : item?.unitpriceuzs.toLocaleString(
                                                          'ru-Ru'
                                                      )}{' '}
                                                {currencyType}
                                            </td>
                                            <td className='check-table-body'>
                                                {currencyType === 'USD'
                                                    ? item?.totalprice.toLocaleString(
                                                          'ru-Ru'
                                                      )
                                                    : item?.totalpriceuzs.toLocaleString(
                                                          'ru-Ru'
                                                      )}{' '}
                                                {currencyType}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className='border-t-[0.8px] border-black-700 w-full mt-4 mb-4 text-end'>
                        <h3 className='text-[1.1rem] text-black-700 font-bold pt-4'>
                            Qaytarilganlar jami :{' '}
                            <span>
                                {calculateAllSum(returned).toLocaleString(
                                    'ru-Ru'
                                )}{' '}
                                {currencyType}
                            </span>
                        </h3>
                    </div>
                </>
            )}
            <div className='border-t-[0.8px] border-black-700 w-full my-[1.5rem]'></div>
            <ul>
                <li className='check-ul-li-foot border-t-0'>
                    {' '}
                    Jami:{' '}
                    <span>
                        {(
                            calculateAllSum(selled) + calculateAllSum(returned)
                        ).toLocaleString('ru-Ru')}{' '}
                        {currencyType}
                    </span>
                </li>
                <li className='check-ul-li-foot'>
                    {' '}
                    Chegirma:{' '}
                    <span>
                        {(
                            calculateAllDiscounts(selledDiscounts) +
                            calculateAllDiscounts(returnedDiscounts)
                        ).toLocaleString('ru-Ru')}{' '}
                        {currencyType}
                    </span>
                </li>
                <li className='check-ul-li-foot'>
                    {' '}
                    To'langan:{' '}
                    <span>
                        {(
                            calculateAllPayments(selledPayments) +
                            calculateAllPayments(returnedPayments)
                        ).toLocaleString('ru-Ru')}{' '}
                        {currencyType}
                    </span>
                </li>
                <li className='check-ul-li-foot'>
                    {' '}
                    Qarz:{' '}
                    <span>
                        {(
                            calculateAllSum(selled) +
                            calculateAllSum(returned) -
                            (calculateAllPayments(selledPayments) +
                                calculateAllPayments(returnedPayments)) -
                            (calculateAllDiscounts(selledDiscounts) +
                                calculateAllDiscounts(returnedDiscounts))
                        ).toLocaleString('ru-Ru')}{' '}
                        {currencyType}
                    </span>
                </li>
            </ul>
        </div>
    )
})
