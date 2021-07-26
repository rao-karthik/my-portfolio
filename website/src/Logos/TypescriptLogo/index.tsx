import { Box, Typography } from '@material-ui/core';

interface ITypescriptLogoProps {
    fontSize?: string;
    margin?: string;
    fontWeight?: any;
    color?: string;
    variant?: any;
    width?: string;
    height?: string
}

const TypescriptLogo = ({fontSize, margin='5px 0 0', fontWeight=600, color='#222222', variant='h4', width='80px', height='80px' }: ITypescriptLogoProps) => {

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

                <Typography style={{color:color, fontWeight: fontWeight, margin: margin, fontSize: fontSize}} variant={variant}>TS</Typography>

            </Box>
        </div>
    )
}

export default TypescriptLogo;