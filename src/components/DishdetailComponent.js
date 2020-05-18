import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    componentDidMount()
    {
        console.log("Component is mounted")
    }
    componentDidUpdate(){
        console.log("Component got updated")
    }
 
    renderComments(comments) {
        if(comments==null)
        return (
            <div></div>
        )

       
        return (

            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className = "list-unstyled">
                    { comments.map((comm)=>{

                        return(
                        <li>
                            <ul className = "list-unstyled">
                                <li>{comm.comment}</li><br/>
                                <li> -- {comm.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</li>
                            </ul>
                            <br/>
                        </li>
                       
                        )
                    })}
                </ul>
            </div>
           
        )
       
    }

    renderDish(dish)
    {
        if (this.props.dish == null)
        return(
                <div></div>
        );

        return ( <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )

    }


    render()
    {
        console.log("Dish Detail render invoked");
        if (this.props.dish == null)
            return(
                <div></div>
            );

        const dish = this.renderDish(this.props.dish);

        const comment = this.renderComments(this.props.dish.comments);

            return(
                <div className="container">
                <div className="row">
                    {dish}
                    {comment}
                </div>
                </div>

            );
    }
}

export default DishDetail;

