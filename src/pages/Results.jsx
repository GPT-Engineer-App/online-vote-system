import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Dummy data fetching logic
    const fetchResults = () => {
      setResults([
        { id: 1, name: "Candidate 1", votes: 10 },
        { id: 2, name: "Candidate 2", votes: 20 },
        { id: 3, name: "Candidate 3", votes: 15 },
      ]);
    };

    fetchResults();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Voting Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Votes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell>{result.name}</TableCell>
                  <TableCell>{result.votes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Results;