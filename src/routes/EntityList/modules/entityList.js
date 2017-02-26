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
