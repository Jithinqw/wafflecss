import Enzyme, {shallow} from 'enzyme';
import Button from '../Button';

describe('Unit test for Button', () => {

    it('Button should render', () => {
        const Button = shallow(
            <Button 
                data={{
                  displayTex:"asdasd"
                }}
            />
        )
    })
})