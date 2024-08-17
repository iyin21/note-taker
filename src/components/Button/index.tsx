//import { buttonInterface } from "../../../type/button/button-interface"

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children:React.ReactNode
}
const Button = ({children, ...rest}:ButtonInterface) => {
    return (
        <button
            {...rest}
            className={`btn  rounded py-3 px-3 flex items-center justify-center bg-[blue] text-white-100 text-[14px] sm:text-[16px]`}   
            
        
        >
            
           
            {children}
            
        </button>
    )
}

export default Button
