import { connect } from 'react-redux'

import EntityList from '../components/EntityList'

import { getEntities } from '../modules/entityList'

const mapDispatchToProps = {
  'getEntities' : () => getEntities()
}

const mapStateToProps = (state) => ({
  entities : state.entityList.entities.map((entity, index) => {
    return {
      'entityName' : entity,
      'isNewEntity' : state.entityList.newEntities[index]
    }
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(EntityList)
