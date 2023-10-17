import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start  gap-2 justify-between">
      <div className="flex-1 w-full m-2 border-2 shadow-md border-gray-200">
        <Image
          src="/black.jpg"
          alt="tshirt"
          width={650}
          height={2000}
          className="relative "
        />
        <div className="flex flex-col absolute gap-2 justify-center items-center top-40 left-48 ">
          <p className="font-extrabold text-3xl text-white">Text Here</p>
          <Image
            src="/image.png"
            alt="image"
            width={300}
            height={100}
            className=" h-[200px]"
          />
          <p className="font-extrabold text-3xl text-white">Text Here</p>
        </div>
      </div>
      <div className="flex flex-col border-2 gap-3 mt-2 px-7 py-4 border-gray-200 w-[30%]">
        <h1 className="font-normal text-center text-3xl">Settings</h1>
        <div className="flex flex-col gap-3">
          <h2 className="text-gray-600 text-xl">Change T-shirt Color</h2>
          <div className="flex gap-5">
            <Image src="/white.jpeg" alt="whiteshirt" width={50} height={50} />
            <Image src="/black.jpg" alt="blackshirt" width={50} height={50} />
            <Image src="/gray.jpeg" alt="grayshirt" width={50} height={50} />
            <Image src="/blue.jpeg" alt="blueshirt" width={50} height={50} />
            <Image src="/red.png" alt="redshirt" width={50} height={50} />
          </div>
          <div className=" border-b-2 border-gray-400" />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-gray-600 text-xl">Change Image</h2>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <input type="file" name="image" id="file" />
              <progress
                id="file"
                value="32"
                max="100"
                className="h-3"
              ></progress>
            </div>
            <button
              type="submit"
              className="px-3 py-2 bg-[#1ba3a5] w-fit text-white"
            >
              UPLOAD NOW
            </button>
          </div>
          <div className=" border-b-2 border-gray-400" />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-gray-600 text-xl">Write Text</h2>
          <div className="flex flex-col">
            <label htmlFor="upperText" className="text-gray-500">
              Upper Text
            </label>
            <input
              type="text"
              id="upperText"
              className="border-b-2 border-gray-400 outline-none text-center p-2"
              placeholder="Upper Text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lowerText" className="text-gray-500">
              Lower Text
            </label>
            <input
              type="text"
              id="lowerText"
              className="border-b-2 border-gray-400 outline-none text-center p-2"
              placeholder="Lower Text"
            />
          </div>
          <div className="flex gap-5 mt-2">
            <div className="flex flex-col gap-3 flex-1">
              <p className="text-gray-500">Text Size</p>
              <input
                type="range"
                name="size"
                id="size"
                className="cursor-pointer appearance-none range block w-full bg-gray-200 rounded-full h-1"
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <p className="text-gray-500">Text Color</p>
              <div className="flex gap-3">
                <input
                  className="selected"
                  type="radio"
                  name="color"
                  id="black"
                />
                <label htmlFor="black" className="text-gray-400">
                  Black
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  className="selected"
                  type="radio"
                  name="color"
                  id="white"
                />
                <label htmlFor="white" className="text-gray-400">
                  White
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  className="selected"
                  type="radio"
                  name="color"
                  id="blue"
                />
                <label htmlFor="blue" className="text-gray-400">
                  Blue
                </label>
              </div>
              <div className="flex gap-3">
                <input
                  className="selected"
                  type="radio"
                  name="color"
                  id="red"
                />
                <label htmlFor="red" className="text-gray-400">
                  Red
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
