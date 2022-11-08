import React, {Component} from 'react';

export default class Login extends Component{
    handleSubmbit = e => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        }
        console.log(data);
    };
  render(){
    return (
        <div className = "sign-in-container">
            <form onSubmit={this.handleSubmbit}>
                <h3> SignIn </h3> 
                <div className='form-container'>
                <label> Email: </label>
                <input type="Email" className = "form-control" placeholder = "Email" 
                    onChange={e => this.email = e.target.value}/>
                </div>
                <div className='form-group'>
                <label> Password: </label>
                <input type="password" className = "form-control" placeholder = "Password" 
                    onChange={e => this.password = e.target.value}/>
                </div>         
                <button className="btn-block"> SignIn </button>
            </form>
        </div>
            
    )

  }  
}
