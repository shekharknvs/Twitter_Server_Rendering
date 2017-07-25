import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import { getUpdatedTweets, addTweets , accessToken, addLike} from '../actions';
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            pageNo:0,
            tweets:[]
        };
        this.onNext = this.onNext.bind(this);
        this.onPrevious = this.onPrevious.bind(this);
        this.shouldDisplay = this.shouldDisplay.bind(this);
    }
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps){
        this.setState({
            tweets:nextProps.tweets
        })
    }
    onNext(){
        if(this.state.pageNo < 5)
        this.setState({
            pageNo:++this.state.pageNo
        })
    }
    onPrevious(){
        if(this.state.pageNo > 0)
        this.setState({
            pageNo:--this.state.pageNo
        })

    }
    shouldDisplay(index){
        return{
            textDecoration: 'none',
            display:(index/5 === this.state.pageNo)?'inline-block':'none'
        }
    }
    render(){
        const card = this.state.tweets.map((T,index)=>(
            <Link to={`/tweet/${index}`} key={index} style={this.shouldDisplay(index)}>
                <div className="card" key={index}>
                </div>
            </Link>
        ));
        return(
            <div className="page">
                <div className="container-main">
                    <div className="title-container">
                        <div className="circular-container"></div>
                        <div className="title"> XYZ Title </div>
                    </div>
                    {card}
                    <div className="buttons-container">
                        <div className="button" onClick={e=>this.onPrevious()}> Next </div>
                        <div className="button" onClick={e=>this.onNext()}> Previous </div>
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
        getUpdatedTweets,
        addTweets,
        accessToken,
        addLike
    },dispatch)
};


export default connect(mapStateToProps,mapDispatchToProps)(Home);