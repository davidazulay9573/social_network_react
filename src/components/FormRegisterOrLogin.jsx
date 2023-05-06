import { useFormik } from "formik";
import ProfilePicture from "./ProfilePicture";

function FormRegisterOrLogin({ buttonTitle, onSubmit, validation }) {

   const formik = useFormik({
     validateOnMount: true,
     initialValues: { userName: "", password: "", img: null},
     validate: validation,
     onSubmit(values,{resetForm}){
       onSubmit(values)
       resetForm()
     },
   });

  return (
    <div style={{ textAlign: "center" }}>
      <form >
        <span
          className="profilepicture"
          style={{ height: "70px", width: "70px" }}
        >
          <input
            name="img"
            type='file'
         
            onChange={(event) => {
              formik.setFieldValue("img", event.currentTarget.files[0]);
              console.log(formik.values.img);
            }}
            onBlur={formik.handleBlur}
          />
          {formik.values.img && (
            <ProfilePicture
              user={
                {
                  // profilePicture: URL.createObjectURL(formik.values.img[0]),
                }
              }
            ></ProfilePicture>
          )}
        </span>
        <br />
        <br />
        <input
          type="text"
          {...formik.getFieldProps("userName")}
          className="form-control"
          placeholder="User name"
        />
        {
          <div className="text-danger">
            {formik.touched.userName && formik.errors.userName}
          </div>
        }
        <br />

        <input
          {...formik.getFieldProps("password")}
          type="password"
          className="form-control"
          placeholder="Password"
        />
        {
          <div className="text-danger">
            {formik.touched.password && formik.errors.password}
          </div>
        }

        <br />
        <button
          type="submit"
          className="btn btn-dark"
          onClick={formik.handleSubmit}
        >
          {buttonTitle}
        </button>
      </form>
    </div>
  );
}

export default FormRegisterOrLogin;
