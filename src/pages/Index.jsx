import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Welcome to the Online Voting System</h1>
      <p className="text-lg">Your voice matters. Vote for your favorite candidates and see the results in real-time.</p>
      <div className="space-x-4">
        <Link to="/login">
          <Button variant="primary">Login</Button>
        </Link>
        <Link to="/voting">
          <Button variant="secondary">Vote Now</Button>
        </Link>
        <Link to="/results">
          <Button variant="outline">View Results</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;