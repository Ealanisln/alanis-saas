import SectionTitle from "@/components/Common/SectionTitle";
import Link from "next/link";

function Cancel() {
  return (
<section className="relative z-10 bg-primary/[.03] pt-16 md:pt-20 lg:pt-28">
      <div className="container p-8">
        <SectionTitle
          title="Payment cancelled. "
          paragraph="You have not been charged!"
          center
        />
        <div className="container p-8 text-center">
            <Link href='/'>
          <h3>Return to Home</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cancel;
