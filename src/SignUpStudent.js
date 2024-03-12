import './SignUpStudent.css';

export default function SignUp() {
    return (
        <body>
            <section id="smain" class="container-fluid mt-5" >


                <section class="row justify-content-center">

                    {/* <div id="signup-student-image"><img src={photo} width="604px" height="619px" /></div> */}

                    <section class="col-12 col-sm-6 col-md-4">
                        <form class="form-container need-validation">

                            <div class="form-group">
                                <h4 class="text-center font-weight-bold"> Create new account </h4>
                                <hr />

                                <div class="row">
                                    <div class="col">

                                        <label for="Inputname ">Name</label><br />
                                        <input type="text" class="form-control" id="Inputname" aria-describeby="usernameHelp" placeholder="e.g. Christina" autocomplete="on" required />

                                        <div class="invalid-feedback">Please enter name</div>
                                    </div>

                                    <div class="col">
                                        <label for="Inputsurname ">Surname</label><br />
                                        <input type="text" class="form-control" id="Inputsurname" aria-describeby="usernameHelp" placeholder="e.g. Coelpin" autocomplete="on" required />

                                        <div class="invalid-feedback">Please enter your Surname.</div>
                                    </div>
                                </div>
                            </div>


                        <div class="form-group" >
                            <label for="gender">Gender:</label>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="male" value="male" required />
                                <label class="form-check-label" for="male">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="female" value="female" required />
                                <label class="form-check-label" for="female">Female</label>
                            </div>

                        </div>




                        <div class="form-group">
                            <label for="Inputuser">Username</label>
                            <input type="text" class="form-control" id="Inputuser" placeholder="e.g. christ_ina08" autocomplete="on" required />

                            <div class="invalid-feedback">Please enter your username .</div>
                        </div>

                    <p>Would you like an Exhchange program in:</p>
                    <div class="form-check">

                        <label class="form-check-label" for="checkbox1">
                            <input type="checkbox" class="form-check-input" id="checkbox1" name="option1" value="Europe" checked />
                            Europe
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="checkbox2">
                            <input type="checkbox" class="form-check-input" id="checkbox2" value="America" />Amerika
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" name="option2" value="Azia" />
                            Asia
                        </label>
                    </div>
                    <br />


                    <div class="form-group">
                        <label for="Inputemail ">Email</label>
                        <input type="email" class="form-control" id="Inputemail" aria-describeby="usernameHelp" placeholder="Enter your email" autocomplete="on" />
                        <div class="invalid-feedback">Please provide a valid email.</div>
                    </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="psw">Password</label>
                            <input type="password" class="form-control" id="psw" placeholder="Password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />

                        </div>

                        <div class="col">
                            <label for="confirm"> Confirm Password</label>
                            <input type="password" class="form-control" id="confirm" placeholder=" Confirm Password" />
                        </div>
                    </div>
                </div>

                <div class="form-group form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember" required /> I accept the Term and Privacy Policy.
                        <div class="valid-feedback">Valid.</div>
                        <div class="invalid-feedback">Check this checkbox to continue.</div>
                    </label>
                </div>


                <button type="Log in" class="btn btn-primary btn-block">Sign up</button>
                <div class="form-footer">
                    <p> You already have an account? <a href="login">Log in</a></p>
                </div>
            </form>
        </section>
    </section >
  </section >
</body >
    )
}