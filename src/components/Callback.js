
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import { accessToken } from '../actions/index';
class CallHandler extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props.redirect);
        if(this.props.location.query) {
            this.props.accessToken(this.props.location.query);
            this.props.router.transitionTo('/');
        }
    }
    render() {
        return (
            <div>Callback</div>
        )
    }
};


const mapStateToProps = (state) => {
    console.log(state);
    return{
        redirects:state
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        accessToken
    },dispatch)
};


export default connect(mapStateToProps,mapDispatchToProps)(CallHandler);