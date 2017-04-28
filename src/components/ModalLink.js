import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class ModalLink extends React.Component {


  constructor(props){
    super(props);

    //this.close = this.close.bind(this);
    //this.open = this.open.bind(this);
    this.state = {
      text: props.text,
      title: props.title,
      showModal: false,
    };

  }

  close = () => {
    this.setState({
      showModal:false
    });
  }

  open = () => {
    this.setState({
      showModal:true
    });
  }

  render(title, text){
    return (
      <div>
      <Button bsStyle="link" style={{color:'white'}}
        onClick={this.open} >
        <i className="fa fa-info-circle fa-fw"> </i>Info
      </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title> {this.state.title} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.text.split("$").map(i => {
              return <div><br />{i}</div>;
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

/*

*/

export default ModalLink;
