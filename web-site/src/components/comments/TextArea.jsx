import React from "react"

const TextArea = (props) => {
    return(
        <div>
            <textarea {...props} style={{padding: 10, borderRadius: 10, height: 100, fontSize: 15, width: 250}}></textarea>
        </div>
        
    )
}

export default TextArea