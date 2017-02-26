import { connect } from 'react-redux'

import EntityList from '../components/EntityList'


const mapDispatchToProps = {
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
