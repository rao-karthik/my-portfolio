import { Box } from "@material-ui/core";

interface IBootstrapLogoProps {
    boxWidth?: string;
    boxHeight?: string;
    svgWidth?: string;
    svgHeight?: string;
}

const BootstrapLogo = ({boxWidth='80px', boxHeight='80px', svgWidth='100%', svgHeight='100%'}: IBootstrapLogoProps) => {
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
                    style={{fill:'#000000'}}>
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
                        <path d="M0,172v-172h172v172z" 
                            fill="none">
                        </path>
                        <g>
                            <path 
                                d="M150.5,132.58333c0,9.89717 -8.0195,17.91667 -17.91667,17.91667h-93.16667c-9.89358,0 -17.91667,-8.0195 -17.91667,-17.91667v-93.16667c0,-9.89717 8.02308,-17.91667 17.91667,-17.91667h93.16667c9.89717,0 17.91667,8.0195 17.91667,17.91667z" fill="#1abc9c">
                            </path>
                            <path 
                                d="M118.3575,91.73333c-2.32917,-3.225 -5.6975,-5.44667 -10.03333,-6.62917c0,0 3.655,-1.32583 6.95167,-6.27083c1.97083,-3.15333 2.97417,-6.95167 2.97417,-11.395c0,-7.70417 -2.795,-13.61667 -8.385,-17.66583c-5.59,-4.04917 -11.89667,-6.7725 -22.61083,-6.7725h-33.50417v86h37.37417c10.14083,-0.07167 17.77333,-2.2575 22.96917,-6.45c5.16,-4.26417 7.74,-10.57083 7.74,-18.99167c0,-4.65833 -1.14667,-8.6 -3.47583,-11.825zM75.25,57.33333c0,0 14.9425,0 15.22917,0c5.44667,0 9.85417,4.4075 9.85417,9.85417c0,5.44667 -4.4075,9.85417 -9.85417,9.85417c-0.28667,0 -15.22917,0 -15.22917,0zM93.16667,114.66667h-17.91667v-21.5h17.91667c5.94833,0 10.75,4.80167 10.75,10.75c0,5.94833 -4.80167,10.75 -10.75,10.75z" 
                                fill="#222222">
                            </path>
                        </g>
                    </g>
                </svg>
            
            </Box>
        </div>
    )
}

export default BootstrapLogo;