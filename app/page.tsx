import PreviewCard from "./components/ui/preview-card";
import Footer from "./components/ui/footer";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center h-screen"
        role="main"
      >
        <PreviewCard />
        <Footer />
      </div>
    </>
  );
}
