








import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";

const product = {
  name: "Decor Wooden Stool",
  href: "#",
  image: "/img/products/one.jpg",
  price: "$28",
  category: "Accessories"
};


type iAppProps = {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    category: string;
  };
};

function ProductCard({ item }: iAppProps) {
  return (
    <div className="w-[300px] group relative space-y-4">
      <figure className="group-hover:opacity-90">
        <Image
          className="w-full rounded-lg aspect-square"
          src={item.images[0]}
          width={300}
          height={500}
          alt={item.name}
        />
      </figure>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg">
            <Link href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {item.name}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">{item.category}</p>
        </div>
        <p className="text-lg font-semibold">{item.price}</p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="icon" className="flex-shrink-0">
          <HeartIcon className="size-4" />
        </Button>
        <Button variant="outline" className="w-full">
          <PlusIcon className="size-4 me-1" /> Add to Card
        </Button>
      </div>
    </div>
  );
}















export default ProductCard;
