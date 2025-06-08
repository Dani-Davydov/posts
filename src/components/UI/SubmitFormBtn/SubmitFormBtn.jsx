import * as SC from "./styles.js";

export const SubmitButton = ({title, ...rest}) =>  <SC.Button  { ...rest }>{title}</SC.Button>