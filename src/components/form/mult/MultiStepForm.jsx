"use client";
import "./multi.css";

import Property from "../Property";
import Address from "../Address";
import AboutPlace from "../AboutPlace";
import { useForm } from "react-hook-form";
// import { button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stepper from "../stepper/stepper";
import {
  setAddress,
  setProperty,
  setAboutPlace,
  setplaceDescription,
  setmovingAddress,
  setmovingPlaceDescription,
} from "../../../app/store/reducers/formSlice";
import PlaceDescription from "../PlaceDescripation";
import Calendar from "../Calendar";
import Inventory from "../Inventory";

export default function MultiStepForm() {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const page = {
    Address: 1,
    Property: 2,
    AboutPlace: 3,
    PlaceDescription: 4,
    movingAddress: 5,
    movingPlaceDescription: 6,
    Calendar: 7,
    Inventory: 8,
  };
  const step = [
    "Pickup Address",
    "Property",
    "About Place",
    "Place Description",
    "Moving Address",
    "Moving Place Description",
    "Moving Date",
    "Inventory",
  ];

  const [currentStep, setCurrentStep] = useState(page.Address);

  const componentMap = {
    [page.Address]: (prop) => <Address moving="from" {...prop} />,
    [page.Property]: Property,
    [page.AboutPlace]: AboutPlace,
    [page.PlaceDescription]: (prop) => (
      <PlaceDescription moving="pickup" {...prop} />
    ),
    [page.movingAddress]: (prop) => <Address moving="to" {...prop} />,
    [page.movingPlaceDescription]: (prop) => (
      <PlaceDescription moving="delivery" {...prop} />
    ),
    [page.Calendar]: (prop) => <Calendar {...prop} />,
    [page.Inventory]: Inventory,
  };

  const CurrentComponent = componentMap[currentStep];
  const totalSteps = Object.keys(page).length;
  const buttonText = currentStep === totalSteps ? "Submit" : "Next";

  const onSubmit = (data) => {
    if (currentStep === page.Address) {
      dispatch(setAddress({ PickupAddress: data.pickupAddress }));
    } else if (currentStep === page.Property) {
      dispatch(setProperty({ property: data.property }));
    } else if (currentStep === page.AboutPlace) {
      dispatch(setAboutPlace({ AboutPlace: data.bedrooms }));
    } else if (currentStep === page.PlaceDescription) {
      dispatch(
        setplaceDescription({ placeDescription: data.placeDescription }),
      );
    } else if (currentStep === page.movingAddress) {
      dispatch(setmovingAddress({ movingAddress: data.deliveryAddress }));
    } else if (currentStep === page.movingPlaceDescription) {
      dispatch(
        setmovingPlaceDescription({
          movingPlaceDescription: data.movingPlaceDescription,
        }),
      );
    } else if (currentStep === page.Inventory) {
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    console.log("Form Data in Redux:", formData);
  }, [formData]);

  const backHandler = () => {
    if (currentStep > page.Address) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className=" w-full">
        {/* <header className=" fixed">
   <Stepper step={step} currentStep={currentStep} setCurrentStep={setCurrentStep} className=" " />

  </header> */}

        <div className=" mt-20 grid grid-cols-[4fr_2fr]">
          <main className="multi-step-form rounded-md border p-6 ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <CurrentComponent
                register={register}
                errors={errors}
                setValue={setValue}
                getValues={getValues}
              />
              <div className=" flex gap-8">
                {currentStep > page.Address && (
                  <button
                    className="btn hover:bg-[var(--primary)]"
                    onClick={backHandler}
                    type="button"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className=" btn hover:bg-[var(--primary)]"
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </main>

          <aside>
            {formData?.address.PickupAddress ? (
              <div className=" mx-auto w-[25rem] border p-8 ">
                <span>Your move</span>
                <h3>Pickup & delivery</h3>
                <div className="pick mt-6">
                  {formData?.address?.PickupAddress && (
                    <h3 className=" address text-[18px] ">
                      {formData.address.PickupAddress}
                    </h3>
                  )}
                  <div className=" mx-4">
                    {formData?.property?.property && (
                      <span className=" mr-4">
                        {formData.property.property}
                      </span>
                    )}{" "}
                    {formData?.aboutPlace?.AboutPlace && (
                      <span className=" ">
                        {formData?.aboutPlace?.AboutPlace} Bedroom
                      </span>
                    )}
                    <h4 className="place">
                      {formData?.placeDescription?.placeDescription?.place?.map(
                        (p, index) => (
                          <span
                            key={index}
                            className="mr-4 mt-3 inline-block rounded-[3px] bg-zinc-300 px-5 py-0.5"
                          >
                            {p === "Stairs"
                              ? `Stairs-${formData?.placeDescription?.placeDescription?.stairs} Flights`
                              : p}
                          </span>
                        ),
                      )}

                      {formData?.placeDescription?.placeDescription?.street.map((p,index)=>(
                        <span  key={index} className=" inline-block mr-4 bg-zinc-300 px-5 py-.5 rounded-[3px] mt-3  " >{p}</span>
                      ))
                      }

                    </h4>
                  </div>
                </div>

                <div className="delivery mt-6   border-b-2 border-black-1 pb-4">
                  {formData?.movingAddress?.movingAddress && 
                    <h3 className=" address text-[18px] ">
                      {formData.movingAddress.movingAddress}
                    </h3>
                  }

                   <div className=" mx-4">
                    
                    <h4 className="place">
                      {formData?.movingPlaceDescription?.movingPlaceDescription?.place?.map(
                        (p, index) => (
                          <span
                            key={index}
                            className="mr-4 mt-3 inline-block rounded-[3px] bg-zinc-300 px-5 py-0.5"
                          >
                            {p === "Stairs"
                              ? `Stairs-${formData?.movingPlaceDescription?.movingPlaceDescription?.stairs} Flights `
                              : p}
                          </span>
                        ),
                      )}

                      {formData?.movingPlaceDescription?.movingPlaceDescription?.street.map((p,index)=>(
                        <span key={index} className=" inline-block mr-4 bg-zinc-300 px-5 py-.5 rounded-[3px] mt-3  " >{p}</span>
                      ))
                      
                      }
                    </h4>
                  </div>
                </div>


                <div className="date">
                  {formData?.calendar?.dates && 
                  <div className="flex justify-between">
                    <span className="">Pickup date</span>
                    <span>{formData?.calendar?.dates}</span>
                    
                    </div>}
                </div>
              </div>
            ) : (
              ""
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
