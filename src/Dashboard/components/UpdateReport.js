import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_MIN,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/FormElements/Button";

const UpdateReport = () => {
  const reportId = useParams().reportId;
  const [isLoading, setisLoading] = useState(true);
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      tags: {
        value: "",
        isValid: false,
      },
      starsCount: {
        value: "",
        isValid: false,
      },
      viewsCount: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const report = useEffect(() => {
    async function getData() {
      await axios
        .get(`http://localhost:8000/reports/${reportId}`)
        .then((res) => {
          if (res.data) {
            setFormData(
              {
                name: {
                  value: res.data.name,
                  isValid: true,
                },
                description: {
                  value: res.data.description,
                  isValid: true,
                },
                tags: {
                  value: res.data.tags,
                  isValid: true,
                },
                starsCount: {
                  value: res.data.starsCount,
                  isValid: true,
                },
                viewsCount: {
                  value: res.data.viewsCount,
                  isValid: true,
                },
              },
              true
            );
          }
          setisLoading(false);
          return res.data;
        })
        .catch((err) => {
          setisLoading(false);
        });
    }
    getData();
  }, [setFormData, isLoading]);

  if (formState.inputs.name.value === "" && !isLoading) {
    return (
      <div className="center">
        <h1>Report Could not Found!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h1>Loading...</h1>
      </div>
    );
  }

  const submitHandler = (event) => {
    event.preventDefault();
    let report = {
      name: formState.inputs.name.value,
      description: formState.inputs.description.value,
      tags: formState.inputs.tags.value,
      starsCount: formState.inputs.starsCount.value,
      viewsCount: formState.inputs.viewsCount.value,
    };

    axios
      .patch(`http://localhost:8000/reports/${reportId}`, report)
      .then(function (response) {
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form className="report-form" onSubmit={submitHandler}>
      <h2>Update Report</h2>
      <hr />
      <Input
        element="input"
        type="text"
        id="name"
        label="Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please Enter a valid Name"
        onInput={inputHandler}
        initialValue={formState.inputs.name.value}
        initialValid={formState.inputs.name.isValid}
      />
      <Input
        element="textarea"
        id="description"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please Enter a valid Description. Min length 5"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Input
        element="input"
        type="text"
        id="tags"
        label="Tags"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please Enter a valid value for Tags (comma seperated)"
        onInput={inputHandler}
        initialValue={formState.inputs.tags.value}
        initialValid={formState.inputs.tags.isValid}
      />
      <Input
        element="input"
        type="number"
        id="stars"
        label="Stars"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0)]}
        errorText="Please Enter a valid value for Stars. value must be in positive Numbers or 0"
        onInput={inputHandler}
        initialValue={formState.inputs.starsCount.value}
        initialValid={formState.inputs.starsCount.isValid}
      />
      <Input
        element="input"
        type="number"
        id="views"
        label="Views"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(0)]}
        errorText="Please Enter a valid value for Views.  value must be in positive Numbers or 0"
        onInput={inputHandler}
        initialValue={formState.inputs.viewsCount.value}
        initialValid={formState.inputs.viewsCount.isValid}
      />

      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdateReport;
