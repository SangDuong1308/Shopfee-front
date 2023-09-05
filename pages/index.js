import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";

export default function HomePage({featuredProduct}) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '64f5f53448d8fa2d0ecb9ef3';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    },
  };
}