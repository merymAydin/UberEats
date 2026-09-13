import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="min-h-[400px]">


      <div className="flex w-full justify-between bg-[#FAFAFA] h-[150px] px-50">


        <div className="flex items-center text-3xl font-bold">
          Bandage
        </div>

        <div className="flex items-center gap-3 text-cyan-500">
          <i className="fa-brands fa-instagram text-2xl"></i>
          <i className="fa-brands fa-facebook text-2xl"></i>
          <i className="fa-brands fa-square-twitter text-2xl"></i>
        </div>

      </div>


      <div className="flex justify-between gap-5 px-50 pt-10">
        <div className="flex flex-col gap-2">
          <p className="font-bold">Company Info</p>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Legal</p>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Features</p>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Resources</p>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Get In Touch</p>
          <div className="flex">
            <input
              className="w-[250px] h-[50px] px-4  bg-[#FAFAFA]"
              type="email"
              placeholder="Your Email"
            />

            <button className="bg-cyan-500 text-white px-6 h-[50px]">
              Subscribe
            </button>
          </div>

        </div>

      </div>


    </footer>
  )
}

export default Footer
