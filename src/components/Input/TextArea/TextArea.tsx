import React, { ChangeEvent, KeyboardEvent,useState } from 'react';
import styles from './TextArea.module.scss';
import { ITextAreaProps } from './TextArea.props';

const TextArea = (props: ITextAreaProps) => {

    const [currentText, setCurrentText] = useState<string>('');

    /**
     * @function onChange
     * @description change handler for input
     * @param e {changeEvent}
     */
     const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentText(e.currentTarget.value);
        if(props?.events?.onChange) {
            props.events.onChange(e)
        }
    }

    /**
     * @function onBlur
     * @description onBlur change handler for input
     */
    const onBlur = () => {
        if(props?.events?.onBlur) {
            props.events.onBlur(currentText);
        }
    }

    /**
     * @function onKeyPress
     * @param event {KeyboardEvent<HTMLInputElement>}
     * @description onKeyPress handler for input
     */
    const onKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if(props?.events?.onKeyPress) {
            props?.events?.onKeyPress(currentText, event);
        }
    }

    /**
     * @function onFocus
     * @param event {React.FocusEvent<HTMLInputElement>}
     * @description onFocus handler for input
     */
    const onFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        if(props?.events?.onFocus) {
            props.events.onFocus(currentText, event)
        }
    }

    return (
        <>
            <textarea
                className={styles.textAreaRoot}
                id={props.data?.id}
                disabled={props?.data?.isDisabled ? props?.data?.isDisabled : false}
                value={props.data.value}
                rows={props.data.rows ? props.data.rows : 4}
                cols={props.data.cols ? props.data.cols : 50}
                aria-label={props.options?.accessibility}
                required={props.options?.isRequired}
                readOnly={props?.options?.isReadonly ? props?.options?.isReadonly : false}
                placeholder={props.data.placeholderText ? props.data.placeholderText : 'Please add content here'}
                style={props.options?.textAreaStyle}
                onChange={onChange}
                onKeyPress={onKeyPress}
                onBlur={onBlur}
                onFocus={onFocus}
            >
            </textarea>
        </>
    )
}

export default TextArea;