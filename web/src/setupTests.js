// this is basically: afterEach(cleanup)
// automatically unmount and cleanup DOM after the test is finished.
import '@testing-library/react/cleanup-after-each'
// add some helpful assertions
import 'jest-dom/extend-expect'

// enzyme setup
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });
