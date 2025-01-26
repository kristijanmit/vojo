import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import config from "../../config/config.json";

const HomeBanner = ({ banner }) => {
  const { enable, label, link } = config.nav_button;
  return (
    <section className="section pb-[50px] home-section">
      <div className="container">
        <div className="row text-center">
          <div className="mx-auto lg:col-10">
            <h1 className="font-primary font-bold text-white">{banner.title}</h1>
            <p className="mt-4">{markdownify(banner.content)}</p>
            {banner.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={banner.button.link}
                rel={banner.button.rel}
              >
                {banner.button.label}
              </Link>
            )}
            <div className="d-flex order-1 ml-auto hidden min-w-[200px] items-center justify-center md:order-2 md:ml-0 md:flex">
              <Link className="btn btn-primary z-0 py-[14px] bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300" href={link} rel="">
                {label}
              </Link>
            </div>
            {/* <Image
              className="mx-auto mt-12"
              src={banner.image}
              width={750}
              height={390}
              alt="banner image"
              priority
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
