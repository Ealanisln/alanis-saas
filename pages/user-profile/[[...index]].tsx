import { UserProfile } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="flex justify-center items-center min-h-screen mt-32">
    <div>
      <UserProfile path="/user-profile" routing="path" />
    </div>
  </div>
);

export default SignInPage;
