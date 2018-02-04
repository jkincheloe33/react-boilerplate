import React, { Component } from 'react';
import ChirpForm from './chirpForm';

class ChirpCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirp: {
                text: 'Hello',
                id: 8,

            }
        }
    }

    componentDidMount() {
        this.getChirp();
    }

    getChirp() {
        fetch(`/api/chirps/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            }).then((obj) => {
                let chirpsArray = obj;
                this.setState({
                    chirp: chirpsArray
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            alert('Chirp successfully deleted! You will automatically be returned to the home page.');
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    updateChirp(text) {
        fetch(`/api/chirps/${this.props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                text
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(() => {
            alert('Chirp successfully updated!')
            // this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    returnHome(event) {
        event.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <div id={this} className="card m-1">
                    <div className="card-body text-left">

                        <p className="card-text">
                            {this.state.chirp.text}
                        </p>
                        <button
                            onClick={(event) => { this.handleSubmit(event) }}
                            type="button"
                            className="SubmitBtn d-inline m-2 w-25 btn btn-outline-info">Delete
                        </button>
                        <button
                            // onClick={(event) => { this.handleEdit(event) }}
                            type="button"
                            className="SubmitBtn d-inline m-2 w-25 btn btn-outline-info"
                            data-toggle="modal" data-target="#exampleModal">Edit
                        </button>
                    </div>
                </div>
                <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Chirp</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ChirpForm postChirp={(text) => { this.updateChirp(text); }} />
                            </div>
                            <button
                                onClick={(event) => { this.returnHome(event) }}
                                type="button"
                                className="SubmitBtn d-inline mt-2 mb-3 ml-auto mr-auto w-75 btn btn-info" data-dismiss="modal">Return To Homepage
                            </button>
                        </div>
                    </div>
                </div>
                

            </React.Fragment>
        );
    }
}

export default ChirpCard;