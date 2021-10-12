import React from "react";
import '../AllCss/Login.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Formdata: { name: "", email: "", password: "", phone: "" } };
    }


    async postData(url,data={}){
        const response = await fetch(url,{
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(data)

        })
        return response.json();

      
    }
    


    handleSubmit =  (et)=> {
        et.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;
        let phone = document.getElementById("phone").value;

        if (name == "") {
            document.getElementById("name-span").innerHTML = "**please fill the value";
            console.log(name.length);
        }

        if ((name.length <= 2 && name.length > 0) || (name.length > 20)) {
            document.getElementById("name-span").innerHTML = "**Character must be more than 2 and 20 words";
        }




        if (email == "") {
            document.getElementById("email-span").innerHTML = "**please fill the value";
        }
        if (!email.charAt("@") > 2) {
            document.getElementById("email-span").innerHTML = "invalid position of @";
        }
        if (pass == "") {
            document.getElementById("pass-span").innerHTML = "**please fill the value";
        }
        if ((pass.length < 5 && pass.length > 0) || (pass.length > 20)) {
            document.getElementById("pass-span").innerHTML = "**short pass word is not accepted";
        }

        if (phone == "") {
            document.getElementById("phone-span").innerHTML = "**please fill the phone number";
        }

        if ((phone.length < 9 && phone.length > 0)) {
            document.getElementById("phone-span").innerHTML = "**phone number must be in 10 character's";
        }

        this.postData("http://localhost:3002/user",this.state.Formdata)
        .then(data =>{
            console.log(data);
        });
       

        this.props.history.push("http://localhost:3000/"); 
        
    }



      

    handleChange = (event)=> {
        let obj = this.state.Formdata;
        obj[event.target.name] = event.target.value;
        this.setState({ Formdata: obj });
    }

    render() {
        return (
            <>
                <div className="main-outer-div">
                    <div className="main-login-div">
                        <h2 className="text-light">LogIn form</h2>
                        <form className="w-100" action="/action_page.php" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="control-label col-sm-2" >Name:</label>
                                <div className="col-sm-12">
                                    <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" onChange={this.handleChange} />
                                    <span id="name-span"></span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2" >Email:</label>
                                <div className="col-sm-12">
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
                                    <span id="email-span"></span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2" >Password:</label>
                                <div className="col-sm-12">
                                    <input type="password" className="form-control" id="pass" placeholder="Enter password" name="pwd" onChange={this.handleChange} />
                                    <span id="pass-span"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" >Contact:</label>
                                <div className="col-sm-12">
                                    <input type="phone" className="form-control" id="phone" placeholder="Enter phone" name="phone" onChange={this.handleChange} />
                                    <span id="phone-span"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-12">
                                    <div className="checkbox">
                                        <label><input type="checkbox" name="remember" /> Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit " className="btn btn-danger m-2">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}