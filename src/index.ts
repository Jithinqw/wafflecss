/**
 * Expose APIs for package.
 */
import { HeadingType } from './models/Heading';
import { ListData } from './models/basicModal';
import Utilities from './utils/common';
import { 
    IStyleOptions, ICheckboxData,
    ImageData, ISelectOption
} from './models/defaultStyle';

// Styled Components
export { default as Button } from './components/Basic/Button/Button';
export { default as Heading } from './components/Basic/Heading/Heading';
export { default as LegalText } from './components/Basic/Heading/LegalText/LegalText';
export { default as StackedImage } from './components/Basic/Image/StackedImage/StackedImage';
export { default as Avatar } from './components/Basic/Image/Avatar/Avatar';
export { default as Counter } from './components/Basic/Label/Counter/Counter';
export { default as Badge } from './components/Badge/Badge';
export { default as Progress } from './components/Progress/Progress';
export { default as Center } from './components/Layout/Center/Center';
export { default as SnackBar } from './components/SnackBar/SnackBar';
export { default as Backdrop } from './components/Backdrop/Backdrop';
export { default as Link } from './components/Basic/Link/Link';
export { default as Skeleton } from  './components/Skeleton/Skeleton';
export { default as TextInput } from './components/Basic/Input/TextInput/TextInput';
export { default as TextArea } from './components/Basic/Input/TextArea/TextArea';
export { default as Switch } from './components/Basic/Input/Switch/Switch';
export { default as Hidden } from './components/Layout/Hide/Hidden';
export { default as Container } from './components/Layout/Container/Container';
export { default as Status } from './components/Status/Status';
export { default as Label } from './components/Basic/Label/Label';
export { default as PriceLabel } from './components/Basic/Label/PriceLabel/PriceLabel';
export { default as Modal} from './components/Modal/Modal';
export { default as Quote } from './components/Quote/Quote';
export { default as Toast } from './components/Toast/Toast';
export { default as Toggle } from './components/Toggle/Toggle';
export { default as ColorSelector } from './components/Selector/ColorSelector/ColorSelector';
export { default as PromotionRibbon } from './components/Promotions/PromotionRibbon/PromotionRibbon';
export { default as Announcement } from './components/Promotions/Announcement/Announcement';
export { default as TopBanner } from './components/Promotions/TopBanner/TopBanner';
export { default as Drawer } from './components/Drawer/Drawer';
export { default as Loader } from './components/Loader/Loader';
export { default as StackedProgress } from './components/Progress/StackedProgress/StackedProgress';
export { default as Divider } from './components/Divider/Divider';
export { default as Image } from './components/Basic/Image/Image';
export { default as TimerClock } from './components/Clock/Clock';
export { default as Stack } from './components/Layout/Stack/Stack';

// Unstyled components
export { default as UnstyledButton } from './components/UnStyled/Button';
export { default as UnstyledHeading } from './components/UnStyled/Heading';
export { default as UnStyledLink } from './components/UnStyled/Link';
export { default as UnstyledTextArea } from './components/UnStyled/TextArea';
export { default as UnstyledTextInput } from './components/UnStyled/TextInput';

// Hooks
export { default as useColor } from './hooks/useColor';
export { default as useHash } from './hooks/useHash';
export { default as useDateDiff } from './hooks/useDateDiff';
export { default as useRandomNumber } from './hooks/useRandomNumber';

// Utilities
// Interface / Modals
export {
    ISelectOption, Utilities,
    HeadingType, ListData,
    IStyleOptions, ImageData,
    ICheckboxData,
};
