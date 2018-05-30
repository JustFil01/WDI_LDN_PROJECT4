import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import ReviewForm from './ReviewForm';
//------------------------------------------------------------------------------
class NewReview extends React.Component {
  state = {
    errors: {}
  }
  //----------------------------------------------------------------------------
  handleChange =({target: { name,value }}) => {
    const errors = {...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value });
  }
  //----------------------------------------------------------------------------
  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios.post(`/api/games/${id}/reviews`, this.state, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(()=> this.props.history.push(`/games/${id}`))
      .catch(err => {
        this.setState({ errors: err.response.data.errors });
        console.log(err.response);
      });
  }
  //----------------------------------------------------------------------------
  render(){
    return <ReviewForm
      review={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      errors={this.state.errors}

    />;
  }
}
//------------------------------------------------------------------------------
export default NewReview;

//  this isnt needed? would only be needed for the OTHER Review page i guess?
// componentDidMount(){
//   axios.get(`/api/games/${this.props.match.params.id}`)
//     .then( res=> this.setState((res.data) ));
// }
//------------------------------------------------------------------------------
// attempt to set up the game create / submit
// handleSubmit = e => {
//   e.preventDefault();
//   axios.post('/api/games/new/reviews', this.state, {
//     headers: { Authorization: `Bearer ${Auth.getToken()}`}
//   })
//     .then(res => this.props.history.push(res.data.id));
// }
