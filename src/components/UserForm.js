import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup.number().required("Age is required"),
  sex: yup.string().required("Sex is required"),
  email: yup.string().email("Invalid email").notRequired(),
  phone: yup
    .string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid Indian mobile number")
    .required("Mobile is required"),
  emergencyContact: yup
    .string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid Indian mobile number")
    .notRequired(),
  govtIdType: yup.string().required("Govt ID Type is required"),
  govtId: yup.string().when(["govtIdType"], (govtIdType, schema) => {
    if (govtIdType === "Aadhar") {
      return schema
        .matches(/^\d{12}$/, "Invalid Aadhar number")
        .required("Aadhar number is required");
    } else if (govtIdType === "PAN") {
      return schema
        .matches(/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/, "Invalid PAN number")
        .required("PAN number is required");
    }
    return schema;
  }),
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Name</label>
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                {...register("name", { required: true })}
                type="text"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="invalid-feedback">{errors.name.message}</p>
              )}
              <label>Name</label>
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                {...register("name", { required: true })}
                type="text"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="invalid-feedback">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label>Age</label>
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                {...register("name", { required: true })}
                type="number"
                name="age"
                {...register("age", { required: true })}
              />
              {errors.age && <p>{errors.age.message}</p>}
            </div>

            <div>
              <label>Sex</label>
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                {...register("name", { required: true })}
                type="text"
                name="sex"
                {...register("sex", { required: true })}
              />
              {errors.sex && <p>{errors.sex.message}</p>}
            </div>

            <div>
              <label>Mobile</label>
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                {...register("name", { required: true })}
                type="text"
                name="mobile"
                {...register("phone", { required: true })}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>

            <div>
              <label>Emergency Contact Number</label>
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                {...register("name", { required: true })}
                type="text"
                name="emergencyContact"
                {...register("emergencyContact", { required: true })}
              />
              {errors.emergencyContact && (
                <p>{errors.emergencyContact.message}</p>
              )}
            </div>

            <div>
              <label>ID Type</label>
              <select
                className={`form-control ${
                  errors.govtIdType ? "is-invalid" : ""
                }`}
                name="govtIdType"
                {...register("govtIdType", { required: true })}
              >
                <option value="">Select ID Type</option>
                <option value="Aadhar">Aadhar</option>
                <option value="PAN">PAN</option>
              </select>
              {errors.govtIdType && <p>{errors.govtIdType.message}</p>}
            </div>

            <div>
              <label>Govt Issued ID</label>
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                type="text"
                name="govtId"
                {...register("govtId", { required: true })}
              />
              {errors.govtId && <p>{errors.govtId.message}</p>}
            </div>

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserRegistrationForm;