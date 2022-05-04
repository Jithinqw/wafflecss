import React from 'react';
import { FontSizeClassMap, 
    FontStyleClassMap, 
    ITextProps 
} from './Text.props';
import styles from './Text.module.scss';
import Utilities from '../../common/utils';
import { FontSize, TextStyle } from '../../models/Text';

/**
 * @function Text
 * @description React component for rendering a text node.
 * @param {props} ITextParams
 * @returns {React.Node}
 **/ 
function Text (props: ITextProps) {

    /**
     * @function combineStyles
     * @description Combines styles
     * @returns {string}
     */
    const combineStyles = (): string => {
       const combinedClass = [
        styles.rootText,
        getFontSizeFromProps(props.options?.fontSize ? props.options.fontSize : FontSize.REGULAR),
        getTextStyleFromProps(props.options?.fontStyle ? props.options.fontStyle : TextStyle.REGULAR),
       ].join(' ');

       return combinedClass;
    }
    
    /**
     * @function getFontSizeFromProps
     * @param option {FontSize}
     * @returns string
     */
    const getFontSizeFromProps = (option: FontSize) => {
        if (!Utilities.isEmpty(option)) {
            return FontSizeClassMap.get(option);
        }
    }

    /**
     * @function getTextStyleFromProps
     * @param option TextStyle
     * @returns {string}
     */
    const getTextStyleFromProps = (option: TextStyle) => {
        if(!Utilities.isEmpty(option)) {
            return FontStyleClassMap.get(option);
        }
    }

    return (
        <span 
            className={combineStyles()}
            ref={props.options?.ref}
            onClick={props.events?.onClick}
            style={props.options?.styles}
        >
            {props.data?.textData}
        </span>
    )
}

export default Text;