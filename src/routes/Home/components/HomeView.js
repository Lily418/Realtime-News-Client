import React from 'react'
import './HomeView.scss'
import { subscribe, unsubscribe } from 'pusher-redux';


export class HomeView extends React.Component {
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
  subscribe('articles-channel', 'entity-list-updated', 'ENTITY_LIST_UPDATED');
  }

  unsubscribe() {
    unsubscribe('articles-channel', 'entity-list-updated', 'ENTITY_LIST_UPDATED');
  }

  render() {
    return (<h1>Welcome</h1>)
  }

}

export default HomeView
