import {BlockTitle} from "framework7-react"
import React from "react"

const CenteredText: React.FC<{text?: string; title?: boolean}> = ({
    text,
    title = false,
    children,
}) => (
    <BlockTitle medium={title} style={{textAlign: "center"}}>
        {text ? text : ""}
        {children}
    </BlockTitle>
)

export default CenteredText
