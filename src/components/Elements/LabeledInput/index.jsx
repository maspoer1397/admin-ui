import Input from "./input";
import Label from "./Label";

/* eslint-disable react/prop-types */
const LabeledInput = (props) => {
    const { label, name, type, placeholder } = props;
    
    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </>
    );
} 

export default LabeledInput;