import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer.
 * @function storeFactory
 * @param {object} initialState - Initial state for store
 * @return {Store} - Redux store
 */
export const storeFactory = (initialState) => {
    createStore(rootReducer, initialState);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 *
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
}
