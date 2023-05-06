import FormRegisterOrLogin from "../FormRegisterOrLogin";
import Joi from "joi";
function RegisterPage({ handleRegister }) {
 
  return (
    <>
      <FormRegisterOrLogin
        buttonTitle={"Register"}
        onSubmit={handleRegister}
        validation={(values) =>{
        
       
          const schema = Joi.object({
            userName: Joi.string().min(2).max(8).required(),
            password: Joi.string().min(7).max(89).required(),
            img:null
          });
        
          const {error} = schema.validate(values,{abortEarly:false});
      
          if (!error) return null;
        
          const errors = {};
          for (const errorEach of error.details) {
             errors[errorEach.path[0]] = errorEach.message;
          }
         
          return errors;
        }
        }
      />
    </>
  );
}

export default RegisterPage;
