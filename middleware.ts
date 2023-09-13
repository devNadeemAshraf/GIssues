import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

// Add Routes here that need to be protected
export const config = {
  matcher: ["/:path*"],
};
