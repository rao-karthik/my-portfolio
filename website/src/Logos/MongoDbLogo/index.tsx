import { Box } from "@material-ui/core";

interface IMongoDbLogoProps {
    boxWidth?: string;
    boxHeight?: string;
    svgWidth?: string;
    svgHeight?: string;
}

const MongoDbLogo = ({boxWidth='80px', boxHeight='80px', svgWidth='100%', svgHeight='100%'}: IMongoDbLogoProps) => {
    return (
        <div>
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                width: boxWidth,
                height: boxHeight,
                background: '#1abc9c'
            }}>
                            
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width={svgWidth} height={svgHeight}
                    viewBox="0 0 172 172"
                    style={{fill:'#000000', marginTop:'10px'}}>
                    <g fill="none" 
                        fill-rule="nonzero" 
                        stroke="none" 
                        stroke-width="1" 
                        stroke-linecap="butt" 
                        stroke-linejoin="miter" 
                        stroke-miterlimit="10" 
                        stroke-dasharray="" 
                        stroke-dashoffset="0" 
                        font-family="none" 
                        font-weight="none" 
                        font-size="none" 
                        text-anchor="none" 
                        style={{mixBlendMode: 'normal'}}>
                        <path 
                            d="M0,172v-172h172v172z" 
                            fill="none">
                        </path>
                        <g>
                            <path 
                                d="M150.5,61.99167c0,73.45833 -64.5,95.675 -64.5,95.675c0,0 -64.5,-22.21667 -64.5,-95.675c0,-8.95833 0.71667,-16.48333 1.43333,-22.575c1.075,-8.95833 7.16667,-16.125 15.76667,-18.275c11.10833,-3.225 28.66667,-6.80833 47.3,-6.80833c18.63333,0 36.19167,3.58333 47.65833,6.80833c8.6,2.15 14.69167,9.675 15.76667,18.275c0.35833,6.09167 1.075,13.975 1.075,22.575z"
                                fill="#222">
                            </path>
                            <path 
                                d="M86,25.08333c17.55833,0 34.04167,3.58333 44.79167,6.45c4.3,1.075 7.16667,4.65833 7.88333,9.31667c0.71667,6.80833 1.075,13.975 1.075,21.14167c0,55.9 -41.20833,78.475 -53.75,83.85c-12.54167,-5.73333 -53.75,-28.30833 -53.75,-83.85c0,-7.16667 0.35833,-14.33333 1.075,-21.14167c0.35833,-4.65833 3.58333,-8.24167 7.88333,-9.31667c10.75,-2.86667 27.23333,-6.45 44.79167,-6.45M86,14.33333c-18.63333,0 -36.19167,3.58333 -47.65833,6.80833c-8.24167,2.15 -14.69167,9.675 -15.40833,18.275c-0.71667,6.09167 -1.43333,13.975 -1.43333,22.575c0,73.45833 64.5,95.675 64.5,95.675c0,0 64.5,-22.21667 64.5,-95.675c0,-8.95833 -0.71667,-16.48333 -1.43333,-22.575c-1.075,-8.95833 -7.16667,-16.125 -15.76667,-18.275c-11.10833,-3.225 -28.66667,-6.80833 -47.3,-6.80833z" 
                                fill="#1abc9c">
                            </path>
                            <path 
                                d="M82.41667,100.33333h7.16667v28.66667h-7.16667z" 
                                fill="#fff">
                            </path>
                            <path 
                                d="M86,35.83333c0,0 -21.5,17.91667 -21.5,46.58333c0,18.63333 11.825,30.45833 17.91667,35.83333l3.58333,-10.75l3.58333,10.75c6.09167,-5.375 17.91667,-17.2 17.91667,-35.83333c0,-28.66667 -21.5,-46.58333 -21.5,-46.58333z" 
                                fill="#1abc9c">
                            </path>
                            <path d="M86,35.83333c0,0 -21.5,17.91667 -21.5,46.58333c0,18.63333 11.825,30.45833 17.91667,35.83333l3.58333,-10.75z"
                                fill="#1abc9c">
                            </path>
                        </g>
                    </g>
                </svg>

            
            </Box>
        </div>
    )
}

export default MongoDbLogo;