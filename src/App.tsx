import { Input } from "@nextui-org/react";


function App() {
  return (
      <div>
          <h1>Mouse AI</h1>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="email" label="Email"/>
              <Input type="email" label="Email" placeholder="Enter your email"/>
          </div>
      </div>
  );
}

export default App;
