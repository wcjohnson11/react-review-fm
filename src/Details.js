import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router/lib/history";
import Carousel from "./Carousel";
import Modal from './Modal';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Details extends React.Component {
  state = {
    loading: true,
    showModal: false
  };
  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        const { pet } = data.petfinder;
        let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }

        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed,
          loading: false
        });
      })
      .catch(err => {
        navigate("/");
        this.setState({ error: err });
      });
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  render() {
    if (this.state.loading) {
      return <h1>loading ....</h1>;
    }

    const { animal, breed, name, media, location, description, showModal } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <h1>{name}</h1>
        <h2>
          {" "}
          {animal} - {breed} - {location}
        </h2>
        <button onClick={this.toggleModal}>Adopt {name}</button>
        <p>{description}</p>
        { showModal ? (
          <Modal>
            <h1>Would you like to adopt {name}?</h1>
            <div className="buttons">
              <button onClick={this.toggleModal}>Yes</button>
              <button onClick={this.toggleModal}>No</button>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default Details;
