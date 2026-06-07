import Navbar from "../../../../components/Navbar";
import ApplicationForm from "../../../../components/ApplicationForm";

export default function ApplyPage() {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-3xl p-8">
        <h1 className="mb-6 text-4xl font-bold">
          Apply for Job
        </h1>

        <ApplicationForm />
      </div>
    </>
  );
}