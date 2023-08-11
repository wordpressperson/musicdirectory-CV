import React, {Component} from 'react';
import axios from 'axios'
import {Consumer} from '../../context.js'

class Search extends Component {
state={
  trackTitle:''
}

handleChange = e => {
  this.setState({[e.target.name]: e.target.value})
}

findTrack = (dispatch, e) => {
  e.preventDefault();

  axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=8&page=1&s_track_rating=desc
&apikey=${process.env.REACT_APP_MM_KEY}`)
  .then(res => {
    console.log(res.data)
    //this.setState({track_list: res.data.message.body.track_list})
    dispatch({
      type: 'SEARCH_TRACKS',
      payload: res.data.message.body.track_list
    })
    })

  .catch(err => console.log(err))
}

render() {
  return(
    <Consumer>
      {value => {
        return (
          <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
              <i className="fas fa-music"></i> Search for a Song
            </h1>
            <p className="lead text-center">Get the lyrics for any Song</p>
            <form onSubmit={this.findTrack.bind(this, value.dispatch)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="enter a song..."
                  name="trackTitle"
                  value={this.state.trackTitle}
                  onChange={this.handleChange}
                />
              </div>
              <button
                className="btn btn-primary btn-lg btn-block mb-5"
                type="submit"
                >
                Get lyrics now!</button>
            </form>
          </div>
        )
      }}
    </Consumer>
  )
}
}

export default Search;
