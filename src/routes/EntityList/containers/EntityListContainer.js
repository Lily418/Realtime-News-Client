import { connect } from 'react-redux'

import EntityList from '../components/EntityList'


const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  entities : state.entityList.entities
})


export default connect(mapStateToProps, mapDispatchToProps)(EntityList)
