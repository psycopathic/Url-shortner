import React, { use } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "../components/Login";
import Signup from "../components/Signup";
// import { url } from "inspector";
import {UrlState}  from "../Context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [searchParams] = useSearchParams();
  const longLink = searchParams.get('createNew');
  const navigate = useNavigate();

  const {isAuthenticate, loading} = UrlState();

  useEffect(()=>{
    if(isAuthenticate && !loading){
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
    }
  },[isAuthenticate, loading])
  return (
    <div className="mt-20 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">
        {searchParams.get("createNew")
          ? "Hold up! Let's login first"
          : "Login/Signup"}
      </h1>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="signup">
          <Signup />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
