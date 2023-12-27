const page2 = () => {
    return (

        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <header className="bg-cyan-500 text-white w-full py-4">
          <h1 className="text-4xl font-bold text-center">Urbanfits</h1>
        </header>
        <main className="container mx-auto my-8 text-center">
          <section className="my-12">
            <h2 className="text-3xl font-semibold">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {/* Your product cards or items go here */}
              {/* Example: */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Jersey Name</h3>
                <p className="text-gray-700">Description of the jersey...</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  View Details
                </button>
              </div>
              {/* More product cards */}
            </div>
          </section>
          <section className="my-12">
            <h2 className="text-3xl font-semibold">About Us</h2>
            <p className="mt-4 text-gray-700">
              We are a passionate team dedicated to providing high-quality jerseys for sports enthusiasts.
            </p>
          </section>
          <section className="my-12">
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="mt-4 text-gray-700">
              Feel free to contact us at example@email.com for any inquiries.
            </p>
          </section>
        </main>
        <footer className="bg-blue-500 text-white w-full py-4">
          <p className="text-center">&copy; 2023 Jersey Hub. All rights reserved.</p>
        </footer>
      </div>
      );
}
 
export default page2;

