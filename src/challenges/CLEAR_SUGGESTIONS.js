import C from '../constants';
import { suggestions } from '../store/reducers';
import expect from 'expect';

export const clearSuggestions = () => {
    const action = {
        type: C.CLEAR_SUGGESTIONS
    }
    
    const state = ["Heavenly Ski Resort", "Heavens Sonohara"];
    
    const expectedState = []
    
    const actualState = suggestions(state, action)
    
    expect(actualState).toEqual(expectedState)
    
    console.log(`
        Challenge C: CLEAR SUGGESTIONS PASSED!!
    `)
}