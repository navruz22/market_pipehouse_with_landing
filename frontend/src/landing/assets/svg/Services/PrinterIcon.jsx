import * as React from 'react'

function SvgComponent(props) {
    return (
        <svg
            width='52px'
            height='52px'
            viewBox='0 0 24 24'
            version='1.1'
            fill='#fece1a'
            {...props}
        >
            <title />
            <g
                fill='none'
                fill-rule='evenodd'
                id='页面-1'
                stroke='none'
                stroke-width='1'
            >
                <g id='导航图标' transform='translate(-325.000000, -80.000000)'>
                    <g id='编组' transform='translate(325.000000, 80.000000)'>
                        <polygon
                            fill='#fece1a'
                            fill-opacity='0.01'
                            fill-rule='nonzero'
                            id='路径'
                            points='24 0 0 0 0 24 24 24'
                        />
                        <polygon
                            id='路径'
                            points='22 7 12 2 2 7 2 17 12 22 22 17'
                            stroke='#fece1a'
                            stroke-linejoin='round'
                            stroke-width='1.5'
                        />
                        <line
                            id='路径'
                            stroke='#fece1a'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='1.5'
                            x1='2'
                            x2='12'
                            y1='7'
                            y2='12'
                        />
                        <line
                            id='路径'
                            stroke='#fece1a'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='1.5'
                            x1='12'
                            x2='12'
                            y1='22'
                            y2='12'
                        />
                        <line
                            id='路径'
                            stroke='#fece1a'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='1.5'
                            x1='22'
                            x2='12'
                            y1='7'
                            y2='12'
                        />
                        <line
                            id='路径'
                            stroke='#fece1a'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='1.5'
                            x1='17'
                            x2='7'
                            y1='4.5'
                            y2='9.5'
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default SvgComponent