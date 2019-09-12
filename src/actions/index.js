export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = feature => {
    console.log(feature);
    return { type: ADD_FEATURE, payload: feature.name }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = index => {
    console.log(removeFeature);
    return { type: REMOVE_FEATURE, payload: index }
}

export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const updateTotal = total => {
    console.log(total);
    return { type: UPDATE_TOTAL, payload: total  }
}