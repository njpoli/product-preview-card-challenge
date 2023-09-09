import Image from "next/image";
import { montserrat } from "@/app/layout";

function PreviewCard() {
  return (
    <div className="flex flex-col sm:flex-row w-[300px] sm:w-[510px] bg-[--colors-white] rounded-lg">
      <div>
        <Image src="/image-product-desktop.jpg" height={200} width={255} alt="Desktop perfume image" className="sm:block hidden h-full min-w-[250px] rounded-l-lg"/>
        <Image src="/image-product-mobile.jpg" height={300} width={300} alt="Mobile perfume image" className="sm:hidden w-full rounded-t-lg"/>
      </div>
      <div className="px-5 space-y-4 py-5">
        <div
          className={`${montserrat.className} text-[--colors-grey-blue] tracking-[.3em] font-medium text-sm`}
        >
          PERFUME
        </div>
        <h2 className="text-3xl text-[--colors-dark-blue]">Gabrielle Essence Eau De Parfum</h2>
        <p className={`${montserrat.className} text-[--colors-grey-blue] text-sm font-medium`}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex space-x-2 items-center">
          <span className="text-[--colors-dark-cyan] text-3xl">$149.99</span>
          <span className={ `${montserrat.className} line-through text-[--colors-grey-blue] font-medium text-sm` }>
            $169.99
          </span>
        </div>
        <button className="text-[--colors-white] rounded-md bg-[--colors-dark-cyan] flex items-center justify-center space-x-2 py-3 w-full max-w-md hover:bg-[--colors-darker-cyan]">
          <Image
            src="/icon-cart.svg"
            width={16}
            height={16}
            alt="Shopping Cart Icon"
          />
          <div className={`${montserrat.className}`}>Add to Cart</div>
        </button>
      </div>
    </div>
  );
}

export default PreviewCard;
