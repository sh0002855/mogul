import React, { Component, Fragment } from "react";
import { Provider } from "mobx-react";
import PropTypes from "prop-types";
import FormStore from "./FormStore";
import FormBox from "./FormBox";
import FormInput from "./FormInput";
import FormCheckGroup from "./FormCheckGroup";
import FormRadioGroup from "./FormRadioGroup";
import FormSelect from "./FormSelect";
import FormCascader from "./FormCascader";
import ConnectForm from "./ConnectForm";

class Form extends Component {
  static propTypes = {
    labelStyle: PropTypes.object
  };

  static defaultProps = {
    labelStyle: {
      width: "30%",
      paddingRight: 10
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      form: new FormStore(null, this)
    };
  }

  componentWillUnmount() {
    this.state.form.tearDownForm();
  }

  render() {
    return (
      <Provider form={this.state.form}>
        <Fragment>{this.props.children}</Fragment>
      </Provider>
    );
  }
}

Form.FormCascader = FormCascader;
Form.FormSelect = FormSelect;
Form.FormRadioGroup = FormRadioGroup;
Form.CheckGroup = FormCheckGroup;
Form.Input = FormInput;
Form.Box = FormBox;
Form.Connect = ConnectForm;

export default Form;
export { default as withForm } from "./withForm";