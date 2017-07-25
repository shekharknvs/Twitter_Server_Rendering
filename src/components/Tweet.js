import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Tweet extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    onLike(){

    }
    onDisLike(){

    }
    render(){
        return(
            <div className="page">
                <div className="container-main">
                    <div className="title-container">
                        <div className="circular-container"></div>
                        <div className="title"> XYZ Title </div>
                    </div>
                    <div className="big-card">
                        <div className="big-card-title"> XYZ Title </div>
                        <div className="desciption"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
                    </div>
                    <div className="buttons-container">
                        <div className="button"> Like </div>
                        <div className="button"> Dislike </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        tweets:state.tweets
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        // getUpdatedTweets,
        // addTweets,
        // accessToken,
        // addLike
    },dispatch)
};


export default connect(mapStateToProps,mapDispatchToProps)(Tweet);