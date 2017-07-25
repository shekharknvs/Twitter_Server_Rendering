import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { accessToken} from '../actions/index';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={
            url:''
        }
    }
    componentDidMount(){
        fetch('oauth/requesttoken')
            .then(res=>{
                if(res.status=== 200){
                    fetch('oauth/authenticate',{
                        headers:new Headers({
                            'oauth_token':res.body["oauth_token"]
                        })
                    }).then(res=>{
                            if(res.status===200){
                            this.setState({
                                url:res.body
                            })}
                            else
                                alert("Something went wrong");
                        })
                }else
                    alert("Something went wrong");
            })
            .catch(err=>alert("Something went wrong"));
    }
    render(){
        return(
            <form action={this.state.url} method="get">
            <div className="page">
                <button type="submit" className="login-button"> Login </button>
            </div>
            </form>
        );
    }
}


const mapStateToProps = (state) => {
    return{
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        accessToken
    },dispatch)
};


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);