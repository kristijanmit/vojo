import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const HomeFeatures = ({ feature }) => {
  return (
    <section id="o-nama" className="section bg-theme-light home-features">
      <div className="container">
        <div className="text-center">
          <p className="mt-4 white text-top">{markdownify(feature.title)}</p>
        </div>
        <div className="mt-8 grid gap-x-14 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 feature-card-list">
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
      </div>
    </section>
  );
};

export default HomeFeatures;
