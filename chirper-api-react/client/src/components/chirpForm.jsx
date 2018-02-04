import React, { Component } from 'react';

class ChirpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirp: ''
        };
    }

    handleInputChange(chirp) {
        this.setState({ chirp });
    };

    render() {
        return (
            <form className="card p-3 m-1 bg-alert-primary d-block">
                <label
                    htmlFor="chirp-input"
                    className="d-block m-2">Create a Chirp:
                </label>
                <input
                    value={this.state.chirp}
                    onChange={(event) => { this.handleInputChange(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="What's happening?"
                />
                <button
                    onClick={() => { this.props.postChirp(this.state.chirp) }}
                    type="button"
                    className="SubmitBtn d-block m-2 w-100 btn btn-outline-info">Post!
                </button>
            </form>
        );
    };
}

export default ChirpForm;
