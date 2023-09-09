import Image from "next/image";
import { montserrat } from "@/app/layout";

function PreviewCard() {
  return (
    <div className="flex flex-col">
      <div className={`${montserrat.className} text-[--colors-grey-blue] tracking-widest`}>
        PERFUME
      </div>
      <h2 className=""></h2>Gabrielle Essence Eau De Parfum
      <p className={`${montserrat.className} text-[--colors-grey-blue]`}>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="flex">
        $149.99 <span className="line-through text-[--colors-grey-blue]">$169.99</span>
      </div>
      <button className="relative">
        <Image
          src="/icon-cart.svg"
          width={18}
          height={18}
          alt="Shopping Cart Icon"
          className="absolute bottom-0 left-50 text-sky-500"
        />
        Add to Cart
      </button>
    </div>
  );
}

export default PreviewCard;
