import 'isomorphic-fetch'
// ------------------------------------
// Constants
// ------------------------------------
export const ENTITY_LIST_UPDATED = 'ENTITY_LIST_UPDATED'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  'entities' : [],
  'newEntities' : []
}

export function getEntities() {
  return (dispatch) => {
    var request = new Request('http://127.0.0.1:9001/current-entities');

    return fetch(request).then((response) => {
        return response.json()
      }).then((json) => {
        dispatch({'type' : ENTITY_LIST_UPDATED, 'data' : json})
      })
  }

}

function calculateNewEntities(oldEntityList, newEntityList) {
  return newEntityList.map((newEntity) => {
    return !oldEntityList.includes(newEntity)
  })
}


export default function entityListReducer (state = initialState, action) {
  switch(action.type) {
    case ENTITY_LIST_UPDATED: return Object.assign({}, state, {
      'entities' : action.data.entities,
      'newEntities' : calculateNewEntities(state.entities, action.data.entities)
    })
    default: return state
  }
}
