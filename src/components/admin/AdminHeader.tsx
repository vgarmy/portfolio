function AdminHeader() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">

        <h1 className="text-xl font-bold">
          Portfolio CMS
        </h1>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-300" />

          <span className="font-medium">
            Vladimir
          </span>
        </div>

      </div>
    </header>
  );
}

export default AdminHeader;