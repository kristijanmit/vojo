import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Cta({ cta }) {
  return (
    <section className="section dark">
      <div className="column-section section container rounded-xl ">
        <div className="mb-8 text-center">
          {markdownify(
            cta.title,
            "h2",
            "mx-auto max-w-[400px] font-bold leading-[44px] white"
          )}
          {markdownify(cta.content, "p", "mt-3")}
        </div>
        <div className="mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-12 wrap">
            {cta.images.map((e) => <Image
              className="w-full gallery-image"
              src={e}
              alt="call to action image"
              width={325}
              height={206}
            />)}
          </div>
        </div>
        <div className="mt-5 text-center md:col-6 lg:col-5 md:mt-0 md:text-center">
          {cta.button.enable && (
            <Link
              className="btn btn-primary mt-4"
              href={cta.button.link}
              rel={cta.button.rel}
            >
              {cta.button.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Cta;
