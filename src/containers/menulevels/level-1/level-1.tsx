import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";

function Level1() {
  return (
    <Fragment>
      <Pageheader
        titles={"Menu-level"}
        active={"Level-1"}
        Subtite={"Menu-level"}
      />
      Level-1
    </Fragment>
  );
}

export default Level1;
