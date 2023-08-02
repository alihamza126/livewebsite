import * as Yup from 'yup';

export const fromschema= Yup.object({
    name:Yup.string("enter valid Name").min(5,'Name must atleast 3 character').max(25).required(),
    email:Yup.string().email().required("Enter you email"),
    // age:Yup.number("Age must be Number").min(18).max(30).required("required"),
    // pass:Yup.string().required().matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,'Strong password require'),
    // cpass:Yup.string().required().oneOf([Yup.ref('pass'),],'must match')
})
