import DashboardCard from "../../components/admin/DashboardCard";

function Dashboard() {
  return (
    <div>

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="mt-3 text-slate-600">
        Overview of your portfolio content.
      </p>


      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <DashboardCard
          title="Projects"
          value="3"
        />

        <DashboardCard
          title="Skills"
          value="12"
        />

        <DashboardCard
          title="Technologies"
          value="8"
        />

      </div>


      <section className="mt-10 rounded-xl border bg-white p-6">

        <h2 className="text-xl font-bold">
          Recent Projects
        </h2>


        <div className="mt-6 space-y-4">

          <div className="flex justify-between border-b pb-4">
            <span>
              Real Estate Portal
            </span>

            <button className="text-blue-600">
              Edit
            </button>
          </div>


          <div className="flex justify-between border-b pb-4">
            <span>
              Bird App
            </span>

            <button className="text-blue-600">
              Edit
            </button>
          </div>


          <div className="flex justify-between">
            <span>
              Portfolio Website
            </span>

            <button className="text-blue-600">
              Edit
            </button>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;