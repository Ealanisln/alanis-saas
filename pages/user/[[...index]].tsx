import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <UserProfile routing="path" path="/user" />
          </div>
        </div>
      </div>
    </section>
  );
}
