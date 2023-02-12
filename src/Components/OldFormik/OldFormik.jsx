import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("form data ", values);
};

const validate = (values) => {
  //values.name values.email values.channel
  //errors.name errors.email errors.channel
  let errors = {};
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.email) {
    errors.email = "required";
  }
  if (!values.channel) {
    errors.channel = "required";
  }
  return errors;
};

const validationSchema= Yup.object({
  name:Yup.string().required('name required '),
  email:Yup.string().email('invalid email format').required('email required'),
  channel:Yup.string().required(' channel required')
})
function OldFormik() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate,
  });
  // console.log("form value", formik.values);
  // console.log("form error", formik.errors);
  console.log('visited fields', formik.touched);

  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>

        <div>
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? <div>{formik.errors.channel}</div> : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldFormik;
