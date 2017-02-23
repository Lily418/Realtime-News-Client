import React from 'react'
import { subscribe, unsubscribe } from 'pusher-redux';
import { ENTITY_LIST_UPDATED } from '../modules/entityList'


export class EntityList extends React.Component {
  constructor(props, context) {
  super(props, context);
  this.subscribe = this.subscribe.bind(this);
  this.unsubscribe = this.unsubscribe.bind(this);
  }

  componentWillMount() {
    this.subscribe();
  }
  
  componentWillUnmount() {
    this.unsubscribe();
  }

  subscribe() {
  subscribe('articles-channel', 'entity-list-updated', ENTITY_LIST_UPDATED);
  }

  unsubscribe() {
    unsubscribe('articles-channel', 'entity-list-updated', ENTITY_LIST_UPDATED);
  }

  render() {
    return (<div>
            <h1>The news is currently talking about</h1>
              <ul>
                {this.props.entities.map((entity)=> { return (<li> {entity} </li>)})}
              </ul>
            </div>)
  }

}

export default EntityList
