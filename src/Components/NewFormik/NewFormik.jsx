import React from "react";
import { Formik , Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("form data ", values);
};



const validationSchema= Yup.object({
  name:Yup.string().required('name required '),
  email:Yup.string().email('invalid email format').required('email required'),
  channel:Yup.string().required(' channel required')
})
function NewFormik() {
  
  // console.log("form value", formik.values);
  // console.log("form error", formik.errors);
  console.log('visited fields', formik.touched);

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form >
        <div>
          <label htmlFor="name">name</label>
          <Field
            type="text"
            name="name"
            id="name"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
            // {...formik.getFieldProp('name')}
          />
          {/* {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null} */}
          {/* replacing error message  */}
          <ErrorMessage name="name" />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <Field
            type="email"
            name="email"
            id="email"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.email}
            // {...formik.getFieldProp('email')}

          />
          {/* {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
          <ErrorMessage name="email" />
        </div>

        <div>
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.channel}
            // {...formik.getFieldProp('channel')}

          />
          {/* {formik.touched.channel && formik.errors.channel ? <div>{formik.errors.channel}</div> : null} */}
          <ErrorMessage name="channel" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default NewFormik;
