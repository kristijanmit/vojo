import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const ContactInfo = () => {
  const { copyright, footer_content } = config.params;
  const { contactInfo } = menu;
  return (
    <footer className="upper-footer">
      <div className="container">
        {/* footer menu */}
        <div className="row">
          <div className="md-12 sm:col-6 lg:col-6 title">
            <Link href="/" aria-label="Bigspring">
              {markdownify(
                "Uvek smo srećni da",
                "h2",
                "mx-auto max-w-[700px] leading-[50px]",
              )}
              {markdownify(
                "Vam pomognemo.",
                "h2",
                "mx-auto max-w-[700px]  leading-[50px]",
              )}
            </Link>
          </div>
          {contactInfo.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-3 email" key={col.name}>
                {markdownify(col.name, "h2", "h4")}
                <ul className="mt-6 content">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* social icons */}
          {/* <div className="md-12 sm:col-6 lg:col-3">
            <Link href="/" aria-label="Bigspring">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6")}
            <Social source={social} className="social-icons mb-8" />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default ContactInfo;
