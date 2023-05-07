import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ".././App.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup.number().required("Age is required"),
  sex: yup.string().required("Sex is required"),
  email: yup.string().email("Invalid email").notRequired(),
  mobile: yup.string().test('validMobile', 'Invalid Indian Mobile Number', function (value) {
    if (value && value.length > 0) {
      return /^[6-9]\d{9}$/.test(value);
    }
    return true;
  }),
  emergencyContact: yup.string().test('validEmergencyContact', 'Invalid Indian Mobile Number', function (value) {
    if (value && value.length > 0) {
      return /^[6-9]\d{9}$/.test(value);
    }
    return true;
  }),
  idType: yup.string(),
  govtId: yup.string().test('isValidGovtId', 'Invalid Govt ID', function (value) {
    if (this.parent.idType === 'aadhar') {
      return /^[0-9]{12}$/.test(value);
    } else if (this.parent.idType === 'pan') {
      return /^[A-Z0-9]{10}$/.test(value);
    }
    return true;
  }),
    guardian: yup.string(),
    occupation: yup.string(),
    maritalStatus: yup.string(),
    religion: yup.string(),
    bloodGroup: yup.string(),
    nationality: yup.string(),
    address: yup.string(),
    state: yup.string(),
    city: yup.string(),
    country: yup.string(),
    pincode: yup.string()
});

function UserRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:4000/api/users", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <h4>Personal details</h4>
              <div className="personal">
                <div className="name">
                  <label>Name:*</label>
                  <input
                    
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                  />
                  {errors.name && (
                    <p className="invalid-feedback">{errors.name.message}</p>
                  )}
                </div>
                <div className="age">
                  <label>Age:*</label>
                  <input
                    
                    type="number"
                    name="age"
                    {...register("age", { required: true })}
                  />
                  {errors.age && <p>{errors.age.message}</p>}
                </div>
                <div className="sex">
                  <label>Sex:*</label>
                  <input
                    
                    {...register("sex", { required: true })}
                    type="text"
                    name="sex"
                  />
                  {errors.sex && <p>{errors.sex.message}</p>}
                </div>   
                <div className="mobile">
                    <label>Mobile:</label>
                    <input
                      type="text"
                      name="mobile"
                      {...register("mobile", { required: false })}
                    />
                    {errors.mobile && <p>{errors.mobile.message}</p>}
                </div>
                <div className="govtId">
                    <label>ID Type:</label>
                    <select
                      name="idType"
                      {...register("idType", { required: false })}
                    >
                      <option value="">Select ID Type</option>
                      <option value="Aadhar">Aadhar</option>
                      <option value="PAN">PAN</option>
                    </select>
                    {errors.idType && <p>{errors.idType.message}</p>}
                    
                </div>
                <div className="idType">
                    <label>Govt Issued ID:</label>
                    <input
                      
                      type="text"
                      name="govtId"
                      {...register("govtId", { required: false })}
                    />
                    {errors.govtId && <p>{errors.govtId.message}</p>}
                </div>
                
              </div>
              

              {/* perosnal end */}
              <h4>Contact Details</h4>
              <div className="contact">
                <div className="guardian">
                  <label>Guardian Details:</label>
                  <input
                    
                    type="text"
                    name="guardian"
                    {...register("guardian", { required: false })}
                  />
                  {errors.guardian && <p>{errors.guardian.message}</p>}

                </div>
                <div className="email">
                  <label>Email:</label>
                  <input
                    
                    type="email"
                    name="email"
                    {...register("email", { required: false })}
                  />
                  {errors.email && <p>{errors.email.message}</p>}

                </div>
                <div className="emergency">
                  <label>Emergency Contact Number:</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    {...register("emergencyContact", { required: false })}
                    
                  />
                  {errors.emergencyContact && (
                    <p>{errors.emergencyContact.message}</p>
                  )}
                </div>

              </div>
              <h4>Address Details</h4>
              <div className="addressDetails">
                <div className="address">
                  <label>Address:</label>
                    <input
                      type="text"
                      name="address"
                      {...register("address", { required: false})}
                    />
                    {errors.address && (
                      <p>{errors.address.message}</p>
                    )}
                </div>
                <div className="state">
                  <label>State:</label>
                  <input
                    
                    {...register("state", { required: false })}
                    type="text"
                    name="state"
                  />
                  {errors.state && (
                    <p>{errors.state.message}</p>
                  )}
                </div>
                <div className="city">
                  <label>City:</label>
                  <input
                    
                    {...register("city", { required: false })}
                    type="text"
                    name="city"
                  />
                  {errors.city && (
                    <p>{errors.city.message}</p>
                  )}
                </div>
                <div className="country">
                  <label>Country:</label>
                  <input
                    
                    {...register("country", { required: false })}
                    type="text"
                    name="country"
                  />
                  {errors.country && (
                    <p>{errors.country.message}</p>
                  )}
                </div>
                <div className="pincode">
                  <label>Pincode:</label>
                  <input
                    
                    {...register("pincode", { required: false })}
                    type="text"
                    name="pincode"
                  />
                  {errors.pincode && (
                    <p>{errors.pincode.message}</p>
                  )}
                </div>

              </div>
             
              <h4>Other Details</h4>
              <div className="otherDetails">
                <div className="occupation">
                  <label>Occupation:</label>
                  <input
                    
                    {...register("occupation", { required: false})}
                    type="text"
                    name="occupation"
                  />
                  {errors.occupation && (
                    <p>{errors.occupation.message}</p>
                  )}
                </div>
                <div className="religion">
                  <label>Religion:</label>
                  <input
                    
                    {...register("religion", { required: false })}
                    type="text"
                    name="religion"
                  />
                  {errors.religion && (
                    <p>{errors.religion.message}</p>
                  )}
                </div>
                <div className="maritial">
                  <label>Maritial Status:</label>
                  <input
                    
                    {...register("maritalStatus", { required: false })}
                    type="text"
                    name="maritalStatus"
                  />
                  {errors.maritalStatus && (
                    <p>{errors.maritalStatus.message}</p>
                  )}
                </div>
                <div className="blood">
                    <label>Blood Group:</label>
                    <select
                      name="bloodGroup"
                      {...register("bloodGroup", { required: false })}
                    >
                      <option value="">Select Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                    {errors.bloodGroup && <p>{errors.bloodGroup.message}</p>}
                    
                </div>
                <div className="nationality">
                <label>Nationality:</label>
                <input
                  
                  {...register("nationality", { required: false })}
                  type="text"
                  name="nationality"
                />
                {errors.nationality && (
                  <p>{errors.nationality.message}</p>
                )}

              </div>

              </div>
              
              <button className="cancel" type="submit">
                Cancel
              </button>
              <button className="submit" type="submit">
                Submit
              </button>
           
              
            </div>
            
          </form>
        
  );
}

export default UserRegistrationForm;