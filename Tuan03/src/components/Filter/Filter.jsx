export default function Filter() {
  return (
    <div className="filter pl-24 pt-14 pb-24 col-span-4">
      <div className="border border-gray-300 rounded-xl p-5">
        <div className="flex">
          <img src={"public/list_filter.png"} alt="List" />
          <h2 className="font-bold text-xl ">FILTERS</h2>
        </div>
        <div className="flex mt-10 mb-4">
          <h4 className="font-bold">Type</h4>
        </div>
        <div className=" border-b border-grey-300 mb-4">
          <div className="grid grid-cols-2 gap-2 mb-5">
            <div className="flex items-center">
              <img src={"public/checkbox.png"} alt="" />
              <p>Pan-fried</p>
            </div>
            <div className="flex items-center">
              <img src={"public/checkbox.png"} alt="" />
              <p>Stir-fried</p>
            </div>
            <div className="flex items-center">
              <img src={"public/checkboxpink.png"} alt="" />
              <p>Grilled</p>
            </div>
            <div className="flex items-center">
              <img src={"public/checkboxpink.png"} alt="" />
              <p>Roasted</p>
            </div>
            <div className="flex items-center">
              <img src={"public/checkbox.png"} alt="" />
              <p>Sautees</p>
            </div>
            <div className="flex items-center">
              <img src={"public/checkbox.png"} alt="" />
              <p>Baked</p>
            </div>
            <div className="flex items-center">
              <img src={"public/checkbox.png"} alt="" />
              <p>Steamed</p>
            </div>
            <div className="flex items-center">
              <img src={"public/checkbox.png"} alt="" />
              <p>Stewed</p>
            </div>
          </div>
        </div>
        <div className="flex mb-3">
          <h4 className="font-bold">Time</h4>
        </div>
        <div className=" border-b border-grey-300 pb-6 ">
          {/* <div className="time flex text-xs">
            <p>30 minutes</p>
            <p>50 minutes</p>
          </div> */}
          <img src={"public/slider.png"} alt="" />
        </div>
        <div className="flex mt-10 mb-4">
          <h4 className="font-bold">Rating</h4>
        </div>

        <div className="flex flex-col gap-3 border-b border-grey-300 pb-5 mb-10">
          <div className="flex">
            <img src={"public/checkbox.png"} alt="" />
            <img src={"public/rating_5.png"} alt="" />
          </div>
          <div className="flex">
            <img src={"public/checkbox.png"} alt="" />
            <img src={"public/rating_4.png"} alt="" />
          </div>
          <div className="flex">
            <img src={"public/checkboxpink.png"} alt="" />
            <img src={"public/rating_3.png"} alt="" />
          </div>
          <div className="flex">
            <img src={"public/checkboxpink.png"} alt="" />
            <img src={"public/rating_2.png"} alt="" />
          </div>
          <div className="flex">
            <img src={"public/checkboxpink.png"} alt="" />
            <img src={"public/rating_1.png"} alt="" />
          </div>
        </div>
        <div className="text-center">
          <button className="bg-pink-600 text-white px-10 text-center mb-3 rounded-lg pt-2 pb-2">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
