import React, {useRef} from "react"
import {Button, List, ListInput} from "framework7-react"
import {useDispatch} from "react-redux"

interface IFormTemplate {
    save: (string: string) => void
    onSuccess?: () => void
    onFail?: () => void
    label: string
    placeholder: string
    buttonName: string
}

const FormTemplate: React.FC<IFormTemplate> = ({
    save,
    onSuccess = () => {},
    onFail = () => {},
    label,
    placeholder,
    buttonName,
}) => {
    const dispatch = useDispatch()
    const ref = useRef<any>(null)
    const handleConfirm = () => {
        const string = ref.current.__reactRefs.inputEl.value
        try {
            dispatch(save(string))
            onSuccess()
        } catch {
            onFail()
        }
    }
    return (
        <>
            <List inlineLabels>
                <ListInput
                    ref={ref}
                    type="text"
                    label={label}
                    placeholder={placeholder}
                    autofocus
                    clearButton
                />
            </List>
            <Button onClick={handleConfirm}>{buttonName}</Button>
        </>
    )
}

export default FormTemplate
