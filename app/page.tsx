import Image from 'next/image'
const gallery = [
  ['https://drive.google.com/uc?export=view&id=1PqPZ1m88wP6V9vL5PVTZaJariDL--Y02','https://drive.google.com/uc?export=view&id=1VS7VRmagMXliW3RKCqzRTQ6wq2JeEyG1','https://drive.google.com/uc?export=view&id=1wfngBA5gXZ-eoXu1lgH06RNqc0LSDItP'],
  ['https://drive.google.com/uc?export=view&id=1k-ta-K-IUtef7CkRyn-u96ihfQYqXSnV','https://drive.google.com/uc?export=view&id=1AzBfQ1tsTd4vmtq2E9p7r7TAbkCbbQsd','https://drive.google.com/uc?export=view&id=1X8wFLoFI5tasaGyLlbXwfnfJR6cUszNM'],
  ['https://drive.google.com/uc?export=view&id=1-EvbG-aQyHpjCYh9xN-ZgZfLMeCpJSEE','https://drive.google.com/uc?export=view&id=1p0qiStO-k5aI3YWaoJ6XBtGqrwnkGCjH','https://drive.google.com/uc?export=view&id=1BUH3vJR28aVIDladesbIIZmeOMwglJGw']
];

export default function Page(){
  return (
    <div className="abstract-bg">
      <div className="banner-shape">
        <div className="container py-12 text-center text-white">
          <h1 style={{fontFamily:'Verdana'}} className="text-4xl font-bold">IAM Miguela Manalo</h1>
        </div>
      </div>
      <div className="container py-8">
        <h2 className="text-2xl font-semibold mb-3">Welcome to Your Trusted IAM Worldwide Online Store</h2>
        <p>We are a legitimate and registered distributor of IAM Worldwide products, bringing you a quick, convenient, and stress-free way to stay healthy. No more doubts about authenticity—every item we offer is 100% genuine and sourced directly from IAM.</p>
        <p className="mt-3">With just a few clicks, you can add your favorite products to your cart, checkout securely, and have them delivered right to your doorstep. Our mission is to make health and wellness accessible, simple, and reliable—because you deserve only the best.</p>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {gallery.flatMap((row, rIdx) => row.map((src, cIdx) => (
            <div key={`${rIdx}-${cIdx}`} className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden card ${cIdx===1 ? 'translate-y-[-12px]' : ''}`}>
              <Image src={src} alt="gallery" fill className="object-cover" />
            </div>
          )))}
        </div>

        <h3 className="mt-8 text-xl font-semibold">How to Order</h3>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li>Login and Make an account</li>
          <li>Go to Products tab and choose prefer item</li>
          <li>Go to Cart and check the products if completed</li>
          <li>Clicked complete order when ready to pay</li>
          <li>Will automatically go to below of cart tab, check necessary details (Name, Phone Number, Address with landmark), Then complete.</li>
          <li>Payment will be hold until the seller indicate the delivery fee</li>
          <li>Once the seller added the delivery fee and approved the items, a message will automatically send to customer for availability and payment</li>
          <li>Go to Payment and will see invoice of the products ordered.</li>
          <li>Once sure, clicked Payment. Complete Payment using gcash - Paymongo</li>
          <li>Order invoice will be sent to gmail address registered, stating the products name, image, quantity, price each, and total price at the bottom. Also the order details, name, phone number, address of the recipient.</li>
        </ol>
      </div>
    </div>
  )
}
