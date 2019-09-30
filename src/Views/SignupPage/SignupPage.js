import React from 'react';
import './SignupPage.scss';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Label from '../../Components/Label';
import Icon from '../../Components/Icon';

export default function SignupPage() {
  return (
    <div className="signupPageWrapper shadow">
      <div className="signupText"><h1>Sign Up</h1></div>
      <form>
        <Label>Firstname</Label>
        <Input
          type="text"
          placeholder="What is your Firstname?"
        />
        <Label>Lastname</Label>
        <Input
          type="text"
          placeholder="What is your Lastname?"
        />
        <Label>Username</Label>
        <Input
          type="text"
          placeholder="What is your Username?"
        />
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="What is your Email?"
        />
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="What is your Password?"
        />
        <Button
          style={{
            backgroundColor: "#5ca0d3",
            color: "white",
            width: "100%",
            padding: "17px"
          }}
        >
          Signup
        </Button>
      </form>
      <p className="socialMessage">or signup using one of the following methods</p>
      <div className="socialSignup">
        <Button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#00acee",
            color: "white"
          }}
        >
          <Icon
            name="logo-twitter"
            style={{
              color: "white",
              marginRight: "10px"
            }}
          />
          Twitter
        </Button>
        <Button
          style={{
            width: "100%",
            marginLeft: "20px",
            padding: "12px",
            backgroundColor: "#3b5998",
            color: "white"
          }}>
          <Icon
            name="logo-facebook"
            style={{
              color: "white",
              marginRight: "10px"
            }}
          />
          Facebook
          </Button>
        <Button
          style={{
            width: "100%",
            marginLeft: "20px",
            padding: "12px",
            backgroundColor: "#dd4b39",
            color: "white"
          }}
        >
          <Icon
            name="logo-google"
            style={{
              color: "white",
              marginRight: "10px"
            }}
          />
          Google+
        </Button>
      </div>
    </div>
  )
}
