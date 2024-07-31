import React from "react"

const ButtonSend = ({clildren, ...props}) => {

    return(
        <button {...props} className="button-send">
            Отправить
        </button>
        
    )
}

export default ButtonSend