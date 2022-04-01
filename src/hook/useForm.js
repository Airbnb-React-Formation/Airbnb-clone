import {useState} from "react";

const UseForm = (validateFields,initialFormValues) => {

    const [values, setValues] = useState(initialFormValues ?? {})
    const [errors, setErrors] = useState({})
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        // console.log(errors)
        // validate(name, value, errors, setErrors)
        const {[name]:x,...rest} = errors
        setErrors(rest)
        setValues({
            ...values,
            [name]: value
        })
    }

    const validateForm = (fields) => {
        Object.entries(fields).forEach((field)=>{
            const [name,val] = field
            validateFields(name,val,errors,setErrors)
        })
    }
    return {
        values,
        errors,
        handleChange,
        validateForm
    };
}

export default UseForm;