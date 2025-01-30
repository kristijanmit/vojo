"use client";

import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
// import Link from "next/link";

function Cta({ cta }) {
  return (
    <section id="galerija" className="section dark pb-0">
      <div className="column-section section container rounded-xl gallery">
        <div className="mb-8 text-center">
          {markdownify(
            cta.title,
            "h2",
            "mx-auto max-w-[1000px] font-medium leading-[34px] white text-[24px]",
          )}
          {markdownify(cta.content, "p", "mt-3 text-[26px]")}
        </div>
        <div className="mt-10 mx-auto items-center justify-center">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 md:w-[1000px] lg:w-[1000px]">
            {cta.images.map((e) => (
              <Image
                className="w-full aspect-[4/3] object-cover rounded-lg"
                src={e}
                alt="call to action image"
                width={330}
                height={250}
              />
            ))}
          </div>
        </div>
        {/* <div className="mt-20 text-center md:col-6 lg:col-5 md:mt-0 md:text-center">
          {cta.button.enable && (
            <Link
              className="btn btn-primary mt-14"
              href={cta.button.link}
              rel={cta.button.rel}
            >
              {cta.button.label}
            </Link>
          )}
        </div> */}
      </div>
    </section>
  );
}

export default Cta;
