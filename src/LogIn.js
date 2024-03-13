import { Col, Row } from 'react-bootstrap';
import './LogIn.css';
import photo from './sign_up_student.png';

export default function LogIn() {
    return (
        <section className="container d-flex align-items-center text-center cont">
            <Row className="row container-fluid">
                <Col className="col-md-6">
                    <div className="login">
                        <form action="#" className="form-container need-validation" method="post" id='formi'>
                            <div className="form-group">
                                <h4 className="text-center font-weight-bold"> Welcome back! </h4>
                                <hr />
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" autoComplete="on" required />
                                    <div className="invalid-feedback">Please include @ in your email</div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="psw">Password</label>
                                    <input type="password" className="form-control" id="psw" name="psw" placeholder="Password" required />
                                    <span className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                </div>

                                <div className="row mb-4">
                                    <div className="col d-flex justify-content-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                            <label className="form-check-label" htmlFor="form1Example3">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col text-center">
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">Log in</button>
                                <div className="form-footer">
                                    <p> Don't have an account? <a href="signup">Register</a></p>
                                </div>
                            </div>
                        </form>

                        <div id="validation_box">
                            <h5>Password Must Contain the Following</h5>
                            <p id="letter" className="invalid">Lowercase Letters</p>
                            <p id="capital" className="invalid">Uppercase Letters</p>
                            <p id="number" className="invalid">Numbers</p>
                            <p id="length" className="invalid">At least 8 Character</p>
                        </div>
                    </div>
                </Col>
                <Col className="col-md-6 d-none d-md-block">
                    <img className="img-fluid" src={photo} alt="Vector Image for design" />
                </Col>
            </Row>
        </section>
    );
}
