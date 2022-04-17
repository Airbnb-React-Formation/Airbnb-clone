import {createTheme} from "@mui/material/styles";

const MuiTheme = createTheme({
    typography: {
        fontFamily: "Cabin"
    },
    components: {
        MuiOutlinedInput:{
            styleOverrides:{
                root:{
                    borderRadius:"8px",
                    "&:hover fieldset":{
                        borderColor:"red"

                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline":{
                        borderColor:"black"
                    }
                }
            }
        },
        MuiInputLabel:{
            styleOverrides:{
                root:{
                    "&.Mui-focused": {
                        color: "black",
                        borderColor : "black"
                    }
                }
            }
        },
        MuiButtonBase:{
            defaultProps:{
                disableRipple:true
            }
        },
        MuiButton: {
            styleOverrides:{
                root:{
                    borderRadius:"8px",
                    textTransform:"none",
                    transition:"all .2s ease-in-out",
                    "&:active":{
                        transform:"scale(0.95)",
                        transition:"all .2s ease-in-out"
                    },
                    "& .MuiButton-startIcon":{
                        position:"absolute",
                        left:"20px"
                    }
                }
            },
            variants: [
                {
                    props: {variant: 'contained-red'},
                    style: {
                        minHeight:"42px",
                        fontWeight: "bold",
                        fontSize: "16px",
                        color: "white",
                        background: "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%) !important;",
                        // backgroundColor: "blue",
                        '&:hover':{
                            // backgroundColor:"blue",
                            backgroundColor:"unset",
                            background: "linear-gradient(to left, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%) !important;",
                        },
                        '&:active':{
                            background: "linear-gradient(to left, rgb(255, 56, 92) 0%, rgb(255, 56, 92) 50%, rgb(255, 56, 92) 100%) !important;",
                            // background: "rgb(255, 56, 92) !important",
                        }
                    }
                },
                {
                    props: {variant: 'bordered'},
                    style: {
                        fontSize: "16px",
                        color: "black",
                        backgroundColor: "white",
                        border:"1px solid"
                    }
                }
            ],
        }
    }
});

export default MuiTheme