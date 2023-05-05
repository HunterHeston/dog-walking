import DropInForm from "@/components/dropInForm";
import OvernightForm from "@/components/overnightForm";
import Select, { Option } from "@/components/tailwindui/select";
import WalkForm from "@/components/walkForm";
import { useRouter } from "next/router";

import { useState } from "react";

const walk: Option = {
  id: 1,
  name: "Dog Walk",
  param: "dog-walk",
};

const dropIn: Option = {
  id: 2,
  name: "Drop In",
  param: "drop-in",
};

const overnight: Option = {
  id: 3,
  name: "Overnight",
  param: "overnight",
};

const serviceMap: { [key: string]: Option } = {
  "dog-walk": walk,
  "drop-in": dropIn,
  overnight: overnight,
};

export default function Contact() {
  const router = useRouter();
  const { service } = router.query;
  console.log(service);
  const [selected, setSelected] = useState<Option>(
    serviceMap[service as string] || walk
  );

  return (
    <>
      <main className="py-36 px-4 flex flex-col items-center">
        <div className="sm:w-1/2">
          <div className="mb-10">
            <Select
              options={[walk, dropIn, overnight]}
              selected={selected}
              setSelected={setSelected}
            ></Select>
          </div>
          {selected.id == dropIn.id && <DropInForm></DropInForm>}
          {selected.id == walk.id && <WalkForm></WalkForm>}
          {selected.id == overnight.id && <OvernightForm></OvernightForm>}
        </div>
      </main>
    </>
  );
}
