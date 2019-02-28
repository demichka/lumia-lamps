import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

export default class Search extends React.Component {
  state = {
   query: '',
  }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
   )
 }
}
