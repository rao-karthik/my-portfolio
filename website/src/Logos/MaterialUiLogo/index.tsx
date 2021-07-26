import { Box } from "@material-ui/core";

interface IMaterialUiLogoProps {
    boxWidth?: string;
    boxHeight?: string;
    svgWidth?: string;
    svgHeight?: string;
}

const MaterialUiLogo = ({boxWidth='80px', boxHeight='80px', svgWidth='80%', svgHeight='80%'}: IMaterialUiLogoProps) => {
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
                    style={{fill:'#000000', marginTop: '10px'}}>
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
                        <g fill="#222222">
                            <path 
                                d="M3.58333,17.91667l21.5,14.33333v71.66667l-21.5,-14.33333z"></path><path d="M168.41667,71.66667l-21.5,14.33333v46.58333l21.5,-14.33333z">
                            </path>
                            <path 
                                d="M168.41667,21.5l-21.5,14.33333v25.08333l21.5,-14.33333z"></path><path d="M125.41667,17.91667l-21.5,14.33333v71.66667l21.5,-14.33333z">
                            </path>
                            <path 
                                d="M3.58333,43l60.91667,39.41667v-25.08333l-60.91667,-39.41667z"></path><path d="M125.41667,43l-60.91667,39.41667v-25.08333l60.91667,-39.41667z">
                            </path>
                            <path 
                                d="M125.41667,93.16667l-60.91667,39.41667v-25.08333l60.91667,-39.41667z"></path><path d="M168.41667,121.83333l-60.91667,39.41667v-25.08333l60.91667,-39.41667z"></path><path d="M107.5,135.32458l-43,-27.82458v25.08333l43,27.82458z">
                            </path>
                        </g>
                    </g>
                </svg>
            
            </Box>
        </div>
    )
}

export default MaterialUiLogo;