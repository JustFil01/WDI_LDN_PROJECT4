import React from 'react';
import ReviewForm from './ReviewForm';
import axios from 'axios';
import Auth from '../../lib/Auth';
//------------------------------------------------------------------------------
class NewReview extends React.Component {
  state = {
    errors: {}
  }
  componentDidMount(){
    axios.get(`/api/games/${this.props.match.params.id}`)
      .then( res=> this.setState((res.data) ));
  }
  // handleChange =({target: { name,value }}) => {
  //   const review = {...this.state.review, [name]: value};
  //   this.setState({ review },() => {
  //   });
  // }
  handleChange =({target: { name,value }}) => {
    const errors = {...this.state.errors, [name]: 'value'};
    this.setState({ errors, [name]: value });
  }
  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios.put(`/api/games/${id}/reviews`, this.state.review, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(()=> this.props.history.push(`/games/${id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }
  //----------------------------------------------------------------------------
  // attempt to set up the game create / submit
  // handleSubmit = e => {
  //   e.preventDefault();
  //   axios.post('/api/games/new/reviews', this.state, {
  //     headers: { Authorization: `Bearer ${Auth.getToken()}`}
  //   })
  //     .then(res => this.props.history.push(res.data.id));
  // }
  render(){
    return <ReviewForm
      review={this.state}
      errors={this.state.errors}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}

    />;
  }
}
//------------------------------------------------------------------------------
export default NewReview;
