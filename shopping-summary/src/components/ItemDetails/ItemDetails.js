import React, { Component } from 'react';
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <Button
                    className="item-details-button"
                    bsStyle="link"
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    {this.state.open === false ? `See` : `Hide `} item details
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Media>
                            <img
                                width={100}
                                height={100}
                                alt="thumbnail"
                                src="https://i5.walmartimages.com/asr/11ff67a3-5836-4ba7-94b5-51318bd3430b_
                                    1.89edb4386521d7009a9ba1de1b7ab034.jpeg?
                                    odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                            />
                            <Media.Body>
                                <p>
                                    Essentials by OFM ESS-3085 Racing Style Leather Gaming
                                    Chair, Red
                                </p>
                                <Row className="show-grid">
                                    <Col md={6}>
                                        <strong> {`$${this.props.price}`} </strong>
                                        <br />
                                        <strong className="price-strike"> {`$${this.props.price}`} </strong>
                                    </Col>
                                    <Col md={6}> Qty: 1 </Col>
                                </Row>
                            </Media.Body>
                        </Media>
                    </div>
                </Collapse>
            </div>
        );
    }
}