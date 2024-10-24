/* eslint-disable react/prop-types */

const Label = (props) => {
    const { htmlFor, children } = props;

    return (
        <label htmlFor={htmlFor} className="block text-sm mb-2">
            {children}
        </label>
    );
} 

export default Label;

// const Logo = () => {
//     return (
        
//     );
// } 

// export default Logo;