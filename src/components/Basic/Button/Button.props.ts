export interface IButtonProps {
    data: IButtonData;
    events?: IButtonEvents;
    options?: IButtonOptions
}

interface IButtonData {
    /**
     * @type {string}
     * Button display text
     */
    displayText: string;
    /**
     * @type {string}
     * Id for your button
     */
    id?: string;
    /**
     * @type {boolean}
     * Toggle button disable
     */
    isDisabled?: boolean;
    /**
     * @type {string}
     * Customize border-radius 
     */
    radius?: string;
    /**
     * @type {string}
     * Customize font weight
     */
    fontWeight?: string;
    /**
     * @type {string}
     * Customise button width
     */
    width?: string;
}

interface IButtonEvents {
    /**
     * @function 
     * What should happen if user click 
     * on button
     */
    onClick(): void;
    /**
     * @function
     * What should happen if user
     * focus on button, eg: trigger
     * an screen reader functions etc.
     */
    onFocus(): void;
}

interface IButtonOptions {
    /**
     * @type {'xs' | 'sm' | 'md' | 'lg'}
     * Manage Button size
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /**
     * @type {'button' | 'submit' | 'reset'}
     * What type of button
     */
    buttonType?: 'button' | 'submit' | 'reset';
    /**
     * @type {'default' | 'danger' | 'outline' | 'primary'}
     * What is the behaviour of button
     */
    variants?: 'default' | 'danger' | 'outline' | 'primary';
}