import React from 'react'
import { subscribe, unsubscribe } from 'pusher-redux'
import { ENTITY_LIST_UPDATED } from '../modules/entityList'
import './EntityList.scss'

export class EntityList extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.subscribe = this.subscribe.bind(this)
    this.unsubscribe = this.unsubscribe.bind(this)
  }

  componentWillMount () {
    this.props.getEntities()
    this.subscribe()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  subscribe () {
    subscribe('articles-channel', 'entity-list-updated', ENTITY_LIST_UPDATED)
  }

  unsubscribe () {
    unsubscribe('articles-channel', 'entity-list-updated', ENTITY_LIST_UPDATED)
  }

  render () {
    return (<div className='entity-list'>
      <ul>
        {this.props.entities.map((entity, index) => {
          return (<li key={`entity-list-item-${index}`} className={entity.isNewEntity ? 'new-entity' : ''}>
            {entity.entityName}
          </li>)
        })}
      </ul>
    </div>)
  }

}

export default EntityList
