import './LogIn.css';
import photo from './sign_up_student.png';

export default function LogIn() {
    return (
        <div class="lmain">
            <div class="container login">
                <div class="row">

                    <div class="col-12">
                        <img id="uni" class="img-responsive col-12 col-sm-5 col-md-5" src={photo} alt="Vector Image for design" />
                        <form action="#" class="form-container need-validation" method="post" id='formi'>
                            <div class="form-group col-5">
                                <h4 class="text-center font-weight-bold"> Welcome back! </h4>
                                <hr />
                                <div class="form-group">
                                    <label for="email ">Email</label>
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" autocomplete="on" required />

                                    <div class="invalid-feedback">Please include @ in your email</div>
                                </div>

                                <div class="form-group">
                                    <label for="psw">Password</label>
                                    <input type="password" class="form-control" id="psw" name="psw" placeholder="Password" required />

                                    <span toggle="#psw" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                </div>


                                <div class="row mb-4">
                                    <div class="col d-flex justify-content-center">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                            <label class="form-check-label" for="form1Example3">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col text-center">
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary btn-block">Log in</button>
                                <div class="form-footer">
                                    <p> Don't have an account? <a href="signup">Register</a></p>
                                </div>
                            </div>
                        </form>

                        <div id="validation_box">
                            <h5>Password Must Contain the Following</h5>
                            <p id="letter" class="invalid">Lowercase Letters</p>
                            <p id="capital" class="invalid">Uppercase Letters</p>
                            <p id="number" class="invalid">Numbers</p>
                            <p id="length" class="invalid">At least 8 Character</p>
                        </div>

                    </div>
                    {/* <div class="col-md-6 col-lg-8">
                        <img id="uni" class="img-responsive col-12 col-sm-5 col-md-5" src={photo} alt="Vector Image for design" />
                    </div> */}
                </div>

            </div>
        </div>

    )
}