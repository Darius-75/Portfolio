import React from "react";
import DiorCard from "../components/Pagecontainer/DiorCard/DiorCard";
import WrapperCenter from "../wrapper/WrapperCenter/WrapperCenter";

type Props = {};

const DiorPage = (props: Props) => {
  return (
    <div>
      <WrapperCenter>
        <DiorCard />
      </WrapperCenter>
    </div>
  );
};

export default DiorPage;
