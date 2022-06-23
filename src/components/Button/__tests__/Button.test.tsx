import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Unit test for Button', () => {

    it('Button should render', () => {
        const ButtonTempl = renderer.create(
            <Button 
                data={{
                  displayText:"asdasd"
                }}
                options={{
                    size: 'md',
                    buttonType: 'button'
                }}
            />
        )
        let tree = ButtonTempl.toJSON();
        expect(tree).toMatchSnapshot();
    })
})