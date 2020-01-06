import C from '../constants';
import expect from 'expect';
import { fetching } from '../store/reducers';

export const fetchResortNames = () => {
    console.log("Fetch Resort Names Running!");
    const action = {
        type: C.FETCH_RESORT_NAMES
    }
    
    const state = false;
    const expectedState = true
    
    const actualState = fetching(state, action)
    
    expect(actualState).toEqual(expectedState);
    
    console.log(`
        Challenge A: Fetch RESORT NAMES PASSED!;
    `)
}

