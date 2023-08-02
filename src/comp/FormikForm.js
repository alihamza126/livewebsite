import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik'
import { fromschema } from './YupSchema';

function FormikForm() {
    return (
        <div>
                <Formik initialValues={
                   {name:'',email:''}}
                   onSubmit={(val)=>{console.log(val)}}
                   validationSchema={fromschema}
                   >
                    <Form>
                        <Field type='text' name='name'/>
                        <br /><span>sadas</span><br/>
                        <Field type='email' name='email'/>
                        <button type="submit">sub</button>
                    </Form>
                </Formik>

                <h1>{Formik.y}</h1>
        </div>
    )
}

export default FormikForm