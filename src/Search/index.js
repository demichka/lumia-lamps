import React from 'react';
import {
  Input,
  Form
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
     <Form>
       <Input
       className="flex-sm-fill text-sm-center nav-link"
       type="text"
       id="search"
         placeholder="Type to search"
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </Form>
   )
 }
}
