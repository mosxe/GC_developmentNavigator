import { FunctionComponent } from "react";
import UserInfo from "@/features/UserInfo";
import Materials from "@/features/Materials";
import Recommendations from "@/features/Recommendations";

const App: FunctionComponent = () => {
  return (
    <div>
      <UserInfo />
      <Recommendations />
      <Materials />
    </div>
  );
};

export default App;
