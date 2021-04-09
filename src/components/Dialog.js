import { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class Dialog extends Component {
    constructor(props) {
        super(props);

        switch (props.baslik) {
            case "Hata":
                this.state = {
                    color: "text-danger",
                    variant: "danger",
                    show: true,
                }

                break;
            case "Uyarı":
                this.state = {
                    color: "text-warning",
                    variant: "warning",
                    show: true,
                }

                break;
            case "Bilgi":
                this.state = {
                    color: "text-info",
                    variant: "info",
                    show: true,
                }

                break;
            default:
                this.state = {
                    color: "text-dark",
                    variant: "primary",
                    show: true,
                }

                break;
        }

        
    }

    render() {
            if (this.props.mesaj===null) {
                return '';
            }else{
                return (
                    <Modal show={this.state.show} onHide={() => this.state.show}>
                    <Modal.Header closeButton>
                      <Modal.Title>{this.props.baslik??"Vvino"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={this.state.color}>{this.props.mesaj}</Modal.Body>
                    <Modal.Footer>
                      <Button variant={this.state.variant} onClick={() => this.setState({ show: false })}>
                        Kapat
                      </Button>
                    </Modal.Footer>
                  </Modal>
                    );
            }
            
    }
}