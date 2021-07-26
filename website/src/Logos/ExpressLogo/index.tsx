import { Box, Typography } from '@material-ui/core';

interface IExpressLogoProps {
    fontSize?: string;
    jsFontSize?: string;
    margin?: string;
    fontWeight?: any;
    color?: string;
    variant?: any;
    width?: string;
    height?: string
}

const ExpressLogo = ({fontSize='12px', jsFontSize='16px', margin='5px 0 0', fontWeight=600, color='#222222', variant='h6', width='80px', height='80px' }: IExpressLogoProps) => {

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

                <Typography style={{color:color, fontWeight: fontWeight, margin: margin, fontSize: fontSize}} variant={variant}>
                    express
                    <span style={{fontSize: jsFontSize}}> JS</span>
                </Typography>

            </Box>
        </div>
    )
}

export default ExpressLogo;