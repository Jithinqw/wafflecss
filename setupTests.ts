import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
Enzyme.configure({ adapter: new Adapter() });
