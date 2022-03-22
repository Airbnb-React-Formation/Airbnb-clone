import {InputAdornment, TextField} from "@mui/material";
import {useState} from "react";

const PasswordField = ({id,name,label,fullWidth,placeholder,value,onChange,error,helperText,autocomplete}) => {
    const [showPassword,setShowPassword] = useState(false)
    return (
        <TextField type={showPassword ? "text":"password"}
                   id={id}
                   name={name}
                   label={label}
                   fullWidth={fullWidth}
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}
                   error={error}
                   helperText={helperText}
                   autoComplete={autocomplete}
                   InputProps={{
                       endAdornment:(
                           <InputAdornment
                               style={{cursor:"pointer"}}
                               id="show-password"
                               position="end"
                               onClick={()=>setShowPassword(!showPassword)}
                           >
                               {showPassword ? "Masquer":"Afficher"}
                           </InputAdornment>)
                   }}/>
    )
}

export default PasswordField