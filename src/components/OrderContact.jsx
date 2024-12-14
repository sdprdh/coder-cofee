import map from '../assets/world-map.png';
import {useId} from "react";

export const OrderContact = () => {
    const nameId = useId();
    const countryId = useId();
    const zipcodeId = useId();

    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center p-4 md:p-8 mb-10">
            <div className="space-y-4 md:space-y-8">
                <h1 className="text-2xl md:text-4xl font-bold text-darkGray font-serif">
                    Buy our products from anywhere
                </h1>
                <div className="flex items-center gap-4">
                    <input
                        id={nameId}
                        name="name"
                        type="text"
                        placeholder="Name"
                        autoComplete='name'
                        className="input-style w-full lg:w-[150px] border rounded-md p-2 "
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        className="input-style w-full border rounded-md p-2 "
                    />
                </div>
                <div className="flex items-center gap-4">
                    <input
                        id={countryId}
                        name="country"
                        type="text"
                        placeholder="Country"
                        autoComplete="country-name"
                        className="input-style w-full border rounded-md p-2 "
                    />
                    <input
                        id={zipcodeId}
                        name="zipcode"
                        type="text"
                        placeholder="Zipcode"
                        autoComplete="postal-code"
                        className="input-style w-full lg:w-[150px] border rounded-md p-2 "
                    />
                </div>
                <button className="bg-primary py-2 text-white rounded-md hover:bg-primaryDark w-full">Order Now</button>
            </div>
            <div className="col-span-2">
                <img
                    src={map}
                    alt="World Map"
                    className="w-full sm:w-[500px] mx-auto"
                />
            </div>
        </section>
    );
};
