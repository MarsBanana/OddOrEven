import {BlockTitle} from "framework7-react"
import React, {CSSProperties} from "react"

const customStyle = {textAlign: "center"}

const CenteredText: React.FC<{text?: string; title?: boolean}> = ({
    text,
    title = false,
    children,
}) => (
    <BlockTitle medium={title} style={customStyle as CSSProperties}>
        {text ? text : ""}
        {children}
    </BlockTitle>
)

export default CenteredText
