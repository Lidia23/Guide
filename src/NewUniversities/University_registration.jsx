import { ErrorMessage, Formik, Form, Field } from 'formik';
import '../LogIn.css';
import React, { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
// import Offers from '../Universities/Offers';
// import { upload } from '@testing-library/user-event/dist/upload';

export default function University_registration(props) {
    // const[imgUploaded, setImgUploaded] = useState([]);
    // const handleUpload = (event) => {
    //     console.log(event.target.files);
    //     setImgUploaded(URL.createObjectURL(event.target.files[0]));
    // }
    // const [enteredName, setEnteredName] = useState('');
    // const nameChangeHandler = (event) => {
    //     setEnteredName(event.target.value);
    // }
    // // const [enteredImg, setEnteredImg] = useState('');
    // // const imgChangeHandler = (event) => {
    // //     setEnteredImg(event.target.value);
    // // }
    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     const uniData = {
    //         image: imgUploaded,
    //         name: enteredName,
    //         // offers: <Offers />,
    //     };
    //     props.onAdd(uniData);
    //     setImgUploaded('');
    //     setEnteredName('');
    //     // <Offers />
    // };

    const initialValues = {
        uniname:"",
        uniimage: ""
    }
    const validationSchema = Yup.object().shape({
        uniname:Yup.string().min(3).max(20).required("You must enter a name"),
        uniimage:Yup.string().required("You must upload a photo"),
    })
    const handleSubmit = (data) => {
        
        axios.post("http://localhost:3001/posts", data).then((response) => {
            console.log("It worked");
        });
    }
    return (
            <div id="uni-register">
                <h3 class="text-center font-weight-bold display-6">Registration Form about University</h3>
                <hr />
                <br />
                <br />
                <div class="container-fluid">
                    <div class="rows" >
                        <img id="uni" class="img-responsive  float-right" src="register_uniii.png" alt="Vector Image for design" />
                    </div>
                </div>
                <section class="container-fluid" >

                    <section class="row justify-content-lg-start">

                        <Formik class="col-12 col-sm-6 col-md-11" onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                            <Form class="form-container">
                                <div class="form-group" >
                                    <label for="exch_ptogram" class="h4 font-weight-bold" >Image:</label>
                                    <br/>
                                    <ErrorMessage name='uniimage' component="span" style={{color: "red"}}/>
                                    <Field type="file" class="form-control" id="exch_program" name="uniimage"/>  {/* aria-describeby="usernameHelp" */}
                                    {/* <img src={imgUploaded} /> */}
                                    <br/>
                                </div>
                                <div class="form-group" >
                                    <label for="exch_ptogram" class="h4 font-weight-bold" >Name:</label>
                                    <br />
                                    <ErrorMessage name='uniname' component="span" style={{color: "red"}}/>
                                    <Field type="text"  class="form-control" id="exch_program" name="uniname" placeholder="e.g. University of Tirana" /> {/* aria-describeby="usernameHelp" */}
                                    <br />
                                </div>
                                {/* <div class="form-group ">
                                    <label for="about_uni" class="h4 font-weight-bold">About University</label>
                                    <textarea class="form-control " id="about_uni" rows="12" placeholder="Give a description about the university(no limited in size)"></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="faculties" class="h4 font-weight-bold">Faculties </label>
                                    <textarea class="form-control " id="faculties" cols="50" rows="12" placeholder="Give information about the faculties that university consists of(no limited in size)"></textarea>
                                </div>
                                <br />

                                <h5 class="h4 text-center font-weight-bold">Exchange Study Program</h5><br />
                                <div class="form-group" >
                                    <label for="exch_ptogram" class="h4 font-weight-bold" >Name:</label>
                                    <input type="text" class="form-control" id="exch_program" aria-describeby="usernameHelp" placeholder="e.g. Exchange Program in Computer Science" />
                                    <br />

                                    <label for="description" class="h4 font-weight-bold">Description</label>
                                    <textarea class="form-control" id="description" cols="50" rows="12" placeholder="Give a description of exchange study program(when originate, in which faculty it takes part, duration...)"></textarea>
                                    <br />

                                    <label for="courses" class="h4 font-weight-bold">Courses</label>
                                    <textarea class="form-control" id="courses" cols="50" rows="12" placeholder="Give a description of courses a study program consists of (what is about, duration, total hours, credits...)"></textarea>
                                </div> */}
                                <div class="form-group" >
                                    <button class="btn subscribe" type='submit' href="universitetet">Post</button>
                                </div>
                            </Form>

                        </Formik>
                    </section>
                </section>

            </div>
    );
}