//here we will be writing the login and signup logic for the application

import supabase from "./supabase.js";

export async function login({email,password}){
   const {data,error} = await supabase.auth.signInWithPassword({
    email,
    password
   });
   if(error)throw new Error(error.message);
   return data;
}

export async function getCurrentUser() {
  const {data: session, error} = await supabase.auth.getSession();
  if (!session.session) return null;

  // const {data, error} = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return session.session?.user;
}


export async function signup({name,email,password,profilepics}){
  const fileName = `dp-${name.split(" ").join("-")}-${Math.random()}`;
  const {error:storageError} = await supabase.storage
    .from("profilepics")
    .upload(fileName, profilepics);
  if(storageError)throw new Error(storageError.message);
  const {data: user, error} = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        profilepics: fileName,
      },
    },
  });
  if(error)throw new Error(error.message);
  return user;
}

export async function logout(){
  const {error} = await supabase.auth.signOut();
  if(error)throw new Error(error.message);
}