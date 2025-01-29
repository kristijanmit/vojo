import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import config from "../../config/config.json";

const HomeFeatures = ({ feature }) => {
  const { enable, label, link } = config.nav_button;
  return (
    <section id="o-nama" className="section bg-theme-light home-features">
      <div className="container">
        <div className="text-center">
          <p className="mt-4 white text-top">{markdownify(feature.title)}</p>
        </div>
        <div className="mt-8 grid gap-x-14 gap-y-14 sm:grid-cols-12 lg:grid-cols-3 feature-card-list">
          {feature.features.map((item, i) => (
            <div
              className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
              key={`feature-${i}`}
            >
              {item.icon && (
                <Image
                  className="mx-auto white"
                  src={item.icon}
                  width={70}
                  height={70}
                  alt=""
                />
              )}
              <div className="mt-4">
                {markdownify(item.name, "h3", "h5 white")}
                <p className="mt-3 feature-paragraph">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="mt-4 white text-bottom">
            {markdownify(feature.subtitle)}
          </p>
        </div>
        <div className="d-flex order-1 ml-auto hidden min-w-[200px] items-center justify-center md:order-2 md:ml-0 md:flex button">
          <Link className="btn btn-primary z-0 py-[14px] bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300" href={link} rel="">
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
