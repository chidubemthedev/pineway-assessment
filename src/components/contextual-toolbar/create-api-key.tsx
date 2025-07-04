import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";

const CreateApiKey = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#292929] font-[500] text-sm leading-5">
          Create new API key
        </CardTitle>
        <CardDescription>
          Your secret API Key will be shared with all users belonging to your
          organization.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Input placeholder="API key name" />
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        <Button variant={"ghost"}>Cancel</Button>
        <Button>Create secret key</Button>
      </CardFooter>
    </Card>
  );
};

export default CreateApiKey;
