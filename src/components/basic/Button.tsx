import { ButtonProps } from "../../types/types";

const Button: React.FC<ButtonProps> = ({onClick, styles, children}) => {
    return (
        <button onClick={onClick} className={styles}>
            {children}
        </button>
    )
}

export default Button;
