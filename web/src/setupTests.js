// this is basically: afterEach(cleanup)
import '@testing-library/react/cleanup-after-each'
// add some helpful assertions
import 'jest-dom/extend-expect'

// enzyme setup
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });
