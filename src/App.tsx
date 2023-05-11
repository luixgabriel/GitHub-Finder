import { useState } from "react";
import { UserProps } from "./types/user";
import Search from "./components/Search/Search";

function App() {

  const [user, setUser] = useState<UserProps | null>(null);

  

  return (
    <div>
      <Search  />
    </div>
  );
}

export default App;
