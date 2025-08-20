"use client";
import { useSelector } from "react-redux";

export default function Address({ register, errors,moving }) {
  // const { address,movingAddress } = useSelector((state) => state.form);
  const Feildname = moving ==="from" ? "pickupAddress":"deliveryAddress";
  const currentAddress = moving ==="from" ? 'address' : 'movingAddress';

  return (
    <div className="address-form">
      <h2>Where are you moving {moving} ?</h2>
      <p>Please tell us the exact address you're moving {moving}</p>
      <div className="flex flex-col items-start gap-8">
        <input
          {...register(Feildname, { required: "Pickup address is required" })}
          defaultValue={currentAddress?.Feildname || ""}
          className="w-120 border-zinc-600 border p-1 mt-6"
          placeholder="Pickup address"
        />
        {errors[Feildname] && (
          <p className="text-red-500">{errors[Feildname].message}</p>
        )}
      </div>
    </div>
  );
}
