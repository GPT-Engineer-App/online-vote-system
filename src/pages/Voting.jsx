import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const candidates = [
  { id: 1, name: "Candidate 1" },
  { id: 2, name: "Candidate 2" },
  { id: 3, name: "Candidate 3" },
];

const Voting = () => {
  const [voted, setVoted] = useState(false);

  const handleVote = (candidateId) => {
    setVoted(true);
    toast.success(`You voted for Candidate ${candidateId}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Vote for Your Favorite Candidate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="flex items-center justify-between">
                <span>{candidate.name}</span>
                <Button
                  variant="secondary"
                  onClick={() => handleVote(candidate.id)}
                  disabled={voted}
                >
                  Vote
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Voting;