import React from "react";

const EditExpansePage = (props) => {
  console.log(props.match.params.id);
  return <div>Editing the Expanse with id of {props.match.params.id}</div>;
};
export default EditExpansePage;
