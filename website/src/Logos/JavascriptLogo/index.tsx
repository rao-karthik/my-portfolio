import { Box, Typography } from '@material-ui/core';

interface IJavascriptLogoProps {
    fontSize?: string;
    margin?: string;
    fontWeight?: any;
    color?: string;
    variant?: any;
    width?: string;
    height?: string
}

const JavascriptLogo = ({fontSize, margin='5px 0 0', fontWeight=600, color='#222222', variant='h4', width='80px', height='80px' }: IJavascriptLogoProps) => {

    return (
        <div>
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                width: width,
                height: height,
                background: '#1abc9c',
            }}>

                <Typography style={{color:color, fontWeight: fontWeight, margin: margin, fontSize: fontSize}} variant={variant}>JS</Typography>

            </Box>
        </div>
    )
}

export default JavascriptLogo;