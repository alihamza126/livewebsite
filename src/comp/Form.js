import React, { useState } from 'react';
import { useFormik } from 'formik';
import { fromschema } from './YupSchema';

function Form() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            age:'',
            pass:'',
            cpass:''

        },
        validationSchema:fromschema,
        onSubmit: (va) => {
            console.log(va)
        }
    })

    return (
        <div>
            <h1 class="mt-3">Form Validation is Start</h1>

            <form onSubmit={formik.handleSubmit}>
                Name: &nbsp; <input type="text" name="name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                <br /> {(formik.errors.name&&formik.touched.name) &&<span style={{color:'red'}}>{formik.errors.name}</span> }                      <br/><br />

                Email: &nbsp; <input type="email" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} /> 
                <br /> {(formik.errors.email && formik.touched.email) &&<span style={{color:'red'}}>{formik.errors.email}</span> }        <br /><br />

                Age: &nbsp; <input type="number" name="age" onBlur={formik.handleBlur} onChange={formik.handleChange} /> 
                <br /> {(formik.errors.age && formik.touched.age) &&<span style={{color:'red'}}>{formik.errors.age}</span> }        <br /><br />

                password: &nbsp; <input type="text" name="pass" onBlur={formik.handleBlur} onChange={formik.handleChange} /> 
                <br /> {(formik.errors.pass && formik.touched.pass) &&<span style={{color:'red'}}>{formik.errors.pass}</span> }        <br /><br />

                Confirm  password: &nbsp; <input type="text" name="cpass" onBlur={formik.handleBlur} onChange={formik.handleChange} /> 
                <br /> {(formik.errors.cpass && formik.touched.cpass) &&<span style={{color:'red'}}>{formik.errors.cpass}</span> }        <br /><br />


                <button type="submit">Submit</button>
            </form>
            <h4>{formik.values.name}</h4>
            <h4>{formik.values.email}</h4>
        </div>
    )
}

export default Form