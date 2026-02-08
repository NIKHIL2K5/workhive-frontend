function Served() {
  return (
    <section className="bg-[#FFFEE4] py-10">
      {/* Title */}
      <h1 className="text-center text-4xl font-extrabold tracking-wide mb-8" id="Served">
        SERVED
      </h1>

      {/* Stats */}
      <div className="flex justify-center gap-40">
        {/* Freelancers */}
        <div className="text-center">
          <p className="text-3xl font-bold">100 +</p>
          <p className="text-xl font-semibold mt-2">Freelancers</p>
        </div>

        {/* Clients */}
        <div className="text-center">
          <p className="text-3xl font-bold">120 +</p>
          <p className="text-xl font-semibold mt-2">Clients</p>
        </div>
      </div>
      <hr className="mt-12"/>
    </section>
  );
}

export default Served;