import { ParallaxScrollSecond } from "../Ui/Galleryscroll";
import Footer from "../Footer";
import Navbar from "../NavbarFn";

const images = [
  "/images/image1.jpg",
  "/images/cb2.jpg",
  "/images/cb3.jpg",
  "/images/cbs1.jpg",
  "/images/ranjan.jpg",
  "/images/mahinda.jpg",
  // Add more images here
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <div>
        <ParallaxScrollSecond images={images} className="your-custom-class" />
      </div>
      <Footer />
    </>
  );
}
