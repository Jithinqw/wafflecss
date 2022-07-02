export const commonConstant = {
    // display
    flexDisplay: 'flex',
    flexColDirection: 'column',
    flexRowDirection: 'row',
    alignItemCenter: 'center',
    defaultNone: '',
    //Font 
    fontFamily:'Söhne, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: '400',
    // Cursor
    cursorPointer: 'pointer',
    cursorNotAllowed: 'not-allowed',
    cursorNone: 'none',
    cursorWait: 'wait',
    // Text decoration
    defaultTextDecoration: 'none',
    textTransform: 'none',
    underLineTextDecoration: 'underline',
    defaultTextAlign: 'center',
    appearance: 'none',
    defaultUserSelect: 'none',
    defaultVerticalAlign: 'middle',
    gridTemplateArea: 'leadingIcon text trailingIcon',
}

export const legalTextConstant = {
    fontSize: '12px',
    lineHeight: '1.33337',
    letterSpacing: '-.01em',
    fontWeight: '400',
    textStyleScale: {
        'sm': '12px',
        'md': '14px',
        'lg': '18px',
    }
}

export const colorPalette = {
    // Default colors
    defaultBlackColor: 'rgb(42, 42, 51)',
    defaultWhite: 'rgb(246, 248, 250)',
    defaultDefaultLinkColor: 'rgb(25, 118, 210)',
    defaultGreyColor: 'rgb(84, 87, 92)',
    // Button Text Color
    defaultButtonColor: 'rgb(36, 41, 47)',
    defaultDangerButtonColor: 'rgb(207, 34, 46)',
    defaultOutlineButtonColor: 'rgb(9, 105, 218)',
    defaultPrimaryButtonColor: 'rgb(45, 164, 78)',
    // Button Background color
    defaultButtonBg: 'rgb(246, 248, 250)',
    dangerButtonBg: 'rgb(207, 34, 46)',
    outlineButtonBg: 'rgb(9, 105, 218)',
    primaryButtonBg: 'rgb(45, 164, 78)',
    // Button Hover color
    defaultHoverColor: 'rgb(36, 41, 47)',
    dangerHoverColor: 'rgb(246, 248, 250)',
    outlineHoverColor: 'rgb(246, 248, 250)',
    primaryHoverColor: 'rgb(246, 248, 250)',
    // Button Border color
    defaultBorderColor: ' 1px solid rgba(27, 31, 36, 0.15)',
    // Alert colors
    infoColor: 'rgb(190, 227, 248)',
    warningColor: 'rgb(254, 235, 200)',
    successColor: 'rgb(198, 246, 213)',
    errorColor: 'rgb(254, 215, 215)',
    // Container color
    defaultColor: 'rgb(246, 248, 250)',
    // Modal color
    bgColor: 'rgb(255, 255, 255)',
    colorDefault: 'rgb(9, 30, 66)'
}

export const ImageConstant = {

}

export const headingConstant = {
    fontWeight: '300',
    fontSize: '16px',
    fontStyle: 'normal',
    defaultLetterSpacing: '-.003em',
    headingWeightScale: {
        'extrasmall': 90,
        'small': 100,
        'normal': 300,
        'bold': 500,
        'extrabold': 700,
    },
    headingSizeScale: {
        'extrasmall': '8px',
        'small': '12px',
        'normal': '16px',
        'large': '18px',
        'extralarge': '24px',
    }
}

export const buttonConstant = {
    borderRadius: '6px',
    padding: '5px 16px',
    opacityFull: '1',
    opacityPartial: '0.3',
    fontWeight: '300',
    hoverColorState: 'none',
    hoverBackgroundColor: 'none',
    transition: '80ms cubic-bezier(0.33, 1, 0.68, 1)',
    transitionProperty: 'color,background-color,box-shadow,border-color',
    buttonWidth: {
        'sm': '5px 16px',
        'md': '8px 20px',
        'xs': '12px 24px',
        'lg': '18px 32px'
    },
    fontSize: {
        'sm': '8px',
        'md': '12px',
        'xs': '18px',
        'lg': '24px'
    },
    buttonShadow: {
        'default': 'rgb(27 31 36 / 4%) 0px 1px 0px, rgb(255 255 255 / 25%) 0px 1px 0px inset',
        'danger': 'rgb(27 31 36 / 4%) 0px 1px 0px',
    }
}

export const containerConstants = {
    smMaxWidth: '40ch',
    mdMaxWidth: '60ch',
    lgMaxWidth: '80ch',
    // Margins
    paddingInline: '1rem',
    marginInline: '1rem'
}

export const backDropConstants = {
    bgColor: 'rgb(0 0 0 / 31%)',
    colorDefault: 'rgb(255, 255, 255)',
    zIndex: '1400',
    insetDefault: '0px',
    defaultTransition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
}

export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
}

export const deviceSizes = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
};

export const skeletonConstants = {
    // Width
    widthSm: '50px',
    widthXs: '100px',
    widthLg: '200px',
    // Height
    heightSm: '0.8em',
    heightXs: '0.6em',
    heightLg: '1.2em',
    // Col Width
    widthColSm: '150px',
    widthColXs: '200px',
    widthColLg: '300px',
    defaultSettings: {
        verticalAlign: 'middle',
        minHeight: '1rem',
        displayDefault: 'inline-block',
        opacity: '0.5',
        borderRadius: '50%',
    }
}

export const modalConstants = {
    ZIndex: '510',
    width: '400px',
    boxShadow: 'rgb(9 30 66 / 8%) 0px 0px 0px 1px, rgb(9 30 66 / 8%) 0px 2px 1px, rgb(9 30 66 / 31%) 0px 0px 20px -6px',
    transition: 'transform 500ms cubic-bezier(0.23, 1, 0.32, 1) 0s'
}