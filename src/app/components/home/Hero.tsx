import Image from "next/image";
let pic =
  "https://assets-global.website-files.com/635273ea37c256ef2835d522/654a36b6f78e92b5209148af_Kikin_Illustrations_Scene_01_RGB%202.svg";
export default function Hero() {
  return (
    <>
      <section className=" bg-green py-[8vh]">
        <div className=" w-full mx-auto">
          <div className=" text-center">
            <p className=" text-9xl font-bungee text-off-white">FINANCING</p>
            <p className=" text-9xl font-bungee text-primary-dark">
              THE FUTURE
            </p>
          </div>
          <div className="  w-full text-center">
            <p className=" text-off-white mx-auto mb-5 leading-7 text-center max-w-[32vw]">
              Pay suppliers faster, manage invoices, and extend cash for longer.
              Get access to funding without giving up equity, so that you can
              focus on growing your company.
            </p>
            <button className=" btn-primary  relative z-10  mx-auto">
              GET FUNDING
            </button>
          </div>
        </div>
        <div className=" relative z-0 -mt-40">
          <Image
            width={500}
            height={100}
            className="w-full"
            src={pic}
            alt="yo"
          />
        </div>
      </section>
    </>
  );
}
