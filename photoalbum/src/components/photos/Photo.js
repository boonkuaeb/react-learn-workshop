import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
class Photo extends Component {
    render() {
        const data = this.props.data;
        return (

                <div className="col-4">
                    <Card>
                        <CardImg top width="100%" src={data.thumbnailUrl} alt={data.title} />
                        <CardBody>
                            <CardTitle>{data.title}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
        );
    }
}

export default Photo;
