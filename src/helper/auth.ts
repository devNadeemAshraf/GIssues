import { signIn, signOut } from "next-auth/react";

export async function handleSignInWithGithub() {
  try {
    const resp = await signIn("github", {
      callbackUrl: "/",
    });
    return {
      status: "ok",
      response: resp,
    };
  } catch (error) {
    return {
      status: "error",
      response: new Error(error as string),
    };
  }
}

export async function handleSignOut() {
  try {
    const resp = await signOut({ callbackUrl: "/login" });
    return {
      status: "ok",
      response: resp,
    };
  } catch (error) {
    return {
      status: "error",
      response: new Error(error as string),
    };
  }
}
