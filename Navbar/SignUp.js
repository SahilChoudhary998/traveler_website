import axios from 'axios';
import React, { Component } from 'react'

export default class Register extends Component{
    handleSubmbit = e => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword
        };
        axios.post('http://localhost:8000/register', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    };
    render()
    {
        return (
            <div className='sign-in-container'>
                <form onSubmit={this.handleSubmbit}>
                <h3>THIS IS SignUp PAGE</h3> 
                <div className='form-group'>
                <label> First Name: </label>
                <input type="text" className = "form-control" placeholder = "First Name" 
                    onChange={e => this.firstName = e.target.value}/>
                </div>
                <div className='form-group'>
                <label> Last Name: </label>
                <input type="text" className = "form-control" placeholder = "Last Name" 
                    onChange={e => this.lastName = e.target.value}/>
                </div>
                <div className='form-group'>
                <label> Email: </label>
                <input type="Email" className = "form-control" placeholder = "Email" 
                    onChange={e => this.email = e.target.value}/>
                </div>
                <div className='form-group'>
                <label> Password: </label>
                <input type="password" className = "form-control" placeholder = "Password" 
                    onChange={e => this.password = e.target.value}/>
                </div>
                <div className='form-group'>
                <label> Confirm Password: </label>
                <input type="password" className = "form-control" placeholder = "Confirm Password" 
                    onChange={e => this.confirmPassword = e.target.value}/>
                </div>            
                <button className="btn-block"> SignUp</button>
            </form>
            </div>
               
               )
    }
}
