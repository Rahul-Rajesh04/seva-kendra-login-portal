import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Home } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <Home className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-blue-heading">
            SEVA KENDRA CALCUTTA
          </CardTitle>
          <p className="text-muted-foreground">
            Welcome to the dashboard system
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link to="/login" className="block">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <LogIn className="mr-2 h-4 w-4" />
              Sign In to Dashboard
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground text-center">
            Access your account and manage your dashboard
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
